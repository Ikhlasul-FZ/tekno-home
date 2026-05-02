"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProjectGrid() {
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    { src: "/project1.png", title: "Servis Kompor" },
    { src: "/project2.png", title: "Pemasangan Water Heater" },
    { src: "/project3.png", title: "Restorasi Unit" },
    { src: "/project4.png", title: "Maintenance Rutin" },
    { src: "/project5.png", title: "Perbaikan Kompor Listrik" },
    { src: "/project6.png", title: "Instalasi Water Heater" },
    { src: "/project7.png", title: "Service Panggilan" },
    { src: "/project8.png", title: "Cek Berkala" }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleProjects.map((project, i) => (
          <div key={i} className="group relative aspect-[3/4] rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:translate-y-[-8px] animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
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
      
      <div className="text-center">
        <button 
          onClick={() => setShowAll(!showAll)}
          className="glass px-10 py-5 rounded-2xl font-bold text-xl border border-primary/20 text-primary hover:bg-primary/5 transition-all active:scale-95 flex items-center gap-3 mx-auto"
        >
          <span>{showAll ? "Tampilkan Sedikit" : "Lihat Semua Hasil"}</span>
          <i className={`fi fi-rr-arrow-small-${showAll ? "up" : "down"} text-2xl`}></i>
        </button>
      </div>
    </div>
  );
}
