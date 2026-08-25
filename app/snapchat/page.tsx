import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function SnapchatPage() {
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


      <Footer />

    </main>
  );
}