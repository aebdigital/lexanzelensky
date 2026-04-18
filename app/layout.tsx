import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://lexanzelensky.sk"),
  title: {
    default: "LEXAN Zelenský s.r.o.",
    template: "%s | LEXAN Zelenský s.r.o."
  },
  description:
    "Polykarbonátové riešenia, HPL dosky, trapézy, skleníky a príslušenstvo s poradenstvom a dopravou po Slovensku.",
  icons: {
    icon: "/lexan_favicon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="sk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
