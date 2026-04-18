import Link from "next/link";
import { products } from "../lib/site-data";

export function SiteFooter() {
  return (
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
              <strong>TEL:</strong> <a href="tel:+421905504756">+421 905 504 756</a>
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
                    <Link href={`/produkty?service=${product.key}`}>{product.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-nav-column">
              <h4>Právne informácie</h4>
              <ul>
                <li>
                  <Link href="/kontakt">Ochrana osobných údajov</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            <a href="https://www.aebdigital.com/" target="_blank" rel="noreferrer">
              Tvorba stránky - AEB Digital
            </a>
          </p>
          <p>&copy; 2025 LEXAN s.r.o.</p>
        </div>
      </div>
    </footer>
  );
}
