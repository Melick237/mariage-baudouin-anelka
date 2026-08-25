import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function DressCodePage() {
  return (
    <main className="min-h-screen bg-[#C54716]">

      {/* NAVIGATION COMMUNE */}
      <Navigation />

      {/* =========================================================
          DRESS CODE
      ========================================================= */}
      <section
        id="dresscode"
        className="relative overflow-hidden bg-[#C54716] px-6 pb-24 pt-32 text-[#FFF8F2] md:px-12 md:pb-28 md:pt-36"
      >
        {/* =====================================================
            DÉCORATIONS DE FOND
        ====================================================== */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-40 -right-32 h-[460px] w-[460px] rounded-full border border-white/10" />

        <div className="pointer-events-none absolute left-10 top-20 hidden font-serif text-[170px] text-white/[0.025] lg:block">
          B
        </div>

        <div className="pointer-events-none absolute bottom-20 right-10 hidden font-serif text-[170px] text-white/[0.025] lg:block">
          A
        </div>

        <div className="relative mx-auto max-w-6xl">

          {/* =====================================================
              TITRE
          ====================================================== */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs uppercase tracking-[0.45em] text-[#F6D2C3]">
              Notre mariage
            </p>

            <h1 className="mt-4 font-serif text-5xl md:text-7xl">
              Dress Code
            </h1>

            <div className="mx-auto mt-6 h-px w-24 bg-[#F4C58C]" />

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#FCE9E1] md:text-lg">
              Pour créer une belle harmonie lors de cette journée,
              nous vous invitons à vous inspirer de notre palette de couleurs.
            </p>

          </div>


          {/* =====================================================
              PALETTE
          ====================================================== */}
          <div className="mt-16 text-center">

            <p className="text-xs uppercase tracking-[0.4em] text-[#F4C58C]">
              Notre palette
            </p>

            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-start justify-center gap-10 md:gap-16">

              {/* TERRACOTTA */}
              <div className="flex flex-col items-center">

                <div
                  className="h-24 w-24 rounded-full border-4 border-white/30 shadow-xl md:h-28 md:w-28"
                  style={{
                    backgroundColor: "#C54716",
                  }}
                />

                <p className="mt-4 font-serif text-lg">
                  Terracotta
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/60">
                  #C54716
                </p>

              </div>


              {/* BORDEAUX */}
              <div className="flex flex-col items-center">

                <div
                  className="h-24 w-24 rounded-full border-4 border-white/30 shadow-xl md:h-28 md:w-28"
                  style={{
                    backgroundColor: "#6D071A",
                  }}
                />

                <p className="mt-4 font-serif text-lg">
                  Bordeaux
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/60">
                  #6D071A
                </p>

              </div>


              {/* VERT ÉMERAUDE */}
              <div className="flex flex-col items-center">

                <div
                  className="h-24 w-24 rounded-full border-4 border-white/30 shadow-xl md:h-28 md:w-28"
                  style={{
                    backgroundColor: "#274E13",
                  }}
                />

                <p className="mt-4 font-serif text-lg">
                  Vert émeraude
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/60">
                  #274E13
                </p>

              </div>

            </div>


            <div className="mx-auto mt-12 max-w-2xl">

              <p className="font-serif text-xl italic text-[#F8D8C9]">
                Trois couleurs, une seule harmonie.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#FCE9E1]/90">
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

              <p className="text-xs uppercase tracking-[0.4em] text-[#F4C58C]">
                Inspirations
              </p>

              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                Hommes
              </h2>

              <div className="mx-auto mt-5 h-px w-16 bg-[#F4C58C]/70" />

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
                    border-white/20
                    bg-[#A43B17]
                    shadow-[0_20px_50px_rgba(75,25,10,0.25)]
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

                  <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-inset ring-white/15" />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 to-transparent" />

                </div>

              ))}

            </div>

          </div>


          {/* =====================================================
              SÉPARATEUR
          ====================================================== */}
          <div className="mx-auto flex max-w-xl items-center gap-5 py-20">

            <div className="h-px flex-1 bg-[#F4C58C]/40" />

            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#F4C58C]/60">

              <span className="font-serif text-sm tracking-[0.12em] text-[#F4C58C]">
                B|A
              </span>

            </div>

            <div className="h-px flex-1 bg-[#F4C58C]/40" />

          </div>


          {/* =====================================================
              FEMMES
          ====================================================== */}
          <div>

            <div className="text-center">

              <p className="text-xs uppercase tracking-[0.4em] text-[#F4C58C]">
                Inspirations
              </p>

              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                Femmes
              </h2>

              <div className="mx-auto mt-5 h-px w-16 bg-[#F4C58C]/70" />

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
                    border-white/20
                    bg-[#A43B17]
                    shadow-[0_20px_50px_rgba(75,25,10,0.25)]
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

                  <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-inset ring-white/15" />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 to-transparent" />

                </div>

              ))}

            </div>

          </div>


          {/* =====================================================
              MESSAGE DE FIN
          ====================================================== */}
          <div className="mt-24 text-center">

            <div className="mx-auto h-px max-w-sm bg-gradient-to-r from-transparent via-[#F4C58C]/60 to-transparent" />

            <div className="mx-auto mt-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#F4C58C]/60">

              <span className="font-serif text-sm tracking-[0.15em] text-[#F4C58C]">
                A | B
              </span>

            </div>

            <p className="mt-7 font-serif text-xl italic text-[#F8D8C9] md:text-2xl">
              Soyez élégants, soyez vous-mêmes.
            </p>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#FCE9E1]/80">
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