"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* =========================================================
          NAVIGATION FIXE
      ========================================================= */}
      <nav className="fixed left-1/2 top-4 z-[90] w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2">
        <div className="flex items-center justify-between rounded-full border border-white/20 bg-[#3A241E]/90 px-4 py-3 shadow-2xl backdrop-blur-xl md:px-6">

          {/* MONOGRAMME */}
          <Link
            href="/"
            onClick={closeMenu}
            className="shrink-0 font-serif text-sm tracking-[0.15em] text-[#F4C58C]"
          >
            A | B
          </Link>


          {/* =====================================================
              DESKTOP
          ====================================================== */}
          <div className="hidden items-center gap-5 text-[9px] uppercase tracking-[0.2em] text-white/75 lg:flex">

            <Link
              href="/#countdown"
              className="transition hover:text-[#F4C58C]"
            >
              Accueil
            </Link>

            <Link
              href="/#story"
              className="transition hover:text-[#F4C58C]"
            >
              Histoire
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


          {/* =====================================================
              PARTIE DROITE
          ====================================================== */}
          <div className="flex items-center gap-2">

            {/* RSVP */}
            <Link
              href="/rsvp"
              onClick={closeMenu}
              className="rounded-full bg-[#C54716] px-4 py-2.5 text-[9px] uppercase tracking-[0.18em] text-white transition hover:bg-[#A83D13] md:px-5"
            >
              Répondre
            </Link>


            {/* HAMBURGER MOBILE */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
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
              Anelka & Baudouin
            </p>
          </div>


          {/* LIENS */}
          <div className="space-y-1">

            <Link
              href="/#countdown"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-[18px] px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#F4C58C]"
            >
              <span>Accueil</span>
            </Link>

            <Link
              href="/#story"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-[18px] px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#F4C58C]"
            >
              <span>Notre histoire</span>
            </Link>

            <Link
              href="/programme"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-[18px] px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#F4C58C]"
            >
              <span>Programme</span>
            </Link>

            <Link
              href="/dress-code"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-[18px] px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#F4C58C]"
            >
              <span>Dress Code</span>
            </Link>

            <Link
              href="/rsvp"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-[18px] px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#F4C58C]"
            >
              <span>Confirmer ma présence</span>
            </Link>

            <Link
              href="/hebergements"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-[18px] px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#F4C58C]"
            >
              <span>Hébergements</span>
            </Link>

            <Link
              href="/lieux"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-[18px] px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#F4C58C]"
            >
              <span>Lieux</span>
            </Link>

            <Link
              href="/cadeaux"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-[18px] px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#F4C58C]"
            >
              <span>Cadeaux & attentions</span>
            </Link>

            <Link
              href="/snapchat"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-[18px] px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#F4C58C]"
            >
              <span>Filtre Snapchat</span>
            </Link>

          </div>


          {/* BAS MENU */}
          <div className="mt-3 rounded-[20px] bg-[#C54716]/10 px-4 py-4 text-center">

            <p className="font-serif text-sm italic text-[#F4C58C]">
              26 & 28 novembre 2026
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
          onClick={closeMenu}
          className="fixed inset-0 z-[80] bg-black/20 backdrop-blur-[1px] lg:hidden"
        />
      )}
    </>
  );
}