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

export const waterHeaterCities: Record<string, CityData> = {
  jakarta: {
    slug: "jakarta",
    name: "Jakarta",
    province: "DKI Jakarta",
    headline: "Jasa Servis Water Heater Panggilan Jakarta — Bergaransi & Teknisi Berpengalaman",
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
    ]
  },
  tangerang: {
    slug: "tangerang",
    name: "Tangerang",
    province: "Banten",
    headline: "Jasa Servis Water Heater Panggilan Tangerang & Tangsel — Bergaransi Resmi",
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
    ]
  },
  bogor: {
    slug: "bogor",
    name: "Bogor",
    province: "Jawa Barat",
    headline: "Jasa Servis Water Heater Panggilan Bogor & Sentul — Respon Cepat & Bergaransi",
    subheadline: "Layanan perbaikan water heater panggilan untuk wilayah Kota Bogor, Sentul City, Cibinong, dan sekitarnya. Air hangat kembali nyaman untuk keluarga Anda.",
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
    ]
  },
  bali: {
    slug: "bali",
    name: "Bali",
    province: "Bali",
    headline: "Jasa Servis Water Heater Panggilan Bali — Spesialis Villa, Rumah & Penginapan",
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
    ]
  },
  surabaya: {
    slug: "surabaya",
    name: "Surabaya",
    province: "Jawa Timur",
    headline: "Jasa Servis Water Heater Surabaya — Pusat Operasional Utama Siaga 24 Jam",
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
    ]
  },
  medan: {
    slug: "medan",
    name: "Medan",
    province: "Sumatera Utara",
    headline: "Jasa Servis Water Heater Panggilan Medan — Bergaransi & Teknisi Handal",
    subheadline: "Layanan perbaikan dan perawatan water heater panggilan di Kota Medan dan sekitarnya. Cepat, transparan, dan bergaransi resmi.",
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
