export type AudienceType = 'todos' | 'profissional' | 'paciente';

export type ProductCategory =
  | 'treinamentos'
  | 'laser-co2'
  | 'prp-plasma'
  | 'combos';

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g. "Biomédica Esteta - SP" or "Paciente - Tratamento Face"
  avatar: string;
  rating: number;
  comment: string;
  verified: boolean;
  date: string;
}

export interface Product {
  id: string;
  title: string; // Nome comercial de venda orientado a resultado
  originalName: string; // Nome do catálogo base
  slug: string;
  category: ProductCategory;
  categoryLabel: string;
  audience: 'profissional' | 'paciente' | 'ambos';
  price: number;
  originalPrice: number; // Âncora de valor
  installments: {
    count: number;
    value: number;
  };
  pixDiscountPercent: number;
  hours?: number; // Carga horária se aplicável
  badge?: string; // e.g. "Mais Vendido", "Vagas Limitadas", "Alta Procura"
  socialProof: {
    countLabel: string; // ex: "+450 profissionais formados" ou "+1.850 sessões realizadas"
    rating: number;
    reviewsCount: number;
  };
  benefitBullets: string[]; // 5 bullets de benefício prático
  shortDescription: string; // Gatilho + promessa (até 3 linhas)
  longDescription: {
    problem: string;
    agitation: string;
    solution: string;
    authorityNote: string;
  };
  whatsIncluded: string[]; // Formato lista da "caixa" do produto físico
  guaranteeDays: number;
  guaranteeDescription: string;
  bonuses: Array<{
    title: string;
    value: number;
    description: string;
  }>;
  testimonials: Testimonial[];
  imageUrl: string;
  urgencyText?: string;
  deliveryType: 'Digital Imediato' | 'Mentoria Presencial / Híbrida' | 'Protocolo Clínico + Dossier';
  relatedComboId?: string;
  format: 'Mentoria Presencial/Híbrida' | 'Dossiê Clínico + Vídeo Aulas' | 'Protocolo Presencial + Guia Digital';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderBumpItem {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  description: string;
}
