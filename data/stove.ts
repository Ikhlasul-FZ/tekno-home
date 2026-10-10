export interface PortfolioItem {
  src: string;
  title: string;
  category: "Kompor Tanam" | "Freestanding Cooker" | "Kompor Induksi" | "Servis Api & Pemantik";
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

export const supportedStoveBrands = [
  "Modena",
  "Ariston",
  "Electrolux",
  "La Germania",
  "Tecnogas",
  "Delizia",
  "Rinnai",
  "Bosch",
  "Smeg",
  "Bertazzoni",
  "Beko",
  "Domo",
  "Brandt",
  "Fotile",
  "Franke",
];

export const stoveCities: Record<string, CityData> = {
  jakarta: {
    slug: "jakarta",
    name: "Jakarta",
    province: "DKI Jakarta",
    headline: "Service Kompor Panggilan Jakarta — Bergaransi & Teknisi Ahli",
    subheadline: "Solusi cepat dan aman untuk perbaikan kompor gas tanam (built-in hob), freestanding oven cooker, dan kompor induksi. Teknisi siap datang langsung ke rumah, apartemen, kafe, & resto di seluruh Jakarta.",
    statusBadge: "Layanan Panggilan Kompor Area Jakarta & Sekitarnya",
    coverageAreas: [
      "Jakarta Selatan (Pondok Indah, Kebayoran Baru, Cilandak, Kemang, Tebet, Jagakarsa)",
      "Jakarta Barat (Puri Indah, Kebon Jeruk, Kembangan, Tanjung Duren, Meruya)",
      "Jakarta Pusat (Menteng, Kemayoran, Tanah Abang, Cempaka Putih)",
      "Jakarta Timur (Rawamangun, Pulomas, Kelapa Dua Wetan, Duren Sawit, Cakung)",
      "Jakarta Utara (Kelapa Gading, Pluit, Pantai Indah Kapuk / PIK, Sunter, Ancol)"
    ],
    serviceHighlight: "Dikerjakan langsung di dapur Anda dengan uji kebocoran gas berstandar keamanan tinggi, pembersihan burner tuntas, & suku cadang original.",
    technicianEta: "30 - 60 Menit Siap Meluncur",
    mapQuery: "Jakarta, Indonesia",
    commonIssues: [
      {
        title: "Api Merah & Berjelaga",
        desc: "Campuran udara dan gas tidak ideal atau spuyer kotor, menyebabkan wajan dan panci gosong hitam pekat.",
        icon: "fi fi-rr-flame"
      },
      {
        title: "Pemantik Elektrik Mati",
        desc: "Busi igniter tidak memercikkan api, kabel pemantik putus, switch knop kotor, atau modul pemantik rusak.",
        icon: "fi fi-rr-bolt"
      },
      {
        title: "Api Mati Saat Knop Dilepas",
        desc: "Sensor pengaman thermocouple rusak, kotor, atau magnet valve tidak mengunci aliran gas saat kompor panas.",
        icon: "fi fi-rr-temperature-down"
      },
      {
        title: "Bau Gas Menyengat / Bocor",
        desc: "Kebocoran pada kran putar (valve), selang fleksibel, sambungan nepel pipa gas, atau seal regulator kompor.",
        icon: "fi fi-rr-exclamation"
      },
      {
        title: "Kompor Induksi Error / Mati",
        desc: "Kerusakan power board, modul IGBT konslet, sensor overheat aktif, atau muncul kode error seperti E0, E1, E2.",
        icon: "fi fi-rr-power"
      },
      {
        title: "Burner Mampet & Api Kecil",
        desc: "Lubang semprotan burner tersumbat kerak minyak atau tumpahan masakan kuah yang mengering dan mengeras.",
        icon: "fi fi-rr-broom"
      }
    ],
    faq: [
      {
        q: "Apakah Tekno Home melayani kompor freestanding dengan oven di Jakarta?",
        a: "Ya, teknisi kami sangat berpengalaman menangani kompor freestanding (free-standing cooker with oven), kompor gas tanam (built-in hob), kompor induksi listrik, maupun kompor komersial restoran."
      },
      {
        q: "Apakah kompor harus dibawa ke bengkel?",
        a: "Tidak perlu. 100% perbaikan dilakukan langsung di tempat (dapur rumah atau apartemen Anda) sehingga Anda dapat memantau langsung dan peralatan tidak repot dibongkar."
      },
      {
        q: "Bagaimana standar keamanan terhadap kebocoran gas?",
        a: "Setiap selesai perbaikan, teknisi kami wajib melakukan pengetesan kebocoran gas (leak inspection) pada pipa, kran, dan selang menggunakan alat detektor serta cairan khusus sebelum kompor digunakan kembali."
      },
      {
        q: "Apakah ada garansi setelah perbaikan?",
        a: "Tentu! Kami memberikan garansi resmi 30 hingga 90 hari untuk perbaikan dan suku cadang yang diganti demi kenyamanan dan rasa aman keluarga Anda."
      }
    ],
    portfolio: [
      {
        src: "/img1.webp",
        title: "Servis Pemantik & Kalibrasi Api Kompor Tanam Modena",
        category: "Kompor Tanam",
        location: "Kebayoran Baru, Jakarta Selatan",
        badge: "Selesai Rapi",
        desc: "Perbaikan busi pemantik elektrik tidak memercik dan kalibrasi spuyer agar nyala api biru merata."
      },
      {
        src: "/img3.webp",
        title: "Restorasi Total & Servis Oven Freestanding Ariston",
        category: "Freestanding Cooker",
        location: "Menteng, Jakarta Pusat",
        badge: "Garansi 90 Hari",
        desc: "Pembersihan kerak minyak pada 4 burner dan perbaikan sensor pengaman gas oven freestanding."
      },
      {
        src: "/img4.webp",
        title: "Perbaikan Api Merah & Penggantian Spuyer Kompor Gas",
        category: "Servis Api & Pemantik",
        location: "Pondok Indah, Jakarta Selatan",
        badge: "Api Biru Sempurna",
        desc: "Mengatasi api membara merah yang membuat dasar panci berjelaga hitam pekat dengan penggantian nozzle original."
      },
      {
        src: "/img5.webp",
        title: "Servis Kompor Induksi Error & Ganti Modul IGBT",
        category: "Kompor Induksi",
        location: "Pantai Indah Kapuk (PIK), Jakarta Utara",
        badge: "Suku Cadang Ori",
        desc: "Penanganan kompor induksi mati total akibat lonjakan tegangan listrik dan pergantian komponen power board."
      },
      {
        src: "/img6.webp",
        title: "Pembersihan Kerak Burner & Uji Kebocoran Jalur Gas",
        category: "Servis Api & Pemantik",
        location: "Kelapa Gading, Jakarta Utara",
        badge: "Uji Gas Aman",
        desc: "Inspeksi kebocoran gas dengan detector presisi serta deep cleaning burner head kompor gas tanam."
      },
      {
        src: "/img7.webp",
        title: "Instalasi Kompor Tanam Granit & Selang Gas Safety SNI",
        category: "Kompor Tanam",
        location: "Puri Indah, Jakarta Barat",
        badge: "Instalasi Baru",
        desc: "Pemasangan kompor gas tanam pada meja dapur granit dengan seal anti-rembes dan regulator safety valve."
      }
    ]
  },
  tangerang: {
    slug: "tangerang",
    name: "Tangerang",
    province: "Banten",
    headline: "Service Kompor Panggilan Tangerang — Bergaransi Resmi",
    subheadline: "Layanan perbaikan kompor gas tanam, freestanding cooker, dan induksi di BSD City, Gading Serpong, Alam Sutera, Bintaro, Karawaci, dan seluruh Tangerang.",
    statusBadge: "Layanan Panggilan Area Tangerang",
    coverageAreas: [
      "BSD City, Serpong & Cisauk",
      "Gading Serpong, Paramount & Kelapa Dua",
      "Alam Sutera & Pinang",
      "Bintaro Jaya, Pondok Aren & Graha Raya",
      "Lippo Karawaci & Tangerang Kota",
      "Ciputat, Pamulang & BSD Timur"
    ],
    serviceHighlight: "Fokus melayani perumahan klaster dan apartemen dengan standar pengerjaan bersih, rapi, dan suku cadang original.",
    technicianEta: "Siap Meluncur ke Lokasi",
    mapQuery: "Tangerang, Banten, Indonesia",
    commonIssues: [
      {
        title: "Api Merah & Berjelaga",
        desc: "Pipa venturi kotor atau spuyer aus membuat pembakaran tidak sempurna dan boros gas.",
        icon: "fi fi-rr-flame"
      },
      {
        title: "Pemantik Elektrik Mati Total",
        desc: "Percikan api pemantik tidak keluar, switch saklar knop macet, atau baterai pemantik habis.",
        icon: "fi fi-rr-bolt"
      },
      {
        title: "Knop Kompor Keras & Macet",
        desc: "As kran gas tersumbat minyak goreng dan kuah masakan yang mengering bertahun-tahun.",
        icon: "fi fi-rr-settings"
      },
      {
        title: "Api Mati Saat Knop Dilepas",
        desc: "Sensor thermocouple pengaman api mati atau kabel sensor putus akibat gigitan tikus/keausan.",
        icon: "fi fi-rr-temperature-down"
      },
      {
        title: "Bau Gas Menyengat di Dapur",
        desc: "Kebocoran pada kran kran kompor, selang fleksibel, nepel sambungan, atau regulator tabung gas.",
        icon: "fi fi-rr-exclamation"
      },
      {
        title: "Kompor Induksi Muncul Kode Error",
        desc: "Kompor induksi mati mendadak atau muncul error E0, E1, E2 karena overheat atau modul PCB rusak.",
        icon: "fi fi-rr-power"
      }
    ],
    faq: [
      {
        q: "Apakah teknisi melayani area klaster perumahan BSD dan Gading Serpong?",
        a: "Ya, sebagian besar pelanggan kami berada di perumahan klaster BSD City, Gading Serpong, Alam Sutera, Bintaro, dan sekitarnya dengan respon teknisi cepat."
      },
      {
        q: "Bagaimana sistem garansi pengerjaan di Tangerang?",
        a: "Setiap pengerjaan perbaikan dan penggantian suku cadang dilengkapi nota dan garansi resmi selama 30-90 hari."
      },
      {
        q: "Berapa lama estimasi pengerjaan servis kompor?",
        a: "Rata-rata pengerjaan memerlukan waktu 45 hingga 90 menit tergantung pada tingkat kerusakan dan jenis kompor (tanam atau freestanding)."
      },
      {
        q: "Merk apa saja yang biasa ditangani di Tangerang?",
        a: "Merk populer seperti Modena, Electrolux, Ariston, Tecnogas, Delizia, La Germania, Rinnai, Smeg, Bosch, dan merk premium lainnya."
      }
    ],
    portfolio: [
      {
        src: "/img8.webp",
        title: "Servis Kompor Tanam 3 Tungku Api Mati Sebelah",
        category: "Kompor Tanam",
        location: "BSD City, Serpong",
        badge: "Klaster Residensial",
        desc: "Pembersihan jalur gas pipa distribusi burner tengah yang mampet oleh endapan minyak masakan."
      },
      {
        src: "/img9.webp",
        title: "Perbaikan Knop Pemutar Macet & Keras Diputar",
        category: "Servis Api & Pemantik",
        location: "Gading Serpong, Kelapa Dua",
        badge: "Kembali Normal",
        desc: "Pembersihan as kran gas yang berkerak serta pelumasan khusus grease tahan panas food-grade."
      },
      {
        src: "/img10.webp",
        title: "Maintenance Rutin & Deep Cleaning Kompor Tanam Dapur",
        category: "Servis Api & Pemantik",
        location: "Alam Sutera, Pinang",
        badge: "Perawatan Rutin",
        desc: "Flushing kerak dan pembersihan burner kuningan sehingga daya panas kompor kembali maksimal dan hemat gas."
      },
      {
        src: "/img11.webp",
        title: "Servis Freestanding Cooker Tecnogas & Oven Api Kecil",
        category: "Freestanding Cooker",
        location: "Bintaro Jaya Sektor 7",
        badge: "Garansi 90 Hari",
        desc: "Perbaikan saluran burner oven bawah yang mengecil dan kalibrasi pengatur suhu thermostat oven."
      },
      {
        src: "/img12.webp",
        title: "Perbaikan Touchscreen Panel Kompor Induksi Modena",
        category: "Kompor Induksi",
        location: "Lippo Karawaci, Tangerang Kota",
        badge: "Responsif",
        desc: "Mengatasi sensor sentuh tidak merespons dan kode error E1 dengan rekondisi papan sirkuit controller."
      },
      {
        src: "/img13.webp",
        title: "Instalasi Baru Kompor Tanam Stainless Steel",
        category: "Kompor Tanam",
        location: "Pamulang, Tangerang Selatan",
        badge: "Instalasi Baru",
        desc: "Pemasangan unit kompor tanam baru lengkap dengan dudukan bracket meja dapur dan tes nyala api stabil."
      }
    ]
  },
  bogor: {
    slug: "bogor",
    name: "Bogor",
    province: "Jawa Barat",
    headline: "Service Kompor Gas & Induksi Panggilan Bogor — Cepat & Bergaransi",
    subheadline: "Panggilan servis kompor ke rumah, villa, dan resto di kawasan Bogor Kota, Sentul City, Cibubur, Cimahpar, hingga kawasan wisata Puncak.",
    statusBadge: "Layanan Panggilan Area Bogor & Sekitarnya",
    coverageAreas: [
      "Bogor Kota (Pajajaran, Baranangsiang, Bantarjati, Bogor Timur & Tengah)",
      "Sentul City, Babakan Madang",
      "Cibinong, Bojonggede & Cikeas",
      "Cimahpar, Sukaraja & Tanah Sareal",
      "Ciomas, Dramaga & Yasmin",
      "Kawasan Villa Puncak, Ciawi & Cisarua"
    ],
    serviceHighlight: "Teknisi handal berpengalaman menangani kompor rumah tinggal, villa peristirahatan, serta dapur komersial resto/kafe di Bogor.",
    technicianEta: "Jadwal Fleksibel & Respon Cepat",
    mapQuery: "Bogor, Jawa Barat, Indonesia",
    commonIssues: [
      {
        title: "Api Merah & Menghitamkan Panci",
        desc: "Oksigen dan gas tidak seimbang pada nozzle gas karena residu kotoran di burner cap.",
        icon: "fi fi-rr-flame"
      },
      {
        title: "Pemantik Busi Tidak Memercik",
        desc: "Baterai habis, tombol pemantik korosi oleh kelembaban udara Bogor, atau modul generator pemantik mati.",
        icon: "fi fi-rr-bolt"
      },
      {
        title: "Knop Keras & Macet Diputar",
        desc: "Pelumas as knop mengering atau kran gas kemasukan kerak kuah masakan yang mengkristal.",
        icon: "fi fi-rr-settings"
      },
      {
        title: "Api Mati Saat Knop Dilepas",
        desc: "Sensor pengaman thermocouple tidak menghantarkan sinyal mikrovolt ke magnetic unit valve.",
        icon: "fi fi-rr-temperature-down"
      },
      {
        title: "Oven Kompor Freestanding Rusak",
        desc: "Burner oven bawah/atas tidak mau menyala atau api oven mati sendiri saat pintu ditutup.",
        icon: "fi fi-rr-box-alt"
      },
      {
        title: "Bau Gas Bocor Berbahaya",
        desc: "Karet seal selang kaku atau ada kebocoran pada pipa manifold distribusi gas kompor.",
        icon: "fi fi-rr-exclamation"
      }
    ],
    faq: [
      {
        q: "Apakah teknisi melayani panggilan ke villa di Sentul atau Puncak Bogor?",
        a: "Ya, kami melayani panggilan servis ke hunian pribadi, resort, maupun villa di wilayah Sentul City hingga kawasan Puncak dengan penjadwalan terlebih dahulu."
      },
      {
        q: "Apakah perbaikan oven pada kompor freestanding juga bisa?",
        a: "Tentu bisa. Kami melayani perbaikan burner oven, thermo-control oven, timer, pemantik oven, hingga engsel pintu kaca oven."
      },
      {
        q: "Bagaimana cara booking teknisi kompor di Bogor?",
        a: "Cukup hubungi WhatsApp admin Tekno Home Services, sebutkan merk kompor, kendala yang dialami, dan alamat lengkap Anda untuk penjadwalan."
      },
      {
        q: "Apakah suku cadang yang digunakan original?",
        a: "Kami selalu mengutamakan suku cadang original dan kompatibel sesuai spesifikasi pabrikan resmi untuk memastikan keamanan jangka panjang."
      }
    ],
    portfolio: [
      {
        src: "/img14.webp",
        title: "Servis Kompor Gas Tanam Dapur Villa Sentul",
        category: "Kompor Tanam",
        location: "Sentul City, Babakan Madang",
        badge: "Dapur Villa",
        desc: "Perbaikan api sering padam saat ditiup angin sejuk Sentul dengan penyesuaian penutup ring burner."
      },
      {
        src: "/img15.webp",
        title: "Atasi Api Meletup-Letup & Ganti Busi Pemantik",
        category: "Servis Api & Pemantik",
        location: "Pajajaran, Bogor Kota",
        badge: "Api Biru Rata",
        desc: "Mengganti busi keramik pemantik yang retak dan menormalkan kembali semburan gas pada tungku."
      },
      {
        src: "/img1 (16).webp",
        title: "Servis Kompor Freestanding 4 Tungku & Pemanggang",
        category: "Freestanding Cooker",
        location: "Taman Yasmin, Bogor Barat",
        badge: "Garansi Resmi",
        desc: "Penanganan menyeluruh pada 4 tungku atas dan sistem pembakaran oven pemanggang yang tidak merata."
      },
      {
        src: "/img1 (17).webp",
        title: "Pembersihan Spuyer Mampet & Setel Udara Venturi",
        category: "Servis Api & Pemantik",
        location: "Baranangsiang, Bogor Timur",
        badge: "Hemat Gas",
        desc: "Mengatur rasio percampuran oksigen dan gas elpiji agar tidak timbul jelaga hitam di wajan masak."
      },
      {
        src: "/img1 (18).webp",
        title: "Perbaikan Kompor Induksi Mati Total Drop Voltase",
        category: "Kompor Induksi",
        location: "Sentul Highlands, Bogor",
        badge: "Selesai di Tempat",
        desc: "Penggantian sekring termal dan dioda penyearah modul power supply kompor induksi."
      },
      {
        src: "/img1 (19).webp",
        title: "Instalasi Pengaman Thermocouple Kompor Tanam",
        category: "Kompor Tanam",
        location: "Cibinong, Kabupaten Bogor",
        badge: "Safety SNI",
        desc: "Pemasangan sensor keamanan otomatis yang menutup aliran gas saat api kompor tertiup angin atau tersiram kuah."
      }
    ]
  },
  bali: {
    slug: "bali",
    name: "Bali",
    province: "Bali",
    headline: "Service Kompor Panggilan Bali — Solusi Villa, Resto & Rumah Tinggal",
    subheadline: "Spesialis servis kompor freestanding, kompor tanam gas & induksi merk Eropa dan Asia di Denpasar, Badung, Seminyak, Canggu, Sanur, dan Ubud.",
    statusBadge: "Layanan Panggilan Area Bali & Sekitarnya",
    coverageAreas: [
      "Denpasar (Sanur, Renon, Panjer, Denpasar Barat & Utara)",
      "Badung (Kuta, Seminyak, Kerobokan, Canggu, Tibubeneng, Pererenan)",
      "Jimbaran, Nusa Dua, Ungasan & Uluwatu",
      "Gianyar (Ubud, Sukawati, Batubulan, Celuk)",
      "Tabanan (Kediri, Tanah Lot, Mengwi perbatasan)",
      "Kawasan Villa Pariwisata & Restoran"
    ],
    serviceHighlight: "Fasilitas servis profesional untuk villa sewa, restoran, resort, dan hunian pribadi dengan teknisi komunikatif & standar pengerjaan rapi.",
    technicianEta: "Teknisi Siap Meluncur ke Lokasi",
    mapQuery: "Bali, Indonesia",
    commonIssues: [
      {
        title: "Korosi Burner Akibat Udara Pantai",
        desc: "Kandungan garam udara pesisir Bali memicu korosi cepat pada kuningan burner dan spuyer gas.",
        icon: "fi fi-rr-water"
      },
      {
        title: "Pemantik Elektrik Mati Total",
        desc: "Sirkuit pemantik lembab atau modul penyala otomatis putus akibat sisa tumpahan masakan.",
        icon: "fi fi-rr-bolt"
      },
      {
        title: "Api Kuning / Merah Gosong",
        desc: "Pengatur udara primer (air shutter) tertutup kotoran sarang serangga atau jelaga gas.",
        icon: "fi fi-rr-flame"
      },
      {
        title: "Safety Device / Thermocouple Mati",
        desc: "Fitur keamanan mematikan gas secara keliru karena sensor thermocouple tidak berfungsi.",
        icon: "fi fi-rr-temperature-down"
      },
      {
        title: "Kompor Induksi Villa Error",
        desc: "Peralatan kompor induksi mati mendadak saat dipakai tamu villa, sensor suhu error atau kaca retak.",
        icon: "fi fi-rr-power"
      },
      {
        title: "Bau Gas Menyengat di Dapur Villa",
        desc: "Regulator atau selang gas bocor yang sangat berbahaya bagi tamu villa dan keluarga.",
        icon: "fi fi-rr-exclamation"
      }
    ],
    faq: [
      {
        q: "Apakah melayani servis kompor untuk villa sewa di Canggu atau Seminyak?",
        a: "Ya, kami banyak melayani manajemen properti villa dan pemilik hunian di area Canggu, Seminyak, Sanur, Ubud, hingga Uluwatu dengan respon cepat."
      },
      {
        q: "Bisa melayani kompor merk impor Eropa seperti Smeg, Bertazzoni, atau Tecnogas?",
        a: "Bisa, teknisi kami memiliki pengalaman khusus menangani kompor brand premium Eropa dan memahami spesifikasi kelistrikan serta jalur gasnya."
      },
      {
        q: "Apakah teknisi bisa datang di hari yang sama (same day service)?",
        a: "Kami mengupayakan kedatangan di hari yang sama tergantung ketersediaan slot teknisi di rute wilayah Anda di Bali."
      },
      {
        q: "Apakah ada nota dan bukti garansi untuk kebutuhan operasional villa?",
        a: "Tentu, kami menyediakan invoice/nota resmi beserta kartu garansi pengerjaan untuk setiap unit yang diservis."
      }
    ],
    portfolio: [
      {
        src: "/img1 (20).webp",
        title: "Maintenance Kompor Freestanding Villa Wisatawan",
        category: "Freestanding Cooker",
        location: "Seminyak, Badung",
        badge: "Spesialis Villa",
        desc: "Perawatan berkala kompor kapasitas besar dapur chef privat villa sewa komersial Seminyak."
      },
      {
        src: "/img1 (21).webp",
        title: "Perbaikan Kompor Tanam Gas Api Kuning & Bau Gas",
        category: "Kompor Tanam",
        location: "Canggu, Kuta Utara",
        badge: "Respon Cepat",
        desc: "Penggantian seal karet katup dan kalibrasi spuyer kuningan yang terpapar udara lembap pesisir pantai."
      },
      {
        src: "/img1 (22).webp",
        title: "Servis Darurat Pemantik Rusak Dapur Cafe",
        category: "Servis Api & Pemantik",
        location: "Sanur, Denpasar Selatan",
        badge: "Darurat 24 Jam",
        desc: "Penanganan cepat pemantik kompor cafe yang macet sebelum jam operasional sarapan dimulai."
      },
      {
        src: "/img1 (23).webp",
        title: "Deep Cleaning Burner Kuningan Kompor Gas Tropis",
        category: "Servis Api & Pemantik",
        location: "Ubud, Gianyar",
        badge: "Bersih Higienis",
        desc: "Pembersihan menyeluruh kerak sisa minyak dan kerak kuah bumbu masakan tradisional Bali."
      },
      {
        src: "/img1 (24).webp",
        title: "Servis Kompor Induksi Ganda Dapur Modern Villa",
        category: "Kompor Induksi",
        location: "Nusa Dua, Badung",
        badge: "Garansi Resmi",
        desc: "Penggantian komponen koil induksi magnetik dan perbaikan kipas pendingin modul internal."
      },
      {
        src: "/img1 (26).webp",
        title: "Instalasi & Uji Pipa Gas Kompor Tanam Residensial",
        category: "Kompor Tanam",
        location: "Renon, Denpasar Timur",
        badge: "Instalasi Baru",
        desc: "Pemasangan kompor tanam kaca tempered 2 tungku dengan penataan pipa gas tertanam aman."
      }
    ]
  },
  surabaya: {
    slug: "surabaya",
    name: "Surabaya",
    province: "Jawa Timur",
    headline: "Service Kompor Panggilan Surabaya — Teknisi Ahli & Bergaransi Resmi",
    subheadline: "Layanan servis kompor gas tanam, oven freestanding, dan kompor induksi panggilan terpercaya di Surabaya Barat, Timur, Pusat, Selatan, dan Utara.",
    statusBadge: "Pusat Layanan Teknisi Area Surabaya & Sekitarnya",
    coverageAreas: [
      "Surabaya Barat (CitraLand, Graha Family, Pakuwon Mall, Sambikerep, HR Muhammad, Mayjen Sungkono)",
      "Surabaya Timur (Kertajaya, Mulyorejo, Dharmahusada, Rungkut, Galaxy Mall, Sutorejo)",
      "Surabaya Pusat (Tegalsari, Genteng, Bubutan, Simokerto, Basuki Rahmat)",
      "Surabaya Selatan (Wiyung, Darmo, Jemursari, Wonokromo, Gayungan, Ketintang)",
      "Surabaya Utara (Kenjeran, Perak, Tambaksari, Semampir)",
      "Sidoarjo & Gresik (Kawasan Perbatasan & Kota Mandiri)"
    ],
    serviceHighlight: "Pusat operasional Tekno Home dengan teknisi senior terlatih menangani seluruh merk kompor premium dengan sparepart lengkap.",
    technicianEta: "30 - 45 Menit Langsung Meluncur",
    mapQuery: "Surabaya, Jawa Timur, Indonesia",
    commonIssues: [
      {
        title: "Api Merah Menghitamkan Wajan",
        desc: "Burner cap dan pipa venturi kotor membuat nyala api merah dan meninggalkan jelaga tebal.",
        icon: "fi fi-rr-flame"
      },
      {
        title: "Pemantik Otomatis Tidak Menyala",
        desc: "Percikan api pemantik hilang atau bunyi cetek-cetek terus menerus tanpa mau menyalakan gas.",
        icon: "fi fi-rr-bolt"
      },
      {
        title: "Api Padam Begitu Tombol Dilepas",
        desc: "Thermo-couple atau magnetic valve tidak merespons panas, mematikan aliran gas secara mendadak.",
        icon: "fi fi-rr-temperature-down"
      },
      {
        title: "Bau Gas & Kebocoran Selang",
        desc: "Regulator gas aus atau selang fleksibel getas menimbulkan aroma gas tajam yang berisiko fatal.",
        icon: "fi fi-rr-exclamation"
      },
      {
        title: "Kompor Induksi Korslet / Mati",
        desc: "Kompor induksi tidak menyala, panel display mati, atau sering membuat meteran listrik rumah anjlok.",
        icon: "fi fi-rr-power"
      },
      {
        title: "Burner Oven Freestanding Macet",
        desc: "Api oven atas atau bawah tidak dapat dinyalakan, panas oven tidak merata, atau api gampang padam.",
        icon: "fi fi-rr-box-alt"
      }
    ],
    faq: [
      {
        q: "Berapa lama waktu kedatangan teknisi di wilayah Surabaya?",
        a: "Dengan armada teknisi lokal yang tersebar di Surabaya Barat, Timur, dan Selatan, teknisi biasanya dapat tiba dalam waktu 30-60 menit setelah konfirmasi."
      },
      {
        q: "Apakah melayani area perumahan seperti CitraLand, Graha Family, dan Pakuwon?",
        a: "Ya, area perumahan Surabaya Barat dan Timur merupakan rute layanan harian teknisi Tekno Home Services."
      },
      {
        q: "Apakah biaya diagnosa transparan?",
        a: "Sangat transparan. Teknisi kami akan memeriksa kompor terlebih dahulu, menjelaskan kendala, dan memberikan estimasi biaya sebelum perbaikan dimulai."
      },
      {
        q: "Merk kompor apa saja yang dilayani di Surabaya?",
        a: "Semua merk seperti Modena, Ariston, Electrolux, Tecnogas, La Germania, Rinnai, Delizia, Beko, Domo, Brandt, Smeg, dan merk lainnya."
      }
    ],
    portfolio: [
      {
        src: "/img1 (27).webp",
        title: "Servis Kompor Tanam Kaca Tempered Modena",
        category: "Kompor Tanam",
        location: "Citraland, Surabaya Barat",
        badge: "Pusat Operasional",
        desc: "Perbaikan microswitch pemantik elektrik dan penataan kran pembagi gas yang macet."
      },
      {
        src: "/img1 (28).webp",
        title: "Perbaikan Freestanding Cooker Tecnogas Oven Rusak",
        category: "Freestanding Cooker",
        location: "Graha Famili, Surabaya Barat",
        badge: "Suku Cadang Ori",
        desc: "Penggantian burner bawah oven freestanding dan pengetesan thermostat pengontrol panas stabil."
      },
      {
        src: "/img1 (29).webp",
        title: "Servis Kompor Induksi Mati Daya & Modul IGBT Rusak",
        category: "Kompor Induksi",
        location: "Pakuwon Mall Area, Surabaya Barat",
        badge: "Garansi 90 Hari",
        desc: "Perbaikan papan PCB driver induksi dan pengetesan deteksi wajan induksi elektromagnetik."
      },
      {
        src: "/img1 (30).webp",
        title: "Atasi Bau Gas Menyengat & Ganti Seal Regulator",
        category: "Servis Api & Pemantik",
        location: "Rungkut, Surabaya Timur",
        badge: "Respon Ekspres",
        desc: "Penanganan kebocoran gas darurat dengan penggantian selang gas fleksibel baja dan seal karet pengunci."
      },
      {
        src: "/img1.webp",
        title: "Pembersihan Jalur Spuyer Burner & Setel Api Biru",
        category: "Servis Api & Pemantik",
        location: "Gubeng, Surabaya Pusat",
        badge: "Api Biru Bersih",
        desc: "Koreksi rasio campuran udara agar api tidak membakar merah dan tidak menimbulkan bau gas sisa."
      },
      {
        src: "/img3.webp",
        title: "Restorasi Kompor Gas Antik & Servis Knop Macet",
        category: "Kompor Tanam",
        location: "Dharmahusada, Surabaya Timur",
        badge: "Restorasi Tuntas",
        desc: "Pembersihan total kerak bertahun-tahun dan penggantian per knop pemutar agar kembali empuk dan lancar."
      }
    ]
  },
  medan: {
    slug: "medan",
    name: "Medan",
    province: "Sumatera Utara",
    headline: "Service Kompor Panggilan Medan — Cepat, Rapi & Bergaransi",
    subheadline: "Teknisi panggilan ahli perbaikan kompor gas dan induksi di Medan Petisah, Medan Selayang, Medan Sunggal, Medan Timur, Polonia, dan sekitarnya.",
    statusBadge: "Layanan Panggilan Area Kota Medan & Sekitarnya",
    coverageAreas: [
      "Medan Petisah & Medan Baru",
      "Medan Selayang & Medan Sunggal",
      "Medan Johor & Medan Polonia",
      "Medan Timur & Medan Barat",
      "Medan Amplas, Denai & Tembung",
      "Kawasan Kompleks Perumahan Cemara Asri, CitraLand & Kompleks Tasbi"
    ],
    serviceHighlight: "Layanan cepat dan terpercaya untuk rumah tinggal, ruko usaha kuliner, dan apartemen di seluruh kota Medan.",
    technicianEta: "Siap Meluncur Sesuai Jadwal Anda",
    mapQuery: "Medan, Sumatera Utara, Indonesia",
    commonIssues: [
      {
        title: "Api Merah & Berjelaga",
        desc: "Nozzle spuyer tersumbat atau venturi kotor membuat api membara merah dan membuat alat masak cepat kotor.",
        icon: "fi fi-rr-flame"
      },
      {
        title: "Busi Pemantik Tidak Memercik",
        desc: "Pemantik elektrik tidak mengeluarkan percikan bunga api sehingga kompor sulit dinyalakan.",
        icon: "fi fi-rr-bolt"
      },
      {
        title: "Api Mati Saat Knop Dilepas",
        desc: "Sensor thermocouple pengaman api mati atau kabel sensor putus akibat gigitan hewan/keausan.",
        icon: "fi fi-rr-temperature-down"
      },
      {
        title: "Bau Gas Menyengat di Dapur",
        desc: "Indikasi kebocoran pada kran kompor, selang gas, atau regulator bertekanan tinggi.",
        icon: "fi fi-rr-exclamation"
      },
      {
        title: "Kompor Induksi Muncul Kode Error",
        desc: "Modul kompor induksi mengalami overheat atau komponen power supply modul PCB rusak.",
        icon: "fi fi-rr-power"
      },
      {
        title: "Knop Kompor Keras & Macet",
        desc: "As kran gas tersumbat sisa minyak goreng dan bumbu masakan yang mengering bertahun-tahun.",
        icon: "fi fi-rr-settings"
      }
    ],
    faq: [
      {
        q: "Apakah teknisi melayani panggilan servis ke kompleks perumahan di Medan?",
        a: "Ya, kami melayani panggilan ke kompleks perumahan seperti Cemara Asri, CitraLand Gama City, Kompleks Tasbi (Taman Setia Budi Indah), dan seluruh area pemukiman di Medan."
      },
      {
        q: "Berapa lama garansi yang diberikan untuk perbaikan kompor di Medan?",
        a: "Setiap perbaikan disertai dengan garansi resmi 30 hingga 90 hari untuk suku cadang dan jasa perbaikan teknisi."
      },
      {
        q: "Apakah pengerjaan dilakukan langsung di tempat?",
        a: "Betul, perbaikan dilakukan 100% langsung di dapur rumah atau ruko Anda tanpa perlu membawa kompor pergi."
      },
      {
        q: "Bagaimana cara melakukan pemesanan servis kompor di Medan?",
        a: "Anda cukup klik tombol WhatsApp di website ini, sampaikan merk kompor dan keluhan Anda, dan tim kami akan mengatur jadwal kunjungan teknisi."
      }
    ],
    portfolio: [
      {
        src: "/img4.webp",
        title: "Servis Kompor Tanam Api Merah & Ganti Tungku",
        category: "Kompor Tanam",
        location: "Komplek Cemara Asri, Medan",
        badge: "Garansi 90 Hari",
        desc: "Penggantian tungku burner kuningan yang keropos termakan api dan penataan nozzle spuyer gas."
      },
      {
        src: "/img5.webp",
        title: "Perbaikan Pemantik Elektrik Baterai & Busi Api",
        category: "Servis Api & Pemantik",
        location: "Medan Baru, Kota Medan",
        badge: "Suku Cadang Ori",
        desc: "Perbaikan modul generator pemantik baterai DC yang lemah sehingga api langsung menyambar dalam 1 detik."
      },
      {
        src: "/img6.webp",
        title: "Servis Kompor Freestanding 4 Tungku Dapur Ruko",
        category: "Freestanding Cooker",
        location: "Medan Petisah, Kota Medan",
        badge: "Selesai Rapi",
        desc: "Perbaikan knop gas macet dan pengaturan tekanan gas manifold kompor freestanding resto."
      },
      {
        src: "/img7.webp",
        title: "Pembersihan Kerak Minyak & Kuras Jalur Pipa Gas",
        category: "Servis Api & Pemantik",
        location: "Medan Helvetia & Sunggal",
        badge: "Flushing Tuntas",
        desc: "Deep cleaning kerak bumbu masakan dan pembersihan katup pengaman agar aliran gas lancar."
      },
      {
        src: "/img8.webp",
        title: "Perbaikan Sensor Kompor Induksi Error E1 / E2",
        category: "Kompor Induksi",
        location: "Medan Johor & Selayang",
        badge: "Selesai di Tempat",
        desc: "Mengganti sensor temperatur NTC permukaan kaca kompor induksi yang rusak akibat panas berlebih."
      },
      {
        src: "/img9.webp",
        title: "Instalasi Kompor Tanam Baru & Safety Valve Gas",
        category: "Kompor Tanam",
        location: "Medan Barat, Kota Medan",
        badge: "Instalasi Baru",
        desc: "Pemasangan kompor gas tanam baru dengan uji kebocoran gas presisi dan garansi resmi."
      }
    ]
  }
};
