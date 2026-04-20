import type { Metadata } from "next";
import { products, type ProductKey } from "./site-data";

type LegacySeoKey = "home" | "about" | "products" | "services" | "contact" | "blog";

type LegacySeo = {
  title: string;
  description: string;
  keywords: string;
  author: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  other?: Record<string, string>;
};

const siteName = "LEXAN Zelenský s.r.o.";

const seo: Record<LegacySeoKey, LegacySeo> = {
  home: {
    title: "LEXAN Zelenský s.r.o. - Polykarbonátové riešenia | 3 pobočky na Slovensku",
    description:
      "LEXAN Zelenský s.r.o. - odborník na polykarbonátové platne s 3 pobočkami (Trnava, Senec, Piešťany). Dutinkové a plné polykarbonáty, skleníky, trapézy, vlnovky, HPL dosky. 23 rokov skúseností.",
    keywords:
      "LEXAN Zelenský s.r.o., polykarbonáty Trnava, skleníky Senec, polykarbonáty Piešťany, dutinkové polykarbonáty, plné polykarbonáty, HPL dosky, trapézy vlnovky, príslušenstvo, pobočky Slovensko",
    author: siteName,
    canonical: "/",
    ogTitle: "LEXAN Zelenský s.r.o. - Polykarbonátové riešenia | 3 pobočky na Slovensku",
    ogDescription:
      "LEXAN Zelenský s.r.o. - odborník na polykarbonátové platne s 3 pobočkami (Trnava, Senec, Piešťany). 23 rokov skúseností v oblasti polykarbonátových riešení.",
    ogImage: "/sources/Uvodna-stranka/Posuvacia-cast-1.jpg",
    twitterTitle: "LEXAN Zelenský s.r.o. - Polykarbonátové riešenia | 3 pobočky",
    twitterDescription:
      "LEXAN Zelenský s.r.o. s 3 pobočkami na Slovensku. Polykarbonátové riešenia, skleníky, 23 rokov skúseností.",
    twitterImage: "/sources/Uvodna-stranka/Posuvacia-cast-1.jpg",
    other: {
      language: "sk",
      "geo.region": "SK",
      "geo.placename": "Trnava, Senec, Piešťany",
      ICBM: "48.3875, 17.5672",
      "business:contact_data:locality": "Trnava",
      "business:contact_data:region": "Slovakia",
      "business:contact_data:phone": "+421905504756"
    }
  },
  about: {
    title: "O nás - LEXAN Zelenský s.r.o. | 23 rokov skúseností, 3 pobočky",
    description:
      "LEXAN Zelenský s.r.o. - 23 rokov skúseností s polykarbonátovými doskami LEXAN® a ARLA. Komplexný dodávateľ s 3 pobočkami: Trnava, Senec, Piešťany. HPL dosky, skleníky, odborné poradenstvo.",
    keywords:
      "LEXAN Zelenský s.r.o. o nás, 23 rokov skúseností, polykarbonáty LEXAN ARLA, Trnava Senec Piešťany, HPL dosky Bond, distribučné pobočky",
    author: siteName,
    canonical: "/o-nas",
    ogTitle: "O nás - LEXAN Zelenský s.r.o. | 23 rokov skúseností",
    ogDescription:
      "LEXAN Zelenský s.r.o. - 23 rokov skúseností s polykarbonátmi LEXAN® a ARLA. 3 pobočky na Slovensku, odborné poradenstvo a kvalita.",
    ogImage: "/new.png",
    twitterTitle: "O nás - LEXAN polykarbonátové riešenia",
    twitterDescription:
      "LEXAN - 20 rokov skúseností s predajom a distribúciou polykarbonátových dosiek LEXAN® a ARLA.",
    twitterImage: "/new.png"
  },
  products: {
    title: "Produkty - LEXAN Zelenský s.r.o. | Polykarbonáty, skleníky, HPL dosky",
    description:
      "LEXAN Zelenský s.r.o. produkty: dutinkové a plné polykarbonáty LEXAN®/ARLA, HPL dosky, skleníky, trapézy, vlnovky. 3 pobočky: Trnava, Senec, Piešťany. Kvalitné riešenia pre stavebníctvo.",
    keywords:
      "LEXAN Zelenský s.r.o., polykarbonáty LEXAN ARLA, skleníky Trnava, HPL dosky Senec, trapézy vlnovky Piešťany, dutinkové plné polykarbonáty, montáž príslušenstvo",
    author: siteName,
    canonical: "/produkty",
    ogTitle: "Produkty - LEXAN Zelenský s.r.o. | Polykarbonáty a skleníky",
    ogDescription:
      "LEXAN Zelenský s.r.o. - komplexná ponuka polykarbonátov, skleníkov a HPL dosiek. 3 pobočky na Slovensku s odborným poradenstvom.",
    ogImage: "/sources/Uvodna-stranka/uvod-sluzby.png",
    twitterTitle: "Produkty - LEXAN Zelenský s.r.o.",
    twitterDescription:
      "LEXAN Zelenský s.r.o. - polykarbonáty, skleníky, HPL dosky. 3 pobočky na Slovensku.",
    twitterImage: "/sources/Uvodna-stranka/uvod-sluzby.png"
  },
  services: {
    title: "Služby - LEXAN Zelenský s.r.o. | Montáž, predaj, poradenstvo",
    description:
      "LEXAN Zelenský s.r.o. služby - predaj, montáž polykarbonátov LEXAN/ARLA, odborné poradenstvo, rezanie na mieru. 3 pobočky: Trnava, Senec, Piešťany. Doprava po Slovensku.",
    keywords:
      "LEXAN Zelenský s.r.o. služby, montáž polykarbonátov Trnava, predaj Senec, poradenstvo Piešťany, doprava materiálu Slovensko, rezanie na mieru",
    author: siteName,
    canonical: "/sluzby",
    ogTitle: "Služby - LEXAN Zelenský s.r.o. | Montáž a poradenstvo",
    ogDescription:
      "LEXAN Zelenský s.r.o. - komplexné služby montáže a predaja polykarbonátov. 3 pobočky, odborné poradenstvo, doprava po Slovensku.",
    ogImage: "/sources/5.Trapezy-a-Vlnovky/hlavny-obrazok.jpg",
    twitterTitle: "Služby - LEXAN Zelenský s.r.o.",
    twitterDescription:
      "LEXAN Zelenský s.r.o. - montáž, predaj polykarbonátov, 3 pobočky, odborné poradenstvo.",
    twitterImage: "/sources/5.Trapezy-a-Vlnovky/hlavny-obrazok.jpg"
  },
  contact: {
    title: "Kontakt - LEXAN Zelenský s.r.o. | 3 pobočky: Trnava, Senec, Piešťany",
    description:
      "Kontakt LEXAN Zelenský s.r.o. - 3 pobočky na Slovensku: Trnava (+421 905 504 756), Senec (+421 917 323 441), Piešťany (+421 948 442 156). Polykarbonátové riešenia, odborné poradenstvo.",
    keywords:
      "LEXAN Zelenský s.r.o. kontakt, Trnava polykarbonáty, Senec HPL dosky, Piešťany skleníky, pobočky Slovensko, polykarbonáty konzultácie",
    author: siteName,
    canonical: "/kontakt",
    ogTitle: "Kontakt - LEXAN Zelenský s.r.o. | 3 pobočky na Slovensku",
    ogDescription:
      "LEXAN Zelenský s.r.o. s 3 pobočkami: Trnava, Senec, Piešťany. Polykarbonátové riešenia, odborné poradenstvo a komplex servis.",
    ogImage: "/new.png",
    twitterTitle: "Kontakt - LEXAN Zelenský s.r.o. | 3 pobočky",
    twitterDescription:
      "LEXAN Zelenský s.r.o. - 3 pobočky na Slovensku. Polykarbonátové riešenia a odborné poradenstvo.",
    twitterImage: "/new.png"
  },
  blog: {
    title: "Blog - LEXAN polykarbonátové riešenia",
    description:
      "Blog LEXAN - novinky a informácie o polykarbonátových riešeniach, skleníkoch a stavebných materiáloch.",
    keywords: "blog LEXAN, polykarbonáty novinky, skleníky blog, stavebné materiály blog",
    author: "LEXAN",
    canonical: "/blog",
    ogTitle: "Blog - LEXAN polykarbonátové riešenia",
    ogDescription:
      "Blog LEXAN - novinky a informácie o polykarbonátových riešeniach, skleníkoch a stavebných materiáloch.",
    ogImage: "/sources/Uvodna-stranka/uvod-sluzby.png",
    twitterTitle: "Blog - LEXAN polykarbonátové riešenia",
    twitterDescription:
      "Blog LEXAN - novinky a informácie o polykarbonátových riešeniach, skleníkoch a stavebných materiáloch.",
    twitterImage: "/sources/Uvodna-stranka/uvod-sluzby.png"
  }
};

export function legacyMetadata(key: LegacySeoKey): Metadata {
  const item = seo[key];

  return {
    title: {
      absolute: item.title
    },
    description: item.description,
    keywords: item.keywords,
    authors: [{ name: item.author }],
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical: item.canonical
    },
    openGraph: {
      title: item.ogTitle,
      description: item.ogDescription,
      url: item.canonical,
      type: "website",
      locale: "sk_SK",
      siteName,
      images: [item.ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title: item.twitterTitle,
      description: item.twitterDescription,
      images: [item.twitterImage]
    },
    other: item.other
  };
}

/* ─── Per-product SEO metadata ─── */

type ProductSeo = {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
};

const productSeo: Record<ProductKey, ProductSeo> = {
  "dutinkove-polykarbonaty": {
    title: "Dutinkové polykarbonáty LEXAN® a ARLA | LEXAN Zelenský s.r.o.",
    description:
      "Dutinkové polykarbonátové platne LEXAN® Thermoclear Plus a ARLA. Hrúbky 4-25mm, obojstranná UV ochrana, tepelnoizolačné vlastnosti. Predaj Trnava, Senec, Piešťany. Neodľahčené polykarbonáty v plnej kvalite.",
    keywords:
      "dutinkové polykarbonáty, LEXAN Thermoclear Plus, ARLA polykarbonáty, dutinkový lexan Trnava, polykarbonátové platne Senec, UV ochrana polykarbonát, tepelnoizolačný polykarbonát, prístrešky polykarbonát, skleníky polykarbonát, zimné záhrady polykarbonát",
    ogImage: "/sources/Uvodna-stranka/uvod-Dutinkove-Polykarbonaty.jpg"
  },
  "plne-polykarbonaty": {
    title: "Plné polykarbonáty LEXAN™ EXELLD, MACROLUX, ARLA | LEXAN Zelenský s.r.o.",
    description:
      "Plné polykarbonátové dosky od LEXAN™ EXELLD, MACROLUX SOLID XL a ARLA. Hrúbky 2-15mm, 250x odolnejšie ako plexisklo. UV stabilné z oboch strán. Predaj a poradenstvo na 3 pobočkách.",
    keywords:
      "plné polykarbonáty, plný lexan, LEXAN EXELLD, MACROLUX SOLID XL, ARLA plný polykarbonát, plexisklo vs polykarbonát, bezpečnostné zasklenie, LEXAN Margard, LEXAN 9030, nerozbitné sklo, polykarbonát Trnava",
    ogImage: "/sources/Uvodna-stranka/uvod-Plne-polykarbonaty.jpg"
  },
  "hpl-bond-dosky": {
    title: "HPL dosky a Bond panely | Fundermax, Kronospan | LEXAN Zelenský s.r.o.",
    description:
      "Kompaktné vysokotlakové HPL dosky Fundermax, Kronospan a kompozitné sendvičové panely Bond. Fasádne obklady, interiérový dizajn, reklamné aplikácie. Katalógy na stiahnutie. 3 pobočky na Slovensku.",
    keywords:
      "HPL dosky, HPL platne, Fundermax dosky, Kronospan HPL, Bond panely, kompozitné panely, fasádne obklady, hliníkové sendvičové panely, High Pressure Laminate, obkladové dosky Trnava, fasády Senec",
    ogImage: "/sources/Uvodna-stranka/uvod-HPL-a-Bond-platne.jpg"
  },
  prislusenstvo: {
    title: "Príslušenstvo pre montáž polykarbonátov | Profily, tesnenia | LEXAN Zelenský s.r.o.",
    description:
      "Kompletné príslušenstvo pre montáž polykarbonátov: hliníkové a plastové profily, tesniace gumové pásy, spojovacie prvky, silikóny. Všetko na jednom mieste pre profesionálnu montáž lexanu.",
    keywords:
      "príslušenstvo polykarbonáty, hliníkové profily lexan, plastové profily polykarbonát, tesniace pásy, spojovacie prvky lexan, prítlačná lišta, F profil, U profil, H profil, montáž polykarbonátov, tesnenie lexan",
    ogImage: "/sources/Uvodna-stranka/uvod-Prislusenstvo.jpg"
  },
  "trapezy-vlnovky": {
    title: "Polykarbonátové trapézy a vlnovky | LEXAN Zelenský s.r.o.",
    description:
      "Polykarbonátové trapézy (0,8mm) a vlnovky (1,2-2,8mm) pre strechy, pergoly a prístrešky. Transparentné a bronzové prevedenie. Jednoduchá montáž bez profilov. Dĺžky 2-7m. Predaj na 3 pobočkách.",
    keywords:
      "polykarbonátové trapézy, polykarbonátové vlnovky, strešné polykarbonáty, transparentná strecha, trapézová doska polykarbonát, vlnovka polykarbonát, Solar Control Silver, strešné krytiny polykarbonát, pergola polykarbonát",
    ogImage: "/sources/Uvodna-stranka/uvod-Trapezy-a-Vlnovky.jpg"
  },
  skleniky: {
    title: "Polykarbonátové skleníky na mieru | LEXAN Zelenský s.r.o.",
    description:
      "Kvalitné polykarbonátové skleníky s hliníkovou konštrukciou a 4,5-6mm UV stabilným dutinkovým polykarbonátom. Výroba na mieru, profesionálna montáž. Spolupráca s NADOO s.r.o. Šírky 2,5-3m, dĺžky 2-6m.",
    keywords:
      "polykarbonátové skleníky, skleníky na mieru, záhradné skleníky, skleník hliníková konštrukcia, UV stabilný skleník, NADOO skleníky, lexaníky, skleník dutinkový polykarbonát, oblúkový skleník, skleník Trnava Senec Piešťany",
    ogImage: "/sources/Uvodna-stranka/uvod-skleniky.jpg"
  }
};

export function productPageMetadata(key: ProductKey): Metadata {
  const item = productSeo[key];
  const product = products.find((p) => p.key === key);

  return {
    title: {
      absolute: item.title
    },
    description: item.description,
    keywords: item.keywords,
    authors: [{ name: siteName }],
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical: `/produkty/${key}`
    },
    openGraph: {
      title: item.title,
      description: item.description,
      url: `/produkty/${key}`,
      type: "website",
      locale: "sk_SK",
      siteName,
      images: [item.ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.description,
      images: [item.ogImage]
    }
  };
}

export function productJsonLd(key: ProductKey) {
  const product = products.find((p) => p.key === key);
  const item = productSeo[key];
  if (!product) return {};

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.pageTitle ?? product.name,
    description: item.description,
    image: `https://lexanzelensky.sk${item.ogImage}`,
    url: `https://lexanzelensky.sk/produkty/${key}`,
    brand: {
      "@type": "Brand",
      name: "LEXAN Zelenský s.r.o."
    },
    manufacturer: {
      "@type": "Organization",
      name: "LEXAN Zelenský s.r.o.",
      url: "https://lexanzelensky.sk"
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      seller: {
        "@type": "LocalBusiness",
        name: "LEXAN Zelenský s.r.o.",
        telephone: "+421905504756",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Trnava",
          addressCountry: "SK"
        }
      }
    }
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteName,
  description:
    "LEXAN Zelenský s.r.o. - odborník na polykarbonátové platne s 23 rokmi skúseností. 3 pobočky: Trnava, Senec, Piešťany. Dutinkové a plné polykarbonáty, skleníky, HPL dosky.",
  url: "https://lexanzelensky.sk",
  telephone: "+421905504756",
  email: "zelenskystefan@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Trnava",
    addressCountry: "SK"
  },
  openingHours: "Mo-Fr 08:00-16:00",
  areaServed: "Slovenská republika"
};
