import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stoveCities, supportedStoveBrands } from "@/data/stove";
import { getCityWhatsAppLink } from "@/utils/whatsapp";
import CityNavbar from "@/components/CityNavbar";

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(stoveCities).map((city) => ({
    city,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const data = stoveCities[city.toLowerCase()];

  if (!data) {
    return {
      title: "Servis Kompor Panggilan | Tekno Home Services",
    };
  }

  return {
    title: `Servis Kompor ${data.name} | Teknisi Panggilan Bergaransi`,
    description: `Jasa servis kompor gas tanam, freestanding cooker, & kompor induksi panggilan di ${data.name} (${data.province}). Teknisi ahli pengerjaan di tempat, sparepart original & garansi resmi.`,
    keywords: `servis kompor ${data.name.toLowerCase()}, perbaikan kompor ${data.name.toLowerCase()}, teknisi kompor modena ${data.name.toLowerCase()}, teknisi kompor ariston ${data.name.toLowerCase()}, servis kompor freestanding ${data.name.toLowerCase()}, servis kompor induksi ${data.name.toLowerCase()}`,
    alternates: {
      canonical: `/stove/${data.slug}`,
    },
    openGraph: {
      title: `Servis Kompor ${data.name} | Tekno Home Services`,
      description: data.subheadline,
      url: `https://www.teknohomeservice.com/stove/${data.slug}`,
      siteName: "Tekno Home",
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Servis Kompor ${data.name} | Tekno Home Services`,
      description: data.subheadline,
    },
  };
}

export default async function StoveCityPage({ params }: PageProps) {
  const { city } = await params;
  const data = stoveCities[city.toLowerCase()];

  if (!data) {
    notFound();
  }

  const otherCities = Object.values(stoveCities).filter(
    (c) => c.slug !== data.slug
  );

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/20 selection:text-primary bg-surface text-on-surface">
      {/* Schema.org LocalBusiness & Service Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `Jasa Servis Kompor (Stove) ${data.name}`,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Tekno Home Services",
              "telephone": "+62895622759846",
              "url": "https://www.teknohomeservice.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": data.name,
                "addressRegion": data.province,
                "addressCountry": "ID"
              }
            },
            "areaServed": data.name,
            "description": data.subheadline,
            "serviceType": "Gas Stove, Built-in Hob & Induction Cooker Repair",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "IDR",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />

      {/* Header / Navbar with Desktop & Mobile Responsive Navigation */}
      <CityNavbar
        currentService="Stove"
        serviceSlug="stove"
        cityName={data.name}
        citySlug={data.slug}
      />

      <main>
        {/* Hero Section */}
        <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-surface-container-low/50 to-surface">
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-on-surface-variant/70 mb-6">
              <Link href="/" className="hover:text-primary transition-colors">
                Beranda
              </Link>
              <span>/</span>
              <span>Stove (Kompor)</span>
              <span>/</span>
              <span className="text-primary font-bold">{data.name}</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                {/* Location Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white shadow-sm border border-primary/10 mx-auto lg:mx-0">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                  </span>
                  <span className="text-primary text-xs font-black uppercase tracking-wider">
                    {data.statusBadge}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-on-surface leading-[1.15] tracking-tight">
                  {data.headline}
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-on-surface-variant leading-relaxed max-w-2xl font-medium opacity-90 mx-auto lg:mx-0">
                  {data.subheadline}
                </p>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
                  <div className="bg-white/80 p-3.5 rounded-2xl border border-primary/10 shadow-sm flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <i className="fi fi-rr-time-fast text-lg"></i>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-on-surface-variant">Respon Teknisi</p>
                      <p className="text-xs font-black text-on-surface">{data.technicianEta}</p>
                    </div>
                  </div>

                  <div className="bg-white/80 p-3.5 rounded-2xl border border-primary/10 shadow-sm flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <i className="fi fi-rr-shield-check text-lg"></i>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-on-surface-variant">Garansi Resmi</p>
                      <p className="text-xs font-black text-on-surface">30 - 90 Hari</p>
                    </div>
                  </div>

                  <div className="bg-white/80 p-3.5 rounded-2xl border border-primary/10 shadow-sm flex items-center gap-3 col-span-2 sm:col-span-1">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <i className="fi fi-rr-home-location-alt text-lg"></i>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-on-surface-variant">Pengerjaan</p>
                      <p className="text-xs font-black text-on-surface">Langsung di Dapur</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <a
                    href={getCityWhatsAppLink("Stove / Kompor", data.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-primary text-white rounded-2xl font-bold text-base shadow-xl shadow-primary/25 hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-3"
                  >
                    <i className="fi fi-brands-whatsapp text-xl"></i>
                    <span>Pesan Servis Kompor di {data.name}</span>
                  </a>

                  <a
                    href="#coverage"
                    className="glass px-8 py-4 rounded-2xl font-bold text-base border border-primary/15 text-on-surface hover:bg-white transition-all text-center"
                  >
                    Lihat Area & Kendala
                  </a>
                </div>
              </div>

              {/* Visual Card Column */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md bg-white rounded-[36px] p-6 shadow-2xl border border-primary/10 overflow-hidden">
                  <div className="relative aspect-4/3 rounded-3xl overflow-hidden mb-6 shadow-md">
                    <Image
                      src="/stove-hero.png"
                      alt={`Servis Kompor ${data.name}`}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow">
                      Layanan {data.name}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-primary/5">
                      <span className="text-xs font-bold text-on-surface-variant">Spesialisasi</span>
                      <span className="text-xs font-black text-primary">Kompor Tanam, Freestanding & Induksi</span>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-primary/5">
                      <span className="text-xs font-bold text-on-surface-variant">Cakupan Wilayah</span>
                      <span className="text-xs font-black text-on-surface">{data.name} & Sekitarnya</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-on-surface-variant">Layanan Panggilan</span>
                      <span className="text-xs font-black text-secondary">Rumah, Apartemen, Resto, Cafe</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-primary/5 text-center">
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {data.serviceHighlight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Areas Section */}
        <section id="coverage" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-container-low/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest">
                Jangkauan Teknisi
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-on-surface tracking-tight">
                Wilayah Layanan Servis Kompor di {data.name}
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Teknisi Tekno Home Services siap meluncur ke perumahan residensial, apartemen, ruko, restoran, hingga kafe di wilayah:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {data.coverageAreas.map((area, i) => (
                <div
                  key={i}
                  className="bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl border border-primary/10 shadow-sm hover:shadow-md transition-all flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <i className="fi fi-rr-marker text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface text-sm md:text-base mb-1">{area}</h3>
                    <p className="text-xs text-on-surface-variant/70">Teknisi Siaga Kunjungan Langsung</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-white/80 p-6 rounded-2xl md:rounded-3xl border border-primary/10 text-center max-w-3xl mx-auto shadow-sm">
              <p className="text-sm text-on-surface-variant">
                Lokasi dapur Anda belum tercantum di atas? Jangan khawatir, tim teknisi kami tetap melayani area sekitar {data.name}.
                <a
                  href={getCityWhatsAppLink("Stove / Kompor", data.name, "Konfirmasi jangkauan lokasi kompor saya")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold underline ml-1 hover:text-primary-container"
                >
                  Tanyakan ketersediaan via WhatsApp
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Common Issues Section */}
        <section id="issues" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest">
                Gejala Kerusakan Kompor
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-on-surface tracking-tight">
                Kendala Kompor yang Sering Kami Atasi di {data.name}
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Segera atasi kerusakan kompor sebelum membahayakan keselamatan dapur. Klik kendala di bawah untuk terhubung langsung dengan teknisi:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.commonIssues.map((issue, i) => (
                <div
                  key={i}
                  className="bg-white p-6 md:p-8 rounded-[32px] border border-primary/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                      <i className={issue.icon}></i>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-on-surface mb-2">{issue.title}</h3>
                    <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed mb-6">
                      {issue.desc}
                    </p>
                  </div>

                  <a
                    href={getCityWhatsAppLink("Stove / Kompor", data.name, issue.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:text-secondary transition-colors"
                  >
                    <span>Konsultasikan Masalah Ini</span>
                    <i className="fi fi-rr-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Brands Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-container-high/40 border-y border-primary/5">
          <div className="max-w-7xl mx-auto text-center space-y-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Multi-Brand Ahli</p>
              <h2 className="text-2xl sm:text-3xl font-black text-on-surface">Merk Kompor yang Kami Layani di {data.name}</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
              {supportedStoveBrands.map((brand) => (
                <div
                  key={brand}
                  className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-primary/10 font-bold text-sm md:text-base text-on-surface hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {brand}
                </div>
              ))}
              <div className="bg-primary/10 text-primary px-5 py-3 rounded-2xl font-bold text-sm md:text-base">
                & Merk Lainnya
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-black text-on-surface tracking-tight">
                Alur Pemanggilan Teknisi Kompor di {data.name}
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant">
                Langkah mudah, aman, dan transparan dari awal hingga kompor Anda kembali berfungsi sempurna:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Konsultasi Kendala",
                  desc: "Hubungi admin kami via WhatsApp dan infokan merk kompor serta gejala kerusakan.",
                  icon: "fi fi-rr-comment-alt"
                },
                {
                  step: "02",
                  title: "Penjadwalan Fleksibel",
                  desc: "Tentukan waktu kedatangan teknisi yang paling cocok dan nyaman untuk Anda.",
                  icon: "fi fi-rr-calendar-clock"
                },
                {
                  step: "03",
                  title: "Diagnosa di Tempat",
                  desc: "Pengecekan burner, pipa gas, atau kelistrikan kompor dengan rincian biaya yang disepakati.",
                  icon: "fi fi-rr-tools"
                },
                {
                  step: "04",
                  title: "Uji Aman & Garansi",
                  desc: "Uji nyala api biru, tes kebocoran gas berstandar resmi, dan penyerahan nota garansi.",
                  icon: "fi fi-rr-shield-check"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-[28px] border border-primary/10 shadow-sm relative">
                  <span className="text-3xl font-black text-primary/20 absolute top-5 right-5">{item.step}</span>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl mb-4">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">{item.title}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-container-low/40">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-3">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest">
                Tanya Jawab
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-on-surface">
                FAQ Servis Kompor di {data.name}
              </h2>
            </div>

            <div className="space-y-4">
              {data.faq.map((item, i) => (
                <div key={i} className="bg-white p-6 md:p-8 rounded-3xl border border-primary/10 shadow-sm">
                  <h3 className="font-bold text-base md:text-lg text-on-surface mb-2 flex items-start gap-3">
                    <span className="text-primary font-black">Q:</span>
                    <span>{item.q}</span>
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed pl-6">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jaringan Wilayah & Google Maps Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-container-low/30 border-t border-primary/5">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest">
                Jaringan Wilayah & Peta Operasional
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-on-surface tracking-tight">
                Peta Operasional Servis Kompor di {data.name}
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Armada teknisi Tekno Home Services memiliki mobilitas tinggi untuk menjangkau dapur perumahan, apartemen, kafe, dan restoran di {data.name}.
              </p>
            </div>

            {/* Google Maps & Info Card Grid */}
            <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
              {/* Info Side Card */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-white p-6 sm:p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-primary/10 shadow-xl space-y-6">
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-primary text-white flex items-center justify-center text-xl shadow-lg shadow-primary/20 shrink-0">
                      <i className="fi fi-rr-map-marker"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg md:text-xl text-on-surface">Area Operasional {data.name}</h3>
                      <p className="text-xs text-primary font-bold uppercase tracking-wider">{data.province}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6">
                    Layanan home service kompor profesional kami melayani panggilan langsung ke rumah tinggal, apartemen, kafe, restoran, dan villa di seluruh wilayah {data.name} dan sekitarnya.
                  </p>

                  <div className="space-y-3.5 pt-2">
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-on-surface">
                      <i className="fi fi-rr-check-circle text-primary text-base shrink-0"></i>
                      <span>Respon Teknisi: {data.technicianEta}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-on-surface">
                      <i className="fi fi-rr-check-circle text-primary text-base shrink-0"></i>
                      <span>Garansi Resmi Suku Cadang & Jasa Servis</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-on-surface">
                      <i className="fi fi-rr-check-circle text-primary text-base shrink-0"></i>
                      <span>Uji Kebocoran Gas & Pengecekan Keamanan Api</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-primary/10">
                  <a
                    href={getCityWhatsAppLink("Stove / Kompor", data.name, "Konfirmasi jangkauan alamat saya")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-primary text-white py-3.5 px-6 rounded-2xl font-bold text-xs sm:text-sm text-center shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <i className="fi fi-brands-whatsapp text-lg"></i>
                    <span>Tanya Jangkauan Alamat Saya</span>
                  </a>
                </div>
              </div>

              {/* Google Maps Embed Frame */}
              <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[420px] rounded-[32px] md:rounded-[40px] overflow-hidden border-4 md:border-8 border-white shadow-2xl group">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(data.mapQuery)}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "360px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                  title={`Peta Wilayah Layanan Kompor ${data.name}`}
                ></iframe>
              </div>
            </div>

            {/* Other Cities Grid in Jaringan Wilayah */}
            <div className="pt-10 border-t border-primary/10 text-center space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Jaringan Wilayah Nasional</p>
                <h3 className="text-xl sm:text-2xl font-black text-on-surface">
                  Pilih Layanan Servis Kompor di Kota Lainnya
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 max-w-5xl mx-auto">
                {otherCities.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/stove/${other.slug}`}
                    className="bg-white p-4 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md hover:border-primary/40 hover:-translate-y-1 transition-all flex flex-col items-center gap-1.5 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <i className="fi fi-rr-map-marker text-sm"></i>
                    </div>
                    <span className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">
                      {other.name}
                    </span>
                    <span className="text-[10px] text-on-surface-variant/70">{other.province}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto rounded-[36px] md:rounded-[44px] overflow-hidden bg-gradient-primary p-8 sm:p-14 md:p-20 text-center text-white relative shadow-2xl shadow-primary/20">
            <div className="relative space-y-6 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-black leading-tight">
                Butuh Teknisi Kompor Cepat di {data.name}?
              </h2>
              <p className="text-base sm:text-lg text-primary-fixed leading-relaxed opacity-90">
                Hindari risiko bahaya kebocoran gas dan api merah yang merusak peralatan dapur. Hubungi teknisi Tekno Home sekarang untuk penanganan cepat dan bergaransi resmi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <a
                  href={getCityWhatsAppLink("Stove / Kompor", data.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-base hover:shadow-xl transition-all hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2"
                >
                  <i className="fi fi-brands-whatsapp text-lg"></i>
                  <span>Hubungi Teknisi via WhatsApp</span>
                </a>
                <Link
                  href="/"
                  className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-white/30 transition-all text-center"
                >
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest py-14 px-4 sm:px-6 lg:px-8 border-t border-outline-variant/30 text-center">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="text-sm font-bold text-on-surface">
            Tekno Home Services — Spesialis Servis Kompor {data.name}
          </p>
          <p className="text-xs text-on-surface-variant max-w-md mx-auto">
            Melayani perbaikan kompor gas tanam, oven freestanding, dan kompor induksi panggilan dengan suku cadang original dan garansi resmi.
          </p>
          <div className="pt-4 text-xs text-on-surface-variant/70 border-t border-outline-variant/20">
            © 2026 Tekno Home Services. Seluruh hak cipta dilindungi.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <a
        href={getCityWhatsAppLink("Stove / Kompor", data.name)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Pesan teknisi kompor via WhatsApp"
      >
        <div className="absolute inset-0 bg-secondary rounded-full animate-pulse-slow opacity-40"></div>
        <div className="relative glass w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-secondary shadow-2xl border border-secondary/20 hover:scale-110 transition-transform duration-300 text-2xl md:text-3xl">
          <i className="fi fi-brands-whatsapp"></i>
        </div>
      </a>
    </div>
  );
}
