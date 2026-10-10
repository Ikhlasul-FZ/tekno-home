import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tekno Home Services | Spesialis Servis Water Heater, Stove & Coockerhood",
  description: "Spesialis Service Water Heater, Stove (Kompor Listrik/Gas) & Coockerhood Surabaya. Teknisi Ahli, Pengerjaan di Tempat, Suku Cadang Original & Bergaransi Resmi.",
  keywords: "servis water heater surabaya, servis stove surabaya, servis coockerhood surabaya, servis kompor listrik surabaya, teknisi water heater ariston, modena, tekno home services",
  metadataBase: new URL("https://www.teknohomeservice.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tekno Home Services | Solusi Servis Water Heater, Stove & Coockerhood",
    description: "Service water heater, stove (kompor), dan coockerhood profesional 24 jam. Teknisi berpengalaman, respon cepat, dan bergaransi resmi.",
    url: "https://www.teknohomeservice.com",
    siteName: "Tekno Home",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tekno Home Services | Servis Water Heater, Stove & Coockerhood",
    description: "Service water heater, stove (kompor), dan coockerhood profesional 24 jam. Teknisi berpengalaman, respon cepat, dan bergaransi resmi.",
  },
  icons: {
    icon: [
      { url: '/icon.png' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png' },
    ],
  },
  verification: {
    google: "wBp-Sk22NGNKx2Oaz2hb1e0odWczOvY6boj0wZYwuus",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css' />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.1.0/uicons-solid-rounded/css/uicons-solid-rounded.css' />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.1.0/uicons-brands/css/uicons-brands.css' />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Tekno Home Services",
              "image": "https://www.teknohomeservice.com/logos1.png",
              "@id": "https://www.teknohomeservice.com",
              "url": "https://www.teknohomeservice.com",
              "telephone": "+6282299359184",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Gunungsari No.15, Sawunggaling",
                "addressLocality": "Surabaya",
                "postalCode": "60242",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -7.303641,
                "longitude": 112.723635
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              }
            })
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-725564218"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-725564218');
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col bg-surface text-on-surface" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
