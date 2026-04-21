import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "../../components/page-hero";
import { ProductCardGrid } from "../../components/product-card-grid";
import { legacyMetadata } from "../../lib/seo";

export const metadata: Metadata = legacyMetadata("about");

export default function AboutPage() {
  return (
    <main>
      <PageHero title="O nás" />

      <section className="page-copy-section">
        <div className="site-container">
          <div className="content-section-stack">
            <div className="about-split-grid">
              <div className="content-text">
                <h2 className="content-title">Kto sme?</h2>
                <p>
                  Naša spoločnosť sa už viac ako <strong>23 rokov špecializuje</strong> na predaj a
                  distribúciu dutinkových a plných polykarbonátových dosiek značiek{" "}
                  <strong>LEXAN®</strong> a <strong>ARLA</strong>, ktoré patria medzi absolútnu
                  svetovú špičku v oblasti výroby vysoko kvalitného polykarbonátu. Tieto značky sú
                  známe svojou dlhodobou spoľahlivosťou, výnimočnou pevnosťou a obojstrannou UV
                  ochranou, čím výrazne prevyšujú konkurenčné materiály na trhu.
                </p>
                <p>
                  K doskám ponúkame kompletné montážne príslušenstvo, čo nám umožňuje zabezpečiť
                  zákazníkom všetko potrebné na jednom mieste – efektívne, rýchlo a bez starostí.
                </p>
              </div>
              <div className="relative w-full h-[250px] md:h-[400px] shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
                <Image
                  src="/sources/1.Dutinkove-polykarbonaty/3.jpg"
                  alt="LEXAN polykarbonátové dosky"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="about-split-grid">
              <div className="relative w-full h-[250px] md:h-[400px] shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
                <Image
                  src="/sources/about-quality.jpg"
                  alt="LEXAN služby a poradenstvo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="content-text">
                <p>
                  Našim zákazníkom zároveň poskytujeme aj široký sortiment ďalších kvalitných
                  stavebných materiálov, čo nás radí medzi najkomplexnejších dodávateľov v tomto
                  segmente. Veľký dôraz kladieme na dôslednú technickú podporu, osobný prístup a
                  individuálne poradenstvo pri výbere vhodného riešenia – bez ohľadu na veľkosť
                  zákazky.
                </p>
                <p>
                  Sme hrdí na to, že našim klientom dokážeme byť oporou v celom procese: od
                  plánovania projektu, cez odbornú konzultáciu, prípravu materiálu, až po samotnú
                  realizáciu a montáž.
                </p>
                <p>
                  Naša práca je založená na profesionalite, spoľahlivosti a dlhoročných
                  skúsenostiach, vďaka čomu si udržiavame stabilné postavenie na trhu a dôveru
                  širokého spektra zákazníkov – od jednotlivcov, živnostníkov až po stavebné firmy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductCardGrid title="V našej ponuke nájdete:" />

      <section className="page-copy-section">
        <div className="site-container">
          <div className="content-section-stack">
            <div className="about-split-grid">
              <div className="content-text">
                <h3 className="content-title">Kvalita a certifikácia</h3>
                <div className="quality-box">
                  <p>
                    Všetky polykarbonátové dosky dodávame výlučne od renomovaných značiek{" "}
                    <strong>LEXAN®</strong> a <strong>ARLA</strong>, ktoré predstavujú najvyššiu
                    kvalitu v oblasti 100% polykarbonátu. Vďaka obojstrannej UV stabilizácii a
                    výnimočnej mechanickej pevnosti sú ideálnou voľbou pre exteriérové aplikácie –
                    od prístreškov a altánkov, skleníky-lexaníky, cez svetlíky až po zimné záhrady.
                    Technické certifikáty a vyhlásenia o zhode sú k dispozícii na vyžiadanie.
                  </p>
                </div>
              </div>
              <div className="relative w-full h-[250px] md:h-[400px] shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
                <Image
                  src="/sources/6.Skleniky/fotka-za-hlavnym-nadpisom.jpg"
                  alt="Kvalitné skleníky LEXAN"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="about-split-grid">
              <div className="relative w-full h-[250px] md:h-[400px] shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
                <Image
                  src="/sources/4.Prislusenstvo/Fotka-za-hlavnym-nadpisom.jpeg"
                  alt="Montáž"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="content-text">
                <h3 className="content-title-dark">Odborná montáž</h3>
                <p>
                  Okrem dodávky materiálu poskytujeme aj{" "}
                  <strong>odbornú montáž dutinkových a plných polykarbonátových dosiek</strong>{" "}
                  značky LEXAN® a ARLA na už hotové konštrukcie.
                </p>
                <p>
                  Zabezpečuje ju náš skúsený tím technikov, prípadne spolupracujeme s overenými
                  zámočníkmi a stolármi pri výrobe a montáži prístreškov, zimných záhrad, balkónov,
                  skleníkov-lexaníky či iných stavieb.
                </p>
              </div>
            </div>

            <div className="about-split-grid">
              <div className="content-text">
                <h3 className="content-title">Naše pobočky a doprava</h3>
                <p>
                  Naše pobočky nájdete v <strong>Trnave, Senci a Piešťanoch</strong>,{" "}
                  <Link href="/kontakt" className="font-semibold text-[#5a5a58] no-underline">
                    kde vám radi poskytneme osobné odborné poradenstvo
                  </Link>{" "}
                  a cenovú ponuku na mieru zdarma, alebo si u nás môžete vyzdvihnúť materiál priamo
                  na mieste.
                </p>
                <div className="delivery-info-box">
                  <p>
                    🚚 Výhodná doprava po celom Slovensku
                  </p>
                  <p>
                    Pre ešte väčší komfort našich zákazníkov ponúkame aj výhodnú dopravu zakúpeného
                    materiálu kamkoľvek na Slovensku, najmä v okolí uvedených miest:
                  </p>
                  <p>
                    Trnava, Senec, Piešťany, Bratislava, Hlohovec, Sereď, Galanta, Senica, Skalica,
                    Malacky, Nitra, Pezinok, Modra, Dunajská Streda, Nové Zámky, Nové Mesto nad
                    Váhom a Trenčín.
                  </p>
                  <p>
                    Doprava je zabezpečovaná našim vozidlom promptne, spoľahlivo a za rozumné ceny,
                    aby ste svoj materiál mali vždy včas tam, kde ho potrebujete.
                  </p>
                </div>
              </div>
              <div className="relative w-full h-[250px] md:h-[400px] shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
                <Image
                  src="/sources/5.Trapezy-a-Vlnovky/fotka-za-hlavny-nadpis.jpg"
                  alt="Doprava a pobočky"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="cta-row cta-row-centered">
              <Link href="/kontakt" className="footer-button">
                Kontaktovať nás
              </Link>
              <Link href="/produkty" className="footer-button">
                Zobraziť produkty
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
