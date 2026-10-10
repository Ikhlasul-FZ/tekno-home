"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProjectGrid from "@/components/ProjectGrid";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { getWhatsAppLink } from "@/utils/whatsapp";




export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [comingSoonModal, setComingSoonModal] = useState<{
    isOpen: boolean;
    title: string;
    category: string;
  }>({
    isOpen: false,
    title: "",
    category: "",
  });

  const servicesList = [
    { name: "Water Heater", id: "water-heater", icon: "fi fi-rr-flame" },
    { name: "Stove", id: "stove", icon: "fi fi-rr-gas-pump" },
    { name: "Coockerhood", id: "coockerhood", icon: "fi fi-rr-wind" },
  ];

  const citiesList = [
    { name: "Jakarta", slug: "jakarta" },
    { name: "Tangerang", slug: "tangerang" },
    { name: "Bogor", slug: "bogor" },
    { name: "Bali", slug: "bali" },
    { name: "Surabaya", slug: "surabaya" },
    { name: "Medan", slug: "medan" },
  ];

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/20 selection:text-primary">
      {/* Consistent Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-2xl border-b border-primary/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logos1.png"
              alt="Tekno Home Services - Spesialis Servis Alat Rumah Tangga Surabaya"
              width={260}
              height={80}
              className="h-11 sm:h-13 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation (>= md) */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            {/* Beranda (Active) */}
            <Link href="/" className="text-primary font-black py-2 relative flex items-center gap-1.5">
              <span>Beranda</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
            </Link>

            {/* Dropdowns: Water Heater, Stove, Coockerhood */}
            {servicesList.map((service) => (
              <div
                key={service.id}
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown(service.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === service.id ? null : service.id)}
                  className={`flex items-center gap-1 font-bold transition-colors py-1 ${
                    activeDropdown === service.id ? "text-primary" : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  <span>{service.name}</span>
                  <i className={`fi fi-rr-angle-small-down text-xs transition-transform duration-200 ${
                    activeDropdown === service.id ? "rotate-180 text-primary" : "text-on-surface-variant/60"
                  }`}></i>
                </button>

                {/* Dropdown Card */}
                <div
                  className={`absolute top-full left-0 pt-2 w-56 transition-all duration-200 z-50 ${
                    activeDropdown === service.id
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-primary/10 p-2 flex flex-col gap-1 ring-1 ring-black/5">
                    <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-on-surface-variant/70 border-b border-primary/5">
                      Wilayah Layanan {service.name}
                    </div>
                    {citiesList.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/${service.id}/${city.slug}`}
                        className="px-3 py-2 rounded-xl text-xs font-semibold text-on-surface hover:bg-primary/5 hover:text-primary flex items-center justify-between transition-colors group/item"
                      >
                        <span className="group-hover/item:translate-x-1 transition-transform">{city.name}</span>
                        <i className="fi fi-rr-angle-small-right text-xs opacity-40 group-hover/item:opacity-100 group-hover/item:text-primary transition-all"></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Anchors */}
            <a href="#services" className="hover:text-primary transition-colors py-2">
              Layanan
            </a>
            <a href="#projects" className="hover:text-primary transition-colors py-2">
              Portofolio
            </a>
            <a href="#testimonials" className="hover:text-primary transition-colors py-2">
              Testimoni
            </a>
          </nav>

          {/* Right CTA & Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={getWhatsAppLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-secondary text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs shadow-lg shadow-secondary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 sm:gap-2"
            >
              <i className="fi fi-brands-whatsapp text-sm sm:text-base"></i>
              <span className="hidden sm:inline">Pesan Teknisi</span>
              <span className="sm:hidden text-[11px]">Chat WA</span>
            </a>

            {/* Mobile Hamburger Button (< md) */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Tutup Menu" : "Buka Menu"}
              className="md:hidden w-10 h-10 rounded-xl bg-primary/10 text-primary flex flex-col items-center justify-center gap-1.5 border border-primary/15 active:scale-90 transition-all"
            >
              <span className={`w-5 h-0.5 bg-primary transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}></span>
              <span className={`w-5 h-0.5 bg-primary transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}></span>
              <span className={`w-5 h-0.5 bg-primary transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer Dropdown Menu (< md) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-primary/10 shadow-2xl ${
            isMenuOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-5 py-6 space-y-5 overflow-y-auto max-h-[82vh]">
            {/* Main Navigation Links */}
            <div className="flex flex-col gap-1">
              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl font-bold text-sm bg-primary/10 text-primary flex items-center justify-between"
              >
                <span>Beranda</span>
                <i className="fi fi-rr-home text-xs"></i>
              </a>

              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl font-bold text-sm text-on-surface hover:bg-primary/5 hover:text-primary flex items-center justify-between transition-colors"
              >
                <span>Layanan Unggulan</span>
                <i className="fi fi-rr-apps text-primary/50 text-xs"></i>
              </a>

              <a
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl font-bold text-sm text-on-surface hover:bg-primary/5 hover:text-primary flex items-center justify-between transition-colors"
              >
                <span>Hasil Portofolio</span>
                <i className="fi fi-rr-picture text-primary/50 text-xs"></i>
              </a>

              <a
                href="#process"
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl font-bold text-sm text-on-surface hover:bg-primary/5 hover:text-primary flex items-center justify-between transition-colors"
              >
                <span>Alur Pemesanan</span>
                <i className="fi fi-rr-calendar-clock text-primary/50 text-xs"></i>
              </a>

              <a
                href="#testimonials"
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl font-bold text-sm text-on-surface hover:bg-primary/5 hover:text-primary flex items-center justify-between transition-colors"
              >
                <span>Testimoni Klien</span>
                <i className="fi fi-rr-star text-primary/50 text-xs"></i>
              </a>
            </div>

            {/* Service Categories with 6-City Grid */}
            {servicesList.map((service) => (
              <div key={service.id} className="pt-3 border-t border-primary/10">
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                    <i className={`${service.icon} text-xs`}></i>
                    <span>Layanan {service.name}</span>
                  </span>
                  <span className="text-[10px] font-semibold text-on-surface-variant/70">
                    Pilih Kota:
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {citiesList.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${service.id}/${city.slug}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="px-2 py-2 rounded-xl text-xs font-bold text-center bg-surface text-on-surface border border-primary/10 hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Mobile Bottom WhatsApp CTA */}
            <div className="pt-3 border-t border-primary/10">
              <a
                href={getWhatsAppLink("general")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-gradient-primary text-white py-3 px-4 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                <i className="fi fi-brands-whatsapp text-base"></i>
                <span>Hubungi Teknisi via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen lg:min-h-225 flex flex-col justify-center pt-12 sm:pt-16 pb-20 lg:pt-20 px-6 overflow-hidden">
          {/* Enhanced Background Decorations */}
          <div className="absolute top-[-10%] left-[-10%] w-100 md:w-200 h-100 md:h-200 bg-primary/5 rounded-full blur-[80px] md:blur-[140px] -z-10 animate-pulse-soft"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-100 md:w-200 h-100 md:h-200 bg-secondary/5 rounded-full blur-[80px] md:blur-[140px] -z-10 animate-pulse-soft"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] -z-20"></div>

          <div className="max-w-7xl mx-auto w-full flex flex-col items-center lg:items-start relative z-10 mb-6 md:mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-primary/10 shadow-sm mx-auto lg:mx-0 animate-fade-in-up">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.25em]">Spesialis Water Heater • Stove • Coockerhood • 24/7</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
            {/* Image Column (Order 1 on mobile, 2 on desktop) */}
            <div className="lg:col-span-5 relative animate-fade-in-up order-1 lg:order-2 mb-8 lg:mb-0" style={{ animationDelay: '300ms' }}>
              <div className="relative group max-w-100 md:max-w-125 mx-auto lg:max-w-none">
                {/* Main Image: Stove */}
                <div className="relative z-20 rounded-[40px] lg:rounded-[56px] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] border-8 lg:border-12 border-white/40 transform lg:rotate-2 group-hover:rotate-0 transition-all duration-700">
                  <Image
                    src="/stove-hero.png"
                    alt="Layanan Profesional Servis Stove & Kompor Listrik di Surabaya - Tekno Home"
                    width={500}
                    height={650}
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover aspect-4/5 w-full"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Secondary Image: Water Heater */}
                <div className="absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 lg:-left-24 z-30 w-[60%] md:w-[70%] rounded-[32px] lg:rounded-[48px] overflow-hidden shadow-2xl border-4 lg:border-10 border-white/60 transform -rotate-6 group-hover:rotate-0 transition-all duration-700">
                  <Image
                    src="/water-heater-hero.png"
                    alt="Spesialis Servis Water Heater Ariston & Modena Surabaya - Tekno Home"
                    width={400}
                    height={400}
                    priority
                    sizes="(max-width: 768px) 60vw, 30vw"
                    className="object-cover aspect-square w-full"
                  />
                </div>

                {/* Decorative Glowing Elements */}
                <div className="absolute -top-10 -right-10 w-32 md:w-40 h-32 md:h-40 bg-primary/30 rounded-full blur-[60px] md:blur-[80px] -z-10 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-32 md:w-40 h-32 md:h-40 bg-secondary/20 rounded-full blur-[60px] md:blur-[80px] -z-10 animate-pulse"></div>
              </div>
            </div>

            {/* Text Column (Order 2 on mobile, 1 on desktop) */}
            <div className="lg:col-span-7 space-y-8 md:space-y-12 animate-fade-in-up order-2 lg:order-1 text-center lg:text-left">

              <div className="space-y-4 md:space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-on-surface leading-[1.1] lg:leading-[0.9] tracking-tight">
                  Rumah Nyaman, <br />
                  <span className="text-gradient-primary">Hati Tenang.</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-on-surface-variant leading-relaxed max-w-xl font-medium opacity-90 mx-auto lg:mx-0">
                  Solusi ahli & bergaransi untuk <span className="text-primary font-bold">Water Heater</span>, <span className="text-secondary font-bold">Stove (Kompor)</span>, dan <span className="text-primary font-bold">Coockerhood</span>.
                  Teknisi berpengalaman kami siap menuntaskan kendala peralatan rumah Anda hari ini.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
                <a
                  href={getWhatsAppLink("hero")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 lg:px-10 py-4 lg:py-5 bg-gradient-primary text-white rounded-2xl font-bold text-lg lg:text-xl overflow-hidden shadow-2xl shadow-primary/30 transition-all hover:scale-[1.05] active:scale-95 text-center"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative">Pesan Layanan Sekarang</span>
                </a>

                <a
                  href="#projects"
                  className="glass px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-bold text-lg lg:text-xl border border-outline-variant/50 text-on-surface hover:bg-white transition-all active:scale-95 flex items-center justify-center gap-3 group"
                >
                  Lihat Hasil Kerja
                  <i className="fi fi-rr-arrow-right text-xl lg:text-2xl group-hover:translate-x-2 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* Stats Section */}
        <section className="px-6 py-12 md:py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "Panggilan Cepat", val: "Teknisi ke Rumah", icon: "fi fi-rr-map-marker-home" },
              { label: "Konsultasi Gratis", val: "Tanya Kapan Saja", icon: "fi fi-rr-headset" },
              { label: "Suku Cadang Asli", val: "Resmi & Bergaransi", icon: "fi fi-rr-shield-check" },
              { label: "Multi-Brand Ahli", val: "Teknisi Handal", icon: "fi fi-rr-time-fast" }
            ].map((stat, i) => (
              <div key={i} className="glass p-5 md:p-8 rounded-[32px] text-center border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 text-xl md:text-3xl transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <i className={stat.icon}></i>
                </div>
                <p className="text-base md:text-xl font-black text-on-surface mb-1 tracking-tight">{stat.val}</p>
                <p className="text-[10px] md:text-sm text-on-surface-variant font-bold uppercase tracking-wider opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Services Section */}
        <section id="services" className="py-24 px-6 bg-surface-container-low/30 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="space-y-4">
                <div className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-bold text-xl shadow-lg shadow-primary/20">
                  Layanan Utama
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight">Solusi Lengkap Peralatan Rumah Anda</h2>
                <p className="text-lg text-on-surface-variant max-w-2xl">Penanganan profesional untuk Water Heater, Stove (Kompor Listrik & Gas), dan Coockerhood segala merk ternama.</p>

              </div>
            </div>            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {[
                { title: "Servis Water Heater", desc: "Air tidak panas, korslet, bocor, atau tekanan air melemah? Kami tuntaskan.", icon: "fi fi-rr-water" },
                { title: "Servis Stove (Kompor)", desc: "Kompor gas, tanam, atau induksi susah nyala, api merah, dan modul error.", icon: "fi fi-rr-bolt" },
                { title: "Servis Coockerhood", desc: "Daya hisap asap loyo, motor bising, lampu mati, atau filter berminyak.", icon: "fi fi-rr-wind" },
                { title: "Kelistrikan & Modul", desc: "Mati total, short circuit, penggantian sensor & perkabelan berstandar aman.", icon: "fi fi-rr-settings" },
                { title: "Deep Clean & Perawatan", desc: "Pembersihan tuntas kerak air, kerak minyak gosong, dan tune-up performa.", icon: "fi fi-rr-vacuum" },
                { title: "Restorasi & Pasang Baru", desc: "Instalasi rapi unit baru atau restorasi unit lama agar normal seperti baru.", icon: "fi fi-rr-refresh" }
              ].map((service, i) => (
                <div key={i} className="glass p-5 md:p-8 rounded-[32px] border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 group">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 text-xl md:text-3xl">
                    <i className={service.icon}></i>
                  </div>

                  <h3 className="text-sm md:text-xl font-black text-on-surface mb-2 md:mb-3 leading-tight">{service.title}</h3>
                  <p className="text-[10px] md:text-base text-on-surface-variant leading-relaxed opacity-80 line-clamp-3 md:line-clamp-none font-medium">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Why Choose Us */}
        <section className="py-20 md:py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative mb-12 md:mb-0">
              <div className="rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src="/img5.webp"
                  alt="Teknisi profesional Tekno Home Services sedang melakukan inspeksi peralatan"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-2 md:-top-10 md:-right-10 glass p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-white/40 animate-bounce-slow">
                <p className="text-3xl md:text-5xl font-black text-primary">100%</p>
                <p className="text-[10px] md:text-sm font-bold text-on-surface-variant uppercase tracking-widest leading-tight">Tingkat<br className="md:hidden" /> Kepuasan</p>
              </div>

            </div>

            <div className="space-y-8 md:space-y-10 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-on-surface leading-tight">Mengapa Memilih <span className="text-primary">TeknoHome</span>?</h2>
              <div className="space-y-6 md:space-y-8">
                {[
                  { title: "Berlisensi & Bergaransi", desc: "Ketenangan total untuk setiap pengerjaan Water Heater, Stove, dan Coockerhood dengan garansi resmi.", icon: "fi fi-rr-shield-check" },
                  { title: "Harga Transparan", desc: "Tanpa biaya tersembunyi. Estimasi harga jujur di awal dengan suku cadang original terjamin.", icon: "fi fi-rr-money" },
                  { title: "Jadwal Fleksibel & Home Service", desc: "Teknisi datang tepat waktu ke lokasi Anda, menyesuaikan waktu luang pagi, siang, atau sore.", icon: "fi fi-rr-calendar-clock" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 group">
                    <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl md:text-3xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <i className={item.icon}></i>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg md:text-xl font-bold text-on-surface">{item.title}</h3>
                      <p className="text-sm md:text-base text-on-surface-variant leading-relaxed opacity-85">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Projects Section */}
        <section id="projects" className="py-24 px-6 bg-surface-container-low/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest">
                Portofolio Kami
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight">Hasil Pekerjaan Kami</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Dokumentasi perbaikan dan instalasi Water Heater, Stove, dan Coockerhood oleh tim TeknoHome.</p>
            </div>

            <ProjectGrid />
          </div>
        </section>



        {/* Process Section */}

        <section id="process" className="py-24 px-6 bg-surface-container-highest relative overflow-hidden">
          {/* Decorative backgrounds */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]"></div>

          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight">Pemesanan Mudah & Aman</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Prosedur praktis dan transparan di setiap tahapan servis kami.</p>
            </div>


            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Cara Pemesanan */}
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-primary/5 border border-primary/10 relative group hover:border-primary/30 transition-all duration-500">
                <div className="absolute top-8 right-8 w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 text-3xl">
                  <i className="fi fi-rr-comment-alt"></i>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-on-surface mb-8">Cara Pemesanan</h3>
                <ul className="space-y-6">
                  {[
                    "Konsultasi kendala Water Heater, Stove, atau Coockerhood via WA/Telepon.",
                    "Survei lokasi & diagnosa teknisi dengan penawaran harga rinci di awal.",
                    "Deal & pengerjaan langsung di tempat hingga berfungsi normal bergaransi."
                  ].map((item, i) => (

                    <li key={i} className="flex gap-5 items-start">
                      <div className="shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </div>
                      <p className="text-on-surface-variant leading-relaxed pt-1">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metode Pembayaran */}
              <div className="space-y-8">
                <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-secondary/5 border border-secondary/10 relative group hover:border-secondary/30 transition-all duration-500">
                  <div className="absolute top-8 right-8 w-16 h-16 bg-secondary/5 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500 text-3xl">
                    <i className="fi fi-rr-credit-card"></i>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-on-surface mb-8">Metode Pembayaran</h3>
                  <ul className="space-y-6">
                    {[
                      "Proses pengerjaan oleh tim teknisi ahli.",
                      "Pelunasan setelah proyek selesai sempurna."
                    ].map((item, i) => (

                      <li key={i} className="flex gap-5 items-start">
                        <div className="shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {i + 1}
                        </div>
                        <p className="text-on-surface-variant leading-relaxed pt-1">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Satisfaction Guarantee Badge */}
                <div className="bg-gradient-secondary p-8 rounded-[32px] flex items-center justify-between text-white shadow-xl shadow-secondary/20 overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative z-10">
                    <p className="text-4xl font-black mb-1">100%</p>
                    <p className="text-sm font-bold uppercase tracking-widest opacity-80">Jaminan Kepuasan</p>
                  </div>
                  <div className="relative z-10 text-right border-l border-white/20 pl-8">
                    <p className="text-xl font-bold">SATISFACTION</p>
                    <p className="text-xl font-light">GUARANTEE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section (Carousel) */}
        <section id="testimonials" className="py-24 px-6 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest">
                Testimoni Pelanggan
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight">Apa Kata Mereka?</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Kepercayaan Anda adalah prioritas kami. Berikut adalah ulasan dari mereka yang telah menggunakan layanan kami.</p>
            </div>

            {/* Carousel Container */}
            <div className="relative group px-4 md:px-16">
              <TestimonialCarousel />
            </div>
          </div>
        </section>
        {/* Contact & Location Section */}
        <section id="contact" className="py-24 px-6 bg-surface-container-low/30 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10"></div>

          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block bg-primary text-white px-6 py-2 rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-primary/20">
                Hubungi Kami
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight">Kunjungi Kantor Kami</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Tim kami siap membantu Anda secara langsung maupun melalui layanan panggilan ke rumah.</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-stretch">
              {/* Contact Info Cards */}
              <div className="lg:col-span-5 space-y-6">
                {[
                  { label: "Telepon & WA", val: "+62 822-9935-9184", icon: "fi fi-rr-phone-call", sub: "Tersedia 24 Jam" },
                  { label: "Alamat Kantor", val: "Jl. Gunungsari No.15, Surabaya", icon: "fi fi-rr-marker", sub: "Wonokromo, Jawa Timur 60242" },
                  { label: "Jam Operasional", val: "Senin - Minggu: 24 Jam", icon: "fi fi-rr-clock", sub: "Layanan Darurat Siaga" }
                ].map((item, i) => (
                  <div key={i} className="glass p-8 rounded-[32px] border border-primary/5 hover:border-primary/20 transition-all group flex items-center gap-6">
                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <i className={item.icon}></i>
                    </div>
                    <div>
                      <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">{item.label}</p>
                      <h3 className="text-xl font-bold text-on-surface">{item.val}</h3>
                      <p className="text-sm text-on-surface-variant font-medium mt-1">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps Embed */}
              <div className="lg:col-span-7 relative group min-h-100">
                <div className="absolute inset-0 bg-primary/10 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative h-full w-full rounded-[40px] overflow-hidden border-8 border-white shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4463886463022!2d112.72363597537674!3d-7.303641671802792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb835ad5ba07%3A0x21e2cf98ef703d2c!2sJl.%20Gunungsari%20No.15%2C%20RT.06%2FRW.08%2C%20Sawunggaling%2C%20Kec.%20Wonokromo%2C%20Surabaya%2C%20Jawa%20Timur%2060242!5e0!3m2!1sen!2sid!4v1777798189039!5m2!1sen!2sid"
                    title="Peta Lokasi Kantor Operasional Tekno Home Services Surabaya"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale-20 hover:grayscale-0 transition-all duration-700"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden relative bg-gradient-primary p-12 md:p-24 text-center text-white">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative space-y-8">
              <h2 className="text-4xl md:text-6xl font-black">Water Heater, Stove, atau Coockerhood Bermasalah? <br /> Kami Siap Membantu.</h2>
              <p className="text-xl text-white/95 font-medium max-w-2xl mx-auto">Jangan biarkan kenyamanan dapur & rumah Anda terganggu. Teknisi TeknoHome siaga memberikan layanan perbaikan cepat, rapi, dan bergaransi resmi.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href={getWhatsAppLink("cta")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all hover:-translate-y-0.5 active:scale-95 inline-block"
                >
                  Hubungi Kami Sekarang
                </a>


                <button className="bg-white/20 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/30 transition-all active:scale-95">
                  Jadwalkan Nanti
                </button>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest py-20 px-6 border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/logos1.png"
                alt="Logo Tekno Home Services Surabaya"
                width={600}
                height={200}
                className="h-48 md:h-56 w-auto object-contain -ml-4"
                sizes="(max-width: 768px) 300px, 600px"
              />
            </div>
            <p className="text-on-surface-variant max-w-sm">Solusi layanan rumah profesional untuk Water Heater, Stove (Kompor Gas & Listrik), dan Coockerhood Anda. Terpercaya, cepat, dan bergaransi resmi.</p>
          </div>

          <div className="md:justify-self-center">
            <h3 className="font-bold text-on-surface mb-6">Layanan Kami</h3>
            <ul className="space-y-4 text-on-surface-variant">
              <li><a href="#services" className="hover:text-primary transition-colors">Servis Water Heater</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Servis Stove (Kompor)</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Servis Coockerhood</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Layanan Darurat 24 Jam</a></li>
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h3 className="font-bold text-on-surface mb-6">Info Kontak</h3>
            <ul className="space-y-6 text-on-surface-variant">
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0 text-xl">
                  <i className="fi fi-rr-phone-call"></i>
                </div>

                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Telepon 24/7</p>
                  <a
                    href={getWhatsAppLink("general")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-black text-on-surface underline decoration-primary/30 hover:text-primary transition-colors block"
                  >
                    +62 822-9935-9184
                  </a>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0 text-xl">
                  <i className="fi fi-rr-marker"></i>
                </div>

                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Alamat Kantor</p>
                  <p className="text-sm font-medium leading-relaxed">Jl. Gunungsari No.15, Sawunggaling, Kec. Wonokromo, Surabaya<br />Area Layanan: Surabaya & Sekitarnya</p>
                </div>
              </li>

              <li className="flex gap-4 pt-2 md:justify-end">
                <a
                  href="#"
                  aria-label="Kunjungi Twitter Tekno Home Services"
                  className="w-10 h-10 bg-surface rounded-full flex items-center justify-center border border-outline-variant/30 text-on-surface-variant hover:text-primary transition-colors"
                >
                  <i className="fi fi-brands-twitter text-lg"></i>
                </a>
                <a
                  href="#"
                  aria-label="Kunjungi Instagram Tekno Home Services"
                  className="w-10 h-10 bg-surface rounded-full flex items-center justify-center border border-outline-variant/30 text-on-surface-variant hover:text-primary transition-colors"
                >
                  <i className="fi fi-brands-instagram text-lg"></i>
                </a>
              </li>
            </ul>
          </div>




        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-outline-variant/30 text-center text-on-surface-variant text-sm">
          © 2026 Tekno Home. Perawatan profesional untuk rumah Anda.
        </div>

      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={getWhatsAppLink("general")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi Customer Service Tekno Home Services via WhatsApp"
        className="fixed bottom-8 right-8 z-60 group"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse-slow opacity-40"></div>
        <div className="relative bg-white w-16 h-16 rounded-full flex items-center justify-center text-[#25D366] shadow-2xl shadow-[#25D366]/30 border border-[#25D366]/30 hover:scale-110 active:scale-95 transition-transform duration-300 text-3xl">
          <i className="fi fi-brands-whatsapp"></i>
        </div>
      </a>

      {/* Coming Soon Modal */}
      {comingSoonModal.isOpen && (
        <div className="fixed inset-0 z-[1002] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-md animate-fade-in cursor-pointer"
            onClick={() => setComingSoonModal({ isOpen: false, title: "", category: "" })}
          ></div>

          {/* Modal Container */}
          <div className="relative w-full max-w-lg bg-white rounded-[32px] md:rounded-[40px] p-6 sm:p-10 shadow-2xl border border-primary/10 overflow-hidden animate-fade-in-up z-10 text-center">
            {/* Subtle background glow */}
            <div className="absolute -top-20 -right-20 w-44 h-44 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-primary/15 rounded-full blur-3xl pointer-events-none"></div>

            {/* Close Button */}
            <button
              onClick={() => setComingSoonModal({ isOpen: false, title: "", category: "" })}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-red-50 hover:text-red-500 transition-all active:scale-90"
              aria-label="Tutup"
            >
              <i className="fi fi-rr-cross text-xs"></i>
            </button>

            {/* Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-secondary/10 rounded-3xl mx-auto flex items-center justify-center text-secondary text-3xl sm:text-4xl mb-5 shadow-inner">
              <i className="fi fi-rr-rocket-lunch"></i>
            </div>

            <div className="inline-block bg-secondary/10 text-secondary border border-secondary/20 px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest mb-4">
              Segera Hadir • Coming Soon
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-on-surface tracking-tight mb-3">
              {comingSoonModal.title}
            </h3>

            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
              Halaman dan ketersediaan teknisi untuk <strong>{comingSoonModal.title}</strong> saat ini sedang dipersiapkan. Untuk pemesanan langsung atau pertanyaan wilayah cakupan, Anda dapat menghubungi tim kami melalui WhatsApp.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getWhatsAppLink("comingsoon", comingSoonModal.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-primary text-white px-6 py-3.5 rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <i className="fi fi-brands-whatsapp text-lg"></i>
                <span>Tanya via WhatsApp</span>
              </a>

              <button
                onClick={() => setComingSoonModal({ isOpen: false, title: "", category: "" })}
                className="glass px-6 py-3.5 rounded-2xl font-bold text-sm text-on-surface hover:bg-surface-container transition-all active:scale-95"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
