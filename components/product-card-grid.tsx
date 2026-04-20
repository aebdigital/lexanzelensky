import Link from "next/link";
import { products } from "../lib/site-data";

type ProductCardGridProps = {
  title: string;
  variant?: "home" | "standard";
};

const homeDescriptionOverrides: Record<string, string> = {
  "dutinkove-polykarbonaty":
    "Vysokokvalitné dutinkové polykarbonátové platne pre rôzne aplikácie. Výborná izolácia, odolnosť a svetelnost pre skleníky, pergoly a fasady."
};

export function ProductCardGrid({ title, variant = "standard" }: ProductCardGridProps) {
  return (
    <section className="products-strip">
      <div className="site-container">
        <h2 className="section-title-center">{title}</h2>
        <div className="product-card-grid">
          {products.map((product) => (
            <Link
              key={product.key}
              href={`/produkty/${product.key}`}
              className="legacy-product-card"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.38), rgba(0, 0, 0, 0.38)), url('${product.teaserImage}')`
              }}
            >
              <div className="legacy-product-card-inner">
                <h3>{product.name}</h3>
                <p>{variant === "home" ? homeDescriptionOverrides[product.key] ?? product.shortDescription : product.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
