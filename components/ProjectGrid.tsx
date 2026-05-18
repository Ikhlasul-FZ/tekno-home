"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { getWhatsAppLink } from "@/utils/whatsapp";

export default function ProjectGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Disable scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const projects = [
    { src: "/img1.webp", title: "Servis Kompor" },
    { src: "/img2.webp", title: "Pemasangan Water Heater" },
    { src: "/img3.webp", title: "Restorasi Unit" },
    { src: "/img4.webp", title: "Maintenance Rutin" },
    { src: "/ars1.webp", title: "Perbaikan Kompor Listrik" },
    { src: "/ars12.webp", title: "Instalasi Water Heater" },
    { src: "/ars11.webp", title: "Service Panggilan" },
    { src: "/ars (13).webp", title: "Cek Berkala" },
    { src: "/img9.webp", title: "Cek Berkala" },
    { src: "/img10.webp", title: "Cek Berkala" },
    { src: "/img11.webp", title: "Cek Berkala" },
    { src: "/img12.webp", title: "Cek Berkala" },
    { src: "/img1 (16).webp", title: "Cek Berkala" },
    { src: "/img1 (17).webp", title: "Cek Berkala" },
    { src: "/img1 (18).webp", title: "Cek Berkala" },
    { src: "/img1 (19).webp", title: "Cek Berkala" },
    { src: "/img1 (20).webp", title: "Cek Berkala" },
    { src: "/img1 (21).webp", title: "Cek Berkala" },
    { src: "/ars1.webp", title: "Cek Berkala" },
    { src: "/ars2.webp", title: "Cek Berkala" },
    { src: "/ars3.webp", title: "Cek Berkala" },
    { src: "/ars4.webp", title: "Cek Berkala" },
    { src: "/ars5.webp", title: "Cek Berkala" },
    { src: "/ars6.webp", title: "Cek Berkala" },
    { src: "/ars7.webp", title: "Cek Berkala" },
    { src: "/ars8.webp", title: "Cek Berkala" },
    { src: "/ars9.webp", title: "Cek Berkala" },
    { src: "/ars10.webp", title: "Cek Berkala" },
    { src: "/ars11.webp", title: "Cek Berkala" },
    { src: "/ars12.webp", title: "Cek Berkala" },
    { src: "/ars (1).webp", title: "Cek Berkala" },
    { src: "/ars (2).webp", title: "Cek Berkala" },
    { src: "/ars (3).webp", title: "Cek Berkala" },
    { src: "/ars (4).webp", title: "Cek Berkala" },
    { src: "/ars (5).webp", title: "Cek Berkala" },
    { src: "/ars (6).webp", title: "Cek Berkala" },
    { src: "/ars (7).webp", title: "Cek Berkala" },
    { src: "/ars (8).webp", title: "Cek Berkala" },
    { src: "/ars (9).webp", title: "Cek Berkala" },
    { src: "/ars (10).webp", title: "Cek Berkala" },
    { src: "/ars (11).webp", title: "Cek Berkala" },
    { src: "/ars (12).webp", title: "Cek Berkala" },
  ];

  // Show only first 8 in the main grid
  const previewProjects = projects.slice(0, 8);

  return (
    <div className="space-y-8 md:space-y-12">
      {/* Main Preview Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {previewProjects.map((project, i) => (
          <div
            key={i}
            className="group relative aspect-[3/4] rounded-2xl md:rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:translate-y-[-8px] animate-fade-in"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-6">
              <p className="text-white font-bold text-xs md:text-lg leading-tight">{project.title}</p>
              <p className="text-white/70 text-[10px] md:text-sm mt-1">Selesai Bergaransi</p>
            </div>
          </div>
        ))}
      </div>

      {/* "See All" Button */}
      <div className="text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="glass px-8 md:px-12 py-4 md:py-6 rounded-2xl font-bold text-base md:text-xl border border-primary/20 text-primary hover:bg-primary/5 transition-all active:scale-95 flex items-center gap-3 md:gap-4 mx-auto group shadow-lg shadow-primary/5"
        >
          <span>Lihat Semua Pekerjaan</span>
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary text-white flex items-center justify-center group-hover:translate-x-2 transition-transform">
            <i className="fi fi-rr-arrow-right text-sm md:text-lg"></i>
          </div>
        </button>
      </div>

      {/* Modal Gallery */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1001] flex items-center justify-center p-0 md:p-6 lg:p-12">
          {/* Backdrop with Deep Blur */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-fade-in cursor-zoom-out"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Container */}
          <div className="relative w-full h-full md:h-auto md:max-h-[90vh] max-w-7xl bg-stone-950 md:bg-stone-900/60 backdrop-blur-3xl md:rounded-[40px] border-t md:border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-fade-in-up">

            {/* Elegant Header */}
            <div className="px-5 py-4 md:px-10 md:py-8 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-12 md:h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <i className="fi fi-rr-gallery text-base md:text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg md:text-3xl font-black text-white tracking-tight">Portofolio</h3>
                  <p className="hidden md:block text-white/40 text-sm font-medium uppercase tracking-widest mt-0.5">Dokumentasi Tim TeknoHome</p>
                  <p className="md:hidden text-white/40 text-[9px] font-bold uppercase tracking-widest">Hasil Kerja Terbaik</p>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="group w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/5 text-white/70 flex items-center justify-center hover:bg-red-500/20 hover:text-red-400 transition-all border border-white/5"
              >
                <i className="fi fi-rr-cross text-[10px] md:text-lg group-hover:rotate-90 transition-transform duration-300"></i>
              </button>
            </div>

            {/* Grid Content */}
            <div className="flex-1 overflow-y-auto p-2 md:p-10 custom-scrollbar-dark">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8 pb-10">
                {projects.map((project, i) => (
                  <div
                    key={i}
                    className="group relative aspect-[4/5] md:aspect-[3/4] rounded-xl md:rounded-3xl overflow-hidden border border-white/5 bg-white/5"
                  >
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    {/* Info Panel overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-4 md:p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0">
                      <div className="bg-primary/20 backdrop-blur-md border border-primary/30 w-fit px-2 py-0.5 rounded-full mb-2">
                        <p className="text-primary text-[7px] md:text-[10px] font-black uppercase tracking-tighter">Verified</p>
                      </div>
                      <p className="text-white font-black text-[10px] md:text-base leading-tight">{project.title}</p>
                      <p className="text-white/50 text-[8px] md:text-xs font-medium mt-1">Selesai Bergaransi</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 md:p-8 bg-black/40 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="text-center md:text-left">
                <p className="text-white/40 text-[9px] md:text-sm font-medium">© 2026 TeknoHome Surabaya</p>
                <p className="text-white/20 text-[8px] md:text-xs">Kualitas Layanan Premium & Terpercaya</p>
              </div>
              <a
                href={getWhatsAppLink("portfolio")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-10 py-4 bg-primary text-white rounded-2xl font-bold text-sm hover:bg-primary-dark transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20 active:scale-95"
              >
                <i className="fi fi-rr-whatsapp text-xl"></i>
                Konsultasi Layanan
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
