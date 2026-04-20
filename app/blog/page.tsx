import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../components/page-hero";
import { legacyMetadata } from "../../lib/seo";

export const metadata: Metadata = legacyMetadata("blog");

export default function BlogPage() {
  return (
    <main>
      <PageHero title="Blog" />
      <section className="page-copy-section">
        <div className="site-container">
          <div className="content-text max-w-3xl">
            <h2 className="content-title-dark">
              Pripravujeme obsah
            </h2>
            <p>
              Blog je momentálne v príprave. Čoskoro tu nájdete užitočné informácie o
              polykarbonátových riešeniach, tipoch na montáž skleníkov a novinky z oblasti
              stavebných materiálov.
            </p>
            <div className="cta-row">
              <Link href="/" className="footer-button">
                Návrat na hlavnú stránku
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
