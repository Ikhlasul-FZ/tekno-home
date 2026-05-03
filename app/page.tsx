"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ProjectGrid from "@/components/ProjectGrid";
import TestimonialCarousel from "@/components/TestimonialCarousel";




export default function Home() {

  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/20 selection:text-primary">
      {/* Adaptive Sticky Navbar */}
      <nav className={`fixed left-1/2 -translate-x-1/2 z-[999] transition-all duration-700 ${scrolled
        ? "top-2 w-[95%] h-20 bg-white/90 backdrop-blur-2xl border border-primary/5 shadow-xl rounded-2xl"
        : "top-6 w-[92%] max-w-7xl h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-[32px]"
        }`}>
        <div className="w-full h-full px-6 md:px-10 flex justify-between items-center relative">
          <div className="flex items-center h-full">
            <Image 
              src="/logos1.png" 
              alt="Tekno Home Services - Spesialis Servis Alat Rumah Tangga Surabaya" 
              width={300} 
              height={100} 
              className={`object-contain transition-all duration-700 ${scrolled ? "h-16 w-auto" : "h-20 w-auto"} scale-150`}
              priority
              sizes="(max-width: 768px) 150px, 300px"
            />
          </div>
 

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-on-surface-variant font-semibold">
            {["Layanan", "Alur Kerja", "Testimoni"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "") === "layanan" ? "services" : item.toLowerCase().replace(" ", "") === "alurkerja" ? "process" : "testimonials"}`}
                className="hover:text-primary transition-all py-2 relative group uppercase text-[10px] tracking-widest font-bold"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="https://wa.me/6282299359184"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex group relative bg-gradient-secondary text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/30 active:scale-95 overflow-hidden text-xs"
            >
              <span className="relative z-10">Hubungi Sekarang</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 glass rounded-xl border border-primary/10 text-primary active:scale-90 transition-all"
            >
              <span className={`w-5 h-0.5 bg-current transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`w-5 h-0.5 bg-current transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-5 h-0.5 bg-current transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
          </div>

          {/* Floating Dropdown Menu (Mobile) */}
          <div className={`absolute left-0 right-0 glass border border-primary/10 rounded-[32px] p-8 flex flex-col gap-6 shadow-2xl transition-all duration-500 md:hidden z-50 ${isMenuOpen ? "opacity-100 translate-y-2 scale-100" : "opacity-0 -translate-y-4 scale-95 pointer-events-none"} ${scrolled ? "top-16" : "top-24"}`}>
            {["Layanan", "Alur Kerja", "Testimoni"].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "") === "layanan" ? "services" : item.toLowerCase().replace(" ", "") === "alurkerja" ? "process" : "testimonials"}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-on-surface hover:text-primary transition-colors flex items-center justify-between group"
              >
                {item}
                <i className="fi fi-rr-angle-small-right text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2"></i>
              </a>
            ))}
            <a
              href="https://wa.me/6282299359184"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-primary text-white px-6 py-4 rounded-2xl font-bold text-center shadow-xl shadow-primary/20 active:scale-95 transition-all"
            >
              Konsultasi Sekarang
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen lg:min-h-[900px] flex flex-col justify-center pt-32 pb-20 lg:pt-40 px-6 overflow-hidden">
          {/* Enhanced Background Decorations */}
          <div className="absolute top-[-10%] left-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/5 rounded-full blur-[80px] md:blur-[140px] -z-10 animate-pulse-soft"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-secondary/5 rounded-full blur-[80px] md:blur-[140px] -z-10 animate-pulse-soft"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] -z-20"></div>
 
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center lg:items-start relative z-10 mb-6 md:mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-primary/10 shadow-sm mx-auto lg:mx-0 animate-fade-in-up">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.25em]">Premium Home Service • 24/7</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
            {/* Image Column (Order 1 on mobile, 2 on desktop) */}
            <div className="lg:col-span-5 relative animate-fade-in-up order-1 lg:order-2 mb-8 lg:mb-0" style={{ animationDelay: '300ms' }}>
              <div className="relative group max-w-[400px] md:max-w-[500px] mx-auto lg:max-w-none">
                {/* Main Image: Stove */}
                <div className="relative z-20 rounded-[40px] lg:rounded-[56px] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] border-8 lg:border-[12px] border-white/40 transform lg:rotate-2 group-hover:rotate-0 transition-all duration-700">
                  <Image
                    src="/stove-hero.png"
                    alt="Layanan Profesional Servis Kompor Listrik di Surabaya - Tekno Home"
                    width={500}
                    height={650}
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover aspect-[4/5] w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
 
                {/* Secondary Image: Water Heater */}
                <div className="absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 lg:-left-24 z-30 w-[60%] md:w-[70%] rounded-[32px] lg:rounded-[48px] overflow-hidden shadow-2xl border-4 lg:border-[10px] border-white/60 transform -rotate-6 group-hover:rotate-0 transition-all duration-700">
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
                  Solusi ahli untuk <span className="text-primary font-bold">Water Heater</span> & <span className="text-secondary font-bold">Kompor Listrik</span> (Free Standing & Tanam).
                  Teknisi bersertifikat kami siap mengembalikan kenyamanan Anda hari ini.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
                <a
                  href="https://wa.me/6282299359184"
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
              { label: "Panggil ke rumah", val: "Teknisi", icon: "fi fi-rr-map-marker-home" },
              { label: "Tanya-tanya gratis", val: "Konsultasi", icon: "fi fi-rr-headset" },
              { label: "Ekspres & Bergaransi", val: "Cepat", icon: "fi fi-rr-time-fast" },
              { label: "Ahli bertahun-tahun", val: "Berpengalaman", icon: "fi fi-rr-shield-check" }
            ].map((stat, i) => (
              <div key={i} className="glass p-5 md:p-8 rounded-[32px] text-center border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:translate-y-[-8px] group">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 text-xl md:text-3xl transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <i className={stat.icon}></i>
                </div>
                <h3 className="text-base md:text-xl font-black text-on-surface mb-1 tracking-tight">{stat.val}</h3>
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
                  Layanan Service
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight">Solusi Masalah Peralatan Anda</h2>
                <p className="text-lg text-on-surface-variant max-w-2xl">Solusi cepat untuk kendala kompor listrik (free standing & tanam) serta water heater Anda.</p>

              </div>
            </div>            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {[
                { title: "Kelistrikan", desc: "Mati total atau korslet? Kami perbaiki.", icon: "fi fi-rr-bolt" },
                { title: "Pengapian", desc: "Susah nyala? Langsung stabil & siap.", icon: "fi fi-rr-settings" },
                { title: "Kebersihan", desc: "Kotor/Macet? Kami bersihkan tuntas.", icon: "fi fi-rr-vacuum" },
                { title: "Kondisi Ekstrem", desc: "Ledakan/Banjir? Kami tangani aman.", icon: "fi fi-rr-exclamation" },
                { title: "Restorasi Unit", desc: "Unit lama mati? Kami hidupkan baru.", icon: "fi fi-rr-refresh" },
                { title: "Servis Heater", desc: "Tidak panas/korslet? Kami atasi.", icon: "fi fi-rr-water" }
              ].map((service, i) => (
                <div key={i} className="glass p-5 md:p-8 rounded-[32px] border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:translate-y-[-8px] group">
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
                <Image src="/img5.webp" alt="Tim kami" width={600} height={400} className="object-cover" />
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
                  { title: "Berlisensi & Bergaransi", desc: "Ketenangan total untuk setiap servis. Kualitas pengerjaan terjamin.", icon: "fi fi-rr-shield-check" },
                  { title: "Harga Transparan", desc: "Tanpa biaya tersembunyi. Estimasi harga jujur di awal.", icon: "fi fi-rr-money" },
                  { title: "Jadwal Fleksibel", desc: "Tersedia pagi, siang, atau sore menyesuaikan waktu Anda.", icon: "fi fi-rr-calendar-clock" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl md:text-3xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
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
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Dokumentasi perbaikan dan pemasangan tim TeknoHome di berbagai lokasi.</p>
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
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Transparan dan nyaman di setiap tahapan layanan kami.</p>
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
                    "Konsultasi via WA/Telepon ke admin.",
                    "Survei lokasi & penawaran harga rinci.",
                    "Deal & penjadwalan proses pengerjaan."
                  ].map((item, i) => (

                    <li key={i} className="flex gap-5 items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
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
                      "Bayar DP 50% (Transfer atau Cash).",
                      "Proses pengerjaan oleh tim teknisi ahli.",
                      "Pelunasan setelah proyek selesai sempurna."
                    ].map((item, i) => (

                      <li key={i} className="flex gap-5 items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm">
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
                  { label: "Telepon & WA", val: "0822-9935-9184", icon: "fi fi-rr-phone-call", sub: "Tersedia 24 Jam" },
                  { label: "Alamat Kantor", val: "Jl. Gunungsari No.15, Surabaya", icon: "fi fi-rr-marker", sub: "Wonokromo, Jawa Timur 60242" },
                  { label: "Jam Operasional", val: "Senin - Minggu: 24 Jam", icon: "fi fi-rr-clock", sub: "Layanan Darurat Siaga" }
                ].map((item, i) => (
                  <div key={i} className="glass p-8 rounded-[32px] border border-primary/5 hover:border-primary/20 transition-all group flex items-center gap-6">
                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <i className={item.icon}></i>
                    </div>
                    <div>
                      <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">{item.label}</p>
                      <h4 className="text-xl font-bold text-on-surface">{item.val}</h4>
                      <p className="text-sm text-on-surface-variant font-medium mt-1">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps Embed */}
              <div className="lg:col-span-7 relative group min-h-[400px]">
                <div className="absolute inset-0 bg-primary/10 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative h-full w-full rounded-[40px] overflow-hidden border-8 border-white shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4463886463022!2d112.72363597537674!3d-7.303641671802792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb835ad5ba07%3A0x21e2cf98ef703d2c!2sJl.%20Gunungsari%20No.15%2C%20RT.06%2FRW.08%2C%20Sawunggaling%2C%20Kec.%20Wonokromo%2C%20Surabaya%2C%20Jawa%20Timur%2060242!5e0!3m2!1sen!2sid!4v1777798189039!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale-[20%] hover:grayscale-0 transition-all duration-700"
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
              <h2 className="text-4xl md:text-6xl font-black">Butuh perbaikan segera? <br /> Kami siap membantu.</h2>
              <p className="text-xl text-primary-fixed-dim max-w-2xl mx-auto">Jangan biarkan peralatan rusak mengganggu aktivitas Anda. Teknisi kami siaga memberikan layanan cepat dan handal.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="https://wa.me/6282299359184"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all hover:translate-y-[-2px] active:scale-95 inline-block"
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
            <p className="text-on-surface-variant max-w-sm">Solusi layanan rumah profesional untuk water heater dan kompor listrik Anda. Terpercaya, cepat, dan bersertifikat.</p>
          </div>

          <div className="md:justify-self-center">
            <h4 className="font-bold text-on-surface mb-6">Layanan Kami</h4>
            <ul className="space-y-4 text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Servis Water Heater</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Servis Kompor Listrik</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Layanan Darurat</a></li>
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h4 className="font-bold text-on-surface mb-6">Info Kontak</h4>
            <ul className="space-y-6 text-on-surface-variant">
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary flex-shrink-0 text-xl">
                  <i className="fi fi-rr-phone-call"></i>
                </div>

                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Telepon 24/7</p>
                  <p className="text-lg font-black text-on-surface underline decoration-primary/30">082299359184</p>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary flex-shrink-0 text-xl">
                  <i className="fi fi-rr-marker"></i>
                </div>

                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Alamat Kantor</p>
                  <p className="text-sm font-medium leading-relaxed">Jl. Gunungsari No.15, Sawunggaling, Kec. Wonokromo, Surabaya<br />Area Layanan: Surabaya & Sekitarnya</p>
                </div>
              </li>

              <li className="flex gap-4 pt-2 md:justify-end">
                <a href="#" className="w-10 h-10 bg-surface rounded-full flex items-center justify-center border border-outline-variant/30 text-on-surface-variant hover:text-primary transition-colors">
                  <i className="fi fi-brands-twitter text-lg"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-surface rounded-full flex items-center justify-center border border-outline-variant/30 text-on-surface-variant hover:text-primary transition-colors">
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
        href="https://wa.me/6282299359184"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] group"
      >
        <div className="absolute inset-0 bg-secondary rounded-full animate-pulse-slow opacity-40"></div>
        <div className="relative glass w-16 h-16 rounded-full flex items-center justify-center text-secondary shadow-2xl border border-secondary/20 hover:scale-110 transition-transform duration-300 text-3xl">
          <i className="fi fi-brands-whatsapp"></i>
        </div>
      </a>
    </div>
  );
}
