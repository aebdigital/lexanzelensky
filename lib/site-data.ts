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
    shortDescription:
      "Neodľahčené dutinkové platne LEXAN® a ARLA s vysokou pevnosťou, výbornou tepelnou izoláciou a UV ochranou z oboch strán.",
    heroImage: "/sources/1.Dutinkove-polykarbonaty/Fotka-za-nazvom.jpg",
    teaserImage: "/sources/Uvodna-stranka/uvod-Dutinkove-Polykarbonaty.jpg",
    heroLabel: "LEXAN® Thermoclear Plus",
    intro: [
      "Naše dutinkové polykarbonáty sú určené pre projekty, kde je dôležitá nízka hmotnosť, pevnosť aj dlhá životnosť. Využívajú sa pri prestrešeniach, pergolách, zimných záhradách, svetlíkoch aj skleníkoch.",
      "Pracujeme s materiálom plnej kvality, nie s odľahčenými alternatívami. Výsledkom je lepšia stabilita, vyššia odolnosť voči počasiu a spoľahlivejší výkon v čase."
    ],
    highlights: [
      "obojstranná UV ochrana",
      "výborné termoizolačné vlastnosti",
      "viacero štruktúr a hrúbok",
      "špeciálne Solar Control a Thermoclick riešenia"
    ],
    gallery: [
      "/sources/1.Dutinkove-polykarbonaty/1.jpg",
      "/sources/1.Dutinkove-polykarbonaty/3.jpg",
      "/sources/1.Dutinkove-polykarbonaty/6.jpg",
      "/sources/1.Dutinkove-polykarbonaty/SOLAR CONTROL TRANSPARENT.jpg"
    ],
    sections: [
      {
        title: "Technické špecifikácie",
        text: [
          "Dutinkové platne dodávame v konštrukciách, ktoré zodpovedajú bežným aj náročnejším stavebným aplikáciám. Materiál je ľahký na manipuláciu, no zároveň dostatočne pevný aj pre väčšie plochy."
        ],
        list: [
          "hrúbky od 4 mm po 32 mm",
          "číre, opálové aj tónované prevedenia",
          "bežné šírky 2100 mm",
          "rezanie na mieru podľa projektu"
        ],
        image: "/sources/1.Dutinkove-polykarbonaty/5.jpg"
      },
      {
        title: "Špeciálne varianty",
        text: [
          "Pre projekty so zvýšenými nárokmi ponúkame aj riešenia Solar Control Grey, Solar Control Transparent, IR Green alebo systém LEXAN™ Thermoclick pre čisté fasádne aplikácie."
        ],
        image: "/sources/1.Dutinkove-polykarbonaty/SOLAR CONTROL GREY .jpg"
      }
    ]
  },
  {
    key: "plne-polykarbonaty",
    name: "Plné polykarbonáty",
    shortDescription:
      "Masívne transparentné dosky pre ochranné steny, prístrešky aj technické aplikácie, kde je potrebná odolnosť proti nárazu a vysoká čírosť.",
    heroImage: "/sources/2.Plne-polykarbonaty/Obrazok-za-hlavnym-nadpisom.jpg",
    teaserImage: "/sources/Uvodna-stranka/uvod-Plne-polykarbonaty.jpg",
    heroLabel: "Plný Lexan",
    intro: [
      "Plný polykarbonát je výrazne odolnejší voči nárazu než plexisklo a zároveň ponúka výbornú priehľadnosť. Je vhodný pre bezpečnostné výplne, kryty, prestrešenia aj dizajnové riešenia.",
      "Zákazníkom pomáhame zvoliť správnu hrúbku aj povrchovú úpravu podľa typu použitia a nárokov na optiku, pevnosť alebo odolnosť voči poškriabaniu."
    ],
    highlights: [
      "mimoriadna odolnosť proti nárazu",
      "výborná optická čistota",
      "vhodné pre bezpečnostné aplikácie",
      "dostupné aj varianty Margard a 9030"
    ],
    gallery: [
      "/sources/2.Plne-polykarbonaty/1.jpg",
      "/sources/2.Plne-polykarbonaty/2.jpg",
      "/sources/2.Plne-polykarbonaty/4.jpg"
    ],
    sections: [
      {
        title: "Prečo nie plexisklo?",
        text: [
          "V porovnaní s plexisklom má plný polykarbonát podstatne vyššiu húževnatosť. To je zásadné pri projektoch, kde môže dôjsť k úderu, vibráciám alebo teplotným výkyvom."
        ],
        image: "/sources/2.Plne-polykarbonaty/3.jpg"
      },
      {
        title: "Dostupné špecifikácie",
        text: [
          "Dodávame štandardné aj špeciálne hrúbky, bežné farebné prevedenia a platne pre požiadavky na vyššiu povrchovú odolnosť."
        ],
        list: [
          "hrúbky 2 mm až 15 mm",
          "číre, bronzové a opálové prevedenia",
          "varianty LEXAN™ MARGARD a LEXAN™ 9030",
          "rezanie a poradenstvo pri montáži"
        ]
      }
    ]
  },
  {
    key: "hpl-bond-dosky",
    name: "HPL a Bond dosky",
    shortDescription:
      "Kompaktné obkladové HPL platne a kompozitné panely Bond pre fasády, interiéry, reklamné aplikácie aj odolné detaily.",
    heroImage: "/sources/3.HPL-dosky/obrazok-za-hlavnym-nadpisom.jpg",
    teaserImage: "/sources/Uvodna-stranka/uvod-HPL-a-Bond-platne.jpg",
    heroLabel: "Odolné obkladové riešenia",
    intro: [
      "HPL platne sú kompaktné vysokotlakové dosky určené pre exteriér aj interiér. Vyznačujú sa rozmerovou stabilitou, odolnosťou proti vlhkosti a širokou škálou dekorov.",
      "Sendvičové panely Bond dopĺňajú ponuku všade tam, kde je dôležitý čistý vzhľad, nízka hmotnosť a jednoduché opracovanie."
    ],
    highlights: [
      "vhodné pre fasády aj interiéry",
      "stála farebnosť a odolnosť voči počasiu",
      "dekorové a dizajnové povrchy",
      "k dispozícii katalógy a vzorkovníky"
    ],
    gallery: [
      "/sources/3.HPL-dosky/obrazok-1.jpg",
      "/sources/3.HPL-dosky/obrazok-4.jpg",
      "/sources/3.HPL-dosky/obrazok-5.jpg"
    ],
    sections: [
      {
        title: "Použitie",
        text: [
          "HPL a Bond dosky sa využívajú na obklady fasád, soklov, interiérové steny, balkónové výplne, reklamné prvky aj technické zakrytia."
        ],
        list: [
          "fasádne obklady",
          "interiérové obklady a deliace steny",
          "balkónové a výplňové panely",
          "reklamné a architektonické riešenia"
        ]
      },
      {
        title: "Katalógy",
        text: [
          "Pri výbere dekoru alebo materiálového systému vám vieme pomôcť aj cez katalógy výrobcu."
        ],
        links: [
          { label: "Senoplan katalóg", href: "/sources/3.HPL-dosky/senoplan-K-2024.pdf" },
          { label: "Kronoart katalóg", href: "/sources/3.HPL-dosky/Katalog Kronoart .pdf" }
        ],
        image: "/sources/3.HPL-dosky/obrazok-2.webp"
      }
    ]
  },
  {
    key: "prislusenstvo",
    name: "Príslušenstvo",
    shortDescription:
      "Profily, tesniace pásy a montážne prvky, ktoré zabezpečia čistú montáž, vodotesnosť a dlhú životnosť polykarbonátového systému.",
    heroImage: "/sources/4.Prislusenstvo/Fotka-za-hlavnym-nadpisom.jpeg",
    teaserImage: "/sources/Uvodna-stranka/uvod-Prislusenstvo.jpg",
    heroLabel: "Všetko pre montáž na jednom mieste",
    intro: [
      "Správne príslušenstvo rozhoduje o výsledku montáže. Preto ponúkame kompletný sortiment komponentov pre dutinkové aj plné polykarbonáty, aby bol systém funkčný, tesný a vizuálne čistý.",
      "Zákazníkom odporúčame kombinácie komponentov podľa konkrétnej konštrukcie, sklonu strechy a typu platne."
    ],
    highlights: [
      "hliníkové profily",
      "plastové polykarbonátové profily",
      "spodné a tesniace gumové pásy",
      "spojovací a montážny materiál"
    ],
    gallery: [
      "/sources/4.Prislusenstvo/Hliníkove-profily.png",
      "/sources/4.Prislusenstvo/Plastove-polykarbonátove-profily.jpg",
      "/sources/4.Prislusenstvo/Spodne-a-tesniace-gumove-pasy.png",
      "/sources/4.Prislusenstvo/Spojovacie-prislusenstvo.jpeg"
    ],
    sections: [
      {
        title: "Hliníkové profily",
        text: [
          "Stabilné riešenie pre profesionálne montáže, kde je dôležitá tuhosť, čistý detail a vysoká životnosť."
        ],
        image: "/sources/4.Prislusenstvo/Hliníkove-profily.png"
      },
      {
        title: "Plastové profily a tesnenia",
        text: [
          "V ponuke nájdete aj plastové U a H profily, ukončovacie prvky, tesniace pásy a doplnky, ktoré pomáhajú pri správnom odvetraní a utesnení systému."
        ],
        image: "/sources/4.Prislusenstvo/Spodne-a-tesniace-gumove-pasy.png"
      }
    ]
  },
  {
    key: "trapezy-vlnovky",
    name: "Trapézy a Vlnovky",
    shortDescription:
      "Ľahké polykarbonátové krytiny pre pergoly, prestrešenia a technické objekty s dôrazom na svetelnosť a odolnosť.",
    heroImage: "/sources/5.Trapezy-a-Vlnovky/fotka-za-hlavny-nadpis.jpg",
    teaserImage: "/sources/Uvodna-stranka/uvod-Trapezy-a-Vlnovky.jpg",
    heroLabel: "Svetlo, krytie a nízka hmotnosť",
    intro: [
      "Trapézové a vlnovkové polykarbonátové platne sú ideálnou voľbou pre prístrešky, hospodárske stavby alebo ľahké strešné riešenia.",
      "Ponúkame viaceré profily, farby aj dĺžky tak, aby krytina fungovala nielen technicky, ale aj vizuálne."
    ],
    highlights: [
      "nízka hmotnosť",
      "svetlíkove a strešné použitie",
      "štandardné aj dlhšie dĺžky",
      "dobrá odolnosť voči poveternosti"
    ],
    gallery: [
      "/sources/5.Trapezy-a-Vlnovky/fotka 1.jpg",
      "/sources/5.Trapezy-a-Vlnovky/fotka 2.jpg",
      "/sources/5.Trapezy-a-Vlnovky/obrazok 3.jpg"
    ],
    sections: [
      {
        title: "Technické možnosti",
        text: [
          "Riešenie je vhodné pre jednoduché aj rozsiahlejšie prestrešenia. Pomôžeme vám s výberom profilu podľa typu konštrukcie a očakávaného zaťaženia."
        ],
        list: [
          "viac profilov trapézu a vlny",
          "transparentné aj tónované farby",
          "štandardné a zákazkové dĺžky",
          "doplnkové montážne príslušenstvo"
        ]
      }
    ]
  },
  {
    key: "skleniky",
    name: "Skleníky",
    shortDescription:
      "Polykarbonátové skleníky s hliníkovou konštrukciou, kvalitnejším opláštením a možnosťou profesionálnej montáže cez partnera NADOO.",
    heroImage: "/sources/6.Skleniky/fotka-za-hlavnym-nadpisom.jpg",
    teaserImage: "/sources/Uvodna-stranka/uvod-skleniky.jpg",
    heroLabel: "Skleníky s dôrazom na kvalitu materiálu",
    intro: [
      "Naše skleníky sú navrhnuté pre dlhodobé používanie, jednoduchú údržbu a stabilný pestovateľský komfort. Oproti bežným riešeniam pracujú s kvalitnejším polykarbonátom a pevnou konštrukciou.",
      "Pri štandardných modeloch aj atypických rozmeroch zabezpečujeme poradenstvo a vieme sprostredkovať profesionálnu montáž."
    ],
    highlights: [
      "4,5 mm a 6 mm dutinkový polykarbonát",
      "UV stabilita z oboch strán",
      "hliníková konštrukcia",
      "možnosť atypických rozmerov"
    ],
    gallery: [
      "/sources/6.Skleniky/obrazok-1.jpg",
      "/sources/6.Skleniky/obrazok-2.jpg",
      "/sources/6.Skleniky/obrazok-3.jpg",
      "/sources/6.Skleniky/obrazok-4.jpg"
    ],
    sections: [
      {
        title: "Technické parametre",
        text: [
          "Skleníky dodávame v štandardných šírkach aj dĺžkach a vieme ich prispôsobiť podľa konkrétneho priestoru alebo prevádzkových požiadaviek."
        ],
        list: [
          "šírky 2,5 m a 3 m",
          "dĺžky 2 až 6 m",
          "hliníková konštrukcia bez potreby masívnych základov",
          "profesionálna montáž na želanie"
        ],
        image: "/sources/6.Skleniky/obrazok 5.jpg"
      },
      {
        title: "Partner NADOO",
        text: [
          "Ak chcete skleník na kľúč alebo detailnejší výber modelu, odporúčame aj dlhoročného partnera NADOO."
        ],
        links: [{ label: "Navštíviť NADOO.sk", href: "https://nadoo.sk" }]
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
