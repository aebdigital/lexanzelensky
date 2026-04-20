import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { PageHero } from "../../components/page-hero";
import { ProductCardGrid } from "../../components/product-card-grid";
import { legacyMetadata } from "../../lib/seo";

export const metadata: Metadata = legacyMetadata("products");

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams;
  /* Backwards-compatible redirect: old ?service= links → new /produkty/[slug] */
  const service = params.service;
  const category = params.category;
  const slug = typeof service === "string" ? service : typeof category === "string" ? category : null;

  const validSlugs = [
    "dutinkove-polykarbonaty",
    "plne-polykarbonaty",
    "hpl-bond-dosky",
    "prislusenstvo",
    "trapezy-vlnovky",
    "skleniky"
  ];

  if (slug && validSlugs.includes(slug)) {
    redirect(`/produkty/${slug}`);
  }

  return (
    <main>
      <PageHero title="Produkty" />
      <ProductCardGrid title="Naše produkty" variant="standard" />
    </main>
  );
}
