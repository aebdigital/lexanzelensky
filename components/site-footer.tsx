"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "../lib/site-data";

export function SiteFooter() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="site-container">
          <div className="footer-top">
            <div>
              <h2>Potrebujete poradenstvo s polykarbonátmi?</h2>
              <p>Kontaktujte nás a my Vám radi poradíme</p>
            </div>
            <div>
              <Link href="/kontakt" className="footer-button">
                KONTAKT
              </Link>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-content">
            <div className="footer-brand">
              <h3>LEXAN Zelenský s.r.o.</h3>
              <p>
                Novomestská ulica 9514/9
                <br />
                917 01 Trnava
                <br />
                Slovenská republika
              </p>
              <p>
                <strong>IČO:</strong> 51 655 632
                <br />
                <strong>DIČ:</strong> 2120754812
                <br />
                <strong>IČ DPH:</strong> SK2120754812
              </p>
              <p>
                <strong>TEL:</strong> <a href="tel:+421905387356">+421 905 387 356</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:zelenskystefan@gmail.com">zelenskystefan@gmail.com</a>
              </p>
            </div>

            <div className="footer-nav-columns">
              <div className="footer-nav-column">
                <h4>Navigácia</h4>
                <ul>
                  <li>
                    <Link href="/">Domov</Link>
                  </li>
                  <li>
                    <Link href="/o-nas">O nás</Link>
                  </li>
                  <li>
                    <Link href="/produkty">Produkty</Link>
                  </li>
                  <li>
                    <Link href="/sluzby">Služby</Link>
                  </li>
                  <li>
                    <Link href="/kontakt">Kontakt</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-nav-column">
                <h4>Produkty</h4>
                <ul>
                  {products.map((product) => (
                    <li key={product.key}>
                      <Link href={`/produkty/${product.key}`}>{product.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-nav-column">
                <h4>Právne informácie</h4>
                <ul>
                  <li>
                    <button type="button" className="footer-link-button" onClick={() => setPrivacyOpen(true)}>
                      Ochrana osobných údajov
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              <a href="https://aebdigital.sk/" target="_blank" rel="noreferrer">
                Tvorba stránky - AEB Digital
              </a>
            </p>
            <p>&copy; 2026 LEXAN s.r.o.</p>
          </div>
        </div>
      </footer>

      {privacyOpen ? (
        <div className="privacy-modal" role="dialog" aria-modal="true" aria-labelledby="privacy-title">
          <button
            type="button"
            className="privacy-modal-overlay"
            aria-label="Zatvoriť ochranu osobných údajov"
            onClick={() => setPrivacyOpen(false)}
          />
          <div className="privacy-modal-content">
            <div className="privacy-modal-header">
              <h2 id="privacy-title">Ochrana osobných údajov</h2>
              <button type="button" className="privacy-modal-close" onClick={() => setPrivacyOpen(false)}>
                &times;
              </button>
            </div>
            <div className="privacy-modal-body">
              <p>
                <strong>LEXAN Zelenský s.r.o.</strong>
                <br />
                Novomestská ulica 9514/9
                <br />
                917 01 Trnava
                <br />
                Slovenská republika
                <br />
                IČO: 51 655 632
                <br />
                DIČ: 2120754812
                <br />
                IČ DPH: SK2120754812
                <br />
                E-mail: zelenskystefan@gmail.com
                <br />
                Tel.: +421 905 504 756
              </p>
              <p>
                Tieto Zásady ochrany osobných údajov popisujú, aké osobné údaje spracúvame v
                súvislosti s používaním našej webovej stránky a kontaktných formulárov.
              </p>
              <h3>I. Kontaktný formulár</h3>
              <p>
                Kontaktný formulár slúži na položenie otázky k produktom a službám alebo vyžiadanie
                cenovej ponuky. Spracúvame meno, emailovú adresu, telefónne číslo a správu, aby sme
                vás mohli kontaktovať a reagovať na váš dopyt.
              </p>
              <p>
                Právnym základom spracúvania je článok 6 ods. 1 písm. b) GDPR. Osobné údaje budú
                uchovávané maximálne 10 rokov od odozvy na dopyt, pokiaľ nevznikne ďalší zmluvný
                vzťah.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
