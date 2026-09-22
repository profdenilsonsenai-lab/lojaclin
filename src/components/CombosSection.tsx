import React from 'react';
import { Sparkles, ArrowRight, Zap, CheckCircle2, ShieldCheck, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface CombosSectionProps {
  onOpenDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const CombosSection: React.FC<CombosSectionProps> = ({
  onOpenDetails,
  onAddToCart,
}) => {
  const combos = PRODUCTS.filter((p) => p.category === 'combos');

  return (
    <section id="combos-section" className="py-14 bg-gradient-to-b from-stone-900 to-[#1c1917] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Kits & Combos em Destaque • Maior Economia</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-100">
              Combinações Estratégicas para Resultados Potencializados
            </h2>
            <p className="mt-2 text-stone-400 text-sm sm:text-base max-w-2xl font-light">
              Adquira a mentoria + protocolos juntos ou combine procedimentos complementares com até <strong>R$ 3.400 de desconto</strong> em relação à compra avulsa.
            </p>
          </div>
        </div>

        {/* Combos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {combos.map((combo) => {
            const economy = combo.originalPrice - combo.price;
            const pixPrice = Math.round(combo.price * 0.95);

            return (
              <div
                key={combo.id}
                className="group relative rounded-3xl bg-stone-800/80 border border-amber-500/30 hover:border-amber-400 p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-300 hover:shadow-amber-950/20"
              >
                {/* Top Badge */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-400 text-stone-950 px-3 py-1 rounded-full shadow">
                    {combo.badge}
                  </span>
                  <span className="text-xs text-amber-300/80 font-medium">
                    {combo.socialProof.countLabel}
                  </span>
                </div>

                <div>
                  <h3
                    onClick={() => onOpenDetails(combo)}
                    className="font-serif-luxury text-xl sm:text-2xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    {combo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 mt-2 line-clamp-2 leading-relaxed">
                    {combo.shortDescription}
                  </p>

                  {/* Benefit Bullets */}
                  <div className="my-5 space-y-2 border-t border-stone-700/60 pt-4">
                    {combo.benefitBullets.slice(0, 3).map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Action Container */}
                <div className="pt-4 border-t border-stone-700/80 mt-auto">
                  <div className="flex items-baseline justify-between gap-2 mb-4">
                    <div>
                      <span className="text-xs text-stone-400 line-through block">
                        De R$ {combo.originalPrice.toLocaleString('pt-BR')}
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xs font-semibold text-stone-400">Por</span>
                        <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-amber-300">
                          R$ {combo.price.toLocaleString('pt-BR')}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800 block">
                        R$ {pixPrice.toLocaleString('pt-BR')} no PIX
                      </span>
                      <span className="text-[10px] text-stone-400 mt-0.5 block">
                        ou 12x de R$ {combo.installments.value.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenDetails(combo)}
                      className="py-2.5 px-3 rounded-xl border border-stone-700 hover:border-stone-500 bg-stone-900/60 text-stone-300 text-xs font-semibold hover:text-white transition-colors"
                    >
                      Ver Detalhes
                    </button>

                    <button
                      onClick={() => onAddToCart(combo)}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-stone-950 text-xs font-bold shadow-md shadow-amber-950/40 transition-all active:scale-95"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Garantir Combo</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
