import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function CadeauxPage() {
  return (
    <main className="min-h-screen bg-[#FFF8F2]">

      <Navigation />

      {/* =========================================================
          LISTE DE CADEAUX & CONTRIBUTIONS
      ========================================================= */}
      <section
        id="cadeaux"
        className="relative overflow-hidden bg-[#FFF8F2] px-6 pb-24 pt-32 text-[#4A2924] md:px-12 md:pb-28 md:pt-36"
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

            <h1 className="mt-4 font-serif text-5xl md:text-7xl">
              Cadeaux & attentions
            </h1>

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

                  <h2 className="mt-7 max-w-xl font-serif text-3xl md:text-4xl">
                    Quelques idées pour notre nouvelle aventure
                  </h2>

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

                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -bottom-14 -left-14 h-44 w-44 rounded-full border border-white/10" />

                <div className="relative z-10 w-full max-w-sm">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#F4C58C]/30 bg-white/5">
                    <span className="font-serif text-xl text-[#F4C58C]">
                      A | B
                    </span>
                  </div>

                  <p className="mt-6 text-[9px] uppercase tracking-[0.35em] text-[#F4C58C]">
                    Liste en ligne
                  </p>

                  <p className="mx-auto mt-3 max-w-xs font-serif text-xl leading-8 text-white">
                    Choisissez librement le cadeau qui vous fera plaisir de nous offrir.
                  </p>

                  {/* QR CODE */}
                  <div className="mx-auto mt-7 w-[170px] rounded-[22px] bg-white p-3 shadow-[0_16px_35px_rgba(0,0,0,0.22)]">

                    <div className="relative aspect-square w-full overflow-hidden rounded-[14px]">

                      <Image
                        src="/images/qr-liste-cadeaux.jpg"
                        alt="QR code de la liste de cadeaux d'Anelka et Baudouin"
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

              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Une participation libre
              </h2>

              <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#765B52]">
                Si vous préférez nous offrir une contribution libre,
                vous pourrez également utiliser l’un des moyens ci-dessous,
                depuis le Cameroun ou depuis l’étranger.
              </p>

            </div>


            {/* ===================================================
                MOYENS DE CONTRIBUTION
            =================================================== */}
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">


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

                <h3 className="mt-2 font-serif text-2xl text-[#4A2924]">
                  PayPal
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#8A6D63]">
                  Pour celles et ceux qui souhaitent participer simplement
                  depuis l’étranger.
                </p>

                <div className="mt-auto pt-6">

                  <a
                    href="https://www.paypal.me/tchuente1999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded-full border border-[#6D071A]/20 px-4 py-3 text-[9px] uppercase tracking-[0.18em] text-[#6D071A] transition hover:bg-[#6D071A] hover:text-white"
                  >
                    Envoyer via PayPal
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

                <h3 className="mt-2 font-serif text-2xl text-[#4A2924]">
                  Virement
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#8A6D63]">
                  Une participation pourra également être envoyée
                  directement par virement bancaire.
                </p>

                <div className="mt-auto pt-6">

                  <div className="rounded-[18px] bg-[#FFF8F2] px-4 py-4 text-center">

                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#9A7C72]">
                      Titulaire
                    </p>

                    <p className="mt-2 text-[11px] font-medium leading-5 text-[#6D071A]">
                      B Keunne Manfouo &amp; A MEPPO TCHUENTE
                    </p>

                    <div className="my-3 h-px bg-[#E7D5CA]" />

                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#9A7C72]">
                      IBAN
                    </p>

                    <p className="mt-2 break-all text-[11px] font-medium leading-5 text-[#6D071A]">
                      DE46 1001 0178 6335 3929 41
                    </p>

                    <div className="my-3 h-px bg-[#E7D5CA]" />

                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#9A7C72]">
                      Revolut
                    </p>

                    <a
                      href="https://revolut.me/anelka99"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex text-[11px] font-medium text-[#C54716] underline underline-offset-4"
                    >
                      Envoyer via Revolut
                    </a>

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

                <h3 className="mt-2 font-serif text-2xl text-[#4A2924]">
                  Orange Money
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#8A6D63]">
                  Pour une participation rapide et simple depuis le Cameroun.
                </p>

                <div className="mt-auto pt-6">

                  <div className="rounded-[18px] bg-white px-4 py-3 text-center">

                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#9A7C72]">
                      Numéro
                    </p>

                    <p className="mt-2 text-sm font-medium text-[#C54716]">
                      +237 698 229 501
                    </p>

                    <p className="mt-2 text-[11px] text-[#8A6D63]">
                      Anelka Meppo Tchuente
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

                <h3 className="mt-2 font-serif text-2xl text-[#4A2924]">
                  MTN MoMo
                </h3>

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
                      +237 681993556
                    </p>

                    <p className="mt-2 text-[11px] text-[#8A6D63]">
                      Meppo Tchuente Anelka
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* PETITE EXPLICATION */}
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
                A | B
              </span>

              <div className="h-px w-16 bg-[#D77A57]/50" />

            </div>

            <p className="mt-6 font-serif text-lg italic text-[#9B6B59]">
              Merci du fond du cœur.
            </p>

          </div>

        </div>
      </section>

      <Footer />

    </main>
  );
}