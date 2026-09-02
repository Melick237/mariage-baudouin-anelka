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
    <main className="min-h-screen bg-[#6D071A]">

      <Navigation />

      {/* =========================================================
          FILTRE SNAPCHAT
      ========================================================= */}
      <section
        id="snapchat"
        className="relative overflow-hidden bg-[#6D071A] px-6 pb-24 pt-32 text-[#FFF8F2] md:px-12 md:pb-28 md:pt-36"
      >
        {/* Décorations */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-36 -right-28 h-[420px] w-[420px] rounded-full border border-white/10" />


        <div className="relative mx-auto max-w-6xl">

          {/* =====================================================
              TITRE
          ====================================================== */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-[11px] uppercase tracking-[0.45em] text-[#F4C58C]">
              Partagez vos souvenirs
            </p>

            <h1 className="mt-4 font-serif text-5xl md:text-7xl">
              Notre filtre Snapchat
            </h1>

            <div className="mx-auto mt-6 h-px w-20 bg-[#F4C58C]" />

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-white/80">
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
            <div className="relative mx-auto w-full max-w-[380px] overflow-hidden rounded-[34px] border border-white/15 bg-black shadow-2xl">

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
            <div className="rounded-[34px] border border-white/15 bg-white/10 p-8 backdrop-blur md:p-10">

              <p className="text-[10px] uppercase tracking-[0.35em] text-[#F4C58C]">
                Anelka & Baudouin
              </p>

              <h2 className="mt-4 font-serif text-4xl">
                Ajoutez une touche de notre mariage à vos photos
              </h2>

              <div className="mt-6 h-px w-16 bg-[#F4C58C]" />

              <p className="mt-7 leading-8 text-white/80">
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
              <div className="mt-10 rounded-[24px] border border-white/15 bg-black/10 p-6 text-center">

                <p className="text-[10px] uppercase tracking-[0.35em] text-[#F4C58C]">
                  Conseil
                </p>

                <p className="mt-3 text-sm leading-7 text-white/75">
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

              <div className="h-px w-16 bg-[#F4C58C]/40" />

              <span className="font-serif text-sm text-[#F4C58C]">
                A | B
              </span>

              <div className="h-px w-16 bg-[#F4C58C]/40" />

            </div>

            <p className="mt-6 font-serif text-lg italic text-white/75">
              Capturez. Partagez. Souvenez-vous.
            </p>

          </div>

        </div>
      </section>


      {/* =========================================================
          PHOTOS & VIDÉOS DES INVITÉS
          NOUVELLE SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#FFF8F2] px-6 py-24 text-[#4A2924] md:px-12 md:py-32">

        {/* =======================================================
            DÉCORATIONS
        ======================================================= */}
        <div className="pointer-events-none absolute -left-32 top-12 h-[380px] w-[380px] rounded-full border border-[#C54716]/10" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full border border-[#6D071A]/10" />

        <div className="pointer-events-none absolute left-10 top-16 hidden font-serif text-[170px] text-[#6D071A]/[0.025] lg:block">
          A
        </div>

        <div className="pointer-events-none absolute bottom-10 right-10 hidden font-serif text-[170px] text-[#C54716]/[0.035] lg:block">
          B
        </div>


        <div className="relative mx-auto max-w-6xl">

          {/* =====================================================
              EN-TÊTE
          ====================================================== */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-[10px] uppercase tracking-[0.45em] text-[#C54716] md:text-[11px]">
              Petits instants, grands souvenirs
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#6D071A] md:text-6xl lg:text-7xl">
              À travers vos yeux
            </h2>

            <div className="mx-auto mt-7 flex items-center justify-center gap-4">

              <div className="h-px w-12 bg-[#C54716]/40" />

              <span className="font-serif text-xl text-[#C54716]">
                ♡
              </span>

              <div className="h-px w-12 bg-[#C54716]/40" />

            </div>


            <p className="mx-auto mt-8 max-w-2xl font-serif text-xl leading-9 text-[#5E4038] md:text-2xl md:leading-10">
              Notre mariage, nous le vivrons entourés de vous.
            </p>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#755B54]">
              Et pendant que nous profiterons de chaque instant,
              vous capturerez sûrement des sourires, des éclats de rire,
              des pas de danse et tous ces petits moments que nous ne verrons
              peut-être pas.
            </p>

          </div>


          {/* =====================================================
              GRANDE CARTE
          ====================================================== */}
          <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-[38px] border border-[#DDBFAF]/60 bg-white shadow-[0_25px_80px_rgba(109,7,26,0.08)]">

            {/* PARTIE HAUTE */}
            <div className="relative px-7 py-12 text-center md:px-16 md:py-16">

              {/* PETITE ICÔNE */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#C54716]/20 bg-[#FFF3EB]">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="h-7 w-7 text-[#C54716]"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 8.186 5.5h.505c.458 0 .894-.2 1.193-.548l.612-.714A2.31 2.31 0 0 1 12.248 3.5h.504a2.31 2.31 0 0 1 1.752.738l.612.714c.299.348.735.548 1.193.548h.505a2.31 2.31 0 0 1 1.359.675l.652.652A2.31 2.31 0 0 1 19.5 8.186v7.628a2.31 2.31 0 0 1-.675 1.359l-.652.652a2.31 2.31 0 0 1-1.359.675H7.186a2.31 2.31 0 0 1-1.359-.675l-.652-.652a2.31 2.31 0 0 1-.675-1.359V8.186a2.31 2.31 0 0 1 .675-1.359l.652-.652Z"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="3.25"
                  />
                </svg>

              </div>


              <p className="mt-7 text-[10px] uppercase tracking-[0.38em] text-[#C54716]">
                Partagez-les avec nous
              </p>

              <h3 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight text-[#4A2924] md:text-4xl">
                Vos souvenirs feront aussi partie de notre histoire
              </h3>

              <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#755B54]">
                Photos spontanées, vidéos, selfies, moments drôles,
                tendres ou émouvants… chaque souvenir compte.
              </p>

              <p className="mx-auto mt-3 max-w-xl leading-7 text-[#755B54]">
                Nous serons heureux de découvrir après le mariage
                tous ces instants vécus à travers vos yeux.
              </p>


              {/* =================================================
                  UPLOAD PHOTOS & VIDÉOS
              ================================================= */}
              <div className="mt-10 flex flex-col items-center justify-center">

                {/* =================================================
                    INPUT INVISIBLE - PHOTOS
                ================================================= */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleFiles}
                />

                {/* =================================================
                    BOUTONS
                ================================================= */}
                <div className="flex w-full max-w-[430px] flex-col gap-4">

                  {/* =========================
                      BOUTON PHOTOS
                  ========================== */}
                  <button
                    type="button"
                    disabled={uploading}
                    onClick={() => fileInputRef.current?.click()}
                    className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#C54716] px-7 py-5 text-center text-[10px] uppercase tracking-[0.22em] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#A83D13] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 sm:text-[11px]"
                  >
                    {uploading ? (
                      <>
                        <span className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-white/40 border-t-white" />

                        <span>
                          Envoi des photos...
                        </span>
                      </>
                    ) : (
                      <>
                        {/* ICÔNE PHOTO */}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          className="h-5 w-5 shrink-0"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 7.5A2.5 2.5 0 0 1 5.5 5h2l1.2-1.5h6.6L16.5 5h2A2.5 2.5 0 0 1 21 7.5v9A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9Z"
                          />

                          <circle
                            cx="12"
                            cy="12"
                            r="3.5"
                          />
                        </svg>

                        <span>
                          Ajouter mes photos
                        </span>
                      </>
                    )}
                  </button>


                  {/* =========================
                      BOUTON VIDÉOS
                  ========================== */}
                  <a
                    href="https://script.google.com/macros/s/AKfycbyOyVkGVKKdE-n3EcuaUwSR5Z_i0EnwEZL4Gdl5C9s6vxV5HyIw9vmhIq_IhvjjuPNxWg/exec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center justify-center gap-3 rounded-full border border-[#C54716]/30 bg-[#FFF3EB] px-7 py-5 text-center text-[10px] uppercase tracking-[0.22em] text-[#C54716] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#C54716] hover:bg-[#FCE7DA] hover:shadow-lg sm:text-[11px]"
                  >
                    {/* ICÔNE VIDÉO */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-5 w-5 shrink-0"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="6"
                        width="13"
                        height="12"
                        rx="2"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16 10 5-3v10l-5-3"
                      />
                    </svg>

                    <span>
                      Ajouter mes vidéos
                    </span>
                  </a>

                </div>


                {/* =================================================
                    PROGRESSION UPLOAD PHOTOS
                ================================================= */}
                {uploading && (
                  <div className="mx-auto mt-6 w-full max-w-[430px]">

                    <div className="mb-2 flex items-center justify-between gap-4 text-xs text-[#755B54]">

                      <span className="max-w-[300px] truncate">
                        {currentFile}
                      </span>

                      <span className="shrink-0 font-medium text-[#C54716]">
                        {progress} %
                      </span>

                    </div>

                    <div className="h-2 w-full overflow-hidden rounded-full bg-[#F1DDD2]">
                      <div
                        className="h-full rounded-full bg-[#C54716] transition-[width] duration-300"
                        style={{
                          width: `${progress}%`,
                        }}
                      />
                    </div>

                  </div>
                )}


                {/* =================================================
                    MESSAGE UPLOAD PHOTOS
                ================================================= */}
                {message && (
                  <div
                    className={`mx-auto mt-5 max-w-lg rounded-2xl px-5 py-3 text-sm leading-6 ${
                      message.includes("succès")
                        ? "bg-[#FFF3EB] text-[#6D071A]"
                        : message.includes("/")
                        ? "bg-[#FFF3EB] text-[#755B54]"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {message}
                  </div>
                )}

              </div>


              {/* PETITE EXPLICATION */}
              <div className="mx-auto mt-7 max-w-lg">

                <p className="text-sm leading-7 text-[#8A6A60]">
                  Choisissez simplement ce que vous souhaitez partager avec nous :
                  vos photos ou vos vidéos.
                </p>

              </div>

            </div>


            {/* =====================================================
                BANDEAU BAS
            ====================================================== */}
            <div className="border-t border-[#DDBFAF]/45 bg-[#FFF3EB] px-6 py-7">

              <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6">

                <div className="flex items-center gap-3">

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-[#C54716] shadow-sm">
                    01
                  </span>

                  <span className="text-xs text-[#755B54]">
                    Cliquez
                  </span>

                </div>


                <span className="hidden text-[#C54716]/30 sm:block">
                  —
                </span>


                <div className="flex items-center gap-3">

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-[#C54716] shadow-sm">
                    02
                  </span>

                  <span className="text-xs text-[#755B54]">
                    Sélectionnez
                  </span>

                </div>


                <span className="hidden text-[#C54716]/30 sm:block">
                  —
                </span>


                <div className="flex items-center gap-3">

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-[#C54716] shadow-sm">
                    03
                  </span>

                  <span className="text-xs text-[#755B54]">
                    Partagez
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
              FIN DE LA NOUVELLE SECTION
          ====================================================== */}
          <div className="mt-16 text-center">

            <div className="mx-auto flex items-center justify-center gap-4">

              <div className="h-px w-16 bg-[#C54716]/25" />

              <span className="font-serif text-sm text-[#C54716]">
                A | B
              </span>

              <div className="h-px w-16 bg-[#C54716]/25" />

            </div>

            <p className="mx-auto mt-6 max-w-lg font-serif text-lg italic leading-8 text-[#755B54]">
              Merci de nous aider à conserver chaque petit morceau
              de cette belle journée.
            </p>

          </div>

        </div>
      </section>


      <Footer />

    </main>
  );
}