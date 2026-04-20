import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, type ProductKey } from "../../../lib/site-data";
import { productPageMetadata, productJsonLd } from "../../../lib/seo";
import { PageHero } from "../../../components/page-hero";
import { LegacyProductDetail } from "../../../components/legacy-product-detail";
import { ProductSidebar } from "../../../components/product-sidebar";

type Props = {
  params: Promise<{ slug: string }>;
};

/** Pre-generate all product slugs at build time for optimal performance */
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.key
  }));
}

/** Dynamic metadata per product page */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.key === slug);
  if (!product) return {};
  return productPageMetadata(product.key as ProductKey);
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.key === slug);
  if (!product) notFound();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product.key as ProductKey))
        }}
      />

      <PageHero title={product.pageTitle ?? product.name} backgroundImage={product.heroImage} />

      <section className="products-layout">
        <ProductSidebar activeKey={product.key} />
        <div className="products-main">
          <LegacyProductDetail productKey={product.key} />
        </div>
      </section>
    </main>
  );
}
