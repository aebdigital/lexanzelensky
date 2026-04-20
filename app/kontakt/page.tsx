import type { Metadata } from "next";
import { ContactPageClient } from "../../components/contact-page-client";
import { PageHero } from "../../components/page-hero";
import { legacyMetadata } from "../../lib/seo";

export const metadata: Metadata = legacyMetadata("contact");

export default function ContactPage() {
  return (
    <main>
      <PageHero title="Kontakt" backgroundImage="/sources/7.Kontakty-a-pobocky/IMG_1497 (1).jpg" />

      <ContactPageClient />
    </main>
  );
}
