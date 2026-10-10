"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getCityWhatsAppLink } from "@/utils/whatsapp";

interface CityNavbarProps {
  currentService: "Water Heater" | "Stove" | "Coockerhood";
  serviceSlug: "water-heater" | "stove" | "coockerhood";
  cityName: string;
  citySlug: string;
}

const allCities = [
  { name: "Jakarta", slug: "jakarta" },
  { name: "Tangerang", slug: "tangerang" },
  { name: "Bogor", slug: "bogor" },
  { name: "Bali", slug: "bali" },
  { name: "Surabaya", slug: "surabaya" },
  { name: "Medan", slug: "medan" },
];

const allServices = [
  { name: "Water Heater", id: "water-heater", icon: "fi fi-rr-flame" },
  { name: "Stove", id: "stove", icon: "fi fi-rr-gas-pump" },
  { name: "Coockerhood", id: "coockerhood", icon: "fi fi-rr-wind" },
];

export default function CityNavbar({
  currentService,
  serviceSlug,
  cityName,
  citySlug,
}: CityNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-2xl border-b border-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logos1.png"
            alt="Tekno Home Services"
            width={240}
            height={70}
            className="h-11 sm:h-13 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation (>= md) */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs font-bold uppercase tracking-wider text-on-surface-variant">
          <Link href="/" className="hover:text-primary transition-colors py-2">
            Beranda
          </Link>

          {/* Current Service City Dropdown */}
          <div
            className="relative py-2"
            onMouseEnter={() => setActiveDesktopDropdown("city")}
            onMouseLeave={() => setActiveDesktopDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setActiveDesktopDropdown(activeDesktopDropdown === "city" ? null : "city")}
              className="text-primary flex items-center gap-1 font-extrabold"
            >
              <span>{currentService} ({cityName})</span>
              <i className={`fi fi-rr-angle-small-down text-xs transition-transform duration-200 ${
                activeDesktopDropdown === "city" ? "rotate-180" : ""
              }`}></i>
            </button>
            <div className={`absolute top-full left-0 pt-2 w-56 transition-all duration-200 ${
              activeDesktopDropdown === "city"
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}>
              <div className="bg-white rounded-2xl shadow-xl border border-primary/10 p-2 flex flex-col gap-1 ring-1 ring-black/5">
                <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-on-surface-variant/70 border-b border-primary/5">
                  Pilih Kota Layanan
                </div>
                {allCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${serviceSlug}/${c.slug}`}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                      c.slug === citySlug
                        ? "bg-primary text-white"
                        : "text-on-surface hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    <span>{c.name}</span>
                    {c.slug === citySlug && <i className="fi fi-rr-check text-[10px]"></i>}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Other Services Dropdown */}
          <div
            className="relative py-2"
            onMouseEnter={() => setActiveDesktopDropdown("services")}
            onMouseLeave={() => setActiveDesktopDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setActiveDesktopDropdown(activeDesktopDropdown === "services" ? null : "services")}
              className="hover:text-primary flex items-center gap-1 transition-colors"
            >
              <span>Layanan Lain</span>
              <i className={`fi fi-rr-angle-small-down text-xs transition-transform duration-200 ${
                activeDesktopDropdown === "services" ? "rotate-180" : ""
              }`}></i>
            </button>
            <div className={`absolute top-full left-0 pt-2 w-56 transition-all duration-200 ${
              activeDesktopDropdown === "services"
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}>
              <div className="bg-white rounded-2xl shadow-xl border border-primary/10 p-2 flex flex-col gap-1 ring-1 ring-black/5">
                <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-on-surface-variant/70 border-b border-primary/5">
                  Kategori Alat di {cityName}
                </div>
                {allServices.map((srv) => (
                  <Link
                    key={srv.id}
                    href={`/${srv.id}/${citySlug}`}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                      srv.id === serviceSlug
                        ? "bg-primary/10 text-primary font-bold"
                        : "text-on-surface hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    <span>{srv.name}</span>
                    <span className="text-[10px] opacity-70">({cityName})</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <a href="#coverage" className="hover:text-primary transition-colors py-2">
            Area
          </a>
          <a href="#issues" className="hover:text-primary transition-colors py-2">
            Kendala
          </a>
          <a href="#faq" className="hover:text-primary transition-colors py-2">
            FAQ
          </a>
        </nav>

        {/* Right CTA & Mobile Hamburger Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={getCityWhatsAppLink(currentService, cityName)}
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
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
            className="md:hidden w-10 h-10 rounded-xl bg-primary/10 text-primary flex flex-col items-center justify-center gap-1.5 border border-primary/15 active:scale-90 transition-all"
          >
            <span className={`w-5 h-0.5 bg-primary transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}></span>
            <span className={`w-5 h-0.5 bg-primary transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}></span>
            <span className={`w-5 h-0.5 bg-primary transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu (< md) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-primary/10 shadow-2xl ${
          isMobileMenuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-5 py-6 space-y-5 overflow-y-auto max-h-[80vh]">
          {/* Main Navigation Links */}
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="px-3 py-2.5 rounded-xl font-bold text-sm text-on-surface hover:bg-primary/5 hover:text-primary flex items-center justify-between transition-colors"
            >
              <span>Beranda</span>
              <i className="fi fi-rr-home text-primary/50 text-xs"></i>
            </Link>

            <a
              href="#coverage"
              onClick={closeMobileMenu}
              className="px-3 py-2.5 rounded-xl font-bold text-sm text-on-surface hover:bg-primary/5 hover:text-primary flex items-center justify-between transition-colors"
            >
              <span>Area Cakupan {cityName}</span>
              <i className="fi fi-rr-marker text-primary/50 text-xs"></i>
            </a>

            <a
              href="#issues"
              onClick={closeMobileMenu}
              className="px-3 py-2.5 rounded-xl font-bold text-sm text-on-surface hover:bg-primary/5 hover:text-primary flex items-center justify-between transition-colors"
            >
              <span>Gejala Kerusakan & Solusi</span>
              <i className="fi fi-rr-tools text-primary/50 text-xs"></i>
            </a>

            <a
              href="#faq"
              onClick={closeMobileMenu}
              className="px-3 py-2.5 rounded-xl font-bold text-sm text-on-surface hover:bg-primary/5 hover:text-primary flex items-center justify-between transition-colors"
            >
              <span>Tanya Jawab (FAQ)</span>
              <i className="fi fi-rr-interrogation text-primary/50 text-xs"></i>
            </a>
          </div>

          {/* City Selection for Current Service */}
          <div className="pt-3 border-t border-primary/10">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                Kota Layanan ({currentService})
              </span>
              <span className="text-[10px] font-semibold text-on-surface-variant/70">
                Pilih Kota:
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {allCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${serviceSlug}/${c.slug}`}
                  onClick={closeMobileMenu}
                  className={`px-3 py-2 rounded-xl text-xs font-bold text-center border transition-all ${
                    c.slug === citySlug
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-surface text-on-surface border-primary/10 hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Switch Service Category in This City */}
          <div className="pt-3 border-t border-primary/10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-2 px-1">
              Kategori Layanan Lain di {cityName}
            </span>
            <div className="grid grid-cols-3 gap-2">
              {allServices.map((srv) => (
                <Link
                  key={srv.id}
                  href={`/${srv.id}/${citySlug}`}
                  onClick={closeMobileMenu}
                  className={`p-2.5 rounded-xl text-xs font-bold text-center border flex flex-col items-center gap-1 transition-all ${
                    srv.id === serviceSlug
                      ? "bg-primary/10 text-primary border-primary/30"
                      : "bg-surface text-on-surface border-primary/10 hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  <i className={`${srv.icon} text-sm`}></i>
                  <span className="text-[11px] leading-tight">{srv.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Bottom CTA */}
          <div className="pt-3 border-t border-primary/10">
            <a
              href={getCityWhatsAppLink(currentService, cityName)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="w-full bg-gradient-primary text-white py-3 px-4 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              <i className="fi fi-brands-whatsapp text-base"></i>
              <span>Hubungi Teknisi di {cityName}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
