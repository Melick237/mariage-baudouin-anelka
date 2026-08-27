import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function HebergementsPage() {
  return (
    <main className="min-h-screen bg-[#FFF8F2]">

      <Navigation />

      {/* =========================================================
          HÉBERGEMENTS
      ========================================================= */}
      <section
        id="hebergements"
        className="relative overflow-hidden bg-[#FFF8F2] px-6 pb-24 pt-32 md:px-12 md:pb-28 md:pt-36"
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

            <h1 className="mt-4 font-serif text-5xl text-[#4A2924] md:text-7xl">
              Où se loger ?
            </h1>

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

              <div className="relative h-[320px] shrink-0 overflow-hidden bg-[#EFE5DE]">

                <Image
                  src="/images/confort-house.jpg"
                  alt="Confort House Appart à Yaoundé"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-[#C54716] px-4 py-2 text-[9px] uppercase tracking-[0.22em] text-white shadow-lg">
                  Odza · Yaoundé
                </div>

                <div className="absolute bottom-5 left-5 right-5">

                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
                    Hébergement
                  </p>

                  <h2 className="mt-1 font-serif text-3xl text-white">
                    Confort House
                  </h2>

                </div>

              </div>


              <div className="flex flex-1 flex-col p-7">

                <p className="text-sm font-medium text-[#6D071A]">
                  Appartements & studios meublés
                </p>

                <div className="mt-4 min-h-[120px]">

                  <p className="leading-7 text-[#765B52]">
                    Un hébergement meublé situé à Yaoundé, dans le secteur
                    Happy – Ekoumdoum, juste en face de la station Neptune.
                  </p>

                </div>

                <div className="mt-5 rounded-[20px] bg-[#FFF8F2] p-5">

                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#C54716]">
                    Contact
                  </p>

                  <p className="mt-2 font-serif text-xl text-[#4A2924]">
                    +237 679 19 07 00
                  </p>

                </div>


                <div className="mt-auto space-y-3 pt-8">

                  <a
                    href="https://wa.me/237679190700?text=Bonjour%2C%20je%20vous%20contacte%20concernant%20un%20hébergement%20pour%20le%20mariage%20de%20Anelka%20et%20Baudouin.%20Pourriez-vous%20me%20communiquer%20vos%20disponibilités%20s'il%20vous%20plaît%20%3F"
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

              <div className="relative h-[320px] shrink-0 overflow-hidden bg-[#EFE5DE]">

                <Image
                  src="/images/complexe-happy.jpg"
                  alt="Complexe Hôtelier Happy à Yaoundé"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-[#6D071A] px-4 py-2 text-[9px] uppercase tracking-[0.22em] text-white shadow-lg">
                  Odza · Yaoundé
                </div>

                <div className="absolute bottom-5 left-5 right-5">

                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
                    Complexe hôtelier
                  </p>

                  <h2 className="mt-1 font-serif text-3xl text-white">
                    Complexe Happy
                  </h2>

                </div>

              </div>


              <div className="flex flex-1 flex-col p-7">

                <p className="text-sm font-medium text-[#6D071A]">
                  Appartements · Studios · Duplex
                </p>

                <div className="mt-4 min-h-[120px]">

                  <p className="leading-7 text-[#765B52]">
                    Situé au cœur du quartier résidentiel Odza, le Complexe
                    Happy propose différents types de logements pour votre
                    séjour à Yaoundé.
                  </p>

                </div>

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


                <div className="mt-auto space-y-3 pt-8">

                  <a
                    href="https://wa.me/237671298113?text=Bonjour%2C%20je%20vous%20contacte%20concernant%20un%20hébergement%20pour%20le%20mariage%20de%20Anelka%20et%20Baudouin.%20Pourriez-vous%20me%20communiquer%20vos%20disponibilités%20s'il%20vous%20plaît%20%3F"
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

              <div className="relative h-[320px] shrink-0 overflow-hidden bg-[#EFE5DE]">

                <Image
                  src="/images/anayah-appart.jpg"
                  alt="Anayah Apparts à Yaoundé"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-[#274E13] px-4 py-2 text-[9px] uppercase tracking-[0.22em] text-white shadow-lg">
                  Odza & environs
                </div>

                <div className="absolute bottom-5 left-5 right-5">

                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
                    Appartements meublés
                  </p>

                  <h2 className="mt-1 font-serif text-3xl text-white">
                    Anayah Apparts
                  </h2>

                </div>

              </div>


              <div className="flex flex-1 flex-col p-7">

                <p className="text-sm font-medium text-[#6D071A]">
                  Chambres · Studios · Appartements
                </p>

                <div className="mt-4 min-h-[120px]">

                  <p className="leading-7 text-[#765B52]">
                    Plusieurs types de logements meublés sont disponibles
                    à Odza et aux alentours, avec climatisation, eau chaude,
                    gardiennage et service de ménage.
                  </p>

                </div>


                <div className="mt-5 rounded-[20px] bg-[#FFF8F2] p-4">

                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#C54716]">
                    Tarifs indicatifs
                  </p>

                  <div className="mt-3 space-y-2 text-sm text-[#765B52]">

                    <div className="flex items-center justify-between gap-4">
                      <span>Chambres</span>

                      <span className="text-right font-medium text-[#4A2924]">
                        dès 15 000 FCFA
                      </span>
                    </div>

                    <div className="h-px bg-[#6D071A]/10" />

                    <div className="flex items-center justify-between gap-4">
                      <span>Studios</span>

                      <span className="text-right font-medium text-[#4A2924]">
                        20 000 – 35 000
                      </span>
                    </div>

                    <div className="h-px bg-[#6D071A]/10" />

                    <div className="flex items-center justify-between gap-4">
                      <span>Appartement</span>

                      <span className="text-right font-medium text-[#4A2924]">
                        50 000 FCFA / 24h
                      </span>
                    </div>

                  </div>

                </div>


                <div className="mt-4 rounded-[20px] bg-[#FFF8F2] p-4">

                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#C54716]">
                    Contact
                  </p>

                  <p className="mt-2 font-serif text-xl text-[#4A2924]">
                    +237 655 08 02 88
                  </p>

                </div>


                <div className="mt-auto space-y-3 pt-8">

                  <a
                    href="https://wa.me/237655080288?text=Bonjour%2C%20je%20vous%20contacte%20concernant%20un%20hébergement%20pour%20le%20mariage%20de%20Anelka%20et%20Baudouin.%20Pourriez-vous%20me%20communiquer%20vos%20disponibilités%20s'il%20vous%20plaît%20%3F"
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
                A | B
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


      <Footer />

    </main>
  );
}