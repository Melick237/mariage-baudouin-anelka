"use client";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Image from "next/image";
import { Cormorant_Garamond, Pinyon_Script } from "next/font/google";
import { useEffect, useState } from "react";


const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [opened, setOpened] = useState(false);
  const [enteredSite, setEnteredSite] = useState(false);
  const [siteReady, setSiteReady] = useState(false);
  const [showFullStory, setShowFullStory] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  /* =========================================================
      NAVIGATION VERS COUNTDOWN / STORY
  ========================================================= */
  useEffect(() => {
    const scrollToCurrentSection = () => {
      const hash = window.location.hash;

      if (!hash) return;

      const sectionId = hash.replace("#", "");

      setEnteredSite(true);

      setTimeout(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    };

    const hash = window.location.hash;

    if (hash) {
      setEnteredSite(true);

      setTimeout(() => {
        const sectionId = hash.replace("#", "");
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }

    setSiteReady(true);

    window.addEventListener("hashchange", scrollToCurrentSection);

    return () => {
      window.removeEventListener("hashchange", scrollToCurrentSection);
    };
  }, []);

  /* =========================================================
      COMPTE À REBOURS
  ========================================================= */
  useEffect(() => {
    const targetDate = new Date("2026-11-26T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const openInvitation = () => {
    setShowEnvelope(true);

    setTimeout(() => {
      setOpened(true);
    }, 500);
  };

  const closeInvitation = () => {
    setOpened(false);

    setTimeout(() => {
      setShowEnvelope(false);
    }, 500);
  };

  if (!siteReady) {
    return <main className="min-h-screen bg-[#7f4634]" />;
  }

  /* =========================================================
      HISTOIRE ANELKA & BAUDOUIN — 4 CHAPITRES
  ========================================================= */
  const storyMoments = [
    {
      year: "",
      title: "L'aube de notre histoire",
      image: "/images/histoires1.jpeg",
      imagePosition: "center 30%",
      anelkaImage: "/images/histoire-chapitre1-anelka.jpeg",
      baudouinImage: "/images/histoire-chapitre1-baudouin.jpeg",
      anelka: [
        `Avant que nous nous retrouvions en Allemagne, je me rappelle une fois où il m'a séduit par son charme, le dernier jour d'une formation en langage C++ qu'on avait fait au Lycée. Le gar était, je crois le meilleur de la formation et avait un petit charisme que j'aimais beaucoup. Bon après la formation, nous nous sommes perdus de vue.`,
      ],
      baudouin: [
        `On se connaissait depuis le pays car nous avons fait la classe de 5ème M4 au Lycée classique de Bafang ensemble. On ne parlait pas vraiment mais je la trouvais jolie alors hein, en classe elle s'asseyait loin devant et moi derrière et j'avais mes amis avec qui je tuais (passais 😆) le temps. On était tous jeunes du coup je ne la regardais pas avec des intentions... Le temps est passé, on a fini le Lycée, on s'est perdus de vue. Moi je suis allé en Allemagne avant elle, j'ai commencé les études.`,
      ],
    },

    {
      year: "",
      title: "Notre Histoire d'amour",
      image: "/images/histoire222.JPG",
      imagePosition: "center",
      anelkaImage: null,
      baudouinImage: null,
      anelka: [
        `Une fois en Allemagne il m'a appelé, un appel qui a rendu ma journée particulière et joyeuse. Je ne l’avais pas appréhendé comme un appel pour draguer mais un appel qui me faisait plaisir, causer avec lui, me rendait heureuse. Après ce jour on s’appelait tous les jours, quand je finissais mes cours, je courais directement pour m’asseoir dans ma chambre et pouvoir discuter avec lui en appel vidéo sur Skype. Je me rappelle qu’il me faisait toujours rire, qu’il m’encourageait beaucoup et qu’il me faisait me sentir importante. Ça a été pour moi la période la plus belle de notre relation jusqu’à aujourd’hui.`,
      ],
      baudouin: [
        `Un jour, un mardi matin à 8hr en allant faire cours je manipulais mon téléphone et j'ai vue qu'un ami du lycée qu'on avait en commun l'a mis en statuts WhatsApp je me suis dit mais tient ça fait bail et elle est restée toujours debout comme avant. J'ai pris son contact au gar et j'ai écrit directement. Elle ne se rappelait pas trop de moi j'ai donc lancé l'appel vidéo sur place (en plus j'étais sorti le jour-là bien chaud) elle a décroché on s'est salué elle s'est rappelée de moi. On a commencé à converser elle souriait beaucoup (j'étais quand même débout hein). J'ai dit que je vais actuellement en cours et je vais la rappeler le soir. En ce moment elle venait d'arriver en Allemagne et faisait les cours de langue dans une autre ville. J'ai donc commencé après les cours en soirée à l'appeler pour saluer, prendre des nouvelles. Plus on s'appelait plus je ressentais un feeling car on riait et blaguait aussi beaucoup et là je commençais à m'intéresser à elle car après nos causeries je me sentais toujours bien genre c'était comme une thérapie. À un moment je me suis dit pourquoi pas essayer quelque chose ? (Sans lui dire). On continuait donc à causer presque chaque soir mais j'avais déjà mes intentions en tête. Tellement on causait qu'à l'approche des examens je préparais une matière que j'aimais tellement et que je pratiquais chaque jour. Au lieu de donc de me concentrer et préparer ma matière, chaque soir je mettais le cahier devant moi, je lançais l'appel vidéo on causait 😂 elle me disait d'aller réviser je lui répondais aka je maîtrise. C'est là alors que j'ai bien échoué cette matière et c'était ma première fois dans ma vie d'échouer. J'avais tellement mal dans mon cœur, elle me consolait beaucoup et elle disait aussi « waaa c'est à cause de moi que tu as échoué » moi alors comme j'aime faire le dur je lui disais non t'inquiète ce n’est pas toi, ça peut arriver mais j'avais bien mal 🥲. Après je me suis dit « peut-être c'était le prix à payer pour recevoir l’étoile qui va illuminer ma vie » c'est donc passé, on a continué nos YelloNight tranquillement.`,
      ],
    },

    {
      year: "",
      title: "Notre rencontre",
      image: "/images/histoire22.jpeg",
      imagePosition: "center",
      anelkaImage: null,
      baudouinImage: null,
      anelka: [
        `Puis quand j’ai fini de composer, il m’a invité dans sa ville, je pense à l’occasion de son anniversaire, non en fait son anniversaire était déjà passé et puis il s’est fâché que je n’étais pas là et qu’il aurait aimé que je sois là. J’ai donc fait un voyage et nous nous sommes retrouvés dans sa ville et c’est là que notre relation a vraiment débuté. Ce qui m’a marqué quand je suis arrivé chez lui, c’est sa personnalité. Il était très humble, très poli, pas juste avec moi mais aussi avec son entourage. Il m’offrait une stabilité de cœur et une perspective de vie que j’admirait beaucoup, il était travailleur et ce que j’apprécie le plus sur lui, c’est qu’il trouvait solution à tous mes problèmes, dans mes études, dans mes procédures administratives, il m’accompagnait. Il m’a montré qu’il avait une volonté de réussir et surtout qu’il s’en donne les moyens.`,
      ],
      baudouin: [
        `À un moment elle cherchait dans quelle ville continuer après les cours de langue, pour l'attirer vers moi je lui conseillais de venir dans ma ville. Elle est donc venue là-bas pour faire un examen de langue et arrivée chez moi elle a déballé le sac et il y'avait beaucoup de cadeaux pour moi je ne m’y attendais vraiment pas 🥲. Le séjour s'est bien passé, pour une première prise de contact physique c'était très cool j'ai beaucoup apprécié surtout la douceur, elle préparait tout le temps et c'était bon 🥲. Malheureusement elle a échoué l'examen qu'elle était venue faire (peut-être c'était aussi un signe 😅). Je l'ai aussi consolée et après elle a refait, elle a réussi. Après ce séjour ensemble je me suis dit « il faut que j'accélère 😁 » car j'avais aimé le temps passé avec elle.`,
      ],
    },

    {
      year: "",
      title: "Notre famille",
      image: "/images/histoire5.jpeg",
      imagePosition: "center",
      anelkaImage: null,
      baudouinImage: null,
      anelka: [
        `En février 2024 on a aménagé ensemble, ce fut une période très bouleversante compte tenu de tout le stress et les dépenses que ça entrainait, d’autant plus que j’étais enceinte. En avril 2024 est venu au monde notre petit bout de choux, mon chéri d’amour, comme j’aime l’appeler, il est venu comme un torrent ce qui nous a bouleversé psychologiquement, mais comme le beau temps vient après la pluie, il a rayonné notre vie, et continue de le faire tous les jours, c’est notre levée du soleil, comme son prénom LONAAM l'indique. Il est né pour illuminer nos vies. Notre guerrier, notre lion, sa venue était comme un tremblement de terre, il venait avec puissance.`,
        `Merci d’avoir été la solution à mes problèmes mon chéri.`,
        `Merci d’avoir cru en nous.`,
        `Merci d’aimer si fort.`,
        `Et merci à LONAAM de nous avoir choisis pour briller.`,
      ],
      baudouin: [
        `J'ai continué à l'accélérer et nous nous sommes mis ensemble, elle a fini par venir faire ses études dans la ville où je vivais et nous avons cheminé ensemble jusqu'à aujourd'hui ❣️.`,
      ],
    },
  ];

  const memoryLane = [
  {
    year: "2019",
    text: "Première sortie en couple",
    image: "/images/memory-2019.jpeg",
    position: "center 48%",
    photoClass: "object-cover",
  },
  {
    year: "2020",
    text: "Nos soirées en amoureux",
    image: "/images/memory-2020.jpeg",
    position: "center 40%",
    photoClass: "object-cover",
  },
  {
    year: "2021",
    text: "Notre réconciliation après une remise en question sur notre couple",
    image: "/images/memory-2021.jpeg",
    position: "center 26%",
    photoClass: "object-cover",
  },
  {
    year: "2022",
    text: "Une petite balade en amoureux",
    image: "/images/histoire22.jpeg",
    position: "center 50%",
    photoClass: "object-cover",
  },
  {
    year: "2023",
    text: "Grandir et devenir plus forts côte à côte",
    image: "/images/histoire33.jpeg",
    position: "center 30%",
    photoClass: "object-cover",
  },
  {
    year: "2024",
    text: "Côte à côte, à travers chaque saison",
    image: "/images/memory-2024.jpeg",
    position: "center 30%",
    photoClass: "object-cover",
  },
  {
    year: "2025",
    text: "D’un appel à une promesse pour toute une vie",
    image: "/images/memory-2025.jpeg",

    // On déplace le cadrage vers la gauche
    // pour laisser davantage de place à Anelka à droite.
    position: "10% center",

    photoClass: "object-cover",
  },
];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#7f4634]">
      {enteredSite && <Navigation />}

      {/* =========================================================
          PAGE D'ACCUEIL
      ========================================================= */}
      {!enteredSite && (
        <section className="relative min-h-screen overflow-hidden text-white">
          <Image
            src="/images/couple.jpeg"
            alt="Anelka et Baudouin"
            fill
            priority
            sizes="100vw"
            className="
              object-cover

              object-[50%_center]

              sm:object-[50%_center]

              md:object-[center_30%]
            "
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-[#6D071A]/10 to-[#3A1F1A]/80" />

          <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
            <div className="w-full max-w-2xl text-center">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#F3D0AD] md:text-xs">
                Ensemble avec leurs familles
              </p>

              <div className="mx-auto mt-5 h-px w-28 bg-[#E8C79D]/70" />
                <h1
                  className="
                    mt-7
                    font-serif
                    text-5xl leading-[0.95]
                    text-white
                    drop-shadow-[0_2px_4px_rgba(109,7,26,0.95)]
                    md:text-7xl
                  "
                >
                  Anelka

                  <span
                    className="
                      my-2 block
                      text-[#E2A066]
                      drop-shadow-[0_2px_4px_rgba(109,7,26,0.95)]
                    "
                  >
                    &
                  </span>

                  Baudouin
                </h1>

              <p
                className="
                  mx-auto mt-8
                  font-serif
                  text-[20px] font-semibold leading-8
                  text-white
                  drop-shadow-[0_2px_4px_rgba(109,7,26,0.95)]
                  md:text-[22px] md:leading-9
                "
              >
                ont la joie de vous inviter
                <br />
                à célébrer leur mariage
              </p>

              <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-4">
                <div className="h-px flex-1 bg-[#E8C79D]/45" />

                <span className="text-[10px] uppercase tracking-[0.28em] text-[#F3D0AD]">
                  26 & 28 novembre 2026
                </span>

                <div className="h-px flex-1 bg-[#E8C79D]/45" />
              </div>

              <p
                className="
                  mt-4
                  text-xs font-medium uppercase
                  tracking-[0.2em]
                  text-white
                  drop-shadow-[0_2px_4px_rgba(109,7,26,0.95)]
                  md:text-sm
                "
              >
                Dote • Mairie • Église • Soirée
              </p>

              <button
                onClick={openInvitation}
                className="mt-10 rounded-full border border-[#E8C79D]/60 bg-[#FFF1E3] px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A93D17] shadow-2xl transition duration-300 hover:scale-105 hover:bg-white"
              >
                Ouvrir l’invitation
              </button>

              <div className="mt-6 animate-bounce text-xl text-[#F3D0AD]">
                ↓
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
    COMPTE À REBOURS — PHOTO ENTIÈRE + TEXTE CENTRAL LISIBLE
========================================================= */}
{enteredSite && (
  <section
    id="countdown"
    className="relative flex min-h-[780px] items-center overflow-hidden px-5 pb-20 pt-32 text-center sm:min-h-[820px] sm:px-6 md:min-h-screen md:pb-24 md:pt-36"
  >
 {/* PHOTO DE FOND */}
  <div className="absolute inset-0 overflow-hidden">
    <Image
      src="/images/countdown-bg.jpg"
      alt="Anelka et Baudouin"
      fill
      priority
      sizes="100vw"
      className="
        object-cover

        scale-[1.10]
        translate-y-[12%]
        object-center

        sm:scale-[1.07]
        sm:translate-y-[3%]

        md:scale-100
        md:translate-y-0
        md:object-[center_4%]

        lg:object-[center_2%]
      "
    />
  </div>

    {/* Voile élégant : améliore fortement la lisibilité sans cacher la photo */}
    <div className="pointer-events-none absolute inset-0 bg-[#2A120D]/30 md:bg-[#2A120D]/24" />

    {/* Léger vignettage pour garder le regard au centre */}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(24,9,5,0.18)_100%)]" />

    {/* CONTENU */}
    <div className="relative z-10 mx-auto w-full max-w-5xl">

      {/* MONOGRAMME */}
      <div
        className="
          mx-auto flex
          h-[100px] w-[100px]
          items-center justify-center
          rounded-full
          border border-white/85
          bg-[#6D071A]/18
          shadow-[0_8px_28px_rgba(109,7,26,0.28)]
          backdrop-blur-[1px]

          sm:h-[120px] sm:w-[120px]
          md:h-[145px] md:w-[145px]
          lg:h-[160px] lg:w-[160px]
        "
      >
        <span
          className={`${pinyon.className}
            whitespace-nowrap
            translate-y-1
            text-[31px] leading-none
            text-white
            drop-shadow-[0_2px_3px_rgba(109,7,26,0.95)]

            sm:text-[35px]
            md:text-[42px]
            lg:text-[48px]
          `}
        >
          A | B
        </span>
      </div>

      {/* TEXTE PRINCIPAL */}
      <div className="mx-auto mt-10 max-w-4xl sm:mt-12 md:mt-14">
        <p
          className="
            text-[13px] font-medium uppercase
            tracking-[0.38em]
            text-white
            drop-shadow-[0_2px_3px_rgba(109,7,26,0.95)]
            sm:text-[15px]
            md:text-[17px]
          "
        >
          Ensemble avec leurs familles
        </p>

        <h1
          className={`${cormorant.className}
            mt-5
            text-[38px] font-medium leading-[0.95]
            text-white
            drop-shadow-[0_2px_4px_rgba(109,7,26,0.95)]
            sm:text-[46px]
            md:text-[58px]
            lg:text-[68px]
          `}
        >
          Anelka et Baudouin
        </h1>

        <p
          className="
            mt-5 text-[11px] font-medium uppercase
            tracking-[0.38em]
            text-white
            drop-shadow-[0_2px_3px_rgba(109,7,26,0.95)]
            sm:text-[15px]
            md:text-[17px]
          "
        >
          vont s&apos;unir pour la vie
        </p>

        <div className="mx-auto mt-8 h-px w-24 bg-white/80 md:w-32" />
      </div>

      {/* COMPTE À REBOURS */}
      <div className="mx-auto mt-10 w-full max-w-4xl sm:mt-12 md:mt-14">
        <div className="grid grid-cols-4">
          {[
            ["days", "Jours"],
            ["hours", "Heures"],
            ["minutes", "Minutes"],
            ["seconds", "Secondes"],
          ].map(([key, label], index) => (
            <div
              key={key}
              className={`relative flex min-w-0 flex-col items-center ${
                index !== 3 ? "after:absolute after:right-0 after:top-1/2 after:h-10 after:w-px after:-translate-y-1/2 after:bg-white/55 md:after:h-14" : ""
              }`}
            >
              <p
                className={`${cormorant.className} text-[34px] font-light leading-none tracking-[0.03em] text-white drop-shadow-[0_2px_4px_rgba(109,7,26,0.95)] sm:text-[44px] md:text-[56px]`}
              >
                {String(timeLeft[key as keyof typeof timeLeft]).padStart(2, "0")}
              </p>

              <p className="mt-4 text-[7px] uppercase tracking-[0.16em] text-white drop-shadow-[0_2px_3px_rgba(109,7,26,0.95)] sm:text-[8px] sm:tracking-[0.22em] md:text-[10px] md:tracking-[0.28em]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PHRASE FINALE */}
      <div className="mt-12 sm:mt-14 md:mt-16">
        <div className="flex items-center justify-center gap-5">
          <div className="h-px w-14 bg-white/75" />
          <span className="text-xs text-white drop-shadow">♥</span>
          <div className="h-px w-14 bg-white/75" />
        </div>

        <p
          className={`${cormorant.className} mx-auto mt-6 max-w-xl text-[21px] italic leading-8 text-white drop-shadow-[0_2px_4px_rgba(109,7,26,0.95)] sm:text-[25px] md:text-[32px]`}
        >
          Au plaisir de célébrer ce moment avec vous.
        </p>
      </div>
    </div>
  </section>
)}

      {/* =========================================================
          NOTRE HISTOIRE
      ========================================================= */}
      {enteredSite && (
        <section
          id="story"
          className="relative overflow-hidden bg-[#F8EFE9] px-6 py-24 text-[#6D3828] md:px-12 md:py-28"
        >
          <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-[#D99573]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-32 h-80 w-80 rounded-full bg-[#C54716]/10 blur-3xl" />

          <div className={`${pinyon.className} pointer-events-none absolute left-8 top-24 hidden text-[145px] text-[#C54716]/5 md:block`}>
            A
          </div>

          <div className={`${pinyon.className} pointer-events-none absolute bottom-24 right-8 hidden text-[145px] text-[#C54716]/5 md:block`}>
            B
          </div>

          <div className="relative z-10 mx-auto max-w-6xl">
            {/* ================= TITRE HISTOIRE ================= */}
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-xs uppercase tracking-[0.4em] text-[#A93D17]">
                Notre histoire
              </h3>

              <div className="mx-auto mt-7 h-px w-24 bg-[#D77A57]" />

              <p className={`${cormorant.className} mx-auto mt-7 max-w-2xl text-xl italic leading-8 text-[#805B4E] md:text-2xl`}>
                Plongez dans nos moments précieux et{" "}
                <br className="hidden sm:block" />
                laissez-vous emporter par l&apos;histoire qui{" "}
                <br className="hidden sm:block" />
                nous mène jusqu&apos;à notre mariage.
              </p>
            </div>

            {/* ================= CHAPITRES ================= */}
            <div className="mt-20 space-y-20 md:mt-24 md:space-y-28">
              {storyMoments
                .slice(0, showFullStory ? storyMoments.length : 2)
                .map((moment, index) => {
                const imageOnLeft = index % 2 === 0;

                return (
                  <article
                    key={`${moment.year}-${moment.title}`}
                    className="relative"
                  >
                    <div
                      className={`${cormorant.className} pointer-events-none absolute -top-16 hidden text-[130px] font-light leading-none text-[#C54716]/[0.045] lg:block ${
                        imageOnLeft ? "right-0" : "left-0"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {index === 0 ? (
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.4em] text-[#B84A20]">
                          {moment.year}
                        </p>

                        <h3 className={`${cormorant.className} mt-4 text-4xl font-medium leading-[1.08] text-[#5A3026] md:text-5xl`}>
                          {moment.title}
                        </h3>

                        <div className="mt-6 h-px w-16 bg-[#D77A57]" />

                        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-10">
                          {/* ================= ANELKA + PHOTO ================= */}
                          <div className="overflow-hidden rounded-[30px] border border-[#C54716]/10 bg-white/55 shadow-[0_18px_50px_rgba(95,45,30,0.08)]">
                            <div className="relative h-[360px] overflow-hidden sm:h-[430px]">
                              <Image
                                src={moment.anelkaImage || moment.image}
                                alt={`${moment.title} - Anelka`}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                                style={{ objectPosition: "center 25%" }}
                              />
                              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3A1F1A]/45 via-transparent to-transparent" />
                            </div>

                            <div className="p-6 md:p-7">
                              <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C54716] text-xs font-medium text-white">
                                  A
                                </div>

                                <div>
                                  <p className="text-[9px] uppercase tracking-[0.32em] text-[#C54716]">
                                    Du côté d’Anelka
                                  </p>

                                  <p className={`${cormorant.className} mt-1 text-base italic text-[#9B6B59]`}>
                                    Ce qu’elle a vécu
                                  </p>
                                </div>
                              </div>

                              <div className="mt-5 space-y-4">
                                {moment.anelka.map(
                                  (paragraph, paragraphIndex) => (
                                    <p
                                      key={paragraphIndex}
                                      className="leading-8 text-[#765247]"
                                    >
                                      {paragraph}
                                    </p>
                                  )
                                )}
                              </div>
                            </div>
                          </div>

                          {/* ================= BAUDOUIN + PHOTO ================= */}
                          <div className="overflow-hidden rounded-[30px] border border-[#274E13]/10 bg-[#F1F4EC]/70 shadow-[0_18px_50px_rgba(53,75,43,0.08)]">
                            <div className="relative h-[360px] overflow-hidden sm:h-[430px]">
                              <Image
                                src={moment.baudouinImage || moment.image}
                                alt={`${moment.title} - Baudouin`}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                                style={{ objectPosition: "center 25%" }}
                              />
                              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1E2E19]/40 via-transparent to-transparent" />
                            </div>

                            <div className="p-6 md:p-7">
                              <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#274E13] text-xs font-medium text-white">
                                  B
                                </div>

                                <div>
                                  <p className="text-[9px] uppercase tracking-[0.32em] text-[#274E13]">
                                    Du côté de Baudouin
                                  </p>

                                  <p className={`${cormorant.className} mt-1 text-base italic text-[#68805B]`}>
                                    Ce qu’il a vécu
                                  </p>
                                </div>
                              </div>

                              <div className="mt-5 space-y-4">
                                {moment.baudouin.map(
                                  (paragraph, paragraphIndex) => (
                                    <p
                                      key={paragraphIndex}
                                      className="leading-8 text-[#56604D]"
                                    >
                                      {paragraph}
                                    </p>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
                        {/* ================= IMAGE ================= */}
                        <div
                          className={
                            imageOnLeft ? "lg:order-1" : "lg:order-2"
                          }
                        >
                          <div
                            className={
                              index === 1
                                ? "relative mx-auto aspect-[1/1.65] w-full max-w-[430px] overflow-hidden rounded-[34px] shadow-[0_25px_70px_rgba(95,45,30,0.16)]"
                                : "relative h-[430px] overflow-hidden rounded-[34px] shadow-[0_25px_70px_rgba(95,45,30,0.16)] md:h-[560px]"
                            }
                          >
                            <Image
                              src={moment.image}
                              alt={`${moment.title} - Anelka et Baudouin`}
                              fill
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              className="object-cover"
                              style={{
                                objectPosition: moment.imagePosition,
                              }}
                            />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3A1F1A]/55 via-transparent to-transparent" />
                          </div>
                        </div>

                        {/* ================= TEXTES ================= */}
                        <div
                          className={
                            imageOnLeft ? "lg:order-2" : "lg:order-1"
                          }
                        >
                          <p className="text-[10px] uppercase tracking-[0.4em] text-[#B84A20]">
                            {moment.year}
                          </p>

                          <h3 className={`${cormorant.className} mt-4 text-4xl font-medium leading-[1.08] text-[#5A3026] md:text-5xl`}>
                            {moment.title}
                          </h3>

                          <div className="mt-6 h-px w-16 bg-[#D77A57]" />

                          {/* ================= ANELKA ================= */}
                          <div className="mt-8">
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C54716] text-xs font-medium text-white">
                                A
                              </div>

                              <div>
                                <p className="text-[9px] uppercase tracking-[0.32em] text-[#C54716]">
                                  Du côté d’Anelka
                                </p>

                                <p className={`${cormorant.className} mt-1 text-base italic text-[#9B6B59]`}>
                                  Ce qu’elle a vécu
                                </p>
                              </div>
                            </div>

                            <div className="mt-5 space-y-4">
                              {moment.anelka.map(
                                (paragraph, paragraphIndex) => (
                                  <p
                                    key={paragraphIndex}
                                    className="leading-8 text-[#765247]"
                                  >
                                    {paragraph}
                                  </p>
                                )
                              )}
                            </div>
                          </div>

                          <div className="my-9 flex items-center gap-4">
                            <div className="h-px flex-1 bg-[#D77A57]/25" />

                            <span className="font-serif text-sm text-[#D77A57]">
                              ♡
                            </span>

                            <div className="h-px flex-1 bg-[#D77A57]/25" />
                          </div>

                          {/* ================= BAUDOUIN ================= */}
                          <div className="rounded-[26px] border border-[#274E13]/10 bg-[#F1F4EC]/65 p-6 md:p-7">
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#274E13] text-xs font-medium text-white">
                                B
                              </div>

                              <div>
                                <p className="text-[9px] uppercase tracking-[0.32em] text-[#274E13]">
                                  Du côté de Baudouin
                                </p>

                                <p className={`${cormorant.className} mt-1 text-base italic text-[#68805B]`}>
                                  Ce qu’il a vécu
                                </p>
                              </div>
                            </div>

                            <div className="mt-5 space-y-4">
                              {moment.baudouin.map(
                                (paragraph, paragraphIndex) => (
                                  <p
                                    key={paragraphIndex}
                                    className="leading-8 text-[#56604D]"
                                  >
                                    {paragraph}
                                  </p>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ================= SÉPARATEUR ================= */}
                    {index !== storyMoments.length - 1 && (
                      <div className="mx-auto mt-16 flex max-w-xl items-center gap-5 md:mt-20">
                        <div className="h-px flex-1 bg-[#D77A57]/25" />

                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#D77A57]/35 bg-[#F8EFE9]">
                          <span
                            className={`${pinyon.className} whitespace-nowrap translate-y-0.5 text-[21px] leading-none text-[#A93D17]`}
                          >
                            A | B
                          </span>
                        </div>

                        <div className="h-px flex-1 bg-[#D77A57]/25" />
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            {/* ================= LIRE LA SUITE ================= */}
            {!showFullStory && (
              <div className="mx-auto mt-14 max-w-2xl text-center md:mt-16">
                <div className="mx-auto flex items-center justify-center gap-4">
                  <div className="h-px flex-1 bg-[#D77A57]/25" />

                  <span className="text-sm text-[#C54716]">♥</span>

                  <div className="h-px flex-1 bg-[#D77A57]/25" />
                </div>

                <p className={`${cormorant.className} mx-auto mt-7 text-xl italic text-[#805B4E] md:text-2xl`}>
                  Envie de découvrir la suite ?
                </p>

                <button
                  type="button"
                  onClick={() => setShowFullStory(true)}
                  className="
                    mt-6
                    inline-flex items-center justify-center
                    rounded-full
                    border border-[#C54716]
                    bg-[#C54716]
                    px-8 py-4
                    text-[10px] font-semibold uppercase
                    tracking-[0.22em]
                    text-white
                    shadow-[0_14px_35px_rgba(197,71,22,0.24)]
                    transition duration-300
                    hover:-translate-y-1
                    hover:bg-[#A93D17]
                    hover:shadow-[0_18px_42px_rgba(197,71,22,0.30)]
                  "
                >
                  Lire la suite de notre histoire
                  <span className="ml-3 text-sm">↓</span>
                </button>
              </div>
            )}

            {showFullStory && (
              <div className="mx-auto mt-14 text-center md:mt-16">
                <button
                  type="button"
                  onClick={() => setShowFullStory(false)}
                  className="
                    text-[9px]
                    font-medium uppercase
                    tracking-[0.22em]
                    text-[#A93D17]/75
                    underline
                    decoration-[#C54716]/25
                    underline-offset-8
                    transition
                    hover:text-[#A93D17]
                  "
                >
                  Réduire l&apos;histoire
                </button>
              </div>
            )}

            {/* =========================================================
                CONCLUSION
            ========================================================= */}
            <div className="mx-auto mt-24 max-w-4xl text-center md:mt-32">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#D77A57]/50 bg-white/30">
                <span
                  className={`${pinyon.className} whitespace-nowrap translate-y-1 text-[32px] leading-none text-[#A93D17]`}
                >
                  A | B
                </span>
              </div>

              <div className="mx-auto mt-8 h-px w-24 bg-[#D77A57]" />

              <p className={`${cormorant.className} mx-auto mt-8 max-w-3xl text-2xl italic leading-10 text-[#6D3828] md:text-3xl md:leading-[1.55]`}>
                De deux anciens camarades de classe à une famille,
                <br className="hidden sm:block" />
                notre histoire s’est écrite au fil des années,
                <br className="hidden sm:block" />
                des retrouvailles et des petits moments devenus précieux.
              </p>

              <p className="mt-9 text-[10px] uppercase tracking-[0.4em] text-[#A93D17]">
                Anelka & Baudouin
              </p>

              <p className={`${pinyon.className} mt-5 text-[38px] leading-none text-[#9B6B59] md:text-[50px]`}>
                La suite s’écrira ensemble.
              </p>

            </div>
          </div>
        </section>
      )}

      {/* ================= SÉPARATEUR STORY / MEMORY LANE ================= */}
      <div className="bg-[#F8EFE9] py-4">
        <div className="mx-auto flex max-w-[220px] items-center gap-4 px-4">
          <div className="h-px flex-1 bg-[#C54716]/30" />

          <span className="text-[9px] text-[#C54716]/70">
            ♥
          </span>

          <div className="h-px flex-1 bg-[#C54716]/30" />
        </div>
      </div>

      {/* =========================================================
          MEMORY LANE
      ========================================================= */}
      {enteredSite && (
        <section
          id="memory-lane"
          className="relative overflow-hidden bg-[#F7F1E6] px-4 py-24 text-[#4A2924] sm:px-6 md:py-32"
        >
          {/* Décor de fond */}
          <div className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-[#C54716]/5 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-32 h-80 w-80 rounded-full bg-[#274E13]/5 blur-3xl" />

          <div className="relative mx-auto max-w-5xl">

            {/* ================= TITRE ================= */}
            <div className="mx-auto mb-16 text-center sm:mb-20 md:mb-28">
              <p
                className={`${pinyon.className} text-[54px] leading-none text-[#6D3828] sm:text-[68px] md:text-[82px]`}
              >
                Memory Lane
              </p>

              <div className="mx-auto mt-6 h-px w-20 bg-[#C54716]/60" />

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#805B4E] md:text-base">
                Quelques souvenirs précieux qui ont marqué notre chemin,
                année après année.
              </p>
            </div>

            {/* ================= TIMELINE ================= */}
            <div className="relative">

              {/* Ligne centrale */}
              <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-[#9B7B68]/35" />

              <div className="space-y-16 sm:space-y-20 md:space-y-28">

                {memoryLane.map((memory, index) => {
                  const photoOnLeft = index % 2 !== 0;

                  /* Inclinaison différente pour chaque Polaroid */
                  const polaroidRotation =
                    index % 4 === 0
                      ? "rotate-[2deg]"
                      : index % 4 === 1
                        ? "-rotate-[2deg]"
                        : index % 4 === 2
                          ? "rotate-[1.5deg]"
                          : "-rotate-[1.5deg]";

                  /*
                    2019 / 2020 / 2021 / 2025
                    → photo plus large pour montrer davantage les visages.

                    2022 / 2023 / 2024
                    → on garde exactement le cadrage actuel.
                  */
                  const useWidePhoto = [
                    "2019",
                    "2020",
                    "2021",
                    "2025",
                  ].includes(memory.year);

                  const Polaroid = (
                    <div
                      className={`
                        w-full max-w-[158px]
                        ${polaroidRotation}
                        rounded-[3px]
                        bg-[#FFFCF7]
                        p-2 pb-7
                        shadow-[0_14px_36px_rgba(75,45,35,0.18)]
                        ring-1 ring-[#6D3828]/[0.04]
                        transition duration-500
                        hover:rotate-0 hover:scale-[1.025]

                        sm:max-w-[205px]
                        sm:p-2.5 sm:pb-9

                        md:max-w-[270px]
                        md:p-3 md:pb-10
                      `}
                    >
                      {/* ================= PHOTO ================= */}
                      <div
                        className={`
                          relative
                          overflow-hidden
                          rounded-[2px]
                          bg-[#EFE7DD]

                          ${
                            useWidePhoto
                              ? "aspect-[4/3]"
                              : "aspect-[4/5] sm:aspect-[5/6] md:aspect-[4/3]"
                          }
                        `}
                      >
                        <Image
                          src={memory.image}
                          alt={`${memory.year} - ${memory.text}`}
                          fill
                          sizes="
                            (max-width: 640px) 158px,
                            (max-width: 768px) 205px,
                            270px
                          "
                          className={`${memory.photoClass} transition duration-500`}
                          style={{
                            objectPosition: memory.position,
                          }}
                        />

                        {/* Bord intérieur très léger */}
                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.025]" />
                      </div>

                      {/* ================= ANNÉE ================= */}
                      <p
                        className={`${pinyon.className} mt-2.5 text-center text-[28px] leading-none text-[#6D3828] sm:mt-3 sm:text-[33px] md:text-[38px]`}
                      >
                        {memory.year}
                      </p>
                    </div>
                  );

                  return (
                    <div
                      key={memory.year}
                      className="
                        relative
                        grid
                        grid-cols-[minmax(0,1fr)_22px_minmax(0,1fr)]
                        items-center
                        gap-x-2.5

                        sm:grid-cols-[minmax(0,1fr)_32px_minmax(0,1fr)]
                        sm:gap-x-5

                        md:gap-x-10
                      "
                    >
                      {/* ================= CÔTÉ GAUCHE ================= */}
                      <div
                        className={`flex min-w-0 ${
                          photoOnLeft
                            ? "justify-end pr-1 sm:pr-2"
                            : "justify-end pr-1 text-right sm:pr-2"
                        }`}
                      >
                        {photoOnLeft ? (
                          Polaroid
                        ) : (
                          <div className="max-w-[145px] sm:max-w-[220px] md:max-w-[300px]">
                            <p className="text-[11px] font-medium leading-[1.55] text-[#5E443C] sm:text-sm sm:leading-6 md:text-base md:leading-7">
                              {memory.text}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* ================= POINT CENTRAL ================= */}
                      <div className="relative z-10 flex items-center justify-center">
                        <div className="h-[8px] w-[8px] rounded-full border border-[#6D3828]/80 bg-[#F7F1E6] shadow-[0_0_0_4px_rgba(247,241,230,0.85)] sm:h-[9px] sm:w-[9px]" />
                      </div>

                      {/* ================= CÔTÉ DROIT ================= */}
                      <div
                        className={`flex min-w-0 ${
                          photoOnLeft
                            ? "justify-start pl-1 text-left sm:pl-2"
                            : "justify-start pl-1 sm:pl-2"
                        }`}
                      >
                        {photoOnLeft ? (
                          <div className="max-w-[145px] sm:max-w-[220px] md:max-w-[300px]">
                            <p className="text-[11px] font-medium leading-[1.55] text-[#5E443C] sm:text-sm sm:leading-6 md:text-base md:leading-7">
                              {memory.text}
                            </p>
                          </div>
                        ) : (
                          Polaroid
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ================= FIN ================= */}
            <div className="mx-auto mt-24 text-center md:mt-32">

              <div className="mx-auto flex max-w-xs items-center gap-4">
                <div className="h-px flex-1 bg-[#C54716]/30" />

                <span className="text-sm text-[#C54716]">
                  ♥
                </span>

                <div className="h-px flex-1 bg-[#C54716]/30" />
              </div>

              <p
                className={`${pinyon.className} mt-7 text-[36px] text-[#6D3828] sm:text-[44px] md:text-[52px]`}
              >
                Et l’histoire continue...
              </p>
            </div>
          </div>
        </section>
      )}

      {enteredSite && <Footer />}

      {/* =========================================================
          POPUP ENVELOPPE
      ========================================================= */}
      {showEnvelope && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#24110c]/75 px-4 backdrop-blur-md">
          <button
            type="button"
            onClick={closeInvitation}
            aria-label="Fermer"
            className="absolute right-5 top-5 z-[100] flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white/20"
          >
            ×
          </button>

          <div className="relative flex h-[610px] w-full max-w-[430px] items-end justify-center">
            <div className="relative h-[270px] w-[370px] max-w-[90vw]">
              <div className="absolute inset-0 rounded-[18px] bg-[#B84A20] shadow-[0_30px_80px_rgba(0,0,0,0.4)]" />

              <div
                className={`absolute left-0 top-0 z-10 h-[140px] w-full origin-top transition-all duration-1000 ease-in-out ${
                  opened
                    ? "[transform:rotateX(180deg)] opacity-70"
                    : "[transform:rotateX(0deg)] opacity-100"
                }`}
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  background: "#C95B2A",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              />

              <div
                className={`absolute left-1/2 z-20 w-[76%] -translate-x-1/2 rounded-[22px] bg-[#fffaf4] px-5 py-6 text-center text-[#6d3828] shadow-2xl transition-all duration-1000 ease-out ${
                  opened
                    ? "-top-[380px] opacity-100"
                    : "top-[70px] opacity-0"
                }`}
              >
                <div className="mb-2 text-xl text-[#c18a5f]">
                  ❦
                </div>

                <p className="text-[10px] uppercase tracking-[0.35em] text-[#a2654c]">
                  Invitation
                </p>

                <h2 className="mt-3 font-serif text-3xl leading-[1.05]">
                  <span className="block">Anelka</span>
                  <span className="my-1 block text-[#d69a65]">&</span>
                  <span className="block">Baudouin</span>
                </h2>

                <div className="mx-auto my-3 h-px w-20 bg-[#d4aa81]" />

                <p className="text-sm leading-6">
                  ont la joie de vous inviter
                  <br />
                  à célébrer leur union
                </p>

                <p className="mt-4 font-serif text-xl">
                  26 & 28 novembre 2026
                </p>

                <p className="mt-2 text-xs">
                  Dote • Mairie • Église • Soirée
                </p>

                <div className="mt-3 text-base text-[#c18a5f]">
                  ♥
                </div>

                <button
                  onClick={() => {
                    setOpened(false);

                    setTimeout(() => {
                      setShowEnvelope(false);
                      setEnteredSite(true);

                      setTimeout(() => {
                        const countdown =
                          document.getElementById("countdown");

                        countdown?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 100);
                    }, 500);
                  }}
                  className="mt-5 rounded-full bg-[#A93D17] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
                >
                  Découvrir notre mariage
                </button>
              </div>

              <div
                className="absolute bottom-0 left-0 z-30 h-full w-1/2 bg-[#8F3218]"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 52%, 100% 100%, 0 100%)",
                }}
              />

              <div
                className="absolute bottom-0 right-0 z-30 h-full w-1/2 bg-[#A93D17]"
                style={{
                  clipPath:
                    "polygon(100% 0, 0 52%, 0 100%, 100% 100%)",
                }}
              />

              <div
                className="absolute bottom-0 left-0 z-40 h-[155px] w-full bg-[#B84A20]"
                style={{
                  clipPath:
                    "polygon(0 100%, 50% 0, 100% 100%)",
                }}
              />

              <div
  className={`absolute left-1/2 top-[112px] z-50 flex h-[82px] w-[82px] -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-[#e0ad72] bg-[#A93D17] shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition-all duration-500 ${
    opened
      ? "scale-0 rotate-45 opacity-0"
      : "scale-100 rotate-0 opacity-100"
  }`}
>
  <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#dda66c]/60">
    <span className="whitespace-nowrap font-serif text-[15px] leading-none tracking-[0.06em] text-[#f6d1a7]">
      A | B
    </span>
  </div>
</div>
            </div>

            <p
              className={`absolute bottom-[-5px] font-serif text-base italic text-[#f5dfd0] transition-all delay-500 duration-700 ${
                opened
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
            >
              Deux cœurs, un même chemin...
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
