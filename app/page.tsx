import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
              <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 mb-6">O nás</h2>

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
              <div className="relative w-full h-[300px] md:h-[500px]">
                <Image 
                  src="/sources/about-quality.jpg" 
                  alt="LEXAN polykarbonátové riešenia" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="floating-stat-box z-10">
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
          <h2 className="section-title-center mb-8">Naši partneri</h2>
          <div className="partners-grid justify-items-center">
            {partnerLogos.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="partner-card flex items-center justify-center p-4 hover:-translate-y-1 transition-transform"
              >
                <Image 
                  src={partner.image} 
                  alt={partner.name} 
                  width={200} 
                  height={80} 
                  style={{ width: 'auto', maxHeight: '80px', objectFit: 'contain' }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
