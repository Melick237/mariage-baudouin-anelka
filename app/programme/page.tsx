import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const programme26 = [
  {
    time: "08:00",
    title: "Arrivée des invités",
    description: "Domicile des parents d’Anelka · Bayangam",
    icon: "⌂",
  },
  {
    time: "09:00",
    title: "Cérémonies traditionnelles",
    description: "Dote",
    icon: "♡",
  },
  {
    time: "12:00",
    title: "Apéro",
    description: "",
    icon: "◌",
  },
  {
    time: "13:00",
    title: "Mariage civil",
    description: "Union devant les Hommes",
    icon: "⚭",
  },
  {
    time: "14:00",
    title: "Photos",
    description: "Souvenirs avec les mariés",
    icon: "◉",
  },
  {
    time: "16:00",
    title: "Vin d’honneur",
    description: "Un moment de partage pour clôturer cette première journée",
    icon: "♧",
  },
];

const programme28 = [
  {
    time: "13:00",
    title: "Installation des invités",
    description: "",
    icon: "⌂",
  },
  {
    time: "14:00",
    title: "Cérémonie à l’église",
    description: "",
    icon: "✝",
  },
  {
    time: "16:00",
    title: "Photos",
    description: "Souvenirs avec les mariés",
    icon: "◉",
  },
  {
    time: "17:00",
    title: "Apéro",
    description: "",
    icon: "◌",
  },
  {
    time: "18:00",
    title: "Cocktail dînatoire & soirée",
    description: "Que la célébration commence…",
    icon: "✦",
  },
];

function Timeline({
  items,
}: {
  items: {
    time: string;
    title: string;
    description: string;
    icon: string;
  }[];
}) {
  return (
    <div className="relative mx-auto mt-12 max-w-2xl">
      {/* Ligne verticale */}
      <div className="absolute bottom-5 left-[24px] top-5 w-px bg-gradient-to-b from-[#D77A57]/10 via-[#D77A57]/70 to-[#D77A57]/10 sm:left-[27px]" />

      <div className="space-y-7 sm:space-y-8">
        {items.map((item, index) => (
          <div
            key={`${item.time}-${item.title}`}
            className="relative grid grid-cols-[50px_minmax(0,1fr)] gap-x-4 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-x-5"
          >
            {/* Icône ronde comme sur la référence */}
            <div className="relative z-10 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D77A57]/45 bg-[#FFF9F3] text-[17px] text-[#6D071A] shadow-[0_10px_25px_rgba(83,46,35,0.08)] sm:h-[54px] sm:w-[54px] sm:text-lg">
                {item.icon}
              </div>
            </div>

            {/* Heure + contenu */}
            <div className="min-w-0 pt-0.5">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <span className="rounded-[7px] bg-[#F0D8CA] px-3 py-1.5 text-[11px] font-semibold tracking-[0.05em] text-[#6D071A] shadow-sm sm:text-xs">
                  {item.time}
                </span>

                <h3 className="font-serif text-[21px] font-semibold leading-tight text-[#4A2924] sm:text-[24px]">
                  {item.title}
                </h3>
              </div>

              {item.description && (
                <p className="mt-2 max-w-xl text-[13px] leading-6 text-[#80665E] sm:text-sm sm:leading-7">
                  {item.description}
                </p>
              )}

              {index !== items.length - 1 && (
                <div className="mt-6 h-px w-full bg-[#D77A57]/14 sm:mt-7" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProgrammePage() {
  return (
    <main className="min-h-screen bg-[#F8F1E8]">
      <Navigation />

      {/* =========================================================
          PROGRAMME DU MARIAGE
      ========================================================= */}
      <section
        id="programme"
        className="relative overflow-hidden bg-[#F8F1E8] px-5 pb-24 pt-32 sm:px-6 md:px-12 md:pb-28 md:pt-36"
      >
        {/* Décorations — même univers visuel que le reste du site */}
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#C54716]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-[#6D071A]/5 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">

          {/* =====================================================
              TITRE
          ====================================================== */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#C54716] sm:text-xs">
              Notre mariage
            </p>

            <h1 className="mt-4 font-serif text-5xl italic text-[#4A2924] sm:text-6xl md:text-7xl">
              Programme
            </h1>

            <div className="mx-auto mt-6 h-px w-20 bg-[#D77A57]" />

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#755B54] sm:text-base sm:leading-8 md:text-lg">
              Deux journées, quatre moments précieux et une seule histoire
              à célébrer ensemble.
            </p>
          </div>

          {/* =====================================================
              26 NOVEMBRE 2026
          ====================================================== */}
          <div className="mx-auto mt-20 max-w-4xl sm:mt-24">
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#C54716] sm:text-xs">
                Le grand jour
              </p>

              <h2 className="mt-3 font-serif text-4xl text-[#4A2924] md:text-5xl">
                26 novembre 2026
              </h2>

              <p className="mt-3 font-serif text-xl italic text-[#B8522C]">
                Dote & Mairie
              </p>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#755B54]">
                Les cérémonies se dérouleront au domicile des parents
                d’Anelka à Bayangam.
              </p>
            </div>

            <Timeline items={programme26} />
          </div>

          {/* =====================================================
              SÉPARATEUR
          ====================================================== */}
          <div className="mx-auto flex max-w-xl items-center gap-5 py-16 md:py-20">
            <div className="h-px flex-1 bg-[#D77A57]/35" />

            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D77A57]/50 bg-[#FFF9F3] shadow-sm">
              <span className="text-[#C54716]">♡</span>
            </div>

            <div className="h-px flex-1 bg-[#D77A57]/35" />
          </div>

          {/* =====================================================
              28 NOVEMBRE 2026
          ====================================================== */}
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#C54716] sm:text-xs">
                Célébrons notre amour pour toujours
              </p>

              <h2 className="mt-3 font-serif text-4xl text-[#4A2924] md:text-6xl">
                28 novembre 2026
              </h2>

              <p className="mt-3 font-serif text-xl italic text-[#B8522C]">
                Église & Soirée
              </p>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#755B54]">
                L&apos;église et la soirée se dérouleront au même endroit :
                <span className="font-medium text-[#6D071A]"> Green Garden</span>
                <br />
                Yaoundé · Odza, Immeuble HAPPY
              </p>
            </div>

            <Timeline items={programme28} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
