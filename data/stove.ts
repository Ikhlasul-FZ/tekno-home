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
    headline: "Jasa Servis Kompor (Stove) Panggilan Jakarta — Bergaransi & Teknisi Ahli",
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
    ]
  },
  tangerang: {
    slug: "tangerang",
    name: "Tangerang",
    province: "Banten",
    headline: "Jasa Servis Kompor Panggilan Tangerang & Tangsel — Bergaransi Resmi",
    subheadline: "Layanan perbaikan kompor gas tanam, freestanding cooker, dan induksi di BSD City, Gading Serpong, Alam Sutera, Bintaro, Karawaci, dan seluruh Tangerang.",
    statusBadge: "Layanan Panggilan Area Tangerang & Tangsel",
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
        desc: "Burner kotor atau spuyer tersumbat membuat api berwarna merah dan merusak peralatan masak kesayangan.",
        icon: "fi fi-rr-flame"
      },
      {
        title: "Pemantik Elektrik Macet",
        desc: "Kabel pemantik terkena tumpahan minyak atau modul pemantik tegangan tinggi mati total.",
        icon: "fi fi-rr-bolt"
      },
      {
        title: "Api Tidak Mau Mengunci",
        desc: "Saat knop dilepas api langsung padam karena thermocouple atau katup magnetik pengaman aus.",
        icon: "fi fi-rr-temperature-down"
      },
      {
        title: "Kebocoran Gas / Bau Gas",
        desc: "Seal kran aus atau nepel selang longgar menimbulkan bau gas berbahaya saat kompor dinyalakan.",
        icon: "fi fi-rr-exclamation"
      },
      {
        title: "Kompor Induksi Mati Total",
        desc: "MCB anjlok saat dinyalakan atau unit induksi tidak merespons tombol power sentuh.",
        icon: "fi fi-rr-power"
      },
      {
        title: "Api Meletup-letup / Kecil",
        desc: "Distribusi aliran gas terganggu oleh kotoran residu lemak masakan di dalam corong burner cap.",
        icon: "fi fi-rr-broom"
      }
    ],
    faq: [
      {
        q: "Apakah teknisi bisa datang ke area klaster perumahan BSD dan Gading Serpong?",
        a: "Bisa sekali. Teknisi kami rutin melayani area klaster BSD City, Gading Serpong, Alam Sutera, Lippo Karawaci, dan Bintaro Jaya setiap hari."
      },
      {
        q: "Apakah bisa memperbaiki kompor induksi yang mati total?",
        a: "Ya, kami melayani perbaikan kompor induksi dari pergantian komponen daya (IGBT), perbaikan sensor suhu, hingga perbaikan modul kontrol panel digital."
      },
      {
        q: "Berapa lama estimasi pengerjaan servis kompor?",
        a: "Rata-rata pengerjaan memerlukan waktu 45 hingga 90 menit tergantung pada tingkat kerusakan dan jenis kompor (tanam atau freestanding)."
      },
      {
        q: "Merk apa saja yang biasa ditangani di Tangerang?",
        a: "Merk populer seperti Modena, Electrolux, Ariston, Tecnogas, Delizia, La Germania, Rinnai, Smeg, Bosch, dan merk premium lainnya."
      }
    ]
  },
  bogor: {
    slug: "bogor",
    name: "Bogor",
    province: "Jawa Barat",
    headline: "Jasa Servis Kompor Gas & Induksi Panggilan Bogor — Cepat & Bergaransi",
    subheadline: "Panggilan servis kompor ke rumah, villa, dan resto di kawasan Bogor Kota, Sentul City, Cibubur, Cimahpar, hingga kawasan wisata Puncak.",
    statusBadge: "Layanan Panggilan Area Bogor & Sekitarnya",
    coverageAreas: [
      "Bogor Kota (Pajajaran, Baranangsiang, Bantarjati, Bogor Timur & Tengah)",
      "Sentul City, Babakan Madang & Sentul Alaya",
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
    ]
  },
  bali: {
    slug: "bali",
    name: "Bali",
    province: "Bali",
    headline: "Jasa Servis Kompor Panggilan Bali — Solusi Villa, Resto & Rumah Tinggal",
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
    mapQuery: "Denpasar, Bali, Indonesia",
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
    ]
  },
  surabaya: {
    slug: "surabaya",
    name: "Surabaya",
    province: "Jawa Timur",
    headline: "Jasa Servis Kompor Panggilan Surabaya — Teknisi Ahli & Bergaransi Resmi",
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
    ]
  },
  medan: {
    slug: "medan",
    name: "Medan",
    province: "Sumatera Utara",
    headline: "Jasa Servis Kompor Panggilan Medan — Cepat, Rapi & Bergaransi",
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
    ]
  }
};
