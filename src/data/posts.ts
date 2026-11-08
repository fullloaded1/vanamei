export interface PostContent {
  title: string;
  summary: string;
  content: string;
}

export interface Post {
  id: string;
  slug: string;
  thumbnail: string;
  publishedDate: string;
  category: string;
  readTime: string;
  views: string;
  comments: string;
  content: {
    en: PostContent;
    id: PostContent;
    ar: PostContent;
  };
}

export const posts: Post[] = [
  {
    id: '1',
    slug: 'karbon-aktif-ramah-lingkungan-tempurung-kelapa',
    thumbnail: '/images/products/granular-activated-carbon.jpg',
    publishedDate: '15 Okt 2026',
    category: 'SUSTAINABILITY',
    readTime: '6 min read',
    views: '3.4k views',
    comments: '18 comments',
    content: {
      en: {
        title: 'Eco-Friendly Activated Carbon: Turning Coconut Shell Waste Into High-Value Export',
        summary: 'How agricultural coconut waste is transformed through high-temperature steam activation into sustainable, high-hardness activated carbon for international industrial filtration.',
        content: `As industries worldwide face growing pressure to operate sustainably and meet ESG benchmarks, coconut shell-based activated carbon stands out as a prime example of agricultural circular economy. In Indonesia, the world's leading coconut producer, millions of tons of coconut shells were historically discarded or burned inefficiently. 

At CocoBlim, we channel this raw material into our thermal activation kilns. Through controlled steam activation at temperatures exceeding 900°C, the carbonaceous matrix develops an extraordinarily dense microporous network with surface areas exceeding 1,000 m²/g. Unlike coal-based activated carbons which carry heavy mining footprints and fossil emissions, coconut shell carbon is 100% renewable, carbon-neutral, and delivers superior mechanical hardness (≥ 98%). This makes it the filtration media of choice for global drinking water authorities, food manufacturers, and air purification systems.`
      },
      id: {
        title: 'Karbon Aktif Ramah Lingkungan: Mengubah Limbah Tempurung Kelapa Jadi Produk Bernilai Tinggi',
        summary: 'Bagaimana limbah pertanian tempurung kelapa diubah melalui aktivasi uap suhu tinggi menjadi karbon aktif berkekuatan mekanik tinggi untuk filtrasi industri global.',
        content: `Di tengah tuntutan dunia industri untuk semakin ramah lingkungan dan memenuhi standar ESG, karbon aktif berbahan dasar tempurung kelapa hadir sebagai contoh nyata bagaimana limbah pertanian dapat diubah menjadi komoditas bernilai ekonomi tinggi. Indonesia sebagai produsen kelapa terbesar di dunia menghasilkan jutaan ton tempurung setiap tahunnya yang sebelumnya kerap terbuang sia-sia.

Di CocoBlim, kami memanfaatkan bahan baku ini melalui proses karbonisasi dan aktivasi uap bersuhu di atas 900°C. Struktur mikro-pori yang dihasilkan memiliki luas permukaan melebihi 1.000 m²/gram dengan pori-pori halus (mikropori) yang sangat efektif menyerap molekul organik berukuran kecil. Dibandingkan karbon aktif berbasis batu bara (coal-based), karbon tempurung kelapa jauh lebih ramah lingkungan, terbarukan, dan memiliki tingkat kekerasan mekanik yang lebih tinggi sehingga tidak mudah tergerus menjadi debu saat digunakan dalam tabung filtrasi bertekanan tinggi.`
      },
      ar: {
        title: 'الكربون المنشط الصديق للبيئة: تحويل مخلفات قشور جوز الهند إلى منتج ذي قيمة عالية',
        summary: 'كيف يتم تحويل المخلفات الزراعية لقشور جوز الهند عبر التنشيط بالبخار إلى وسائط كربونية عالية الصلابة لتنقية المياه والهواء في الصناعات العالمية.',
        content: `مع تزايد اهتمام الصناعات العالمية بالاستدامة البيئية، يبرز الكربون المنشط المصنوع من قشور جوز الهند كنموذج رائد للاقتصاد الدائري. تتميز إندونيسيا بكونها أكبر منتج لجوز الهند في العالم، وتوفر قشور جوز الهند مادة خام مثالية لتصنيع كربون منشط ذي صلابة فائقة وبنية مسامية دقيقة تناسب تنقية مياه الشرب، معالجة الهواء، واستخلاص الذهب في المناجم.`
      }
    }
  },
  {
    id: '2',
    slug: 'karbon-aktif-dalam-ekstraksi-emas',
    thumbnail: '/images/products/industrial-grade-carbon.jpg',
    publishedDate: '18 Okt 2026',
    category: 'MINING & INDUSTRY',
    readTime: '8 min read',
    views: '4.2k views',
    comments: '24 comments',
    content: {
      en: {
        title: 'Activated Carbon in Gold Extraction: Why Mines Rely on This Media (CIP / CIL)',
        summary: 'Understanding the crucial role of platelet-hard coconut shell activated carbon in Carbon-in-Pulp and Carbon-in-Leach gold recovery circuits.',
        content: `Behind modern precious metal extraction lies an indispensable media that powers mining efficiency: high-hardness coconut shell activated carbon. Since the widespread adoption of Carbon-in-Pulp (CIP), Carbon-in-Leach (CIL), and Carbon-in-Column (CIC) gold recovery methods, mining operations across Australia, Africa, and the Americas have relied heavily on activated carbon's selective affinity for the gold-cyanide complex [Au(CN)2]-.

The primary requirement for gold recovery carbon is mechanical platelet hardness (Ball-pan hardness ≥ 99%). In intense slurry agitation tanks containing abrasive ore pulp, substandard carbon fractures and creates fine particles that escape through safety screens, carrying loaded gold with them into tailings. CocoBlim's gold recovery grade utilizes thick, mature Indonesian coconut shells to ensure near-zero attrition loss, rapid kinetics (K-value ≥ 28), and maximum gold loading capacity (R-value ≥ 55%).`
      },
      id: {
        title: 'Karbon Aktif dalam Ekstraksi Emas: Media Andalan Industri Pertambangan Modern (CIP/CIL)',
        summary: 'Memahami peran krusial karbon aktif tempurung kelapa berkekerasan tinggi dalam sirkuit pemulihan emas Carbon-in-Pulp dan Carbon-in-Leach.',
        content: `Di balik proses ekstraksi emas modern, ada satu material yang berperan sangat penting namun sering luput dari perhatian publik: karbon aktif tempurung kelapa berkekuatan tinggi. Sejak diperkenalkannya metode Carbon-in-Pulp (CIP) dan Carbon-in-Leach (CIL), industri pertambangan emas mengandalkan afinitas selektif karbon aktif untuk mengikat kompleks emas-sianida [Au(CN)2]- dari lumpur bijih emas.

Tantangan terbesar di tangki ekstraksi adalah abrasi gesekan slurry bijih batu yang keras. Jika karbon mudah pecah atau hancur menjadi serbuk halus, butiran karbon yang telah mengikat emas akan lolos dari saringan tangki dan terbuang ke limbah (tailing), menimbulkan kerugian finansial yang sangat besar. Oleh karena itu, CocoBlim memproduksi karbon aktif gold recovery dengan standar platelet hardness ≥ 99% dari tempurung kelapa tua Indonesia, menjamin laju adsorpsi emas cepat (nilai K tinggi) dan ketahanan aus optimal.`
      },
      ar: {
        title: 'الكربون المنشط في استخلاص الذهب: لماذا تعتمد المناجم على هذه الوسائط (CIP / CIL)',
        summary: 'الدور الحاسم للكربون المنشط من قشور جوز الهند في عمليات استخلاص الذهب والمعادن الثمينة بمقاومة فائقة للتآكل وسعة تحميل عالية.',
        content: `يعتبر الكربون المنشط عالي الصلابة الركيزة الأساسية في صناعة تعدين واستخلاص الذهب عبر تقنيات CIP و CIL. توفر منتجات كوكوبليم صلابة كروية تزيد عن 99% لتحمل الاحتكاك الشديد داخل خزانات الخامات دون تفتت، مما يضمن أعلى عائد لاستعادة الذهب المحمل.`
      }
    }
  },
  {
    id: '3',
    slug: 'granular-powder-atau-pellet-karbon-aktif',
    thumbnail: '/images/products/pellet-activated-carbon.jpg',
    publishedDate: '22 Okt 2026',
    category: 'TECHNICAL GUIDE',
    readTime: '7 min read',
    views: '2.9k views',
    comments: '12 comments',
    content: {
      en: {
        title: 'Granular, Powder, or Pellet? Choosing the Right Activated Carbon Form for Your Application',
        summary: 'A technical comparison between GAC, PAC, and Extruded Pellets: fluid dynamics, pressure drops, contact times, and industrial selection criteria.',
        content: `Activated carbon is not only classified by raw materials and iodine adsorption numbers, but also by its physical geometry. Choosing the wrong form can result in severe pressure drops, clogged systems, or slow purification speeds.

1. Granular Activated Carbon (GAC): Irregular granules (8x30, 12x40 mesh). Best for continuous flow fixed-bed liquid and gas filters where carbon regeneration or low fluid resistance is needed.
2. Powdered Activated Carbon (PAC): Ultra-fine particles (< 325 mesh). Maximizes contact surface for instantaneous batch adsorption. Ideal for water treatment plants during seasonal algae spikes and food decolorization (sugar, oils).
3. Pelletized / Extruded Carbon: Cylindrical extrusions (3mm, 4mm). Provides uniform void space and low pneumatic resistance, specifically designed for gas phase vapor recovery, emission scrubbers, and industrial HVAC.`
      },
      id: {
        title: 'Granular, Powder, atau Pellet? Memilih Bentuk Karbon Aktif Sesuai Kebutuhan Industri',
        summary: 'Panduan teknis memilih antara GAC, PAC, dan Pellet: karakteristik aliran fluida, hambatan tekanan (pressure drop), dan kriteria aplikasi industri.',
        content: `Karbon aktif tidak hanya dibedakan berdasarkan bahan baku dan nilai iodin, tetapi juga hadir dalam berbagai bentuk fisik yang dirancang untuk kondisi operasional berbeda:

1. Granular Activated Carbon (GAC): Bentuk butiran kasar berukuran 8x30 atau 12x40 mesh. Sangat cocok untuk filter kolom kontinu, pengolahan air minum, dan pemurnian udara dengan aliran stabil di mana media dapat diregenerasi.
2. Powdered Activated Carbon (PAC): Bentuk serbuk halus berukuran hingga 325 mesh. Memiliki luas permukaan kontak seketika yang sangat besar untuk proses batch, dekolorisasi sirup/minyak goreng, dan penanganan lonjakan polutan musiman di PDAM.
3. Pellet / Ekstrusi Silinder: Berbentuk batang silinder padat (3mm - 4mm). Memiliki susunan seragam di dalam tabung sehingga pressure drop udara sangat rendah, menjadikannya pilihan utama untuk pemurnian gas emisi cerobong, bio-gas desulfurization, dan recovery pelarut VOC.`
      },
      ar: {
        title: 'حبيبي، مسحوق أم أسطواني؟ كيف تختار شكل الكربون المنشط المناسب لصناعتك',
        summary: 'مقارنة فنية شاملة بين أنواع الكربون المنشط (GAC و PAC و Pellet) لمساعدتك في اختيار الشكل الهندسي الأمثل لنظام المعالجة الخاص بك.',
        content: `يختلف أداء الكربون المنشط باختلاف شكله الفيزيائي. الحبيبي (GAC) ممتاز للتدفق المستمر في معالجة المياه، والمسحوق (PAC) مثالي للإزالة السريعة للألوان في الصناعات الغذائية، بينما الأسطواني (Pellet) مصمم خصيصاً لأنظمة تنقية الغازات والهواء بمقاومة ضغط منخفضة.`
      }
    }
  },
  {
    id: '4',
    slug: 'panduan-memilih-iodine-karbon-aktif',
    thumbnail: '/images/products/water-treatment-carbon.jpg',
    publishedDate: '26 Okt 2026',
    category: 'QUALITY GUIDE',
    readTime: '6 min read',
    views: '3.1k views',
    comments: '16 comments',
    content: {
      en: {
        title: 'Understanding Iodine Numbers in Activated Carbon: From 900 to 1200 mg/g',
        summary: 'What Iodine Number measures, how it correlates with micropore surface area, and how to select the most cost-effective grade for your plant.',
        content: `The Iodine Number (mg/g) is the internationally recognized benchmark used to gauge activated carbon adsorption capacity and micropore volume (pores < 2 nm). 

- Iodine 900 mg/g: The economical workhorse for municipal wastewater, general odor removal, and secondary effluent polishing.
- Iodine 1000 mg/g: The industrial gold standard for potable water filtration, beverage production, and organic compound removal.
- Iodine 1100 - 1200 mg/g: Premium high-activity carbon offering maximum micropore saturation for pharmaceutical synthesis, gold cyanide recovery, and high-purity gas phase filtration.

At CocoBlim, every production batch is lab-tested via ASTM D4607 titration to guarantee that the shipped Iodine rating matches or exceeds client contract specifications.`
      },
      id: {
        title: 'Memahami Angka Iodin (Iodine Number) Karbon Aktif: Dari 900 hingga 1200 mg/g',
        summary: 'Apa arti angka iodin, bagaimana korelasinya dengan luas mikropori, dan cara memilih grade yang paling efisien secara biaya untuk pabrik Anda.',
        content: `Angka Iodin (Iodine Number dalam mg/g) adalah parameter standar internasional (ASTM D4607) yang mengukur kapasitas adsorpsi karbon aktif terhadap molekul-molekul kecil berukuran kurang dari 2 nanometer (mikropori).

- Iodine 900 mg/g: Pilihan paling ekonomis dan efisien untuk pengolahan air limbah industri (WWTP), filter bau umum, dan pemurnian air tahap awal.
- Iodine 1000 mg/g: Standar industri internasional untuk filtrasi air minum PDAM, industri makanan/minuman, dan penyerapan gas VOC.
- Iodine 1100 - 1200 mg/g: Tingkat aktivitas penyerapan tertinggi, dirancang untuk sirkuit ekstraksi emas tambang (CIP/CIL), pemurnian farmasi, dan katalisator industri kimia berteknologi tinggi.

Setiap lot pengiriman CocoBlim selalu disertai Certificate of Analysis (COA) untuk menjamin spesifikasi angka iodin tepat dan konsisten.`
      },
      ar: {
        title: 'فهم رقم اليود (Iodine Number) في الكربون المنشط: من 900 إلى 1200 ملغم/غم',
        summary: 'دليل لفهم مقياس رقم اليود وكيفية اختيار الدرجة الأنسب والأكثر جدوى اقتصادية لمنشأتك الصناعية.',
        content: `يمثل رقم اليود المقياس العالمي لمستوى نشاط الكربون المنشط وحجم مساماته الدقيقة. تقدم كوكوبليم درجات تبدأ من يود 900 للمياه العادمة وحتى يود 1200 للتطبيقات الدوائية واستخلاص الذهب، مع شهادات تحليل معملية لكل شحنة.`
      }
    }
  },
  {
    id: '5',
    slug: 'produsen-eksportir-karbon-aktif-indonesia-fob-priok',
    thumbnail: '/images/products/granular-activated-carbon.jpg',
    publishedDate: '28 Okt 2026',
    category: 'EXPORT & GLOBAL TRADE',
    readTime: '9 min read',
    views: '5.1k views',
    comments: '31 comments',
    content: {
      en: {
        title: 'Indonesian Coconut Shell Activated Carbon Manufacturer: Global Export & FOB Tanjung Priok Port Guide',
        summary: 'Why international B2B buyers source coconut shell activated carbon directly from Indonesian manufacturers. Logistics, steam activation standards, FOB port procedures, and quality compliance.',
        content: `Indonesia is universally recognized as the epicenter of premium coconut shell activated carbon production. Blessed with an equatorial climate and nutrient-rich volcanic soil, Indonesian coconuts develop exceptionally dense, thick-walled endocarps (shells). When activated using high-temperature steam kilns (> 900°C), this biological feedstock produces a filtration media with unrivaled microporosity, low ash content (< 3%), and mechanical hardness exceeding 98%.

### Why Global Importers Choose Indonesian Coconut Carbon:
1. **Superior Micropore Matrix**: Coconut shell has a higher concentration of micropores (< 2 nm) compared to coal or wood, making it optimal for capturing small organic molecules, trihalomethanes (THMs), chlorine, and VOCs.
2. **Strategic Export Hub via Tanjung Priok**: Shipped directly from Jakarta's premier international port (Port of Tanjung Priok), providing regular direct vessel departures to major trade hubs in the Middle East (Jebel Ali, Dammam), North America (Long Beach, Houston), and Europe (Rotterdam, Hamburg).
3. **Rigorous Quality Control**: CocoBlim's manufacturing facility in Tanjungsari, Bogor Regency implements strict ASTM standards (ASTM D4607 for Iodine, ASTM D3802 for Ball-Pan Hardness, ASTM D2867 for Moisture).

### Key Export Specifications Summary:
- **Product Forms**: Granular (GAC 8x30, 12x40 mesh), Powdered (PAC 200, 325 mesh), Extruded Pellet (3mm, 4mm).
- **Iodine Numbers**: 900, 1000, 1100, 1200 mg/g.
- **Incoterms**: FOB Indonesian Port (Tanjung Priok), CIF, CFR upon request.
- **Packaging**: 25 kg multi-wall PP woven bags with PE inner liner or 500-700 kg jumbo super-sacks with palletization and shrink-wrapping.`
      },
      id: {
        title: 'Produsen & Eksportir Karbon Aktif Indonesia: Panduan Ekspor Global & FOB Pelabuhan Tanjung Priok',
        summary: 'Mengapa pembeli industri internasional memilih langsung produsen karbon aktif tempurung kelapa Indonesia. Standar aktivasi uap, logistik FOB Tanjung Priok, dan kepatuhan mutu.',
        content: `Indonesia diakui secara global sebagai pusat produksi karbon aktif berbahan dasar tempurung kelapa terbaik di dunia. Iklim tropis kepulauan nusantara menghasilkan kelapa dengan tempurung yang tebal, padat, dan kaya akan struktur lignin alami. Ketika diproses melalui tungku aktivasi uap bersuhu di atas 900°C, bahan baku ini menghasilkan pori-pori mikro yang luar biasa padat dengan kadar abu sangat rendah (< 3%) dan kekuatan fisik mencapai lebih dari 98%.

### Keunggulan Karbon Aktif Tempurung Kelapa Asal Indonesia:
1. **Dominasi Mikropori Alami**: Dibandingkan karbon batu bara atau kayu, tempurung kelapa memiliki konsentrasi mikropori (< 2 nm) tertinggi, sangat efektif menyerap klorin, bau, senyawa organik volatil (VOC), pestisida, dan logam berat terlarut.
2. **Akses Logistik Strategis Pelabuhan Tanjung Priok**: Fasilitas pabrik CocoBlim di Tanjungsari, Kabupaten Bogor memiliki akses langsung ke jalur tol logistik menuju Pelabuhan Internasional Tanjung Priok Jakarta, memastikan jadwal kapal kontainer teratur ke Timur Tengah, Amerika Utara, Eropa, dan Asia Pasifik.
3. **Jaminan Standar ASTM & COA Resmi**: Setiap batch produksi diperiksa secara ketat mencakup uji angka iodin (ASTM D4607), kekerasan mekanis (ASTM D3802), dan kadar air (ASTM D2867).

### Spesifikasi Ekspor CocoBlim:
- **Bentuk Produk**: Granular (GAC 8x30, 12x40 mesh), Serbuk (PAC 200, 325 mesh), Pelet Silinder (3mm, 4mm).
- **Angka Iodin**: 900, 1000, 1100, 1200 mg/g.
- **Incoterms**: FOB Pelabuhan Indonesia (Tanjung Priok), CIF/CFR sesuai kesepakatan.
- **Kemasan**: Karung PP 25 kg dengan lapisan dalam PE tahan lembap, atau Jumbo Bag 500 - 700 kg bersertifikat muat kontainer.`
      },
      ar: {
        title: 'المصنع والمصدر الإندونيسي للكربون المنشط: دليل التصدير العالمي وميناء تانجونغ بريوك',
        summary: 'لماذا تختار الشركات العالمية الكربون المنشط من قشور جوز الهند الإندونيسي مباشرة من المصنع. معايير الجودة، الشحن البحري، والمواصفات الفنية.',
        content: `تعد إندونيسيا المصدر العالمي الأول للكربون المنشط من قشور جوز الهند البكر. توفر مصانع كوكوبليم في بوجور حلول ترشيح متكاملة بمعايير ASTM وشحن سريع عبر ميناء تانجونغ بريوك في جاكرتا لجميع موانئ الشرق الأوسط والخليج العربي.`
      }
    }
  },
  {
    id: '6',
    slug: 'pabrik-karbon-aktif-bogor-pdam-industri-wwtp',
    thumbnail: '/images/factory/Screenshot_20261021_211035_Maps.jpg',
    publishedDate: '29 Okt 2026',
    category: 'LOCAL INDUSTRY & GEO',
    readTime: '8 min read',
    views: '3.8k views',
    comments: '19 comments',
    content: {
      en: {
        title: 'Activated Carbon Factory in Bogor, West Java: Reliable Supplier for Water Utilities (PDAM) & Industrial Wastewater (WWTP)',
        summary: 'Direct factory supply of high-grade activated carbon from Tanjungsari, Bogor Regency. Supporting municipal clean water plants, industrial textile wastewater, and chemical filtration across West Java & Jabodetabek.',
        content: `Clean water availability and industrial wastewater compliance are critical priorities for municipalities and industrial estates across Indonesia. As a dedicated activated carbon manufacturer situated in Tanjungsari, Bogor Regency (Postal Code 16840), CocoBlim serves as a dependable direct-factory supply partner for municipal drinking water utilities (PDAM) and industrial wastewater treatment plants (WWTP / IPAL).

### Key Applications in Municipal & Industrial Treatment:
- **PDAM Potable Water Processing**: Eliminating unpleasant taste, seasonal algae odors, color, and trace agricultural chemicals using Granular Activated Carbon (GAC 8x30 or 12x40 mesh with Iodine ≥ 1000 mg/g).
- **Industrial WWTP / Effluent Polishing**: Removing Chemical Oxygen Demand (COD), Biological Oxygen Demand (BOD), and heavy metal ions from textile, paper, and pharmaceutical effluents using fast-acting Powdered Activated Carbon (PAC 325 mesh).
- **Off-Gas and Biogas Desulfurization**: Pelletized activated carbon (4mm extruded) for capturing hydrogen sulfide (H2S) and VOC emissions in factories.

### Factory Advantage:
- Direct pickup and rapid dispatch from Tanjungsari, Bogor to industrial zones in Cikarang, Karawang, Cibinong, Tangerang, and surrounding West Java areas.
- Certified Certificate of Analysis (COA) provided with every truckload.
- Free technical consultation on filter bed depth, backwashing cycles, and adsorption longevity.`
      },
      id: {
        title: 'Pabrik Karbon Aktif di Bogor: Suplai Langsung untuk PDAM, IPAL Industri & Pengolahan Air Jabodetabek',
        summary: 'Suplai karbon aktif langsung dari pabrik Tanjungsari, Kabupaten Bogor. Mendukung kebutuhan pengolahan air bersih PDAM, pengolahan air limbah industri (IPAL / WWTP), dan manufaktur Jawa Barat.',
        content: `Kebutuhan air bersih dan kepatuhan baku mutu lingkungan limbah cair (BMLC) kini menjadi prioritas utama bagi pengelola kawasan industri dan instalasi pengolahan air minum daerah (PDAM). Hadir dengan fasilitas produksi mandiri di Tanjungsari, Kabupaten Bogor, Jawa Barat 16840, CocoBlim Activated Carbon menjadi mitra suplai langsung pabrik yang terpercaya untuk berbagai industri di wilayah Jabodetabek, Banten, dan Jawa Barat.

### Solusi Karbon Aktif untuk Pengolahan Air Bersih & Limbah:
- **Instalasi Pengolahan Air Minum (PDAM)**: Mengatasi masalah bau tanah, bau klorin, warna kekuningan, serta senyawa humus menggunakan Karbon Aktif Granular (GAC 8x30 atau 12x40 mesh) dengan angka iodin 1000 - 1100 mg/g.
- **IPAL Industri Tekstil, Farmasi & Makanan (WWTP)**: Menurunkan parameter COD (Chemical Oxygen Demand) dan BOD secara cepat, menyerap sisa zat pewarna, serta mengikat logam berat menggunakan Karbon Aktif Serbuk (PAC 200 / 325 mesh).
- **Pengendalian Bau & Emisi Gas Buang**: Menggunakan Karbon Aktif Pelet (Pelletized Extruded 4mm) untuk filter scrubber cerobong industri dan penyerapan gas H2S biogas.

### Keuntungan Membeli Langsung dari Pabrik Bogor:
1. **Harga Tangan Pertama**: Mengurangi rantai perantara distributor, memberikan margin efisiensi anggaran bagi instansi dan pabrik.
2. **Ketersediaan Stok & Pengiriman Cepat**: Lokasi pabrik strategis di Tanjungsari, Bogor memungkinkan pengiriman armada truk langsung ke Cikarang, Karawang, Pulogadung, Cibinong, Cilegon, maupun Sukabumi dalam tempo singkat.
3. **Dukungan Sampel Gratis & Uji Laboratorium**: Kami menyediakan sampel gratis 500 gram bagi tim QC dan lab pabrik Anda sebelum penerbitan Purchase Order (PO).`
      },
      ar: {
        title: 'مصنع الكربون المنشط في بوجور: التوريد المباشر لمحطات المياه ومعالجة مياه الصرف الصناعي',
        summary: 'توريد مباشر من المصنع في تانجونغساري، بوجور لمشاريع تنقية مياه الشرب ومحطات المعالجة الصناعية بكفاءة امتزاز عالية.',
        content: `يوفر مصنع كوكوبليم في بوجور حلول الكربون المنشط المباشرة لمحطات معالجة المياه البلدية والصناعية، مع فحص مخبري شامل وتوصيل مباشر لكبرى المنشآت الصناعية.`
      }
    }
  },
  {
    id: '7',
    slug: 'panduan-harga-fob-karbon-aktif-indonesia-spesifikasi',
    thumbnail: '/images/products/food-grade-carbon.jpg',
    publishedDate: '30 Okt 2026',
    category: 'BUYER GUIDE & PRICING',
    readTime: '7 min read',
    views: '4.7k views',
    comments: '28 comments',
    content: {
      en: {
        title: 'Indonesian Activated Carbon FOB Pricing Guide: Specifications, Iodine Tiers, and Container MOQ',
        summary: 'A transparent breakdown of export FOB price determinants for coconut shell activated carbon in 2026. From raw material costs and iodine levels to container stuffing and export documentation.',
        content: `For procurement managers, water plant engineers, and international traders, calculating the landed cost of activated carbon requires understanding how manufacturers determine FOB pricing per metric ton (MT). 

### What Influences Activated Carbon Pricing:
1. **Iodine Adsorption Number (mg/g)**: Higher iodine numbers require longer residence times and higher energy consumption in steam activation kilns. An Iodine 1200 mg/g product carries a premium over an Iodine 900 mg/g utility grade due to higher raw material consumption per finished ton.
2. **Raw Material Purity**: 100% virgin coconut shell commands higher stability and hardness than blended or recycled charcoals, ensuring no volatile leeching in food and water treatment.
3. **Specialized Post-Processing**: Acid washing (reducing ash content < 1% for ultra-pure electronic or pharmaceutical use) or custom multi-deck sieving.

### Current Indicative Market FOB Price Tiers (Indonesia Port):
- **Iodine 900 mg/g (Palm / Coconut Standard)**: ~$1,450 / MT
- **Iodine 1000 mg/g (Coconut Shell Premium GAC)**: ~$1,650 / MT
- **Iodine 1100 mg/g (High-Activity Water/Air Grade)**: ~$1,850 / MT
- **Iodine 1200 mg/g (Gold Recovery / High Hardness)**: ~$2,100 / MT

*Note: Indicative prices FOB Port of Tanjung Priok based on standard 1x20ft FCL container loads (15 MT). Contact CocoBlim directly for customized monthly contract rates.*`
      },
      id: {
        title: 'Panduan Harga FOB Karbon Aktif Indonesia: Faktor Penentu, Angka Iodin & Ketentuan MOQ Kontainer',
        summary: 'Transparansi struktur harga FOB ekspor karbon aktif tempurung kelapa 2026. Mulai dari pengaruh angka iodin, bahan baku virgin, pengemasan, hingga prosedur pemesanan kontainer.',
        content: `Bagi manajer pengadaan (procurement), engineer instalasi air, maupun importir internasional, memahami struktur pembentukan harga FOB (Free On Board) per metrik ton (MT) sangat krusial dalam perencanaan anggaran dan efisiensi biaya operasional.

### Faktor Utama yang Mempengaruhi Harga Karbon Aktif:
1. **Tingkat Angka Iodin (Iodine Number)**: Semakin tinggi angka iodin (misal 1100 - 1200 mg/g), semakin lama waktu tinggal di dalam tungku aktivasi uap bersuhu > 900°C. Hal ini membutuhkan rasio bahan baku tempurung kelapa yang lebih banyak untuk menghasilkan 1 ton karbon aktif berdaya serap maksimal.
2. **Kemurnian Bahan Baku (100% Virgin Shell vs Campuran)**: Karbon aktif berbahan 100% tempurung kelapa murni memiliki ketahanan abrasi mekanis (hardness ≥ 98%) yang jauh lebih tinggi dan bebas dari kontaminan logam berat berbahaya.
3. **Pemrosesan Khusus (Acid Washing & Sieving Presisi)**: Proses pencucian asam (acid wash) untuk menurunkan kadar abu hingga di bawah 1% pada aplikasi farmasi atau demineralisasi air baterai.

### Estimasi Rentang Harga FOB Pelabuhan Indonesia (2026):
- **Iodine 900 mg/g (Standard Efisien / WWTP)**: ~$1.450 USD / MT
- **Iodine 1000 mg/g (Standar Emas Pengolahan Air Minum)**: ~$1.650 USD / MT
- **Iodine 1100 mg/g (Aktivitas Tinggi / Filtrasi Udara & Gas)**: ~$1.850 USD / MT
- **Iodine 1200 mg/g (Ekstraksi Emas CIP/CIL & Farmasi)**: ~$2.100 USD / MT

*Catatan: Harga indikatif FOB Pelabuhan Tanjung Priok berbasis minimum order quantity (MOQ) 1 kontainer 20ft (15 MT). Hubungi tim sales CocoBlim melalui WhatsApp 0857-7106-0462 atau email blim00coco@gmail.com untuk penawaran kontrak resmi.*`
      },
      ar: {
        title: 'دليل أسعار فوب (FOB) للكربون المنشط الإندونيسي: العوامل المحددة وأرقام اليود وحمولات الحاويات',
        summary: 'شرح مفصل لكيفية تسعير الكربون المنشط المصدر من إندونيسيا حسب رقم اليود، والصلابة، والمواصفات الفنية المطلوبة للحاويات الكاملة.',
        content: `نقدم لعملائنا في جميع أنحاء العالم أسعار فوب (FOB) تنافسية تبدأ من 1,450 دولار للطن لميناء تانجونغ بريوك، مع ضمان معايير الجودة الدولية وفحص معملي كامل قبل الشحن.`
      }
    }
  }
];

export const getPostContent = (post: Post, language: 'en' | 'id' | 'ar'): PostContent => {
  return post.content[language] || post.content.en;
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(p => p.slug === slug);
};
