import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stoveCities } from "@/data/stove";
import { stoveArticles, getStoveArticleBySlug } from "@/data/stove-articles";
import { getCityWhatsAppLink } from "@/utils/whatsapp";
import CityNavbar from "@/components/CityNavbar";

interface PageProps {
  params: Promise<{
    city: string;
    articleSlug: string;
  }>;
}

export function generateStaticParams() {
  const cities = Object.keys(stoveCities);
  const paths: { city: string; articleSlug: string }[] = [];

  for (const city of cities) {
    for (const article of stoveArticles) {
      paths.push({
        city,
        articleSlug: article.slug,
      });
    }
  }

  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, articleSlug } = await params;
  const cityData = stoveCities[city.toLowerCase()];
  const article = getStoveArticleBySlug(articleSlug);

  if (!cityData || !article) {
    return {
      title: "Artikel Kompor | Tekno Home Services",
    };
  }

  const title = `${article.title} | Servis Kompor ${cityData.name}`;
  const description = `${article.excerpt} Panduan lengkap teknisi kompor panggilan Tekno Home Services area ${cityData.name} (${cityData.province}).`;

  return {
    title,
    description,
    keywords: `${article.title.toLowerCase()}, servis kompor ${cityData.name.toLowerCase()}, teknisi kompor gas ${cityData.name.toLowerCase()}, perbaikan kompor tanam ${cityData.name.toLowerCase()}`,
    alternates: {
      canonical: `/stove/${cityData.slug}/${article.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.teknohomeservice.com/stove/${cityData.slug}/${article.slug}`,
      siteName: "Tekno Home Services",
      locale: "id_ID",
      type: "article",
      images: [
        {
          url: article.image,
          width: 800,
          height: 500,
          alt: `${article.title} - ${cityData.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [article.image],
    },
  };
}

export default async function StoveArticleDetailPage({ params }: PageProps) {
  const { city, articleSlug } = await params;
  const cityData = stoveCities[city.toLowerCase()];
  const article = getStoveArticleBySlug(articleSlug);

  if (!cityData || !article) {
    notFound();
  }

  const otherArticles = stoveArticles.filter((a) => a.slug !== article.slug);
  const otherCities = Object.values(stoveCities).filter((c) => c.slug !== cityData.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${article.title} - Panduan Servis Kompor ${cityData.name}`,
    "description": article.excerpt,
    "image": `https://www.teknohomeservice.com${article.image}`,
    "author": {
      "@type": "Organization",
      "name": `Tekno Home Services ${cityData.name}`,
      "url": "https://www.teknohomeservice.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tekno Home Services",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.teknohomeservice.com/logo-navbar.webp",
      },
    },
    "datePublished": "2026-01-15T08:00:00+07:00",
    "dateModified": "2026-10-14T10:00:00+07:00",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.teknohomeservice.com/stove/${cityData.slug}/${article.slug}`,
    },
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/20 selection:text-primary bg-surface text-on-surface">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation Bar */}
      <CityNavbar
        currentService="Stove"
        serviceSlug="stove"
        cityName={cityData.name}
        citySlug={cityData.slug}
        isArticlePage={true}
      />

      <main className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-semibold text-on-surface-variant/70 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <Link href={`/stove/${cityData.slug}`} className="hover:text-primary transition-colors">
              Stove ({cityData.name})
            </Link>
            <span>/</span>
            <Link href={`/stove/${cityData.slug}#articles`} className="hover:text-primary transition-colors">
              Artikel & Panduan
            </Link>
            <span>/</span>
            <span className="text-primary font-bold line-clamp-1 max-w-xs sm:max-w-md">
              {article.title}
            </span>
          </nav>

          {/* Article Header */}
          <header className="max-w-4xl space-y-5 mb-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-primary/10 text-primary border border-primary/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                {article.category}
              </span>
              <span className="bg-surface-container-high text-on-surface-variant px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                <i className="fi fi-rr-clock text-xs text-primary"></i>
                <span>{article.readTime}</span>
              </span>
              <span className="bg-surface-container-high text-on-surface-variant px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                <i className="fi fi-rr-map-marker text-xs text-secondary"></i>
                <span>Wilayah {cityData.name}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-on-surface tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed font-medium">
              {article.excerpt}
            </p>

            {/* Author / Local Badge */}
            <div className="flex items-center gap-4 pt-2 border-t border-primary/10">
              <div className="w-11 h-11 rounded-2xl bg-gradient-primary text-white flex items-center justify-center font-black text-lg shadow-md shadow-primary/20">
                TH
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface">Tim Teknisi Tekno Home Services {cityData.name}</p>
                <p className="text-[11px] text-on-surface-variant/70">Diperbarui untuk layanan area {cityData.name} ({cityData.province})</p>
              </div>
            </div>
          </header>

          {/* Main Layout: Article Content + Sticky Sidebar */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Full Content */}
            <div className="lg:col-span-8 space-y-10">
              {/* Featured Image */}
              <div className="relative aspect-[16/9] rounded-[32px] overflow-hidden border border-primary/10 shadow-lg bg-stone-100">
                <Image
                  src={article.image}
                  alt={`${article.title} - Layanan Servis Kompor di ${cityData.name}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 750px"
                />
              </div>

              {/* Summary / Key Takeaways Box */}
              <div className="bg-primary/5 rounded-3xl p-6 md:p-8 border border-primary/15 space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                  <i className="fi fi-rr-bulb text-base"></i>
                  <span>Poin Penting Ringkasan:</span>
                </div>
                <ul className="space-y-2.5">
                  {article.summaryBullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      <i className="fi fi-rr-check-circle text-primary text-base shrink-0 mt-0.5"></i>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article Content Sections */}
              <div className="space-y-8 text-on-surface">
                {article.contentSections.map((section, idx) => (
                  <section key={idx} className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
                      {section.heading}
                    </h2>
                    <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                      {section.body}
                    </p>

                    {section.list && section.list.length > 0 && (
                      <div className="bg-white p-5 rounded-2xl border border-primary/10 shadow-sm space-y-2">
                        {section.list.map((item, lIdx) => (
                          <div key={lIdx} className="flex items-start gap-3 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                            <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {lIdx + 1}
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.tip && (
                      <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-2xl text-xs sm:text-sm text-on-surface space-y-1">
                        <p className="font-bold text-amber-800 flex items-center gap-1.5">
                          <i className="fi fi-rr-info text-xs"></i>
                          <span>Tips Keselamatan Teknisi:</span>
                        </p>
                        <p className="text-amber-950/80 leading-relaxed">{section.tip}</p>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* FAQ Section Inside Article */}
              {article.faq && article.faq.length > 0 && (
                <div className="pt-8 border-t border-primary/10 space-y-6">
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">Tanya Jawab Terkait</p>
                    <h3 className="text-xl sm:text-2xl font-black text-on-surface">
                      Pertanyaan yang Sering Diajukan
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {article.faq.map((item, i) => (
                      <div key={i} className="bg-white p-5 md:p-6 rounded-2xl border border-primary/10 shadow-sm space-y-2">
                        <h4 className="font-bold text-sm md:text-base text-on-surface flex items-start gap-2">
                          <span className="text-primary font-black">Q:</span>
                          <span>{item.q}</span>
                        </h4>
                        <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed pl-5">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* In-Article CTA Banner */}
              <div className="bg-gradient-primary rounded-3xl p-8 sm:p-10 text-white space-y-5 shadow-xl shadow-primary/20">
                <span className="bg-white/20 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider">
                  Solusi Cepat Area {cityData.name}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                  Kompor Anda Mengalami Gejala di Atas?
                </h3>
                <p className="text-sm sm:text-base text-primary-fixed opacity-90 leading-relaxed max-w-xl">
                  Jangan ambil risiko keselamatan dengan membongkar pipa gas sendiri. Teknisi Tekno Home di {cityData.name} siap meluncur ke dapur Anda dengan garansi layanan 30-90 hari.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={getCityWhatsAppLink("Stove / Kompor", cityData.name, `Saya membaca artikel "${article.title}" dan butuh pengecekan teknisi`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm shadow-md hover:bg-surface transition-all flex items-center justify-center gap-2"
                  >
                    <i className="fi fi-brands-whatsapp text-lg"></i>
                    <span>Panggil Teknisi ke Rumah di {cityData.name}</span>
                  </a>
                  <Link
                    href={`/stove/${cityData.slug}`}
                    className="bg-white/15 text-white px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm hover:bg-white/25 transition-all text-center"
                  >
                    Lihat Semua Layanan {cityData.name}
                  </Link>
                </div>
              </div>

              {/* Related Articles in Same City */}
              <div className="pt-8 border-t border-primary/10 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-black text-on-surface">
                    Artikel Lainnya untuk Wilayah {cityData.name}
                  </h3>
                  <Link
                    href={`/stove/${cityData.slug}#articles`}
                    className="text-xs font-bold text-primary hover:underline"
                  >
                    Lihat Semua
                  </Link>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {otherArticles.slice(0, 4).map((other) => (
                    <Link
                      key={other.slug}
                      href={`/stove/${cityData.slug}/${other.slug}`}
                      className="bg-white p-4 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md hover:border-primary/40 hover:-translate-y-1 transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-primary uppercase">
                          {other.category}
                        </span>
                        <h4 className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                          {other.title}
                        </h4>
                      </div>
                      <div className="flex items-center justify-between pt-3 mt-3 border-t border-primary/5 text-[11px] text-on-surface-variant">
                        <span>{other.readTime}</span>
                        <span className="font-bold text-primary flex items-center gap-1">
                          <span>Baca</span>
                          <i className="fi fi-rr-arrow-right text-[10px]"></i>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Technician Booking Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-primary/10 shadow-xl space-y-6">
                <div className="space-y-2 text-center pb-4 border-b border-primary/10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-secondary text-white flex items-center justify-center text-2xl mx-auto shadow-lg shadow-secondary/20">
                    <i className="fi fi-rr-gas-pump"></i>
                  </div>
                  <h3 className="font-black text-lg text-on-surface">Servis Kompor di {cityData.name}</h3>
                  <p className="text-xs text-on-surface-variant font-medium">
                    Pengerjaan di tempat untuk kompor tanam, freestanding cooker & kompor induksi.
                  </p>
                </div>

                {/* Service Quick Badges */}
                <div className="space-y-3 text-xs font-semibold text-on-surface">
                  <div className="flex items-center gap-3">
                    <i className="fi fi-rr-time-fast text-primary text-base shrink-0"></i>
                    <span>Respon Teknisi: {cityData.technicianEta}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fi fi-rr-shield-check text-primary text-base shrink-0"></i>
                    <span>Garansi Resmi 30 - 90 Hari</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fi fi-rr-home text-primary text-base shrink-0"></i>
                    <span>Dikerjakan Langsung di Dapur Anda</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fi fi-rr-badge-percent text-primary text-base shrink-0"></i>
                    <span>Suku Cadang Asli Berstandar SNI</span>
                  </div>
                </div>

                {/* Primary WhatsApp CTA */}
                <a
                  href={getCityWhatsAppLink("Stove / Kompor", cityData.name, `Konsultasi kendala kompor dari artikel: ${article.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-secondary text-white py-3.5 px-6 rounded-2xl font-bold text-xs sm:text-sm text-center shadow-lg shadow-secondary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <i className="fi fi-brands-whatsapp text-lg"></i>
                  <span>Hubungi Teknisi via WhatsApp</span>
                </a>

                {/* Coverage Preview */}
                <div className="pt-4 border-t border-primary/10 space-y-2">
                  <p className="text-[11px] uppercase font-bold text-on-surface-variant/70 tracking-wider">
                    Jangkauan {cityData.name}:
                  </p>
                  <p className="text-xs text-on-surface-variant line-clamp-3">
                    {cityData.coverageAreas.join(", ")}
                  </p>
                  <Link
                    href={`/stove/${cityData.slug}#coverage`}
                    className="inline-block text-[11px] font-bold text-primary hover:underline"
                  >
                    Lihat peta jangkauan lengkap →
                  </Link>
                </div>
              </div>

              {/* Read Same Article in Other Cities */}
              <div className="bg-white rounded-3xl p-6 border border-primary/10 shadow-sm space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  Pilih Layanan di Kota Lain
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {otherCities.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/stove/${other.slug}/${article.slug}`}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-on-surface bg-surface-container-low hover:bg-primary/10 hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <i className="fi fi-rr-marker text-[10px] text-primary/70"></i>
                      <span>{other.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest py-12 px-4 sm:px-6 lg:px-8 border-t border-outline-variant/30 text-center mt-auto">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="text-sm font-bold text-on-surface">
            Tekno Home Services — Spesialis Servis Kompor {cityData.name}
          </p>
          <p className="text-xs text-on-surface-variant max-w-md mx-auto">
            Melayani perbaikan kompor gas tanam, oven freestanding, dan kompor induksi panggilan dengan suku cadang original dan garansi layanan.
          </p>
          <div className="pt-4 text-xs text-on-surface-variant/70 border-t border-outline-variant/20">
            © 2026 Tekno Home Services. Seluruh hak cipta dilindungi.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <a
        href={getCityWhatsAppLink("Stove / Kompor", cityData.name, `Konsultasi kendala kompor dari artikel: ${article.title}`)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Pesan teknisi kompor via WhatsApp"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse-slow opacity-40"></div>
        <div className="relative bg-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-[#25D366] shadow-2xl shadow-[#25D366]/30 border border-[#25D366]/30 hover:scale-110 active:scale-95 transition-transform duration-300 text-2xl md:text-3xl">
          <i className="fi fi-brands-whatsapp"></i>
        </div>
      </a>
    </div>
  );
}
