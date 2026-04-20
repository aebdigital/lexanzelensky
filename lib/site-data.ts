export type ProductKey =
  | "dutinkove-polykarbonaty"
  | "plne-polykarbonaty"
  | "hpl-bond-dosky"
  | "prislusenstvo"
  | "trapezy-vlnovky"
  | "skleniky";

export type ProductSection = {
  title: string;
  text: string[];
  image?: string;
  list?: string[];
  links?: { label: string; href: string }[];
};

export type ProductCategory = {
  key: ProductKey;
  name: string;
  pageTitle?: string;
  shortDescription: string;
  heroImage: string;
  teaserImage: string;
  heroLabel: string;
  intro: string[];
  highlights: string[];
  gallery: string[];
  sections: ProductSection[];
};

export type Branch = {
  key: "trnava" | "senec" | "piestany";
  city: string;
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
};

export const navigation = [
  { href: "/", label: "Domov" },
  { href: "/o-nas", label: "O nás" },
  { href: "/produkty", label: "Produkty" },
  { href: "/sluzby", label: "Služby" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" }
] as const;

export const homeHeroImages = [
  "/sources/Uvodna-stranka/Posuvacia-cast-2.jpg",
  "/sources/Uvodna-stranka/Posuvacia-cast-1.jpg",
  "/sources/Uvodna-stranka/Posuvacia-cast-3.jpeg"
];

export const stats = [
  { value: "23+", label: "rokov skúseností" },
  { value: "3", label: "aktívne pobočky" },
  { value: "SK", label: "doprava po celom Slovensku" }
];

export const partnerLogos = [
  { name: "Cutmakers", href: "https://www.cutmakers.sk/", image: "/partneri/cutmakers.png" },
  { name: "NADOO", href: "https://www.nadoo.sk/", image: "/partneri/NADOO sro logo .png" },
  { name: "Homemakers", href: "https://www.homemakers.sk/", image: "/partneri/homemakers.png" }
];

export const branches: Branch[] = [
  {
    key: "trnava",
    city: "Trnava",
    address: "Suchovská cesta 12",
    phone: "+421 905 504 756",
    email: "zelenskystefan@gmail.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.123!2d17.5672411!3d48.3875424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f17!3m3!1m2!1s0x476ca0f2b83640c5%3A0x9a72e88f4ec5cc5b!2sLEXAN%20ZELENSK%C3%9D!5e0!3m2!1sen!2sus!4v1704067400000!5m2!1sen!2sus"
  },
  {
    key: "senec",
    city: "Senec",
    address: "Fučíkova 8",
    phone: "+421 917 323 441",
    email: "zelenskysenec@gmail.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.988!2d17.4072609!3d48.2207027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f17!3m3!1m2!1s0x476c9ceb05cc2067%3A0xd39dfa206e9fc66d!2sLEXAN%20Zelensk%C3%BD%20s.r.o.%20-%20Senec!5e0!3m2!1sen!2sus!4v1704067500000!5m2!1sen!2sus"
  },
  {
    key: "piestany",
    city: "Piešťany",
    address: "Rekreačná 3",
    phone: "+421 948 442 156",
    email: "zelenskypiestany@gmail.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.346!2d17.8174863!3d48.5746797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f17.53!3m3!1m2!1s0x476b54f2ce58794b%3A0xefcc9dd7245ed679!2sLEXAN%20Zelensk%C3%BD%20s.r.o.%20-%20Pie%C5%A1%C5%A5any!5e0!3m2!1sen!2sus!4v1704067600000!5m2!1sen!2sus"
  }
];

export const products: ProductCategory[] = [
  {
    key: "dutinkove-polykarbonaty",
    name: "Dutinkové polykarbonáty",
    pageTitle: "Dutinkový polykarbonát",
    shortDescription:
      "Vysokokvalitné dutinkové polykarbonátové platne pre rôzne aplikácie. Výborná izolácia, odolnosť a svetelnost pre skleníky, pergoly a fasády.",
    heroImage: "/sources/1.Dutinkove-polykarbonaty/Fotka-za-nazvom.jpg",
    teaserImage: "/sources/Uvodna-stranka/uvod-Dutinkove-Polykarbonaty.jpg",
    heroLabel: "LEXAN® Thermoclear Plus",
    intro: [
      "Dutinkový Lexan",
      "Dutinkový polykarbonát môžete poznať pod jednoduchším názvom Lexan. Ide o platne vyrobené z vysokokvalitného termoplastického materiálu nazývaného polykarbonát. Ponúkajú skvelú kombináciu nízkej hmotnosti pri vysokej tuhosti, výborné tepelnoizolačné vlastnosti a v hlavnom rade vysokú priepustnosť svetla.",
      "Používajú sa v stavebníctve odvetví na prekrytie prístreškov, bazénov, svetlíkov, skleníkov a zimných záhrad.",
      "PONÚKAME NEODĽAHČENÉ POLYKARBONÁTY V PLNEJ KVALITE!",
      "Často sa stretávame s rôznymi napodobeninami dutinkových polykarbonátov u ktorých je uvedená výrazne menšia cena. Háčikom je nižšia hmotnosť na m2. Pri 10mm hrúbke je neodľahčená originálna hmotnosť 1,7 kg na m2. Tieto napodobeniny môžu mať hmotnosť len 1,3kg na m2. Stávajú sa tým konštrukčne nestabilnými a často nevydržia nápor vetra a snehu. Detailnejšie sa tejto problematike venujeme na následujúcom odkaze tu."
    ],
    highlights: [],
    gallery: [],
    sections: [
      {
        title: "LEXAN® (Thermoclear*Plus)",
        text: [
          "Značka LEXAN® (Thermoclear*Plus) je popredným výrobcom týchto polykarbonátových platní, u ktorej nájdete široký výber hrúbok, farieb a rozmerov dutinkových polykarbonátov. Tieto platne od výroby disponujú obojstrannou ochranou proti UV žiareniu, tým pádom vekom nestrácajú farebnosť, udržujú si maximálnu kvalitovú stálosť a mechanickú odolnosť voči nárazom."
        ],
        image: "/sources/1.Dutinkove-polykarbonaty/1.jpg"
      },
      {
        title: "TECHNICKÉ ŠPECIFIKÁCIE",
        text: ["Vlastnosti:"],
        list: [
          "• Vysoká priepustnosť svetla",
          "• Obojstranný UV filter, ochrana pred poveternostnými vplyvmi",
          "• Vysoká nárazová odolnosť",
          "• Nízka hmotnosť, jednoduchá manipulácia, spracovateľnosť a inštalácia",
          "• Stálosť od –40 °C do +120 °C"
        ]
      },
      {
        title: "HRÚBKY A ROZMERY",
        text: [
          "Hrúbky: 4mm - (Len 1UV), (2UV) – 4.5, 6, 8, 10, 16, 20, 25mm",
          "Štandardné farby: číry, opálový mliečny, hnedý bronz, IR Green",
          "Štandardné rozmery platní:"
        ],
        list: [
          "• Šírka: 1,05 a 2,1m (pri 10mm hrúbke aj 1,2 a 1,5m)",
          "• Dĺžka: 3, 3,5, 4, 4,5, 5, 6 a 7m"
        ],
        image: "/sources/1.Dutinkove-polykarbonaty/2.jpg"
      },
      {
        title: "DRUHY ŠTRUKTÚR",
        text: [
          "4-8 mm: jednokomorová varianta",
          "Od 10mm hrúbky: ponúkame špeciálne tepelnoizolačné štruktúry značky LEXAN® (Thermoclear*Plus) vhodné pre svetlíky priemyselných hál, zimných záhrad a vykurovaných priestorov."
        ],
        image: "/sources/1.Dutinkove-polykarbonaty/3.jpg"
      },
      {
        title: "ŠPECIÁLNE POLYKARBONÁTY",
        text: [
          "ARLA SOLAR CONTROL GREY a SOLAR CONTROL TRANSPARENT",
          "Švédska značka ARLA ponúka špeciálnu technológiu Solar Control. SOLAR CONTROL GREY a SOLAR CONTROL TRANSPARENT sú dosky s nižšou priepustnosťou slnečného žiarenia a nižším prenikaním tepelného žiarenia do zaskleného objektu. Použitím kombinácie špeciálnych aditív a pigmentov bolo dosiahnuté zníženie prieniku infračerveného žiarenia a tým prílišnému prehriatiu interiéru. Vďaka tomu si dosky zachovávajú vlastnosti tlmiace tepelné žiarenie počas celej životnosti dosiek.",
          "Významne znižujú prepúšťanie žiarenia v oblasti infračervenej časti spektra, t.j. minimalizujú skleníkový efekt.",
          "Prednosti dutinkového polykarbonátu SOLAR CONTROL GREY a SOLAR CONTROL TRANSPARENT:"
        ],
        list: [
          "• Poskytuje príjemnú chladnú atmosféru",
          "• Moderný vzhľad, šedostrieborný odtieň",
          "• Vysoká odolnosť voči ohňu",
          "• Výrazné zníženie IR žiarenia",
          "• Zabráňuje prílišnému prehriatiu interiéru"
        ],
        image: "/sources/1.Dutinkove-polykarbonaty/SOLAR CONTROL GREY .jpg"
      },
      {
        title: "IR GREEN",
        text: [
          "Lexan IR GREEN funguje na podobnom princípe ako platne Solar Control Grey. Vyznačuje sa vysokou priepustnosťou slnečného žiarenia s kombináciou nízkej priepustnosti tepelného žiarenia. Pigmentová prímes, ktorá tlmí tepelné žiarenie je obsiahnutá priamo v materiáli, z ktorého sú dosky vyrobené. Vďaka tomu si dosky Lexan™ Solar Control™ IR zachovávajú vlastnosti tlmiace tepelné žiarenie počas celej životnosti dosiek."
        ],
        image: "/sources/1.Dutinkove-polykarbonaty/6.jpg"
      },
      {
        title: "LEXAN THERMOCLICK",
        text: [
          "Kombinácia vynikajúcich vlastností komôrkových dosiek s veľmi výhodným systémom inštalácie. Dosky sa vzájomne spájajú na spôsob pera a drážky, čo umožňuje vytvárať hladké zasklené plochy bez rušivých spojov."
        ],
        image: "/sources/1.Dutinkove-polykarbonaty/7.jpg"
      }
    ]
  },
  {
    key: "plne-polykarbonaty",
    name: "Plné polykarbonáty",
    pageTitle: "PLNÉ POLYKARBONÁTY",
    shortDescription:
      "Plné polykarbonátové dosky s vysokými mechanickými vlastnosťami. Ideálne pre náročné aplikácie vyžadujúce maximálnu pevnosť a priehladnosť.",
    heroImage: "/sources/2.Plne-polykarbonaty/Obrazok-za-hlavnym-nadpisom.jpg",
    teaserImage: "/sources/Uvodna-stranka/uvod-Plne-polykarbonaty.jpg",
    heroLabel: "Plný Lexan",
    intro: [
      "Rozdiel medzi plným Lexanom a plexisklom",
      "Často sa stretávame, že naši zákazníci majú plné polykarbonáty a plexisklá za rovnaký materiál. Na prvý pohľad by sa to tak mohlo zdať, ale nieje to pravda.",
      "Plexisklo sa vyrába z polymetylmetakrylátu, známejšieho pod slovom ako akrylát. Akrylát je síce 5 krát pevnejší ako sklo ale stále krehkejší ako plný polykarbonát.",
      "Plný polykarbonát, vyrábaný z termoplastického materiálu, ktorý je mimoriadne odolný proti nárazom. Zasklievanie polykarbonátom sa v súčasnosti pokladá za najbezpečnejšie na svete. Tieto plné polykarbonáty sú prakticky nerozbitné, disponujú vysokou odolnosťou voči teplu vysokou priehľadnosťou (až 90% svetla), pri vŕtaní nepraská a má lepšiu chemickú odolnosť."
    ],
    highlights: [],
    gallery: [],
    sections: [
      {
        title: "Vlastnosti",
        text: [
          "Plný polykarbonát / Plexisklo",
          "Nárazuvzdornosť: Extrémne vysoká, 250 krát odolnšejší ako plexisklo / Oveľa krehkejšie, pri bežnej manipulácíj môže puknúť",
          "Pevnosť: Veľmi pevný a húževnatý materiál / Tvrdý, môže sa lámať",
          "UV odolnosť: UV stabilný z oboch strán platne / Zvyčajne bez UV ochrany",
          "Tepelná odolnosť: -40 °C až +120 °C / cca -30 °C až +70 °C",
          "Opracovanie: Dobre sa ohýba za studena a tvaruje za tepla, vŕta, frézuje / Nemožnosť vŕtať (puká), rezanie je náročnejšie s väčšou šancou prasknutia",
          "Použitie: Vhodné do exteriéru (prístrešky, kryty bazénov, zimné záhrady, svetlíky) a na bezpečnostné zasklievanie (športové štadióny, bilboardy, automaty) / Vhodnejší do interiéru na použitie reklám, vitrín, dizajnových aplikicií",
          "Plné polykarbonáty ponúkame v značkách od svetoznámych výrobcov LEXAN™ pod označením EXELLD, švajčiarskej poprednej značky MACROLUX SOLID XL a švédskej firmy ARLA. Všetky tieto značky sú našimi dlhodobými a overenými partnermi, ktoré disponujú overenou kvalitou."
        ],
        image: "/sources/2.Plne-polykarbonaty/1.jpg"
      },
      {
        title: "Technické špecifikácie",
        text: [
          "HRÚBKY",
          "Skladom: 3, 4, 5, 6, 8, 9,5 mm",
          "Na objednávku: 2, 10, 12, 15 mm",
          "ŠTANDARDNÉ FARBY"
        ],
        list: [
          "• Číry priehľadný",
          "• Bronzový hnedý",
          "• Opálový mliečny",
          "• Šedý antracit",
          "ŠTANDARDNÉ ROZMERY PLATNÍ",
          "Šírka: 2,05 m / 1,025 m",
          "Dĺžky: • 3,05 m (skladom) • 3,6 / 4,6 / 6,1 m (na objednávku)"
        ],
        image: "/sources/2.Plne-polykarbonaty/2.jpg"
      },
      {
        title: "Iné druhy plných polykarbonátov",
        text: [
          "LEXAN™ MARGARD",
          "Špeciálna obojstranná povrchová úprava, zabezpečujúca ochranu proti povrchovému poškodeniu, bežným chemikáliám a sprejom (antigrafiti). Bol vyvinutí na ochranu pracovných miest, objektov, ktoré je potreba zabezpečiť pred drsným okolím ako sú rôzne kryty vysokotlakových strojov, dopravná technika alebo bezpečnostné presklenia či vytríny.",
          "LEXAN™ 9030",
          "Ide o kvalitný polykarbonát bez UV Ochrany, vhodný najmä do interiéru. Vynika vysokou priehľadnosťou a odolnosťou voči nárazom. Vďaka svojej húževnatosti sa dá ohýbať za studena a tvarovať za tepla a preto si nájde svoje uplatnenie aj v priemysle na výrobu ochranných krytov alebo komponentov strojov."
        ],
        image: "/sources/2.Plne-polykarbonaty/4.jpg"
      }
    ]
  },
  {
    key: "hpl-bond-dosky",
    name: "HPL a Bond dosky",
    pageTitle: "KOMPAKTNÉ OBKLADOVÉ HPL PLATNE",
    shortDescription:
      "Vysokokvalitné HPL a Bond dosky pre vonkajšie aj vnútorné použitie. Výborná odolnosť proti počasiu a mechanickému poškodeniu.",
    heroImage: "/sources/3.HPL-dosky/obrazok-za-hlavnym-nadpisom.jpg",
    teaserImage: "/sources/Uvodna-stranka/uvod-HPL-a-Bond-platne.jpg",
    heroLabel: "Odolné obkladové riešenia",
    intro: [
      "Čo sú to HPL platne?",
      "HPL dosky (z angličtiny High Pressure Laminate) sú veľmi odolné a pevné dosky vyrábané lisovaním niekoľkých vrstiev papiera nasiaknutého živicami pri vysokej teplote a tlaku. Vyznačujú sa tvrdým povrchom, vysokou odolnosťou proti poškriabaniu, vlhkosti, chemikáliám a mechanickému opotrebovaniu.",
      "Vrchná vrstva je dekoratívna a chránená odolnou melamínovou fóliou, ktorá zabezpečuje atraktívny vzhľad aj dlhodobú ochranu.",
      "Sú ideálnou voľbou pre projekty, kde je dôležitá kombinácia odolnosti, funkčnosti a dizajnu. Vďaka ich univerzálnosti a dlhej životnosti si našli uplatnenie v rôznych typoch stavieb — od bytových domov až po nemocnice či administratívne budovy."
    ],
    highlights: [],
    gallery: [],
    sections: [
      {
        title: "VLASTNOSTI",
        text: [],
        list: [
          "• Vysoká mechanická pevnosť",
          "• Odolnosť voči vlhkosti, UV žiareniu, chemikáliám",
          "• Ľahká údržba",
          "• Dlhá životnosť",
          "• Rôzne dekory a povrchové úpravy (matné, lesklé, štruktúrované)"
        ],
        image: "/sources/3.HPL-dosky/obrazok-1.jpg"
      },
      {
        title: "POUŽITIE",
        text: [],
        list: [
          "• Interiérový dizajn – kuchynské pracovné dosky, nábytok, steny",
          "• Exteriér – fasády, balkónové zábradlia",
          "• Sanitárne priestory – kabínky, deliace steny",
          "• Doprava a priemysel – panely, podlahy, steny"
        ]
      },
      {
        title: "Technické špecifikácie",
        text: [
          "📄 KATALÓG SENOPLAN",
          "Aktuálny vzorkovník a rozmery pre rok 2025 nájdete na stiahnutie tu:",
          "📋 KATALÓG KRONOART",
          "Komplexný katalóg produktov Kronoart s technickými špecifikáciami a vzormi:"
        ],
        links: [
          { label: "Stiahnuť vzorkovník PDF", href: "/sources/3.HPL-dosky/senoplan-K-2024.pdf" },
          { label: "Stiahnuť katalóg PDF", href: "/sources/3.HPL-dosky/Katalog Kronoart .pdf" }
        ],
        image: "/sources/3.HPL-dosky/obrazok-3.jpg"
      },
      {
        title: "KOMPOZITNÉ SENDVIČOVÉ PANELY BOND",
        text: [
          "Kompozitné sendvičové panely BOND predstavujú moderné a estetické riešenie pre fasády, interiéry aj reklamné aplikácie. Vďaka svojej konštrukcii — zložené z dvoch hliníkových plechov a jadra z polyetylénu alebo minerálneho materiálu — ponúkajú výnimočnú pevnosť pri nízkej hmotnosti."
        ],
        image: "/sources/3.HPL-dosky/obrazok-4.jpg"
      },
      {
        title: "VLASTNOSTI",
        text: [],
        list: [
          "• Vysoká odolnosť voči poveternostným vplyvom a UV žiareniu",
          "• Jednoduchá montáž a spracovanie",
          "• Dlhá životnosť a farebná stálosť",
          "• Nízka hmotnosť v porovnaní s klasickými kovovými materiálmi",
          "• Široká škála farieb a povrchových úprav"
        ]
      },
      {
        title: "POUŽITIE",
        text: [
          "Panely BOND sú ideálnou voľbou pre architektov, dizajnérov aj stavebné firmy, ktoré hľadajú spoľahlivý, estetický a trvácny materiál. Spájajú moderný vzhľad s praktickými vlastnosťami, vďaka čomu sa stali obľúbeným riešením v súčasnej výstavbe.",
          "V prípade záujmu o ďalšie informácie nás neváhajte kontaktovať."
        ],
        list: [
          "• Prevetrávané fasády budov",
          "• Obklady stĺpov a stien",
          "• Dizajnové interiérové prvky",
          "• Reklamné tabule, vývesky a totemy",
          "• Renovácia starších objektov"
        ],
        image: "/sources/3.HPL-dosky/obrazok-5.jpg"
      }
    ]
  },
  {
    key: "prislusenstvo",
    name: "Príslušenstvo",
    pageTitle: "Príslušenstvo",
    shortDescription:
      "Kompletné príslušenstvo pre montáž polykarbonátov - profily, tesniace pásy, spojo-vacie prvky a montážne materiály.",
    heroImage: "/sources/4.Prislusenstvo/Fotka-za-hlavnym-nadpisom.jpeg",
    teaserImage: "/sources/Uvodna-stranka/uvod-Prislusenstvo.jpg",
    heroLabel: "Všetko pre montáž na jednom mieste",
    intro: [
      "Aby bol výsledok kvalitný, odolný a dlhodobo funkčný, nestačí len dobrý materiál – potrebujete aj správne príslušenstvo. U nás nájdete všetko, čo k profesionálnej montáži potrebujete.",
      "Bez správneho príslušenstva riskujete netesnosti, zatekanie alebo poškodenie dosiek. Ponúkame spoľahlivé komponenty, ktoré vám zaručia bezproblémovú montáž a dlhodobú spokojnosť."
    ],
    highlights: [],
    gallery: [],
    sections: [
      {
        title: "Prehľad sortimentu",
        text: [],
        list: [
          "Hliníkové profily",
          "Plastové polykarbonátové profily",
          "Spodné a tesniace gumové pásy",
          "Spojovacie príslušenstvo"
        ],
        image: "/sources/4.Prislusenstvo/Hliníkove-profily.png"
      },
      {
        title: "Hliníkové profily",
        text: ["Obrázok / Názov profilu / Dostupná farba / Dostupné rozmery (m)"],
        list: [
          "Prítlačná lišta 60mm / Bez povrchovej úpravy, bronz elox, antracit šedý / 2, 3, 3,5, 4, 5, 7",
          "Prítlačná lišta 50mm / Bez povrchovej úpravy / 2, 3, 3,5, 4, 5, 7",
          "H profil 10mm a 16mm / Bez povrchovej úpravy / 2, 3, 6",
          "F Profil 6, 8, 10, 16mm / Bez povrchovej úpravy, bronz elox, antracit šedý / 2,133, 3,20, 4,266, 6,40",
          "U profil 6, 8 mm / Bez povrchovej úpravy / 2, 3, 6",
          "U profil 10, 16mm / Strieborný elox, bronz elox / 2,133, 3,20, 4,266, 6,40",
          "Nástenný S Profil / Bez povrchovej úpravy, bronz elox, antracit šedý / 2,133, 3,20, 4,266, 6,40",
          "L Profil 15x15, 20x20, 25x25, 30x30, 40x20, 40x40 / Bez povrchovej úpravy / 2, 3, 6",
          "Pásovina 30 a 40mm / Bez povrchovej úpravy / 2, 3, 6"
        ]
      },
      {
        title: "Plastové polykarbonátové profily",
        text: ["Obrázok / Názov profilu / Dostupné rozmery (m)"],
        list: [
          "U profil PC 4,6,8,10 a 16mm / 2,1m",
          "H profil PC 4,6,8,10 a 16mm (Pri 10 a 16mm verziách sú profily dostupné aj v prevedení hnedý bronz) / 2, 3, 4 a 6"
        ]
      },
      {
        title: "Spodné a tesniace gumové pásy",
        text: ["Obrázok / Názov / Dostupnosť"],
        list: [
          "Tesnenie do prítlačnej lišty 60mm / Bežné metre",
          "Tesnenie do prítlačnej lišty 50mm / Bežné metre",
          "Spodná guma 50, 60 a 80mm / Bežné metre",
          "Tesnenie do nástenného S Profilu / Bežné metre",
          "Tesniaca páska s filtrom 28/38mm / Bežné metre",
          "Tesniaca páska bez filtra 28/38mm / Bežné metre"
        ]
      },
      {
        title: "Spojovacie príslušenstvo",
        text: ["Obrázok / Názov / Rozmery"],
        list: [
          "Vrut do dreva / 40, 50, 60 a 70mm",
          "Tex samorezný / 25, 32, 38, 45, 50 a 60mm",
          "Podložka malá a veľká / -",
          "Podložka nerezová / -",
          "Silikón Sikacil C 300ml / 300ml",
          "FIX Lepidlo 290ml, transparent / 290ml"
        ]
      },
      {
        title: "",
        text: [
          "Pre viac info alebo iné profily nás neváhajte navštíviť alebo kontaktovať prostredníctvom mailu alebo tel. čísla"
        ],
        links: [{ label: "Kontakty a pobočky →", href: "/kontakt" }]
      }
    ]
  },
  {
    key: "trapezy-vlnovky",
    name: "Trapézy a Vlnovky",
    pageTitle: "POLYKARBONÁTOVÉ TRAPÉZY A VLNOVKY",
    shortDescription:
      "Polykarbonátové trapézy a vlnovky pre streché, pergoly a tieňovacie systémy. Rôzne profily a hrubky podľa požiadaviek.",
    heroImage: "/sources/5.Trapezy-a-Vlnovky/fotka-za-hlavny-nadpis.jpg",
    teaserImage: "/sources/Uvodna-stranka/uvod-Trapezy-a-Vlnovky.jpg",
    heroLabel: "Svetlo, krytie a nízka hmotnosť",
    intro: [
      "Trapézy a vlnovky vyrobené z polykarbonátu sa vyznačujú vysokou odolnosťou a pružnosťou. Jednoduchá montáž na strešné laty bez použitia akýchkoľvek profilov len pomocou skrutiek a podložiek je jednou z mnohých predností tohto materiálu.",
      "Dostupné sú v transparentnom alebo bronzovom prevedení s povrchom typu „krupička\". Táto úprava zabezpečuje lepší rozptyl svetla a zároveň zvyšuje odolnosť voči poškrabaniu. Medzi hlavné výhody týchto dosiek patrí ich nízka hmotnosť, mimoriadna odolnosť voči nárazom a krupobitiu, dlhá životnosť a schopnosť odolávať extrémnym teplotám."
    ],
    highlights: [],
    gallery: [],
    sections: [
      {
        title: "Technické špecifikácie",
        text: [
          "Štandardné rozmery platní",
          "HRÚBKA",
          "Trapéz: 0,8 mm hrúbka",
          "Vlnovky: • 1,2 mm hrúbka • 2,8 mm hrúbka",
          "ŠÍRKA",
          "Trapéz: 1060 mm",
          "Vlnovky: • 1260 mm (pri 1,2 mm hrúbke) • 1045 mm (pri 2,8 mm hrúbke)",
          "DĹŽKY",
          "2, 2,5, 3, 3,5, 4, 5, 6, 7 m",
          "Dostupné pre všetky typy",
          "ŠTANDARDNÉ FARBY"
        ],
        list: [
          "Základné: • Číra • Hnedá bronzová",
          "Špeciálne prevedenie: • Solar Control Silver (dostupné pri trapézoch)"
        ],
        image: "/sources/5.Trapezy-a-Vlnovky/fotka 1.jpg"
      }
    ]
  },
  {
    key: "skleniky",
    name: "Skleníky",
    pageTitle: "KVALITNÉ POLYKARBONÁTOVÉ SKLENÍKY",
    shortDescription:
      "Kompletné skleníky z polykarbonátových panelov. Odborná montáž a servis. Ideálne pre pestovacie účely a ochranu rastlín.",
    heroImage: "/sources/6.Skleniky/fotka-za-hlavnym-nadpisom.jpg",
    teaserImage: "/sources/Uvodna-stranka/uvod-skleniky.jpg",
    heroLabel: "Skleníky s dôrazom na kvalitu materiálu",
    intro: [
      "Kvalita, odolnosť a jednoduchá montáž",
      "Hľadáte spoľahlivý a odolný skleník, ktorý vám poskytne ideálne podmienky pre pestovanie počas celého roka? Ponúkame vám záhradné polykarbonátové skleníky, ktoré vynikajú svojou kvalitou a dlhou životnosťou v kombinácii so službou profesionálnej montáže. Spolupracou s našim dlhoročným a overeným partnerom NADOO s.r.o. získate komplexné riešenie bez starostí.",
      "Kvalitné materiály pre maximálnu životnosť",
      "Bežne dostupné skleníky sú vyrobené z menej kvalitného 4mm polykarbonátu, ktorý je UV stabilný len z jednej strany. Naše skleníky sú vyrobené z dutinkového polykarbonátu s hrúbkou 4,5 a na vyžiadanie aj 6mm, ktorý je UV stabilný z oboch strán, má o 20% vyššiu hmotnosť oproti 4mm polykarbonátu, tým pádom je jeho prevedenie kvalitnejšie, materiál pevnejší a má lepšie termoizolačné vlastnosti.",
      "Nemusíte sa obávať poškodenia pred slnečným žiarením – vaše rastliny budú chránené pred nebezpečným UV žiarením, zatiaľ čo vy si užijete bezstarostné pestovanie po dlhé roky.",
      "Nosná konštrukcia je vyrobená z hliníku, to umožňuje so skleníkom ľahkú manipuláciu a možnosťou jednoduchého prekladania. Skleník nepotrebuje žiadne základy, stačia vám úchytné kotvy, ktoré sú súčasťou skleníka."
    ],
    highlights: [],
    gallery: [],
    sections: [
      {
        title: "Technické parametre",
        text: ["MATERIÁL"],
        list: [
          "• Dutinkový polykarbonát",
          "• Hliníková konštrukcia",
          "• UV stabilný z oboch strán",
          "ŠÍRKA",
          "• 2,5 m",
          "• 3 m",
          "• Možnosť prispôsobenia na mieru",
          "DĹŽKA",
          "2, 3, 4, 5, 6 m",
          "Štandardné rozmery"
        ],
        image: "/sources/6.Skleniky/obrazok 5.jpg"
      },
      {
        title: "Prečo si vybrať práve nás?",
        text: [],
        list: [
          "KVALITNÝ MATERIÁL: Odolný 4,5 mm a 6 mm UV stabilný polykarbonát",
          "KONŠTRUKCIA: Kvalitná hliníková konštrukcia bez hrdzе",
          "PROFESIONÁLNA MONTÁŽ: Možnosť profesionálnej montáže",
          "RÝCHLE DODANIE: Rýchle dodanie a individuálny prístup",
          "UNIVERZÁLNE POUŽITIE: Ideálne riešenie pre záhradkárov aj profesionálov"
        ]
      },
      {
        title: "",
        text: [
          "Ponúkame skleníky v štandardných rozmeroch, ale ako výrobca vieme rozmery upravovať na želanie zákazníka. Nevyrábame iba oblukové skleníky, ale vieme vyrobiť aj atypické rozmery so šikmou strechou, kde sa používajú hrubšie materiály ako pri oblúkových.",
          "🏡 DOPRAJTE SVOJEJ ZÁHRADE KVALITNÝ SKLENÍK",
          "Pre nezáväznú cenovú ponuku alebo informácie o dostupných modeloch a veľkostiach neváhajte kontaktovať nášho partnera NADOO s.r.o., kde nájdete bližšie informácie. Radi vám pomôžeme vybrať to najlepšie riešenie pre vaše potreby."
        ],
        links: [
          { label: "🌐 Navštíviť NADOO.sk", href: "https://nadoo.sk" },
          { label: "📞 Kontaktovať nás", href: "/kontakt" }
        ]
      }
    ]
  }
];

export const aboutSections = [
  {
    title: "Kto sme",
    text: [
      "Viac ako 23 rokov sa venujeme predaju, distribúcii a poradenstvu pri dutinkových a plných polykarbonátových systémoch značiek LEXAN® a ARLA.",
      "Zákazníkom pomáhame od prvotnej orientácie v sortimente až po výber vhodného príslušenstva, rezanie na mieru a odporúčanie montážneho postupu."
    ],
    image: "/sources/new.jpg"
  },
  {
    title: "Kvalita a certifikácia",
    text: [
      "Stojíme na materiáloch, ktoré patria medzi osvedčenú špičku v segmente 100% polykarbonátu. Dôraz kladieme na UV stabilitu, mechanickú odolnosť a dlhodobú spoľahlivosť v exteriéri.",
      "Technické listy, katalógy a vyhlásenia o zhode vieme poskytnúť podľa konkrétneho produktu."
    ],
    image: "/sources/6.Skleniky/fotka-za-hlavnym-nadpisom.jpg"
  },
  {
    title: "Montáž a logistika",
    text: [
      "Okrem materiálu zabezpečujeme aj odborné poradenstvo k montáži a pri vybraných projektoch aj samotnú realizáciu na hotových konštrukciách.",
      "Materiál vieme doručiť po celom Slovensku, najmä v okolí Trnavy, Senca, Piešťan a Bratislavy."
    ],
    image: "/sources/5.Trapezy-a-Vlnovky/fotka-za-hlavny-nadpis.jpg"
  }
] as const;

export const serviceBlocks = [
  {
    title: "Predaj a distribúcia materiálu",
    copy:
      "Dodávame dutinkové a plné polykarbonáty, HPL dosky, trapézy, vlnovky a kompletné montážne príslušenstvo. Materiál vieme pripraviť na mieru podľa projektu.",
    image: "/sources/1.Dutinkove-polykarbonaty/Fotka-za-nazvom.jpg"
  },
  {
    title: "Odborné poradenstvo",
    copy:
      "Pomáhame s výberom správneho typu platne, vhodnej hrúbky, príslušenstva aj spôsobu montáže tak, aby bol výsledok funkčný a dlhodobo spoľahlivý.",
    image: "/sources/3.HPL-dosky/obrazok-za-hlavnym-nadpisom.jpg"
  },
  {
    title: "Montáž a výroba na mieru",
    copy:
      "Pri hotových konštrukciách zabezpečujeme montáž polykarbonátových dosiek a pri špecifických projektoch prepájame klientov s overenými stolármi a zámočníkmi.",
    image: "/sources/4.Prislusenstvo/Fotka-za-hlavnym-nadpisom.jpeg"
  }
] as const;

export const deliveryCities = [
  "Trnava",
  "Senec",
  "Piešťany",
  "Bratislava",
  "Hlohovec",
  "Sereď",
  "Galanta",
  "Senica",
  "Skalica",
  "Malacky",
  "Nitra",
  "Pezinok",
  "Modra",
  "Dunajská Streda",
  "Nové Zámky",
  "Nové Mesto nad Váhom",
  "Trenčín"
];
