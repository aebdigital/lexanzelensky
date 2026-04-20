"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { products } from "../lib/site-data";

export function SiteFooter() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookieBannerOpen, setCookieBannerOpen] = useState(false);
  const [cookieModalOpen, setCookieModalOpen] = useState(false);
  const [consents, setConsents] = useState({ analytics: false, marketing: false });
  const [cookieInitialized, setCookieInitialized] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lexan_cookie_settings");
    if (saved) {
      setConsents(JSON.parse(saved));
    } else {
      setCookieBannerOpen(true);
    }
    setCookieInitialized(true);
  }, []);

  function saveAllCookies() {
    const all = { analytics: true, marketing: true };
    localStorage.setItem("lexan_cookie_settings", JSON.stringify(all));
    setConsents(all);
    setCookieBannerOpen(false);
    setCookieModalOpen(false);
  }

  function saveSelectedCookies() {
    localStorage.setItem("lexan_cookie_settings", JSON.stringify(consents));
    setCookieBannerOpen(false);
    setCookieModalOpen(false);
  }

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
                  <li>
                    <button type="button" className="footer-link-button" onClick={() => setCookieModalOpen(true)}>
                      Nastavenie cookies
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

      {cookieInitialized && cookieBannerOpen && (
        <div className="cookie-banner-wrapper">
          <div className="cookie-banner" role="dialog" aria-labelledby="cookie-banner-title">
            <div className="cookie-banner-content text-left">
              <h3 id="cookie-banner-title">Vyjadrite svoj súhlas s používaním cookies</h3>
              <p>
                Aby sme vám mohli poskytnúť najlepší možný zážitok a aby naša stránka fungovala správne, potrebujeme váš súhlas s využívaním súborov cookies.
              </p>
            </div>
            <div className="cookie-banner-actions">
              <button 
                type="button" 
                className="cookie-btn-settings" 
                onClick={() => setCookieModalOpen(true)}
              >
                Nastavenia
              </button>
              <button 
                type="button" 
                className="cookie-btn-accept" 
                onClick={saveAllCookies}
              >
                Prijať všetky
              </button>
            </div>
          </div>
        </div>
      )}

      {cookieModalOpen && (
        <div className="privacy-modal" role="dialog" aria-modal="true" aria-labelledby="cookie-settings-title">
          <button
            type="button"
            className="privacy-modal-overlay"
            aria-label="Zatvoriť nastavenia cookies"
            onClick={() => setCookieModalOpen(false)}
          />
          <div className="privacy-modal-content cookie-modal-content">
            <div className="privacy-modal-header">
              <h2 id="cookie-settings-title">Nastavenie cookies</h2>
              <button type="button" className="privacy-modal-close" onClick={() => setCookieModalOpen(false)}>
                &times;
              </button>
            </div>
            <div className="privacy-modal-body cookie-settings-body">
              <p className="mb-6 text-[15px] leading-relaxed text-[#666]">
                Vyberte si úroveň súborov cookies, s akou si prajete túto stránku naďalej prezerať. Tieto preferencie si samozrejme môžete kedykoľvek v budúcnosti ľubovoľne pozmeniť.
              </p>
              
              <div className="cookie-settings-group">
                <div className="cookie-settings-row">
                  <div className="cookie-settings-info">
                    <h4>Nevyhnutné cookies</h4>
                    <p>Zabezpečujú správne fungovanie základných funkcií webovej stránky. Bez nich by stránka nevedela bezpečne fungovať. Sú predvolené ako aktívne a nie je možné ich vypnúť.</p>
                  </div>
                  <div className="cookie-settings-toggle locked">
                    <div className="toggle-switch active cursor-not-allowed opacity-50">
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>

                <div className="cookie-settings-row">
                  <div className="cookie-settings-info">
                    <h4>Analytické cookies</h4>
                    <p>Pomáhajú nám pochopiť, ako našu webovú stránku používate, čo nám umožňuje neustále zlepšovať jej obsah a funkčnosť pre čo najlepší používateľský zážitok.</p>
                  </div>
                  <div className="cookie-settings-toggle">
                    <button 
                      type="button"
                      className={`toggle-switch ${consents.analytics ? 'active' : ''}`}
                      onClick={() => setConsents(prev => ({ ...prev, analytics: !prev.analytics }))}
                      aria-pressed={consents.analytics}
                    >
                      <div className="toggle-slider"></div>
                    </button>
                  </div>
                </div>

                <div className="cookie-settings-row !border-b-0">
                  <div className="cookie-settings-info">
                    <h4>Marketingové cookies</h4>
                    <p>Využívame ich na sledovanie a vyhodnocovanie výkonnosti našich digitálnych kampaní, vďaka čomu vám vieme ponúkať relevantnejšie a cielené ponuky a reklamy.</p>
                  </div>
                  <div className="cookie-settings-toggle">
                    <button 
                      type="button"
                      className={`toggle-switch ${consents.marketing ? 'active' : ''}`}
                      onClick={() => setConsents(prev => ({ ...prev, marketing: !prev.marketing }))}
                      aria-pressed={consents.marketing}
                    >
                      <div className="toggle-slider"></div>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-end gap-3 mt-8">
                <button 
                  type="button" 
                  className="legacy-button-dark w-full md:w-auto text-center justify-center !py-3 !px-6" 
                  onClick={saveSelectedCookies}
                >
                  Uložiť predvoľby
                </button>
                <button 
                  type="button" 
                  className="legacy-button-primary w-full md:w-auto text-center !py-3 !px-6" 
                  onClick={saveAllCookies}
                >
                  Prijať všetky
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
