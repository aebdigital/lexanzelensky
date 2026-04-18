import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../components/page-hero";
import { ProductCardGrid } from "../../components/product-card-grid";

export const metadata: Metadata = {
  title: "O nás",
  description:
    "Spoznajte LEXAN Zelenský s.r.o. - dlhoročné skúsenosti, kvalita materiálov a poradenstvo pri polykarbonátových riešeniach."
};

export default function AboutPage() {
  return (
    <main>
      <PageHero title="O nás" />

      <section className="page-copy-section">
        <div className="site-container">
          <div className="content-section-stack">
            <div className="about-split-grid">
              <div className="content-text">
                <h2 className="content-title">Kto sme?</h2>
                <p>
                  Naša spoločnosť sa už viac ako <strong>23 rokov špecializuje</strong> na predaj a
                  distribúciu dutinkových a plných polykarbonátových dosiek značiek{" "}
                  <strong>LEXAN®</strong> a <strong>ARLA</strong>, ktoré patria medzi absolútnu
                  svetovú špičku v oblasti výroby vysoko kvalitného polykarbonátu.
                </p>
                <p>
                  K doskám ponúkame kompletné montážne príslušenstvo, čo nám umožňuje zabezpečiť
                  zákazníkom všetko potrebné na jednom mieste efektívne, rýchlo a bez starostí.
                </p>
              </div>
              <div className="content-image-box">
                <img
                  src="/sources/1.Dutinkove-polykarbonaty/3.jpg"
                  alt="LEXAN polykarbonátové dosky"
                />
              </div>
            </div>

            <div className="about-split-grid">
              <div className="content-image-box">
                <img src="/sources/new.jpg" alt="LEXAN služby a poradenstvo" />
              </div>
              <div className="content-text">
                <p>
                  Našim zákazníkom zároveň poskytujeme aj široký sortiment ďalších kvalitných
                  stavebných materiálov, čo nás radí medzi najkomplexnejších dodávateľov v tomto
                  segmente.
                </p>
                <p>
                  Veľký dôraz kladieme na dôslednú technickú podporu, osobný prístup a individuálne
                  poradenstvo pri výbere vhodného riešenia bez ohľadu na veľkosť zákazky.
                </p>
                <p>
                  Sme hrdí na to, že našim klientom dokážeme byť oporou v celom procese od
                  plánovania projektu cez odbornú konzultáciu a prípravu materiálu až po samotnú
                  realizáciu a montáž.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductCardGrid title="V našej ponuke nájdete:" />

      <section className="page-copy-section">
        <div className="site-container">
          <div className="content-section-stack">
            <div className="about-split-grid">
              <div className="content-text">
                <h3 className="content-title">Kvalita a certifikácia</h3>
                <div className="quality-box">
                  <p>
                    Všetky polykarbonátové dosky dodávame výlučne od renomovaných značiek{" "}
                    <strong>LEXAN®</strong> a <strong>ARLA</strong>, ktoré predstavujú najvyššiu
                    kvalitu v oblasti 100% polykarbonátu.
                  </p>
                </div>
              </div>
              <div className="content-image-box">
                <img
                  src="/sources/6.Skleniky/fotka-za-hlavnym-nadpisom.jpg"
                  alt="Kvalitné skleníky LEXAN"
                />
              </div>
            </div>

            <div className="about-split-grid">
              <div className="content-image-box">
                <img src="/sources/4.Prislusenstvo/Fotka-za-hlavnym-nadpisom.jpeg" alt="Montáž" />
              </div>
              <div className="content-text">
                <h3 className="content-title-dark">Odborná montáž</h3>
                <p>
                  Okrem dodávky materiálu poskytujeme aj <strong>odbornú montáž</strong>
                  dutinkových a plných polykarbonátových dosiek na už hotové konštrukcie.
                </p>
                <p>
                  Zabezpečuje ju náš skúsený tím technikov, prípadne spolupracujeme s overenými
                  zámočníkmi a stolármi pri výrobe a montáži prístreškov, zimných záhrad, balkónov
                  a skleníkov.
                </p>
              </div>
            </div>

            <div className="about-split-grid">
              <div className="content-text">
                <h3 className="content-title">Naše pobočky a doprava</h3>
                <p>
                  Naše pobočky nájdete v <strong>Trnave, Senci a Piešťanoch</strong>,{" "}
                  <Link href="/kontakt" className="font-semibold text-[#5a5a58] no-underline">
                    kde vám radi poskytneme osobné odborné poradenstvo
                  </Link>{" "}
                  a cenovú ponuku na mieru zdarma.
                </p>
                <div className="delivery-info-box">
                  <p>
                    Výhodnú dopravu zabezpečujeme po celom Slovensku, najmä v okolí Trnavy, Senca,
                    Piešťan, Bratislavy, Hlohovca, Serede, Galanty, Senice, Skalice, Malaciek,
                    Nitry, Pezinka, Modry, Dunajskej Stredy, Nových Zámkov, Nového Mesta nad Váhom
                    a Trenčína.
                  </p>
                </div>
              </div>
              <div className="content-image-box">
                <img
                  src="/sources/5.Trapezy-a-Vlnovky/fotka-za-hlavny-nadpis.jpg"
                  alt="Doprava a pobočky"
                />
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
