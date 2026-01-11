
import { DomainSlug, DomainInfo, Entry } from './types';

export const COLORS = {
  background: '#FAFAF8',
  primaryText: '#1F1F1F',
  secondaryText: '#5F5F5F',
  divider: '#D6D6D2',
  link: '#3A4A5A',
};

export const DOMAINS: Record<DomainSlug, DomainInfo> = {
  [DomainSlug.BERANDA]: {
    slug: DomainSlug.BERANDA,
    title: 'Beranda',
    intro: 'Satu wadah yang tidak terbatas kapasitasnya untuk menampung berbagai isi pikiran yang datang silih berganti, agar satu demi satu dapat diwujudkan dalam dunia nyata.'
  },
  [DomainSlug.PANDU_BANGSAKU]: {
    slug: DomainSlug.PANDU_BANGSAKU,
    title: 'Pandu Bangsaku',
    intro: 'Berbagai isu sosial dan agama yang telah, sedang, dan/atau bisa jadi akan muncul ke permukaan, merupakan kandungan utama dalam topik Pandu Bangsaku ini.'
  },
  [DomainSlug.AKHLAQ_MULIA]: {
    slug: DomainSlug.AKHLAQ_MULIA,
    title: 'Akhlaq Mulia',
    intro: 'Di dalam topik Akhlaq Mulia ini terkandung hal-hal yang menyangkut kebiasaan dan/atau perilaku anak manusia dalam kehidupan sehari-hari, khususnya dalam hubungannya dengan keimanan dan kebajikan.'
  },
  [DomainSlug.ILMU_PRIMA]: {
    slug: DomainSlug.ILMU_PRIMA,
    title: 'Ilmu Baru Bilangan Prima',
    intro: 'Dengan sangat pasti saya katakan, bilangan-bilangan prima adalah salah satu dari semua ciptaan Alloh yang sangat-sangat indah dalam hubungan antara satu dengan yang lainnya.'
  },
  [DomainSlug.KHAYALAN_KAH]: {
    slug: DomainSlug.KHAYALAN_KAH,
    title: 'Khayalan-kah',
    intro: 'Ini adalah ranahnya orang-orang jenius yang memiliki khayalan-khayalan luar biasa, namun tetap terukur.'
  },
  [DomainSlug.MISCELLANEOUS]: {
    slug: DomainSlug.MISCELLANEOUS,
    title: 'Miscellaneous',
    intro: 'Bagian ini didesain sebagai panggung penghiburan. Imported entertainment maupun exported home-prepared entertainment akan tampil di sini.'
  }
};

export const INITIAL_ENTRIES: Entry[] = [
  {
    id: 'beranda-main',
    domain: DomainSlug.BERANDA,
    title: 'Beranda',
    isPermanent: true,
    date: '2024-01-01',
    content: `
Satu wadah yang tidak terbatas kapasitasnya untuk menampung berbagai isi pikiran yang datang silih berganti, agar satu demi satu dapat diwujudkan dalam dunia nyata.

Isi pikiran tersebut meliputi segala masalah dan isu-isu yang berhubungan dengan kehidupan kita sehari-hari. Mulai dari persoalan seorang warga negara biasa yang sederhana namun tetap bermartabat dan terus berupaya meningkat, hingga warga negara intelek kelas menengah yang berwawasan dan memiliki gagasan-gagasan cemerlang, serta kelas atas yang terkadang isu-isunya tidak terjangkau oleh prasarana biasa.

Pikiran-pikiran itu bisa bersifat eksak dan teoritis, yang relatif mudah diwujudkan, ataupun sangat abstrak dan nyaris mustahil untuk direalisasikan.

Semboyan esensial yang menjadi tonggak pegangan adalah bahwa semua goal yang dicita-citakan—dalam lingkup kecil—ditujukan untuk pengembangan dan kemajuan pribadi anak bangsa, dan dalam lingkup yang lebih besar serta luas, untuk kemajuan dan ketahanan bangsa dan negara.`
  },
  {
    id: 'pandu-bangsaku-intro',
    domain: DomainSlug.PANDU_BANGSAKU,
    title: 'Pengantar Pandu Bangsaku',
    date: '2024-01-01',
    content: `
Isu-isu lama, misalnya banjir yang terjadi terus-menerus dan kelihatannya akan endless alias tidak kunjung berakhir, sampah yang menumpuk di mana-mana, korupsi, stunting, dan lain-lain.

Isu-isu yang sedang “in”, misalnya Makan Bergizi Gratis (MBG), kasus tuduhan ijazah Jokowi palsu, kompetensi Gibran sebagai seorang Wakil Presiden, dan lain-lain.

Isu-isu yang bisa jadi akan muncul di masa depan, misalnya hal-hal yang berhubungan dengan Ibu Kota Nasional (IKN), extension Kereta Cepat Whoosh sampai Surabaya, serta berbagai isu lain sejenisnya.`
  },
  {
    id: 'akhlaq-mulia-intro',
    domain: DomainSlug.AKHLAQ_MULIA,
    title: 'Kebiasaan dan Perilaku',
    date: '2024-01-01',
    content: `
Hal-hal tersebut acap kali diisyaratkan dan ditekankan di dalam Al-Qur’an untuk dilakukan.

Selain itu, sebagai sebuah reminder, akan dimuat pula hal-hal baik lainnya yang bisa jadi tidak atau belum dilakukan oleh kebanyakan orang secara layak.`
  },
  {
    id: 'ilmu-prima-intro',
    domain: DomainSlug.ILMU_PRIMA,
    title: 'Keindahan Bilangan Prima',
    date: '2024-01-01',
    content: `
They are—between one and others—indicating a so good relation which believed to be the most beautiful numbers relation on earth.

Pembahasannya mencakup definisinya, indikasi asal-usul terbentuknya yang tidak lepas dari Sang Maha Pencipta, beberapa aksioma yang sangat imbang dan mengagumkan, rumus-rumus—atau sebutan kerennya formula-formula—yang terbentuk dari aksioma-aksiomanya, serta berbagai cara pembuktian keprimaannya yang aneh, kasat mata, dan menakjubkan.

Termasuk pula pembahasan tentang ketidak-terbatasan besarnya (limitless number), dan hal-hal lain yang berkaitan dengannya.`
  },
  {
    id: 'khayalan-kah-intro',
    domain: DomainSlug.KHAYALAN_KAH,
    title: 'Tenaga Petir dan Roda Satu',
    date: '2024-01-01',
    content: `
Petir dengan tenaga listrik jutaan volt-ampere, ditangkap dan ditundukkan demi memberi manfaat kepada umat manusia serta makhluk-makhluk lain di seluruh bumi.

Bayangkan pula udara dan angkasa dunia yang bersih sebersih-bersihnya, tanpa polusi sedikit pun, dengan pergerakan manusia yang tetap cepat—bahkan lebih cepat dan sportif—namun tetap santai.

Itulah kendaraan roda satu yang dirancang sedemikian rupa sehingga, dengan tenaga yang sama, mampu menghasilkan gerakan dengan kecepatan yang lebih tinggi.`
  },
  {
    id: 'miscellaneous-intro',
    domain: DomainSlug.MISCELLANEOUS,
    title: 'Panggung Penghiburan',
    date: '2024-01-01',
    content: `
Segala jenis imported entertainment maupun exported home-prepared entertainment akan tampil di sini. Termasuk pula berbagai hal yang bersifat fun dan extra ordinary.`
  }
];
