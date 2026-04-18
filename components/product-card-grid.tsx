import Link from "next/link";
import { products } from "../lib/site-data";

type ProductCardGridProps = {
  title: string;
};

export function ProductCardGrid({ title }: ProductCardGridProps) {
  return (
    <section className="products-strip">
      <div className="site-container">
        <h2 className="section-title-center">{title}</h2>
        <div className="product-card-grid">
          {products.map((product) => (
            <Link
              key={product.key}
              href={`/produkty?service=${product.key}`}
              className="legacy-product-card"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.38), rgba(0, 0, 0, 0.38)), url('${product.teaserImage}')`
              }}
            >
              <div className="legacy-product-card-inner">
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
