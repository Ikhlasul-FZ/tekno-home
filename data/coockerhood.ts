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

export const supportedCookerhoodBrands = [
  "Modena",
  "Electrolux",
  "Ariston",
  "Rinnai",
  "Tecnogas",
  "Delizia",
  "Fotile",
  "Franke",
  "Bosch",
  "Smeg",
  "Linea",
  "Beko",
  "Domo",
  "Brandt",
  "Elba",
];

export const cookerhoodCities: Record<string, CityData> = {
  jakarta: {
    slug: "jakarta",
    name: "Jakarta",
    province: "DKI Jakarta",
    headline: "Jasa Servis Cooker Hood Panggilan Jakarta — Spesialis Penghisap Asap Dapur Bergaransi",
    subheadline: "Solusi perbaikan dan deep cleaning cooker hood model slim, chimney, island, dan built-in. Teknisi siap datang langsung ke rumah, apartemen, kafe, & resto di seluruh Jakarta.",
    statusBadge: "Layanan Panggilan Cooker Hood Area Jakarta & Sekitarnya",
    coverageAreas: [
      "Jakarta Selatan (Pondok Indah, Kebayoran Baru, Cilandak, Kemang, Tebet, Jagakarsa)",
      "Jakarta Barat (Puri Indah, Kebon Jeruk, Kembangan, Tanjung Duren, Meruya)",
      "Jakarta Pusat (Menteng, Kemayoran, Tanah Abang, Cempaka Putih)",
      "Jakarta Timur (Rawamangun, Pulomas, Kelapa Dua Wetan, Duren Sawit, Cakung)",
      "Jakarta Utara (Kelapa Gading, Pluit, Pantai Indah Kapuk / PIK, Sunter, Ancol)"
    ],
    serviceHighlight: "Dikerjakan langsung di dapur Anda dengan pembersihan kerak minyak membandel, perbaikan dinamo motor, & penggantian filter original bergaransi.",
    technicianEta: "30 - 60 Menit Siap Meluncur",
    mapQuery: "Jakarta, Indonesia",
    commonIssues: [
      {
        title: "Daya Hisap Asap Lemah / Loyo",
        desc: "Kipas blower tidak mampu menghisap asap masakan akibat motor melemah atau pipa ducting tersumbat lemak.",
        icon: "fi fi-rr-wind"
      },
      {
        title: "Suara Motor Bising & Bergetar",
        desc: "Bearing dinamo motor aus, baling-baling impeller goyang, atau kerak minyak menumpuk tebal di kipas.",
        icon: "fi fi-rr-volume"
      },
      {
        title: "Filter Meneteskan Minyak",
        desc: "Grease filter aluminium dan filter karbon aktif sudah jenuh minyak, berisiko menetes ke atas masakan.",
        icon: "fi fi-rr-water"
      },
      {
        title: "Lampu Penerangan Mati",
        desc: "Bohlam halogen/LED mati, fitting lampu meleleh, atau jalur kelistrikan modul lampu putus.",
        icon: "fi fi-rr-bulb"
      },
      {
        title: "Tombol / Touch Panel Macet",
        desc: "Saklar switch kecepatan macet, tombol fisik amblas, atau panel sentuh (touchscreen) tidak merespons perintah.",
        icon: "fi fi-rr-fingerprint"
      },
      {
        title: "Mati Total / Korslet Listrik",
        desc: "Kapasitor motor kembung, sekring thermal putus, atau terjadi korsleting yang membuat MCB rumah anjlok.",
        icon: "fi fi-rr-bolt"
      }
    ],
    faq: [
      {
        q: "Apakah Tekno Home melayani perbaikan cooker hood di apartemen Jakarta?",
        a: "Ya, teknisi kami sangat terbiasa menangani cooker hood di unit apartemen maupun rumah tapak di seluruh penjuru Jakarta, baik model resirkulasi (filter karbon) maupun model pipa ducting luar."
      },
      {
        q: "Apakah melayani deep cleaning pembersihan kerak minyak?",
        a: "Tentu! Kami menyediakan layanan deep cleaning menyeluruh meliputi pembongkaran casing, pembersihan kisi-kisi impeller kipas blower, grease trap, hingga penggantian filter karbon aktif."
      },
      {
        q: "Apakah pengerjaan dilakukan langsung di lokasi?",
        a: "Ya, 100% perbaikan dan pembersihan dilakukan langsung di dapur Anda tanpa perlu mencopot dan membawa unit ke luar rumah."
      },
      {
        q: "Berapa lama garansi yang diberikan untuk servis cooker hood?",
        a: "Kami memberikan garansi resmi 30 hingga 90 hari untuk suku cadang pengganti (seperti motor, kapasitor, switch) serta jasa servis teknisi."
      }
    ]
  },
  tangerang: {
    slug: "tangerang",
    name: "Tangerang",
    province: "Banten",
    headline: "Jasa Servis Cooker Hood Panggilan Tangerang & Tangsel — Bergaransi Resmi",
    subheadline: "Layanan perbaikan dan perawatan cooker hood penghisap asap dapur di BSD City, Gading Serpong, Alam Sutera, Bintaro, Karawaci, dan sekitarnya.",
    statusBadge: "Layanan Panggilan Area Tangerang & Tangsel",
    coverageAreas: [
      "BSD City, Serpong & Cisauk",
      "Gading Serpong, Paramount & Kelapa Dua",
      "Alam Sutera & Pinang",
      "Bintaro Jaya, Pondok Aren & Graha Raya",
      "Lippo Karawaci & Tangerang Kota",
      "Ciputat, Pamulang & BSD Timur"
    ],
    serviceHighlight: "Fokus melayani perumahan klaster dan apartemen dengan standar kerja bersih, rapi, bebas cipratan minyak, dan suku cadang original.",
    technicianEta: "Siap Meluncur ke Lokasi",
    mapQuery: "Tangerang, Banten, Indonesia",
    commonIssues: [
      {
        title: "Daya Hisap Melemah",
        desc: "Asap dan aroma tajam bumbu masakan tidak tersedot maksimal keluar dapur rumah.",
        icon: "fi fi-rr-wind"
      },
      {
        title: "Motor Blower Berdengung / Macet",
        desc: "Terdengar suara dengungan listrik tetapi baling-baling kipas penghisap tidak berputar sama sekali.",
        icon: "fi fi-rr-settings"
      },
      {
        title: "Tetesan Minyak Masakan",
        desc: "Filter perangkap minyak sudah tersumbat pekat sehingga minyak mencair dan menetes ke kompor.",
        icon: "fi fi-rr-water"
      },
      {
        title: "Lampu Cooker Hood Padam",
        desc: "Trafo / ballast lampu rusak atau saklar pengontrol lampu tidak mengalirkan arus listrik.",
        icon: "fi fi-rr-bulb"
      },
      {
        title: "Speed Selector / Tombol Rusak",
        desc: "Hanya kecepatan tertentu yang menyala (misal speed 1 mati, speed 3 normal) atau tombol macet.",
        icon: "fi fi-rr-dashboard"
      },
      {
        title: "Bau Sangit / Asap dari Motor",
        desc: "Gulungan kumparan dinamo motor overheat akibat terbebani gesekan kerak minyak yang lengket.",
        icon: "fi fi-rr-flame"
      }
    ],
    faq: [
      {
        q: "Apakah teknisi melayani area perumahan klaster di BSD dan Gading Serpong?",
        a: "Ya, tim teknisi kami memiliki jadwal operasional harian di kawasan BSD City, Gading Serpong, Alam Sutera, Bintaro, dan sekitarnya."
      },
      {
        q: "Apakah teknisi menyediakan filter karbon baru?",
        a: "Ya, kami menyediakan filter karbon aktif baru berbagai ukuran yang cocok untuk merk Modena, Electrolux, Rinnai, Tecnogas, dan lainnya."
      },
      {
        q: "Berapa lama waktu perbaikan cooker hood?",
        a: "Pengerjaan perbaikan kelistrikan dan dinamo memakan waktu sekitar 45-60 menit. Untuk paket deep cleaning menyeluruh membutuhkan waktu sekitar 60-90 menit."
      },
      {
        q: "Apakah ada biaya tersembunyi?",
        a: "Tidak ada. Teknisi selalu melakukan diagnosa terlebih dahulu dan mengonfirmasi rincian biaya sebelum pekerjaan dimulai."
      }
    ]
  },
  bogor: {
    slug: "bogor",
    name: "Bogor",
    province: "Jawa Barat",
    headline: "Jasa Servis Cooker Hood Panggilan Bogor — Cepat, Bersih & Bergaransi",
    subheadline: "Panggilan servis dan pembersihan exhaust penghisap asap dapur ke rumah tinggal, villa, kafe, & restoran di Bogor Kota, Sentul City, Cibubur, hingga Puncak.",
    statusBadge: "Layanan Panggilan Area Bogor & Sekitarnya",
    coverageAreas: [
      "Bogor Kota (Pajajaran, Baranangsiang, Bantarjati, Bogor Timur & Tengah)",
      "Sentul City, Babakan Madang & Sentul Alaya",
      "Cibinong, Bojonggede & Cikeas",
      "Cimahpar, Sukaraja & Tanah Sareal",
      "Ciomas, Dramaga & Yasmin",
      "Kawasan Villa Puncak, Ciawi & Cisarua"
    ],
    serviceHighlight: "Teknisi berpengalaman menangani exhaust hood rumah pribadi, villa peristirahatan, serta dapur komersial resto/kafe di Bogor.",
    technicianEta: "Jadwal Fleksibel & Respon Cepat",
    mapQuery: "Bogor, Jawa Barat, Indonesia",
    commonIssues: [
      {
        title: "Daya Sedot Asap Turun Drastis",
        desc: "Kelembaban udara dan minyak membuat debu menggumpal tebal pada kisi-kisi blower exhaust.",
        icon: "fi fi-rr-wind"
      },
      {
        title: "Suara Dengung Keras Tanpa Putaran",
        desc: "Kapasitor motor penggerak blower mati atau as rotor kipas terkunci kerak minyak.",
        icon: "fi fi-rr-volume"
      },
      {
        title: "Kerak Minyak Lengket di Kitchen Set",
        desc: "Cooker hood tidak lagi efektif menangkap partikel minyak sehingga kitchen set menjadi kusam dan lengket.",
        icon: "fi fi-rr-broom"
      },
      {
        title: "Tombol Pengatur Kecepatan Rusak",
        desc: "Saklar mekanik push button pecah atau switch tombol geser tidak berfungsi normal.",
        icon: "fi fi-rr-settings"
      },
      {
        title: "Lampu Penerangan Mati",
        desc: "Fitting lampu korslet atau bohlam lampu putus akibat suhu panas uap masakan.",
        icon: "fi fi-rr-bulb"
      },
      {
        title: "Cooker Hood Mati Total",
        desc: "Jalur kabel putus atau thermo-fuse pengaman dinamo terputus demi mencegah kebakaran.",
        icon: "fi fi-rr-bolt"
      }
    ],
    faq: [
      {
        q: "Apakah melayani panggilan ke villa di Sentul City atau kawasan Puncak?",
        a: "Ya, kami melayani panggilan servis ke villa dan hunian pribadi di kawasan Sentul City hingga Puncak dengan sistem janji temu (booking)."
      },
      {
        q: "Apakah bisa memperbaiki cooker hood merk Modena dan Electrolux?",
        a: "Tentu, teknisi kami sangat menguasai spesifikasi teknis kedua merk tersebut dan selalu siap dengan komponen cadangan original."
      },
      {
        q: "Bagaimana cara memesan servis cooker hood di Bogor?",
        a: "Cukup hubungi WhatsApp admin Tekno Home Services, infokan kendala dan merk cooker hood Anda, teknisi akan segera dijadwalkan ke alamat Anda."
      },
      {
        q: "Apakah pengerjaan bergaransi?",
        a: "Ya, kami memberikan garansi resmi hingga 90 hari untuk pergantian suku cadang dan perbaikan dinamo."
      }
    ]
  },
  bali: {
    slug: "bali",
    name: "Bali",
    province: "Bali",
    headline: "Jasa Servis Cooker Hood Panggilan Bali — Solusi Villa, Resto & Rumah Tinggal",
    subheadline: "Spesialis servis dan pembersihan cooker hood merk Eropa dan Asia di Denpasar, Badung, Seminyak, Canggu, Sanur, Ubud, dan sekitarnya.",
    statusBadge: "Layanan Panggilan Area Bali & Sekitarnya",
    coverageAreas: [
      "Denpasar (Sanur, Renon, Panjer, Denpasar Barat & Utara)",
      "Badung (Kuta, Seminyak, Kerobokan, Canggu, Tibubeneng, Pererenan)",
      "Jimbaran, Nusa Dua, Ungasan & Uluwatu",
      "Gianyar (Ubud, Sukawati, Batubulan, Celuk)",
      "Tabanan (Kediri, Tanah Lot, Mengwi perbatasan)",
      "Kawasan Villa Pariwisata, Cafe & Restoran"
    ],
    serviceHighlight: "Layanan prima untuk villa sewa dan resto pariwisata agar dapur selalu bersih, higienis, bebas bau asap, dan nyaman bagi tamu.",
    technicianEta: "Teknisi Siap Meluncur ke Lokasi",
    mapQuery: "Denpasar, Bali, Indonesia",
    commonIssues: [
      {
        title: "Daya Hisap Melemah di Dapur Villa",
        desc: "Tamu mengeluh bau asap masakan mengendap di ruang makan karena sirkulasi cooker hood tidak optimal.",
        icon: "fi fi-rr-wind"
      },
      {
        title: "Karat & Korosi Udara Pesisir",
        desc: "Kandungan garam laut mempercepat korosi pada kisi-kisi stainless steel dan baut pengikat motor.",
        icon: "fi fi-rr-water"
      },
      {
        title: "Blower Berisik Mengganggu Tamu",
        desc: "Suara dengung kencang dari bearing motor yang kering dan kotor oleh lemak bumbu masakan.",
        icon: "fi fi-rr-volume"
      },
      {
        title: "Filter Karbon Jenuh & Berbau",
        desc: "Filter karbon aktif sudah lewat masa pakai sehingga tidak lagi mampu menyerap aroma bumbu.",
        icon: "fi fi-rr-refresh"
      },
      {
        title: "Touch Sensor / Panel Digital Error",
        desc: "Uap air dan minyak merusak jalur papan sirkuit tombol sentuh cooker hood modern.",
        icon: "fi fi-rr-fingerprint"
      },
      {
        title: "Korslet & Mati Total",
        desc: "Kabel sambungan atau kapasitor terbakar membuat listrik di villa mati mendadak.",
        icon: "fi fi-rr-bolt"
      }
    ],
    faq: [
      {
        q: "Apakah melayani servis cooker hood villa di area Canggu dan Seminyak?",
        a: "Ya, kami banyak melayani villa rental harian di area Canggu, Seminyak, Sanur, Ubud, hingga Uluwatu dengan teknisi sigap dan profesional."
      },
      {
        q: "Apakah bisa menangani brand premium seperti Smeg, Franke, atau Fotile?",
        a: "Bisa, teknisi kami terlatih menangani berbagai model cooker hood premium baik tipe Island, Chimney, maupun Telescopic."
      },
      {
        q: "Apakah ada nota resmi untuk pelaporan operasional villa?",
        a: "Tentu saja, kami menyediakan invoice/kwitansi resmi lengkap dengan rincian pekerjaan dan garansi tertulis."
      },
      {
        q: "Apakah melayani pengerjaan di hari libur?",
        a: "Ya, layanan darurat kami siap membantu penjadwalan di akhir pekan maupun hari libur nasional."
      }
    ]
  },
  surabaya: {
    slug: "surabaya",
    name: "Surabaya",
    province: "Jawa Timur",
    headline: "Jasa Servis Cooker Hood Panggilan Surabaya — Teknisi Ahli & Bergaransi Resmi",
    subheadline: "Layanan servis dinamo, ganti filter karbon, dan deep cleaning cooker hood panggilan terpercaya di Surabaya Barat, Timur, Pusat, Selatan, dan Utara.",
    statusBadge: "Pusat Layanan Teknisi Area Surabaya & Sekitarnya",
    coverageAreas: [
      "Surabaya Barat (CitraLand, Graha Family, Pakuwon Mall, Sambikerep, HR Muhammad, Mayjen Sungkono)",
      "Surabaya Timur (Kertajaya, Mulyorejo, Dharmahusada, Rungkut, Galaxy Mall, Sutorejo)",
      "Surabaya Pusat (Tegalsari, Genteng, Bubutan, Simokerto, Basuki Rahmat)",
      "Surabaya Selatan (Wiyung, Darmo, Jemursari, Wonokromo, Gayungan, Ketintang)",
      "Surabaya Utara (Kenjeran, Perak, Tambaksari, Semampir)",
      "Sidoarjo & Gresik (Kawasan Perbatasan & Kota Mandiri)"
    ],
    serviceHighlight: "Pusat operasional Tekno Home dengan teknisi senior berpengalaman, stok sparepart dinamo & filter lengkap, dan pengerjaan bergaransi.",
    technicianEta: "30 - 45 Menit Langsung Meluncur",
    mapQuery: "Surabaya, Jawa Timur, Indonesia",
    commonIssues: [
      {
        title: "Daya Sedot Loyo & Asap Mengepul",
        desc: "Kipas blower tidak berputar kencang, membuat dapur pengap dan bau masakan menyebar ke seluruh rumah.",
        icon: "fi fi-rr-wind"
      },
      {
        title: "Suara Motor Kasar & Bising",
        desc: "Baling-baling kipas tidak seimbang karena timbunan kerak minyak yang menggumpal tidak rata.",
        icon: "fi fi-rr-volume"
      },
      {
        title: "Filter Meneteskan Minyak ke Kompor",
        desc: "Kapasitas serap filter logam sudah habis, minyak panas menetes membahayakan masakan di kompor.",
        icon: "fi fi-rr-water"
      },
      {
        title: "Switch Tombol Kecepatan Rusak",
        desc: "Tombol 1, 2, atau 3 tidak berfungsi, tombol masuk ke dalam (amblas) dan tidak mau kembali.",
        icon: "fi fi-rr-dashboard"
      },
      {
        title: "Lampu Penerangan Mati",
        desc: "Bohlam lampu halogen/LED mati atau saklar tombol lampu rusak sehingga area memasak gelap.",
        icon: "fi fi-rr-bulb"
      },
      {
        title: "Unit Mati Total / Listrik Turun",
        desc: "Korsleting pada gulungan motor atau kapasitor blower meletus sehingga MCB rumah turun.",
        icon: "fi fi-rr-bolt"
      }
    ],
    faq: [
      {
        q: "Berapa lama waktu tunggu kedatangan teknisi di Surabaya?",
        a: "Dengan armada teknisi lokal yang tersebar di Surabaya Barat, Timur, dan Selatan, teknisi biasanya dapat tiba dalam waktu 30-45 menit setelah konfirmasi pesanan."
      },
      {
        q: "Apakah pengerjaan dilakukan langsung di dapur rumah?",
        a: "Ya, 100% perbaikan dan pembersihan dilakukan langsung di tempat dengan alas pelindung kerja agar lantai dapur tetap bersih."
      },
      {
        q: "Merk cooker hood apa saja yang dilayani di Surabaya?",
        a: "Semua merk seperti Modena, Electrolux, Ariston, Rinnai, Tecnogas, Delizia, Fotile, Franke, Bosch, Smeg, Linea, Beko, Domo, dan merk lainnya."
      },
      {
        q: "Apakah ada garansi pengerjaan?",
        a: "Tentu! Kami memberikan nota garansi resmi 30 hingga 90 hari untuk suku cadang pengganti dan jasa perbaikan teknisi."
      }
    ]
  },
  medan: {
    slug: "medan",
    name: "Medan",
    province: "Sumatera Utara",
    headline: "Jasa Servis Cooker Hood Panggilan Medan — Cepat, Bersih & Bergaransi",
    subheadline: "Teknisi panggilan ahli perbaikan dan pembersihan exhaust cooker hood di Medan Petisah, Medan Selayang, Medan Sunggal, Medan Timur, Polonia, dan sekitarnya.",
    statusBadge: "Layanan Panggilan Area Kota Medan & Sekitarnya",
    coverageAreas: [
      "Medan Petisah & Medan Baru",
      "Medan Selayang & Medan Sunggal",
      "Medan Johor & Medan Polonia",
      "Medan Timur & Medan Barat",
      "Medan Amplas, Denai & Tembung",
      "Kawasan Kompleks Perumahan Cemara Asri, CitraLand & Kompleks Tasbi"
    ],
    serviceHighlight: "Layanan cepat dan terpercaya untuk rumah tinggal, ruko usaha kuliner, kafe, dan apartemen di seluruh kota Medan.",
    technicianEta: "Siap Meluncur Sesuai Jadwal Anda",
    mapQuery: "Medan, Sumatera Utara, Indonesia",
    commonIssues: [
      {
        title: "Daya Hisap Melemah",
        desc: "Blower exhaust cooker hood tidak mampu menyedot asap masakan gorengan atau panggangan.",
        icon: "fi fi-rr-wind"
      },
      {
        title: "Suara Motor Mendengung Keras",
        desc: "Motor kipas terhambat kotoran lemak bumbu masakan sehingga putaran menjadi berat dan bising.",
        icon: "fi fi-rr-volume"
      },
      {
        title: "Minyak Menetes dari Filter",
        desc: "Perangkap minyak aluminium jenuh dan perlu dibersihkan secara kimia khusus untuk mengembalikan fungsinya.",
        icon: "fi fi-rr-water"
      },
      {
        title: "Tombol Pengatur Kecepatan Macet",
        desc: "Switch mekanis atau tombol switch elektronik macet terkena uap minyak masakan.",
        icon: "fi fi-rr-settings"
      },
      {
        title: "Lampu Penerangan Mati",
        desc: "Bohlam lampu penerangan mati atau fitting lampu rusak akibat uap panas tinggi.",
        icon: "fi fi-rr-bulb"
      },
      {
        title: "Cooker Hood Mati Total",
        desc: "Kapasitor atau dinamo motor terbakar sehingga unit tidak menyala sama sekali.",
        icon: "fi fi-rr-bolt"
      }
    ],
    faq: [
      {
        q: "Apakah teknisi melayani area kompleks perumahan di Medan?",
        a: "Ya, kami melayani panggilan ke perumahan Cemara Asri, CitraLand Gama City, Kompleks Tasbi, dan seluruh area pemukiman di Medan."
      },
      {
        q: "Apakah melayani deep cleaning pembersihan minyak?",
        a: "Ya, kami menyediakan paket pembersihan tuntas untuk membersihkan kerak minyak membandel di motor, blower, dan filter cooker hood."
      },
      {
        q: "Berapa lama garansi yang diberikan di Medan?",
        a: "Kami memberikan garansi resmi 30 hingga 90 hari untuk jasa perbaikan teknisi dan suku cadang yang diganti."
      },
      {
        q: "Bagaimana cara memesan servis cooker hood di Medan?",
        a: "Cukup klik tombol WhatsApp di situs ini, sebutkan merk cooker hood dan alamat Anda, tim kami akan segera menjadwalkan kedatangan teknisi."
      }
    ]
  }
};
