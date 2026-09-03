"use client";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [opened, setOpened] = useState(false);
  const [enteredSite, setEnteredSite] = useState(false);
  const [siteReady, setSiteReady] = useState(false);

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
      HISTOIRE ANELKA & BAUDOUIN
  ========================================================= */
  const storyMoments = [
    {
      year: "Bien avant 2019",
      title: "Ils s’étaient déjà croisés",
      image: "/images/histoires1.jpeg",
      imagePosition: "center 30%",
      anelka: [
        `Avant que nous nous retrouvions en Allemagne, je me rappelle d'une fois ou il m'a seduit par son charme, le dernier jour d'une formation en langage C++ qu'on avait fait au Lycee. Le gar etait, je crois le meilleur de la formation et avait un petit charisme que j'aimais beaucoup. Bon après la formation, nous nous sommes perdu de vue.`,
      ],
      baudouin: [
        `Ça, c’est une histoire digne d’un film 😃. On se connaissait déjà depuis le pays parce qu’on avait fait la 5ème M4 ensemble au Lycée classique de Bafang. On ne se parlait pas vraiment, mais moi je la trouvais déjà jolie hein 😆. Elle était souvent assise loin devant et moi j’étais derrière avec mes gars, on tuait le temps comme tous les jeunes de notre âge. À ce moment-là, je ne la regardais pas encore avec des intentions particulières. On était jeunes, le lycée s’est terminé, chacun est parti de son côté et finalement on s’est perdus de vue pendant plusieurs années.`,
      ],
    },

    {
      year: "2019",
      title: "Le premier appel",
      image: "/images/histoire22.jpeg",
      imagePosition: "center",
      anelka: [
        `Une fois en Allemagne il m'a appelé, Un appel qui a rendu ma journee particuliere et joyeuse. Je ne l’avais pas apprehendé comme un appel pour draguer mais un appel qui me faisait plaisir, causer avec lui, me rendait heureuse.`,
      ],
      baudouin: [
        `Un mardi matin vers 8 heures, j’allais en cours et je manipulais tranquillement mon téléphone quand j’ai vu qu’un gars du lycée qu’on avait en commun avait mis sa photo en statut WhatsApp. Je me suis dit : « Mais tiens, ça fait bail ! » Et surtout, je voyais qu’elle était toujours bien debout comme avant 😃. J’ai directement demandé son contact au gars et je lui ai écrit. Elle ne se rappelait pas trop de moi, donc moi aussi je n’ai pas perdu le temps, j’ai lancé l’appel vidéo sur place. En plus ce jour-là j’étais sorti bien chaud hein 😆. Elle a décroché, on s’est salués, elle a fini par se rappeler de moi et on a commencé à causer. Elle souriait beaucoup, moi aussi j’étais bien à l’aise. Comme je devais aller en cours, je lui ai dit que j’allais la rappeler le soir. À ce moment-là, je ne savais pas encore que ce petit appel allait vraiment changer ma vie.`,
      ],
    },

    {
      year: "Les mois suivants",
      title: "Nos soirées sont devenues notre rendez-vous",
      image: "/images/histoire33.jpeg",
      imagePosition: "center",
      anelka: [
        `Après ce jour on s’appelait tous les jours, quand je finissais mes cours, je courais directement pour m’asseoir dans ma chambre et pouvoir discuter avec lui en appel video sur Skype. Je me rappelle qu’il me faisait toujours rire, qu’il m’encourageais beaucoup et qu’il me faisait me sentir importante. Ça a été pour moi la periode la plus belle de notre relation jusqu’a aujourd’hui.`,
      ],
      baudouin: [
        `Après ce premier appel, j’ai commencé à l’appeler le soir juste pour saluer et prendre de ses nouvelles. Mais plus on causait, plus je sentais qu’il y avait un feeling. On riait beaucoup, on blaguait, on racontait nos journées et franchement, après nos causeries je me sentais toujours bien, genre c’était devenu ma petite thérapie du soir. À un moment je me suis dit : « Pourquoi ne pas essayer quelque chose avec elle ? » Mais bien sûr, je ne lui ai rien dit 😅. Dans ma tête seulement, les intentions avaient déjà commencé. Le problème c’est qu’on causait tellement qu’à l’approche de mes examens, au lieu de bien réviser une matière que j’aimais pourtant beaucoup, chaque soir je mettais le cahier devant moi et je lançais l’appel vidéo 😂. Elle me disait : « Va réviser », moi je répondais : « Aka, je maîtrise ». C’est comme ça que j’ai bien échoué cette matière, première fois de ma vie 🥲. J’avais mal dans mon cœur, elle me consolait et disait : « Waaa, c’est à cause de moi que tu as échoué. » Moi comme j’aime faire le dur, je répondais que non, ce n’était rien. Après je me suis même dit que c’était peut-être le prix à payer pour recevoir l’étoile qui allait illuminer ma vie. Et nos YelloNight ont continué tranquillement.`,
      ],
    },

    {
      year: "Quelques mois plus tard",
      title: "Le voyage qui a tout changé",
      image: "/images/histoire4.jpeg",
      imagePosition: "center",
      anelka: [
        `Puis quand j’ai fini de composer, il m’a invité dans sa ville, je pense à l’occasion de son anniversaire, non en fait son anniversaire était déjà passé et puis il s’est fâché que je n’étais pas là et que il aurait aimé que je soit la. J’ai donc fait un voyage et nous nous sommes retrouvé dans sa ville et c’est la que notre relation a vraiment debute.`,
      ],
      baudouin: [
        `À un moment, elle cherchait dans quelle ville continuer son parcours après les cours de langue. Moi aussi j’avais déjà mon petit plan derrière 😅, donc je lui conseillais doucement de venir dans ma ville. Elle est finalement venue pour passer un examen de langue et quand elle est arrivée, elle a ouvert son sac et là je vois beaucoup de cadeaux pour moi. Je ne m’attendais vraiment pas à ça 🥲. Le séjour s’est super bien passé. Pour une première vraie prise de contact après toutes ces années, c’était vraiment cool. J’ai beaucoup aimé sa douceur, ses petites attentions et surtout elle préparait à manger tout le temps, et c’était bon hein 🥲. Malheureusement, elle a échoué l’examen qu’elle était venue passer. Je me suis dit : « Peut-être elle aussi devait avoir son petit échec dans notre histoire » 😅. Je l’ai consolée comme elle m’avait consolé auparavant, puis elle a refait l’examen et elle l’a réussi. Après ce séjour, dans ma tête c’était clair : « Il faut que j’accélère 😁 ». J’avais trop aimé le temps passé avec elle pour maintenant faire semblant.`,
      ],
    },

    {
      year: "La suite",
      title: "De deux villes à une seule vie",
      image: "/images/histoire6.jpeg",
      imagePosition: "center",
      anelka: [
        `Ce qui m’a marqué quand je suis arrivé chez lui, c’est sa personnalité. Il était très humble, très poli, pas juste avec moi mais aussi avec son entourage. Il m’offrait une stabilité de coeur et une perspective de vie que j’admirait beaucoup, il etait travailleur et ce que j’apprecie le plus sur lui, c’est qu’il trouvait solution a tous mes problemes, dans mes études, dans mes procédures administratives, il m’accompagnait. Il m’a montre qu’il avait une volonté de reussir et surtout qu’il s’en donne les moyens.`,
      ],
      baudouin: [
        `Après son séjour, moi je savais déjà ce que je voulais. J’ai donc continué à accélérer 😁 et finalement nous nous sommes mis ensemble. Elle a fini par venir poursuivre ses études dans la ville où je vivais et là, notre histoire a vraiment quitté WhatsApp pour entrer dans la vraie vie. Ce n’était plus seulement les appels vidéo, les YelloNight et les longues causeries, maintenant il fallait apprendre à cheminer ensemble pour de vrai, avec les bons moments, les difficultés, les projets, les décisions et tout ce qui vient avec une relation sérieuse. On a avancé comme ça, petit à petit, et nous voilà encore ensemble aujourd’hui ❣️. Quand j’y pense, tout ça est parti d’un simple statut WhatsApp vu un mardi matin.`,
      ],
    },

    {
      year: "2024",
      title: "Notre famille",
      image: "/images/histoire5.jpeg",
      imagePosition: "center",
      anelka: [
        `En Fevrier 2024 on a aménagé ensemble, ce fut une periode très boulversante compte tenu de tout le stresse et les depenses que ca entrainait, d’autant plus que j’etais enceinte. En Avril 2024 est venu au monde notre petit bout de choux, mon cheri d’amour, comme j’aime l’appeler, il est venu comme un torrent ce qui nous a bouleversé psychologiquement , mais comme le beau temps vient après la pluie, il a rayonné notre vie, et continue de le faire tous les jours, c’est notre levée du soleil, comme son prénom LONAAM l'indique. Il est né pour illuminer nos vies. Notre guerrier, notre lion, sa venue était comme un tremblement de terre, il venait avec puissance.`,
      ],
      baudouin: [
        `Quand je regarde tout ce chemin aujourd’hui, parfois même moi je me dis : « Donc tout ça a commencé comme ça ? » 😃. La fille que j’avais connue en 5ème, que j’avais retrouvée des années plus tard grâce à un statut WhatsApp et avec qui je pouvais passer toute une soirée au téléphone, est devenue ma compagne, puis la mère de notre enfant. En février 2024, on a emménagé ensemble et là c’était encore une autre école, parce que vivre ensemble ce n’est plus seulement raccrocher l’appel quand chacun veut dormir 😅. Il fallait apprendre à gérer le quotidien, les responsabilités et tout ce qui venait avec la grossesse. Puis en avril, LONAAM est arrivé et il a complètement changé notre vie. Devenir parents nous a beaucoup fait grandir et nous a donné encore plus de raisons de nous battre pour ce qu’on construisait ❤️.`,
      ],
    },

    {
      year: "Novembre 2024",
      title: "La rencontre de nos familles",
      image: "",
      imagePosition: "center",
      anelka: [
        `Mon chéri a pris une belle initiative : il a décidé qu’il était temps que nos familles se rencontrent. Pour moi, ce moment avait une valeur particulière, parce qu’il ne s’agissait plus seulement de notre couple, mais de deux familles qui allaient désormais apprendre à se connaître et à avancer ensemble. La rencontre s’est déroulée dans une atmosphère douce, respectueuse et pleine de joie . En regardant tout le chemin parcouru depuis ce premier appel de 2019, je me suis dit une fois de plus que le destin avait vraiment bien fait les choses. ❣️❣️❣️ De la formation C++ au premier appel. Du premier appel à nos nuits sur Skype. De sa ville à notre maison. De nous deux... à nous trois. Merci d’avoir été la solution à mes problèmes mon chéri. Merci d’avoir cru en nous. Merci d’aimer si fort. Et merci à LONAAM de nous avoir choisis pour briller. MERCI🙏❣️`,
      ],
      baudouin: [
        `En novembre 2024, je me suis dit qu’il était temps de faire les choses encore plus sérieusement. Après tout ce qu’on avait déjà vécu ensemble, je voulais que nos familles se rencontrent. Pour moi, c’était une manière de montrer clairement que notre histoire n’était plus seulement celle de deux personnes qui s’aiment, mais celle de deux familles qui allaient désormais être liées. La rencontre s’est bien passée, dans le respect, la bonne humeur et cette ambiance-là qu’on aime chez nous. Je regardais tout ça et je me disais quand même : depuis mon fameux statut WhatsApp jusqu’ici, on a vraiment fait du chemin 😃. Et maintenant, après toutes ces étapes, on est prêts pour la suivante ❣️.`,
      ],
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
            className="object-cover object-[center_25%] md:object-[center_30%]"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-[#6D071A]/10 to-[#3A1F1A]/80" />

          <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
            <div className="w-full max-w-2xl text-center">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#F3D0AD] md:text-xs">
                Ensemble avec leurs familles
              </p>

              <div className="mx-auto mt-5 h-px w-28 bg-[#E8C79D]/70" />

              <h1 className="mt-7 font-serif text-5xl leading-[0.95] md:text-7xl">
                Anelka
                <span className="my-2 block text-[#E2A066]">&</span>
                Baudouin
              </h1>

              <div className="mx-auto mt-8 w-fit rounded-2xl border border-white/10 bg-[#3A1F1A]/15 px-7 py-4 shadow-lg backdrop-blur-[3px]">
                <p className="font-serif text-lg leading-7 text-[#FFF7F0] md:text-xl md:leading-8">
                  ont la joie de vous inviter
                  <br />
                  à célébrer leur mariage
                </p>
              </div>

              <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-4">
                <div className="h-px flex-1 bg-[#E8C79D]/45" />

                <span className="text-[10px] uppercase tracking-[0.28em] text-[#F3D0AD]">
                  26 & 28 novembre 2026
                </span>

                <div className="h-px flex-1 bg-[#E8C79D]/45" />
              </div>

              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/80 md:text-sm">
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
          COMPTE À REBOURS
      ========================================================= */}
      {enteredSite && (
        <section
          id="countdown"
          className="relative overflow-hidden bg-[#6D071A] px-6 pb-14 pt-28 text-center md:pb-16 md:pt-32"
        >
          <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#F4D8C7]/20" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full border border-[#F4D8C7]/20" />

          <div className="pointer-events-none absolute -bottom-40 -right-32 h-[480px] w-[480px] rounded-full border border-[#F4D8C7]/20" />
          <div className="pointer-events-none absolute -bottom-24 -right-20 h-[330px] w-[330px] rounded-full border border-[#F4D8C7]/20" />

          <div className="pointer-events-none absolute left-8 top-1/2 hidden -translate-y-1/2 md:block">
            <div className="h-32 w-px bg-[#F5D5B5]/30" />
            <div className="mt-3 h-2 w-2 -translate-x-[3px] rounded-full bg-[#F1C3AE]" />
          </div>

          <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 md:block">
            <div className="mb-3 h-2 w-2 -translate-x-[3px] rounded-full bg-[#F1C3AE]" />
            <div className="h-32 w-px bg-[#F5D5B5]/30" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#F6DFC8]/55 md:h-20 md:w-20">
              <span className="font-serif text-base tracking-[0.15em] text-[#FFF8F0] md:text-xl">
                A | B
              </span>
            </div>

            <div className="mx-auto mt-7 max-w-3xl md:mt-8">
              <p className="font-serif text-xl leading-relaxed text-[#FFF8F0] sm:text-2xl md:text-3xl md:leading-relaxed">
                Ensemble avec leurs familles, Anelka et Baudouin vont s&apos;unir pour la vie.
              </p>

              <div className="mx-auto mt-5 h-px w-20 bg-[#F1C3AE]/80 md:mt-6 md:w-24" />
            </div>

            {/* =====================================================
                COMPTE À REBOURS — STYLE ÉPURÉ
            ===================================================== */}
            <div className="mx-auto mt-9 max-w-4xl md:mt-10">
              <div className="flex items-start justify-center">

                {/* JOURS */}
                <div className="flex min-w-0 flex-1 flex-col items-center">
                  <p className="font-serif text-[31px] font-light leading-none tracking-[0.04em] text-[#FFF8F0] sm:text-[38px] md:text-[46px]">
                    {String(timeLeft.days).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-[7px] uppercase tracking-[0.22em] text-[#F4D6C5] sm:text-[8px] md:text-[9px] md:tracking-[0.3em]">
                    Jours
                  </p>
                </div>

                <span className="mt-0.5 font-serif text-[23px] font-light leading-none text-[#F1C3AE] sm:text-[28px] md:mt-1 md:text-[34px]">
                  :
                </span>

                {/* HEURES */}
                <div className="flex min-w-0 flex-1 flex-col items-center">
                  <p className="font-serif text-[31px] font-light leading-none tracking-[0.04em] text-[#FFF8F0] sm:text-[38px] md:text-[46px]">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-[7px] uppercase tracking-[0.22em] text-[#F4D6C5] sm:text-[8px] md:text-[9px] md:tracking-[0.3em]">
                    Heures
                  </p>
                </div>

                <span className="mt-0.5 font-serif text-[23px] font-light leading-none text-[#F1C3AE] sm:text-[28px] md:mt-1 md:text-[34px]">
                  :
                </span>

                {/* MINUTES */}
                <div className="flex min-w-0 flex-1 flex-col items-center">
                  <p className="font-serif text-[31px] font-light leading-none tracking-[0.04em] text-[#FFF8F0] sm:text-[38px] md:text-[46px]">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-[7px] uppercase tracking-[0.13em] text-[#F4D6C5] sm:text-[8px] sm:tracking-[0.2em] md:text-[9px] md:tracking-[0.27em]">
                    Minutes
                  </p>
                </div>

                <span className="mt-0.5 font-serif text-[23px] font-light leading-none text-[#F1C3AE] sm:text-[28px] md:mt-1 md:text-[34px]">
                  :
                </span>

                {/* SECONDES */}
                <div className="flex min-w-0 flex-1 flex-col items-center">
                  <p className="font-serif text-[31px] font-light leading-none tracking-[0.04em] text-[#FFF8F0] sm:text-[38px] md:text-[46px]">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-[7px] uppercase tracking-[0.09em] text-[#F4D6C5] sm:text-[8px] sm:tracking-[0.16em] md:text-[9px] md:tracking-[0.24em]">
                    Secondes
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                FIN DU COUNTDOWN
            ===================================================== */}
            <div className="mt-9 md:mt-10">
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-[#F2D0B3]/35" />
                <span className="text-xs text-[#F1C3AE]">♥</span>
                <div className="h-px w-12 bg-[#F2D0B3]/35" />
              </div>

              <p className="mx-auto mt-5 max-w-xl font-serif text-base italic leading-7 text-[#FFEBDD] sm:text-lg md:text-xl">
                Le plus beau reste à célébrer, avec vous.
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

          <div className="pointer-events-none absolute left-8 top-24 hidden font-serif text-[130px] text-[#C54716]/5 md:block">
            A
          </div>

          <div className="pointer-events-none absolute bottom-24 right-8 hidden font-serif text-[130px] text-[#C54716]/5 md:block">
            B
          </div>

          <div className="relative z-10 mx-auto max-w-6xl">
            {/* ================= TITRE HISTOIRE ================= */}
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-[#A93D17]">
                Notre histoire
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
                Une histoire.
                <br />
                Deux regards.
              </h2>

              <div className="mx-auto mt-7 h-px w-24 bg-[#D77A57]" />

              <p className="mx-auto mt-7 max-w-2xl font-serif text-lg italic leading-8 text-[#805B4E] md:text-xl">
                Il y a son souvenir à elle.
                <br className="hidden sm:block" />
                Il y a son souvenir à lui.
                <br className="hidden sm:block" />
                Et quelque part entre les deux, il y a leur histoire.
              </p>
            </div>

            {/* ================= CHAPITRES ================= */}
            <div className="mt-16 space-y-10 md:mt-20 md:space-y-12">
              {storyMoments.map((moment, index) => {
                const imageOnLeft = index % 2 === 0;

                return (
                  <article
                    key={`${moment.year}-${moment.title}`}
                    className="relative"
                  >
                    <div
                      className={`pointer-events-none absolute -top-16 hidden font-serif text-[120px] leading-none text-[#C54716]/[0.045] lg:block ${
                        imageOnLeft ? "right-0" : "left-0"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* =================================================
                        CHAPITRES AVEC PHOTO
                    ================================================= */}
                    {moment.image ? (
                      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
                        {/* ================= IMAGE ================= */}
                        <div
                          className={
                            imageOnLeft ? "lg:order-1" : "lg:order-2"
                          }
                        >
                          <div className="relative h-[430px] overflow-hidden rounded-[34px] shadow-[0_25px_70px_rgba(95,45,30,0.16)] md:h-[560px]">
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

                            <div className="absolute inset-0 bg-gradient-to-t from-[#3A1F1A]/55 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6">
                              <p className="text-[9px] uppercase tracking-[0.35em] text-[#F4C58C]">
                                Anelka & Baudouin
                              </p>

                              <p className="mt-2 font-serif text-2xl text-white md:text-3xl">
                                {moment.year}
                              </p>
                            </div>
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

                          <h3 className="mt-4 font-serif text-3xl leading-tight text-[#5A3026] md:text-4xl">
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

                                <p className="mt-1 font-serif text-sm italic text-[#9B6B59]">
                                  Ce qu’elle a vécu
                                </p>
                              </div>
                            </div>

                            <div className="mt-5">
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

                                <p className="mt-1 font-serif text-sm italic text-[#68805B]">
                                  Ce qu’il a vécu
                                </p>
                              </div>
                            </div>

                            <div className="mt-5">
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
                    ) : (
                      /* =================================================
                          DERNIER CHAPITRE SANS PHOTO NI CARTE
                      ================================================= */
                      <div className="mx-auto max-w-6xl py-6 md:py-14">
                        {/* TITRE PLEINE LARGEUR */}
                        <div className="mx-auto max-w-4xl text-center">
                          <p className="text-[10px] uppercase tracking-[0.45em] text-[#B84A20]">
                            {moment.year}
                          </p>

                          <h3 className="mt-5 font-serif text-4xl leading-tight text-[#5A3026] md:text-6xl">
                            {moment.title}
                          </h3>

                          <div className="mx-auto mt-7 h-px w-24 bg-[#D77A57]" />

                          <p className="mx-auto mt-7 max-w-2xl font-serif text-lg italic leading-8 text-[#9B6B59] md:text-xl">
                            Deux familles qui se rencontrent.
                            <br className="hidden sm:block" />
                            Une nouvelle étape dans leur histoire.
                          </p>
                        </div>

                        {/* ================= DEUX RÉCITS ================= */}
                        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
                          {/* ================= ANELKA ================= */}
                          <div>
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C54716] text-xs font-medium text-white">
                                A
                              </div>

                              <div>
                                <p className="text-[9px] uppercase tracking-[0.32em] text-[#C54716]">
                                  Du côté d’Anelka
                                </p>

                                <p className="mt-1 font-serif text-sm italic text-[#9B6B59]">
                                  Ce qu’elle a vécu
                                </p>
                              </div>
                            </div>

                            <div className="mt-6">
                              {moment.anelka.map(
                                (paragraph, paragraphIndex) => (
                                  <p
                                    key={paragraphIndex}
                                    className="text-[16px] leading-8 text-[#765247] md:text-[17px]"
                                  >
                                    {paragraph}
                                  </p>
                                )
                              )}
                            </div>
                          </div>

                          {/* ================= BAUDOUIN ================= */}
                          <div className="border-t border-[#D77A57]/20 pt-10 md:border-l md:border-t-0 md:pl-16 md:pt-0 lg:pl-20">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#274E13] text-xs font-medium text-white">
                                B
                              </div>

                              <div>
                                <p className="text-[9px] uppercase tracking-[0.32em] text-[#274E13]">
                                  Du côté de Baudouin
                                </p>

                                <p className="mt-1 font-serif text-sm italic text-[#68805B]">
                                  Ce qu’il a vécu
                                </p>
                              </div>
                            </div>

                            <div className="mt-6">
                              {moment.baudouin.map(
                                (paragraph, paragraphIndex) => (
                                  <p
                                    key={paragraphIndex}
                                    className="text-[16px] leading-8 text-[#56604D] md:text-[17px]"
                                  >
                                    {paragraph}
                                  </p>
                                )
                              )}
                            </div>
                          </div>
                        </div>

                        {/* SIGNATURE */}
                        <div className="mx-auto mt-16 flex max-w-xl items-center justify-center gap-5">
                          <div className="h-px flex-1 bg-[#D77A57]/25" />

                          <span className="font-serif text-lg tracking-[0.15em] text-[#A93D17]">
                            A | B
                          </span>

                          <div className="h-px flex-1 bg-[#D77A57]/25" />
                        </div>
                      </div>
                    )}

                    {/* ================= SÉPARATEUR ================= */}
                    {index !== storyMoments.length - 1 && (
                      <div className="mx-auto mt-10 flex max-w-xl items-center gap-5 md:mt-12">
                        <div className="h-px flex-1 bg-[#D77A57]/25" />

                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D77A57]/35 bg-[#F8EFE9]">
                          <span className="font-serif text-xs tracking-[0.12em] text-[#A93D17]">
                            A|B
                          </span>
                        </div>

                        <div className="h-px flex-1 bg-[#D77A57]/25" />
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            {/* =========================================================
                CONCLUSION
            ========================================================= */}
            <div className="mx-auto mt-32 max-w-4xl text-center md:mt-40">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#D77A57]/50 bg-white/30">
                <span className="font-serif text-lg tracking-[0.15em] text-[#A93D17]">
                  A | B
                </span>
              </div>

              <div className="mx-auto mt-8 h-px w-24 bg-[#D77A57]" />

              <p className="mx-auto mt-8 max-w-3xl font-serif text-2xl italic leading-10 text-[#6D3828] md:text-3xl md:leading-[1.55]">
                Deux souvenirs parfois différents.
                <br />
                Une seule histoire.
                <br />
                Et aujourd’hui, un même avenir.
              </p>

              <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#805B4E]">
                Il aura suffi d’une photo aperçue un mardi matin,
                d’un appel vidéo lancé presque spontanément
                et de quelques longues soirées à refaire le monde
                pour que deux anciens camarades de classe
                commencent à écrire l’histoire qui les mène aujourd’hui
                jusqu’au mariage.
              </p>

              <p className="mt-9 text-[10px] uppercase tracking-[0.4em] text-[#A93D17]">
                Anelka & Baudouin
              </p>

              <p className="mt-6 font-serif text-2xl italic text-[#9B6B59] md:text-3xl">
                La suite s’écrira ensemble.
              </p>
            </div>
          </div>
        </section>
      )}

      {enteredSite && <Footer />}

      {/* =========================================================
          TRANSITION HISTOIRE → PROGRAMME
      ========================================================= */}
      {enteredSite && (
        <div className="bg-[#C54716] py-12 md:py-14">
          <div className="mx-auto flex max-w-4xl items-center justify-center gap-6 px-6">
            <div className="h-px flex-1 bg-[#F1C3AE]/55" />

            <div className="shrink-0 text-center">
              <p className="font-serif text-xl tracking-[0.22em] text-[#F1C3AE]">
                A | B
              </p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.42em] text-[#FBEDE3]">
                26 · 28 novembre 2026
              </p>
            </div>

            <div className="h-px flex-1 bg-[#F1C3AE]/55" />
          </div>
        </div>
      )}

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
                className={`absolute left-1/2 top-[112px] z-50 flex h-[72px] w-[72px] -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-[#e0ad72] bg-[#A93D17] shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition-all duration-500 ${
                  opened
                    ? "scale-0 rotate-45 opacity-0"
                    : "scale-100 rotate-0 opacity-100"
                }`}
              >
                <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#dda66c]/60 font-serif text-lg tracking-wide text-[#f6d1a7]">
                  A | B
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