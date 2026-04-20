"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { products, type ProductKey } from "../lib/site-data";

type ProductSidebarProps = {
  activeKey?: ProductKey;
};

export function ProductSidebar({ activeKey }: ProductSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="products-sidebar">
      <h3 className="products-sidebar-title">Výber produktu</h3>
      <div className="products-sidebar-list">
        {products.map((product) => {
          const isActive =
            activeKey === product.key ||
            pathname === `/produkty/${product.key}`;
          return (
            <Link
              key={product.key}
              href={`/produkty/${product.key}`}
              className={
                isActive
                  ? "products-sidebar-item is-active"
                  : "products-sidebar-item"
              }
            >
              <h4>
                <span className="dash-line" />
                {product.name}
              </h4>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
