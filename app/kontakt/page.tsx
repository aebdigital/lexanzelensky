import type { Metadata } from "next";
import { ContactPageClient } from "../../components/contact-page-client";
import { legacyMetadata } from "../../lib/seo";

export const metadata: Metadata = legacyMetadata("contact");

export default function ContactPage() {
  return (
    <main>
      <section className="contact-hero">
        <img src="/sources/7.Kontakty-a-pobocky/IMG_1497 (1).jpg" alt="Kontakt LEXAN" />
        <div className="site-container">
          <div className="contact-hero-content">
            <h1>Kontakt</h1>
          </div>
        </div>
      </section>

      <ContactPageClient />
    </main>
  );
}
