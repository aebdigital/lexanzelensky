import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../components/page-hero";
import { ProductCardGrid } from "../../components/product-card-grid";

export const metadata: Metadata = {
  title: "Služby",
  description:
    "Predaj, poradenstvo, príprava materiálu na mieru, logistika a montážne odporúčania pre polykarbonátové projekty."
};

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
                najspoľahlivejšie a najkvalitnejšie polykarbonáty na trhu.
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
                    . Materiál prispôsobíme presne podľa vašich potrieb s dôrazom na kvalitu,
                    presnosť a úsporu času pri montáži.
                  </p>
                </div>
              </div>
              <div className="content-image-box">
                <img
                  src="/sources/1.Dutinkove-polykarbonaty/Fotka-za-nazvom.jpg"
                  alt="Predaj a distribúcia materiálu"
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
              <div className="content-image-box">
                <img
                  src="/sources/3.HPL-dosky/obrazok-za-hlavnym-nadpisom.jpg"
                  alt="Odborné poradenstvo"
                />
              </div>
              <div className="content-text">
                <h3 className="content-title-dark">Odborné poradenstvo</h3>
                <p>
                  Zákazníkom poskytujeme odborné poradenstvo v každej fáze projektu od plánovania,
                  cez výber správneho typu polykarbonátu značiek LEXAN a ARLA, až po technické
                  riešenia a montážne odporúčania.
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
                  hotové konštrukcie našimi technikmi, alebo vám vieme odporučiť overených
                  zámočníkov a stolárov.
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
              <div className="content-image-box">
                <img
                  src="/sources/4.Prislusenstvo/Fotka-za-hlavnym-nadpisom.jpeg"
                  alt="Montáž a výroba na mieru"
                />
              </div>
            </div>

            <div className="about-split-grid">
              <div className="content-image-box">
                <img src="/sources/5.Trapezy-a-Vlnovky/fotka-za-hlavny-nadpis.jpg" alt="Doprava" />
              </div>
              <div className="content-text">
                <h3 className="content-title-dark">Doprava</h3>
                <div className="delivery-box">
                  <p>
                    Našim zákazníkom ponúkame aj výhodnú a flexibilnú dopravu zakúpeného materiálu
                    kamkoľvek na Slovensku, najmä v okolí našich pobočiek v Trnave, Senci a
                    Piešťanoch.
                  </p>
                  <p>
                    Hlohovec • Sereď • Galanta • Senica • Skalica • Malacky • Nitra • Pezinok •
                    Modra • Dunajská Streda • Nové Zámky • Nové Mesto nad Váhom • Trenčín
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-row">
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
