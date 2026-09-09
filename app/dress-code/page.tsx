import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function DressCodePage() {
  return (
    <main className="min-h-screen bg-[#F8F1E8]">

      {/* NAVIGATION COMMUNE */}
      <Navigation />

      {/* =========================================================
          DRESS CODE
      ========================================================= */}
      <section
        id="dresscode"
        className="relative overflow-hidden bg-[#F8F1E8] px-6 pb-24 pt-32 text-[#4A2924] md:px-12 md:pb-28 md:pt-36"
      >
        {/* =====================================================
            DÉCORATIONS DE FOND
        ====================================================== */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#C54716]/10" />

        <div className="pointer-events-none absolute -bottom-40 -right-32 h-[460px] w-[460px] rounded-full border border-[#C54716]/10" />

        <div className="pointer-events-none absolute left-10 top-20 hidden font-serif text-[170px] text-[#6D071A]/[0.025] lg:block">
          B
        </div>

        <div className="pointer-events-none absolute bottom-20 right-10 hidden font-serif text-[170px] text-[#6D071A]/[0.025] lg:block">
          A
        </div>

        <div className="relative mx-auto max-w-6xl">

          {/* =====================================================
              TITRE
          ====================================================== */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs uppercase tracking-[0.45em] text-[#C54716]">
              Notre mariage
            </p>

            <h1 className="mt-4 font-serif text-5xl md:text-7xl">
              Dress Code
            </h1>

            <div className="mx-auto mt-6 h-px w-24 bg-[#C54716]" />

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#765B52] md:text-lg">
              Pour créer une belle harmonie lors de cette journée,
              nous vous invitons à vous inspirer de notre palette de couleurs.
            </p>

          </div>


          {/* =====================================================
              PALETTE
          ====================================================== */}
          <div className="mt-16 text-center">

            <p className="text-xs uppercase tracking-[0.4em] text-[#C54716]">
              Notre palette
            </p>

            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-start justify-center gap-10 md:gap-16">

              {/* TERRACOTTA */}
              <div className="flex flex-col items-center">

                <div
                  className="h-24 w-24 rounded-full border-4 border-white shadow-xl md:h-28 md:w-28"
                  style={{
                    backgroundColor: "#C54716",
                  }}
                />

                <p className="mt-4 font-serif text-lg">
                  Terracotta
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#8A6D63]">
                  #C54716
                </p>

              </div>


              {/* BORDEAUX */}
              <div className="flex flex-col items-center">

                <div
                  className="h-24 w-24 rounded-full border-4 border-white shadow-xl md:h-28 md:w-28"
                  style={{
                    backgroundColor: "#6D071A",
                  }}
                />

                <p className="mt-4 font-serif text-lg">
                  Bordeaux
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#8A6D63]">
                  #6D071A
                </p>

              </div>


              {/* VERT ÉMERAUDE */}
              <div className="flex flex-col items-center">

                <div
                  className="h-24 w-24 rounded-full border-4 border-white shadow-xl md:h-28 md:w-28"
                  style={{
                    backgroundColor: "#274E13",
                  }}
                />

                <p className="mt-4 font-serif text-lg">
                  Vert émeraude
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#8A6D63]">
                  #274E13
                </p>

              </div>

            </div>


            <div className="mx-auto mt-12 max-w-2xl">

              <p className="font-serif text-xl italic text-[#9B6B59]">
                Trois couleurs, une seule harmonie.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#765B52]">
                Merci de privilégier ces teintes afin de créer une belle
                harmonie tout au long de cette journée.
              </p>

            </div>

          </div>


          {/* =====================================================
              HOMMES
          ====================================================== */}
          <div className="mt-24">

            <div className="text-center">

              <p className="text-xs uppercase tracking-[0.4em] text-[#C54716]">
                Inspirations
              </p>

              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                Hommes
              </h2>

              <div className="mx-auto mt-5 h-px w-16 bg-[#C54716]/70" />

            </div>


            {/* PHOTOS HOMMES */}
            <div className="mt-12 grid gap-7 md:grid-cols-3">

              {[
                {
                  src: "homme1.jpeg",
                  pos: "center 20%",
                },
                {
                  src: "homme2.jpeg",
                  pos: "center 15%",
                },
                {
                  src: "homme3.jpeg",
                  pos: "center 15%",
                },
              ].map((item) => (

                <div
                  key={item.src}
                  className="
                    group
                    relative
                    h-[500px]
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-[#6D071A]/10
                    bg-[#EEE1D8]
                    shadow-[0_20px_50px_rgba(75,25,10,0.12)]
                    md:h-[540px]
                  "
                >

                  <Image
                    src={`/images/dresscode/${item.src}`}
                    alt="Inspiration tenue homme"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    style={{
                      objectPosition: item.pos,
                    }}
                  />

                  <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-inset ring-[#6D071A]/10" />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 to-transparent" />

                </div>

              ))}

            </div>

          </div>


          {/* =====================================================
              SÉPARATEUR
          ====================================================== */}
          <div className="mx-auto flex max-w-xl items-center gap-5 py-20">

            <div className="h-px flex-1 bg-[#C54716]/40" />

            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C54716]/35">

              <span className="font-serif text-sm tracking-[0.12em] text-[#C54716]">
                B|A
              </span>

            </div>

            <div className="h-px flex-1 bg-[#C54716]/40" />

          </div>


          {/* =====================================================
              FEMMES
          ====================================================== */}
          <div>

            <div className="text-center">

              <p className="text-xs uppercase tracking-[0.4em] text-[#C54716]">
                Inspirations
              </p>

              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                Femmes
              </h2>

              <div className="mx-auto mt-5 h-px w-16 bg-[#C54716]/70" />

            </div>


            {/* PHOTOS FEMMES */}
            <div className="mt-12 grid gap-7 md:grid-cols-3">

              {[
                {
                  src: "femme1.jpeg",
                  pos: "center 20%",
                },
                {
                  src: "femme2.jpeg",
                  pos: "center 15%",
                },
                {
                  src: "femme3.jpeg",
                  pos: "center 35%",
                },
              ].map((item) => (

                <div
                  key={item.src}
                  className="
                    group
                    relative
                    h-[500px]
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-[#6D071A]/10
                    bg-[#EEE1D8]
                    shadow-[0_20px_50px_rgba(75,25,10,0.12)]
                    md:h-[540px]
                  "
                >

                  <Image
                    src={`/images/dresscode/${item.src}`}
                    alt="Inspiration tenue femme"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    style={{
                      objectPosition: item.pos,
                    }}
                  />

                  <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-inset ring-[#6D071A]/10" />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 to-transparent" />

                </div>

              ))}

            </div>

          </div>



          {/* =====================================================
              PAGNE DU MARIAGE
          ====================================================== */}
          <div className="mt-24">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-xs uppercase tracking-[0.4em] text-[#C54716]">
                Notre tissu
              </p>

              <h2 className="mt-3 font-serif text-4xl text-[#4A2924] md:text-5xl">
                Le pagne du mariage
              </h2>

              <div className="mx-auto mt-5 h-px w-16 bg-[#C54716]/50" />

              <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#765B52]">
                Retrouvez ici le pagne choisi pour le mariage ainsi que quelques
                inspirations de modèles pour vous aider à imaginer votre tenue.
              </p>

            </div>

            {/* PHOTO DU PAGNE */}
            <div className="mx-auto mt-12 max-w-4xl">

              <div className="overflow-hidden rounded-[32px] border border-[#6D071A]/10 bg-white p-3 shadow-[0_20px_60px_rgba(70,30,20,0.10)]">

                <div className="relative h-[420px] overflow-hidden rounded-[24px] bg-[#EEE1D8] md:h-[560px]">

                  <Image
                    src="/images/dresscode/pagne-mariage.jpeg"
                    alt="Pagne du mariage"
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[10px] uppercase tracking-[0.32em] text-white/75">
                      Pagne officiel
                    </p>

                    <h3 className="mt-2 font-serif text-3xl text-white md:text-4xl">
                      Le pagne du mariage
                    </h3>
                  </div>

                </div>

              </div>

            </div>

            {/* MODÈLES EN PAGNE */}
            <div className="mt-16 text-center">

              <p className="text-xs uppercase tracking-[0.4em] text-[#274E13]">
                Inspirations
              </p>

              <h3 className="mt-3 font-serif text-3xl text-[#4A2924] md:text-4xl">
                Quelques modèles avec le pagne
              </h3>

            </div>

            <div className="mt-10 grid gap-7 md:grid-cols-3">

              {[
                {
                  src: "pagne-modele1.jpeg",
                  pos: "center 20%",
                },
                {
                  src: "pagne-modele2.jpeg",
                  pos: "center 20%",
                },
                {
                  src: "pagne-modele3.jpeg",
                  pos: "center 20%",
                },
              ].map((item) => (

                <div
                  key={item.src}
                  className="
                    group
                    relative
                    h-[500px]
                    overflow-hidden
                    rounded-[30px]
                    border border-[#6D071A]/10
                    bg-[#EEE1D8]
                    shadow-[0_20px_50px_rgba(75,25,10,0.12)]
                    md:h-[540px]
                  "
                >

                  <Image
                    src={`/images/dresscode/${item.src}`}
                    alt="Inspiration modèle avec le pagne du mariage"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    style={{
                      objectPosition: item.pos,
                    }}
                  />

                  <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-inset ring-[#6D071A]/10" />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 to-transparent" />

                </div>

              ))}

            </div>

          </div>

          {/* =====================================================
              SIGNIFICATION DU DRESS CODE
          ====================================================== */}
          <div className="mx-auto mt-24 max-w-4xl">

              <details className="group overflow-hidden rounded-[26px] border border-[#E7D5CA] bg-white shadow-[0_12px_40px_rgba(98,47,31,0.06)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-6 md:px-8">
                  <div className="flex items-center gap-5">
                    <span className="font-serif text-sm text-[#C54716]">
                      FAQ
                    </span>

                    <h3 className="font-serif text-xl text-[#4A2924] md:text-2xl">
                      Que signifie réellement notre dress code ?
                    </h3>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C54716]/20 text-xl text-[#C54716] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="border-t border-[#E7D5CA] px-6 py-6 md:px-8 md:pl-[76px]">
                  <div className="space-y-5 leading-8 text-[#765B52]">
                    <p>
                      <strong className="font-medium text-[#C54716]">
                        Le terracotta
                      </strong>{" "}
                      évoque notre connexion à nos racines, mais aussi la
                      chaleur et la stabilité. Nous sommes intimement
                      convaincus que la puissance de nos racines nous aide à
                      avancer tout en gardant un équilibre solide.
                    </p>

                    <p>
                      <strong className="font-medium text-[#6D071A]">
                        Le rouge bordeaux
                      </strong>{" "}
                      est porteur d’une sagesse ancestrale et d’une force
                      tranquille qui invite à l’introspection.
                    </p>

                    <p>
                      <strong className="font-medium text-[#274E13]">
                        Le vert émeraude
                      </strong>{" "}
                      représente l’ouverture du cœur, la tranquillité de l’âme
                      et la guérison émotionnelle.
                    </p>

                    <p className="font-serif text-lg italic text-[#9B6B59]">
                      Ainsi, nous souhaitons commencer cette nouvelle étape de
                      notre vie dans l’authenticité, la sagesse et la paix de
                      l’âme.
                    </p>
                  </div>
                </div>
              </details>

          </div>


          {/* =====================================================
              MESSAGE DE FIN
          ====================================================== */}
          <div className="mt-24 text-center">

            <div className="mx-auto h-px max-w-sm bg-gradient-to-r from-transparent via-[#C54716]/40 to-transparent" />

            <div className="mx-auto mt-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#C54716]/35">

              <span className="font-serif text-sm tracking-[0.15em] text-[#C54716]">
                A | B
              </span>

            </div>

            <p className="mt-7 font-serif text-xl italic text-[#9B6B59] md:text-2xl">
              Soyez élégants, soyez vous-mêmes.
            </p>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#765B52]">
              Terracotta • Bordeaux • Vert émeraude
            </p>

          </div>

        </div>
      </section>


      {/* FOOTER COMMUN */}
      <Footer />

    </main>
  );
}