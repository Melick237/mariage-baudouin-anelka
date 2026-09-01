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
              Retrouvez ici les informations nécessaires pour rejoindre
              les différents lieux de célébration à Bayangam et à Yaoundé.
            </p>

          </div>


          {/* =====================================================
              BAYANGAM
          ====================================================== */}
          <div className="mt-20">

            {/* TITRE BAYANGAM */}
            <div className="mx-auto max-w-3xl text-center">

              <p className="text-[10px] uppercase tracking-[0.4em] text-[#F4C58C]">
                26 novembre 2026
              </p>

              <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                Bayangam
              </h2>

              <div className="mx-auto mt-5 h-px w-16 bg-[#F4C58C]/70" />

              <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/75">
                La dote et le mariage civil se dérouleront au domicile
                des parents d&apos;Anelka à Bayangam.
              </p>

            </div>


            {/* =====================================================
                DOMICILE + PLAN
            ====================================================== */}
            <div className="mt-10 grid gap-8 lg:grid-cols-2">

              {/* ===================================================
                  PHOTO DU DOMICILE + INFORMATIONS
              =================================================== */}
              <div className="relative min-h-[560px] overflow-hidden rounded-[34px] border border-white/15 shadow-2xl lg:h-[560px]">

                {/* PHOTO DU DOMICILE */}
                <Image
                  src="/images/bayangam-maison.jpeg"
                  alt="Domicile des parents d'Anelka à Bayangam"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                {/* VOILE */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#3A1218]/45 via-[#4B151D]/70 to-[#250A0F]/95" />


                {/* CONTENU */}
                <div className="relative z-10 flex h-full min-h-[560px] flex-col justify-end p-7 md:p-9">

                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#F4C58C]">
                    Dote & mariage civil
                  </p>

                  <h3 className="mt-4 font-serif text-4xl leading-[1.05] text-white md:text-5xl">
                    Domicile des parents d&apos;Anelka
                  </h3>

                  <div className="mt-5 h-px w-16 bg-[#F4C58C]" />

                  <p className="mt-5 text-lg text-white/90">
                    Bayangam
                  </p>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 md:text-base">
                    La dote ainsi que le mariage civil auront lieu au domicile
                    des parents d&apos;Anelka. Utilisez la localisation Google Maps
                    ou le plan indiqué à côté pour rejoindre facilement le lieu.
                  </p>


                  {/* BOUTONS */}
                  <div className="mt-7 grid grid-cols-2 gap-3">

                    {/* GOOGLE MAPS */}
                    <a
                      href="https://maps.app.goo.gl/LrwPTYnAyqoMpGbi7?g_st=ic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#C54716] px-3 text-center text-[8px] uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#A83D13] hover:shadow-lg sm:text-[9px] sm:tracking-[0.18em]"
                    >
                      Voir sur Google Maps
                    </a>


                    {/* ITINÉRAIRE */}
                    <a
                      href="https://maps.app.goo.gl/LrwPTYnAyqoMpGbi7?g_st=ic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/35 bg-white/10 px-3 text-center text-[8px] uppercase tracking-[0.16em] text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/20 sm:text-[9px] sm:tracking-[0.18em]"
                    >
                      Ouvrir l&apos;itinéraire
                    </a>

                  </div>

                </div>

              </div>


              {/* ===================================================
                  PLAN DE LOCALISATION
              =================================================== */}
              <div className="flex min-h-[560px] flex-col overflow-hidden rounded-[34px] border border-white/15 bg-[#FFF8F2] shadow-2xl lg:h-[560px]">

                {/* TITRE DU PLAN */}
                <div className="shrink-0 bg-[#FFF8F2] px-7 pb-4 pt-6 text-[#6D3828] md:px-9">

                  <p className="text-[9px] uppercase tracking-[0.35em] text-[#C54716]">
                    Pour vous guider
                  </p>

                  <h3 className="mt-2 font-serif text-2xl md:text-3xl">
                    Plan de localisation
                  </h3>

                </div>


                {/* IMAGE DU PLAN */}
                <a
                  href="/images/bayangam-plan.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative min-h-0 flex-1 bg-white"
                >
                  <Image
                    src="/images/bayangam-plan.jpeg"
                    alt="Plan de localisation du domicile à Bayangam"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-2 transition duration-500 group-hover:scale-[1.015] md:p-3"
                  />
                </a>


                {/* BAS DU PLAN */}
                <div className="shrink-0 border-t border-[#6D3828]/10 bg-[#FFF8F2] px-7 py-5 text-[#6D3828] md:px-9">

                  <p className="text-sm leading-6 text-[#805B4E]">
                    Consultez ce plan pour suivre les différents points de repère
                    jusqu&apos;au domicile.
                  </p>


                  {/* BOUTONS PLAN */}
                  <div className="mt-4 grid grid-cols-2 gap-3">

                    <a
                      href="/images/bayangam-plan.jpeg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#C54716] px-3 text-center text-[8px] uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#A83D13] sm:text-[9px] sm:tracking-[0.18em]"
                    >
                      Voir le plan en grand
                    </a>

                    <a
                      href="https://maps.app.goo.gl/LrwPTYnAyqoMpGbi7?g_st=ic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[52px] w-full items-center justify-center rounded-full border border-[#6D3828]/20 bg-transparent px-3 text-center text-[8px] uppercase tracking-[0.16em] text-[#6D3828] transition duration-300 hover:-translate-y-1 hover:border-[#C54716]/40 hover:text-[#C54716] sm:text-[9px] sm:tracking-[0.18em]"
                    >
                      Ouvrir Google Maps
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
              SÉPARATEUR
          ====================================================== */}
          <div className="mx-auto my-20 flex max-w-xl items-center gap-5">

            <div className="h-px flex-1 bg-[#F4C58C]/25" />

            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F4C58C]/35">
              <span className="font-serif text-xs text-[#F4C58C]">
                A | B
              </span>
            </div>

            <div className="h-px flex-1 bg-[#F4C58C]/25" />

          </div>


          {/* =====================================================
              GREEN GARDEN
          ====================================================== */}
          <div>

            {/* TITRE */}
            <div className="mx-auto mb-10 max-w-3xl text-center">

              <p className="text-[10px] uppercase tracking-[0.4em] text-[#F4C58C]">
                28 novembre 2026
              </p>

              <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                Yaoundé
              </h2>

              <div className="mx-auto mt-5 h-px w-16 bg-[#F4C58C]/70" />

              <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/75">
                La cérémonie à l&apos;église et la soirée se dérouleront
                au même endroit, au Green Garden.
              </p>

            </div>


            {/* GREEN GARDEN : 2 CARTES DE MÊME TAILLE */}
            <div className="grid gap-8 lg:grid-cols-2">

              {/* ===================================================
                  PHOTO + INFORMATIONS
              =================================================== */}
              <div className="relative min-h-[560px] overflow-hidden rounded-[34px] border border-white/15 shadow-2xl lg:h-[560px]">

                {/* PHOTO */}
                <Image
                  src="/images/green-garden.jpeg"
                  alt="Green Garden Yaoundé"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                {/* VOILE */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#3A1218]/60 via-[#4B151D]/75 to-[#250A0F]/95" />


                {/* CONTENU */}
                <div className="relative z-10 flex h-full min-h-[560px] flex-col justify-end p-7 md:p-9">

                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#F4C58C]">
                    Lieu de la célébration
                  </p>

                  <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                    Green Garden
                  </h2>

                  <div className="mt-5 h-px w-16 bg-[#F4C58C]" />

                  <p className="mt-5 text-lg text-white/90">
                    Yaoundé · Odza
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    Immeuble HAPPY
                  </p>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 md:text-base">
                    La cérémonie à l&apos;église et la soirée se dérouleront au
                    même endroit. Vous pourrez ainsi profiter pleinement de la
                    journée sans avoir à changer de lieu.
                  </p>


                  {/* BOUTONS */}
                  <div className="mt-7 grid grid-cols-2 gap-3">

                    {/* GOOGLE MAPS */}
                    <a
                      href="https://maps.app.goo.gl/bfcaAhmSLWzeWXKv8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#C54716] px-3 text-center text-[8px] uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#A83D13] hover:shadow-lg sm:text-[9px] sm:tracking-[0.18em]"
                    >
                      Voir sur Google Maps
                    </a>


                    {/* ITINÉRAIRE */}
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=3.811168,11.538854"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/35 bg-white/10 px-3 text-center text-[8px] uppercase tracking-[0.16em] text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/20 sm:text-[9px] sm:tracking-[0.18em]"
                    >
                      Ouvrir l&apos;itinéraire
                    </a>

                  </div>

                </div>

              </div>


              {/* ===================================================
                  GOOGLE MAP
              =================================================== */}
              <div className="min-h-[560px] overflow-hidden rounded-[34px] border border-white/15 bg-white/10 shadow-2xl lg:h-[560px]">

                <iframe
                  title="Green Garden Yaoundé"
                  src="https://www.google.com/maps?q=3.811168,11.538854&z=16&output=embed"
                  className="h-full min-h-[560px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>

            </div>

          </div>


          {/* =====================================================
              MESSAGE DE FIN
          ====================================================== */}
          <div className="mt-20 text-center">

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