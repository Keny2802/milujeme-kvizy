import type { Metadata } from "next";
import {
  Space_Grotesk,
  Inter,
} from "next/font/google";
import "./globals.css";

// local seo jsonld články

const fontSpaceGrotesk = Space_Grotesk({
  subsets: [ "latin" ],
  variable: "--font-space-grotesk",
  weight: [ "300", "400", "500", "600", "700" ]
});

const fontInter = Inter({
  subsets: [ "latin" ],
  variable: "--font-inter",
  weight: [ "100", "200", "300", "400", "500", "600", "700", "800", "900" ]
});

export const metadata:Metadata = {
  metadataBase: new URL("https://www.milujemekvizy.cz/"),
  title: {
    absolute: "Milujeme Kvízy - kvízy, které milujete a na jednom místě",
    template: "%s | Milujeme Kvízy"
  },
  description: "Kvízy od 2. světové války až po drsné léta americko-italské mafie.",
  keywords: [
    "Kvízy 2. světová válka",
    "2. světová válka",
    "Kvízy",
    "Milujeme kvízy",
    "Americko italská mafie",
    "Mafie",
    "Italská mafie",
    "Mafiánské kvízy",
    "Válečné kvízy",
    "Zábavné kvízy",
  ],
  icons: [
    {
      url: "/logo/favicon.svg",
      rel: "icon",
      type: "image/svg+xml",
    },
    {
      url: "/logo/favicon.ico",
      rel: "shortcut icon",
    },
    {
      url: "/logo/favicon-96x96.png",
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
    },
    {
      url: "/logo/web-app-manifest-192x192.png",
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
    },
    {
      url: "/logo/web-app-manifest-512x512.png",
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
    },
    {
      url: "/logo/apple-touch-icon.png",
      rel: "apple-touch-icon",
      sizes: "180x180",
    },
  ],
  openGraph: {
    title: "Milujeme kvízy - jednoduché | pokročilé | složité",
    description: "Hrajte kvízy, které Vás provedou bitvami 2. světové války až po mafiánské přestřelky americko-italské mafie. ",
    images: [
      {
        url: "/nabidka-kvizu/americko-italska-mafie.avif",
        alt: "Americko italská mafie 30. léta 20. století.",
        width: 1200,
        height: 630,
      }
    ]
  },
  alternates: {
    canonical: "https://www.milujemekvizy.cz/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
      ${fontSpaceGrotesk.variable}
      ${fontInter.variable}
      `}
    >
      <body>{children}</body>
    </html>
  );
}
