
export enum DomainSlug {
  BERANDA = 'beranda',
  PANDU_BANGSAKU = 'pandu-bangsaku',
  AKHLAQ_MULIA = 'akhlaq-mulia',
  ILMU_PRIMA = 'ilmu-baru-bilangan-prima',
  KHAYALAN_KAH = 'khayalan-kah',
  MISCELLANEOUS = 'miscellaneous'
}

export interface DomainInfo {
  slug: DomainSlug;
  title: string;
  intro: string;
}

export interface Entry {
  id: string;
  domain: DomainSlug;
  title: string;
  content: string;
  date: string;
  isPermanent?: boolean;
}
