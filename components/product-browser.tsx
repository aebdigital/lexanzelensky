"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition, useEffect, useMemo, useState } from "react";
import { ProductCategory, ProductKey, products } from "../lib/site-data";

function isProductKey(value: string | null): value is ProductKey {
  return products.some((product) => product.key === value);
}

export function ProductBrowser() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const serviceParam = searchParams.get("service");
  const categoryParam = searchParams.get("category");
  const initialKey: ProductKey = isProductKey(serviceParam)
    ? serviceParam
    : isProductKey(categoryParam)
      ? categoryParam
      : products[0].key;

  const [activeKey, setActiveKey] = useState<ProductKey>(initialKey);

  useEffect(() => {
    const service = searchParams.get("service");
    const category = searchParams.get("category");
    if (isProductKey(service)) {
      setActiveKey(service);
      return;
    }
    if (isProductKey(category)) {
      setActiveKey(category);
    }
  }, [searchParams]);

  const activeProduct = useMemo<ProductCategory>(
    () => products.find((product) => product.key === activeKey) ?? products[0],
    [activeKey]
  );

  const handleSelect = (key: ProductKey) => {
    setActiveKey(key);
    startTransition(() => {
      router.replace(`/produkty?service=${key}`, { scroll: false });
    });
  };

  return (
    <section className="products-layout">
      <aside className="products-sidebar">
        <h3 className="products-sidebar-title">Produkty</h3>
        <div className="products-sidebar-list">
          {products.map((product) => {
            const active = product.key === activeProduct.key;
            return (
              <button
                key={product.key}
                type="button"
                onClick={() => handleSelect(product.key)}
                className={active ? "products-sidebar-item is-active" : "products-sidebar-item"}
              >
                <h4>
                  <span className="dash-line" />
                  {product.name}
                </h4>
                <p>{product.shortDescription}</p>
              </button>
            );
          })}
        </div>
      </aside>

      <div className="products-main">
        <div className="product-hero-row">
          <div className="product-copy">
            <h2>{activeProduct.name}</h2>
            {activeProduct.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="product-chip-list">
              {activeProduct.highlights.map((item) => (
                <span key={item} className="product-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="product-image-column">
            <img src={activeProduct.heroImage} alt={activeProduct.name} />
          </div>
        </div>

        <div className="product-section-grid">
          {activeProduct.sections.map((section, index) => (
            <article key={section.title} className="product-section-card">
              <div
                className={
                  index % 2 === 1 ? "product-section-row is-reverse" : "product-section-row"
                }
              >
                {section.image ? <img src={section.image} alt={section.title} /> : null}
                <div className="product-section-copy">
                  <h3>{section.title}</h3>
                  {section.text.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.list ? (
                    <ul>
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.links ? (
                    <div className="product-links">
                      {section.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          className="legacy-button-dark"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="product-gallery">
          <h3>Galéria</h3>
          <div className="product-gallery-grid">
            {activeProduct.gallery.map((image) => (
              <img key={image} src={image} alt={activeProduct.name} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
