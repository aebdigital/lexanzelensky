"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { homeHeroImages } from "../lib/site-data";

export function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % homeHeroImages.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="home-hero">
      <div className="home-hero-background">
        {homeHeroImages.map((image, index) => (
          <div
            key={image}
            className={index === activeIndex ? "home-hero-image active" : "home-hero-image"}
          >
            <Image
              src={image}
              alt="Lexan Hero"
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <div className="home-hero-overlay" />

      <div className="site-container">
        <div className="home-hero-content">
          <div className="home-hero-text">
            <h1>KVALITNÉ POLYKARBONÁTOVÉ RIEŠENIA</h1>
            <p>
              Sme odborníci na polykarbonátové produkty a riešenia. Ponúkame dutinkové a plné
              polykarbonáty, HPL dosky, trapézy, vlnovky, skleníky a komplexné príslušenstvo pre
              všetky vaše projekty.
            </p>
            <div className="home-hero-actions">
              <Link href="/produkty" className="legacy-button-primary">
                PRODUKTY
              </Link>
              <Link href="/sluzby" className="legacy-button-secondary">
                NAŠE SLUŽBY
              </Link>
            </div>
          </div>

          <div className="home-hero-side">
            <div className="legacy-stat">
              <div className="legacy-stat-number">23</div>
              <div className="legacy-stat-label">rokov skúseností</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
