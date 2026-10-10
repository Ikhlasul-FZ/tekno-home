export interface PortfolioItem {
  src: string;
  title: string;
  category: "Instalasi Baru" | "Perbaikan & Servis" | "Kuras & Perawatan";
  location: string;
  badge?: string;
  desc?: string;
}

export interface CityData {
  slug: string;
  name: string;
  province: string;
  headline: string;
  subheadline: string;
  statusBadge: string;
  coverageAreas: string[];
  serviceHighlight: string;
  technicianEta: string;
  mapQuery: string;
  commonIssues: {
    title: string;
    desc: string;
    icon: string;
  }[];
  faq: {
    q: string;
    a: string;
  }[];
  portfolio?: PortfolioItem[];
}

export const waterHeaterCities: Record<string, CityData> = {
  jakarta: {
    slug: "jakarta",
    name: "Jakarta",
    province: "DKI Jakarta",
    headline: "Service Water Heater Jakarta — Bergaransi & Teknisi Berpengalaman",
    subheadline: "Solusi cepat & aman untuk perbaikan water heater listrik, gas, dan tenaga surya. Layanan panggilan ke rumah, apartemen, dan kantor di seluruh wilayah Jakarta.",
    statusBadge: "Layanan Panggilan Area Jakarta & Sekitarnya",
    coverageAreas: [
      "Jakarta Selatan (Pondok Indah, Kebayoran, Cilandak, Kemang, Tebet)",
      "Jakarta Barat (Puri Indah, Kebon Jeruk, Grogol, Kembangan)",
      "Jakarta Pusat (Menteng, Tanah Abang, Cempaka Putih)",
      "Jakarta Timur (Rawamangun, Duren Sawit, Pulomas, Cakung)",
      "Jakarta Utara (Kelapa Gading, Pluit, Pantai Indah Kapuk / PIK, Sunter)"
    ],
    serviceHighlight: "Teknisi siap datang ke perumahan, apartemen, dan kantor dengan peralatan diagnosa lengkap & suku cadang original.",
    technicianEta: "30 - 60 Menit Siap Meluncur",
    mapQuery: "Jakarta, Indonesia",
    commonIssues: [
      { title: "Air Tidak Mau Panas", desc: "Elemen pemanas (heating element) putus, kotor oleh kerak kapur, atau thermostat rusak.", icon: "fi fi-rr-temperature-down" },
      { title: "Korslet / MCB Anjlok", desc: "Kebocoran arus pada tabung atau kabel, ELCB otomatis memutus daya demi keamanan keluarga.", icon: "fi fi-rr-bolt" },
      { title: "Tabung atau Pipa Bocor", desc: "Seal karet getas, pipa fleksibel pecah, atau tangki mengalami korosi dan keropos.", icon: "fi fi-rr-water" },
      { title: "Tekanan Air Melemah", desc: "Penyumbatan kerak mineral pada saluran masuk/keluar atau katup safety valve tersumbat.", icon: "fi fi-rr-gauge" },
      { title: "Bau Hangus / Asap", desc: "Kabel terbakar atau soket terminal meleleh akibat beban panas berlebih pada komponen listrik.", icon: "fi fi-rr-flame" },
      { title: "Air Terlalu Panas", desc: "Kerusakan pada sensor pengatur suhu (thermostat) sehingga pemanas bekerja tanpa jeda otomatis.", icon: "fi fi-rr-sun" }
    ],
    faq: [
      {
        q: "Berapa lama waktu tunggu kedatangan teknisi di area Jakarta?",
        a: "Setelah jadwal pemesanan dikonfirmasi via WhatsApp, teknisi terdekat di wilayah Jakarta siap meluncur sesuai waktu kesepakatan Anda."
      },
      {
        q: "Apakah pengerjaan servis water heater dilakukan langsung di lokasi?",
        a: "Ya, 100% pengerjaan dilakukan langsung di rumah atau apartemen Anda sehingga Anda dapat memantau proses diagnosa dan penggantian sparepart."
      },
      {
        q: "Apakah ada garansi setelah perbaikan?",
        a: "Tekno Home Services memberikan garansi resmi untuk setiap perbaikan dan penggantian suku cadang demi ketenangan total Anda."
      },
      {
        q: "Merk water heater apa saja yang dapat diperbaiki di Jakarta?",
        a: "Kami melayani seluruh merk populer seperti Ariston, Modena, Rinnai, Polaris, Wika, Rheem, Electrolux, Ferroli, Gainsborough, Daalderop, dan lainnya."
      }
    ],
    portfolio: [
      {
        src: "/ars12.webp",
        title: "Instalasi Water Heater Ariston Baru",
        category: "Instalasi Baru",
        location: "Apartemen Menteng, Jakarta Pusat",
        badge: "Pemasangan Rapi",
        desc: "Pemasangan unit water heater baru dengan fitting pipa kuningan anti karat dan pengaman ELCB standar SNI."
      },
      {
        src: "/img2.webp",
        title: "Pemasangan Water Heater Listrik Residensial",
        category: "Instalasi Baru",
        location: "Kebayoran Baru, Jakarta Selatan",
        badge: "Unit Baru",
        desc: "Instalasi unit water heater tabung 30L pada rumah tinggal dengan instalasi pipa rapi dan pengetesan suhu optimal."
      },
      {
        src: "/ars1.webp",
        title: "Penggantian Elemen Pemanas & Thermostat",
        category: "Perbaikan & Servis",
        location: "Pondok Indah, Jakarta Selatan",
        badge: "Garansi 90 Hari",
        desc: "Mengatasi kendala air tidak mau panas akibat heating element putus. Diganti sparepart original dengan garansi resmi."
      },
      {
        src: "/ars11.webp",
        title: "Penanganan Korsleting Listrik & MCB Anjlok",
        category: "Perbaikan & Servis",
        location: "Kelapa Gading, Jakarta Utara",
        badge: "Respon Cepat",
        desc: "Deteksi kebocoran arus dan rekondisi saklar proteksi ELCB demi keselamatan penghuni rumah."
      },
      {
        src: "/ars3.webp",
        title: "Kuras Kerak Kapur & Ganti Magnesium Anode",
        category: "Kuras & Perawatan",
        location: "Puri Indah, Jakarta Barat",
        badge: "Maintenance",
        desc: "Flushing total endapan kapur tebal dan pasang magnesium anode baru untuk mencegah tabung keropos."
      },
      {
        src: "/ars (4).webp",
        title: "Pengecekan Komprehensif Water Heater Apartemen",
        category: "Perbaikan & Servis",
        location: "Pantai Indah Kapuk (PIK), Jakarta Utara",
        badge: "Unit Normal",
        desc: "Servis kelistrikan dan perbaikan pressure safety valve yang bocor merembes ke dinding kamar mandi."
      }
    ]
  },
  tangerang: {
    slug: "tangerang",
    name: "Tangerang",
    province: "Banten",
    headline: "Service Water Heater Tangerang & Tangsel — Bergaransi Resmi",
    subheadline: "Teknisi ahli berpengalaman untuk perbaikan water heater di kawasan BSD, Gading Serpong, Karawaci, Alam Sutera, Bintaro, dan seluruh wilayah Tangerang.",
    statusBadge: "Layanan Panggilan Area Tangerang & Tangsel",
    coverageAreas: [
      "BSD City & Serpong",
      "Gading Serpong & Kelapa Dua",
      "Alam Sutera & Pinang",
      "Bintaro Jaya & Pondok Aren",
      "Lippo Karawaci & Tangerang Kota",
      "Ciputat & Pamulang"
    ],
    serviceHighlight: "Fokus melayani perumahan klaster, ruko, dan apartemen dengan standar pengerjaan rapi dan bersih.",
    technicianEta: "Siap Meluncur ke Lokasi",
    mapQuery: "Tangerang, Banten, Indonesia",
    commonIssues: [
      { title: "Air Tidak Panas", desc: "Elemen pemanas rusak atau thermostat tidak menyalurkan arus dengan normal.", icon: "fi fi-rr-temperature-down" },
      { title: "MCB / ELCB Trip", desc: "Kebocoran arus listrik internal yang terdeteksi oleh pengaman kelistrikan rumah.", icon: "fi fi-rr-bolt" },
      { title: "Pipa & Seal Bocor", desc: "Pipa inlet/outlet bocor atau seal karet penahan tekanan tabung rusak.", icon: "fi fi-rr-water" },
      { title: "Kerak Air Menumpuk", desc: "Kualitas air tanah berkapur menyebabkan kerak tebal dan efisiensi panas menurun drastis.", icon: "fi fi-rr-vacuum" },
      { title: "Indikator Lampu Mati", desc: "Modul daya mati total atau sekring pengaman internal terputus.", icon: "fi fi-rr-power" },
      { title: "Air Berbau / Keruh", desc: "Anoda korban (magnesium anode) sudah habis sehingga tabung mulai berkarat.", icon: "fi fi-rr-refresh" }
    ],
    faq: [
      {
        q: "Apakah melayani area klaster BSD dan Gading Serpong?",
        a: "Ya, teknisi kami memiliki mobilitas tinggi untuk menjangkau area klaster perumahan di BSD City, Gading Serpong, Alam Sutera, dan sekitarnya."
      },
      {
        q: "Bagaimana cara memesan servis water heater di Tangerang?",
        a: "Cukup klik tombol WhatsApp di halaman ini, kirimkan foto/video kendala unit Anda, dan admin kami akan mengatur jadwal kunjungan teknisi."
      },
      {
        q: "Berapa biaya servis water heater di Tangerang?",
        a: "Biaya disesuaikan dengan jenis kerusakan setelah teknisi melakukan pengecekan teliti. Estimasi biaya selalu diinfokan di awal tanpa biaya tersembunyi."
      }
    ],
    portfolio: [
      {
        src: "/ars2.webp",
        title: "Instalasi Water Heater Kamar Mandi Klaster",
        category: "Instalasi Baru",
        location: "BSD City, Serpong",
        badge: "Klaster Baru",
        desc: "Instalasi baru unit water heater di perumahan BSD City dengan uji tekanan air dingin dan panas seimbang."
      },
      {
        src: "/ars14.webp",
        title: "Perbaikan Kebocoran Pipa & Seal Karet Tahan Panas",
        category: "Perbaikan & Servis",
        location: "Gading Serpong, Kelapa Dua",
        badge: "Garansi 90 Hari",
        desc: "Mengganti seal paking silikon tahan panas dan pipa fleksibel stainless yang rapuh termakan usia."
      },
      {
        src: "/ars (6).webp",
        title: "Servis Air Tidak Panas & Ganti Sensor Suhu",
        category: "Perbaikan & Servis",
        location: "Alam Sutera, Pinang",
        badge: "Suku Cadang Ori",
        desc: "Penggantian thermostat sensor ganda agar temperatur air mandi stabil sesuai setelan."
      },
      {
        src: "/ars4.webp",
        title: "Pembersihan Rutin Kerak Air Kapur Tanah",
        category: "Kuras & Perawatan",
        location: "Bintaro Jaya Sektor 9",
        badge: "Perawatan Rutin",
        desc: "Pembersihan tabung dari endapan mineral air tanah agar elemen pemanas awet dan hemat pemakaian listrik."
      },
      {
        src: "/ars (13).webp",
        title: "Penggantian Safety Valve & Cek Tekanan Tabung",
        category: "Perbaikan & Servis",
        location: "Lippo Karawaci, Tangerang Kota",
        badge: "Selesai Rapi",
        desc: "Mengatasi katup pelepas tekanan yang macet dan menyebabkan aliran air panas menetes tanpa henti."
      },
      {
        src: "/ars10.webp",
        title: "Instalasi Unit Water Heater Baru Townhouse",
        category: "Instalasi Baru",
        location: "Pamulang, Tangerang Selatan",
        badge: "Instalasi Baru",
        desc: "Pemasangan unit pemanas air elektrik hemat daya dengan dudukan bracket kokoh dan aman."
      }
    ]
  },
  bogor: {
    slug: "bogor",
    name: "Bogor",
    province: "Jawa Barat",
    headline: "Service Water Heater Bogor & Sentul — Respon Cepat & Bergaransi",
    subheadline: "Layanan perbaikan water heater untuk wilayah Kota Bogor, Sentul City, Cibinong, dan sekitarnya. Air hangat kembali nyaman untuk keluarga Anda.",
    statusBadge: "Layanan Panggilan Area Bogor & Sentul",
    coverageAreas: [
      "Sentul City & Babakan Madang",
      "Bogor Kota (Baranangsiang, Pajajaran, Yasmin)",
      "Bogor Timur & Bogor Selatan",
      "Cibinong & Bojonggede",
      "Gunung Putri & Cikeas"
    ],
    serviceHighlight: "Sangat memahami kebutuhan air panas stabil untuk cuaca sejuk Bogor dan Sentul City.",
    technicianEta: "Penjadwalan Cepat & Tepat Waktu",
    mapQuery: "Bogor, Jawa Barat, Indonesia",
    commonIssues: [
      { title: "Air Kurang Panas", desc: "Di iklim sejuk, elemen pemanas yang kotor bekerja lebih lambat menaikkan suhu air.", icon: "fi fi-rr-temperature-down" },
      { title: "Suhu Tidak Stabil", desc: "Thermostat aus sehingga air kadang panas mendadak atau kembali dingin.", icon: "fi fi-rr-settings" },
      { title: "Korsleting Listrik", desc: "Kabel lembab atau korslet pada modul board internal water heater.", icon: "fi fi-rr-bolt" },
      { title: "Kebocoran Tabung", desc: "Penyusutan dan ekspansi suhu yang menyebabkan retak mikro pada sambungan pipa.", icon: "fi fi-rr-water" },
      { title: "Suara Gemuruh / Mendidih", desc: "Endapan sedimen kapur yang tebal di dasar tabung menyebabkan suara bising.", icon: "fi fi-rr-volume" },
      { title: "Bau Gas Menyengat (Tipe Gas)", desc: "Kebocoran jalur selang atau pemantik piezoelektrik tidak membakar gas sempurna.", icon: "fi fi-rr-flame" }
    ],
    faq: [
      {
        q: "Apakah melayani villa dan rumah tinggal di kawasan Sentul?",
        a: "Ya, kami melayani perbaikan water heater untuk rumah pribadi, villa, maupun homestay di Sentul dan Kota Bogor."
      },
      {
        q: "Apakah teknisi membawa suku cadang pengganti?",
        a: "Teknisi kami membawa perlengkapan suku cadang umum (thermostat, elemen pemanas, ELCB, seal) untuk penanganan cepat di tempat."
      }
    ],
    portfolio: [
      {
        src: "/ars5.webp",
        title: "Servis Rutin Water Heater Villa Sentul",
        category: "Kuras & Perawatan",
        location: "Sentul City, Babakan Madang",
        badge: "Villa & Hunian",
        desc: "Perawatan berkala dan flushing tabung kapasitas besar untuk memastikan air hangat selalu siap pakai di iklim sejuk Sentul."
      },
      {
        src: "/ars7.webp",
        title: "Perbaikan Heating Element Terbakar",
        category: "Perbaikan & Servis",
        location: "Pajajaran, Bogor Kota",
        badge: "Garansi 90 Hari",
        desc: "Penggantian elemen pemanas tembaga original dan pembersihan kerak dasar tabung yang menghambat transfer panas."
      },
      {
        src: "/ars (8).webp",
        title: "Perbaikan ELCB & Kebocoran Arus Lembab",
        category: "Perbaikan & Servis",
        location: "Taman Yasmin, Bogor Barat",
        badge: "Aman Teruji",
        desc: "Penanganan korsleting listrik yang membuat saklar ELCB berbunyi dan anjlok setiap unit dinyalakan."
      },
      {
        src: "/ars13.webp",
        title: "Pemasangan Water Heater Baru Rumah Tinggal",
        category: "Instalasi Baru",
        location: "Baranangsiang, Bogor Timur",
        badge: "Instalasi Baru",
        desc: "Instalasi water heater listrik efisien lengkap dengan jalur pipa air panas baru dan kran mixer shower."
      },
      {
        src: "/ars (2).webp",
        title: "Kuras Total Sedimen & Pembersihan Tangki",
        category: "Kuras & Perawatan",
        location: "Cibinong, Kabupaten Bogor",
        badge: "Flushing Tuntas",
        desc: "Menguras endapan pasir dan lumpur halus dari air tanah yang menyumbat sirkulasi pemanas air."
      },
      {
        src: "/ars9.webp",
        title: "Kalibrasi Thermostat & Suhu Otomatis",
        category: "Perbaikan & Servis",
        location: "Sentul Highlands, Bogor",
        badge: "Suhu Normal",
        desc: "Penyetelan sensor pengatur suhu agar air tidak overheating (terlalu mendidih) saat digunakan keluarga."
      }
    ]
  },
  bali: {
    slug: "bali",
    name: "Bali",
    province: "Bali",
    headline: "Service Water Heater Bali — Spesialis Villa, Rumah & Penginapan",
    subheadline: "Penanganan profesional untuk water heater tenaga surya (solar), listrik, dan gas di Denpasar, Badung, Kuta, Seminyak, Canggu, Sanur, dan sekitarnya.",
    statusBadge: "Spesialis Villa, Rumah Tinggal & Penginapan Bali",
    coverageAreas: [
      "Denpasar (Denpasar Selatan, Barat, Timur, Utara)",
      "Badung (Kuta, Seminyak, Legian, Canggu, Kerobokan)",
      "Sanur & Renon",
      "Jimbaran & Nusa Dua",
      "Ubud & Gianyar Sekitarnya"
    ],
    serviceHighlight: "Pengalaman tinggi menangani unit kapasitas besar untuk villa privat, guest house, serta hunian residensial.",
    technicianEta: "Siaga Wilayah Denpasar & Badung",
    mapQuery: "Denpasar, Bali, Indonesia",
    commonIssues: [
      { title: "Korosi Akibat Udara Laut", desc: "Udara pesisir pantai mempercepat korosi pada komponen luar dan pipa fitting water heater.", icon: "fi fi-rr-shield-exclamation" },
      { title: "Pemanas Solar Tidak Panas", desc: "Kolektor surya berdebu, sirkulasi pipa tersumbat, atau backup heater listrik mati.", icon: "fi fi-rr-sun" },
      { title: "Korslet Akibat Kelembapan", desc: "Kelembapan tinggi memicu trip pada saklar pengaman ELCB.", icon: "fi fi-rr-bolt" },
      { title: "Endapan Kapur & Sedimen", desc: "Air sumur di area tertentu mengandung kadar kapur tinggi yang menyumbat tabung.", icon: "fi fi-rr-vacuum" },
      { title: "Tekanan Air Melemah", desc: "Pompa pendorong (booster pump) tidak sinkron dengan valve water heater.", icon: "fi fi-rr-gauge" },
      { title: "Bocor Pada Katup Relief", desc: "Pressure relief valve rusak dan terus mengalirkan air keluar tabung.", icon: "fi fi-rr-water" }
    ],
    faq: [
      {
        q: "Apakah melayani servis water heater tenaga surya (Solar Water Heater)?",
        a: "Ya, tim kami berpengalaman menangani solar water heater (Wika Solar, Solahart, Edwards, Handal, dll) serta water heater listrik konvensional."
      },
      {
        q: "Apakah melayani villa sewa yang sedang ada tamu?",
        a: "Tentu, kami memahami urgensi kenyamanan tamu Anda. Kami memberikan prioritas penanganan darurat dengan pengerjaan senyap dan rapi."
      }
    ],
    portfolio: [
      {
        src: "/ars6.webp",
        title: "Maintenance Water Heater Villa Wisatawan",
        category: "Kuras & Perawatan",
        location: "Seminyak, Badung",
        badge: "Spesialis Villa",
        desc: "Perawatan berkala sistem water heater multi-point villa sewa demi kenyamanan maksimal para tamu mancanegara."
      },
      {
        src: "/ars8.webp",
        title: "Penanganan Air Kurang Panas & Tekanan Lemah",
        category: "Perbaikan & Servis",
        location: "Canggu, Kuta Utara",
        badge: "Respon Cepat",
        desc: "Pembersihan kerak kapur pada elemen pemanas dan penyesuaian valve booster pump air hangat."
      },
      {
        src: "/ars (10).webp",
        title: "Servis Darurat Water Heater Guest House",
        category: "Perbaikan & Servis",
        location: "Sanur, Denpasar Selatan",
        badge: "Darurat 24 Jam",
        desc: "Penanganan darurat kebocoran nepel pipa dan kabel terbakar yang diselesaikan dalam waktu 1 jam kunjungan."
      },
      {
        src: "/ars (12).webp",
        title: "Servis Pemanas Air Elektrik Villa Tropis",
        category: "Perbaikan & Servis",
        location: "Ubud, Gianyar",
        badge: "Garansi Resmi",
        desc: "Penggantian modul kelistrikan dan uji stabilitas panas di tengah suasana sejuk pedalaman Ubud."
      },
      {
        src: "/ars (15).webp",
        title: "Penggantian Fitting & Anti-Korosi Pesisir",
        category: "Perbaikan & Servis",
        location: "Nusa Dua, Badung",
        badge: "Anti Korosi",
        desc: "Penggantian komponen fitting logam yang rentan korosi uap garam laut dengan material kuningan tahan lama."
      },
      {
        src: "/ars (1).webp",
        title: "Instalasi Unit Baru Rumah Residensial",
        category: "Instalasi Baru",
        location: "Renon, Denpasar Timur",
        badge: "Instalasi Baru",
        desc: "Pemasangan water heater hemat energi untuk hunian keluarga dengan penataan kabel dan pipa tersembunyi rapi."
      }
    ]
  },
  surabaya: {
    slug: "surabaya",
    name: "Surabaya",
    province: "Jawa Timur",
    headline: "Service Water Heater Surabaya — Pusat Operasional Utama Siaga 24 Jam",
    subheadline: "Spesialis servis water heater terpercaya di Surabaya. Pengerjaan di tempat oleh teknisi berpengalaman, suku cadang original, respon ekspres, dan bergaransi resmi.",
    statusBadge: "Kantor Pusat Operasional • Siaga 24 Jam",
    coverageAreas: [
      "Surabaya Barat (Citraland, Pakuwon Mall, Graha Famili, Wiyung, Sambikerep, Tandes)",
      "Surabaya Timur (Rungkut, Mulyorejo, Sukolilo, Kenjeran, Dharmahusada)",
      "Surabaya Selatan (Wonokromo, Gunungsari, Gayungan, Jambangan, Ketintang)",
      "Surabaya Pusat (Tegalsari, Gubeng, Basuki Rahmat, Diponegoro)",
      "Surabaya Utara & Wilayah Sidoarjo / Waru"
    ],
    serviceHighlight: "Pusat teknisi utama Tekno Home Services dengan armada lengkap dan stok sparepart terlengkap.",
    technicianEta: "Respon Cepat 20 - 45 Menit",
    mapQuery: "Jl. Gunungsari No.15, Sawunggaling, Wonokromo, Surabaya",
    commonIssues: [
      { title: "Air Tidak Panas", desc: "Pemanas mati atau thermostat tidak bekerja. Suku cadang original siap ganti langsung.", icon: "fi fi-rr-temperature-down" },
      { title: "Konslet & MCB Rumah Turun", desc: "Kebocoran arus yang kami diagnosa tuntas dengan alat uji insulasi presisi.", icon: "fi fi-rr-bolt" },
      { title: "Bocor Air Tetesan Pipa", desc: "Penggantian seal karet tahan panas, fitting nepel, dan pipa fleksibel berkualitas tinggi.", icon: "fi fi-rr-water" },
      { title: "Pembersihan Kerak Rutin", desc: "Flushing kerak air dan penggantian magnesium anode agar tabung awet bertahun-tahun.", icon: "fi fi-rr-vacuum" },
      { title: "Modul Sensor Error", desc: "Perbaikan modul digital untuk tipe modern touch panel / display LED.", icon: "fi fi-rr-settings" },
      { title: "Tekanan Air Kurang Kencang", desc: "Pembersihan filter inlet dan safety valve yang tersumbat endapan kotoran air pipa.", icon: "fi fi-rr-gauge" }
    ],
    faq: [
      {
        q: "Di mana alamat kantor operasional Tekno Home Services di Surabaya?",
        a: "Kantor kami berlokasi di Jl. Gunungsari No.15, Sawunggaling, Kec. Wonokromo, Surabaya. Teknisi kami melayani panggilan ke seluruh sudut Surabaya."
      },
      {
        q: "Berapa lama estimasi pengerjaan servis water heater?",
        a: "Rata-rata pengerjaan berkisar antara 45 hingga 90 menit tergantung jenis kendala dan tipe unit Anda."
      },
      {
        q: "Apakah ada layanan panggilan darurat 24 jam?",
        a: "Ya, kami menyediakan hotline WhatsApp 24 jam untuk melayani kendala darurat air bocor atau korslet kapan pun Anda butuhkan."
      }
    ],
    portfolio: [
      {
        src: "/ars12.webp",
        title: "Instalasi Water Heater Kapasitas 50L",
        category: "Instalasi Baru",
        location: "Citraland, Surabaya Barat",
        badge: "Pusat Operasional",
        desc: "Pemasangan water heater tabung 50L melayani 2 kamar mandi sekaligus dengan pembagian debit air merata."
      },
      {
        src: "/ars (14).webp",
        title: "Flushing Kerak Kapur & Ganti Magnesium Anode",
        category: "Kuras & Perawatan",
        location: "Graha Famili, Surabaya Barat",
        badge: "Perawatan Rutin",
        desc: "Pembersihan total endapan kapur tebal dan penggantian anoda korban pelindung tangki anti karat."
      },
      {
        src: "/ars (16).webp",
        title: "Perbaikan Modul Digital & Display Sentuh",
        category: "Perbaikan & Servis",
        location: "Pakuwon Mall Area, Surabaya Barat",
        badge: "Suku Cadang Ori",
        desc: "Perbaikan board kontrol mikrokontroler water heater seri modern yang error mati mendadak."
      },
      {
        src: "/ars1.webp",
        title: "Servis Cepat Air Tidak Panas & Elemen Rusak",
        category: "Perbaikan & Servis",
        location: "Rungkut, Surabaya Timur",
        badge: "Garansi 90 Hari",
        desc: "Penggantian elemen pemanas putus dan pengetesan ketahanan isolasi kabel berstandar keselamatan tinggi."
      },
      {
        src: "/ars11.webp",
        title: "Perbaikan Kebocoran & Penataan Jalur Pipa",
        category: "Perbaikan & Servis",
        location: "Gubeng, Surabaya Pusat",
        badge: "Selesai Rapi",
        desc: "Perbaikan kebocoran paking tangki dan penggantian selang fleksibel lapis anyaman stainless steel."
      },
      {
        src: "/ars (5).webp",
        title: "Kalibrasi Safety Valve & Tekanan Air",
        category: "Perbaikan & Servis",
        location: "Dharmahusada, Surabaya Timur",
        badge: "Garansi Resmi",
        desc: "Pengecekan one-way safety valve untuk mencegah tekanan balik tabung saat air dipanaskan maksimal."
      }
    ]
  },
  medan: {
    slug: "medan",
    name: "Medan",
    province: "Sumatera Utara",
    headline: "Service Water Heater Medan — Bergaransi & Teknisi Handal",
    subheadline: "Layanan perbaikan dan perawatan water heater di Kota Medan dan sekitarnya. Cepat, transparan, dan bergaransi resmi.",
    statusBadge: "Layanan Panggilan Area Kota Medan",
    coverageAreas: [
      "Medan Kota & Medan Barat",
      "Medan Petisah & Medan Baru",
      "Medan Helvetia & Sunggal",
      "Medan Johor & Selayang",
      "Komplek Cemara Asri & Medan Timur"
    ],
    serviceHighlight: "Pelayanan profesional untuk rumah tinggal, ruko, kos-kosan eksekutif, dan fasilitas bisnis di Medan.",
    technicianEta: "Siaga Meluncur ke Lokasi",
    mapQuery: "Medan, Sumatera Utara, Indonesia",
    commonIssues: [
      { title: "Air Tidak Mau Panas", desc: "Masalah pada elemen pemanas atau switch thermostat pengatur suhu air.", icon: "fi fi-rr-temperature-down" },
      { title: "Listrik Anjlok Saat Dinyalakan", desc: "Terjadi kebocoran arus ke bodi tabung yang langsung memicu pemutus ELCB.", icon: "fi fi-rr-bolt" },
      { title: "Kebocoran Air", desc: "Kerusakan pada paking seal, pipa fleksibel getas, atau tabung tangki aus.", icon: "fi fi-rr-water" },
      { title: "Endapan Mineral Pekat", desc: "Penumpukan kerak sedimen air yang menghambat hantaran panas elemen pemanas.", icon: "fi fi-rr-vacuum" },
      { title: "Lampu Indikator Tidak Menyala", desc: "Kerusakan modul sirkuit, tombol on/off, atau sekring internal putus.", icon: "fi fi-rr-power" },
      { title: "Suhu Tidak Terkontrol", desc: "Sensor suhu rusak sehingga air tidak mencapai temperatur yang diinginkan.", icon: "fi fi-rr-settings" }
    ],
    faq: [
      {
        q: "Apakah teknisi melayani panggilan ke perumahan dan komplek di Medan?",
        a: "Ya, teknisi kami melayani panggilan ke seluruh kawasan komplek, perumahan, ruko, dan apartemen di Kota Medan."
      },
      {
        q: "Bagaimana sistem garansi pengerjaannya?",
        a: "Setiap pekerjaan servis disertai nota dan garansi resmi. Jika kendala yang sama terulang dalam masa garansi, kami perbaiki kembali tanpa biaya tambahan."
      }
    ],
    portfolio: [
      {
        src: "/ars3.webp",
        title: "Perbaikan Water Heater Listrik Komplek",
        category: "Perbaikan & Servis",
        location: "Komplek Cemara Asri, Medan",
        badge: "Garansi 90 Hari",
        desc: "Mengatasi kendala pemanas air mati total dengan penggantian switch daya dan thermostat baru."
      },
      {
        src: "/ars9.webp",
        title: "Penggantian Saklar Pengaman ELCB Anti-Korslet",
        category: "Perbaikan & Servis",
        location: "Medan Baru, Kota Medan",
        badge: "Suku Cadang Ori",
        desc: "Mengganti ELCB sensitif 10mA yang melindungi pemakai dari risiko sengatan listrik saat mandi."
      },
      {
        src: "/ars (3).webp",
        title: "Instalasi Water Heater Kamar Mandi Utama",
        category: "Instalasi Baru",
        location: "Medan Petisah, Kota Medan",
        badge: "Instalasi Baru",
        desc: "Instalasi unit water heater instan / storage dengan penataan pipa tertutup rapi dan estetis."
      },
      {
        src: "/ars (7).webp",
        title: "Kuras Total Kerak & Sedimen Air Sumur",
        category: "Kuras & Perawatan",
        location: "Medan Helvetia & Sunggal",
        badge: "Flushing Tuntas",
        desc: "Membersihkan endapan lumpur halus dan kerak kapur agar tabung air tidak mengeluarkan bau besi atau keruh."
      },
      {
        src: "/ars (9).webp",
        title: "Perbaikan Air Kurang Panas & Sensor Rusak",
        category: "Perbaikan & Servis",
        location: "Medan Johor & Selayang",
        badge: "Selesai Rapi",
        desc: "Perbaikan kontak pengatur temperatur dan pemeriksaan kontinuitas listrik heating element."
      },
      {
        src: "/ars (11).webp",
        title: "Pengecekan Pipa Inlet & Valve Pengaman",
        category: "Perbaikan & Servis",
        location: "Medan Barat, Kota Medan",
        badge: "Garansi Resmi",
        desc: "Pergantian katup pengaman anti-overpressure dan selang fleksibel berkualitas tinggi."
      }
    ]
  }
};

export const supportedBrands = [
  "Ariston",
  "Modena",
  "Rinnai",
  "Polaris",
  "Wika",
  "Rheem",
  "Electrolux",
  "Ferroli",
  "Gainsborough",
  "Daalderop",
  "Paloma",
  "Chamberlain"
];
