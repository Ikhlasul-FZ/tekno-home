"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cookerhoodArticles, CookerhoodArticle } from "@/data/coockerhood-articles";
import { getCityWhatsAppLink } from "@/utils/whatsapp";

interface CookerhoodArticlesSectionProps {
  cityName: string;
  citySlug: string;
}

export default function CookerhoodArticlesSection({
  cityName,
  citySlug,
}: CookerhoodArticlesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const categories = [
    "Semua",
    "Panduan & Edukasi",
    "Keamanan (Safety)",
    "Komparasi Produk",
    "Tips Perawatan",
    "Troubleshooting",
    "Komersial / Bisnis",
    "Tips Finansial",
  ];

  const filteredArticles =
    selectedCategory === "Semua"
      ? cookerhoodArticles
      : cookerhoodArticles.filter((article) => article.category === selectedCategory);

  return (
    <section id="articles" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-container-low/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest border border-primary/15">
            <i className="fi fi-rr-book-alt text-xs"></i>
            <span>Artikel & Panduan Perawatan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-on-surface tracking-tight leading-tight">
            Edukasi & Tips Servis Cooker Hood di {cityName}
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed font-medium">
            Kumpulan panduan praktis, tips membersihkan filter minyak, solusi motor blower lemah, dan perbandingan sistem ducting cerobong dari teknisi ahli Tekno Home di {cityName}.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                  : "bg-white text-on-surface-variant border border-primary/10 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredArticles.map((article: CookerhoodArticle, idx: number) => (
            <article
              key={article.slug}
              className="bg-white rounded-3xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Article Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <Image
                    src={article.image}
                    alt={`${article.title} - Layanan Cooker Hood di ${cityName}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="bg-primary/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                      {article.category}
                    </span>
                    <span className="bg-white/90 backdrop-blur-md text-on-surface text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
                      <i className="fi fi-rr-clock text-[10px] text-primary"></i>
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  {/* Bottom Image Overlay Info */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-white/90 text-[11px] font-semibold flex items-center gap-1.5 drop-shadow">
                      <i className="fi fi-rr-map-marker text-secondary-fixed text-xs"></i>
                      <span>Panduan Wilayah {cityName}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7 space-y-3.5">
                  <div className="flex items-center gap-2 text-primary text-xs font-black">
                    <i className={article.icon}></i>
                    <span>Panduan Cooker Hood #{idx + 1}</span>
                  </div>

                  <h3 className="font-black text-lg md:text-xl text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    <Link href={`/coockerhood/${citySlug}/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Quick Highlights / Bullet Preview */}
                  <div className="pt-2 border-t border-primary/5 space-y-1.5">
                    {article.summaryBullets.slice(0, 2).map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-[11px] text-on-surface-variant">
                        <i className="fi fi-rr-check text-primary text-[10px] mt-0.5 shrink-0"></i>
                        <span className="line-clamp-1">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-primary/5 flex items-center justify-between gap-3">
                <Link
                  href={`/coockerhood/${citySlug}/${article.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:text-primary-container transition-colors"
                >
                  <span>Baca Selengkapnya</span>
                  <i className="fi fi-rr-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                </Link>

                <a
                  href={getCityWhatsAppLink("Cooker Hood", cityName, `Tanya artikel: ${article.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors text-base shrink-0 shadow-sm"
                  title="Konsultasikan via WhatsApp"
                  aria-label="Konsultasi kendala artikel ini via WhatsApp"
                >
                  <i className="fi fi-brands-whatsapp"></i>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner Support */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-primary/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="font-bold text-base md:text-lg text-on-surface">
              Cooker hood dapur Anda tidak menghisap asap atau berisik?
            </h4>
            <p className="text-xs md:text-sm text-on-surface-variant">
              Teknisi Tekno Home Services di {cityName} siap datang langsung ke rumah, apartemen, kafe, atau resto Anda untuk cuci filter, servis motor, dan perbaikan bergaransi.
            </p>
          </div>
          <a
            href={getCityWhatsAppLink("Cooker Hood", cityName, "Konsultasi kendala cooker hood saya dari artikel")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-secondary text-white px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm shadow-lg shadow-secondary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shrink-0 whitespace-nowrap"
          >
            <i className="fi fi-brands-whatsapp text-lg"></i>
            <span>Panggil Teknisi Cooker Hood {cityName}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
