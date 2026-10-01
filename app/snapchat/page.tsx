"use client";

import { useRef, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function SnapchatPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(0);
  const [currentFile, setCurrentFile] = useState("");

  const CHUNK_SIZE = 4 * 1024 * 1024; // 4 Mo

  const uploadChunkWithProgress = (
    chunk: Blob,
    uploadUrl: string,
    contentRange: string,
    fileType: string,
    alreadyUploaded: number,
    totalSize: number
  ): Promise<any> => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open("POST", "/api/google-drive/chunk");

      xhr.setRequestHeader(
        "Content-Type",
        "application/octet-stream"
      );

      xhr.setRequestHeader(
        "x-upload-url",
        uploadUrl
      );

      xhr.setRequestHeader(
        "x-content-range",
        contentRange
      );

      xhr.setRequestHeader(
        "x-file-type",
        fileType
      );

      xhr.upload.onprogress = (event) => {
        if (!event.lengthComputable) return;

        const currentUploaded =
          alreadyUploaded + event.loaded;

        const percentage = Math.min(
          99,
          Math.round(
            (currentUploaded / totalSize) * 100
          )
        );

        setProgress(percentage);
      };

      xhr.onload = () => {
        try {
          const data = JSON.parse(xhr.responseText);

          if (
            xhr.status >= 200 &&
            xhr.status < 300 &&
            data.success
          ) {
            resolve(data);
          } else {
            reject(
              new Error(
                data.error ||
                  "Erreur pendant l'envoi."
              )
            );
          }
        } catch {
          reject(
            new Error(
              "Réponse invalide pendant l'envoi."
            )
          );
        }
      };

      xhr.onerror = () => {
        reject(
          new Error(
            "Connexion interrompue pendant l'envoi."
          )
        );
      };

      xhr.send(chunk);
    });
  };

  const uploadFileInChunks = async (
    file: File,
    uploadUrl: string
  ) => {
    let start = 0;

    while (start < file.size) {
      const endExclusive = Math.min(
        start + CHUNK_SIZE,
        file.size
      );

      const endInclusive =
        endExclusive - 1;

      const chunk = file.slice(
        start,
        endExclusive
      );

      const contentRange =
        `bytes ${start}-${endInclusive}/${file.size}`;

      const data =
        await uploadChunkWithProgress(
          chunk,
          uploadUrl,
          contentRange,
          file.type ||
            "application/octet-stream",
          start,
          file.size
        );

      start = endExclusive;

      const percentage = Math.round(
        (start / file.size) * 100
      );

      setProgress(
        data.complete
          ? 100
          : Math.min(99, percentage)
      );

      if (data.complete) {
        break;
      }
    }

    setProgress(100);
  };

  const handleFiles = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (!files || files.length === 0) {
      return;
    }

    const selectedFiles = Array.from(files);

    setUploading(true);
    setMessage("");
    setProgress(0);

    try {
      for (
        let i = 0;
        i < selectedFiles.length;
        i++
      ) {
        const file = selectedFiles[i];

        setCurrentFile(file.name);
        setProgress(0);

        setMessage(
          `Envoi ${i + 1} sur ${selectedFiles.length}`
        );

        /*
          ==========================================
          1. CRÉER LA SESSION GOOGLE DRIVE
          ==========================================
        */
        const sessionResponse = await fetch(
          "/api/google-drive/resumable",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              name: file.name,

              type:
                file.type ||
                "application/octet-stream",

              size: file.size,
            }),
          }
        );

        const sessionData =
          await sessionResponse.json();

        if (
          !sessionResponse.ok ||
          !sessionData.success ||
          !sessionData.uploadUrl
        ) {
          throw new Error(
            sessionData.error ||
              "Impossible de préparer l'envoi."
          );
        }

        /*
          ==========================================
          2. ENVOYER LE FICHIER PAR MORCEAUX
          ==========================================
        */
        await uploadFileInChunks(
          file,
          sessionData.uploadUrl
        );
      }

      setCurrentFile("");
      setProgress(100);

      setMessage(
        `Merci ❤️ ${selectedFiles.length} fichier(s) envoyé(s) avec succès !`
      );
    } catch (error) {
      console.error(
        "Erreur upload :",
        error
      );

      setCurrentFile("");
      setProgress(0);

      setMessage(
        "Une erreur est survenue pendant l'envoi. Veuillez réessayer."
      );
    } finally {
      setUploading(false);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F1E8]">

      <Navigation />

      {/* =========================================================
          FILTRE SNAPCHAT
      ========================================================= */}
      <section
        id="snapchat"
        className="relative overflow-hidden bg-[#F8F1E8] px-6 pb-24 pt-32 text-[#4A2924] md:px-12 md:pb-28 md:pt-36"
      >
        {/* Décorations */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#C54716]/10" />

        <div className="pointer-events-none absolute -bottom-36 -right-28 h-[420px] w-[420px] rounded-full border border-[#C54716]/10" />

        <div className="relative mx-auto max-w-6xl">

          {/* =====================================================
              TITRE
          ====================================================== */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-[11px] uppercase tracking-[0.45em] text-[#C54716]">
              Partagez vos souvenirs
            </p>

            <h1 className="mt-4 font-serif text-5xl text-[#4A2924] md:text-7xl">
              Notre filtre Snapchat
            </h1>

            <div className="mx-auto mt-6 h-px w-20 bg-[#C54716]" />

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-[#755B54]">
              Immortalisez vos plus beaux moments avec notre filtre personnalisé
              Anelka & Baudouin.
            </p>

          </div>


          {/* =====================================================
              CONTENU
          ====================================================== */}
          <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">

            {/* ===================================================
                PREVIEW VIDEO SNAPCHAT
            =================================================== */}
            <div className="relative mx-auto w-full max-w-[380px] overflow-hidden rounded-[34px] border border-[#6D071A]/10 bg-black shadow-2xl">

              <video
                className="aspect-[9/16] w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source
                  src="/videos/filtre-snapchat-web.mp4"
                  type="video/mp4"
                />

                Votre navigateur ne prend pas en charge la vidéo.
              </video>

            </div>


            {/* ===================================================
                INFORMATIONS
            =================================================== */}
            <div className="rounded-[34px] border border-[#E7CABB]/50 bg-[#FFF9F3] p-8 shadow-[0_15px_40px_rgba(83,46,35,0.06)] md:p-10">

              <p className="text-[10px] uppercase tracking-[0.35em] text-[#C54716]">
                Anelka & Baudouin
              </p>

              <h2 className="mt-4 font-serif text-4xl text-[#4A2924]">
                Ajoutez une touche de notre mariage à vos photos
              </h2>

              <div className="mt-6 h-px w-16 bg-[#C54716]" />

              <p className="mt-7 leading-8 text-[#755B54]">
                Ouvrez le filtre directement dans Snapchat et partagez vos photos
                et vidéos de la célébration avec nous.
              </p>


              {/* BOUTON SNAPCHAT */}
              <a
                href="https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=25e6a555f8fe461a8da833ca602369c3&metadata=01"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-[#C54716] px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#A83D13]"
              >
                Ouvrir le filtre Snapchat
              </a>


              {/* CONSEIL */}
              <div className="mt-10 rounded-[24px] border border-[#DDBFAF]/50 bg-[#FFF3EB] p-6 text-center">

                <p className="text-[10px] uppercase tracking-[0.35em] text-[#C54716]">
                  Conseil
                </p>

                <p className="mt-3 text-sm leading-7 text-[#755B54]">
                  Sur téléphone, utilisez directement le bouton ci-dessus.
                  Sur ordinateur, ouvrez cette page avec votre téléphone
                  pour accéder facilement au filtre.
                </p>

              </div>

            </div>

          </div>


          {/* =====================================================
              FIN
          ====================================================== */}
          <div className="mt-16 text-center">

            <div className="mx-auto flex items-center justify-center gap-4">

              <div className="h-px w-16 bg-[#C54716]/30" />

              <span className="font-serif text-sm text-[#C54716]">
                A | B
              </span>

              <div className="h-px w-16 bg-[#C54716]/30" />

            </div>

            <p className="mt-6 font-serif text-lg italic text-[#755B54]">
              Capturez. Partagez. Souvenez-vous.
            </p>

          </div>

        </div>
      </section>


      {/* =========================================================
          PHOTOS & VIDÉOS DES INVITÉS
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#FFF8F2] px-6 py-24 text-[#4A2924] md:px-12 md:py-32">
        <div className="pointer-events-none absolute -left-32 top-12 h-[380px] w-[380px] rounded-full border border-[#C54716]/10" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full border border-[#6D071A]/10" />
        <div className="pointer-events-none absolute left-10 top-16 hidden font-serif text-[170px] text-[#6D071A]/[0.025] lg:block">A</div>
        <div className="pointer-events-none absolute bottom-10 right-10 hidden font-serif text-[170px] text-[#C54716]/[0.035] lg:block">B</div>

        <div className="relative mx-auto max-w-6xl">
          <div className="group relative mx-auto max-w-[820px] overflow-hidden rounded-[32px] border border-[#EBCDBD] bg-[#FFFCF9] shadow-[0_20px_60px_rgba(109,7,26,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(109,7,26,0.10)] sm:rounded-[38px]">
            <svg viewBox="0 0 180 180" fill="none" className="pointer-events-none absolute -left-6 -top-4 h-36 w-36 text-[#C54716]/10 sm:h-44 sm:w-44" aria-hidden="true">
              <path d="M20 160C45 120 45 75 80 25M44 119C29 109 22 94 22 76M51 101C70 94 81 80 87 62M62 78C51 65 49 49 54 34M74 52C91 48 104 38 113 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M24 77C37 78 45 85 50 98M54 35C66 40 73 50 76 61M87 62C100 63 109 70 114 81M113 22C124 27 130 36 132 47" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>

            <svg viewBox="0 0 180 180" fill="none" className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rotate-180 text-[#6D071A]/[0.05] sm:h-48 sm:w-48" aria-hidden="true">
              <path d="M20 160C45 120 45 75 80 25M44 119C29 109 22 94 22 76M51 101C70 94 81 80 87 62M62 78C51 65 49 49 54 34M74 52C91 48 104 38 113 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M24 77C37 78 45 85 50 98M54 35C66 40 73 50 76 61M87 62C100 63 109 70 114 81M113 22C124 27 130 36 132 47" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>

            <div className="pointer-events-none absolute -right-20 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full border border-[#C54716]/[0.06]" />

            <div className="relative z-10 flex flex-col items-center px-6 py-11 text-center sm:px-10 sm:py-14 md:px-16 md:py-16">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#C54716] md:text-[11px]">
                Petits instants, grands souvenirs
              </p>

              <div className="mt-7 flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#C54716]/20 bg-[#FFF5EE] shadow-[0_8px_25px_rgba(197,71,22,0.08)] sm:h-[74px] sm:w-[74px]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 text-[#C54716] sm:h-8 sm:w-8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5A2.5 2.5 0 0 1 5.5 5h2l1.2-1.5h6.6L16.5 5h2A2.5 2.5 0 0 1 21 7.5v9A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9Z" />
                  <circle cx="12" cy="12" r="3.5" />
                </svg>
              </div>

              <h2 className="mx-auto mt-6 max-w-2xl font-serif text-[34px] leading-[1.12] text-[#6D071A] sm:text-5xl md:text-6xl">
                À travers vos yeux
              </h2>

              <div className="mx-auto mt-6 flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-[#C54716]/30 sm:w-16" />
                <span className="font-serif text-lg text-[#C54716]">♡</span>
                <div className="h-px w-12 bg-[#C54716]/30 sm:w-16" />
              </div>

              <p className="mx-auto mt-7 max-w-2xl font-serif text-xl leading-8 text-[#5E4038] sm:text-2xl sm:leading-9">
                Notre mariage, nous le vivrons entourés de vous.
              </p>

              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#755B54] sm:text-base sm:leading-8">
                Pendant que nous profiterons de chaque instant, vous capturerez sûrement des sourires,
                des éclats de rire, des pas de danse, des selfies et tous ces petits moments que nous
                ne verrons peut-être pas.
              </p>

              <p className="mx-auto mt-4 max-w-xl font-serif text-[17px] italic leading-7 text-[#A96851] sm:text-lg">
                Partagez-les avec nous pour que nous puissions revivre cette journée à travers vos yeux.
              </p>

              <input ref={fileInputRef} type="file" accept="image/*,video/*" multiple className="hidden" onChange={handleFiles} />

              <div className="mt-9 w-full max-w-[520px] sm:mt-10">
                <a
                  href="https://script.google.com/macros/s/AKfycbyOyVkGVKKdE-n3EcuaUwSR5Z_i0EnwEZL4Gdl5C9s6vxV5HyIw9vmhIq_IhvjjuPNxWg/exec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#6D071A] px-5 py-4 text-center text-[9px] uppercase tracking-[0.16em] text-white shadow-[0_10px_30px_rgba(109,7,26,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#520515] hover:shadow-[0_15px_35px_rgba(109,7,26,0.24)] sm:px-7 sm:py-5 sm:text-[11px] sm:tracking-[0.22em]"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5 shrink-0 text-[#F4C58C]" aria-hidden="true">
                    <rect x="3" y="6" width="13" height="12" rx="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16 10 5-3v10l-5-3" />
                  </svg>
                  <span>Partager mes photos / vidéos</span>
                </a>
              </div>

              <p className="mx-auto mt-5 max-w-md text-xs leading-6 text-[#9A7A70]">
                Photos, vidéos et petits instants capturés pendant la célébration.
              </p>

              {uploading && (
                <div className="mx-auto mt-7 w-full max-w-[520px]">
                  <div className="mb-2 flex items-center justify-between gap-4 text-xs text-[#755B54]">
                    <span className="max-w-[220px] truncate sm:max-w-[360px]">{currentFile}</span>
                    <span className="shrink-0 font-medium text-[#C54716]">{progress} %</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-[#F1DDD2]">
                    <div className="h-full rounded-full bg-[#C54716] transition-[width] duration-300" style={{ width: `${progress}%` }} />
                  </div>
                </div>
              )}

              {message && (
                <div className={`mx-auto mt-5 w-full max-w-[520px] rounded-2xl px-5 py-3 text-sm leading-6 ${
                  message.includes("succès")
                    ? "bg-[#FFF3EB] text-[#6D071A]"
                    : message.includes("/")
                    ? "bg-[#FFF3EB] text-[#755B54]"
                    : "bg-red-50 text-red-700"
                }`}>
                  {message}
                </div>
              )}

              <div className="mt-11 flex w-full max-w-lg items-center justify-center gap-4">
                <div className="h-px flex-1 bg-[#C54716]/20" />
                <span className="font-serif text-sm tracking-[0.15em] text-[#C54716]">A | B</span>
                <div className="h-px flex-1 bg-[#C54716]/20" />
              </div>

              <p className="mx-auto mt-5 max-w-xl font-serif text-lg italic leading-8 text-[#755B54] sm:text-xl">
                Vos regards. Nos souvenirs. Notre histoire.
              </p>
            </div>
          </div>
        </div>
      </section>


      <Footer />

    </main>
  );
}