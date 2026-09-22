import React from 'react';
import { Phone, MapPin, Mail, Clock, ShieldCheck, Heart, Lock, Award } from 'lucide-react';
import { CLINIC_INFO } from '../data/products';
import { ProductCategory } from '../types';

interface FooterProps {
  onSelectCategory: (cat: ProductCategory | 'todos') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800/80">
          {/* Brand & Authority */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 to-amber-300 p-0.5 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-stone-950 flex items-center justify-center text-amber-300 font-serif-luxury font-bold text-lg">
                  PF
                </div>
              </div>
              <span className="font-serif-luxury text-xl font-bold text-stone-100">
                {CLINIC_INFO.name}
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Loja virtual oficial de protocolos estéticos e capacitações práticas de alta performance. Desenvolvidos e validados pela Dra. Paula Fischer para transformar vidas e carreiras na estética médica e avançada.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-amber-400">
              <Award className="w-4 h-4" />
              <span>{CLINIC_INFO.crm}</span>
            </div>
          </div>

          {/* Quick Category Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-100 font-serif-luxury">
              Navegar por Linhas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectCategory('treinamentos')}
                  className="hover:text-amber-300 transition-colors text-stone-400 text-left"
                >
                  Treinamentos & Imersões VIP (20h)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('laser-co2')}
                  className="hover:text-amber-300 transition-colors text-stone-400 text-left"
                >
                  Protocolos a Laser CO2 Fracionado
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('prp-plasma')}
                  className="hover:text-amber-300 transition-colors text-stone-400 text-left"
                >
                  Protocolos PRP & Plasma Gel
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('combos')}
                  className="hover:text-amber-300 transition-colors text-amber-400 font-semibold text-left"
                >
                  Kits & Combos com Desconto
                </button>
              </li>
            </ul>
          </div>

          {/* Clinic Location & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-100 font-serif-luxury">
              Unidade Presencial
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address} — {CLINIC_INFO.city}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Trust & Guarantees */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-100 font-serif-luxury">
              Segurança & Garantias
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Garantia incondicional de 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-400" />
                <span>Pagamento Criptografado SSL 256-bit</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-400" />
                <span>Atendimento humanizado e ético</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {CLINIC_INFO.name}. Todos os direitos reservados.
          </p>
          <p className="max-w-md">
            Avisos legais: Resultados individuais podem variar conforme o fototipo e histórico clínico da paciente. Todos os procedimentos clínicos exigem anamnese e consentimento prévio.
          </p>
        </div>
      </div>
    </footer>
  );
};
