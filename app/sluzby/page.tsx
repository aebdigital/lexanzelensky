import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "../../components/page-hero";
import { ProductCardGrid } from "../../components/product-card-grid";
import { legacyMetadata } from "../../lib/seo";

export const metadata: Metadata = legacyMetadata("services");

export default function ServicesPage() {
  return (
    <main>
      <PageHero title="Služby" />

      <section className="page-copy-section">
        <div className="site-container">
          <div className="content-section-stack">
            <div className="content-text">
              <p>
                Našim zákazníkom poskytujeme komplexné služby v oblasti predaja, poradenstva a
                realizácie projektov z dutinkového a plného polykarbonátu značiek{" "}
                  <strong>LEXAN®</strong> a <strong>ARLA</strong>, ktoré patria medzi
                  najspoľahlivejšie a najkvalitnejšie polykarbonáty na trhu. Okrem samotného predaja
                  zabezpečujeme aj odborné poradenstvo, prípravu polykarbonátu a montážneho
                  príslušenstva na mieru a profesionálnu montáž už na hotové konštrukcie.
                </p>
            </div>

            <div className="about-split-grid">
              <div className="content-text">
                <h3 className="content-title-dark">Predaj a distribúcia materiálu</h3>
                <div className="highlight-box">
                  <p>
                    Ako súčasť zákazníckeho servisu ponúkame{" "}
                    <strong>
                      rezanie dutinkových a plných polykarbonátových dosiek na požadované rozmery
                      zdarma
                    </strong>
                    . O túto službu sa starajú naši šikovní a zruční zamestnanci, ktorí materiál
                    prispôsobia presne podľa vašich potrieb, a to s dôrazom na kvalitu, presnosť a
                    úsporu času pri montáži.
                  </p>
                </div>
              </div>
              <div className="relative w-full h-[250px] md:h-[400px] shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
                <Image
                  src="/sources/1.Dutinkove-polykarbonaty/fotka-za-nazvom.jpg"
                  alt="Predaj a distribúcia materiálu"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductCardGrid title="V ponuke nájdete:" />

      <section className="page-copy-section">
        <div className="site-container">
          <div className="content-section-stack">
            <div className="about-split-grid">
              <div className="relative w-full h-[250px] md:h-[400px] shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
                <Image
                  src="/sources/3.HPL-dosky/obrazok-za-hlavnym-nadpisom.jpg"
                  alt="Odborné poradenstvo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="content-text">
                <h3 className="content-title-dark">Odborné poradenstvo</h3>
                <p>
                  Zákazníkom poskytujeme odborné poradenstvo v každej fáze projektu – od plánovania,
                  cez výber správneho typu dutinkového alebo plného polykarbonátu značiek LEXAN a
                  ARLA, až po technické riešenia, montážne odporúčania a vhodný výber príslušenstva.
                  Sme tu pre vás osobne na našich pobočkách v Trnave, Senci, Piešťanoch a v
                  Bratislave, alebo aj online, kde vám radi poradíme, zodpovieme všetky otázky a
                  zdarma vypracujeme cenovú ponuku na mieru podľa vašich konkrétnych požiadaviek.
                </p>
                <p>
                  <Link href="/kontakt" className="font-semibold text-[#5a5a58] no-underline">
                    Kontakty na naše prevádzky nájdete tu.
                  </Link>
                </p>
              </div>
            </div>

            <div className="about-split-grid">
              <div className="content-text">
                <h3 className="content-title-dark">Montáž a výroba na mieru</h3>
                <p>
                  Zabezpečujeme montáž dutinkových alebo plných polykarbonátových dosiek na už
                  hotové konštrukcie našimi technikmi, alebo v prípade ak nemáte konštrukciu ešte
                  hotovú radi Vám poskytneme kontakt na overených zámočníkov a stolárov, s ktorými
                  dlhodobo spolupracujeme a ktorí zabezpečujú kvalitné spracovanie, zameranie aj
                  samotnú montáž.
                </p>
                <a
                  href="https://nadoo.sk"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-4 border-2 border-[#e0e0e0] bg-white px-6 py-4 no-underline shadow-sm transition hover:-translate-y-0.5"
                >
                  <img
                    src="/partneri/NADOO sro logo .png"
                    alt="NADOO"
                    className="h-10 w-auto"
                  />
                  <span className="text-lg font-semibold text-[#5a5a58]">NADOO</span>
                  <span aria-hidden>→</span>
                </a>
              </div>
              <div className="relative w-full h-[250px] md:h-[400px] shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
                <Image
                  src="/sources/4.Prislusenstvo/fotka-za-hlavnym-nadpisom.jpeg"
                  alt="Montáž a výroba na mieru"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="about-split-grid">
              <div className="relative w-full h-[250px] md:h-[400px] shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
                <Image 
                  src="/sources/5.Trapezy-a-Vlnovky/fotka-za-hlavny-nadpis.jpg" 
                  alt="Doprava" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="content-text">
                <h3 className="content-title-dark">Doprava</h3>
                <div className="delivery-box">
                  <p>
                    Našim zákazníkom ponúkame aj výhodnú a flexibilnú dopravu zakúpeného materiálu
                    kamkoľvek na Slovensku, najmä v okolí našich pobočiek v Trnave, Senci a
                    Piešťanoch, alebo v okolí blízkych miest:
                  </p>
                  <p>
                    Hlohovec • Sereď • Galanta • Senica • Skalica • Malacky • Nitra • Pezinok •
                    Modra • Dunajská Streda • Nové Zámky • Nové Mesto nad Váhom • Trenčín
                  </p>
                  <p>
                    Materiál vám doručíme našim vozidlom rýchlo, bezpečne a za rozumnú cenu priamo
                    na miesto realizácie, čím šetríme váš čas a náklady na logistiku. Naši vodiči
                    zabezpečia šetrné zaobchádzanie s tovarom a spoľahlivé doručenie v dohodnutom
                    termíne.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-row cta-row-centered">
              <Link href="/kontakt" className="footer-button">
                Kontaktovať nás
              </Link>
              <Link href="/produkty" className="footer-button">
                Zobraziť produkty
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
