export interface ArticleSection {
  heading: string;
  body: string;
  list?: string[];
  tip?: string;
}

export interface CookerhoodArticle {
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

export const cookerhoodArticles: CookerhoodArticle[] = [
  {
    slug: "5-tanda-cooker-hood-anda-harus-segera-diservis",
    title: "Panduan Praktis: 5 Tanda Cooker Hood Anda Harus Segera Diservis",
    category: "Panduan & Edukasi",
    readTime: "4 menit baca",
    icon: "fi fi-rr-wind",
    image: "/img1 (20).webp",
    excerpt: "Kenali 5 tanda cooker hood bermasalah mulai dari daya hisap melemah, suara motor berisik, hingga tetesan minyak bocor sebelum merusak kitchen set dapur Anda.",
    summaryBullets: [
      "Asap masakan tidak terhisap dan mengepul ke ruang tamu atau ruang keluarga.",
      "Motor blower bersuara dengung kasar, bergetar kencang, atau berdecit tajam.",
      "Tetesan minyak kotor berwarna hitam menetes dari kisi-kisi filter ke atas kompor.",
      "Tombol pengatur kecepatan (speed switch) atau sensor sentuh macet dan tidak responsif.",
      "Lampu penerangan halogen/LED mati total atau soket kabel meleleh kepanasan."
    ],
    contentSections: [
      {
        heading: "1. Daya Hisap Asap Melemah Drastis",
        body: "Fungsi utama cooker hood adalah menarik asap, uap panas, dan partikel minyak dari masakan agar tidak menempel pada perabotan rumah. Uji sederhana: tempelkan selembar tisu dapur pada permukaan filter saat hood menyala pada kecepatan 2 atau 3. Jika tisu langsung jatuh dan tidak menempel erat, itu tanda pasti bahwa aliran udara tersumbat parah oleh kerak minyak atau putaran motor blower sudah melambat.",
        list: [
          "Asap masakan pedas seperti sambal membuat orang di ruangan batuk dan perih mata.",
          "Dinding keramik dan kabinet kitchen set atas terasa lengket berminyak.",
          "Aroma masakan mengendap di ruangan berjam-jam setelah kompor dimatikan."
        ],
        tip: "Lakukan tes tempel tisu secara berkala setiap 2 minggu untuk memantau performa daya hisap cooker hood Anda."
      },
      {
        heading: "2. Suara Blower Berisik Kasar atau Bergetar Kencang",
        body: "Cooker hood berkualitas memiliki tingkat kebisingan rendah (senyap). Jika mendadak terdengar suara dengungan keras, bunyi gesekan logam, atau body hood bergetar hebat saat dihidupkan, hal ini menandakan baling-baling impeller kemasukan kotoran atau bearing motor aus akibat kering pelumas.",
        list: [
          "Bunyi gesekan 'krek-krek' saat pertama kali menekan tombol kecepatan 1.",
          "Getaran terasa sampai ke dinding kabinet kitchen set."
        ]
      },
      {
        heading: "3. Tetesan Minyak Kotor Menetes ke Atas Kompor",
        body: "Ini adalah kondisi yang sangat mengganggu sekaligus berbahaya. Tetesan minyak hitam pekat dari filter terjadi karena spons atau filter aluminium mesh sudah jenuh (saturated) menampung lemak. Minyak yang menetes tepat di atas wajan masakan berisiko mengontaminasi makanan keluarga dan memicu sambaran api mendadak jika mengenai api kompor.",
        tip: "Jangan menunda pembersihan jika kisi-kisi filter sudah tampak berkilau basah oleh tetesan minyak pekat."
      },
      {
        heading: "4. Tombol Kecepatan Macet, Keras, atau Rusak",
        body: "Uap minyak masakan yang panas memiliki sifat menguap lalu mengembun di sela-sela tombol saklar (push button switch atau touch panel). Kerak minyak yang mengering bersifat isolator dan perekat yang membuat tombol macet tidak bisa ditekan, atau modul PCB korslet sehingga cooker hood mati total.",
        list: [
          "Hanya satu level kecepatan yang bisa berfungsi (misal speed 3 saja).",
          "Tombol tidak bisa mematikan mesin (harus mencabut steker colokan listrik)."
        ]
      },
      {
        heading: "5. Lampu Penerangan Mati atau Soket Gosong",
        body: "Lampu cooker hood dirancang tahan panas, namun akumulasi uap minyak tebal yang merembes ke balik kap lampu dapat membakar soket kabel dan menyebabkan lampu putus berulang kali. Ini adalah indikasi bahwa sistem sirkulasi internal hood sudah kehilangan kerapatannya."
      }
    ],
    faq: [
      {
        q: "Berapa lama estimasi servis dan deep cleaning cooker hood panggilan?",
        a: "Pembersihan total filter, pembongkaran blower impeller, pelumasan motor, dan uji hisap rata-rata memakan waktu 60 hingga 90 menit langsung di dapur Anda."
      },
      {
        q: "Apakah perbaikan ini bergaransi?",
        a: "Tentu! Tekno Home Services memberikan garansi layanan 30 hingga 90 hari untuk jasa servis dan suku cadang yang diganti."
      }
    ]
  },
  {
    slug: "jangan-biarkan-dapur-bau-apek-bahaya-filter-cooker-hood-yang-kotor",
    title: "Jangan Biarkan Dapur Bau Apek! Ini Bahaya Filter Cooker Hood yang Kotor",
    category: "Keamanan (Safety)",
    readTime: "5 menit baca",
    icon: "fi fi-rr-shield-exclamation",
    image: "/img1 (21).webp",
    excerpt: "Bahaya laten tumpukan kerak minyak pada filter cooker hood: dari risiko kebakaran dapur, udara beracun pemicu alergi, hingga beban motor terbakar.",
    summaryBullets: [
      "Minyak hewani dan nabati yang mengering pada kisi-kisi filter memiliki titik nyala api yang sangat rendah.",
      "Satu letupan api dari wajan (flare-up) dapat menyambar filter yang penuh minyak dan menjalar ke kitchen set.",
      "Filter karbon aktif yang jenuh melepaskan kembali bau apek dan partikel kotor ke seluruh ruangan rumah.",
      "Motor blower yang tercekik filter mampet akan mengalami overheat ekstrem dan korsleting terbakar.",
      "Pembersihan filter aluminium mesh wajib dilakukan rutin minimal sebulan sekali."
    ],
    contentSections: [
      {
        heading: "1. Ancaman Nyata Kebakaran Dapur (Grease Fire Hazard)",
        body: "Banyak pemilik rumah tidak menyadari bahwa filter cooker hood yang dipenuhi kerak minyak adalah 'bahan bakar' yang sangat mudah tersulut. Ketika Anda memasak steak, menumis dengan api besar, atau teknik flambé, percikan api atau uap minyak bersuhu tinggi dapat langsung menyulut filter kotor tersebut. Dalam hitungan detik, api dapat merembet masuk ke saluran cerobong ducting dan membakar seluruh kabinet kitchen set atas.",
        tip: "Asosiasi Keselamatan Kebakaran mencatat filter cooker hood berminyak sebagai salah satu dari 3 pemicu utama kebakaran dapur residensial."
      },
      {
        heading: "2. Udara Dapur Pengap, Bau Apek, dan Masalah Pernapasan",
        body: "Bagi cooker hood model resirkulasi (tanpa pipa cerobong keluar), udara kotor disaring melalui Carbon Filter (arang aktif). Jika filter karbon ini sudah berusia lebih dari 6 bulan, pori-pori arangnya sudah tertutup rapat oleh minyak. Akibatnya, filter tidak lagi mampu menyerap bau, melainkan justru menjadi sarang bakteri dan jamur yang meniupkan kembali udara apek ke dapur.",
        list: [
          "Muncul bau tengik atau apek khas minyak lama yang sulit hilang.",
          "Anggota keluarga sering bersin, batuk, atau sesak napas saat beraktivitas di dekat dapur."
        ]
      },
      {
        heading: "3. Kerusakan Fatal pada Motor Blower (Overheating)",
        body: "Ketika filter tertutup rapat oleh kerak, motor blower dipaksa menyedot udara dalam kondisi vakum tercekik (air starvation). Beban kerja motor melonjak drastis, putaran RPM anjlok, dan suhu kumparan tembaga motor menjadi luar biasa panas hingga mencapai titik leleh thermal fuse.",
        list: [
          "Tercium aroma plastik atau kawat tembaga gosong dari lubang ventilasi hood.",
          "Biaya penggantian unit motor baru jauh lebih mahal daripada biaya servis cuci filter."
        ]
      },
      {
        heading: "4. Kitchen Set Mewah Menjadi Cepat Kusam & Rusak",
        body: "Uap minyak yang gagal dihisap oleh filter akan mengambang bebas di udara dapur lalu menempel pada pintu lemari kitchen set, permukaan kulkas, dinding, dan lantai granit. Lapisan minyak lengket ini lama-kelamaan mengikat debu ruangan, merusak finishing cat kabinet duco atau lapisan HPL hingga mengelupas permanen."
      }
    ],
    faq: [
      {
        q: "Kapan filter karbon aktif cooker hood harus diganti baru?",
        a: "Filter karbon aktif tidak bisa dicuci dengan air. Filter ini wajib diganti baru setiap 3 hingga 6 bulan sekali tergantung frekuensi memasak di rumah Anda."
      },
      {
        q: "Apakah filter aluminium mesh bisa dicuci berulang kali?",
        a: "Bisa! Filter aluminium mesh dapat dicuci berulang kali menggunakan larutan air panas dan bahan pelarut lemak khusus tanpa harus beli baru."
      }
    ]
  },
  {
    slug: "cooker-hood-ducting-pipa-vs-recirculating-tanpa-saluran-mana-lebih-efektif",
    title: "Cooker Hood Dihubungkan ke Pipa vs Tanpa Saluran: Mana yang Lebih Efektif?",
    category: "Komparasi Produk",
    readTime: "5 menit baca",
    icon: "fi fi-rr-scale",
    image: "/img1 (22).webp",
    excerpt: "Perbandingan tuntas efektivitas pembuangan asap, kepraktisan instalasi, dan biaya perawatan antara sistem Ducting (pipa cerobong) vs Recirculating (filter karbon).",
    summaryBullets: [
      "Sistem Ducting membuang 100% asap, uap panas, dan kelembapan langsung ke luar rumah.",
      "Sistem Resirkulasi sangat fleksibel untuk apartemen atau dapur tanpa akses dinding luar.",
      "Sistem Ducting tidak memerlukan biaya penggantian filter karbon aktif berkala.",
      "Sistem Resirkulasi mengembalikan udara kembali ke dapur setelah disaring arang aktif.",
      "Pemilihan tipe yang tepat wajib menyesuaikan layout bangunan dan gaya memasak keluarga."
    ],
    contentSections: [
      {
        heading: "1. Cara Kerja Sistem Ducting (Pipa Cerobong Keluar)",
        body: "Cooker hood tipe ducting menyedot udara kotor dari atas kompor, melewatkannya melalui filter aluminium untuk menangkap lemak cair, lalu meniupkan seluruh asap, aroma bumbu, dan uap panas keluar rumah melalui pipa fleksibel (ducting pipe berdiameter 5-6 inci). Udara segar luar kemudian masuk menggantikan volume udara yang dibuang.",
        list: [
          "Efektivitas pembuangan asap dan panas mencapai 95-100%.",
          "Dapur tetap terasa sejuk dan bebas lembab meski memasak gulai atau rendang dalam waktu lama.",
          "Hanya memerlukan pencucian filter aluminium mesh tanpa beli filter karbon."
        ]
      },
      {
        heading: "2. Cara Kerja Sistem Resirkulasi (Tanpa Pipa / Ductless)",
        body: "Pada hunian apartemen atau dapur di tengah ruangan tertutup tanpa akses dinding luar, membuat lubang cerobong ke luar gedung adalah hal yang mustahil. Sistem resirkulasi menjadi solusi utama: udara kotor disedot, disaring lemaknya oleh filter aluminium, lalu dilewatkan ke Carbon Charcoal Filter untuk dinetralkan aromanya, sebelum akhirnya ditiupkan kembali ke dalam dapur.",
        list: [
          "Instalasi sangat praktis, rapi, dan tidak merusak dinding fasad luar bangunan.",
          "Tidak membuang uap panas dan kelembapan, melainkan hanya menyaring partikel minyak dan bau.",
          "Wajib mengganti filter karbon aktif secara disiplin setiap 3-6 bulan."
        ],
        tip: "Jika Anda sering memasak hidangan berminyak tinggi atau masakan beraroma tajam, sistem Ducting adalah pilihan nomor satu yang paling direkomendasikan."
      },
      {
        heading: "3. Perbandingan Biaya Instalasi & Perawatan",
        body: "Dari segi biaya:",
        list: [
          "Biaya Awal: Sistem ducting membutuhkan biaya instalasi pipa fleksibel, pembuatan lubang bobok dinding (coring), dan pemasangan cap cerobong luar (external cowl). Sistem resirkulasi lebih hemat di awal.",
          "Biaya Jangka Panjang: Sistem ducting jauh lebih hemat karena bebas biaya beli filter karbon selamanya. Sistem resirkulasi membutuhkan pos pengeluaran rutin penggantian filter arang karbon."
        ]
      },
      {
        heading: "Kesimpulan Rekomendasi Teknisi Tekno Home",
        body: "Pilihlah sistem Ducting jika Anda tinggal di rumah tapak (landed house) dengan dinding dapur yang berbatasan dengan halaman luar. Pilihlah sistem Resirkulasi jika Anda tinggal di apartemen, dapur lantai bawah rumah ruko, atau ingin mempertahankan keutuhan desain kitchen set minimalis tanpa pipa cerobong yang terlihat."
      }
    ],
    faq: [
      {
        q: "Apakah teknisi Tekno Home melayani konversi dari sistem resirkulasi ke sistem ducting pipa?",
        a: "Ya! Kami melayani jasa instalasi pipa ducting baru, perbaikan cerobong fleksibel, pemasangan coring dinding, hingga penggantian motor hood berdaya hisap tinggi."
      }
    ]
  },
  {
    slug: "tips-membersihkan-dan-merawat-cooker-hood-agar-daya-sedot-tetap-maksimal",
    title: "Tips Membersihkan dan Merawat Cooker Hood agar Daya Sedot Tetap Maksimal",
    category: "Tips Perawatan",
    readTime: "4 menit baca",
    icon: "fi fi-rr-sparkles",
    image: "/img1 (23).webp",
    excerpt: "Cara mudah membersihkan kisi-kisi filter aluminium, merawat permukaan stainless steel tanpa gores, dan menjaga performa hisap cooker hood tetap prima.",
    summaryBullets: [
      "Rendam filter aluminium mesh dalam larutan air panas dan baking soda untuk melarutkan kerak lemak.",
      "Gunakan kain microfiber lembut dan cairan pembersih khusus stainless steel (anti-gores).",
      "Ganti filter arang karbon aktif secara disiplin setiap 3 sampai 6 bulan sekali.",
      "Kosongkan dan bersihkan mangkuk penampung minyak (oil cup) setiap selesai memasak porsi besar.",
      "Lakukan servis deep cleaning menyeluruh oleh teknisi panggilan minimal 6 bulan sekali."
    ],
    contentSections: [
      {
        heading: "1. Resep Ampuh Mencuci Filter Aluminium Mesh Bebas Kerak",
        body: "Jangan gunakan sikat kawat kasar pada kisi-kisi filter aluminium karena akan merusak anyaman saringannya. Ikuti cara praktis ini:",
        list: [
          "Lepaskan filter aluminium dengan menekan kait pengunci di bawah cooker hood.",
          "Siapkan baskom besar berisi air mendidih (panas).",
          "Tambahkan 3 sendok makan baking soda dan 2 sendok makan sabun cuci piring penghilang lemak cair.",
          "Rendam filter selama 15-20 menit hingga kerak minyak yang menguning melunak dan terapung di air.",
          "Sikat perlahan menggunakan sikat berbulu lembut atau spons, lalu bilas dengan air bersih dan keringkan total sebelum dipasang kembali."
        ],
        tip: "Pastikan filter benar-benar kering sebelum dipasang kembali ke cooker hood demi mencegah cipratan air mengenai komponen motor listrik."
      },
      {
        heading: "2. Merawat Body Stainless Steel & Kaca Tempered Glass",
        body: "Lapisan stainless steel cooker hood rentan meninggalkan bekas sidik jari (fingerprint) dan noda kusam minyak. Usap body menggunakan kain microfiber yang dibasahi sedikit air sabun hangat, lalu keringkan dengan kain lap bersih searah dengan serat pola logam stainless (grain direction). Hindari cairan pembersih yang mengandung pemutih klorin atau asam kuat."
      },
      {
        heading: "3. Periksa Mangkuk Penampung Minyak (Oil Collector Cup)",
        body: "Beberapa model cooker hood modern (khususnya tipe chimney dan slant range hood) dilengkapi mangkuk plastik atau wadah logam penampung tetesan minyak di bawah motor. Cek mangkuk ini secara berkala dan buang minyak sisa sebelum meluap membasahi kompor Anda."
      },
      {
        heading: "4. Deep Cleaning Bagian Dalam Motor oleh Teknisi Ahli",
        body: "Pembersihan mandiri di rumah umumnya hanya terbatas pada bagian filter luar. Namun partikel uap minyak mikro tetap dapat lolos dan menempel pada baling-baling blower (impeller wheel) serta rumah siput motor di bagian dalam. Pembersihan mendalam (deep cleaning) wajib dilakukan teknisi dengan membongkar housing motor secara hati-hati agar keseimbangan putaran motor tetap presisi."
      }
    ],
    faq: [
      {
        q: "Berapa kali sebaiknya filter cooker hood dicuci?",
        a: "Untuk dapur rumah tangga yang memasak setiap hari, filter aluminium disarankan dicuci setiap 2 hingga 4 minggu sekali."
      }
    ]
  },
  {
    slug: "sedotan-minyak-melemah-cara-mengatasi-motor-cooker-hood-yang-bermasalah",
    title: "Sedotan Minyak Melemah? Ini Cara Mengatasi Motor Cooker Hood yang Bermasalah",
    category: "Troubleshooting",
    readTime: "4 menit baca",
    icon: "fi fi-rr-bolt",
    image: "/img1 (24).webp",
    excerpt: "Panduan diagnosa motor penghisap asap dapur: dari kapasitor lemah, as motor macet oleh oli beku, klep pipa tersumbat, hingga langkah perbaikan teknisi.",
    summaryBullets: [
      "Kapasitor motor yang sudah drop voltase membuat putaran blower melambat drastis.",
      "Endapan minyak lama yang mengeras pada as bearing motor membuat mesin berdengung dan tidak mau berputar.",
      "Klep penahan balik (damper / non-return valve) di ujung pipa cerobong sering macet tertutup.",
      "Pemeriksaan jalur kabel dan switch saklar knop dengan avometer.",
      "Solusi penggantian suku cadang motor original multi-brand bergaransi dari Tekno Home."
    ],
    contentSections: [
      {
        heading: "1. Kapasitor Motor Melemah atau Rusak",
        body: "Gejala paling sering saat sedotan cooker hood melemah padahal filter sudah bersih adalah penurunan nilai mikrofarad (uF) pada Running Capacitor motor. Motor membutuhkan dorongan torsi dari kapasitor untuk mencapai RPM hisap maksimal. Jika kapasitor drop, motor hanya akan berputar sangat lambat atau hanya mengeluarkan suara mendengung halus tanpa ada tarikan angin.",
        tip: "Penggantian kapasitor motor adalah perbaikan cepat dan terjangkau yang langsung mengembalikan daya hisap kencang seperti baru."
      },
      {
        heading: "2. As Rotor Blower Macet oleh 'Oli Jelantah Kering'",
        body: "Uap minyak yang dihisap bertahun-tahun merembes ke celah boshing atau bearing as motor. Saat cooker hood tidak digunakan (misalnya saat malam hari), minyak tersebut mendingin dan berubah menjadi lem padat yang lengket. Akibatnya, saat dinyalakan keesokan harinya, motor tidak kuat berputar dan cepat panas.",
        list: [
          "Baling-baling kipas terasa sangat berat saat diputar perlahan dengan tangan (kondisi steker listrik mati).",
          "Dibutuhkan flushing cairan pembersih kerak oli khusus dan pelumasan ulang dengan gemuk tahan panas (high-temp grease)."
        ]
      },
      {
        heading: "3. Katup Damper (Non-Return Valve) Macet Tertutup",
        body: "Di bagian atas leher lubang buang pipa cerobong terpasang dua bilah katup kupu-kupu (butterfly damper) yang berfungsi mencegah angin luar dan serangga masuk ke dapur. Kerak minyak sering menempel pada engsel katup ini sehingga bilah katup terkunci tertutup rapat dan udara tidak bisa keluar sama sekali."
      },
      {
        heading: "4. Kapan Harus Memanggil Teknisi Tekno Home?",
        body: "Jika Anda mendengar dengungan listrik tanpa putaran kipas, mencium bau sangit kabel terbakar, atau tombol kecepatan mati total, segera putus aliran listrik. Memaksa menyalakan motor yang macet berisiko membakar lilitan tembaga stator motor. Teknisi Tekno Home Services siap datang membawa sparepart motor, kapasitor, dan bearing original untuk perbaikan langsung di dapur Anda."
      }
    ],
    faq: [
      {
        q: "Apakah motor cooker hood yang macet selalu harus diganti baru?",
        a: "Tidak selalu. Lebih dari 80% kasus motor macet dapat diperbaiki melalui servis deep cleaning pelarutan kerak oli, penggantian kapasitor, dan pelumasan bearing ulang tanpa perlu ganti motor utuh."
      }
    ]
  },
  {
    slug: "pentingnya-servis-rutin-cooker-hood-untuk-restoran-dan-dapur-komersial",
    title: "Pentingnya Servis Rutin Cooker Hood untuk Restoran dan Dapur Komersial",
    category: "Komersial / Bisnis",
    readTime: "5 menit baca",
    icon: "fi fi-rr-restaurant",
    image: "/img1 (25).webp",
    excerpt: "Mengapa exhaust hood restoran, cafe, dan katering wajib menjalani pembersihan rutin demi kontinuitas operasional, kenyamanan koki, dan standar pencegahan kebakaran.",
    summaryBullets: [
      "Dapur restoran menghasilkan volume uap lemak masakan 20x lebih banyak dibanding dapur rumahan.",
      "Penumpukan minyak pada cerobong exhaust komersial adalah bahaya kebakaran tingkat tinggi.",
      "Suhu area dapur resto menjadi sangat panas dan pengap jika daya hisap blower sirocco menurun.",
      "Kepatuhan audit standar kebersihan dan sanitasi tempat usaha kuliner (HACCP).",
      "Tekno Home menyediakan program servis berkala terjadwal di luar jam buka restoran."
    ],
    contentSections: [
      {
        heading: "1. Beban Ekstrem Exhaust Dapur Komersial",
        body: "Restoran cepat saji, rumah makan padang, katering, cafe steakhouse, dan Chinese food wok station mengoperasikan kompor bertekanan tinggi (kwali range) selama belasan jam sehari. Ribuan meter kubik uap minyak nabati dan hewani mengalir melalui canopy hood, baffle filter stainless, dan saluran pipa ducting panjang menuju rooftop blower."
      },
      {
        heading: "2. Pencegahan Bahaya Kebakaran Fatal (Duct Fire)",
        body: "Minyak yang mengendap di dalam cerobong pipa ducting komersial adalah bom waktu. Api wajan yang menyala besar saat menumis (wok flare-up) dengan mudah menyambar kisi-kisi filter baffle dan menjalar ke dalam saluran cerobong. Api cerobong sangat sulit dipadamkan dari luar dan dapat menghanguskan seluruh bangunan ruko atau gedung resto dalam hitungan menit.",
        tip: "Standar keselamatan internasional mewajibkan pembersihan exhaust ducting komersial secara rutin setiap 3 sampai 6 bulan."
      },
      {
        heading: "3. Produktivitas Koki & Kenyamanan Lingkungan Dapur",
        body: "Dapur resto yang panas, pengap, dan berasap membuat koki dan staf dapur cepat dehidrasi, lelah, dan kehilangan konsentrasi. Penurunan daya hisap blower sentrifugal (sirocco blower) membuat asap menyebar ke area ruang makan tamu (dining room), menimbulkan bau menyengat yang merusak pengalaman bersantap konsumen."
      },
      {
        heading: "4. Kepatuhan Standar Kebersihan & Inspeksi Sanitasi",
        body: "Tetesan minyak dari bibir canopy hood komersial yang jatuh ke area meja persiapan makanan (food preparation table) merupakan pelanggaran sanitasi pangan yang sangat berat. Servis berkala membersihkan saluran talang penampung minyak (grease trough) sehingga dapur Anda selalu lolos inspeksi kebersihan dengan predikat terbaik."
      },
      {
        heading: "Layanan Fleksibel Khusus Usaha Kuliner Tekno Home",
        body: "Kami mengerti bahwa jam operasional restoran Anda sangat berharga. Teknisi Tekno Home Services siap menjadwalkan servis pembersihan dan perbaikan exhaust hood pada malam hari setelah restoran tutup atau pagi hari sebelum operasional dimulai, lengkap dengan nota resmi dan garansi performa."
      }
    ],
    faq: [
      {
        q: "Jenis exhaust hood komersial apa saja yang dapat ditangani Tekno Home?",
        a: "Kami melayani canopy hood stainless steel, exhaust fan sirocco blower, centrifugal roof exhaust fan, ducting galvanis/BJLS, electrostatic precipitator (ESP), hingga fresh air supply fan."
      }
    ]
  },
  {
    slug: "hemat-pengeluaran-kapan-waktu-tepat-memanggil-service-cooker-hood-panggilan",
    title: "Hemat Pengeluaran: Kapan Waktu yang Tepat Memanggil Jasa Service Cooker Hood Panggilan?",
    category: "Tips Finansial",
    readTime: "4 menit baca",
    icon: "fi fi-rr-wallet",
    image: "/img1 (26).webp",
    excerpt: "Analisa cerdas biaya servis tepat waktu vs menunda perbaikan. Ketahui saat yang tepat memanggil teknisi panggilan agar terhindar dari pengeluaran beli unit baru jutaan rupiah.",
    summaryBullets: [
      "Biaya servis dan pembersihan berkala hanya berkisar 10-15% dari harga membeli cooker hood baru.",
      "Menunda servis motor yang macet sering kali membuat kumparan terbakar total dan harus diganti utuh.",
      "Uap minyak yang tidak terhisap merusak kitchen set senilai puluhan juta rupiah secara perlahan.",
      "Servis panggilan langsung di rumah bebas repot bongkar kabinet lemari dapur.",
      "Garansi resmi 30-90 hari Tekno Home melindungi pengeluaran finansial keluarga Anda."
    ],
    contentSections: [
      {
        heading: "1. Servis Tepat Waktu vs Beli Cooker Hood Baru",
        body: "Cooker hood model slim, chimney, atau island modern bermerk ternama (seperti Modena, Fotile, Electrolux, Franke, atau Bosch) memiliki harga beli baru berkisar antara Rp 2.500.000 hingga lebih dari Rp 15.000.000. Mayoritas kerusakan yang terjadi di lapangan—seperti putaran motor lemah, kapasitor drop, saklar macet, atau filter jenuh—dapat diperbaiki dengan biaya servis yang sangat terjangkau untuk mengembalikan daya hisap kencang maksimal seperti baru keluar dari toko.",
        tip: "Servis tepat waktu menyelamatkan anggaran belanja rumah tangga Anda hingga jutaan rupiah."
      },
      {
        heading: "2. Melindungi Investasi Kitchen Set Puluhan Juta Rupiah",
        body: "Biaya pembuatan kitchen set custom berbahan multiplek lapis HPL atau cat duco mencapai puluhan hingga ratusan juta rupiah. Jika cooker hood Anda mati atau daya hisapnya loyo selama berbulan-bulan, uap panas minyak akan meresap ke dalam pori-pori kayu kabinet, menyebabkan jamur, bau tengik membandel, dan lem HPL terkelupas. Memperbaiki cooker hood tepat waktu pada hakikatnya adalah melindungi perabotan dapur utama Anda."
      },
      {
        heading: "3. Kapan Batas Waktu Wajib Menghubungi Teknisi?",
        body: "Segera panggil teknisi panggilan Tekno Home ketika Anda menemukan tanda-tanda berikut:",
        list: [
          "Tisu dapur tidak lagi mampu menempel pada filter saat kecepatan tertinggi dinyalakan.",
          "Suara dengungan motor terdengar kasar dan getaran mulai terasa pada kabinet dapur.",
          "Sudah lebih dari 6 bulan cooker hood tidak pernah dilakukan pembersihan mendalam (deep cleaning).",
          "Tampak lelehan minyak hitam pekat di sela-sela saklar tombol atau kap lampu.",
          "Asap masakan mulai mengepul keluar dari area dapur menuju ruang keluarga."
        ]
      },
      {
        heading: "4. Kepraktisan Layanan Home Service Teknisi Panggilan",
        body: "Membawa cooker hood ke bengkel servis sangat merepotkan: Anda harus memanjat tangga, melepas baut pemasangan di dalam kabinet kitchen set sempit, dan berisiko membuat panel kaca atau body stainless tergores. Teknisi Tekno Home Services hadir langsung di dapur Anda:",
        list: [
          "Teknisi datang membawa perkakas lengkap, cairan pelarut kerak minyak food-grade, dan suku cadang original.",
          "Seluruh area kompor dan meja dapur dilapisi pelindung agar tetap bersih dan tidak terciprat noda.",
          "Pengecekan langsung diuji bersama Anda menggunakan asap masakan nyata.",
          "Transparansi rincian biaya pengerjaan disampaikan di awal sebelum teknisi mulai bekerja."
        ]
      },
      {
        heading: "5. Jaminan Garansi Resmi: Anti Boncos Perbaikan Ulang",
        body: "Tekno Home Services memberikan garansi tertulis resmi 30 hingga 90 hari untuk jasa servis dan suku cadang yang diganti. Jika kendala serupa timbul kembali dalam masa garansi, teknisi kami siap datang kembali tanpa biaya tambahan demi kenyamanan dan kepuasan Anda."
      }
    ],
    faq: [
      {
        q: "Bagaimana cara memesan jadwal servis cooker hood panggilan?",
        a: "Sangat praktis! Cukup klik tombol WhatsApp di website ini, sampaikan merk cooker hood dan gejala kerusakannya, dan admin kami akan langsung mengonfirmasi jadwal teknisi ke lokasi Anda."
      },
      {
        q: "Apakah teknisi melayani panggilan servis di hari libur atau akhir pekan?",
        a: "Ya! Teknisi Tekno Home Services melayani panggilan setiap hari termasuk hari Sabtu, Minggu, dan hari libur nasional."
      }
    ]
  }
];

export function getCookerhoodArticleBySlug(slug: string): CookerhoodArticle | undefined {
  return cookerhoodArticles.find((a) => a.slug === slug);
}
