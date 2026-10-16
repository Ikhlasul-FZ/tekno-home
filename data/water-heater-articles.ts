export interface ArticleSection {
  heading: string;
  body: string;
  list?: string[];
  tip?: string;
}

export interface WaterHeaterArticle {
  slug: string;
  title: string;
  category: "Panduan & Edukasi" | "Keamanan (Safety)" | "Komparasi Produk" | "Tips Perawatan" | "Troubleshooting" | "Komersial / Bisnis" | "Tips Finansial";
  readTime: string;
  icon: string;
  image: string;
  excerpt: string;
  summaryBullets: string[];
  contentSections: ArticleSection[];
  faq: {
    q: string;
    a: string;
  }[];
}

export const waterHeaterArticles: WaterHeaterArticle[] = [
  {
    slug: "5-tanda-water-heater-rumah-harus-segera-diservis",
    title: "Panduan Praktis: 5 Tanda Water Heater Rumah Anda Harus Segera Diservis",
    category: "Panduan & Edukasi",
    readTime: "4 menit baca",
    icon: "fi fi-rr-flame",
    image: "/ars1.webp",
    excerpt: "Kenali 5 sinyal peringatan water heater mulai dari air tidak kunjung panas, timbul suara mendidih aneh, hingga rembesan air sebelum menimbulkan kebocoran tangki parah.",
    summaryBullets: [
      "Air mandi hanya suam-suam kuku atau butuh waktu pemanasan 2x lebih lama dari biasanya.",
      "Terdengar bunyi gemuruh, letupan, atau mendesis tajam dari dalam tabung tangki.",
      "Air keluar berwarna kuning keruh berkarat atau berbau logam besi menyengat.",
      "Terdapat rembesan tetesan air di bawah tabung atau sekitar nepel pipa fleksibel.",
      "Tombol ELCB pengaman listrik sering jeglek (trip) saat water heater dinyalakan."
    ],
    contentSections: [
      {
        heading: "1. Air Tidak Panas atau Suhu Cepat Menurun Drastis",
        body: "Jika biasanya Anda bisa menikmati air panas berlimpah namun belakangan air hanya hangat suam-suam kuku atau panasnya cepat habis dalam 2 menit, ini merupakan tanda kuat adanya penumpukan kerak kapur (limescale) tebal pada elemen pemanas (heating element). Kerak kapur bertindak sebagai isolator yang menghalangi transfer panas ke air, sekaligus memboroskan konsumsi listrik hingga 40%.",
        list: [
          "Waktu tunggu pemanasan awal (heating cycle) menjadi sangat lambat.",
          "Suhu air fluktuatif (tiba-tiba panas menyengat lalu kembali dingin).",
          "Lampu indikator pemanas menyala terus tanpa memutus arus secara otomatis."
        ],
        tip: "Segera lakukan servis kuras (flushing) sebelum elemen pemanas terbakar putus akibat panas berlebih (overheating) yang terperangkap oleh kerak."
      },
      {
        heading: "2. Suara Berisik atau Letupan Kasar dari Dalam Tangki",
        body: "Water heater tabung yang bekerja normal seharusnya beroperasi senyap. Jika Anda mendengar suara mendidih keras, gemeretak, atau ketukan seperti batu kerikil beradu di dalam tabung, itu adalah suara gelembung uap air yang meletup di bawah lapisan sedimen endapan kapur padat di dasar tangki.",
        list: [
          "Terdengar suara ketukan saat proses pemanasan dimulai.",
          "Getaran halus terasa pada body luar tangki saat air dipanaskan."
        ]
      },
      {
        heading: "3. Air Keluar Keruh, Berkarat, atau Berbau Besi",
        body: "Air mandi yang keluar dari keran shower berwarna kecokelatan, keruh, atau berbau karat menyengat menandakan bahwa batang anoda korban (magnesium anode rod) di dalam tangki sudah habis terkikis total. Tanpa anoda, air agresif mulai mengikis dinding tangki bagian dalam, yang jika dibiarkan akan menyebabkan dinding tangki bocor berlubang permanen.",
        tip: "Anoda magnesium wajib diganti baru secara berkala setiap 1-2 tahun untuk melindungi tangki dari korosi karat."
      },
      {
        heading: "4. Muncul Rembesan Air di Bawah Unit atau Nepel Pipa",
        body: "Tetesan air sekecil apapun di sekitar bawah unit pemanas tidak boleh disepelekan. Rembesan bisa berasal dari seal karet flange elemen pemanas yang getas, katup pelepas tekanan (safety valve) yang rusak, atau yang paling fatal: dinding tangki enamel retak akibat tekanan berlebih.",
        list: [
          "Bercak basah atau tetesan air terus-menerus di lantai kamar mandi.",
          "Timbul kerak putih atau karat di sekeliling sambungan nepel pipa masuk dan keluar."
        ]
      },
      {
        heading: "5. ELCB / MCB Listrik Sering Jeglek (Trip)",
        body: "ELCB (Earth Leakage Circuit Breaker) adalah sistem pengaman anti-setrum. Jika saat water heater diaktifkan ELCB langsung jeglek, ini sinyal bahaya darurat adanya kebocoran arus listrik ke air akibat isolasi elemen pemanas yang bocor atau kabel internal yang basah. Jangan pernah mem-bypass tombol ELCB secara paksa!",
        tip: "Segera matikan saklar water heater dan hubungi teknisi profesional untuk pengetesan resistansi isolasi (megger test)."
      }
    ],
    faq: [
      {
        q: "Berapa lama estimasi pengerjaan servis dan kuras water heater?",
        a: "Proses pengurasan total, pembersihan elemen dari kerak, dan inspeksi ELCB rata-rata membutuhkan waktu 45 hingga 60 menit langsung di kamar mandi Anda."
      },
      {
        q: "Apakah perbaikan ini bergaransi?",
        a: "Ya! Tekno Home Services memberikan garansi layanan 30 hingga 90 hari untuk perbaikan teknisi dan suku cadang yang diganti."
      }
    ]
  },
  {
    slug: "jangan-tunggu-meledak-bahaya-mengabaikan-tekanan-tinggi-pada-water-heater",
    title: "Jangan Tunggu Meledak! Ini Bahaya Mengabaikan Tekanan Tinggi pada Water Heater",
    category: "Keamanan (Safety)",
    readTime: "5 menit baca",
    icon: "fi fi-rr-shield-exclamation",
    image: "/ars2.webp",
    excerpt: "Memahami bahaya fatal lonjakan tekanan uap air panas, fungsi krusial katup pengaman TPR Valve, dan langkah pencegahan sebelum tangki pemanas meledak.",
    summaryBullets: [
      "Tekanan uap air panas yang terperangkap tanpa ventilasi dapat menghasilkan daya ledak setara dinamit.",
      "Safety Valve (TPR Valve) adalah gardu penyelamat utama dari ledakan tekanan tangki.",
      "Katup pengaman yang macet karena endapan kapur adalah penyebab nomor satu kegagalan tangki.",
      "Jika pipa buang safety valve menyemburkan uap mendidih terus-menerus, segera putus aliran daya.",
      "Pengecekan tuas manual test TPR valve wajib dilakukan secara berkala setiap 6 bulan."
    ],
    contentSections: [
      {
        heading: "Mengapa Tekanan Tinggi Sangat Berbahaya?",
        body: "Prinsip dasar fisika: ketika air dipanaskan, volumenya akan memuai. Pada tabung tertutup rapat (closed system), pemuaian ini menciptakan tekanan hidrolik yang luar biasa besar. Jika termostat gagal memutus arus listrik dan katup pengaman macet, air akan mencapai titik didih super (superheated water di atas 100°C). Satu titik kegagalan struktur tangki dapat memicu ekspansi uap mendadak yang sanggup meruntuhkan dinding kamar mandi.",
        tip: "Pemanas air modern dirancang dengan sistem keamanan ganda, namun keselamatan ini bergantung penuh pada kondisi katup pengaman yang prima."
      },
      {
        heading: "Mengenal TPR Valve (Temperature & Pressure Relief Valve)",
        body: "TPR Valve adalah katup kuningan berpegas yang terpasang di samping atau atas tabung water heater. Katup ini memiliki sensor ganda:",
        list: [
          "Batas Tekanan (Pressure Limit): Otomatis membuang air jika tekanan dalam tangki melebihi 7-8 bar.",
          "Batas Suhu (Temperature Limit): Otomatis membuka katup pembuangan jika temperatur air mencapai 93-99°C.",
          "Pipa Buang (Discharge Pipe): Mengalirkan kelebihan air panas bertekanan secara aman ke saluran pembuangan lantai."
        ]
      },
      {
        heading: "Tanda-Tanda Katup Pengaman Bermasalah",
        body: "Perhatikan tanda-tanda berikut pada katup pengaman water heater Anda:",
        list: [
          "Katup Menetes Tanpa Henti: Menandakan tekanan air masuk dari pompa pendorong (booster pump) terlalu tinggi atau seal katup aus terganjal kerak.",
          "Katup Tidak Pernah Mengeluarkan Air Sama Sekali: Hati-hati, lubang katup mungkin sudah tersumbat kapur batu pekat sehingga kehilangan fungsinya.",
          "Terdengar Suara Bersiul (Whistling Sound): Udara dan uap panas bertekanan tinggi terjebak dan memaksa keluar melalui celah sempit."
        ]
      },
      {
        heading: "Langkah Darurat Saat Tangki Mengalami Tekanan Tinggi Ekstrem",
        body: "Jika Anda mendengar suara mendidih menggelegak hebat atau melihat uap tebal keluar dari sambungan pipa:",
        list: [
          "Langkah 1: Matikan langsung MCB listrik utama atau tutup kran suplai gas ke water heater.",
          "Langkah 2: JANGAN berdiri persis di depan unit water heater.",
          "Langkah 3: Buka semua kran air panas di wastafel dan bathtub untuk membantu meredakan tekanan tangki secara bertahap.",
          "Langkah 4: Jangan mendekati atau mencoba membongkar katup saat tangki masih panas membara.",
          "Langkah 5: Panggil teknisi profesional Tekno Home untuk pemeriksaan dan penggantian safety valve baru."
        ]
      }
    ],
    faq: [
      {
        q: "Bagaimana cara mengetes apakah Safety Valve masih berfungsi normal?",
        a: "Angkat tuas logam kecil pada katup pengaman secara perlahan selama 2 detik. Jika air panas menyembur lancar keluar pipa buang lalu menutup rapat kembali saat tuas dilepas, berarti katup masih bekerja baik."
      },
      {
        q: "Kapan Safety Valve harus diganti baru?",
        a: "Produsen water heater ternama (Ariston, Modena, Rinnai, Rheem) menyarankan penggantian TPR Valve setiap 3 hingga 5 tahun sekali."
      }
    ]
  },
  {
    slug: "water-heater-gas-vs-listrik-mana-yang-lebih-hemat-dan-aman-untuk-keluarga",
    title: "Water Heater Gas vs Listrik: Mana yang Lebih Hemat dan Aman untuk Keluarga?",
    category: "Komparasi Produk",
    readTime: "5 menit baca",
    icon: "fi fi-rr-scale",
    image: "/ars3.webp",
    excerpt: "Perbandingan mendalam efisiensi biaya bulanan, kecepatan produksi air panas, dan fitur proteksi keselamatan antara water heater gas vs water heater listrik.",
    summaryBullets: [
      "Water heater gas instan sangat hemat biaya operasional dan tidak bergantung pada kapasitas daya listrik rumah.",
      "Water heater listrik tabung memberikan kestabilan suhu prima dan tidak membutuhkan ventilasi buang gas.",
      "Proteksi ELCB anti-setrum modern membuat water heater listrik sangat aman untuk anak-anak dan lansia.",
      "Water heater gas wajib dipasang di kamar mandi berventilasi udara terbuka demi mencegah keracunan gas CO.",
      "Pertimbangkan daya listrik rumah, jumlah anggota keluarga, dan layout kamar mandi sebelum memilih."
    ],
    contentSections: [
      {
        heading: "1. Perbandingan Biaya Operasional Bulanan",
        body: "Faktor biaya sering menjadi penentu utama. Water heater gas instan menggunakan tabung LPG 3kg atau 12kg yang hanya menyala saat keran dibuka (on-demand), menjadikannya sangat hemat (sekitar Rp 40.000 - Rp 70.000/bulan untuk keluarga kecil). Sedangkan water heater listrik tabung (storage) mengonsumsi daya 350W hingga 1200W dengan estimasi biaya Rp 120.000 - Rp 250.000/bulan tergantung durasi pemanasan dan insulasi tangki."
      },
      {
        heading: "2. Kecepatan & Kestabilan Suhu Air Panas",
        body: "Masing-masing memiliki karakteristik pasokan air:",
        list: [
          "Water Heater Gas Instan: Air panas tersedia instan tanpa batas waktu tunggu, namun suhunya bisa terpengaruh jika debit tekanan pompa air mengecil.",
          "Water Heater Listrik Tabung (Storage): Suhu air sangat stabil dan konsisten karena air telah tercampur sempurna di dalam tangki berinsulasi tebal, namun memiliki batas kapasitas liter (misal 15L, 30L, 50L)."
        ]
      },
      {
        heading: "3. Standar Keselamatan (Safety Comparison)",
        body: "Dua aspek keselamatan utama yang wajib dipahami keluarga:",
        list: [
          "Water Heater Listrik: Risiko tersetrum telah diminimalisir dengan sistem proteksi ELCB ganda, kabel grounding arde tanah, dan elemen isolasi kering (Incoloy/Titanium).",
          "Water Heater Gas: Membutuhkan pembakaran oksigen dan menghasilkan gas buang. Dilarang keras dipasang di kamar mandi tertutup tanpa ventilasi kisi-kisi atau exhaust fan luar karena risiko gas karbon monoksida (CO)."
        ],
        tip: "Pastikan instalasi kabel arde (grounding) water heater listrik tertancap kuat ke tanah dengan resistansi di bawah 5 Ohm."
      },
      {
        heading: "4. Kebutuhan Daya Listrik Rumah",
        body: "Bagi rumah dengan daya listrik PLN 900 VA atau 1300 VA yang sudah banyak terpakai oleh AC dan kulkas, water heater gas adalah solusi paling praktis karena pemantiknya hanya memakai 2 buah baterai tipe D. Sebaliknya, jika daya listrik rumah Anda 2200 VA ke atas, water heater listrik tabung menawarkan kenyamanan mandi yang lebih mewah dan minim perawatan tabung gas."
      },
      {
        heading: "Kesimpulan Rekomendasi Teknisi Tekno Home",
        body: "Pilihlah water heater listrik jika kamar mandi Anda berada di dalam ruangan tertutup (tanpa jendela luar) atau apartemen, dan Anda mengutamakan kepraktisan tanpa gonta-ganti tabung gas. Pilihlah water heater gas jika Anda ingin menekan pengeluaran bulanan dan kamar mandi memiliki sirkulasi udara luar yang luas."
      }
    ],
    faq: [
      {
        q: "Apakah Tekno Home melayani servis kedua jenis pemanas air tersebut?",
        a: "Ya, teknisi kami adalah spesialis berpengalaman untuk water heater listrik (storage & instan), water heater gas kompor/baterai, serta solar water heater tenaga surya."
      }
    ]
  },
  {
    slug: "tips-merawat-water-heater-elemen-pemanas-awet-dan-higienis",
    title: "Tips Merawat Water Heater agar Elemen Pemanas Awet dan Air Tetap Higienis",
    category: "Tips Perawatan",
    readTime: "4 menit baca",
    icon: "fi fi-rr-sparkles",
    image: "/ars4.webp",
    excerpt: "Langkah mudah merawat tangki pemanas air, membersihkan endapan kapur, menjaga higienitas air mandi, dan memperpanjang usia elemen pemanas hingga belasan tahun.",
    summaryBullets: [
      "Kuras tangki pemanas air secara mandiri atau bersama teknisi minimal 6 bulan hingga 1 tahun sekali.",
      "Ganti batang magnesium anoda sebelum habis agar dinding tangki tidak berkarat dan bocor.",
      "Atur termostat pada suhu ideal 55°C - 60°C untuk mencegah perkembangbiakan bakteri berbahaya.",
      "Pasang filter sedimen air masuk untuk menyaring pasir, lumpur, dan partikel besi dari sumur/PAM.",
      "Matikan saklar pemanas jika rumah ditinggal bepergian dalam kurun waktu lebih dari 3 hari."
    ],
    contentSections: [
      {
        heading: "1. Rutin Kuras (Flushing) Tangki Setiap 6 - 12 Bulan",
        body: "Air tanah maupun PAM di Indonesia umumnya mengandung mineral kalsium dan magnesium. Selama pemanasan, mineral ini mengendap ke dasar tangki menjadi pasir kerak kapur putih kecokelatan. Jika tidak dikuras, endapan setebal 5-10 cm akan menenggelamkan elemen pemanas, membuatnya kepanasan dan cepat putus terbakar.",
        tip: "Pengurasan tangki secara rutin dapat mengembalikan efisiensi pemanasan air kembali seperti baru beli."
      },
      {
        heading: "2. Ganti Batang Anoda Korban (Anode Rod)",
        body: "Di dalam tangki water heater terpasang batang logam magnesium yang sengaja dikorbankan untuk menyerap sifat korosif air (proses proteksi katodik). Seiring waktu, batang ini akan habis berongga seperti spons. Mengganti anoda setiap 1-2 tahun adalah investasi kecil puluhan ribu rupiah yang menyelamatkan tangki jutaan rupiah dari kebocoran.",
        list: [
          "Anoda sehat: Batang logam padat mulus abu-abu.",
          "Anoda habis: Batang kawat tipis keropos berkarat dengan serpihan kapur menempel."
        ]
      },
      {
        heading: "3. Pasang Filter Sedimen di Pipa Input Air Bersih",
        body: "Penyaring air sederhana (sediment spun filter 5-10 mikron) sebelum kran masuk water heater sangat efektif menahan kotoran lumpur, lumut, dan karat pipa instalasi air rumah. Air yang bersih membuat bagian dalam tangki tetap higienis dan aman untuk kulit sensitif anak-anak."
      },
      {
        heading: "4. Pengaturan Suhu Termostat yang Higienis & Hemat",
        body: "Banyak pengguna menyetel suhu pemanas hingga maksimal 75-80°C. Ini tidak disarankan karena mempercepat pembentukan kerak kapur 3x lebih cepat. Suhu ideal yang direkomendasikan adalah 55°C hingga 60°C. Suhu ini cukup panas untuk mematikan bakteri patogen air seperti Legionella pneumophila, namun tetap hemat energi dan aman dari risiko kulit melepuh."
      },
      {
        heading: "5. Matikan Unit Saat Bepergian Lama",
        body: "Jika keluarga Anda berlibur atau meninggalkan rumah lebih dari beberapa hari, matikan MCB/saklar water heater. Hal ini menghindari siklus pemanasan berulang yang sia-sia dan mengistirahatkan komponen elektrikal unit."
      }
    ],
    faq: [
      {
        q: "Bagaimana cara mengetahui bahwa tangki water heater sudah saatnya dikuras?",
        a: "Jika air yang keluar dari keran air panas mulai berbau apek, terdapat butiran pasir putih halus di kepala shower, atau pemanas air mendadak terdengar berisik saat memanaskan."
      }
    ]
  },
  {
    slug: "air-mandi-tidak-panas-cara-mengatasi-gangguan-termostat-water-heater",
    title: "Air Mandi Tidak Panas? Ini Cara Mengatasi Gangguan Termostat Water Heater",
    category: "Troubleshooting",
    readTime: "4 menit baca",
    icon: "fi fi-rr-bolt",
    image: "/ars5.webp",
    excerpt: "Panduan diagnosa mandiri termostat pemanas air ngadat: cara mereset tombol overheat merah, memeriksa arus daya, dan membedakan kerusakan termostat vs elemen pemanas.",
    summaryBullets: [
      "Tombol reset merah (Thermal Cut-Off) sering trip saat suhu air melonjak terlalu tinggi.",
      "Cek indikator lampu pemanas: jika mati total padahal colokan terpasang, periksa saklar ELCB.",
      "Putar knop pengatur suhu termostat untuk mendengarkan bunyi klik perpindahan bimetal.",
      "Gunakan multimeter digital untuk mengukur kontinuitas resistansi kawat elemen pemanas.",
      "Jangan menempelkan kabel jumper langsung tanpa termostat demi menghindari bahaya air mendidih."
    ],
    contentSections: [
      {
        heading: "1. Periksa Tombol Reset Overheat (Manual Reset Switch)",
        body: "Sebagian besar water heater tabung (Ariston, Modena, Ferroli, Daalderop) dilengkapi tombol pengaman termal berlebih berbentuk tombol kecil merah di balik tutup cover bawah unit. Jika suhu air sempat melewati batas aman 85°C, tombol ini akan melompat keluar (trip) dan memutus seluruh aliran listrik agar tangki tidak meledak.",
        list: [
          "Matikan sumber listrik MCB terlebih dahulu demi keamanan.",
          "Buka cover penutup elektrik di bagian bawah water heater.",
          "Cari tombol kecil berwarna merah pada modul termostat.",
          "Tekan tombol tersebut ke dalam hingga terdengar bunyi 'klik' tegas.",
          "Tutup kembali cover dan nyalakan MCB untuk mengetes apakah pemanas kembali aktif."
        ],
        tip: "Jika tombol reset merah ini terus melompat mati berulang kali setelah ditekan, jangan dipaksa karena menandakan termostat sudah rusak atau elemen pemanas konslet."
      },
      {
        heading: "2. Bedakan Kerusakan: Termostat vs Elemen Pemanas Putus",
        body: "Untuk mengetahui komponen mana yang rusak tanpa membongkar seluruh tangki:",
        list: [
          "Gejala Termostat Rusak: Lampu indikator tidak mau menyala sama sekali, atau sebaliknya lampu pemanas menyala terus berjam-jam tanpa pernah mati sehingga air menjadi mendidih berbahaya.",
          "Gejala Elemen Pemanas Putus: Lampu indikator menyala merah normal, namun air keran tidak kunjung panas sedikitpun meski sudah ditunggu berjam-jam."
        ]
      },
      {
        heading: "3. Pengetesan Sensor Bimetal Termostat",
        body: "Termostat mekanik bekerja menggunakan plat bimetal yang memuai saat terkena panas. Teknisi kami biasa menguji kepekaan termostat dengan memutar knop suhu dari posisi Min ke Max. Pada kondisi normal, akan terdengar suara klik halus yang menandakan kontak plat elektrik masih menyambung dan memutus dengan presisi."
      },
      {
        heading: "4. Kapan Harus Mengganti Unit Termostat Baru?",
        body: "Jika plat kontak bimetal di dalam termostat sudah gosong menghitam akibat percikan arus listrik tinggi, hambatan resistansinya akan naik dan pembacaan suhu menjadi kacau. Mengganti termostat dengan suku cadang original bergaransi adalah solusi terbaik agar suhu air mandi kembali akurat dan aman untuk keluarga."
      }
    ],
    faq: [
      {
        q: "Apakah teknisi Tekno Home membawa termostat pengganti original di lokasi?",
        a: "Ya! Teknisi kami membawa stok suku cadang termostat rod probe dan thermostat bracket multi-brand (Ariston, Modena, Rinnai, Electrolux, Gainsborough, dll.) siap pasang di tempat."
      }
    ]
  },
  {
    slug: "pentingnya-servis-berkala-untuk-pemanas-air-di-hotel-dan-tempat-usaha",
    title: "Pentingnya Servis Berkala untuk Pemanas Air di Hotel dan Tempat Usaha",
    category: "Komersial / Bisnis",
    readTime: "5 menit baca",
    icon: "fi fi-rr-building",
    image: "/ars6.webp",
    excerpt: "Menjaga keandalan pasokan air panas 24 jam untuk hotel, villa, spa, dan kost-kostan demi reputasi bisnis, efisiensi energi listrik, dan kepuasan tamu.",
    summaryBullets: [
      "Komplain nomor satu tamu hotel di ulasan online adalah air mandi kamar mandi dingin.",
      "Sistem pemanas komersial (Heat Pump & Central Storage) bekerja non-stop 24 jam sehari.",
      "Kerak kapur pada sistem pipa sirkulasi menaikkan biaya listrik operasional hingga 35%.",
      "Pencegahan kebocoran tangki kapasitas besar (100L - 500L) sebelum merusak plafon kamar hotel.",
      "Tekno Home menyediakan kontrak pemeliharaan preventif terjadwal khusus pelaku usaha akomodasi."
    ],
    contentSections: [
      {
        heading: "1. Kualitas Air Panas Sebagai Standar Kepuasan Tamu",
        body: "Bagi bisnis perhotelan, villa, resort, spa, dan kost eksklusif, ketersediaan air panas bertekanan stabil bukan lagi fasilitas tambahan, melainkan kebutuhan dasar tamu. Satu ulasan bintang 1 di Google Reviews atau OTA (Traveloka, Agoda, Booking.com) karena tamu mandi air dingin di pagi hari dapat merusak reputasi hotel yang dibangun bertahun-tahun."
      },
      {
        heading: "2. Efisiensi Biaya Listrik & Daya Tahan Mesin Komersial",
        body: "Sistem pemanas air komersial seperti Heat Pump (pompa kalor), solar central boiler, atau multi-unit electric storage memiliki kapasitas ratusan liter air. Endapan kerak kapur yang menumpuk pada koil pemanas memaksa kompresor dan elemen pemanas bekerja ekstra keras dua kali lipat, melipatgandakan tagihan listrik bulanan tempat usaha Anda.",
        tip: "Servis kimia pembersih kerak (chemical descaling) secara berkala menjaga koefisien performa (COP) mesin heat pump tetap di angka optimal."
      },
      {
        heading: "3. Menghindari Kebocoran Fatal yang Merusak Plafon",
        body: "Pemanas air komersial sering dipasang di atas plafon kamar atau di ruang utilitas atap (rooftop). Tangki 80-300 liter yang bocor tiba-tiba dapat menjebolkan plafon gypsum, merusak kasur, karpet, lantai kayu parket, serta perabotan kamar tamu di bawahnya dengan kerugian finansial puluhan juta rupiah.",
        list: [
          "Inspeksi korosi tangki dan penggantian anoda magnesium kapasitas besar.",
          "Pengecekan katup penyeimbang tekanan (pressure reducing valve) dan ekspansi vessel.",
          "Pengujian otomatisasi pompa sirkulasi return line."
        ]
      },
      {
        heading: "4. Pencegahan Risiko Kontaminasi Bakteri Air",
        body: "Pipa sirkulasi air panas yang panjang dan jarang diservis rentan memiliki titik air mati (dead leg) dengan suhu suam-suam kuku (30-45°C), tempat ideal bagi bakteri Legionella berkembang biak. Program servis berkala memastikan suhu sirkulasi selalu mencapai standar higienitas sanitasi perhotelan."
      },
      {
        heading: "Layanan Fleksibel Khusus Bisnis Tekno Home",
        body: "Teknisi Tekno Home Services siap bekerja dengan jadwal yang tidak mengganggu kenyamanan tamu (jam check-out antara pukul 12.00 - 14.00) lengkap dengan laporan teknis formal (service report) dan invoice resmi perusahaan."
      }
    ],
    faq: [
      {
        q: "Berapa frekuensi ideal servis pemanas air untuk hotel atau villa aktif?",
        a: "Untuk tingkat okupansi kamar di atas 70%, pengecekan preventif disarankan setiap 3 bulan sekali dan pengurasan menyeluruh setiap 6 bulan."
      },
      {
        q: "Apakah melayani sistem heat pump dan water heater tenaga surya (solar)?",
        a: "Ya! Kami melayani sistem solar water heater (Wika, Solahart, Sunhot, Edwards) dan heat pump komersial berbagai kapasitas."
      }
    ]
  },
  {
    slug: "hemat-pengeluaran-kapan-waktu-tepat-memanggil-service-water-heater-panggilan",
    title: "Hemat Pengeluaran: Kapan Waktu yang Tepat Memanggil Jasa Service Water Heater Panggilan?",
    category: "Tips Finansial",
    readTime: "4 menit baca",
    icon: "fi fi-rr-wallet",
    image: "/ars7.webp",
    excerpt: "Analisa cerdas biaya servis preventif vs menunda perbaikan. Ketahui saat yang tepat memanggil teknisi agar tidak boncos ganti tangki jutaan rupiah.",
    summaryBullets: [
      "Biaya servis berkala hanya sekitar 5-10% dari harga membeli unit water heater baru.",
      "Menunda servis saat ada rembesan kecil sering kali berujung pada tangki retak total yang tidak bisa diperbaiki.",
      "Kerak kapur yang dibersihkan tepat waktu menghemat tagihan listrik hingga ratusan ribu per bulan.",
      "Servis panggilan langsung di rumah bebas repot copot instalasi pipa dan tanpa risiko tabung penyok.",
      "Garansi resmi 30-90 hari Tekno Home memastikan rasa aman pengeluaran finansial keluarga Anda."
    ],
    contentSections: [
      {
        heading: "1. Servis Tepat Waktu vs Beli Water Heater Baru",
        body: "Membeli unit water heater berkualitas (seperti Ariston, Modena, Daalderop, atau Rheem) beserta biaya instalasi pipa dan kabel arde baru membutuhkan dana antara Rp 2.500.000 hingga lebih dari Rp 8.000.000. Padahal sebagian besar masalah umum—seperti air tidak panas, aliran kecil, atau anoda habis—hanya membutuhkan biaya servis ringan dan penggantian part terjangkau untuk mengembalikan performa unit seperti baru keluar dari toko.",
        tip: "Prinsip bijak: Rp 100 ribu untuk perawatan rutin jauh lebih hemat daripada Rp 3 juta untuk membeli unit baru karena tangki terlanjur jebol."
      },
      {
        heading: "2. Menghindari Pemborosan Tagihan Listrik PLN",
        body: "Banyak pemilik rumah tidak sadar bahwa kerak kapur yang melapisi elemen pemanas setebal 3 milimeter menaikkan konsumsi energi listrik hingga 25-30%. Water heater Anda terpaksa menyala 2x lebih lama untuk mencapai suhu yang sama. Jika Anda membayar tagihan listrik membengkak setiap bulan, servis kuras water heater akan langsung terasa dampaknya pada penghematan tagihan listrik bulan berikutnya."
      },
      {
        heading: "3. Kapan Batas Waktu yang Tepat Menghubungi Teknisi?",
        body: "Jangan menunggu sampai air sama sekali tidak panas atau tabung meletup. Segera hubungi teknisi ketika Anda menemukan:",
        list: [
          "Waktu tunggu air panas mulai terasa lebih lama dari biasanya.",
          "Mulai terdengar suara mendesis halus saat proses pemanasan.",
          "Tampak tetesan air halus di sekeliling baut flange elemen pemanas.",
          "Sudah lebih dari 1 tahun unit tidak pernah dikuras atau dicek anodanya.",
          "Tombol ELCB terasa longgar atau sempat jeglek sekali."
        ]
      },
      {
        heading: "4. Kepraktisan Layanan Home Service Teknisi Panggilan",
        body: "Membawa water heater tabung ke bengkel sangat merepotkan: Anda harus mematikan toren air, membongkar pipa air panas, dan membawa tabung berat berisi sisa air kotor di dalam mobil. Layanan panggilan Tekno Home Services memberikan solusi paling nyaman:",
        list: [
          "Teknisi datang ke rumah sesuai jadwal luang Anda.",
          "Peralatan kuras, pompa vakum, dan suku cadang original dibawa lengkap ke lokasi.",
          "Pengerjaan bersih, rapi, dan langsung dites fungsi air panas di depan Anda.",
          "Transparansi biaya pengerjaan disepakati di awal sebelum perbaikan dimulai."
        ]
      },
      {
        heading: "5. Jaminan Garansi Resmi: Anti Boncos Perbaikan Berulang",
        body: "Tekno Home Services memberikan nota garansi layanan 30 hingga 90 hari untuk jasa pengerjaan dan suku cadang yang diganti. Perlindungan garansi ini menjamin Anda tidak akan mengeluarkan uang dua kali untuk kendala yang sama."
      }
    ],
    faq: [
      {
        q: "Bagaimana cara melakukan pemesanan servis water heater panggilan?",
        a: "Cukup klik tombol WhatsApp di situs ini, sampaikan merk water heater dan kendala yang dialami, dan admin kami akan langsung mengonfirmasi jadwal teknisi ke rumah Anda."
      },
      {
        q: "Apakah teknisi melayani panggilan di hari libur atau akhir pekan?",
        a: "Ya! Tim teknisi Tekno Home Services melayani kunjungan setiap hari termasuk hari Sabtu, Minggu, dan hari libur nasional."
      }
    ]
  }
];

export function getWaterHeaterArticleBySlug(slug: string): WaterHeaterArticle | undefined {
  return waterHeaterArticles.find((a) => a.slug === slug);
}
