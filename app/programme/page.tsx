import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ProgrammePage() {
  return (
    <main className="min-h-screen bg-[#F8F1E8]">

      <Navigation />

      {/* =========================================================
          PROGRAMME DU MARIAGE
      ========================================================= */}
      <section
        id="programme"
        className="relative overflow-hidden bg-[#F8F1E8] px-6 pb-24 pt-32 md:px-12 md:pb-28 md:pt-36"
      >
        {/* Décorations */}
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#C54716]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-[#6D071A]/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          {/* TITRE */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs uppercase tracking-[0.45em] text-[#C54716]">
              Notre mariage
            </p>

            <h1 className="mt-4 font-serif text-5xl text-[#4A2924] md:text-7xl">
              Le programme
            </h1>

            <div className="mx-auto mt-7 h-px w-20 bg-[#D77A57]" />

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#755B54] md:text-lg">
              Deux journées, quatre moments précieux et une seule histoire
              à célébrer ensemble.
            </p>

          </div>


          {/* =====================================================
              26 NOVEMBRE 2026
          ====================================================== */}
          <div className="mx-auto mt-20 max-w-4xl">

            <div className="text-center">

              <p className="text-xs uppercase tracking-[0.4em] text-[#C54716]">
                Première journée
              </p>

              <h2 className="mt-3 font-serif text-4xl text-[#4A2924] md:text-5xl">
                26 novembre 2026
              </h2>

              <p className="mt-3 font-serif text-xl italic text-[#B8522C]">
                Mairie & Dote
              </p>

            </div>


            {/* TIMELINE JOUR 1 */}
            <div className="relative mx-auto mt-14 max-w-2xl">

              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#D77A57] to-transparent" />


              {/* MAIRIE */}
              <div className="relative mb-14 flex justify-center">

                <div className="relative z-10 w-[88%] rounded-[28px] border border-[#E7CABB]/50 bg-[#FFF9F3] px-6 py-9 text-center shadow-[0_15px_40px_rgba(83,46,35,0.06)] md:w-[70%]">

                  <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#F8F1E8] bg-[#C54716]" />

                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#C54716]">
                    Cérémonie civile
                  </p>

                  <h3 className="mt-3 font-serif text-3xl text-[#4A2924]">
                    La Mairie
                  </h3>

                  <div className="mx-auto my-5 h-px w-12 bg-[#D77A57]" />

                  <p className="text-sm text-[#755B54]">
                    Mairie de Bayangam
                  </p>

                  <p className="mt-2 text-xs italic text-[#A28479]">
                    Heure et adresse exacte à venir
                  </p>

                </div>

              </div>


              {/* DOTE */}
              <div className="relative flex justify-center">

                <div className="relative z-10 w-[88%] rounded-[28px] border border-[#E7CABB]/50 bg-[#FFF9F3] px-6 py-9 text-center shadow-[0_15px_40px_rgba(83,46,35,0.06)] md:w-[70%]">

                  <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#F8F1E8] bg-[#C54716]" />

                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#C54716]">
                    Tradition
                  </p>

                  <h3 className="mt-3 font-serif text-3xl text-[#4A2924]">
                    La Dote
                  </h3>

                  <div className="mx-auto my-5 h-px w-12 bg-[#D77A57]" />

                  <p className="text-sm text-[#755B54]">
                    Maison familiale · Bayangam
                  </p>

                  <p className="mt-2 text-xs italic text-[#A28479]">
                    Heure et adresse exacte à venir
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* SÉPARATEUR */}
          <div className="mx-auto flex max-w-xl items-center gap-5 py-16 md:py-20">

            <div className="h-px flex-1 bg-[#D77A57]/35" />

            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D77A57]/50">
              <span className="text-[#C54716]">♡</span>
            </div>

            <div className="h-px flex-1 bg-[#D77A57]/35" />

          </div>


          {/* =====================================================
              28 NOVEMBRE 2026
          ====================================================== */}
          <div className="mx-auto max-w-4xl">

            <div className="text-center">

              <p className="text-xs uppercase tracking-[0.4em] text-[#C54716]">
                Le grand jour
              </p>

              <h2 className="mt-3 font-serif text-4xl text-[#4A2924] md:text-6xl">
                28 novembre 2026
              </h2>

              <p className="mt-3 font-serif text-xl italic text-[#B8522C]">
                Église & Soirée
              </p>

            </div>


            {/* TIMELINE JOUR 2 */}
            <div className="relative mx-auto mt-14 max-w-2xl">

              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#D77A57] to-transparent" />


              {/* 13H */}
              <div className="relative mb-14 flex justify-center">

                <div className="relative z-10 w-[88%] rounded-[28px] border border-[#E7CABB]/50 bg-[#FFF9F3] px-6 py-9 text-center shadow-[0_15px_40px_rgba(83,46,35,0.06)] md:w-[70%]">

                  <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#F8F1E8] bg-[#C54716]" />

                  <p className="font-serif text-4xl text-[#C54716]">
                    13:00
                  </p>

                  <div className="mx-auto my-4 h-px w-12 bg-[#D77A57]" />

                  <p className="text-xs uppercase tracking-[0.3em] text-[#755B54]">
                    Installation des invités
                  </p>

                </div>

              </div>


              {/* EGLISE */}
              <div className="relative mb-14 flex justify-center">

                <div className="relative z-10 w-[88%] rounded-[28px] border border-[#E7CABB]/50 bg-[#FFF9F3] px-6 py-9 text-center shadow-[0_15px_40px_rgba(83,46,35,0.06)] md:w-[70%]">

                  <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#F8F1E8] bg-[#C54716]" />

                  <p className="font-serif text-4xl text-[#C54716]">
                    14:00
                  </p>

                  <div className="mx-auto my-4 h-px w-12 bg-[#D77A57]" />

                  <p className="text-xs uppercase tracking-[0.3em] text-[#755B54]">
                    Cérémonie à l’église
                  </p>

                </div>

              </div>


              {/* VIN D'HONNEUR */}
              <div className="relative mb-14 flex justify-center">

                <div className="relative z-10 w-[88%] rounded-[28px] border border-[#E7CABB]/50 bg-[#FFF9F3] px-6 py-9 text-center shadow-[0_15px_40px_rgba(83,46,35,0.06)] md:w-[70%]">

                  <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#F8F1E8] bg-[#D77A57]" />

                  <p className="font-serif text-4xl text-[#C54716]">
                    15:00
                  </p>

                  <div className="mx-auto my-4 h-px w-12 bg-[#D77A57]" />

                  <p className="text-xs uppercase tracking-[0.3em] text-[#755B54]">
                    Vin d’honneur
                  </p>

                </div>

              </div>


              {/* SOIRÉE */}
              <div className="relative flex justify-center">

                <div className="relative z-10 w-[88%] rounded-[28px] border border-[#E7CABB]/50 bg-[#FFF9F3] px-6 py-9 text-center shadow-[0_15px_40px_rgba(83,46,35,0.06)] md:w-[70%]">

                  <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#F8F1E8] bg-[#C54716]" />

                  <p className="font-serif text-4xl text-[#C54716]">
                    18:00
                  </p>

                  <div className="mx-auto my-4 h-px w-12 bg-[#D77A57]" />

                  <p className="text-xs uppercase tracking-[0.3em] text-[#755B54]">
                    Place à la fête
                  </p>

                  <p className="mt-4 font-serif italic text-[#9F4728]">
                    Que la célébration commence…
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />

    </main>
  );
}