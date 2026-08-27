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

  useEffect(() => {
    if (!siteReady || !enteredSite) return;

    const hash = window.location.hash;

    if (!hash) return;

    const sectionId = hash.replace("#", "");

    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  }, [siteReady, enteredSite]);

  useEffect(() => {
  const invitationAlreadyOpened =
    localStorage.getItem("invitationOpened") === "true";

  if (invitationAlreadyOpened) {
    setEnteredSite(true);
  }

  setSiteReady(true);
}, []);

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
    return (
      <main className="min-h-screen bg-[#7f4634]" />
    );
  }

  const storyMoments = [
    {
      year: "Bien avant 2019",
      title: "Ils s’étaient déjà croisés",
      image: "/images/histoire1.jpeg",
      imagePosition: "center 30%",
      anelka: [
        `Bien avant que notre histoire ne commence vraiment, nos chemins s’étaient déjà croisés au Cameroun. Nous avions fréquenté le même lycée, sans imaginer une seule seconde que plusieurs années plus tard, la vie nous réunirait de nouveau, loin de chez nous.`,

        `À cette époque, nous étions simplement deux jeunes parmi tant d’autres. Puis chacun a suivi son chemin, le lycée s’est terminé, les années sont passées et nous nous sommes perdus de vue.`,
      ],
      baudouin: [
        `Ça, c’est vraiment une histoire digne d’un film. On se connaissait déjà depuis le Cameroun. Nous avions fait la classe de 5ème M4 ensemble au Lycée classique de Bafang.`,

        `On ne se parlait pas vraiment. Elle était souvent assise loin devant et moi plutôt derrière avec mes amis. Je la trouvais déjà jolie, mais à cet âge-là je n’avais aucune intention particulière. On était jeunes, on vivait simplement notre vie de lycéens.`,

        `Puis le lycée s’est terminé. Chacun est parti de son côté et nous nous sommes complètement perdus de vue.`,
      ],
    },

    {
      year: "2019",
      title: "Le premier appel",
      image: "/images/histoire22.jpeg",
      imagePosition: "center",
      anelka: [
        `Tout a véritablement commencé le jour où il m’a appelée en 2019. Ce simple appel a illuminé ma journée d’une manière que je n’avais pas prévue.`,

        `Je ne l’ai pas vécu comme une tentative de séduction. C’était simplement une conversation sincère et légère qui m’a fait du bien. Nous avons parlé, ri, pris de nos nouvelles, et très vite ces échanges sont devenus une habitude.`,

        `Chaque soir après mes cours, j’avais envie de rentrer pour pouvoir lui parler en vidéo. Il me faisait rire, il m’encourageait et, sans même que je m’en rende compte, il commençait déjà à prendre une place particulière dans mon quotidien.`,
      ],
      baudouin: [
        `Un mardi matin, vers 8 heures, j’étais en route pour les cours et je regardais tranquillement mon téléphone. Un ami que nous avions en commun depuis le lycée avait publié une photo d’elle dans son statut WhatsApp.`,

        `Je me suis dit : “Mais tiens, ça fait vraiment longtemps.” Et surtout, je me suis rendu compte qu’elle était toujours aussi belle. J’ai demandé son numéro à notre ami et je lui ai écrit directement.`,

        `Au début, elle ne se rappelait pas très bien de moi. Alors j’ai lancé un appel vidéo. J’étais plutôt bien apprêté ce jour-là, donc ça tombait bien. Elle a décroché, on s’est salués et finalement elle s’est souvenue de moi.`,

        `On a commencé à discuter et elle souriait beaucoup. Je devais aller en cours, alors je lui ai simplement dit que je la rappellerais le soir. Je ne savais pas encore que ce petit appel allait changer énormément de choses.`,
      ],
    },

    {
      year: "Les mois suivants",
      title: "Nos soirées sont devenues notre rendez-vous",
      image: "/images/histoire33.jpeg",
      imagePosition: "center",
      anelka: [
        `À cette période, je venais d’arriver en Allemagne et je suivais mes cours de langue dans une autre ville. Malgré la distance, nos soirées se ressemblaient de plus en plus : nous nous appelions, nous racontions nos journées et nous pouvions rester longtemps à parler de tout et de rien.`,

        `J’aimais cette complicité qui s’installait naturellement. Avec lui, je pouvais rire, parler de mes inquiétudes, de mes projets et simplement être moi-même.`,

        `Petit à petit, ces appels sont devenus l’un des moments que j’attendais le plus dans ma journée.`,
      ],
      baudouin: [
        `Après mes cours, je l’appelais souvent le soir juste pour prendre de ses nouvelles. Puis plus nous parlions, plus je ressentais quelque chose.`,

        `On riait énormément. On plaisantait, on racontait nos journées et après chaque conversation je me sentais bien. C’était presque devenu une petite thérapie du soir.`,

        `À un moment, je me suis dit : “Pourquoi ne pas essayer quelque chose avec elle ?” Je ne lui ai rien dit tout de suite, évidemment. Mais dans ma tête, les intentions avaient déjà changé.`,

        `On parlait tellement qu’à l’approche de mes examens, au lieu de réviser sérieusement une matière que je pensais maîtriser, je posais mon cahier devant moi et je lançais notre appel vidéo. Elle me disait souvent d’aller travailler. Moi je répondais tranquillement que je maîtrisais.`,

        `Résultat : j’ai bien échoué cette matière. C’était la première fois de ma vie et j’avais vraiment mal au cœur. Elle aussi culpabilisait et me disait : “Waaa, c’est à cause de moi que tu as échoué.” Moi, comme j’aime faire le dur, je répondais que ce n’était rien et que ça pouvait arriver.`,

        `Avec le recul, je me suis dit que c’était peut-être simplement le prix à payer pour rencontrer l’étoile qui allait illuminer ma vie. Et après ça, nos soirées ont continué comme si de rien n’était.`,
      ],
    },

    {
      year: "Quelques mois plus tard",
      title: "Le voyage qui a tout changé",
      image: "/images/histoire4.jpeg",
      imagePosition: "center",
      anelka: [
        `Après mes examens, il m’a proposé de venir dans sa ville. Je me souviens qu’il aurait aimé que je sois déjà là pour son anniversaire et qu’il avait été un peu déçu que nous n’ayons pas pu partager ce moment ensemble.`,

        `Alors j’ai pris la route. Ce séjour a marqué quelque chose de nouveau entre nous. Pour la première fois, tout ce que nous avions construit derrière nos écrans devenait réel.`,

        `En passant du temps avec lui, j’ai découvert encore davantage sa personnalité. J’ai aimé son humilité, sa façon de traiter les autres avec respect et cette stabilité qu’il dégageait.`,

        `Ce voyage m’a permis de comprendre que derrière nos longues conversations, il y avait peut-être quelque chose de beaucoup plus grand qui était en train de naître.`,
      ],
      baudouin: [
        `Elle cherchait une ville où poursuivre son parcours après ses cours de langue. Évidemment, moi j’avais déjà mon petit plan. Je lui conseillais de venir dans ma ville.`,

        `Elle est finalement venue pour passer un examen de langue. Quand elle est arrivée et qu’elle a ouvert son sac, j’ai découvert qu’elle avait apporté beaucoup de cadeaux pour moi. Je ne m’y attendais vraiment pas et ça m’a énormément touché.`,

        `Le séjour s’est très bien passé. C’était notre première vraie rencontre depuis toutes ces années et surtout la première fois que nous passions autant de temps ensemble. J’ai aimé sa douceur, son attention et tous ces petits gestes du quotidien. Elle cuisinait beaucoup aussi, et franchement, c’était bon.`,

        `Malheureusement, elle a échoué l’examen qu’elle était venue passer. Peut-être que nous avions chacun besoin d’échouer une fois dans cette histoire. Je l’ai soutenue comme elle m’avait soutenu auparavant. Elle a repassé son examen plus tard et cette fois, elle l’a réussi.`,

        `Après son séjour, je me suis dit qu’il fallait accélérer un peu les choses. J’avais beaucoup trop aimé le temps passé avec elle pour faire semblant de ne rien ressentir.`,
      ],
    },

    {
      year: "La suite",
      title: "De deux villes à une seule vie",
      image: "/images/histoire5.jpeg",
      imagePosition: "center",
      anelka: [
        `Ce qui avait commencé par des appels du soir est devenu une vraie relation. Nous avons appris à nous connaître autrement, avec nos qualités, nos défauts, nos ambitions et nos inquiétudes.`,

        `Au fil du temps, j’ai découvert chez lui une force tranquille. Il trouvait toujours une manière de m’aider, que ce soit pour mes études, mes démarches ou simplement lorsque j’avais besoin d’être rassurée.`,

        `Avec lui, j’ai compris qu’aimer quelqu’un pouvait aussi signifier construire. Pas seulement vivre de beaux moments, mais avancer ensemble, chercher des solutions ensemble et faire des projets qui deviennent peu à peu notre réalité.`,

        `Finalement, je suis venue poursuivre mes études dans la ville où il vivait. Nos appels à distance ont laissé place à un quotidien partagé.`,
      ],
      baudouin: [
        `Après ce séjour, pour moi les choses étaient devenues très claires. Je voulais être avec elle.`,

        `J’ai continué à me rapprocher d’elle et nous avons fini par nous mettre ensemble. Elle est ensuite venue faire ses études dans la ville où je vivais.`,

        `À partir de là, ce n’était plus seulement une histoire d’appels vidéo et de longues soirées au téléphone. Nous pouvions enfin construire quelque chose dans la vraie vie.`,

        `Nous avons avancé ensemble, avec les bons moments, les difficultés, les projets, les décisions importantes et tout ce qui fait réellement une relation.`,
      ],
    },

    {
      year: "2024",
      title: "Notre famille",
      image: "/images/histoire6.jpeg",
      imagePosition: "center",
      anelka: [
        `En février 2024, nous avons franchi une nouvelle étape en emménageant ensemble. C’était beau, mais aussi intense. Il fallait apprendre à partager le quotidien, gérer les dépenses, les responsabilités et tous les changements qui accompagnent une vraie vie à deux.`,

        `Et au milieu de tout cela, j’étais enceinte.`,

        `Puis en avril 2024, notre vie a changé à jamais avec l’arrivée de LONAAM. Notre petit bout de chou a bouleversé notre monde et lui a donné une nouvelle lumière.`,

        `Sa naissance nous a demandé énormément d’énergie, mais elle nous a aussi donné une nouvelle raison d’avancer ensemble. Il est devenu notre petit soleil, notre force et une partie immense de notre histoire.`,

        `Quelques mois plus tard, une autre étape importante est arrivée : la rencontre de nos familles. Voir nos deux univers se rapprocher a donné encore plus de sens au chemin que nous avions parcouru.`,
      ],
      baudouin: [
        `Quand je repense à tout le chemin parcouru depuis cette photo aperçue un matin sur WhatsApp, j’ai parfois du mal à croire à tout ce qui s’est passé ensuite.`,

        `La fille avec qui je passais mes soirées au téléphone est devenue ma compagne. Puis nous avons commencé à construire notre foyer et nous sommes devenus parents.`,

        `Il y a eu beaucoup de moments heureux, mais aussi des périodes où il fallait être solides, s’adapter, prendre des décisions et continuer à avancer ensemble.`,

        `Aujourd’hui, quand je regarde notre famille et tout ce que nous avons construit, je comprends encore mieux pourquoi cette histoire méritait que l’on prenne le risque de la vivre jusqu’au bout.`,

        `Et maintenant, après toutes ces étapes, nous sommes prêts à écrire la suivante.`,
      ],
    },
  ];


  return (
    <main className="relative min-h-screen overflow-hidden bg-[#7f4634]">

      {enteredSite && <Navigation />}

      {/* =========================
          PAGE D'ACCUEIL
      ========================== */}
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

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-[#6D071A]/10 to-[#3A1F1A]/80" />

          {/* Contenu */}
          <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
            <div className="w-full max-w-2xl text-center">

              {/* Petite introduction */}
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#F3D0AD] md:text-xs">
                Ensemble avec leurs familles
              </p>

              <div className="mx-auto mt-5 h-px w-28 bg-[#E8C79D]/70" />

              {/* Noms */}
              <h1 className="mt-7 font-serif text-5xl leading-[0.95] md:text-7xl">
                Anelka

                <span className="my-2 block text-[#E2A066]">
                  &
                </span>

                Baudouin
              </h1>

              {/* Invitation */}
              <div className="mx-auto mt-8 w-fit rounded-2xl border border-white/10 bg-[#3A1F1A]/15 px-7 py-4 shadow-lg backdrop-blur-[3px]">
                <p className="font-serif text-lg leading-7 text-[#FFF7F0] md:text-xl md:leading-8">
                  ont la joie de vous inviter
                  <br />
                  à célébrer leur mariage
                </p>
              </div>

              {/* Date */}
              <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-4">
                <div className="h-px flex-1 bg-[#E8C79D]/45" />

                <span className="text-[10px] uppercase tracking-[0.28em] text-[#F3D0AD]">
                  26 & 28 novembre 2026
                </span>

                <div className="h-px flex-1 bg-[#E8C79D]/45" />
              </div>

              {/* Événements */}
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/80 md:text-sm">
                Dote • Mairie • Église • Soirée
              </p>

              {/* Bouton */}
              <button
                onClick={openInvitation}
                className="mt-10 rounded-full border border-[#E8C79D]/60 bg-[#FFF1E3] px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A93D17] shadow-2xl transition duration-300 hover:scale-105 hover:bg-white"
              >
                Ouvrir l’invitation
              </button>

              {/* Petite indication */}
              <div className="mt-6 animate-bounce text-xl text-[#F3D0AD]">
                ↓
              </div>

            </div>
          </div>
        </section>
      )}

      {/* =========================
          COMPTE À REBOURS
      ========================== */}
      {enteredSite && (
        <section
          id="countdown"
          className="relative flex min-h-screen items-center overflow-hidden bg-[#B95F43] px-6 py-24 text-center"
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
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#F6DFC8]/60">
              <span className="font-serif text-xl tracking-[0.15em] text-[#FFF8F0]">
                A | B
              </span>
            </div>

            <p className="mt-8 text-[11px] uppercase tracking-[0.45em] text-[#F4D6C5] md:text-xs">
              Le grand jour approche
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-none text-[#FFF8F0] md:text-7xl">
              Compte à rebours
            </h2>

            <div className="mx-auto mt-7 h-px w-24 bg-[#F1C3AE]" />

            <p className="mt-6 text-sm text-[#F7DDD0] md:text-base">
              Jusqu’au 26 novembre 2026
            </p>

            <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              <div className="rounded-[28px] border border-white/20 bg-[#FFF8F0]/95 px-4 py-8 shadow-xl backdrop-blur md:py-10">
                <p className="font-serif text-5xl text-[#8F4633] md:text-6xl">
                  {String(timeLeft.days).padStart(2, "0")}
                </p>

                <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[#B84A20]">
                  Jours
                </p>
              </div>

              <div className="rounded-[28px] border border-white/20 bg-[#FFF8F0]/95 px-4 py-8 shadow-xl backdrop-blur md:py-10">
                <p className="font-serif text-5xl text-[#8F4633] md:text-6xl">
                  {String(timeLeft.hours).padStart(2, "0")}
                </p>

                <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[#B84A20]">
                  Heures
                </p>
              </div>

              <div className="rounded-[28px] border border-white/20 bg-[#FFF8F0]/95 px-4 py-8 shadow-xl backdrop-blur md:py-10">
                <p className="font-serif text-5xl text-[#8F4633] md:text-6xl">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </p>

                <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[#B84A20]">
                  Minutes
                </p>
              </div>

              <div className="rounded-[28px] border border-white/20 bg-[#FFF8F0]/95 px-4 py-8 shadow-xl backdrop-blur md:py-10">
                <p className="font-serif text-5xl text-[#8F4633] md:text-6xl">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </p>

                <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[#B84A20]">
                  Secondes
                </p>
              </div>
            </div>

            <p className="mt-12 font-serif text-lg italic text-[#FFEBDD] md:text-xl">
              Encore un peu de patience avant de célébrer l’amour…
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-[#F2D0B3]/40" />
              <span className="text-[#F1C3AE]">♥</span>
              <div className="h-px w-16 bg-[#F2D0B3]/40" />
            </div>

            <div className="mt-12">
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#F1CDBB]">
                Notre histoire
              </p>

              <div className="mx-auto mt-3 h-10 w-px bg-gradient-to-b from-[#F1C3AE] to-transparent" />
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
          {/* =====================================================
              DÉCORATIONS
          ====================================================== */}
          <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-[#D99573]/10 blur-3xl" />

          <div className="pointer-events-none absolute -right-24 bottom-32 h-80 w-80 rounded-full bg-[#C54716]/10 blur-3xl" />

          <div className="pointer-events-none absolute left-8 top-24 hidden font-serif text-[130px] text-[#C54716]/5 md:block">
            A
          </div>

          <div className="pointer-events-none absolute bottom-24 right-8 hidden font-serif text-[130px] text-[#C54716]/5 md:block">
            B
          </div>


          <div className="relative z-10 mx-auto max-w-6xl">

            {/* =====================================================
                INTRODUCTION
            ====================================================== */}
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


              {/* PETITES SIGNATURES */}
              <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-4">

                <div className="rounded-full border border-[#C54716]/20 bg-white/50 px-5 py-2">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#C54716]">
                    La voix d’Anelka
                  </span>
                </div>

                <span className="font-serif text-[#D77A57]">
                  &
                </span>

                <div className="rounded-full border border-[#274E13]/20 bg-white/50 px-5 py-2">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#274E13]">
                    La voix de Baudouin
                  </span>
                </div>

              </div>

            </div>


            {/* =====================================================
                HISTOIRE
            ====================================================== */}
            <div className="mt-24 space-y-32 md:mt-28 md:space-y-40">

              {storyMoments.map((moment, index) => {

                const imageOnLeft = index % 2 === 0;

                return (
                  <article
                    key={`${moment.year}-${moment.title}`}
                    className="relative"
                  >

                    {/* NUMÉRO DÉCORATIF */}
                    <div
                      className={`pointer-events-none absolute -top-16 hidden font-serif text-[120px] leading-none text-[#C54716]/[0.045] lg:block ${
                        imageOnLeft
                          ? "right-0"
                          : "left-0"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>


                    {/* =================================================
                        PHOTO + RÉCITS
                    ================================================== */}
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">

                      {/* =================================================
                          PHOTO
                      ================================================== */}
                      <div
                        className={`${
                          imageOnLeft
                            ? "lg:order-1"
                            : "lg:order-2"
                        }`}
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

                          {/* VOILE PHOTO */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#3A1F1A]/55 via-transparent to-transparent" />


                          {/* PETIT CARTOUCHE SUR PHOTO */}
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


                      {/* =================================================
                          RÉCITS
                      ================================================== */}
                      <div
                        className={`${
                          imageOnLeft
                            ? "lg:order-2"
                            : "lg:order-1"
                        }`}
                      >

                        {/* ÉPOQUE */}
                        <p className="text-[10px] uppercase tracking-[0.4em] text-[#B84A20]">
                          {moment.year}
                        </p>

                        {/* TITRE */}
                        <h3 className="mt-4 font-serif text-3xl leading-tight text-[#5A3026] md:text-4xl">
                          {moment.title}
                        </h3>

                        <div className="mt-6 h-px w-16 bg-[#D77A57]" />


                        {/* =============================================
                            ANELKA
                        ============================================== */}
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


                          <div className="mt-5 space-y-4">

                            {moment.anelka.map((paragraph, paragraphIndex) => (
                              <p
                                key={paragraphIndex}
                                className="leading-8 text-[#765247]"
                              >
                                {paragraph}
                              </p>
                            ))}

                          </div>

                        </div>


                        {/* PETIT SÉPARATEUR */}
                        <div className="my-9 flex items-center gap-4">

                          <div className="h-px flex-1 bg-[#D77A57]/25" />

                          <span className="font-serif text-sm text-[#D77A57]">
                            ♡
                          </span>

                          <div className="h-px flex-1 bg-[#D77A57]/25" />

                        </div>


                        {/* =============================================
                            BAUDOUIN
                        ============================================== */}
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


                          <div className="mt-5 space-y-4">

                            {moment.baudouin.map((paragraph, paragraphIndex) => (
                              <p
                                key={paragraphIndex}
                                className="leading-8 text-[#56604D]"
                              >
                                {paragraph}
                              </p>
                            ))}

                          </div>

                        </div>

                      </div>

                    </div>


                    {/* =================================================
                        TRANSITION ENTRE LES CHAPITRES
                    ================================================== */}
                    {index !== storyMoments.length - 1 && (
                      <div className="mx-auto mt-24 flex max-w-xl items-center gap-5 md:mt-28">

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


            {/* =====================================================
                CONCLUSION
            ====================================================== */}
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
                commencent à écrire l’histoire qui les mène aujourd’hui jusqu’au mariage.
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

      {/* =========================
          TRANSITION HISTOIRE → PROGRAMME
      ========================== */}
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

      {/* =========================
          POPUP ENVELOPPE
      ========================== */}
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

                      localStorage.setItem("invitationOpened", "true");

                      setEnteredSite(true);

                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
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