import type { Metadata } from "next";
import Link from "next/link";
import { HomeHero } from "../components/home-hero";
import { ProductCardGrid } from "../components/product-card-grid";
import { partnerLogos } from "../lib/site-data";
import { legacyMetadata } from "../lib/seo";

export const metadata: Metadata = legacyMetadata("home");

export default function HomePage() {
  return (
    <main>
      <HomeHero />

      <section className="home-about">
        <div className="site-container">
          <div className="home-about-grid">
            <div>
              <span className="home-about-label">— Kto sme</span>
              <h2 className="home-about-title">O NÁS</h2>

              <div className="home-about-copy">
                <p>
                  Naša firma má viac ako 23 ročnú skúsenosť s predajom, distribúciou a montážou
                  kvalitných polykarbonátových platní registrovanej ochrannej značky LEXAN® a
                  ARLA, ktoré patria medzi absolútnu svetovú špičku v oblasti výroby vysoko
                  kvalitného polykarbonátu. Na našej stránke nájdete široký výber dutinkových,
                  plných, vlnovkových a trapézových polykarbonátov, montážne hliníkové a plastové
                  komponenty. Ponúkame kvalitné a ľahké záhradné polykarbonátové skleníky-lexaníky
                  vyrábané na mieru zákazníka.
                </p>
                <p>
                  Okrem Lexanu ponúkame kompaktné vysokotlakové HPL dosky Fundermax, Kronospan a
                  Kompozitné sendvičové panely Bond. Zakladáme si predovšetkým hlavne na kvalite
                  produktov, profesionalite a spokojnosti zákazníkov. Poskytujeme odborné
                  poradenstvo od plánovania až po samotnú realizáciu stavieb.
                </p>
                <Link href="/kontakt" className="legacy-button-dark">
                  Kontaktovať nás
                  <span aria-hidden>↗</span>
                </Link>
              </div>
            </div>

            <div className="home-about-visual">
              <img src="/sources/new.jpg" alt="LEXAN polykarbonátové riešenia" />
              <div className="floating-stat-box">
                <div className="floating-stat-number">23</div>
                <div className="floating-stat-label">rokov skúseností</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductCardGrid title="Naše produkty" variant="home" />

      <section className="partners-section">
        <div className="site-container">
          <h2 className="partners-title">Naši partneri</h2>
          <div className="partners-grid">
            {partnerLogos.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="partner-card"
              >
                <img src={partner.image} alt={partner.name} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
