"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [opened, setOpened] = useState(false);
  const [enteredSite, setEnteredSite] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [rsvpForm, setRsvpForm] = useState({
  name: "",
  presence24: "",
  presence28: "",
  accommodation: "",
  guests: "1",
  message: "",
  });

  const [rsvpStatus, setRsvpStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  useEffect(() => {
    const targetDate = new Date("2026-11-24T00:00:00");

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

  const handleRsvpSubmit = async (
  event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setRsvpStatus("sending");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rsvpForm),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Erreur lors de l'envoi");
      }

      setRsvpStatus("success");

      setRsvpForm({
        name: "",
        presence24: "",
        presence28: "",
        accommodation: "",
        guests: "1",
        message: "",
      });

      setTimeout(() => {
        setRsvpStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("RSVP :", error);

      setRsvpStatus("error");

      setTimeout(() => {
        setRsvpStatus("idle");
      }, 5000);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#7f4634]">

      {/* =========================================================
          NAVIGATION FIXE
      ========================================================= */}
      {enteredSite && (
        <>
          <nav className="fixed left-1/2 top-4 z-[90] w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
            <div className="flex items-center justify-between rounded-full border border-white/20 bg-[#3A241E]/90 px-4 py-3 shadow-2xl backdrop-blur-xl md:px-6">

              {/* =========================
                  MONOGRAMME
              ========================== */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="shrink-0 font-serif text-sm tracking-[0.15em] text-[#F4C58C]"
              >
                B | A
              </button>


              {/* =========================
                  DESKTOP
              ========================== */}
              <div className="hidden items-center gap-5 text-[9px] uppercase tracking-[0.2em] text-white/75 lg:flex">

                <a
                  href="#story"
                  className="transition hover:text-[#F4C58C]"
                >
                  Histoire
                </a>

                <a
                  href="#programme"
                  className="transition hover:text-[#F4C58C]"
                >
                  Programme
                </a>

                <a
                  href="#dresscode"
                  className="transition hover:text-[#F4C58C]"
                >
                  Dress Code
                </a>

                <a
                  href="#rsvp"
                  className="transition hover:text-[#F4C58C]"
                >
                  RSVP
                </a>

                <a
                  href="#hebergements"
                  className="transition hover:text-[#F4C58C]"
                >
                  Hébergements
                </a>

                <a
                  href="#localisation"
                  className="transition hover:text-[#F4C58C]"
                >
                  Lieux
                </a>

                <a
                  href="#cadeaux"
                  className="transition hover:text-[#F4C58C]"
                >
                  Cadeaux
                </a>

                <a
                  href="#snapchat"
                  className="transition hover:text-[#F4C58C]"
                >
                  Snapchat
                </a>

              </div>


              {/* =========================
                  PARTIE DROITE
              ========================== */}
              <div className="flex items-center gap-2">

                {/* RSVP */}
                <a
                  href="#rsvp"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full bg-[#C54716] px-4 py-2.5 text-[9px] uppercase tracking-[0.18em] text-white transition hover:bg-[#A83D13] md:px-5"
                >
                  Répondre
                </a>


                {/* =========================
                    HAMBURGER MOBILE
                ========================== */}
                <button
                  type="button"
                  aria-label="Ouvrir le menu"
                  aria-expanded={mobileMenuOpen}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#F4C58C]/50 hover:text-[#F4C58C] lg:hidden"
                >
                  <div className="flex w-4 flex-col gap-[4px]">

                    <span
                      className={`h-px w-full bg-current transition duration-300 ${
                        mobileMenuOpen
                          ? "translate-y-[5px] rotate-45"
                          : ""
                      }`}
                    />

                    <span
                      className={`h-px w-full bg-current transition duration-300 ${
                        mobileMenuOpen
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    />

                    <span
                      className={`h-px w-full bg-current transition duration-300 ${
                        mobileMenuOpen
                          ? "-translate-y-[5px] -rotate-45"
                          : ""
                      }`}
                    />

                  </div>
                </button>

              </div>

            </div>
          </nav>


          {/* =========================================================
              MENU MOBILE
          ========================================================= */}
          <div
            className={`fixed left-1/2 top-[76px] z-[89] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 transition-all duration-300 lg:hidden ${
              mobileMenuOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-3 opacity-0"
            }`}
          >
            <div className="overflow-hidden rounded-[28px] border border-white/15 bg-[#3A241E]/95 p-3 shadow-2xl backdrop-blur-xl">

              {/* PETIT TITRE */}
              <div className="px-4 pb-3 pt-2">
                <p className="text-[8px] uppercase tracking-[0.4em] text-[#F4C58C]/70">
                  Baudouin & Anelka
                </p>
              </div>


              {/* LIENS */}
              <div className="space-y-1">

                <a
                  href="#story"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-[18px] px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#F4C58C]"
                >
                  <span>Notre histoire</span>
                  <span className="text-white/30">01</span>
                </a>

                <a
                  href="#dresscode"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-[18px] px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#F4C58C]"
                >
                  <span>Dress Code</span>
                  <span className="text-white/30">02</span>
                </a>

                <a
                  href="#rsvp"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-[18px] px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#F4C58C]"
                >
                  <span>Confirmer ma présence</span>
                  <span className="text-white/30">03</span>
                </a>

                <a
                  href="#hebergements"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-[18px] px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#F4C58C]"
                >
                  <span>Hébergements</span>
                  <span className="text-white/30">04</span>
                </a>

                <a
                  href="#localisation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-[18px] px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#F4C58C]"
                >
                  <span>Localisation</span>
                  <span className="text-white/30">05</span>
                </a>

                <a
                  href="#cadeaux"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-[18px] px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#F4C58C]"
                >
                  <span>Cadeaux & attentions</span>
                  <span className="text-white/30">06</span>
                </a>

                <a
                  href="#snapchat"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-[18px] px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#F4C58C]"
                >
                  <span>Filtre Snapchat</span>
                  <span className="text-white/30">07</span>
                </a>

              </div>


              {/* BAS DU MENU */}
              <div className="mt-3 rounded-[20px] bg-[#C54716]/10 px-4 py-4 text-center">

                <p className="font-serif text-sm italic text-[#F4C58C]">
                  24 & 28 novembre 2026
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-white/40">
                  Yaoundé
                </p>

              </div>

            </div>
          </div>


          {/* =========================================================
              OVERLAY MOBILE
          ========================================================= */}
          {mobileMenuOpen && (
            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[80] bg-black/20 backdrop-blur-[1px] lg:hidden"
            />
          )}

        </>
      )}

      {/* =========================
          PAGE D'ACCUEIL
      ========================== */}
      {!enteredSite && (
        <section className="relative min-h-screen overflow-hidden text-white">
          <Image
            src="/images/couple.jpeg"
            alt="Baudouin et Anelka"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_25%] md:object-[center_30%]"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#7f4634]/10 to-[#4d271e]/75" />

          <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
            <div className="w-full max-w-xl text-center">
              <p className="mb-4 text-xs uppercase tracking-[0.45em] md:text-sm">
                Nous nous marions
              </p>

              <div className="mx-auto mb-5 h-px w-36 bg-[#e8c79d]/80" />

              <h1 className="font-serif text-5xl leading-[0.95] md:text-7xl">
                Baudouin
                <span className="my-1 block text-[#e2a066]">&</span>
                Anelka
              </h1>

              <p className="mt-7 text-xl md:text-2xl">
                24 & 28 novembre 2026
              </p>

              <p className="mt-2 text-sm tracking-wide text-white/90 md:text-base">
                Dote • Mairie • Église • Soirée
              </p>

              <button
                onClick={openInvitation}
                className="mt-9 rounded-full bg-[#fff1e3] px-9 py-4 font-semibold text-[#A93D17] shadow-2xl transition duration-300 hover:scale-105"
              >
                Ouvrir l’invitation
              </button>

              <div className="mt-5 animate-bounce text-xl text-[#f3d0ad]">
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
                B | A
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
              Jusqu’au 24 novembre 2026
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

      {/* =========================
          NOTRE HISTOIRE
      ========================== */}
      {enteredSite && (
        <section
          id="story"
          className="relative overflow-hidden bg-[#F8EFE9] px-6 py-24 text-[#6D3828]"
        >
          <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-[#D99573]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-32 h-80 w-80 rounded-full bg-[#C54716]/10 blur-3xl" />

          <div className="pointer-events-none absolute left-8 top-24 hidden font-serif text-[130px] text-[#C54716]/5 md:block">
            B
          </div>

          <div className="pointer-events-none absolute bottom-24 right-8 hidden font-serif text-[130px] text-[#C54716]/5 md:block">
            A
          </div>

          <div className="relative z-10 mx-auto max-w-6xl">

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-[#A93D17]">
                Notre histoire
              </p>

              <h2 className="mt-4 font-serif text-4xl md:text-6xl">
                Une histoire écrite par le destin
              </h2>

              <div className="mx-auto mt-6 h-px w-24 bg-[#D77A57]" />

              <p className="mt-7 font-serif text-lg italic leading-8 text-[#805B4E] md:text-xl">
                Tout a commencé par un simple appel en 2019…
              </p>
            </div>

            <div className="mt-24 space-y-28">

              {/* 1 */}
              <div className="grid gap-10 md:grid-cols-2 md:items-center">
                <div className="relative h-[420px] overflow-hidden rounded-[34px] shadow-xl md:h-[540px]">
                  <Image
                    src="/images/histoire1.jpeg"
                    alt="Baudouin et Anelka"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-[center_30%]"
                  />
                </div>

                <div className="md:px-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#B84A20]">
                    2019
                  </p>

                  <h3 className="mt-4 font-serif text-3xl md:text-4xl">
                    Le premier appel
                  </h3>

                  <div className="mt-5 h-px w-16 bg-[#D77A57]" />

                  <p className="mt-6 leading-8 text-[#765247]">
                    Tout a commencé le jour où il m’a appelée, en 2019.
                    Ce simple appel a illuminé ma journée d’une joie inattendue.
                    Je ne l’ai pas perçu comme une tentative de séduction, mais comme
                    une conversation sincère, légère, qui m’a fait du bien.
                    Parler avec lui me rendait heureuse, et très vite, nos échanges
                    sont devenus quotidiens.
                  </p>

                  <p className="mt-4 leading-8 text-[#765247]">
                    Chaque soir, après mes cours, je me précipitais dans ma chambre
                    pour pouvoir lui parler en appel vidéo. Il me faisait rire,
                    m’encourageait, et surtout, il me faisait me sentir importante.
                  </p>

                  <p className="mt-4 font-serif text-lg italic leading-8 text-[#9B6B59]">
                    C’était une période magique, pleine de complicité et de tendresse —
                    sans doute la plus belle de notre histoire jusqu’à aujourd’hui.
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="grid gap-10 md:grid-cols-2 md:items-center">
                <div className="order-2 md:order-1 md:px-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#B84A20]">
                    Quelques mois plus tard
                  </p>

                  <h3 className="mt-4 font-serif text-3xl md:text-4xl">
                    Le voyage qui a tout changé
                  </h3>

                  <div className="mt-5 h-px w-16 bg-[#D77A57]" />

                  <p className="mt-6 leading-8 text-[#765247]">
                    Puis, après mes examens, il m’a invitée à venir dans sa ville.
                    Je me souviens qu’il était un peu vexé que je n’aie pas été là
                    pour son anniversaire, qu’il aurait aimé partager ce moment avec moi.
                  </p>

                  <p className="mt-4 leading-8 text-[#765247]">
                    Alors j’ai pris la route, et ce voyage a marqué le vrai début
                    de notre relation.
                  </p>

                  <p className="mt-4 leading-8 text-[#765247]">
                    Quand je suis arrivée chez lui, j’ai été touchée par sa personnalité :
                    humble, poli — pas seulement avec moi, mais avec tout son entourage.
                    Il dégageait une stabilité de cœur et une vision de la vie
                    que j’admirais profondément.
                  </p>
                </div>

                <div className="relative order-1 h-[420px] overflow-hidden rounded-[34px] shadow-xl md:order-2 md:h-[540px]">
                  <Image
                    src="/images/histoire22.jpeg"
                    alt="Baudouin et Anelka"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* 3 */}
              <div className="grid gap-10 md:grid-cols-2 md:items-center">
                <div className="relative h-[420px] overflow-hidden rounded-[34px] shadow-xl md:h-[540px]">
                  <Image
                    src="/images/histoire33.jpeg"
                    alt="Baudouin et Anelka"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="md:px-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#B84A20]">
                    Au fil du temps
                  </p>

                  <h3 className="mt-4 font-serif text-3xl md:text-4xl">
                    Sa force tranquille
                  </h3>

                  <div className="mt-5 h-px w-16 bg-[#D77A57]" />

                  <p className="mt-6 leading-8 text-[#765247]">
                    Ce que j’aime le plus chez lui, c’est sa force tranquille.
                    Il trouve toujours une solution à mes problèmes — qu’ils soient
                    liés à mes études ou à mes démarches administratives.
                  </p>

                  <p className="mt-4 leading-8 text-[#765247]">
                    Il m’accompagne, me soutient, et me montre chaque jour qu’il a
                    une vraie volonté de réussir, et qu’il s’en donne les moyens.
                  </p>

                  <p className="mt-4 font-serif text-lg italic leading-8 text-[#9B6B59]">
                    Avec lui, j’ai découvert une forme d’amour solide et apaisant —
                    celui qui ne cherche pas à impressionner, mais à construire.
                  </p>

                  <p className="mt-4 leading-8 text-[#765247]">
                    Et depuis ce premier appel, chaque jour passé à ses côtés est
                    une preuve que le destin avait bien fait les choses.
                  </p>
                </div>
              </div>

              {/* 4 */}
              <div className="grid gap-10 md:grid-cols-2 md:items-center">
                <div className="order-2 md:order-1 md:px-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#B84A20]">
                    Février 2024
                  </p>

                  <h3 className="mt-4 font-serif text-3xl md:text-4xl">
                    Une nouvelle étape
                  </h3>

                  <div className="mt-5 h-px w-16 bg-[#D77A57]" />

                  <p className="mt-6 leading-8 text-[#765247]">
                    En février 2024, nous avons franchi une nouvelle étape :
                    nous avons emménagé ensemble.
                  </p>

                  <p className="mt-4 leading-8 text-[#765247]">
                    Ce fut une période bouleversante, pleine de défis et d’émotions.
                    Entre le stress, les dépenses et les ajustements du quotidien,
                    tout semblait nouveau, intense… d’autant plus que j’étais enceinte.
                  </p>
                </div>

                <div className="relative order-1 h-[420px] overflow-hidden rounded-[34px] shadow-xl md:order-2 md:h-[540px]">
                  <Image
                    src="/images/histoire4.jpeg"
                    alt="Baudouin et Anelka"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* 5 */}
              <div className="grid gap-10 md:grid-cols-2 md:items-center">
                <div className="relative h-[420px] overflow-hidden rounded-[34px] shadow-xl md:h-[540px]">
                  <Image
                    src="/images/histoire5.jpeg"
                    alt="Notre famille"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="md:px-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#B84A20]">
                    Avril 2024
                  </p>

                  <h3 className="mt-4 font-serif text-3xl md:text-4xl">
                    L’arrivée de LONAAM
                  </h3>

                  <div className="mt-5 h-px w-16 bg-[#D77A57]" />

                  <p className="mt-6 leading-8 text-[#765247]">
                    Puis, en avril 2024, notre vie a changé à jamais.
                    Notre petit bout de chou est arrivé — mon chéri d’amour,
                    comme j’aime l’appeler.
                  </p>

                  <p className="mt-4 leading-8 text-[#765247]">
                    Sa venue fut comme un tourbillon, un bouleversement à la fois
                    psychologique et émotionnel. Mais, tout comme l’arc-en-ciel
                    qui apparaît après la pluie, il a illuminé nos vies.
                  </p>

                  <p className="mt-4 font-serif text-lg italic leading-8 text-[#9B6B59]">
                    Chaque jour depuis sa naissance, il est notre lever de soleil,
                    fidèle à la signification de son prénom LONAAM : il s’est levé
                    pour illuminer nos vies.
                  </p>

                  <p className="mt-4 leading-8 text-[#765247]">
                    Notre guerrier, notre lion, symbole de force et de courage.
                    Sa venue fut comme un tremblement de terre — puissante,
                    imprévisible, mais porteuse de vie et d’énergie.
                  </p>

                  <p className="mt-4 leading-8 text-[#765247]">
                    Il a apporté un sens nouveau à notre amour, une raison de nous
                    dépasser, de nous unir encore plus.
                  </p>
                </div>
              </div>

              {/* 6 */}
              <div className="grid gap-10 md:grid-cols-2 md:items-center">
                <div className="order-2 md:order-1 md:px-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#B84A20]">
                    Novembre
                  </p>

                  <h3 className="mt-4 font-serif text-3xl md:text-4xl">
                    La rencontre de nos familles
                  </h3>

                  <div className="mt-5 h-px w-16 bg-[#D77A57]" />

                  <p className="mt-6 leading-8 text-[#765247]">
                    Et puis, en novembre, mon chéri a pris une belle initiative :
                    il a décidé que nos familles devaient se rencontrer.
                  </p>

                  <p className="mt-4 leading-8 text-[#765247]">
                    Cette rencontre s’est déroulée dans une atmosphère douce et
                    harmonieuse, pleine de respect et de joie.
                  </p>

                  <p className="mt-4 font-serif text-lg italic leading-8 text-[#9B6B59]">
                    C’était comme si nos deux univers s’étaient enfin rejoints
                    pour former un seul horizon — celui de notre avenir ensemble.
                  </p>
                </div>

                <div className="relative order-1 h-[420px] overflow-hidden rounded-[34px] shadow-xl md:order-2 md:h-[540px]">
                  <Image
                    src="/images/histoire6.jpeg"
                    alt="La rencontre de nos familles"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="mt-28 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D77A57]/60">
                <span className="font-serif text-sm tracking-[0.15em] text-[#A93D17]">
                  B | A
                </span>
              </div>

              <div className="mx-auto mt-7 h-px w-20 bg-[#D77A57]" />

              <p className="mx-auto mt-7 max-w-2xl font-serif text-xl italic leading-9 text-[#9B6B59] md:text-2xl">
                Et depuis ce premier appel, chaque jour passé à ses côtés est une
                preuve que le destin avait bien fait les choses.
              </p>

              <p className="mt-6 text-xs uppercase tracking-[0.35em] text-[#A93D17]">
                Baudouin & Anelka
              </p>

              <p className="mt-6 font-serif text-2xl italic text-[#6D3828] md:text-3xl">
                Et maintenant, une nouvelle page commence…
              </p>
            </div>
          </div>
        </section>
      )}

      {/* =========================
          TRANSITION HISTOIRE → PROGRAMME
      ========================== */}
      {enteredSite && (
        <div className="bg-[#C54716] py-12 md:py-14">
          <div className="mx-auto flex max-w-4xl items-center justify-center gap-6 px-6">
            <div className="h-px flex-1 bg-[#F1C3AE]/55" />

            <div className="shrink-0 text-center">
              <p className="font-serif text-xl tracking-[0.22em] text-[#F1C3AE]">
                B | A
              </p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.42em] text-[#FBEDE3]">
                24 · 28 novembre 2026
              </p>
            </div>

            <div className="h-px flex-1 bg-[#F1C3AE]/55" />
          </div>
        </div>
      )}

      {/* =========================================================
    PROGRAMME DU MARIAGE
========================================================= */}
{enteredSite && (
  <section
    id="programme"
    className="relative overflow-hidden bg-[#F8F1E8] px-6 py-20 md:px-12 md:py-24"
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

        <h2 className="mt-4 font-serif text-5xl text-[#4A2924] md:text-7xl">
          Le programme
        </h2>

        <div className="mx-auto mt-7 h-px w-20 bg-[#D77A57]" />

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#755B54] md:text-lg">
          Deux journées, quatre moments précieux et une seule histoire
          à célébrer ensemble.
        </p>
      </div>

      {/* =====================================================
          24 NOVEMBRE 2026
      ====================================================== */}
      <div className="mx-auto mt-20 max-w-4xl">

        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#C54716]">
            Première journée
          </p>

          <h3 className="mt-3 font-serif text-4xl text-[#4A2924] md:text-5xl">
            24 novembre 2026
          </h3>

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

              <h4 className="mt-3 font-serif text-3xl text-[#4A2924]">
                La Mairie
              </h4>

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

              <h4 className="mt-3 font-serif text-3xl text-[#4A2924]">
                La Dote
              </h4>

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

          <h3 className="mt-3 font-serif text-4xl text-[#4A2924] md:text-6xl">
            28 novembre 2026
          </h3>

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
)}

      {/* =========================
        DRESS CODE
      ========================= */}
      {enteredSite && (
        <section
          id="dresscode"
          className="relative overflow-hidden bg-[#C54716] px-6 py-24 text-[#FFF8F2] md:px-12 md:py-28"
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

              <h2 className="mt-4 font-serif text-5xl md:text-7xl">
                Dress Code
              </h2>

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

                <h3 className="mt-3 font-serif text-4xl md:text-5xl">
                  Hommes
                </h3>

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

                    {/* contour intérieur */}
                    <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-inset ring-white/15" />

                    {/* léger dégradé */}
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

                <h3 className="mt-3 font-serif text-4xl md:text-5xl">
                  Femmes
                </h3>

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
                  B | A
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
      )}

      {/* =========================================================
        RSVP
      ========================================================= */}

      {enteredSite && (
        <section
          id="rsvp"
          className="relative overflow-hidden bg-[#FFF8F2] px-6 py-24 text-[#4A2924] md:px-12 md:py-32"
        >
          {/* Décorations */}
          <div className="pointer-events-none absolute -left-36 top-20 h-[420px] w-[420px] rounded-full bg-[#C54716]/5 blur-3xl" />

          <div className="pointer-events-none absolute -right-36 bottom-20 h-[420px] w-[420px] rounded-full bg-[#6D071A]/5 blur-3xl" />

          <div className="relative mx-auto max-w-5xl">

            {/* ================= TITRE ================= */}

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-[11px] uppercase tracking-[0.45em] text-[#C54716]">
                Votre réponse
              </p>

              <h2 className="mt-4 font-serif text-5xl md:text-7xl">
                Serez-vous des nôtres ?
              </h2>

              <div className="mx-auto mt-7 h-px w-20 bg-[#D8A060]" />

              <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#765B52] md:text-lg">
                Nous serions heureux de partager ces moments avec vous.
                Merci de prendre quelques instants pour confirmer votre présence.
              </p>

            </div>


            {/* ================= FORMULAIRE ================= */}

            <form
              onSubmit={handleRsvpSubmit}
              className="mx-auto mt-16 max-w-3xl rounded-[36px] border border-[#E7D5CA] bg-white px-7 py-10 shadow-[0_25px_80px_rgba(98,47,31,0.08)] md:px-12 md:py-14"
            >

              {/* NOM */}
              <div>
                <label
                  htmlFor="name"
                  className="text-[10px] uppercase tracking-[0.35em] text-[#A65A43]"
                >
                  Nom & prénom
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  value={rsvpForm.name}
                  onChange={(e) =>
                    setRsvpForm({
                      ...rsvpForm,
                      name: e.target.value,
                    })
                  }
                  placeholder="Votre nom complet"
                  className="mt-3 w-full border-b border-[#D9B8A9] bg-transparent px-1 py-4 text-lg outline-none transition placeholder:text-[#B7A39A] focus:border-[#C54716]"
                />
              </div>


              {/* ================= 24 NOVEMBRE ================= */}

              <div className="mt-12">

                <p className="text-[10px] uppercase tracking-[0.35em] text-[#A65A43]">
                  24 novembre 2026
                </p>

                <h3 className="mt-2 font-serif text-2xl">
                  Dote & Mairie
                </h3>

                <p className="mt-3 text-sm text-[#8A7067]">
                  Serez-vous présent(e) ?
                </p>

                <div className="mt-5 grid grid-cols-2 gap-4">

                  <label
                    className={`cursor-pointer rounded-[20px] border px-5 py-4 text-center transition ${
                      rsvpForm.presence24 === "oui"
                        ? "border-[#C54716] bg-[#C54716] text-white"
                        : "border-[#E4D0C4] bg-[#FFF9F5] hover:border-[#C54716]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="presence24"
                      value="oui"
                      required
                      checked={rsvpForm.presence24 === "oui"}
                      onChange={(e) =>
                        setRsvpForm({
                          ...rsvpForm,
                          presence24: e.target.value,
                        })
                      }
                      className="hidden"
                    />

                    Oui, avec plaisir
                  </label>

                  <label
                    className={`cursor-pointer rounded-[20px] border px-5 py-4 text-center transition ${
                      rsvpForm.presence24 === "non"
                        ? "border-[#6D071A] bg-[#6D071A] text-white"
                        : "border-[#E4D0C4] bg-[#FFF9F5] hover:border-[#6D071A]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="presence24"
                      value="non"
                      checked={rsvpForm.presence24 === "non"}
                      onChange={(e) =>
                        setRsvpForm({
                          ...rsvpForm,
                          presence24: e.target.value,
                        })
                      }
                      className="hidden"
                    />

                    Je ne pourrai pas
                  </label>

                </div>
              </div>


              {/* ================= 28 NOVEMBRE ================= */}

              <div className="mt-12">

                <p className="text-[10px] uppercase tracking-[0.35em] text-[#A65A43]">
                  28 novembre 2026
                </p>

                <h3 className="mt-2 font-serif text-2xl">
                  Église & Soirée
                </h3>

                <p className="mt-3 text-sm text-[#8A7067]">
                  Serez-vous présent(e) ?
                </p>

                <div className="mt-5 grid grid-cols-2 gap-4">

                  <label
                    className={`cursor-pointer rounded-[20px] border px-5 py-4 text-center transition ${
                      rsvpForm.presence28 === "oui"
                        ? "border-[#C54716] bg-[#C54716] text-white"
                        : "border-[#E4D0C4] bg-[#FFF9F5] hover:border-[#C54716]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="presence28"
                      value="oui"
                      required
                      checked={rsvpForm.presence28 === "oui"}
                      onChange={(e) =>
                        setRsvpForm({
                          ...rsvpForm,
                          presence28: e.target.value,
                        })
                      }
                      className="hidden"
                    />

                    Oui, avec plaisir
                  </label>

                  <label
                    className={`cursor-pointer rounded-[20px] border px-5 py-4 text-center transition ${
                      rsvpForm.presence28 === "non"
                        ? "border-[#6D071A] bg-[#6D071A] text-white"
                        : "border-[#E4D0C4] bg-[#FFF9F5] hover:border-[#6D071A]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="presence28"
                      value="non"
                      checked={rsvpForm.presence28 === "non"}
                      onChange={(e) =>
                        setRsvpForm({
                          ...rsvpForm,
                          presence28: e.target.value,
                        })
                      }
                      className="hidden"
                    />

                    Je ne pourrai pas
                  </label>

                </div>
              </div>


              {/* ================= HÉBERGEMENT ================= */}

              <div className="mt-12">

                <label
                  htmlFor="accommodation"
                  className="text-[10px] uppercase tracking-[0.35em] text-[#A65A43]"
                >
                  Hébergement
                </label>

                <p className="mt-2 font-serif text-2xl">
                  Souhaitez-vous dormir sur place ?
                </p>

                <select
                  id="accommodation"
                  required
                  value={rsvpForm.accommodation}
                  onChange={(e) =>
                    setRsvpForm({
                      ...rsvpForm,
                      accommodation: e.target.value,
                    })
                  }
                  className="mt-5 w-full rounded-[18px] border border-[#E4D0C4] bg-[#FFF9F5] px-5 py-4 outline-none focus:border-[#C54716]"
                >
                  <option value="">
                    Choisir une réponse
                  </option>

                  <option value="oui">
                    Oui
                  </option>

                  <option value="non">
                    Non
                  </option>

                  <option value="pas-encore">
                    Je ne sais pas encore
                  </option>
                </select>

              </div>


              {/* ================= NOMBRE DE PERSONNES ================= */}

              <div className="mt-12">

                <label
                  htmlFor="guests"
                  className="text-[10px] uppercase tracking-[0.35em] text-[#A65A43]"
                >
                  Nombre de personnes
                </label>

                <select
                  id="guests"
                  value={rsvpForm.guests}
                  onChange={(e) =>
                    setRsvpForm({
                      ...rsvpForm,
                      guests: e.target.value,
                    })
                  }
                  className="mt-4 w-full rounded-[18px] border border-[#E4D0C4] bg-[#FFF9F5] px-5 py-4 outline-none focus:border-[#C54716]"
                >
                  <option value="1">1 personne</option>
                  <option value="2">2 personnes</option>
                  <option value="3">3 personnes</option>
                  <option value="4">4 personnes</option>
                  <option value="5">5 personnes</option>
                </select>

              </div>


              {/* ================= MESSAGE ================= */}

              <div className="mt-12">

                <label
                  htmlFor="message"
                  className="text-[10px] uppercase tracking-[0.35em] text-[#A65A43]"
                >
                  Un mot pour les mariés
                </label>

                <textarea
                  id="message"
                  rows={5}
                  value={rsvpForm.message}
                  onChange={(e) =>
                    setRsvpForm({
                      ...rsvpForm,
                      message: e.target.value,
                    })
                  }
                  placeholder="Laissez ici votre message, vos vœux ou une petite pensée..."
                  className="mt-4 w-full resize-none rounded-[20px] border border-[#E4D0C4] bg-[#FFF9F5] px-5 py-5 leading-7 outline-none placeholder:text-[#B7A39A] focus:border-[#C54716]"
                />

              </div>


              {/* ================= BOUTON ================= */}

              <div className="mt-12 text-center">

                <button
                  type="submit"
                  disabled={rsvpStatus === "sending"}
                  className="rounded-full bg-[#C54716] px-10 py-4 text-[11px] uppercase tracking-[0.28em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#A83D13] hover:shadow-xl disabled:cursor-wait disabled:opacity-60"
                >
                  {rsvpStatus === "sending"
                    ? "Envoi en cours..."
                    : "Confirmer ma présence"}
                </button>

              </div>


              {/* ================= CONFIRMATION ================= */}

              {rsvpStatus === "success" && (
                <div className="mt-8 rounded-[20px] bg-[#274E13]/10 px-6 py-5 text-center">

                  <p className="font-serif text-xl text-[#274E13]">
                    Merci pour votre réponse ♡
                  </p>

                  <p className="mt-2 text-sm text-[#5D7153]">
                    Votre réponse a bien été prise en compte.
                  </p>

                </div>
              )}

              {rsvpStatus === "error" && (
                <div className="mt-8 rounded-[20px] bg-[#6D071A]/10 px-6 py-5 text-center">

                  <p className="text-[#6D071A]">
                    Une erreur est survenue. Merci de réessayer.
                  </p>

                </div>
              )}

            </form>


            {/* ================= BAS DE SECTION ================= */}

            <div className="mt-16 text-center">

              <div className="mx-auto flex items-center justify-center gap-4">

                <div className="h-px w-16 bg-[#D8A060]/50" />

                <span className="font-serif text-sm tracking-[0.15em] text-[#C54716]">
                  B | A
                </span>

                <div className="h-px w-16 bg-[#D8A060]/50" />

              </div>

              <p className="mt-6 font-serif text-lg italic text-[#9B6B59]">
                Merci de faire partie de notre histoire.
              </p>

            </div>

          </div>
        </section>
      )}


      {/* =========================================================
          HÉBERGEMENTS
      ========================================================= */}
      {enteredSite && (
        <section
          id="hebergements"
          className="relative overflow-hidden bg-[#FFF8F2] px-6 py-24 md:px-12 md:py-28"
        >
          {/* Décoration de fond */}
          <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#C54716]/5 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#274E13]/5 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">

            {/* =====================================================
                TITRE
            ====================================================== */}
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] uppercase tracking-[0.45em] text-[#C54716]">
                Pour votre séjour
              </p>

              <h2 className="mt-4 font-serif text-5xl text-[#4A2924] md:text-7xl">
                Où se loger ?
              </h2>

              <div className="mx-auto mt-6 h-px w-20 bg-[#C54716]/50" />

              <p className="mx-auto mt-7 max-w-2xl leading-8 text-[#765B52]">
                Pour faciliter votre séjour à Yaoundé, voici quelques
                hébergements situés à Odza et aux alentours.
              </p>

              <p className="mx-auto mt-3 max-w-xl font-serif italic text-[#9A6D5E]">
                Contactez directement l’établissement de votre choix pour
                connaître les disponibilités.
              </p>
            </div>


            {/* =====================================================
                LES 3 HÉBERGEMENTS
            ====================================================== */}
            <div className="mt-16 grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">


              {/* ===================================================
                  01 — CONFORT HOUSE
              =================================================== */}
              <article
                className="
                  group
                  flex h-full flex-col
                  overflow-hidden
                  rounded-[32px]
                  border border-[#6D071A]/10
                  bg-white
                  shadow-[0_20px_60px_rgba(70,30,20,0.10)]
                  transition duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_30px_80px_rgba(70,30,20,0.16)]
                "
              >

                {/* PHOTO */}
                <div className="relative h-[320px] shrink-0 overflow-hidden bg-[#EFE5DE]">
                  <Image
                    src="/images/confort-house.jpg"
                    alt="Confort House Appart à Yaoundé"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  {/* Badge */}
                  <div className="absolute left-5 top-5 rounded-full bg-[#C54716] px-4 py-2 text-[9px] uppercase tracking-[0.22em] text-white shadow-lg">
                    Odza · Yaoundé
                  </div>

                  {/* Nom sur photo */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
                      Hébergement
                    </p>

                    <h3 className="mt-1 font-serif text-3xl text-white">
                      Confort House
                    </h3>
                  </div>
                </div>


                {/* CONTENU */}
                <div className="flex flex-1 flex-col p-7">

                  {/* TYPE */}
                  <p className="text-sm font-medium text-[#6D071A]">
                    Appartements & studios meublés
                  </p>

                  {/* DESCRIPTION */}
                  <div className="mt-4 min-h-[120px]">
                    <p className="leading-7 text-[#765B52]">
                      Un hébergement meublé situé à Yaoundé, dans le secteur
                      Happy – Ekoumdoum, juste en face de la station Neptune.
                    </p>
                  </div>


                  {/* CONTACT */}
                  <div className="mt-5 rounded-[20px] bg-[#FFF8F2] p-5">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#C54716]">
                      Contact
                    </p>

                    <p className="mt-2 font-serif text-xl text-[#4A2924]">
                      +237 679 19 07 00
                    </p>
                  </div>


                  {/* BOUTONS TOUJOURS EN BAS */}
                  <div className="mt-auto space-y-3 pt-8">

                    {/* WHATSAPP */}
                    <a
                      href="https://wa.me/237679190700?text=Bonjour%2C%20je%20vous%20contacte%20concernant%20un%20hébergement%20pour%20le%20mariage%20de%20Baudouin%20et%20Anelka.%20Pourriez-vous%20me%20communiquer%20vos%20disponibilités%20s'il%20vous%20plaît%20%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex w-full items-center justify-center
                        rounded-full
                        bg-[#274E13]
                        px-5 py-4
                        text-center text-[10px]
                        uppercase tracking-[0.22em]
                        text-white
                        transition duration-300
                        hover:-translate-y-1
                        hover:bg-[#1D3C0D]
                      "
                    >
                      Écrire sur WhatsApp
                    </a>

                    {/* TIKTOK */}
                    <a
                      href="https://vt.tiktok.com/ZSXm5wbvs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex w-full items-center justify-center
                        rounded-full
                        border border-[#6D071A]/15
                        px-5 py-4
                        text-center text-[10px]
                        uppercase tracking-[0.20em]
                        text-[#6D071A]
                        transition duration-300
                        hover:border-[#6D071A]/30
                        hover:bg-[#6D071A]/5
                      "
                    >
                      Voir le logement sur TikTok
                    </a>

                  </div>
                </div>
              </article>



              {/* ===================================================
                  02 — COMPLEXE HÔTELIER HAPPY
              =================================================== */}
              <article
                className="
                  group
                  flex h-full flex-col
                  overflow-hidden
                  rounded-[32px]
                  border border-[#6D071A]/10
                  bg-white
                  shadow-[0_20px_60px_rgba(70,30,20,0.10)]
                  transition duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_30px_80px_rgba(70,30,20,0.16)]
                "
              >

                {/* PHOTO */}
                <div className="relative h-[320px] shrink-0 overflow-hidden bg-[#EFE5DE]">
                  <Image
                    src="/images/complexe-happy.jpg"
                    alt="Complexe Hôtelier Happy à Yaoundé"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  {/* Badge */}
                  <div className="absolute left-5 top-5 rounded-full bg-[#6D071A] px-4 py-2 text-[9px] uppercase tracking-[0.22em] text-white shadow-lg">
                    Odza · Yaoundé
                  </div>

                  {/* Nom */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
                      Complexe hôtelier
                    </p>

                    <h3 className="mt-1 font-serif text-3xl text-white">
                      Complexe Happy
                    </h3>
                  </div>
                </div>


                {/* CONTENU */}
                <div className="flex flex-1 flex-col p-7">

                  {/* TYPE */}
                  <p className="text-sm font-medium text-[#6D071A]">
                    Appartements · Studios · Duplex
                  </p>

                  {/* DESCRIPTION */}
                  <div className="mt-4 min-h-[120px]">
                    <p className="leading-7 text-[#765B52]">
                      Situé au cœur du quartier résidentiel Odza, le Complexe
                      Happy propose différents types de logements pour votre
                      séjour à Yaoundé.
                    </p>
                  </div>


                  {/* CONTACTS */}
                  <div className="mt-5 rounded-[20px] bg-[#FFF8F2] p-5">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#C54716]">
                      Contacts
                    </p>

                    <p className="mt-2 font-serif text-lg text-[#4A2924]">
                      +237 671 298 113
                    </p>

                    <p className="mt-1 font-serif text-lg text-[#4A2924]">
                      +237 691 252 135
                    </p>
                  </div>


                  {/* BOUTONS TOUJOURS EN BAS */}
                  <div className="mt-auto space-y-3 pt-8">

                    {/* WHATSAPP */}
                    <a
                      href="https://wa.me/237671298113?text=Bonjour%2C%20je%20vous%20contacte%20concernant%20un%20hébergement%20pour%20le%20mariage%20de%20Baudouin%20et%20Anelka.%20Pourriez-vous%20me%20communiquer%20vos%20disponibilités%20s'il%20vous%20plaît%20%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex w-full items-center justify-center
                        rounded-full
                        bg-[#274E13]
                        px-5 py-4
                        text-center text-[10px]
                        uppercase tracking-[0.22em]
                        text-white
                        transition duration-300
                        hover:-translate-y-1
                        hover:bg-[#1D3C0D]
                      "
                    >
                      Écrire sur WhatsApp
                    </a>

                    {/* TIKTOK */}
                    <a
                      href="https://vm.tiktok.com/ZGdxQHgpA/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex w-full items-center justify-center
                        rounded-full
                        border border-[#6D071A]/15
                        px-5 py-4
                        text-center text-[10px]
                        uppercase tracking-[0.20em]
                        text-[#6D071A]
                        transition duration-300
                        hover:border-[#6D071A]/30
                        hover:bg-[#6D071A]/5
                      "
                    >
                      Voir le logement sur TikTok
                    </a>

                  </div>
                </div>
              </article>



              {/* ===================================================
                  03 — ANAYAH APPARTS
              =================================================== */}
              <article
                className="
                  group
                  flex h-full flex-col
                  overflow-hidden
                  rounded-[32px]
                  border border-[#6D071A]/10
                  bg-white
                  shadow-[0_20px_60px_rgba(70,30,20,0.10)]
                  transition duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_30px_80px_rgba(70,30,20,0.16)]
                "
              >

                {/* PHOTO */}
                <div className="relative h-[320px] shrink-0 overflow-hidden bg-[#EFE5DE]">
                  <Image
                    src="/images/anayah-appart.jpg"
                    alt="Anayah Apparts à Yaoundé"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  {/* Badge */}
                  <div className="absolute left-5 top-5 rounded-full bg-[#274E13] px-4 py-2 text-[9px] uppercase tracking-[0.22em] text-white shadow-lg">
                    Odza & environs
                  </div>

                  {/* Nom */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
                      Appartements meublés
                    </p>

                    <h3 className="mt-1 font-serif text-3xl text-white">
                      Anayah Apparts
                    </h3>
                  </div>
                </div>


                {/* CONTENU */}
                <div className="flex flex-1 flex-col p-7">

                  {/* TYPE */}
                  <p className="text-sm font-medium text-[#6D071A]">
                    Chambres · Studios · Appartements
                  </p>

                  {/* DESCRIPTION */}
                  <div className="mt-4 min-h-[120px]">
                    <p className="leading-7 text-[#765B52]">
                      Plusieurs types de logements meublés sont disponibles
                      à Odza et aux alentours, avec climatisation, eau chaude,
                      gardiennage et service de ménage.
                    </p>
                  </div>


                  {/* TARIFS */}
                  <div className="mt-5 rounded-[20px] bg-[#FFF8F2] p-4">

                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#C54716]">
                      Tarifs indicatifs
                    </p>

                    <div className="mt-3 space-y-2 text-sm text-[#765B52]">

                      {/* Chambres */}
                      <div className="flex items-center justify-between gap-4">
                        <span>Chambres</span>

                        <span className="text-right font-medium text-[#4A2924]">
                          dès 15 000 FCFA
                        </span>
                      </div>

                      <div className="h-px bg-[#6D071A]/10" />

                      {/* Studios */}
                      <div className="flex items-center justify-between gap-4">
                        <span>Studios</span>

                        <span className="text-right font-medium text-[#4A2924]">
                          20 000 – 35 000
                        </span>
                      </div>

                      <div className="h-px bg-[#6D071A]/10" />

                      {/* Appartement */}
                      <div className="flex items-center justify-between gap-4">
                        <span>Appartement</span>

                        <span className="text-right font-medium text-[#4A2924]">
                          50 000 FCFA / 24h
                        </span>
                      </div>

                    </div>
                  </div>


                  {/* CONTACT */}
                  <div className="mt-4 rounded-[20px] bg-[#FFF8F2] p-4">

                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#C54716]">
                      Contact
                    </p>

                    <p className="mt-2 font-serif text-xl text-[#4A2924]">
                      +237 655 08 02 88
                    </p>

                  </div>


                  {/* BOUTONS TOUJOURS EN BAS */}
                  <div className="mt-auto space-y-3 pt-8">

                    {/* WHATSAPP */}
                    <a
                      href="https://wa.me/237655080288?text=Bonjour%2C%20je%20vous%20contacte%20concernant%20un%20hébergement%20pour%20le%20mariage%20de%20Baudouin%20et%20Anelka.%20Pourriez-vous%20me%20communiquer%20vos%20disponibilités%20s'il%20vous%20plaît%20%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex w-full items-center justify-center
                        rounded-full
                        bg-[#274E13]
                        px-5 py-4
                        text-center text-[10px]
                        uppercase tracking-[0.22em]
                        text-white
                        transition duration-300
                        hover:-translate-y-1
                        hover:bg-[#1D3C0D]
                      "
                    >
                      Écrire sur WhatsApp
                    </a>

                    {/* TIKTOK */}
                    <a
                      href="https://vm.tiktok.com/ZGdxQuJb7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex w-full items-center justify-center
                        rounded-full
                        border border-[#6D071A]/15
                        px-5 py-4
                        text-center text-[10px]
                        uppercase tracking-[0.20em]
                        text-[#6D071A]
                        transition duration-300
                        hover:border-[#6D071A]/30
                        hover:bg-[#6D071A]/5
                      "
                    >
                      Voir le logement sur TikTok
                    </a>

                  </div>
                </div>
              </article>

            </div>


            {/* =====================================================
                NOTE EN BAS
            ====================================================== */}
            <div className="mx-auto mt-16 max-w-3xl text-center">

              <div className="mx-auto flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-[#C54716]/25" />

                <span className="font-serif text-sm text-[#C54716]">
                  B | A
                </span>

                <div className="h-px w-16 bg-[#C54716]/25" />
              </div>

              <p className="mt-6 text-sm leading-7 text-[#8A6D63]">
                Les tarifs et disponibilités peuvent évoluer.
                Nous vous recommandons de contacter directement
                l’établissement de votre choix avant votre arrivée.
              </p>

            </div>

          </div>
        </section>
      )}

      {/* =========================================================
      LOCALISATION
      ========================================================= */}
      {enteredSite && (
        <section
          id="localisation"
          className="relative overflow-hidden bg-[#6D071A] px-6 py-24 text-[#FFF8F2] md:px-12 md:py-28"
        >
          {/* Décorations */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-36 -right-28 h-[420px] w-[420px] rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-6xl">

            {/* TITRE */}
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] uppercase tracking-[0.45em] text-[#F4C58C]">
                Où nous retrouver
              </p>

              <h2 className="mt-4 font-serif text-5xl md:text-7xl">
                Localisation
              </h2>

              <div className="mx-auto mt-6 h-px w-20 bg-[#F4C58C]" />

              <p className="mx-auto mt-7 max-w-2xl leading-8 text-white/80">
                Retrouvez-nous au cœur de Yaoundé pour célébrer cette journée
                exceptionnelle avec nous.
              </p>
            </div>

            {/* CONTENU */}
            <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">

              {/* INFOS LIEU */}
              {/* INFOS GREEN GARDEN AVEC PHOTO */}
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

                  <h3 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                    Green Garden
                  </h3>

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

              {/* CARTE */}
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

            {/* FIN */}
            <div className="mt-16 text-center">
              <div className="mx-auto flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-[#F4C58C]/40" />
                <span className="font-serif text-sm text-[#F4C58C]">
                  B | A
                </span>
                <div className="h-px w-16 bg-[#F4C58C]/40" />
              </div>

              <p className="mt-6 font-serif text-lg italic text-white/75">
                Nous vous attendons avec impatience.
              </p>
            </div>

          </div>
        </section>
      )}


      {/* =========================================================
          LISTE DE CADEAUX & CONTRIBUTIONS
      ========================================================= */}
      {enteredSite && (
        <section
          id="cadeaux"
          className="relative overflow-hidden bg-[#FFF8F2] px-6 py-24 text-[#4A2924] md:px-12 md:py-28"
        >
          {/* Décorations */}
          <div className="pointer-events-none absolute -left-32 top-20 h-[380px] w-[380px] rounded-full bg-[#C54716]/5 blur-3xl" />

          <div className="pointer-events-none absolute -right-32 bottom-20 h-[380px] w-[380px] rounded-full bg-[#274E13]/5 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">

            {/* =====================================================
                TITRE
            ====================================================== */}
            <div className="mx-auto max-w-3xl text-center">

              <p className="text-[11px] uppercase tracking-[0.45em] text-[#C54716]">
                Une attention pour nous
              </p>

              <h2 className="mt-4 font-serif text-5xl md:text-7xl">
                Cadeaux & attentions
              </h2>

              <div className="mx-auto mt-6 h-px w-20 bg-[#D77A57]" />

              <p className="mx-auto mt-7 max-w-2xl leading-8 text-[#765B52]">
                Votre présence à nos côtés est déjà un merveilleux cadeau.
                Si vous souhaitez toutefois nous faire une attention,
                plusieurs possibilités s’offrent à vous.
              </p>

              <p className="mx-auto mt-4 max-w-xl font-serif text-lg italic text-[#9B6B59]">
                Choisissez simplement celle qui vous convient le mieux.
              </p>

            </div>


            {/* =====================================================
                1 — LISTE DE CADEAUX
            ====================================================== */}
            <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[38px] border border-[#E7D5CA] bg-white shadow-[0_25px_70px_rgba(98,47,31,0.08)]">

              <div className="grid md:grid-cols-[1.15fr_0.85fr]">

                {/* TEXTE */}
                <div className="relative overflow-hidden p-8 md:p-12">

                  <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#C54716]/5" />

                  <div className="relative z-10">

                    <div className="flex items-center gap-4">

                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C54716]/20 bg-[#C54716]/5 font-serif text-lg text-[#C54716]">
                        01
                      </span>

                      <p className="text-[10px] uppercase tracking-[0.35em] text-[#C54716]">
                        Notre liste de mariage
                      </p>

                    </div>

                    <h3 className="mt-7 max-w-xl font-serif text-3xl md:text-4xl">
                      Quelques idées pour notre nouvelle aventure
                    </h3>

                    <div className="mt-6 h-px w-16 bg-[#D77A57]" />

                    <p className="mt-6 max-w-xl leading-8 text-[#765B52]">
                      Nous avons préparé une sélection de cadeaux pour celles
                      et ceux qui souhaitent choisir une attention particulière
                      qui nous accompagnera dans cette nouvelle étape de notre vie.
                    </p>

                    <a
                      href="https://www.mesenvies.fr/liste-mariage/33833755"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex rounded-full bg-[#C54716] px-8 py-4 text-[10px] uppercase tracking-[0.24em] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#A83D13] hover:shadow-xl"
                    >
                      Découvrir notre liste de cadeaux
                    </a>

                  </div>
                </div>


                {/* PARTIE DROITE */}
                <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#6D071A] p-8 text-center text-white md:p-10">

                  {/* décor discret */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />
                  <div className="pointer-events-none absolute -bottom-14 -left-14 h-44 w-44 rounded-full border border-white/10" />

                  <div className="relative z-10 w-full max-w-sm">

                    {/* MONOGRAMME */}
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#F4C58C]/30 bg-white/5">
                      <span className="font-serif text-xl text-[#F4C58C]">
                        B | A
                      </span>
                    </div>

                    <p className="mt-6 text-[9px] uppercase tracking-[0.35em] text-[#F4C58C]">
                      Liste en ligne
                    </p>

                    <p className="mx-auto mt-3 max-w-xs font-serif text-xl leading-8 text-white">
                      Choisissez librement le cadeau qui vous fera plaisir de nous offrir.
                    </p>

                    {/* QR CODE PLUS PETIT */}
                    <div className="mx-auto mt-7 w-[170px] rounded-[22px] bg-white p-3 shadow-[0_16px_35px_rgba(0,0,0,0.22)]">
                      <div className="relative aspect-square w-full overflow-hidden rounded-[14px]">
                        <Image
                          src="/images/qr-liste-cadeaux.jpg"
                          alt="QR code de la liste de cadeaux de Baudouin et Anelka"
                          fill
                          sizes="170px"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <p className="mt-5 text-[9px] uppercase tracking-[0.28em] text-[#F4C58C]">
                      Scannez pour accéder à la liste
                    </p>

                    <p className="mx-auto mt-3 max-w-[250px] text-xs leading-5 text-white/55">
                      Ou utilisez directement le bouton à gauche.
                    </p>

                  </div>
                </div>
              
              </div>
            </div>


            {/* =====================================================
                SÉPARATEUR
            ====================================================== */}
            <div className="mx-auto flex max-w-2xl items-center gap-5 py-16">

              <div className="h-px flex-1 bg-[#D77A57]/30" />

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D77A57]/35">
                <span className="text-[#C54716]">♡</span>
              </div>

              <div className="h-px flex-1 bg-[#D77A57]/30" />

            </div>


            {/* =====================================================
                2 — PARTICIPATION LIBRE
            ====================================================== */}
            <div className="mx-auto max-w-5xl">

              <div className="mx-auto max-w-3xl text-center">

                <p className="text-[10px] uppercase tracking-[0.4em] text-[#6D071A]">
                  Une autre façon de participer
                </p>

                <h3 className="mt-4 font-serif text-4xl md:text-5xl">
                  Une participation libre
                </h3>

                <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#765B52]">
                  Si vous préférez nous offrir une contribution libre,
                  vous pourrez également utiliser l’un des moyens ci-dessous,
                  depuis le Cameroun ou depuis l’étranger.
                </p>

              </div>


              {/* ===================================================
                  MOYENS DE CONTRIBUTION
              =================================================== */}
              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">


                {/* PAYPAL */}
                <div className="flex min-h-[285px] flex-col rounded-[28px] border border-[#6D071A]/10 bg-white p-6 shadow-[0_15px_45px_rgba(70,30,20,0.06)]">

                  <div className="relative h-14 w-14 overflow-hidden rounded-[16px] bg-white p-2 shadow-sm ring-1 ring-[#6D071A]/10">
                    <Image
                      src="/images/payment/paypal.png"
                      alt="PayPal"
                      fill
                      sizes="56px"
                      className="object-contain p-2"
                    />
                  </div>

                  <p className="mt-6 text-[9px] uppercase tracking-[0.3em] text-[#C54716]">
                    International
                  </p>

                  <h4 className="mt-2 font-serif text-2xl text-[#4A2924]">
                    PayPal
                  </h4>

                  <p className="mt-4 text-sm leading-6 text-[#8A6D63]">
                    Pour celles et ceux qui souhaitent participer simplement
                    depuis l’étranger.
                  </p>

                  <div className="mt-auto pt-6">

                    {/*
                      PLUS TARD :
                      remplacer # par le vrai lien PayPal
                    */}
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-full border border-[#6D071A]/20 px-4 py-3 text-[9px] uppercase tracking-[0.18em] text-[#6D071A]"
                    >
                      Informations à venir
                    </a>

                  </div>
                </div>


                {/* VIREMENT */}
                <div className="flex min-h-[285px] flex-col rounded-[28px] border border-[#6D071A]/10 bg-white p-6 shadow-[0_15px_45px_rgba(70,30,20,0.06)]">

                  <div className="relative h-14 w-14 overflow-hidden rounded-[16px] bg-white p-2 shadow-sm ring-1 ring-[#C54716]/10">
                    <Image
                      src="/images/payment/bank.png"
                      alt="Virement bancaire"
                      fill
                      sizes="56px"
                      className="object-contain p-2"
                    />
                  </div>

                  <p className="mt-6 text-[9px] uppercase tracking-[0.3em] text-[#C54716]">
                    Banque
                  </p>

                  <h4 className="mt-2 font-serif text-2xl text-[#4A2924]">
                    Virement
                  </h4>

                  <p className="mt-4 text-sm leading-6 text-[#8A6D63]">
                    Une participation pourra également être envoyée
                    directement par virement bancaire.
                  </p>

                  <div className="mt-auto pt-6">

                    <div className="rounded-[18px] bg-[#FFF8F2] px-4 py-3 text-center">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[#9A7C72]">
                        Coordonnées bancaires
                      </p>

                      <p className="mt-2 text-sm text-[#6D071A]">
                        À renseigner
                      </p>
                    </div>

                  </div>
                </div>


                {/* ORANGE MONEY */}
                <div className="flex min-h-[285px] flex-col rounded-[28px] border border-[#C54716]/15 bg-[#FFF9F5] p-6 shadow-[0_15px_45px_rgba(70,30,20,0.06)]">

                  <div className="relative h-14 w-14 overflow-hidden rounded-[16px] bg-white p-2 shadow-sm ring-1 ring-[#C54716]/10">
                    <Image
                      src="/images/payment/orange-money.png"
                      alt="Orange Money"
                      fill
                      sizes="56px"
                      className="object-contain p-2"
                    />
                  </div>

                  <p className="mt-6 text-[9px] uppercase tracking-[0.3em] text-[#C54716]">
                    Cameroun
                  </p>

                  <h4 className="mt-2 font-serif text-2xl text-[#4A2924]">
                    Orange Money
                  </h4>

                  <p className="mt-4 text-sm leading-6 text-[#8A6D63]">
                    Pour une participation rapide et simple depuis le Cameroun.
                  </p>

                  <div className="mt-auto pt-6">

                    <div className="rounded-[18px] bg-white px-4 py-3 text-center">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[#9A7C72]">
                        Numéro
                      </p>

                      <p className="mt-2 text-sm font-medium text-[#C54716]">
                        À renseigner
                      </p>
                    </div>

                  </div>
                </div>


                {/* MTN MOBILE MONEY */}
                <div className="flex min-h-[285px] flex-col rounded-[28px] border border-[#274E13]/15 bg-[#F8FAF5] p-6 shadow-[0_15px_45px_rgba(70,30,20,0.06)]">

                  <div className="relative h-14 w-14 overflow-hidden rounded-[16px] bg-white p-2 shadow-sm ring-1 ring-[#274E13]/10">
                    <Image
                      src="/images/payment/mtn-momo.png"
                      alt="MTN Mobile Money"
                      fill
                      sizes="56px"
                      className="object-contain p-2"
                    />
                  </div>

                  <p className="mt-6 text-[9px] uppercase tracking-[0.3em] text-[#274E13]">
                    Cameroun
                  </p>

                  <h4 className="mt-2 font-serif text-2xl text-[#4A2924]">
                    MTN MoMo
                  </h4>

                  <p className="mt-4 text-sm leading-6 text-[#8A6D63]">
                    Une autre possibilité pratique pour participer
                    directement depuis le Cameroun.
                  </p>

                  <div className="mt-auto pt-6">

                    <div className="rounded-[18px] bg-white px-4 py-3 text-center">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[#9A7C72]">
                        Numéro
                      </p>

                      <p className="mt-2 text-sm font-medium text-[#274E13]">
                        À renseigner
                      </p>
                    </div>

                  </div>
                </div>

              </div>


              {/* ===================================================
                  PETITE EXPLICATION
              =================================================== */}
              <div className="mx-auto mt-10 max-w-3xl rounded-[26px] border border-[#E7D5CA] bg-white/70 px-7 py-6 text-center">

                <p className="font-serif text-lg italic text-[#6D071A]">
                  Que vous choisissiez un cadeau ou une participation libre,
                  chaque attention sera reçue avec beaucoup de gratitude.
                </p>

              </div>

            </div>


            {/* =====================================================
                FIN
            ====================================================== */}
            <div className="mt-16 text-center">

              <div className="mx-auto flex items-center justify-center gap-4">

                <div className="h-px w-16 bg-[#D77A57]/50" />

                <span className="font-serif text-sm text-[#C54716]">
                  B | A
                </span>

                <div className="h-px w-16 bg-[#D77A57]/50" />

              </div>

              <p className="mt-6 font-serif text-lg italic text-[#9B6B59]">
                Merci du fond du cœur.
              </p>

            </div>

          </div>
        </section>
      )}

    {/* =========================================================
      FILTRE SNAPCHAT
      ========================================================= */}
      {enteredSite && (
        <section
          id="snapchat"
          className="relative overflow-hidden bg-[#6D071A] px-6 py-24 text-[#FFF8F2] md:px-12 md:py-28"
        >
          <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-36 -right-28 h-[420px] w-[420px] rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-6xl">

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] uppercase tracking-[0.45em] text-[#F4C58C]">
                Partagez vos souvenirs
              </p>

              <h2 className="mt-4 font-serif text-5xl md:text-7xl">
                Notre filtre Snapchat
              </h2>

              <div className="mx-auto mt-6 h-px w-20 bg-[#F4C58C]" />

              <p className="mx-auto mt-7 max-w-2xl leading-8 text-white/80">
                Immortalisez vos plus beaux moments avec notre filtre personnalisé
                Baudouin & Anelka.
              </p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">

              {/* PREVIEW VIDEO SNAPCHAT */}
              <div className="relative mx-auto w-full max-w-[380px] overflow-hidden rounded-[34px] border border-white/15 bg-black shadow-2xl">
                <video
                  className="aspect-[9/16] w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                >
                  <source
                    src="/videos/filtre-snapchat-web.mp4"
                    type="video/mp4"
                  />

                  Votre navigateur ne prend pas en charge la vidéo.
                </video>
              </div>

              {/* INFOS */}
              <div className="rounded-[34px] border border-white/15 bg-white/10 p-8 backdrop-blur md:p-10">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#F4C58C]">
                  Baudouin & Anelka
                </p>

                <h3 className="mt-4 font-serif text-4xl">
                  Ajoutez une touche de notre mariage à vos photos
                </h3>

                <div className="mt-6 h-px w-16 bg-[#F4C58C]" />

                <p className="mt-7 leading-8 text-white/80">
                  Ouvrez le filtre directement dans Snapchat et partagez vos photos
                  et vidéos de la célébration avec nous.
                </p>

                <a
                  href="https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=25e6a555f8fe461a8da833ca602369c3&metadata=01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex rounded-full bg-[#C54716] px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-white transition hover:-translate-y-1 hover:bg-[#A83D13]"
                >
                  Ouvrir le filtre Snapchat
                </a>

                <p className="mt-5 text-xs leading-6 text-white/55">
                  Lien fictif pour le moment — nous le remplacerons par le lien du filtre.
                </p>

                <div className="mt-10 rounded-[24px] border border-white/15 bg-black/10 p-6 text-center">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#F4C58C]">
                    Conseil
                  </p>

                  <p className="mt-3 text-sm leading-7 text-white/75">
                    Sur téléphone, utilisez directement le bouton ci-dessus.
                    Sur ordinateur, nous pourrons également ajouter un Snapcode à scanner.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="mx-auto flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-[#F4C58C]/40" />
                <span className="font-serif text-sm text-[#F4C58C]">B | A</span>
                <div className="h-px w-16 bg-[#F4C58C]/40" />
              </div>

              <p className="mt-6 font-serif text-lg italic text-white/75">
                Capturez. Partagez. Souvenez-vous.
              </p>
            </div>
          </div>
        </section>
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
                  <span className="block">Baudouin</span>
                  <span className="my-1 block text-[#d69a65]">&</span>
                  <span className="block">Anelka</span>
                </h2>

                <div className="mx-auto my-3 h-px w-20 bg-[#d4aa81]" />

                <p className="text-sm leading-6">
                  ont la joie de vous inviter
                  <br />
                  à célébrer leur union
                </p>

                <p className="mt-4 font-serif text-xl">
                  24 & 28 novembre 2026
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
                  B | A
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

      {/* =========================================================
          FOOTER
      ========================================================= */}
      {enteredSite && (
        <footer className="relative overflow-hidden bg-[#3A241E] px-6 py-20 text-[#FFF8F2] md:px-12">
          {/* décorations */}
          <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full border border-white/5" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full border border-white/5" />

          <div className="relative mx-auto max-w-6xl">
            <div className="text-center">

              <p className="text-[10px] uppercase tracking-[0.45em] text-[#F4C58C]">
                Merci de faire partie de notre histoire
              </p>

              <h2 className="mt-5 font-serif text-4xl md:text-6xl">
                Baudouin
                <span className="mx-3 text-[#C54716]">&</span>
                Anelka
              </h2>

              <div className="mx-auto mt-7 h-px w-24 bg-[#F4C58C]/60" />

              <p className="mt-6 font-serif text-xl italic text-white/80">
                24 & 28 novembre 2026
              </p>

              <p className="mt-3 text-sm tracking-wide text-white/60">
                Dote • Mairie • Église • Soirée
              </p>
            </div>

            {/* liens rapides */}
            <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] uppercase tracking-[0.25em] text-white/65">
              <a href="#countdown" className="transition hover:text-[#F4C58C]">
                Compte à rebours
              </a>

              <a href="#story" className="transition hover:text-[#F4C58C]">
                Notre histoire
              </a>

              <a href="#programme" className="transition hover:text-[#F4C58C]">
                Programme
              </a>

              <a href="#dresscode" className="transition hover:text-[#F4C58C]">
                Dress code
              </a>

              <a href="#rsvp" className="transition hover:text-[#F4C58C]">
                RSVP
              </a>

              <a href="#hebergements" className="transition hover:text-[#F4C58C]">
                Hébergements
              </a>

              <a href="#localisation" className="transition hover:text-[#F4C58C]">
                Localisation
              </a>

              <a href="#cadeaux" className="transition hover:text-[#F4C58C]">
                Cadeaux
              </a>

              <a href="#snapchat" className="transition hover:text-[#F4C58C]">
                Snapchat
              </a>
            </div>

            {/* retour haut */}
            <div className="mt-14 text-center">
              <button
                type="button"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="group inline-flex flex-col items-center text-white/60 transition hover:text-[#F4C58C]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition group-hover:border-[#F4C58C]/60">
                  ↑
                </span>

                <span className="mt-3 text-[9px] uppercase tracking-[0.35em]">
                  Retour en haut
                </span>
              </button>
            </div>

            {/* ligne finale */}
            <div className="mx-auto mt-14 h-px max-w-xl bg-white/10" />

            <div className="mt-7 flex flex-col items-center justify-between gap-4 text-center text-[10px] text-white/35 md:flex-row md:text-left">
              <p>
                Baudouin & Anelka · 2026
              </p>

              <p className="font-serif italic">
                Deux cœurs, un même chemin.
              </p>
            </div>
          </div>
        </footer>
      )}
    </main>
  );
}