"use client";

import { useState, useEffect } from "react";

export default function TestimonialCarousel() {
  const testimonials = [
    { name: "Ibu Grace", loc: "Sambikerep, Sby", quote: "Sudah jadi langganan kalau ada kompor listrik & water heater ngadat. Soalnya bisa dipanggil kapan aja saya butuh cepat.", stars: 5 },
    { name: "Ibu Indri", loc: "Kenjeran, Sby", quote: "Teknisi datang tepat waktu dan jelasin masalahnya dengan jelas. Sekarang water heater saya nyala stabil dan aman.", stars: 5 },
    { name: "Mama Hana", loc: "Wiyung, Sby", quote: "Awalnya ragu, tapi ternyata hasilnya memuaskan. Kompor saya jadi normal lagi, dan harganya juga transparan, nggak ada biaya tambahan aneh-aneh.", stars: 5 },
    { name: "Bpk. Hendra", loc: "Rungkut, Sby", quote: "Panggil teknisi untuk maintenance rutin water heater. Pengerjaan sangat detail sampai dibersihkan kerak-keraknya. Sekarang suhu airnya stabil lagi.", stars: 5 },
    { name: "Ibu Maya", loc: "Gubeng, Sby", quote: "Restorasi kompor peninggalan orang tua yang tadinya macet total. Sekarang jadi kinclong dan nyala apinya biru sempurna. Terima kasih TeknoHome!", stars: 5 },
    { name: "Bpk. Agus", loc: "Darmo, Sby", quote: "Layanan daruratnya mantap. Kompor gas bocor di hari Minggu tetap dilayani dengan cepat. Teknisi sangat tenang dan solutif.", stars: 5 },
    { name: "Ibu Shinta", loc: "Mulyorejo, Sby", quote: "Sangat terbantu dengan layanan TeknoHome. Kompor gas yang apinya merah terus sekarang jadi biru bersih lagi. Teknisi juga kasih tips perawatan yang berguna.", stars: 5 },
    { name: "Bpk. Farhan", loc: "Tandes, Sby", quote: "Layanan servis water heater terbaik di Surabaya. Proses booking via WA gampang banget, teknisi datang tepat waktu dan kerjanya profesional.", stars: 5 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Calculate visible testimonials (looping logic or just slide)
  // For simplicity, we'll use a sliding window approach with transform

  return (
    <div className="relative">
      <div className="overflow-hidden py-10">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="px-3 flex-shrink-0"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="glass p-8 md:p-10 rounded-[40px] border border-primary/5 hover:border-primary/20 transition-all duration-500 h-full flex flex-col group min-h-[350px]">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.stars)].map((_, j) => (
                    <i key={j} className="fi fi-rr-star text-secondary text-xl"></i>
                  ))}
                </div>

                <p className="text-on-surface-variant text-lg italic leading-relaxed mb-8 flex-1 line-clamp-4">"{t.quote}"</p>
                
                <div className="flex items-center gap-4 border-t border-outline-variant/30 pt-6 mt-auto">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">{t.name}</h4>
                    <p className="text-xs text-on-surface-variant font-medium uppercase tracking-wider">{t.loc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prev}
        className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full glass border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-xl z-20 group active:scale-90"
      >
        <i className="fi fi-rr-angle-left text-2xl group-hover:-translate-x-1 transition-transform"></i>
      </button>

      <button 
        onClick={next}
        className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full glass border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-xl z-20 group active:scale-90"
      >
        <i className="fi fi-rr-angle-right text-2xl group-hover:translate-x-1 transition-transform"></i>
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {[...Array(maxIndex + 1)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              currentIndex === i ? "w-10 bg-primary" : "w-2.5 bg-primary/20"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
