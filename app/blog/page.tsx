import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../components/page-hero";

export const metadata: Metadata = {
  title: "Blog",
  description: "Novinky a praktické tipy k polykarbonátovým riešeniam pripravujeme."
};

export default function BlogPage() {
  return (
    <main>
      <PageHero title="Blog" />
      <section className="page-copy-section">
        <div className="site-container">
          <div className="content-text max-w-3xl">
            <h2 className="content-title-dark">
              Praktické články, porovnania materiálov a montážne odporúčania pripravujeme.
            </h2>
            <p>
              Zatiaľ nás môžete kontaktovať priamo a radi vám poradíme individuálne podľa projektu,
              materiálu a požadovaného výsledku.
            </p>
            <div className="cta-row">
              <Link href="/kontakt" className="footer-button">
                Napísať nám
              </Link>
              <Link href="/produkty" className="footer-button">
                Pozrieť produkty
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
