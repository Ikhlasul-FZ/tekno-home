import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tekno Home Services | Spesialis Servis Kompor Listrik & Water Heater Surabaya",
  description: "Spesialis Jasa Servis Kompor Listrik & Water Heater Surabaya. Teknisi Ahli, Pengerjaan di Tempat, Suku Cadang Original & Bergaransi. Solusi Cepat untuk Ariston, Modena & Brand Lainnya.",
  keywords: "servis water heater surabaya, servis kompor listrik surabaya, teknisi water heater ariston, perbaikan peralatan rumah tangga, tekno home services, servis kompor tanam surabaya",
  metadataBase: new URL("https://www.teknohomeservice.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tekno Home Services | Solusi Cepat Perbaikan Alat Rumah Tangga",
    description: "Jasa servis water heater dan kompor listrik profesional 24 jam di Surabaya. Teknisi berpengalaman, respon cepat, dan bergaransi resmi.",
    url: "https://www.teknohomeservice.com",
    siteName: "Tekno Home",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tekno Home Services | Servis Alat Rumah Tangga Surabaya",
    description: "Teknisi ahli untuk water heater dan kompor listrik Anda. Layanan cepat 24 jam.",
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
      </head>

      <body className="min-h-full flex flex-col bg-surface text-on-surface" suppressHydrationWarning>{children}</body>
    </html>
  );
}
