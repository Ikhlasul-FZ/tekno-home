export interface ArticleSection {
  heading: string;
  body: string;
  list?: string[];
  tip?: string;
}

export interface StoveArticle {
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

export const stoveArticles: StoveArticle[] = [
  {
    slug: "5-tanda-kompor-gas-harus-segera-diservis",
    title: "Panduan Praktis: 5 Tanda Kompor Gas Rumah Anda Harus Segera Diservis",
    category: "Panduan & Edukasi",
    readTime: "4 menit baca",
    icon: "fi fi-rr-flame",
    image: "/img4.webp",
    excerpt: "Kenali 5 tanda bahaya kompor gas mulai dari nyala api merah berjelaga, bau gas menyengat, hingga pemantik ngadat sebelum menimbulkan kerusakan fatal.",
    summaryBullets: [
      "Nyala api merah merusak wajan dan menandakan pembakaran tidak sempurna serta boros gas.",
      "Api mati saat knop dilepas merupakan indikasi kerusakan thermocouple sensor.",
      "Bau gas tajam saat kompor mati adalah sinyal bahaya kebocoran yang butuh penanganan segera.",
      "Suara letupan kecil (poofing) menandakan spuyer kotor atau penempatan burner miring.",
      "Knop kompor macet atau keras diputar akibat endapan minyak masakan yang mengering."
    ],
    contentSections: [
      {
        heading: "1. Nyala Api Merah atau Oranye dan Berjelaga",
        body: "Kompor gas yang sehat dan efisien wajib menghasilkan api biru jernih berbentuk kerucut merata. Jika api berubah warna menjadi merah atau oranye pekat, itu adalah tanda adanya penyumbatan pada saluran venturi atau spuyer (nozzle). Akibatnya, rasio campuran oksigen dan gas LPG menjadi tidak seimbang, menimbulkan jelaga hitam pekat pada dasar panci, serta memboroskan konsumsi gas hingga 30%.",
        list: [
          "Dasar wajan dan panci cepat menghitam pekat setelah memasak.",
          "Waktu mendidihkan air terasa jauh lebih lama dari biasanya.",
          "Bau gas sisa pembakaran terasa lebih menyengat di sekitar area dapur."
        ],
        tip: "Jangan biarkan kompor api merah menyala berlarut-larut karena jelaga dapat mengerak permanen dan merusak permukaan burner kuningan."
      },
      {
        heading: "2. Bau Gas Menyengat di Sekitar Kompor",
        body: "Gas LPG aslinya tidak berbau, namun produsen menambahkan zat etil merkaptan dengan aroma khas telur busuk agar kebocoran mudah terdeteksi. Jika Anda mencium aroma ini saat kompor dalam posisi mati atau knop belum diputar, segera waspada. Kebocoran bisa berasal dari seal karet tabung getas, klem selang kendor, atau kran (valve) kompor yang sudah aus.",
        list: [
          "Terdengar bunyi mendesis halus dari area belakang atau bawah kompor.",
          "Aroma gas tercium kuat terutama saat membuka pintu lemari kitchen set bawah kompor tanam."
        ]
      },
      {
        heading: "3. Api Padam Saat Knop Pemutar Dilepas",
        body: "Pada kompor gas modern (khususnya kompor tanam dan freestanding cooker), terdapat sistem pengaman gas bernama Thermocouple. Sensor ini mendeteksi panas api agar katup magnet valve tetap terbuka. Jika Anda harus menekan knop bermenit-menit dan api langsung mati begitu tangan diangkat, kemungkinan besar thermocouple kotor oleh sisa masakan atau katup magnetik sudah lemah.",
        list: [
          "Perlu menahan knop sangat lama agar api tidak mati.",
          "Api tiba-tiba padam sendiri di tengah proses memasak padahal tidak ada hembusan angin."
        ]
      },
      {
        heading: "4. Muncul Letupan Suara Keras Saat Kompor Dinyalakan",
        body: "Pernahkah Anda mendengar suara 'poof' atau letupan mengejutkan saat memantik kompor? Kondisi ini terjadi karena gas sudah keluar dan menumpuk di sekitar burner sebelum percikan api pemantik berhasil menyambarnya. Ini sering disebabkan oleh lubang burner mampet atau posisi penutup burner (burner cap) yang miring.",
        tip: "Pastikan posisi burner cap terpasang rata pada dudukannya setelah dicuci. Jika letupan masih terjadi, segera hubungi teknisi."
      },
      {
        heading: "5. Knop Pemutar Kompor Keras, Macet, atau Dol",
        body: "Sisa tumpahan minyak goreng, santan, dan bumbu masakan sering kali merembes ke celah batang as knop. Lama-kelamaan cairan ini mengering menjadi kerak lengket yang mengunci kran pemutar. Memaksa memutar knop yang macet berisiko mematahkan batang as kran kuningan di dalamnya.",
        list: [
          "Knop terasa sangat berat saat ditekan ke dalam.",
          "Knop berputar longgar (dol) tanpa mengatur besar-kecilnya semburan api."
        ]
      }
    ],
    faq: [
      {
        q: "Berapa lama estimasi servis kompor dengan gejala api merah?",
        a: "Pembersihan total spuyer, kalibrasi venturi udara, dan uji api biru rata-rata memakan waktu 45 hingga 60 menit langsung di dapur Anda."
      },
      {
        q: "Apakah perbaikan ini bergaransi?",
        a: "Ya, Tekno Home Services memberikan garansi layanan 30 hingga 90 hari untuk jasa pengerjaan dan suku cadang yang diganti."
      }
    ]
  },
  {
    slug: "jangan-tunggu-meledak-bahaya-mengabaikan-bau-gas-dan-solusinya",
    title: "Jangan Tunggu Meledak! Ini Bahaya Mengabaikan Bau Gas dan Solusinya",
    category: "Keamanan (Safety)",
    readTime: "5 menit baca",
    icon: "fi fi-rr-shield-exclamation",
    image: "/img6.webp",
    excerpt: "Langkah darurat yang wajib dilakukan saat mencium bau gas di dapur, titik rawan kebocoran, dan tindakan pencegahan sebelum terjadi ledakan atau kebakaran.",
    summaryBullets: [
      "Zat etil merkaptan sengaja ditambahkan ke gas LPG sebagai sistem peringatan dini kebocoran.",
      "Dilarang keras menyalakan atau mematikan saklar listrik saat aroma gas tercium pekat.",
      "Segera buka seluruh jendela dan pintu dapur agar sirkulasi udara luar masuk secepat mungkin.",
      "Lepaskan regulator tabung gas dan letakkan tabung di ruangan berventilasi terbuka.",
      "Gunakan uji air sabun untuk memastikan titik kebocoran pada nepel, selang, atau kran kompor."
    ],
    contentSections: [
      {
        heading: "Mengapa Bau Gas Tidak Boleh Diabaikan Sedetikpun?",
        body: "Gas LPG memiliki sifat lebih berat daripada udara, sehingga ketika bocor, gas tidak akan langsung terbang ke atas melainkan mengendap di lantai atau di dalam lemari kitchen set. Sedikit saja percikan listrik mikro—misalnya dari menekan saklar lampu, mencolokkan blender, atau menyalakan exhaust—dapat memicu ledakan instan (flash fire).",
        tip: "Ingat prinsip: Di ruangan dengan konsentrasi gas tinggi, saklar listrik sama berbahayanya dengan korek api menyala."
      },
      {
        heading: "Prosedur Tanggap Darurat 5 Langkah Saat Mencium Bau Gas",
        body: "Keluarga di rumah wajib memahami SOP keselamatan berikut jika aroma gas tercium tajam di dapur:",
        list: [
          "Langkah 1: JANGAN menyalakan korek api, saklar lampu, atau peralatan elektronik apapun di dekat dapur.",
          "Langkah 2: Buka selebar mungkin seluruh jendela, pintu dapur, dan ventilasi udara luar.",
          "Langkah 3: Lepaskan regulator dari tabung gas secara hati-hati. Jika memungkinkan, bawa tabung ke area terbuka seperti halaman belakang.",
          "Langkah 4: Evakuasi anggota keluarga dan hewan peliharaan dari area dapur.",
          "Langkah 5: Jangan mencoba menyalakan kompor sebelum teknisi profesional memeriksa dan memastikan sistem bebas kebocoran."
        ]
      },
      {
        heading: "Titik Rawan Kebocoran Gas yang Sering Terlewatkan",
        body: "Berdasarkan pengalaman teknisi Tekno Home di lapangan, ada 4 titik utama yang paling sering mengalami kebocoran mikro:",
        list: [
          "Seal Karet Tabung LPG: Karet gelang hitam tabung yang getas, gepeng, atau terlipat.",
          "Klem Selang Gas: Pengunci selang di nepel regulator atau nepel kompor yang longgar atau berkarat.",
          "Selang Gas Fleksibel: Keretakan mikro akibat gigitan tikus, usia pakai selang di atas 2-3 tahun, atau tertekuk tajam.",
          "Kran Gas (Gas Valve Unit) di Dalam Kompor: O-ring karet internal kran kompor yang aus karena usia pemakaian."
        ]
      },
      {
        heading: "Standar Uji Kebocoran Presisi oleh Teknisi Tekno Home",
        body: "Setiap penanganan perbaikan kompor oleh teknisi kami selalu diakhiri dengan SOP Uji Kebocoran Berlapis. Kami menggunakan detektor kebocoran gas presisi serta larutan bubble leak test berstandar industri pada seluruh jalur pipa manifold, sambungan selang, dan katup kompor untuk menjamin 100% keamanan keluarga Anda.",
        tip: "Lakukan pengecekan mandiri menggunakan busa sabun cuci piring pada selang dan regulator minimal 1 bulan sekali."
      }
    ],
    faq: [
      {
        q: "Kapan selang gas fleksibel harus diganti baru?",
        a: "Standar SNI menyarankan penggantian selang gas setiap 2 hingga 3 tahun sekali, atau lebih cepat jika selang terasa keras, retak-retak, atau pernah tergores benda tajam."
      },
      {
        q: "Apakah teknisi Tekno Home membawa peralatan penggantian selang dan regulator SNI?",
        a: "Ya, teknisi kami selalu siap dengan suku cadang original berstandar SNI, seal safety valve, klem heavy duty, dan selang pelindung spiral logam anti-tikus."
      }
    ]
  },
  {
    slug: "kompor-induksi-vs-kompor-gas-mana-lebih-hemat-dan-mudah-perawatannya",
    title: "Kompor Induksi vs Kompor Gas: Mana yang Lebih Hemat dan Mudah Perawatannya?",
    category: "Komparasi Produk",
    readTime: "5 menit baca",
    icon: "fi fi-rr-scale",
    image: "/img5.webp",
    excerpt: "Perbandingan mendalam efisiensi energi, estimasi biaya bulanan, kecepatan memasak, dan kepraktisan perawatan antara kompor induksi vs kompor gas.",
    summaryBullets: [
      "Kompor induksi memiliki efisiensi transfer panas hingga 84-90%, dibanding kompor gas sekitar 40-50%.",
      "Kompor gas tetap lebih fleksibel untuk segala jenis wajan dan teknik memasak api besar (wok hei).",
      "Perawatan permukaan kompor induksi jauh lebih mudah karena permukaan kaca rata tanpa bongkar burner.",
      "Biaya operasional bulanan relatif seimbang tergantung intensitas memasak dan tarif listrik rumah tangga.",
      "Risiko kebocoran api dan gas sepenuhnya nihil pada kompor induksi, menjadikannya favorit apartemen modern."
    ],
    contentSections: [
      {
        heading: "1. Efisiensi Energi & Kecepatan Memasak",
        body: "Kompor induksi bekerja menggunakan medan elektromagnetik yang langsung memanaskan dasar panci, bukan memanaskan udara di sekitarnya. Hal ini menghasilkan efisiensi energi yang fantastis hingga 90%, di mana air 1 liter bisa mendidih dalam waktu separuh lebih cepat dibanding kompor gas konvensional yang kehilangan panas ke udara ruangan sekitar 50-60%."
      },
      {
        heading: "2. Simulasi Biaya Operasional Bulanan",
        body: "Banyak orang mengira kompor induksi akan membuat tagihan listrik melonjak tajam. Padahal secara matematis, karena waktu memasak yang jauh lebih singkat dan efisiensi tinggi, konsumsi daya rata-rata untuk memasak harian keluarga 4 orang berkisar antara 1,5 hingga 2,5 kWh per hari (sekitar Rp 75.000 - Rp 120.000/bulan). Angka ini sangat bersaing dengan penggunaan 1-2 tabung Bright Gas 12kg.",
        list: [
          "Kompor Gas LPG: Biaya tabung + resiko gas habis mendadak di tengah memasak.",
          "Kompor Induksi: Menggunakan daya listrik rumah (butuh daya minimal 1300 VA - 2200 VA agar tidak jepret)."
        ]
      },
      {
        heading: "3. Kemudahan Perawatan & Pembersihan",
        body: "Dari segi kepraktisan pembersihan harian, kompor induksi jelas unggul telak. Permukaannya berupa satu lembar kaca keramik datar (smooth glass) tanpa celah burner. Jika ada kuah sup tumpah, Anda cukup mengelapnya dengan kain lembab microfiber. Berbeda dengan kompor gas di mana Anda harus melepas tatakan panci besi cor (pan support), mengangkat burner cap kuningan, dan membersihkan kotoran yang jatuh ke mangkuk kompor.",
        tip: "Namun, kompor induksi memerlukan kehati-hatian ekstra agar kaca tidak tertimpa benda tumpul berat yang bisa meretakkan panel kaca kristalitnya."
      },
      {
        heading: "4. Kompatibilitas Alat Masak",
        body: "Kelemahan terbesar kompor induksi adalah keterbatasan jenis alat masak. Anda hanya bisa menggunakan panci dan wajan berbahan feromagnetik (stainless steel magnetik, besi cor / cast iron, atau enamel). Wajan aluminium murni, gerabah tanah liat, dan kaca borosilikat tidak dapat digunakan. Sementara kompor gas bebas menggunakan segala bentuk dan bahan wajan apapun."
      },
      {
        heading: "Kesimpulan & Rekomendasi Teknisi",
        body: "Pilihlah kompor induksi jika Anda tinggal di apartemen, mengutamakan keselamatan tanpa api, dan menyukai dapur yang selalu kinclong minimalis. Pilihlah kompor gas tanam atau freestanding jika Anda memiliki keluarga besar, hobi memasak hidangan tradisional yang butuh teknik api besar (wok style), atau daya listrik rumah terbatas."
      }
    ],
    faq: [
      {
        q: "Apakah Tekno Home juga melayani perbaikan kompor induksi?",
        a: "Tentu! Kami memiliki teknisi spesialis motherboard PCB kompor induksi, modul IGBT, kipas pendingin, sensor thermocouple E0/E1, dan penggantian panel kaca kompor induksi berbagai merk ternama."
      }
    ]
  },
  {
    slug: "tips-merawat-kompor-tanam-built-in-hob-awet-dan-tidak-berkerak",
    title: "Tips Merawat Kompor Tanam (Built-in Hob) agar Awet dan Tidak Mudah Berkerak",
    category: "Tips Perawatan",
    readTime: "4 menit baca",
    icon: "fi fi-rr-sparkles",
    image: "/img1.webp",
    excerpt: "Cara tepat membersihkan kaca tempered glass, merawat burner kuningan, dan mencegah kerak tumpahan masakan merusak komponen internal kompor tanam.",
    summaryBullets: [
      "Jangan pernah mengelap kaca kompor tanam saat masih panas demi mencegah thermal shock.",
      "Gunakan larutan pembersih lembut bebas asam kuat untuk melindungi coating burner kuningan.",
      "Rendam burner cap dalam larutan air hangat dan sabun cuci piring secara berkala sebulan sekali.",
      "Jaga jarum pemantik keramik dan sensor thermocouple agar selalu kering dan bebas kerak minyak.",
      "Periksa kondisi seal karet di sekeliling pinggiran kaca kompor tanam agar air cucian tidak merembes."
    ],
    contentSections: [
      {
        heading: "1. Hindari Mengelap Kaca Kompor Saat Kondisi Masih Panas",
        body: "Kebiasaan paling umum yang merusak kompor tanam tempered glass adalah langsung mengelapnya dengan lap basah sesaat setelah mematikan api. Perubahan suhu drastis secara tiba-tiba (thermal shock) dari panas tinggi ke dingin air lap dapat menciptakan retakan mikro tak terlihat, yang lama-kelamaan membuat kaca tempered pecah mendadak.",
        tip: "Tunggu minimal 15-20 menit hingga permukaan kaca kembali ke suhu ruangan sebelum mulai membersihkannya."
      },
      {
        heading: "2. Resep Pembersih Alami Anti Gores",
        body: "Jangan gunakan sabut kawat baja kasar (steel wool) atau bubuk pembersih abrasif pada kaca kompor tanam karena akan menimbulkan goresan permanen yang membuat tampilan kusam. Gunakan formula pembersih ramah kaca:",
        list: [
          "Campurkan 2 sendok makan baking soda dengan sedikit air hangat hingga berbentuk pasta kental.",
          "Oleskan pada area yang berkerak gosong dan diamkan selama 10-15 menit.",
          "Usap perlahan menggunakan spons lembut atau lap microfiber hingga kerak terangkat sempurna."
        ]
      },
      {
        heading: "3. Merawat Tungku Burner Kuningan dan Burner Cap",
        body: "Burner cap kompor tanam sering kali tersumbat oleh kuah masakan bersantan atau minyak yang gosong. Setiap bulan, angkat penutup burner dan rendam dalam air hangat bercampur sabun pembersih lemak. Gunakan jarum kecil atau kawat halus untuk membersihkan lubang-lubang semprotan gas (spuyer slot) agar nyala api tetap melingkar sempurna 360 derajat."
      },
      {
        heading: "4. Lindungi Jarum Busi Pemantik & Thermocouple",
        body: "Di samping tungku burner terdapat dua komponen berbentuk silinder kecil: jarum busi pemantik (putih keramik) dan batang sensor thermocouple (kuningan lancip). Pastikan kedua ujung sensor ini selalu bersih dari tetesan kuah yang membatu. Jika sensor thermocouple terbungkus kerak hitam, ia tidak akan bisa mendeteksi panas api sehingga kompor akan mati terus."
      },
      {
        heading: "5. Cek Karet Seal Perimeter Meja Granit",
        body: "Kompor tanam dipasang dengan cara dilubangi pada meja kitchen set granit atau marmer. Pastikan karet foam seal di sekeliling bingkai kompor masih menempel kedap. Hal ini mencegah rembesan air cucian piring mengalir ke bawah dan membasahi modul elektrik serta kabel pemantik di kolong meja dapur."
      }
    ],
    faq: [
      {
        q: "Berapa kali sebaiknya kompor tanam dibersihkan secara mendalam (deep cleaning)?",
        a: "Pembersihan ringan dilakukan setiap selesai memasak, sedangkan deep cleaning bongkar burner dan perendaman disarankan dilakukan setiap 1 hingga 2 bulan sekali."
      }
    ]
  },
  {
    slug: "sering-bikin-kesel-cara-mengatasi-pemantik-kompor-tidak-mau-menyala",
    title: "Sering Bikin Kesel? Ini Cara Mengatasi Pemantik Kompor yang Tidak Mau Menyala",
    category: "Troubleshooting",
    readTime: "4 menit baca",
    icon: "fi fi-rr-bolt",
    image: "/img3.webp",
    excerpt: "Panduan diagnosa mandiri pemantik kompor gas macet: mulai dari baterai habis, jarum busi kotor, elektroda basah, hingga kerusakan modul pulse igniter.",
    summaryBullets: [
      "Baterai pemantik yang sudah lemah adalah penyebab nomor 1 pemantik elektrik berhenti memercik.",
      "Busi pemantik keramik yang basah setelah kompor dibersihkan harus dikeringkan total.",
      "Kerak arang di ujung jarum busi menghambat loncatan bunga api elektrik.",
      "Jarak celah ideal antara ujung jarum busi dan logam burner adalah 3 hingga 4 milimeter.",
      "Jika terdengar suara 'tik-tik' tapi api tidak menyambar, kemungkinan spuyer gas tersumbat."
    ],
    contentSections: [
      {
        heading: "1. Periksa dan Ganti Baterai Pemantik di Kolong Kompor",
        body: "Hampir 70% keluhan pemantik elektrik kompor tanam mati ternyata disebabkan oleh hal sederhana: baterai DC sudah habis voltase. Kompor tanam umumnya menggunakan 1 buah baterai tipe D (baterai besar) atau 2 buah baterai AA yang terletak pada kotak baterai di bawah kompor.",
        tip: "Jika saat menekan knop suara detakan 'tik-tik-tik' terdengar sangat lambat, lemah, atau hilang sama sekali, segera ganti dengan baterai alkaline baru berkualitas prima."
      },
      {
        heading: "2. Keringkan Jarum Busi Pemantik yang Lembab",
        body: "Apakah pemantik Anda mendadak mati persis setelah kompor dibersihkan atau terkena tumpahan rebusan air? Keramik pemantik yang basah menyebabkan tegangan tinggi bocor ke badan kompor sehingga tidak mampu menghasilkan loncatan bunga api di ujung jarum.",
        list: [
          "Gunakan tisu kering atau kain microfiber untuk menyeka seluruh batang keramik putih pemantik.",
          "Gunakan pengering rambut (hair dryer) selama 1-2 menit untuk memastikan celah di sekitar elektroda benar-benar kering.",
          "Coba tekan knop kembali setelah dipastikan kering sempurna."
        ]
      },
      {
        heading: "3. Bersihkan Kerak Karbon di Ujung Elektroda",
        body: "Loncatan api pemantik membutuhkan kontak logam yang bersih. Jika ujung jarum besi busi tertutup lapisan arang gosong hitam pekat, arus listrik tidak akan bisa memercik ke burner cap. Gosok ujung jarum busi perlahan menggunakan amplas halus nomor 400 atau sikat kawat kecil sampai kilau logamnya kembali terlihat."
      },
      {
        heading: "4. Koreksi Jarak Percikan Jarum Busi (Gap Alignment)",
        body: "Terkadang saat mencuci burner atau terkena benturan wajan berat, jarum busi pemantik sedikit membengkok. Jarak ideal antara ujung jarum elektroda dan bibir lubang burner cap adalah sekitar 3 hingga 4 mm. Jika jaraknya terlalu jauh, percikan tidak akan mampu melompat; jika terlalu dekat menempel, percikan tidak memiliki cukup ruang untuk menyambar gas."
      },
      {
        heading: "Kapan Harus Memanggil Teknisi Ahli?",
        body: "Jika baterai sudah baru, busi kering dan bersih, namun tetap tidak ada percikan api saat knop ditekan, kemungkinan terjadi kerusakan pada Microswitch di balik knop, kabel pemantik putus tergigit tikus, atau Modul Generator Pemantik (Pulse Igniter Box) telah korslet.",
        tip: "Teknisi Tekno Home Services siap datang membawa modul generator original multi-brand (Modena, Ariston, Electrolux, Rinnai, Tecnogas, dll.) untuk penanganan langsung di tempat."
      }
    ],
    faq: [
      {
        q: "Apakah aman menyalakan kompor gas tanam dengan korek api gas manual jika pemantik mati?",
        a: "Bisa untuk keadaan darurat sementara, namun berhati-hatilah jangan sampai gas terbuka terlalu lama sebelum didekatkan korek api agar tidak menyembur. Segera servis pemantiknya untuk kenyamanan dan keamanan standar keluarga."
      }
    ]
  },
  {
    slug: "pentingnya-servis-berkala-untuk-kompor-restoran-dan-usaha-kuliner",
    title: "Pentingnya Servis Berkala untuk Kompor Restoran dan Usaha Kuliner",
    category: "Komersial / Bisnis",
    readTime: "5 menit baca",
    icon: "fi fi-rr-restaurant",
    image: "/img7.webp",
    excerpt: "Mengapa kompor high-pressure, burner komersial, dan oven resto butuh pemeliharaan rutin demi kontinuitas operasional, efisiensi gas, dan keselamatan kerja.",
    summaryBullets: [
      "Kompor komersial bekerja 10-16 jam per hari dengan tekanan tinggi yang mempercepat keausan komponen.",
      "Api merah pada burner resto meningkatkan konsumsi gas LPG hingga 25-35% per bulan.",
      "Penumpukan lemak masakan di sekitar jalur pipa gas merupakan pemicu utama kebakaran dapur resto.",
      "Servis rutin mencegah kendala kompor ngadat mendadak saat jam sibuk (rush hour) makan siang/malam.",
      "Tekno Home menyediakan kontrak pemeliharaan berkala dengan respon cepat khusus pelaku usaha kuliner."
    ],
    contentSections: [
      {
        heading: "1. Beban Kerja Ekstrem Dapur Komersial",
        body: "Berbeda dengan kompor dapur residensial rumah tangga yang hanya dipakai 1-2 jam sehari, kompor restoran, catering, cafe, dan ruko kuliner beroperasi nonstop selama 10 hingga 16 jam setiap harinya. Suhu ekstrem, cipratan minyak terus-menerus, dan pemakaian wajan wok baja berat membuat burner, kran gas, dan selang high pressure mengalami degradasi jauh lebih cepat."
      },
      {
        heading: "2. Efisiensi Biaya Operasional & Hemat Gas LPG",
        body: "Bagi bisnis F&B, pengeluaran gas tabung 12kg atau 50kg adalah salah satu pos biaya operasional terbesar. Burner komersial yang tersumbat menghasilkan api merah berjelaga dengan kalori panas rendah. Koki terpaksa membuka kran gas lebih besar agar masakan matang, yang mengakibatkan pembengkakan biaya bahan bakar gas hingga 30% setiap bulannya.",
        tip: "Dengan kalibrasi spuyer dan deep cleaning burner secara rutin, nyala api kembali biru tajam dan proses memasak menjadi 2x lebih cepat serta hemat gas."
      },
      {
        heading: "3. Mencegah Kegagalan Alat di Jam Sibuk (Rush Hour)",
        body: "Mimpi buruk setiap pengelola restoran adalah ketika tungku utama mendadak mati atau kran gas bocor di tengah jam sibuk pesanan makan siang. Waktu pelayanan menjadi lambat, pelanggan komplain, dan reputasi bisnis terancam. Servis berkala mendeteksi komponen yang mulai aus sebelum kerusakan fatal terjadi saat operasional berlangsung."
      },
      {
        heading: "4. Kepatuhan Standar Keselamatan Kebakaran Dapur",
        body: "Kebakaran pada industri kuliner sebagian besar bermula dari kebocoran jalur gas manifold atau api yang menyambar endapan kerak minyak goreng lama pada body kompor. Program servis preventif meliputi pembersihan kerak lemak, pengetesan kekencangan regulator tekanan tinggi, dan penggantian seal pipa gas berstandar industri."
      },
      {
        heading: "Layanan Fleksibel Khusus Usaha Kuliner Tekno Home",
        body: "Kami memahami bahwa operasional dapur Anda tidak boleh terganggu. Teknisi Tekno Home Services dapat menjadwalkan kunjungan servis sebelum jam buka restoran (pagi hari) atau setelah jam tutup malam, lengkap dengan nota resmi perusahaan dan garansi performa."
      }
    ],
    faq: [
      {
        q: "Berapa frekuensi ideal servis kompor untuk restoran aktif?",
        a: "Untuk restoran dengan volume memasak harian tinggi, pemeliharaan berkala disarankan dilakukan setiap 2 hingga 3 bulan sekali."
      },
      {
        q: "Jenis kompor komersial apa saja yang dapat ditangani?",
        a: "Kami menangani kwali range, wok burner high pressure, stock pot stove, salamander, deep fryer gas, freestanding cooker 4-6 tungku, hingga convection oven komersial."
      }
    ]
  },
  {
    slug: "hemat-pengeluaran-kapan-waktu-tepat-memanggil-service-kompor-panggilan",
    title: "Hemat Pengeluaran: Kapan Waktu yang Tepat untuk Memanggil Jasa Service Kompor Panggilan?",
    category: "Tips Finansial",
    readTime: "4 menit baca",
    icon: "fi fi-rr-wallet",
    image: "/img8.webp",
    excerpt: "Menghitung efisiensi biaya servis tepat waktu vs menunda perbaikan. Kenali saat mana perbaikan kecil bisa menyelamatkan Anda dari pengeluaran beli unit baru.",
    summaryBullets: [
      "Menunda servis kerusakan kecil dapat merembet dan merusak modul komponen utama kompor.",
      "Biaya servis dan ganti sparepart hanya berkisar 10-20% dibanding harga membeli kompor tanam baru.",
      "Kebocoran mikro yang dibiarkan membuang saldo gas LPG ratusan ribu rupiah tanpa disadari.",
      "Servis panggilan langsung di rumah menghemat biaya transport dan menghindari risiko kompor lecet/pecah.",
      "Garansi resmi 30-90 hari memastikan investasi perbaikan Anda terlindungi tanpa keluar biaya ulang."
    ],
    contentSections: [
      {
        heading: "1. Servis Dini vs Beli Baru: Analisa Perbandingan Biaya",
        body: "Kompor gas tanam (built-in hob) atau freestanding cooker berkualitas premium (Modena, Ariston, Electrolux, Tecnogas) memiliki harga beli baru berkisar antara Rp 3.500.000 hingga lebih dari Rp 18.000.000. Mayoritas kerusakan seperti api merah, pemantik macet, atau thermocouple mati sebenarnya hanya membutuhkan biaya perbaikan terjangkau (sekitar 5-15% dari harga unit baru) untuk membuat kompor kembali prima seperti baru keluar dari toko."
      },
      {
        heading: "2. Menghindari Kerusakan Berantai (Domino Effect)",
        body: "Banyak pemilik rumah menunda memanggil teknisi saat satu tungku mati karena masih merasa 'bisa pakai tungku sebelah'. Padahal, sumbatan spuyer gas yang dibiarkan dapat menaikkan tekanan balik pada katup manifold pipa internal, yang berisiko merusak seal kran utama dan memicu kebocoran gas ke ruang mesin kompor.",
        tip: "Perbaiki segera saat gejala pertama muncul agar biaya perbaikan tetap minim dan tidak merembet ke modul lainnya."
      },
      {
        heading: "3. Menghentikan Pemborosan Saldo Gas Diam-Diam",
        body: "Api kompor yang berwarna merah dan pembakaran yang tidak sempurna membutuhkan waktu mendidihkan masakan 30% lebih lama. Jika dalam sebulan Anda biasanya menghabiskan 2 tabung gas, inefisiensi ini menambah pengeluaran 1-2 tabung ekstra per bulan yang jika diakumulasikan dalam setahun bisa mencapai jutaan rupiah."
      },
      {
        heading: "4. Keuntungan Memilih Jasa Servis Kompor Panggilan ke Rumah",
        body: "Membawa kompor tanam atau oven freestanding ke bengkel servis konvensional sangat merepotkan: Anda harus membongkar meja dapur, menyewa mobil pikap, dan berisiko membuat kaca kompor retak terbentur selama perjalanan. Layanan teknisi panggilan Tekno Home Services memberikan solusi praktis:",
        list: [
          "Teknisi datang langsung ke dapur Anda membawa perkakas lengkap dan suku cadang original.",
          "Anda dapat memantau langsung seluruh proses pembongkaran, pembersihan, dan kalibrasi.",
          "Kompor langsung dites fungsi bersama Anda menggunakan instalasi tabung gas rumah Anda yang sebenarnya.",
          "Tanpa biaya angkut ekstra dan bebas repot."
        ]
      },
      {
        heading: "5. Jaminan Garansi Resmi: Anti Boncos Perbaikan Ulang",
        body: "Jangan tergoda oleh tukang servis keliling abal-abal yang tidak memberikan nota atau nomor kontak pertanggungjawaban. Tekno Home Services memberikan garansi tertulis 30 hingga 90 hari untuk suku cadang dan jasa perbaikan teknisi. Jika kendala serupa timbul kembali dalam masa garansi, teknisi kami siap datang kembali tanpa biaya tambahan."
      }
    ],
    faq: [
      {
        q: "Bagaimana cara memesan jadwal teknisi panggilan ke rumah?",
        a: "Sangat mudah, cukup klik tombol WhatsApp pada situs ini, kirimkan foto/merk kompor dan kendala yang dialami, serta tentukan waktu kunjungan yang Anda inginkan."
      },
      {
        q: "Apakah biaya kunjungan dan pengecekan diinfokan di awal?",
        a: "Ya! Admin dan teknisi kami selalu menerapkan transparansi biaya estimasi sebelum teknisi mulai melakukan pengerjaan perbaikan."
      }
    ]
  }
];

export function getStoveArticleBySlug(slug: string): StoveArticle | undefined {
  return stoveArticles.find((a) => a.slug === slug);
}
