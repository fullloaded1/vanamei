export interface FAQItem {
  id: string;
  questionId: string;
  questionEn: string;
  questionAr: string;
  answerId: string;
  answerEn: string;
  answerAr: string;
  category: 'pricing' | 'specs' | 'order' | 'shipping';
}

export const faqList: FAQItem[] = [
  {
    id: 'faq-price',
    category: 'pricing',
    questionId: 'Berapa harga karbon aktif CocoBlim?',
    questionEn: 'What is the price of CocoBlim activated carbon?',
    questionAr: 'كم سعر الكربون المنشط من CocoBlim؟',
    answerId: 'Harga FOB kami berdasarkan spesifikasi Iodine Number: Iodine 900: $1,750 USD/MT, Iodine 1000: $1,900 USD/MT, Iodine 1100: $2,000 USD/MT, dan Iodine 1200: $2,100 USD/MT. Semua harga sudah termasuk kemasan standar pabrik dan biaya hingga di atas kapal (FOB Tanjung Priok / Port Indonesia).',
    answerEn: 'Our FOB prices are tiered by Iodine Number: Iodine 900: $1,750 USD/MT, Iodine 1000: $1,900 USD/MT, Iodine 1100: $2,000 USD/MT, and Iodine 1200: $2,100 USD/MT. All prices include standard factory packaging and loading onboard the vessel (FOB Indonesian port).',
    answerAr: 'أسعارنا فوب تعتمد على رقم اليود: يود 900: 1750$ / طن متري، يود 1000: 1900$ / طن، يود 1100: 2000$ / طن، يود 1200: 2100$ / طن. تشمل التعبئة والتحميل على ظهر السفينة.'
  },
  {
    id: 'faq-moq',
    category: 'order',
    questionId: 'Berapa minimal pemesanan (MOQ)?',
    questionEn: 'What is the Minimum Order Quantity (MOQ)?',
    questionAr: 'ما هو الحد الأدنى للطلب (MOQ)؟',
    answerId: 'Minimal order (MOQ) adalah 1 x 20 feet container atau setara dengan 15 Metric Ton (MT).',
    answerEn: 'The minimum order quantity (MOQ) is 1 x 20 feet container, equivalent to approximately 15 Metric Tons (MT).',
    answerAr: 'الحد الأدنى للطلب هو حاوية 20 قدم (ما يعادل 15 طناً مترياً تقريباً).'
  },
  {
    id: 'faq-nego',
    category: 'pricing',
    questionId: 'Apakah harga masih bisa dinegosiasikan?',
    questionEn: 'Is the price negotiable?',
    questionAr: 'هل السعر قابل للتفاوض؟',
    answerId: 'Untuk pembelian dalam jumlah besar (multi-kontainer) atau kontrak rutin jangka panjang, kami menyediakan penawaran khusus. Silakan hubungi admin kami via WhatsApp di +62 857-7106-0462 atau email blim00coco@gmail.com.',
    answerEn: 'For large volume orders (multiple containers) or ongoing annual contracts, special volume pricing is available. Please contact our team via WhatsApp at +62 857-7106-0462 or email blim00coco@gmail.com.',
    answerAr: 'نعم، للكميات الكبيرة والعقود السنوية الدورية نقدم أسعاراً خاصة. يرجى التواصل مع فريقنا عبر واتساب أو البريد الإلكتروني.'
  },
  {
    id: 'faq-types',
    category: 'specs',
    questionId: 'Ada jenis karbon aktif apa saja yang tersedia?',
    questionEn: 'What types of activated carbon do you supply?',
    questionAr: 'ما هي أنواع الكربون المنشط المتوفرة لديكم؟',
    answerId: 'Kami menyediakan karbon aktif dari bahan baku tempurung kelapa murni dan kelapa sawit dalam tiga bentuk fisik: Granular (GAC), Powder (PAC), dan Pellet / Cylindrical Extruded.',
    answerEn: 'We provide activated carbon derived from 100% virgin coconut shell and palm shell in three primary physical forms: Granular (GAC), Powdered (PAC), and Pelletized / Cylindrical Extruded.',
    answerAr: 'نوفر الكربون المنشط من قشر جوز الهند وقشر النخيل بثلاثة أشكال رئيسية: حبيبي (GAC)، مسحوق (PAC)، وأسطواني (Pellet).'
  },
  {
    id: 'faq-mesh',
    category: 'specs',
    questionId: 'Ukuran mesh apa saja yang tersedia?',
    questionEn: 'What mesh sizes are available?',
    questionAr: 'ما هي أحجام المش (Mesh) المتوفرة؟',
    answerId: 'Tersedia berbagai ukuran mesh sesuai kebutuhan industri Anda, antara lain 8x30, 12x40, 4x8, 6x12, 20x50 mesh untuk granular, dan 200 hingga 325 mesh untuk serbuk (powder).',
    answerEn: 'We provide comprehensive mesh sizing to match your industrial requirements, including 8x30, 12x40, 4x8, 6x12, and 20x50 mesh for granular, and 200 to 325 mesh for powder.',
    answerAr: 'تتوفر مقاسات متعددة تناسب متطلباتكم الصناعية مثل: 8x30 و 12x40 للحبيبي، و 200 إلى 325 مش للمسحوق.'
  },
  {
    id: 'faq-packaging',
    category: 'specs',
    questionId: 'Bagaimana opsi kemasannya?',
    questionEn: 'What packaging options are offered?',
    questionAr: 'ما هي خيارات التعبئة والتغليف؟',
    answerId: 'Tersedia kemasan standar 25 kg woven bag dengan PE inner liner dan jumbo bag 700 kg dengan sling. Kami juga melayani custom packaging atau private label untuk pesanan 1 kontainer penuh (15 MT).',
    answerEn: 'Standard packaging includes 25 kg woven PP bags with PE liner and 700 kg jumbo bags with lifting loops. Custom packaging and private labeling are available for full container orders (15 MT).',
    answerAr: 'نوفر أكياس قياسية سعة 25 كجم وأكياس جامبو سعة 700 كجم، بالإضافة إلى إمكانية وضع علامتكم التجارية الخاصة (Private Label).'
  },
  {
    id: 'faq-sample',
    category: 'order',
    questionId: 'Bisakah mengirimkan sampel produk?',
    questionEn: 'Can you provide product samples?',
    questionAr: 'هل يمكنكم إرسال عينات من المنتج؟',
    answerId: 'Bisa. Kami memberikan sampel produk secara GRATIS untuk uji laboratorium Anda. Ongkos kirim kurir/ekspedisi ditanggung oleh pihak pembeli.',
    answerEn: 'Yes, we provide product samples FREE of charge for your laboratory testing. Courier / shipping freight is paid by the buyer.',
    answerAr: 'نعم، نقدم عينات مجانية للاختبار المعملي، ويتحمل المشتري تكلفة الشحن فقط.'
  },
  {
    id: 'faq-payment',
    category: 'order',
    questionId: 'Metode pembayaran apa saja yang diterima?',
    questionEn: 'What payment terms do you accept?',
    questionAr: 'ما هي طرق الدفع المقبولة؟',
    answerId: 'Kami menerima pembayaran melalui Telegraphic Transfer (T/T) dan Letter of Credit (L/C At Sight) untuk pesanan kontainer. Untuk biaya sampel dapat menggunakan Western Union. Syarat T/T adalah 50% Down Payment (DP) saat Purchase Order (PO) resmi terbit, dan pelunasan 50% saat barang selesai dimuat ke kontainer sebelum menuju pelabuhan.',
    answerEn: 'We accept Telegraphic Transfer (T/T) and irrevocable Letter of Credit (L/C At Sight) for container orders. Western Union is available for sample shipping fees. Standard T/T terms: 50% deposit upon PO confirmation, and remaining 50% upon container loading before port dispatch.',
    answerAr: 'نقبل التحويل البنكي (T/T) والاعتماد المستندي (L/C). شروط الدفع للـ T/T: 50% دفعة أولى عند أمر الشراء و50% قبل إبحار الحاوية.'
  },
  {
    id: 'faq-factory',
    category: 'shipping',
    questionId: 'Apakah CocoBlim adalah produsen langsung dan boleh berkunjung ke pabrik?',
    questionEn: 'Is CocoBlim a direct manufacturer, and can we visit your factory?',
    questionAr: 'هل CocoBlim مصنع مباشر، وهل يمكن زيارة المصنع؟',
    answerId: 'Ya, kami adalah produsen langsung dengan fasilitas pabrik di Tanjungsari, Kabupaten Bogor, Jawa Barat. Kunjungan pabrik dapat dijadwalkan setelah adanya kesepakatan kerjasama awal atau verifikasi sampel terlebih dahulu.',
    answerEn: 'Yes, we are a direct manufacturer with our production facility located in Tanjungsari, Bogor Regency, West Java, Indonesia. Factory visits can be scheduled following preliminary agreement or sample verification.',
    answerAr: 'نعم، نحن مصنع مباشر في تانجونغساري، بوغور، إندونيسيا. ونرحب بزيارة المصنع بعد الاتفاق المبدئي واختبار العينات.'
  },
  {
    id: 'faq-incoterms',
    category: 'shipping',
    questionId: 'Apakah melayani pengiriman dengan sistem CIF?',
    questionEn: 'Do you offer CIF shipping terms?',
    questionAr: 'هل تقدمون الشحن وفق نظام CIF؟',
    answerId: 'Untuk saat ini opsi resmi yang kami tawarkan adalah sistem FOB (Free On Board) dari pelabuhan Indonesia (Tanjung Priok Jakarta). Kami belum dapat memproses dengan incoterms CIF secara langsung.',
    answerEn: 'Currently our standard quotation is strictly on FOB (Free On Board) terms from Indonesian ports (e.g. Tanjung Priok, Jakarta). We do not currently quote on CIF terms directly.',
    answerAr: 'حالياً نقدم شروط تسليم FOB فقط من الموانئ الإندونيسية (ميناء تانجونغ بريوك، جاكرتا).'
  }
];

