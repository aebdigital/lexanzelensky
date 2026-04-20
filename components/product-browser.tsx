"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { startTransition, useEffect, useMemo, useState } from "react";
import { LegacyProductDetail } from "./legacy-product-detail";
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
        <h3 className="products-sidebar-title">Výber produktu</h3>
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
              </button>
            );
          })}
        </div>
      </aside>

      <div className="products-main">
        <LegacyProductDetail productKey={activeProduct.key} />
      </div>
    </section>
  );
}
