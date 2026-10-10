"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { PortfolioItem } from "@/data/water-heater";
import { getPortfolioWhatsAppLink, getCityWhatsAppLink } from "@/utils/whatsapp";

interface WaterHeaterGalleryProps {
  cityName: string;
  items: PortfolioItem[];
}

export default function WaterHeaterGallery({
  cityName,
  items,
}: WaterHeaterGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  // Extract unique categories
  const categories = [
    "Semua",
    ...Array.from(new Set(items.map((item) => item.category))),
  ];

  // Filter items based on selected category
  const filteredItems =
    selectedCategory === "Semua"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  // Handle ESC key and scroll locking when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalIndex(null);
      } else if (activeModalIndex !== null) {
        if (e.key === "ArrowLeft") {
          setActiveModalIndex((prev) =>
            prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
          );
        } else if (e.key === "ArrowRight") {
          setActiveModalIndex((prev) =>
            prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
          );
        }
      }
    };

    if (activeModalIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalIndex, filteredItems.length]);

  const activeItem =
    activeModalIndex !== null ? filteredItems[activeModalIndex] : null;

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-container-low/30 border-t border-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest">
            <i className="fi fi-rr-gallery text-xs"></i>
            <span>Dokumentasi Lapangan & Portofolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-on-surface tracking-tight">
            Galeri Portofolio Servis Water Heater di {cityName}
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed font-normal">
            Hasil pengerjaan nyata teknisi kami menangani instalasi baru, perbaikan elemen rusak, kebocoran pipa, hingga pengurasan kerak tabung di perumahan dan apartemen area {cityName}.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => {
              const count =
                cat === "Semua"
                  ? items.length
                  : items.filter((it) => it.category === cat).length;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                      : "bg-white text-on-surface-variant border border-primary/10 hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-surface-container-high text-on-surface-variant"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className="bg-white rounded-3xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Zoom & Click to Open Lightbox */}
                <div
                  onClick={() => setActiveModalIndex(index)}
                  className="relative aspect-4/3 w-full bg-surface-container overflow-hidden cursor-pointer"
                >
                  <Image
                    src={item.src}
                    alt={`${item.title} di ${item.location}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="bg-primary/90 backdrop-blur-md text-white text-[11px] font-black uppercase px-3 py-1 rounded-full shadow-md">
                      {item.category}
                    </span>
                    <span className="bg-white/95 backdrop-blur-md text-emerald-700 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                      <i className="fi fi-rr-check text-[10px]"></i>
                      <span>{item.badge || "Selesai"}</span>
                    </span>
                  </div>

                  {/* Center Hover Magnifying Glass */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/90 backdrop-blur-md text-on-surface px-4 py-2 rounded-full font-bold text-xs shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <i className="fi fi-rr-search-alt text-primary text-xs"></i>
                      <span>Lihat Foto Penuh</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-2.5">
                  {/* Location Pin */}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                    <i className="fi fi-rr-marker text-xs"></i>
                    <span>{item.location}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-black text-on-surface leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  {item.desc && (
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 sm:p-6 pt-0 border-t border-primary/5 mt-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalIndex(index)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-surface-container-low text-on-surface font-bold text-xs hover:bg-primary/10 hover:text-primary transition-colors text-center flex items-center justify-center gap-1.5"
                >
                  <i className="fi fi-rr-eye text-xs"></i>
                  <span>Detail Foto</span>
                </button>

                <a
                  href={getPortfolioWhatsAppLink(
                    "Water Heater",
                    cityName,
                    item.title,
                    item.location
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-secondary text-white font-bold text-xs hover:scale-[1.02] active:scale-95 transition-all text-center flex items-center justify-center gap-1.5 shadow-sm shadow-secondary/20"
                >
                  <i className="fi fi-brands-whatsapp text-sm"></i>
                  <span>Tanya Kendala</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-primary/10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <i className="fi fi-rr-shield-check text-sm"></i>
              <span>Garansi Resmi & Teknisi Ahli di {cityName}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-on-surface">
              Mengalami Kendala Water Heater Serupa di Rumah Anda?
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-2xl leading-relaxed">
              Konsultasikan keluhan air tidak panas, korslet, bau gas, atau kebocoran tabung Anda sekarang. Teknisi Tekno Home Services area {cityName} siap datang langsung ke lokasi.
            </p>
          </div>

          <a
            href={getCityWhatsAppLink("Water Heater", cityName, "Konsultasi portofolio & jadwalkan teknisi")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-4 bg-gradient-primary text-white rounded-2xl font-bold text-sm sm:text-base shadow-xl shadow-primary/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
          >
            <i className="fi fi-brands-whatsapp text-xl"></i>
            <span>Pesan Servis Sekarang</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && activeModalIndex !== null && (
        <div className="fixed inset-0 z-[1001] flex items-center justify-center p-3 sm:p-6 md:p-10 animate-fade-in">
          {/* Backdrop with Blur */}
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            onClick={() => setActiveModalIndex(null)}
          ></div>

          {/* Modal Container */}
          <div className="relative w-full max-w-4xl bg-white rounded-3xl md:rounded-[36px] overflow-hidden shadow-2xl border border-white/20 flex flex-col z-10 animate-fade-in-up max-h-[92vh]">
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-primary/10 flex items-center justify-between bg-surface-container-low/50">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-wider text-primary">
                  {activeItem.category} • {cityName}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-on-surface-variant/70">
                  {activeModalIndex + 1} / {filteredItems.length}
                </span>
                <button
                  onClick={() => setActiveModalIndex(null)}
                  className="w-8 h-8 rounded-full bg-surface-container text-on-surface flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  aria-label="Tutup foto"
                >
                  <i className="fi fi-rr-cross text-xs"></i>
                </button>
              </div>
            </div>

            {/* Modal Body: Large Image Display */}
            <div className="relative aspect-16/10 sm:aspect-16/9 w-full bg-stone-950 flex items-center justify-center overflow-hidden">
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
              />

              {/* Prev / Next Nav Buttons */}
              <button
                type="button"
                onClick={() =>
                  setActiveModalIndex((prev) =>
                    prev !== null && prev > 0
                      ? prev - 1
                      : filteredItems.length - 1
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-primary transition-colors backdrop-blur-sm"
                aria-label="Foto sebelumnya"
              >
                <i className="fi fi-rr-angle-left text-sm"></i>
              </button>

              <button
                type="button"
                onClick={() =>
                  setActiveModalIndex((prev) =>
                    prev !== null && prev < filteredItems.length - 1
                      ? prev + 1
                      : 0
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-primary transition-colors backdrop-blur-sm"
                aria-label="Foto selanjutnya"
              >
                <i className="fi fi-rr-angle-right text-sm"></i>
              </button>
            </div>

            {/* Modal Footer Details */}
            <div className="p-5 sm:p-6 md:p-8 bg-white space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-primary">
                    <i className="fi fi-rr-marker text-xs"></i>
                    <span>{activeItem.location}</span>
                    <span className="text-on-surface-variant/40">•</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full text-[11px]">
                      {activeItem.badge || "Selesai Bergaransi"}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-black text-on-surface">
                    {activeItem.title}
                  </h4>
                  {activeItem.desc && (
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {activeItem.desc}
                    </p>
                  )}
                </div>

                <a
                  href={getPortfolioWhatsAppLink(
                    "Water Heater",
                    cityName,
                    activeItem.title,
                    activeItem.location
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-6 py-3.5 bg-gradient-secondary text-white rounded-2xl font-bold text-xs sm:text-sm shadow-lg shadow-secondary/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 text-center"
                >
                  <i className="fi fi-brands-whatsapp text-base"></i>
                  <span>Konsultasi Kasus Ini</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
