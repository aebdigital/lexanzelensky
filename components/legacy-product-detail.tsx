"use client";

import Link from "next/link";
import { useState } from "react";
import { ProductKey } from "../lib/site-data";

type FeatureProps = {
  title: string;
  children: React.ReactNode;
  tone?: "default" | "success" | "info" | "warning" | "purple" | "green";
};

type AccessoryTabKey = "aluminum" | "plastic" | "rubber" | "connecting";

type AccessoryRow = {
  image: string;
  cells: string[];
};

const accessoryTabs: {
  key: AccessoryTabKey;
  title: string;
  className: string;
  tabImage: string;
  headers: string[];
  rows: AccessoryRow[];
}[] = [
  {
    key: "aluminum",
    title: "Hliníkové profily",
    className: "aluminum-profiles",
    tabImage: "/sources/4.Prislusenstvo/hlinikove-profily.png",
    headers: ["Obrázok", "Názov profilu", "Dostupná farba", "Dostupné rozmery (m)"],
    rows: [
      { image: "/sources/4.Prislusenstvo/obrazok-1.png", cells: ["Prítlačná lišta 60mm", "Bez povrchovej úpravy, bronz elox, antracit šedý", "2, 3, 3,5, 4, 5, 7"] },
      { image: "/sources/4.Prislusenstvo/obrazok-4.png", cells: ["Prítlačná lišta 50mm", "Bez povrchovej úpravy", "2, 3, 3,5, 4, 5, 7"] },
      { image: "/sources/4.Prislusenstvo/obrazok-5.jpg", cells: ["H profil 10mm a 16mm", "Bez povrchovej úpravy", "2, 3, 6"] },
      { image: "/sources/4.Prislusenstvo/obrazok-6.jpg", cells: ["F Profil 6, 8, 10, 16mm", "Bez povrchovej úpravy, bronz elox, antracit šedý", "2,133, 3,20, 4,266, 6,40"] },
      { image: "/sources/4.Prislusenstvo/obrazok-9.jpg", cells: ["U profil 6, 8 mm", "Bez povrchovej úpravy", "2, 3, 6"] },
      { image: "/sources/4.Prislusenstvo/obrazok-10.jpg", cells: ["U profil 10, 16mm", "Strieborný elox, bronz elox", "2,133, 3,20, 4,266, 6,40"] },
      { image: "/sources/4.Prislusenstvo/obrazok-12.jpg", cells: ["Nástenný S Profil", "Bez povrchovej úpravy, bronz elox, antracit šedý", "2,133, 3,20, 4,266, 6,40"] },
      { image: "/sources/4.Prislusenstvo/obrazok-14.jpg", cells: ["L Profil 15x15, 20x20, 25x25, 30x30, 40x20, 40x40", "Bez povrchovej úpravy", "2, 3, 6"] },
      { image: "/sources/4.Prislusenstvo/obrazok-16.jpg", cells: ["Pásovina 30 a 40mm", "Bez povrchovej úpravy", "2, 3, 6"] }
    ]
  },
  {
    key: "plastic",
    title: "Plastové polykarbonátové profily",
    className: "plastic-profiles",
    tabImage: "/sources/4.Prislusenstvo/plastove-polykarbonatove-profily.jpg",
    headers: ["Obrázok", "Názov profilu", "Dostupné rozmery (m)"],
    rows: [
      { image: "/sources/4.Prislusenstvo/obrazok-17.png", cells: ["U profil PC 4,6,8,10 a 16mm", "2,1m"] },
      { image: "/sources/4.Prislusenstvo/obrazok-18.png", cells: ["H profil PC 4,6,8,10 a 16mm (Pri 10 a 16mm verziách sú profily dostupné aj v prevedení hnedý bronz)", "2, 3, 4 a 6"] }
    ]
  },
  {
    key: "rubber",
    title: "Spodné a tesniace gumové pásy",
    className: "rubber-seals",
    tabImage: "/sources/4.Prislusenstvo/spodne-a-tesniace-gumove-pasy.png",
    headers: ["Obrázok", "Názov", "Dostupnosť"],
    rows: [
      { image: "/sources/4.Prislusenstvo/obrazok-19.jpg", cells: ["Tesnenie do prítlačnej lišty 60mm", "Bežné metre"] },
      { image: "/sources/4.Prislusenstvo/obrazok-20.jpg", cells: ["Tesnenie do prítlačnej lišty 50mm", "Bežné metre"] },
      { image: "/sources/4.Prislusenstvo/obrazok-21.jpg", cells: ["Spodná guma 50, 60 a 80mm", "Bežné metre"] },
      { image: "/sources/4.Prislusenstvo/obrazok-22.jpg", cells: ["Tesnenie do nástenného S Profilu", "Bežné metre"] },
      { image: "/sources/4.Prislusenstvo/new-1.jpg", cells: ["Tesniaca páska s filtrom 28/38mm", "Bežné metre"] },
      { image: "/sources/4.Prislusenstvo/new-2.jpg", cells: ["Tesniaca páska bez filtra 28/38mm", "Bežné metre"] }
    ]
  },
  {
    key: "connecting",
    title: "Spojovacie príslušenstvo",
    className: "connecting-accessories",
    tabImage: "/sources/4.Prislusenstvo/spojovacie-prislusenstvo.jpeg",
    headers: ["Obrázok", "Názov", "Rozmery"],
    rows: [
      { image: "/sources/4.Prislusenstvo/obrazok-23.jpg", cells: ["Vrut do dreva", "40, 50, 60 a 70mm"] },
      { image: "/sources/4.Prislusenstvo/obrazok-24.jpg", cells: ["Tex samorezný", "25, 32, 38, 45, 50 a 60mm"] },
      { image: "/sources/4.Prislusenstvo/obrazok-25.jpg", cells: ["Podložka malá a veľká", "-"] },
      { image: "/sources/4.Prislusenstvo/obrazok-26.jpg", cells: ["Podložka nerezová", "-"] },
      { image: "/sources/4.Prislusenstvo/new-3.jpeg", cells: ["Silikón Sikacil C 300ml", "300ml"] },
      { image: "/sources/4.Prislusenstvo/new-4.jpg", cells: ["FIX Lepidlo 290ml, transparent", "290ml"] }
    ]
  }
];

function Feature({ title, children, tone = "default" }: FeatureProps) {
  return (
    <div className={`legacy-product-feature legacy-product-feature-${tone}`}>
      <h4>{title}</h4>
      <div>{children}</div>
    </div>
  );
}

function Section({
  title,
  children,
  className = ""
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`legacy-product-section ${className}`}>
      {title ? <h3 className="legacy-section-heading">{title}</h3> : null}
      {children}
    </div>
  );
}

function ImageBlock({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="legacy-product-image-container">
      <img src={src} alt={alt} className="legacy-product-image" />
    </div>
  );
}

function ProductHero({
  title,
  children
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="legacy-product-content-wrapper">
      <div className="legacy-product-text legacy-product-full">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}

function AccessoryTabs() {
  const [activeTab, setActiveTab] = useState<AccessoryTabKey>("aluminum");
  const selectedTab = accessoryTabs.find((tab) => tab.key === activeTab) ?? accessoryTabs[0];

  return (
    <>
      <div className="legacy-tab-container">
        {accessoryTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`legacy-tab-button accessory-category ${tab.className}${tab.key === activeTab ? " active" : ""}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${tab.tabImage}')`
            }}
            onClick={() => setActiveTab(tab.key)}
          >
            <span>{tab.title}</span>
          </button>
        ))}
      </div>
      <div className="legacy-category-table-wrapper">
        <table className="legacy-category-table">
          <thead>
            <tr>
              {selectedTab.headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {selectedTab.rows.map((row) => (
              <tr key={row.cells.join("-")}>
                <td>
                  <img src={row.image} alt={row.cells[0]} className="legacy-category-table-image" />
                </td>
                {row.cells.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function DutinkovePolykarbonaty() {
  return (
    <>
      <ProductHero title="Dutinkový polykarbonát">
        <h3>Dutinkový Lexan</h3>
        <p>
          Dutinkový polykarbonát môžete poznať pod jednoduchším názvom Lexan. Ide o platne vyrobené
          z vysokokvalitného termoplastického materiálu nazývaného polykarbonát. Ponúkajú skvelú
          kombináciu nízkej hmotnosti pri vysokej tuhosti, výborné tepelnoizolačné vlastnosti a v
          hlavnom rade vysokú priepustnosť svetla.
        </p>
        <p>
          Používajú sa v stavebníctve odvetví na prekrytie prístreškov, bazénov, svetlíkov,
          skleníkov a zimných záhrad.
        </p>
        <h3>PONÚKAME NEODĽAHČENÉ POLYKARBONÁTY V PLNEJ KVALITE!</h3>
        <p>
          Často sa stretávame s rôznymi napodobeninami dutinkových polykarbonátov u ktorých je
          uvedená výrazne menšia cena. Háčikom je nižšia hmotnosť na m2. Pri 10mm hrúbke je
          neodľahčená originálna hmotnosť 1,7 kg na m2. Tieto napodobeniny môžu mať hmotnosť len
          1,3kg na m2. Stávajú sa tým konštrukčne nestabilnými a často nevydržia nápor vetra a
          snehu. Detailnejšie sa tejto problematike venujeme na následujúcom odkaze{" "}
          <Link href="/blog" className="legacy-red-link">
            tu
          </Link>
          .
        </p>
      </ProductHero>

      <Section className="legacy-mt-40">
        <h3 className="legacy-brand-title">LEXAN® (Thermoclear*Plus)</h3>
        <p>
          Značka LEXAN® (Thermoclear*Plus) je popredným výrobcom týchto polykarbonátových platní, u
          ktorej nájdete široký výber hrúbok, farieb a rozmerov dutinkových polykarbonátov. Tieto
          platne od výroby disponujú obojstrannou ochranou proti UV žiareniu, tým pádom vekom
          nestrácajú farebnosť, udržujú si maximálnu kvalitovú stálosť a mechanickú odolnosť voči
          nárazom.
        </p>
      </Section>

      <div className="legacy-feature-row-stack">
        <div className="legacy-feature-image-row">
          <Feature title="TECHNICKÉ ŠPECIFIKÁCIE">
            <p>
              <strong>Vlastnosti:</strong>
              <br />
              • Vysoká priepustnosť svetla
              <br />
              • Obojstranný UV filter, ochrana pred poveternostnými vplyvmi
              <br />
              • Vysoká nárazová odolnosť
              <br />
              • Nízka hmotnosť, jednoduchá manipulácia, spracovateľnosť a inštalácia
              <br />• Stálosť od –40 °C do +120 °C
            </p>
          </Feature>
          <ImageBlock src="/sources/1.Dutinkove-polykarbonaty/1.jpg" alt="Dutinkové polykarbonáty ukážka 1" />
        </div>
        <div className="legacy-feature-image-row">
          <Feature title="HRÚBKY A ROZMERY">
            <p>
              <strong>Hrúbky:</strong> 4mm - (Len 1UV), (2UV) – 4.5, 6, 8, 10, 16, 20, 25mm
              <br />
              <strong>Štandardné farby:</strong> číry, opálový mliečny, hnedý bronz, IR Green
              <br />
              <strong>Štandardné rozmery platní:</strong>
              <br />
              • Šírka: 1,05 a 2,1m (pri 10mm hrúbke aj 1,2 a 1,5m)
              <br />• Dĺžka: 3, 3,5, 4, 4,5, 5, 6 a 7m
            </p>
          </Feature>
          <ImageBlock src="/sources/1.Dutinkove-polykarbonaty/2.jpg" alt="Dutinkové polykarbonáty ukážka 2" />
        </div>
        <div className="legacy-feature-image-row">
          <Feature title="DRUHY ŠTRUKTÚR">
            <p>
              <strong>4-8 mm:</strong> jednokomorová varianta
              <br />
              <strong>Od 10mm hrúbky:</strong> ponúkame špeciálne tepelnoizolačné štruktúry značky
              LEXAN® (Thermoclear*Plus) vhodné pre svetlíky priemyselných hál, zimných záhrad a
              vykurovaných priestorov.
            </p>
          </Feature>
          <ImageBlock src="/sources/1.Dutinkove-polykarbonaty/3.jpg" alt="Dutinkové polykarbonáty ukážka 3" />
        </div>
      </div>

      <Section title="ŠPECIÁLNE POLYKARBONÁTY" className="legacy-special-section">
        <div className="legacy-product-content-wrapper">
          <div className="legacy-product-text">
            <h4 className="legacy-feature-title-red">ARLA SOLAR CONTROL GREY a SOLAR CONTROL TRANSPARENT</h4>
            <p>
              Švédska značka ARLA ponúka špeciálnu technológiu Solar Control. SOLAR CONTROL GREY a
              SOLAR CONTROL TRANSPARENT sú dosky s nižšou priepustnosťou slnečného žiarenia a nižším
              prenikaním tepelného žiarenia do zaskleného objektu. Použitím kombinácie špeciálnych
              aditív a pigmentov bolo dosiahnuté zníženie prieniku infračerveného žiarenia a tým
              prílišnému prehriatiu interiéru.
            </p>
            <p>
              <strong>Prednosti dutinkového polykarbonátu SOLAR CONTROL GREY a SOLAR CONTROL TRANSPARENT:</strong>
              <br />
              • Poskytuje príjemnú chladnú atmosféru
              <br />
              • Moderný vzhľad, šedostrieborný odtieň
              <br />
              • Vysoká odolnosť voči ohňu
              <br />
              • Výrazné zníženie IR žiarenia
              <br />• Zabráňuje prílišnému prehriatiu interiéru
            </p>
          </div>
          <div className="legacy-product-image-container">
            <div className="legacy-two-image-row">
              <img src="/sources/1.Dutinkove-polykarbonaty/solar-control-grey.jpg" alt="ARLA Solar Control Grey" />
              <img
                src="/sources/1.Dutinkove-polykarbonaty/solar-control-transparent.jpg"
                alt="ARLA Solar Control Transparent"
              />
            </div>
            <img src="/sources/1.Dutinkove-polykarbonaty/5.jpg" alt="ARLA Solar Control Grey detail" />
          </div>
        </div>

        <div className="legacy-two-column-cards">
          <div>
            <h4 className="legacy-feature-title-red">IR GREEN</h4>
            <p>
              Lexan IR GREEN funguje na podobnom princípe ako platne Solar Control Grey. Vyznačuje sa
              vysokou priepustnosťou slnečného žiarenia s kombináciou nízkej priepustnosti tepelného
              žiarenia.
            </p>
            <img src="/sources/1.Dutinkove-polykarbonaty/6.jpg" alt="IR Green polykarbonáty" />
          </div>
          <div>
            <h4 className="legacy-feature-title-red">LEXAN THERMOCLICK</h4>
            <p>
              Kombinácia vynikajúcich vlastností komôrkových dosiek s veľmi výhodným systémom
              inštalácie. Dosky sa vzájomne spájajú na spôsob pera a drážky.
            </p>
            <img src="/sources/1.Dutinkove-polykarbonaty/7.jpg" alt="Lexan Thermoclick systém" />
          </div>
        </div>
      </Section>
    </>
  );
}

function PlnePolykarbonaty() {
  return (
    <>
      <ProductHero title="PLNÉ POLYKARBONÁTY" />
      <Section title="Rozdiel medzi plným Lexanom a plexisklom">
        <div className="legacy-product-content-wrapper">
          <div className="legacy-product-text">
            <p>
              Často sa stretávame, že naši zákazníci majú plné polykarbonáty a plexisklá za rovnaký
              materiál. Na prvý pohľad by sa to tak mohlo zdať, ale nieje to pravda.
            </p>
            <p>
              Plexisklo sa vyrába z polymetylmetakrylátu, známejšieho pod slovom ako akrylát. Akrylát
              je síce 5 krát pevnejší ako sklo ale stále krehkejší ako plný polykarbonát.
            </p>
            <p>
              Plný polykarbonát, vyrábaný z termoplastického materiálu, ktorý je mimoriadne odolný
              proti nárazom. Zasklievanie polykarbonátom sa v súčasnosti pokladá za najbezpečnejšie
              na svete.
            </p>
          </div>
          <ImageBlock src="/sources/2.Plne-polykarbonaty/1.jpg" alt="Porovnanie polykarbonátu a plexiskla" />
        </div>
        <div className="legacy-table-wrapper">
          <table className="legacy-data-table">
            <thead>
              <tr>
                <th>Vlastnosti</th>
                <th>Plný polykarbonát</th>
                <th>Plexisklo</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Nárazuvzdornosť", "Extrémne vysoká, 250 krát odolnšejší ako plexisklo", "Oveľa krehkejšie, pri bežnej manipulácíj môže puknúť"],
                ["Pevnosť", "Veľmi pevný a húževnatý materiál", "Tvrdý, môže sa lámať"],
                ["UV odolnosť", "UV stabilný z oboch strán platne", "Zvyčajne bez UV ochrany"],
                ["Tepelná odolnosť", "-40 °C až +120 °C", "cca -30 °C až +70 °C"],
                ["Opracovanie", "Dobre sa ohýba za studena a tvaruje za tepla, vŕta, frézuje", "Nemožnosť vŕtať (puká), rezanie je náročnejšie s väčšou šancou prasknutia"],
                ["Použitie", "Vhodné do exteriéru (prístrešky, kryty bazénov, zimné záhrady, svetlíky) a na bezpečnostné zasklievanie", "Vhodnejší do interiéru na použitie reklám, vitrín, dizajnových aplikicií"]
              ].map((row) => (
                <tr key={row[0]}>
                  <td>{row[0]}</td>
                  <td className="legacy-table-success">{row[1]}</td>
                  <td className="legacy-table-danger">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <p>
          Plné polykarbonáty ponúkame v značkách od svetoznámych výrobcov LEXAN™ pod označením
          EXELLD, švajčiarskej poprednej značky MACROLUX SOLID XL a švédskej firmy ARLA.
        </p>
      </Section>

      <Section title="Technické špecifikácie">
        <div className="legacy-product-content-wrapper">
          <div className="legacy-product-text">
            <div className="legacy-features-grid">
              <Feature title="HRÚBKY">
                <p>
                  <strong>Skladom:</strong> 3, 4, 5, 6, 8, 9,5 mm
                  <br />
                  <strong>Na objednávku:</strong> 2, 10, 12, 15 mm
                </p>
              </Feature>
              <Feature title="ŠTANDARDNÉ FARBY">
                <p>
                  • Číry priehľadný
                  <br />
                  • Bronzový hnedý
                  <br />
                  • Opálový mliečny
                  <br />• Šedý antracit
                </p>
              </Feature>
              <Feature title="ŠTANDARDNÉ ROZMERY PLATNÍ">
                <p>
                  <strong>Šírka:</strong> 2,05 m / 1,025 m
                  <br />
                  <strong>Dĺžky:</strong>
                  <br />• 3,05 m (skladom)
                  <br />• 3,6 / 4,6 / 6,1 m (na objednávku)
                </p>
              </Feature>
            </div>
          </div>
          <ImageBlock src="/sources/2.Plne-polykarbonaty/2.jpg" alt="Technické špecifikácie plných polykarbonátov" />
        </div>
      </Section>

      <Section title="Iné druhy plných polykarbonátov">
        <div className="legacy-features-grid legacy-grid-2">
          <Feature title="LEXAN™ MARGARD">
            <p>
              Špeciálna obojstranná povrchová úprava, zabezpečujúca ochranu proti povrchovému
              poškodeniu, bežným chemikáliám a sprejom (antigrafiti).
            </p>
            <img src="/sources/2.Plne-polykarbonaty/4.jpg" alt="Lexan Margard" />
          </Feature>
          <Feature title="LEXAN™ 9030">
            <p>
              Ide o kvalitný polykarbonát bez UV Ochrany, vhodný najmä do interiéru. Vynika vysokou
              priehľadnosťou a odolnosťou voči nárazom.
            </p>
            <img src="/sources/2.Plne-polykarbonaty/5.jpg" alt="Lexan 9030" />
          </Feature>
        </div>
      </Section>
    </>
  );
}

function HplBond() {
  return (
    <>
      <ProductHero title="KOMPAKTNÉ OBKLADOVÉ HPL PLATNE" />
      <Section title="Čo sú to HPL platne?">
        <p>
          HPL dosky (z angličtiny High Pressure Laminate) sú veľmi odolné a pevné dosky vyrábané
          lisovaním niekoľkých vrstiev papiera nasiaknutého živicami pri vysokej teplote a tlaku.
        </p>
        <p>
          Vrchná vrstva je dekoratívna a chránená odolnou melamínovou fóliou, ktorá zabezpečuje
          atraktívny vzhľad aj dlhodobú ochranu.
        </p>
        <div className="legacy-product-content-wrapper">
          <div className="legacy-product-text">
            <div className="legacy-features-grid">
              <Feature title="VLASTNOSTI">
                <p>• Vysoká mechanická pevnosť<br />• Odolnosť voči vlhkosti, UV žiareniu, chemikáliám<br />• Ľahká údržba<br />• Dlhá životnosť<br />• Rôzne dekory a povrchové úpravy</p>
              </Feature>
              <Feature title="POUŽITIE">
                <p>• Interiérový dizajn – kuchynské pracovné dosky, nábytok, steny<br />• Exteriér – fasády, balkónové zábradlia<br />• Sanitárne priestory – kabínky, deliace steny<br />• Doprava a priemysel – panely, podlahy, steny</p>
              </Feature>
            </div>
          </div>
          <ImageBlock src="/sources/3.HPL-dosky/obrazok-1.jpg" alt="HPL platne vlastnosti a použitie" />
        </div>
      </Section>
      <Section title="Technické špecifikácie">
        <div className="legacy-product-content-wrapper">
          <div className="legacy-catalog-stack">
            <div className="legacy-catalog-card legacy-catalog-dark">
              <h4>📄 KATALÓG SENOPLAN</h4>
              <p>Aktuálny vzorkovník a rozmery pre rok 2025 nájdete na stiahnutie tu:</p>
              <a href="/sources/3.HPL-dosky/senoplan-k-2024.pdf" target="_blank" rel="noreferrer">
                Stiahnuť vzorkovník PDF
              </a>
            </div>
            <div className="legacy-catalog-card">
              <h4>📋 KATALÓG KRONOART</h4>
              <p>Komplexný katalóg produktov Kronoart s technickými špecifikáciami a vzormi:</p>
              <a href="/sources/3.HPL-dosky/katalog-kronoart.pdf" target="_blank" rel="noreferrer">
                Stiahnuť katalóg PDF
              </a>
            </div>
          </div>
          <ImageBlock src="/sources/3.HPL-dosky/obrazok-3.jpg" alt="HPL technické špecifikácie" />
        </div>
      </Section>
      <Section title="KOMPOZITNÉ SENDVIČOVÉ PANELY BOND">
        <div className="legacy-product-content-wrapper">
          <div className="legacy-product-text">
            <p>
              Kompozitné sendvičové panely BOND predstavujú moderné a estetické riešenie pre fasády,
              interiéry aj reklamné aplikácie.
            </p>
            <div className="legacy-features-grid">
              <Feature title="VLASTNOSTI">
                <p>• Vysoká odolnosť voči poveternostným vplyvom a UV žiareniu<br />• Jednoduchá montáž a spracovanie<br />• Dlhá životnosť a farebná stálosť<br />• Nízka hmotnosť</p>
              </Feature>
              <Feature title="POUŽITIE">
                <p>• Prevetrávané fasády budov<br />• Obklady stĺpov a stien<br />• Dizajnové interiérové prvky<br />• Reklamné tabule, vývesky a totemy</p>
              </Feature>
            </div>
          </div>
          <ImageBlock src="/sources/3.HPL-dosky/obrazok-4.jpg" alt="Kompozitné BOND panely" />
        </div>
      </Section>
      <Section>
        <div className="legacy-product-content-wrapper">
          <div className="legacy-product-text">
            <p>
              Panely BOND sú ideálnou voľbou pre architektov, dizajnérov aj stavebné firmy, ktoré
              hľadajú spoľahlivý, estetický a trvácny materiál. Spájajú moderný vzhľad s praktickými
              vlastnosťami, vďaka čomu sa stali obľúbeným riešením v súčasnej výstavbe.
            </p>
            <p>
              V prípade záujmu o ďalšie informácie nás neváhajte{" "}
              <Link href="/kontakt" style={{ textDecoration: "underline", color: "#5a5a58" }}>
                kontaktovať
              </Link>
              .
            </p>
          </div>
          <ImageBlock src="/sources/3.HPL-dosky/obrazok-5.jpg" alt="BOND panely aplikácie" />
        </div>
      </Section>
    </>
  );
}

function Prislusenstvo() {
  return (
    <>
      <ProductHero title="VŠETKO PRE BEZCHYBNÚ MONTÁŽ LEXANU – SPOĽAHLIVÉ PRÍSLUŠENSTVO NA JEDNOM MIESTE">
        <p>
          Aby bol výsledok kvalitný, odolný a dlhodobo funkčný, nestačí len dobrý materiál –
          potrebujete aj správne príslušenstvo. U nás nájdete všetko, čo k profesionálnej montáži
          potrebujete.
        </p>
        <p>
          Bez správneho príslušenstva riskujete netesnosti, zatekanie alebo poškodenie dosiek.
          Ponúkame spoľahlivé komponenty, ktoré vám zaručia bezproblémovú montáž a dlhodobú
          spokojnosť.
        </p>
      </ProductHero>
      <Section title="Prehľad sortimentu">
        <AccessoryTabs />
      </Section>
      <div className="legacy-category-contact">
        <p>Pre viac info alebo iné profily nás neváhajte navštíviť alebo kontaktovať prostredníctvom mailu alebo tel. čísla</p>
        <Link href="/kontakt">Kontakty a pobočky →</Link>
      </div>
    </>
  );
}

function TrapezyVlnovky() {
  return (
    <>
      <ProductHero title="POLYKARBONÁTOVÉ TRAPÉZY A VLNOVKY">
        <p>
          Trapézy a vlnovky vyrobené z polykarbonátu sa vyznačujú vysokou odolnosťou a pružnosťou.
          Jednoduchá montáž na strešné laty bez použitia akýchkoľvek profilov len pomocou skrutiek a
          podložiek je jednou z mnohých predností tohto materiálu.
        </p>
        <p>
          Dostupné sú v transparentnom alebo bronzovom prevedení s povrchom typu „krupička". Táto
          úprava zabezpečuje lepší rozptyl svetla a zároveň zvyšuje odolnosť voči poškrabaniu.
        </p>
      </ProductHero>
      <div className="legacy-dual-images legacy-mt-40">
        <ImageBlock src="/sources/5.Trapezy-a-Vlnovky/fotka-1.jpg" alt="Trapézy detailný pohľad" />
        <ImageBlock src="/sources/5.Trapezy-a-Vlnovky/fotka-2.jpg" alt="Vlnovky detailný pohľad" />
      </div>
      <Section title="Technické špecifikácie">
        <div className="legacy-product-content-wrapper">
          <div className="legacy-product-text">
            <h4>Štandardné rozmery platní</h4>
            <div className="legacy-features-grid">
              <Feature title="HRÚBKA"><p><strong>Trapéz:</strong> 0,8 mm hrúbka<br /><br /><strong>Vlnovky:</strong><br />• 1,2 mm hrúbka<br />• 2,8 mm hrúbka</p></Feature>
              <Feature title="ŠÍRKA"><p><strong>Trapéz:</strong> 1060 mm<br /><br /><strong>Vlnovky:</strong><br />• 1260 mm (pri 1,2 mm hrúbke)<br />• 1045 mm (pri 2,8 mm hrúbke)</p></Feature>
              <Feature title="DĹŽKY"><p>2, 2,5, 3, 3,5, 4, 5, 6, 7 m<br /><br /><em>Dostupné pre všetky typy</em></p></Feature>
              <Feature title="ŠTANDARDNÉ FARBY"><p><strong>Základné:</strong><br />• Číra<br />• Hnedá bronzová<br /><br /><strong>Špeciálne prevedenie:</strong><br />• Solar Control Silver</p></Feature>
            </div>
          </div>
          <ImageBlock src="/sources/5.Trapezy-a-Vlnovky/obrazok-3.jpg" alt="Technické detaily trapézov a vlnoviek" />
        </div>
      </Section>
    </>
  );
}

function Skleniky() {
  return (
    <>
      <ProductHero title="KVALITNÉ POLYKARBONÁTOVÉ SKLENÍKY">
        <h3>Kvalita, odolnosť a jednoduchá montáž</h3>
        <p>
          Hľadáte spoľahlivý a odolný skleník, ktorý vám poskytne ideálne podmienky pre pestovanie
          počas celého roka? Ponúkame vám záhradné polykarbonátové skleníky, ktoré vynikajú svojou
          kvalitou a dlhou životnosťou v kombinácii so službou profesionálnej montáže. Spolupracou s
          našim dlhoročným a overeným partnerom NADOO s.r.o. získate komplexné riešenie bez starostí.
        </p>
      </ProductHero>
      <Section>
        <div className="legacy-product-content-wrapper">
          <div className="legacy-product-text">
            <h4>Kvalitné materiály pre maximálnu životnosť</h4>
            <p>
              Bežne dostupné skleníky sú vyrobené z menej kvalitného 4mm polykarbonátu, ktorý je UV
              stabilný len z jednej strany. Naše skleníky sú vyrobené z dutinkového polykarbonátu s
              hrúbkou 4,5 a na vyžiadanie aj 6mm, ktorý je UV stabilný z oboch strán, má o 20% vyššiu
              hmotnosť oproti 4mm polykarbonátu, tým pádom je jeho prevedenie kvalitnejšie, materiál
              pevnejší a má lepšie termoizolačné vlastnosti.
            </p>
            <p>
              Nemusíte sa obávať poškodenia pred slnečným žiarením – vaše rastliny budú chránené pred
              nebezpečným UV žiarením, zatiaľ čo vy si užijete bezstarostné pestovanie po dlhé roky.
            </p>
            <p>
              Nosná konštrukcia je vyrobená z hliníku, to umožňuje so skleníkom ľahkú manipuláciu a
              možnosťou jednoduchého prekladania. Skleník nepotrebuje žiadne základy, stačia vám
              úchytné kotvy, ktoré sú súčasťou skleníka.
            </p>
          </div>
          <ImageBlock src="/sources/6.Skleniky/obrazok-1.jpg" alt="Detaily skleníka" />
        </div>
        <div className="legacy-dual-images legacy-mt-40">
          <ImageBlock src="/sources/6.Skleniky/obrazok-2.jpg" alt="Konštrukcia skleníka" />
          <ImageBlock src="/sources/6.Skleniky/obrazok-3.jpg" alt="Montáž skleníka" />
        </div>
      </Section>
      <Section title="Technické parametre">
        <div className="legacy-features-grid">
          <Feature title="MATERIÁL"><p>• Dutinkový polykarbonát<br />• Hliníková konštrukcia<br />• UV stabilný z oboch strán</p></Feature>
          <Feature title="ŠÍRKA"><p>• 2,5 m<br />• 3 m<br />• Možnosť prispôsobenia na mieru</p></Feature>
          <Feature title="DĹŽKA"><p>2, 3, 4, 5, 6 m<br /><br /><em>Štandardné rozmery</em></p></Feature>
        </div>
      </Section>
      <Section title="Prečo si vybrať práve nás?">
        <div className="legacy-features-grid">
          <Feature title="KVALITNÝ MATERIÁL" tone="success"><p>Odolný 4,5 mm a 6 mm UV stabilný polykarbonát</p></Feature>
          <Feature title="KONŠTRUKCIA" tone="info"><p>Kvalitná hliníková konštrukcia bez hrdzе</p></Feature>
          <Feature title="PROFESIONÁLNA MONTÁŽ" tone="warning"><p>Možnosť profesionálnej montáže</p></Feature>
          <Feature title="RÝCHLE DODANIE" tone="purple"><p>Rýchle dodanie a individuálny prístup</p></Feature>
          <Feature title="UNIVERZÁLNE POUŽITIE" tone="green"><p>Ideálne riešenie pre záhradkárov aj profesionálov</p></Feature>
        </div>
      </Section>
      <Section>
        <p>
          Ponúkame skleníky v štandardných rozmeroch, ale ako výrobca vieme rozmery upravovať na
          želanie zákazníka. Nevyrábame iba oblukové skleníky, ale vieme vyrobiť aj atypické rozmery
          so šikmou strechou.
        </p>
        <div className="legacy-red-cta">
          <h4>🏡 DOPRAJTE SVOJEJ ZÁHRADE KVALITNÝ SKLENÍK</h4>
          <p>
            Pre nezáväznú cenovú ponuku alebo informácie o dostupných modeloch a veľkostiach
            neváhajte kontaktovať nášho partnera NADOO s.r.o.
          </p>
          <div>
            <a href="https://nadoo.sk" target="_blank" rel="noreferrer">🌐 Navštíviť NADOO.sk</a>
            <Link href="/kontakt">📞 Kontaktovať nás</Link>
          </div>
        </div>
      </Section>
    </>
  );
}

export function LegacyProductDetail({ productKey }: { productKey: ProductKey }) {
  switch (productKey) {
    case "dutinkove-polykarbonaty":
      return <DutinkovePolykarbonaty />;
    case "plne-polykarbonaty":
      return <PlnePolykarbonaty />;
    case "hpl-bond-dosky":
      return <HplBond />;
    case "prislusenstvo":
      return <Prislusenstvo />;
    case "trapezy-vlnovky":
      return <TrapezyVlnovky />;
    case "skleniky":
      return <Skleniky />;
    default:
      return null;
  }
}
