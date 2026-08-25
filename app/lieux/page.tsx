import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function LieuxPage() {
  return (
    <main className="min-h-screen bg-[#6D071A]">

      {/* NAVIGATION COMMUNE */}
      <Navigation />

      {/* =========================================================
          LOCALISATION
      ========================================================= */}
      <section
        id="localisation"
        className="relative overflow-hidden bg-[#6D071A] px-6 pb-24 pt-32 text-[#FFF8F2] md:px-12 md:pb-28 md:pt-36"
      >
        {/* Décorations */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-36 -right-28 h-[420px] w-[420px] rounded-full border border-white/10" />

        <div className="pointer-events-none absolute left-8 top-24 hidden font-serif text-[150px] text-white/[0.025] lg:block">
          A
        </div>

        <div className="pointer-events-none absolute bottom-24 right-8 hidden font-serif text-[150px] text-white/[0.025] lg:block">
          B
        </div>

        <div className="relative mx-auto max-w-6xl">

          {/* =====================================================
              TITRE
          ====================================================== */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-[11px] uppercase tracking-[0.45em] text-[#F4C58C]">
              Où nous retrouver
            </p>

            <h1 className="mt-4 font-serif text-5xl md:text-7xl">
              Localisation
            </h1>

            <div className="mx-auto mt-6 h-px w-20 bg-[#F4C58C]" />

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-white/80">
              Retrouvez-nous au cœur de Yaoundé pour célébrer cette journée
              exceptionnelle avec nous.
            </p>

          </div>


          {/* =====================================================
              GREEN GARDEN
          ====================================================== */}
          <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">

            {/* ===================================================
                PHOTO + INFORMATIONS
            =================================================== */}
            <div className="relative min-h-[520px] overflow-hidden rounded-[34px] border border-white/15 shadow-2xl">

              {/* PHOTO */}
              <Image
                src="/images/green-garden.jpeg"
                alt="Green Garden Yaoundé"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              {/* VOILE */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#3A1218]/60 via-[#4B151D]/75 to-[#250A0F]/95" />


              {/* CONTENU */}
              <div className="relative z-10 flex min-h-[520px] flex-col justify-end p-8 md:p-10">

                <p className="text-[10px] uppercase tracking-[0.4em] text-[#F4C58C]">
                  Lieu de la célébration
                </p>

                <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                  Green Garden
                </h2>

                <div className="mt-6 h-px w-16 bg-[#F4C58C]" />

                <p className="mt-6 text-lg text-white/90">
                  Yaoundé · Odza
                </p>

                <p className="mt-1 text-sm text-white/70">
                  Immeuble HAPPY
                </p>

                <p className="mt-7 max-w-xl leading-7 text-white/80">
                  La cérémonie à l’église et la soirée se dérouleront au même endroit.
                  Vous pourrez ainsi profiter pleinement de la journée sans avoir à
                  changer de lieu.
                </p>


                {/* BOUTONS */}
                <div className="mt-8 flex flex-wrap gap-4">

                  {/* GOOGLE MAPS */}
                  <a
                    href="https://maps.app.goo.gl/bfcaAhmSLWzeWXKv8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#C54716] px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#A83D13] hover:shadow-lg"
                  >
                    Voir sur Google Maps
                  </a>


                  {/* ITINÉRAIRE */}
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=3.811168,11.538854"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/35 bg-white/10 px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-white backdrop-blur transition duration-300 hover:bg-white/20"
                  >
                    Ouvrir l’itinéraire
                  </a>

                </div>

              </div>

            </div>


            {/* ===================================================
                GOOGLE MAP
            =================================================== */}
            <div className="overflow-hidden rounded-[32px] border border-white/15 bg-white/10 shadow-2xl">

              <iframe
                title="Green Garden Yaoundé"
                src="https://www.google.com/maps?q=3.811168,11.538854&z=16&output=embed"
                className="h-[520px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

          </div>


          {/* =====================================================
              MESSAGE DE FIN
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
              Nous vous attendons avec impatience.
            </p>

          </div>

        </div>
      </section>


      {/* FOOTER COMMUN */}
      <Footer />

    </main>
  );
}