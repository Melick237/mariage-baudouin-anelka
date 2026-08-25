import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#3A241E] px-6 py-20 text-[#FFF8F2] md:px-12">

      {/* décorations */}
      <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full border border-white/5" />

      <div className="relative mx-auto max-w-6xl">

        {/* =========================
            HAUT DU FOOTER
        ========================== */}
        <div className="text-center">

          <p className="text-[10px] uppercase tracking-[0.45em] text-[#F4C58C]">
            Merci de faire partie de notre histoire
          </p>

          <h2 className="mt-5 font-serif text-4xl md:text-6xl">
            Anelka

            <span className="mx-3 text-[#C54716]">
              &
            </span>

            Baudouin
          </h2>

          <div className="mx-auto mt-7 h-px w-24 bg-[#F4C58C]/60" />

          <p className="mt-6 font-serif text-xl italic text-white/80">
            24 & 28 novembre 2026
          </p>

          <p className="mt-3 text-sm tracking-wide text-white/60">
            Dote • Mairie • Église • Soirée
          </p>

        </div>


        {/* =========================
            LIENS RAPIDES
        ========================== */}
        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] uppercase tracking-[0.25em] text-white/65">


          <Link
            href="/#countdown"
            className="transition hover:text-[#F4C58C]"
          >
            Compte à rebours
          </Link>

          <Link
            href="/#story"
            className="transition hover:text-[#F4C58C]"
          >
            Notre histoire
          </Link>

          <Link
            href="/programme"
            className="transition hover:text-[#F4C58C]"
          >
            Programme
          </Link>

          <Link
            href="/dress-code"
            className="transition hover:text-[#F4C58C]"
          >
            Dress Code
          </Link>

          <Link
            href="/rsvp"
            className="transition hover:text-[#F4C58C]"
          >
            RSVP
          </Link>

          <Link
            href="/hebergements"
            className="transition hover:text-[#F4C58C]"
          >
            Hébergements
          </Link>

          <Link
            href="/lieux"
            className="transition hover:text-[#F4C58C]"
          >
            Lieux
          </Link>

          <Link
            href="/cadeaux"
            className="transition hover:text-[#F4C58C]"
          >
            Cadeaux
          </Link>

          <Link
            href="/snapchat"
            className="transition hover:text-[#F4C58C]"
          >
            Snapchat
          </Link>

        </div>


        {/* =========================
            RETOUR ACCUEIL
        ========================== */}
        <div className="mt-14 text-center">

          <Link
            href="/"
            className="group inline-flex flex-col items-center text-white/60 transition hover:text-[#F4C58C]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition group-hover:border-[#F4C58C]/60">
              ↑
            </span>

            <span className="mt-3 text-[9px] uppercase tracking-[0.35em]">
              Retour à l’accueil
            </span>
          </Link>

        </div>


        {/* =========================
            BAS DU FOOTER
        ========================== */}
        <div className="mx-auto mt-14 h-px max-w-xl bg-white/10" />

        <div className="mt-7 flex flex-col items-center justify-between gap-4 text-center text-[10px] text-white/35 md:flex-row md:text-left">

          <p>
            Anelka & Baudouin · 2026
          </p>

          <p className="font-serif italic">
            Deux cœurs, un même chemin.
          </p>

        </div>

      </div>
    </footer>
  );
}