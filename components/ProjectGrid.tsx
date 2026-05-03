"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

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
    { src: "/ars13.webp", title: "Service Panggilan" },
    { src: "/ars14.webp", title: "Cek Berkala" },
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
    <div className="space-y-12">
      {/* Main Preview Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {previewProjects.map((project, i) => (
          <div
            key={i}
            className="group relative aspect-[3/4] rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:translate-y-[-8px] animate-fade-in"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <p className="text-white font-bold text-lg">{project.title}</p>
              <p className="text-white/70 text-sm">Selesai Bergaransi</p>
            </div>
          </div>
        ))}
      </div>

      {/* "See All" Button */}
      <div className="text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="glass px-12 py-6 rounded-2xl font-bold text-xl border border-primary/20 text-primary hover:bg-primary/5 transition-all active:scale-95 flex items-center gap-4 mx-auto group shadow-lg shadow-primary/5"
        >
          <span>Lihat Semua Hasil Pekerjaan</span>
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center group-hover:translate-x-2 transition-transform">
            <i className="fi fi-rr-arrow-right text-lg"></i>
          </div>
        </button>
      </div>

      {/* Modal Gallery */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-on-surface/40 backdrop-blur-md animate-fade-in"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-7xl h-[90vh] glass-dark rounded-[40px] border border-white/20 shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
            {/* Modal Header */}
            <div className="p-8 border-b border-white/10 flex justify-between items-center bg-white/5 backdrop-blur-xl">
              <div>
                <h3 className="text-3xl font-black text-white">Galeri Portofolio</h3>
                <p className="text-white/60 font-medium">Dokumentasi hasil pengerjaan tim TeknoHome</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-14 h-14 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all active:scale-90"
              >
                <i className="fi fi-rr-cross text-xl"></i>
              </button>
            </div>

            {/* Modal Scrollable Grid */}
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
                {projects.map((project, i) => (
                  <div
                    key={i}
                    className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10"
                  >
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                      <p className="text-white font-bold">{project.title}</p>
                      <p className="text-white/60 text-xs uppercase tracking-widest font-black mt-1">TeknoHome Pro</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
