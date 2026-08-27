"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function RsvpPage() {
  const [rsvpForm, setRsvpForm] = useState({
    name: "",
    presence26: "",
    presence28: "",
    accommodation: "",
    guests: "1",
    message: "",
  });

  const [rsvpStatus, setRsvpStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

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
        presence26: "",
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
    <main className="min-h-screen bg-[#FFF8F2]">

      <Navigation />

      {/* =========================================================
          RSVP
      ========================================================= */}
      <section
        id="rsvp"
        className="relative overflow-hidden bg-[#FFF8F2] px-6 pb-24 pt-32 text-[#4A2924] md:px-12 md:pb-32 md:pt-36"
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

            <h1 className="mt-4 font-serif text-5xl md:text-7xl">
              Serez-vous des nôtres ?
            </h1>

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


            {/* ================= 26 NOVEMBRE ================= */}
            <div className="mt-12">

              <p className="text-[10px] uppercase tracking-[0.35em] text-[#A65A43]">
                26 novembre 2026
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
                    rsvpForm.presence26 === "oui"
                      ? "border-[#C54716] bg-[#C54716] text-white"
                      : "border-[#E4D0C4] bg-[#FFF9F5] hover:border-[#C54716]"
                  }`}
                >
                  <input
                    type="radio"
                    name="presence26"
                    value="oui"
                    required
                    checked={rsvpForm.presence26 === "oui"}
                    onChange={(e) =>
                      setRsvpForm({
                        ...rsvpForm,
                        presence26: e.target.value,
                      })
                    }
                    className="hidden"
                  />

                  Oui, avec plaisir
                </label>

                <label
                  className={`cursor-pointer rounded-[20px] border px-5 py-4 text-center transition ${
                    rsvpForm.presence26 === "non"
                      ? "border-[#6D071A] bg-[#6D071A] text-white"
                      : "border-[#E4D0C4] bg-[#FFF9F5] hover:border-[#6D071A]"
                  }`}
                >
                  <input
                    type="radio"
                    name="presence26"
                    value="non"
                    checked={rsvpForm.presence26 === "non"}
                    onChange={(e) =>
                      setRsvpForm({
                        ...rsvpForm,
                        presence26: e.target.value,
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
                A | B
              </span>

              <div className="h-px w-16 bg-[#D8A060]/50" />

            </div>

            <p className="mt-6 font-serif text-lg italic text-[#9B6B59]">
              Merci de faire partie de notre histoire.
            </p>

          </div>

        </div>
      </section>

      <Footer />

    </main>
  );
}