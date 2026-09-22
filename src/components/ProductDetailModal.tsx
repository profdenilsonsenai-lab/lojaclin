import React, { useState } from 'react';
import {
  X,
  Star,
  CheckCircle2,
  ShoppingBag,
  ShieldCheck,
  Gift,
  Package,
  MessageCircle,
  Clock,
  Sparkles,
  AlertCircle,
  ArrowRight,
  Share2,
  Check,
  Zap,
} from 'lucide-react';
import { Product } from '../types';
import { CLINIC_INFO, PRODUCTS } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onSelectProduct,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  if (!product) return null;

  const pixPrice = Math.round(product.price * (1 - product.pixDiscountPercent / 100));
  const relatedCombo = product.relatedComboId
    ? PRODUCTS.find((p) => p.id === product.relatedComboId)
    : null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    `Olá Dra. Paula Fischer! Vi na loja o produto: "${product.title}" e gostaria de tirar algumas dúvidas antes de concluir o pedido/agendamento.`
  );
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        id="product-detail-modal-container"
        className="relative w-full max-w-4xl bg-[#faf8f5] rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[92vh] flex flex-col text-stone-800"
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-stone-900 text-stone-100 border-b border-stone-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-300">
              Ficha Técnica Oficial • {product.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-stone-800 text-stone-400 hover:text-stone-200 transition-colors"
              title="Copiar link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              id="btn-close-product-modal"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8">
          {/* Top Section: Photo + Core Value Box */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left: Visual Asset Box */}
            <div className="md:col-span-5 space-y-3">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200 shadow-md">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-stone-950/80 text-amber-300 border border-amber-500/30 backdrop-blur-sm">
                    {product.format}
                  </span>
                </div>
                {product.urgencyText && (
                  <div className="absolute bottom-3 left-3 right-3 bg-amber-950/90 text-amber-200 text-xs px-3 py-1.5 rounded-xl border border-amber-500/40 backdrop-blur-sm flex items-center gap-1.5 font-medium">
                    <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{product.urgencyText}</span>
                  </div>
                )}
              </div>

              {/* Security & Authenticity Guarantee Badges */}
              <div className="bg-white rounded-xl p-3 border border-stone-200/80 text-xs space-y-2">
                <div className="flex items-center gap-2 text-stone-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Método registrado e validado pela <strong>Dra. Paula Fischer</strong></span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <Package className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{product.deliveryType} (Acesso e instruções imediatas)</span>
                </div>
              </div>
            </div>

            {/* Right: Commercial Title, Social Proof & Pricing Anchoring */}
            <div className="md:col-span-7 flex flex-col">
              {/* Rating and Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span className="text-xs font-bold text-amber-900">{product.socialProof.rating.toFixed(1)}</span>
                  <span className="text-[11px] text-amber-800 font-medium">
                    ({product.socialProof.reviewsCount} avaliações)
                  </span>
                </div>

                <span className="text-xs font-semibold text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-full">
                  {product.socialProof.countLabel}
                </span>

                {product.badge && (
                  <span className="text-xs font-bold text-amber-900 bg-amber-200/60 px-2.5 py-0.5 rounded-full border border-amber-300">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Commercial Title */}
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                {product.title}
              </h2>
              <span className="text-xs text-stone-500 mt-1">Item de Catálogo: {product.originalName}</span>

              {/* Short Description (Gatilho + Promessa) */}
              <p className="mt-3 text-stone-700 text-sm leading-relaxed border-l-2 border-amber-500 pl-3 italic bg-amber-50/40 py-1 rounded-r-lg">
                "{product.shortDescription}"
              </p>

              {/* Price Anchoring Box */}
              <div className="mt-5 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-stone-400 line-through">
                    De R$ {product.originalPrice.toLocaleString('pt-BR')}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Economia de R$ {(product.originalPrice - product.price).toLocaleString('pt-BR')}
                  </span>
                </div>

                <div className="flex flex-wrap items-baseline gap-2 mt-1">
                  <span className="text-xs font-semibold text-stone-600">Por apenas</span>
                  <span className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-stone-950">
                    R$ {product.price.toLocaleString('pt-BR')}
                  </span>
                  <span className="text-xs text-stone-500">
                    em até {product.installments.count}x de R$ {product.installments.value.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-bold">
                    ⚡ R$ {pixPrice.toLocaleString('pt-BR')} à vista no PIX ({product.pixDiscountPercent}% OFF extra)
                  </span>
                  <span className="text-stone-500 text-[11px]">Aprovação em segundos</span>
                </div>

                {/* Primary CTA Buttons */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    id="modal-add-to-cart-btn"
                    onClick={() => {
                      onAddToCart(product);
                      onClose();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-sm shadow-md shadow-amber-950/20 transition-all active:scale-95"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Adicionar à Sacola</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md shadow-emerald-950/20 transition-all text-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Tirar Dúvidas / WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 5 BENEFIT BULLETS (Oriented to results/transformation) */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm">
            <h3 className="font-serif-luxury text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span>O que você conquista com este produto:</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {product.benefitBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* LONG DESCRIPTION: PAS (Problem, Agitation, Solution) + Authority */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-4">
            <h3 className="font-serif-luxury text-xl font-bold text-stone-900 border-b border-stone-100 pb-3">
              Por que este protocolo é o divisor de águas:
            </h3>

            <div className="space-y-3 text-sm text-stone-700 leading-relaxed">
              <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-100">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-800 block mb-1">
                  O Problema Real
                </span>
                <p>{product.longDescription.problem}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-100">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                  O Custo de Continuar Como Está
                </span>
                <p>{product.longDescription.agitation}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                  A Solução Validada pela Dra. Paula Fischer
                </span>
                <p>{product.longDescription.solution}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-3 border-t border-stone-100 pt-3.5 bg-stone-50/80 p-3 rounded-xl border border-stone-200/60">
              <img
                src="/dra-paula-fischer.jpg"
                alt="Dra. Paula Fischer"
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full object-cover object-top border-2 border-amber-400 shrink-0 shadow-xs"
              />
              <div className="flex-1">
                <span className="text-[11px] font-bold text-stone-900 block">
                  Nota Clínica da Dra. Paula Fischer:
                </span>
                <p className="text-xs text-stone-600 italic mt-0.5">
                  "{product.longDescription.authorityNote}"
                </p>
              </div>
            </div>
          </div>

          {/* "O QUE ESTÁ INCLUSO" (Formatted like items inside a physical box) */}
          <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 border border-amber-500/30 shadow-lg">
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-amber-400" />
                <h3 className="font-serif-luxury text-xl font-bold text-stone-100">
                  O que está incluso na sua compra (Itens da Embalagem Digital):
                </h3>
              </div>
              <span className="text-[11px] uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded font-bold border border-amber-500/30">
                Checklist Completo
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {product.whatsIncluded.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-800/80 border border-stone-700/80 text-xs sm:text-sm text-stone-200"
                >
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-bold flex items-center justify-center shrink-0 text-xs border border-amber-500/40">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BONUSES (With value anchor and scarcity) */}
          {product.bonuses && product.bonuses.length > 0 && (
            <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50/50 rounded-2xl p-6 border border-amber-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Gift className="w-5 h-5 text-amber-600" />
                <h3 className="font-serif-luxury text-xl font-bold text-stone-900">
                  Bônus Especiais Inclusos (Por tempo limitado):
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.bonuses.map((bonus, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-amber-200/80 shadow-xs">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-stone-900">{bonus.title}</span>
                      <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Valor: R$ {bonus.value} (GRÁTIS)
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 mt-1">{bonus.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GUARANTEE (Visual risk-reversal) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-stone-800">
            <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex flex-col items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-7 h-7" />
              <span className="text-[10px] font-bold uppercase">{product.guaranteeDays} Dias</span>
            </div>
            <div className="text-center sm:text-left flex-1">
              <h4 className="font-bold text-emerald-950 text-sm sm:text-base">
                Garantia Incondicional de {product.guaranteeDays} Dias
              </h4>
              <p className="text-xs text-emerald-900 mt-1 leading-relaxed">
                {product.guaranteeDescription} Seu risco é absolutamente zero.
              </p>
            </div>
          </div>

          {/* PRODUCT TESTIMONIALS */}
          {product.testimonials && product.testimonials.length > 0 && (
            <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm">
              <h3 className="font-serif-luxury text-xl font-bold text-stone-900 mb-4">
                Depoimentos Reais de Quem Já Realizou:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.testimonials.map((t) => (
                  <div key={t.id} className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 flex flex-col justify-between">
                    <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed mb-4">
                      "{t.comment}"
                    </p>
                    <div className="flex items-center gap-3 pt-3 border-t border-stone-200/60">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 rounded-full object-cover border border-stone-300"
                      />
                      <div>
                        <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                          <span>{t.name}</span>
                          {t.verified && (
                            <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded font-semibold">
                              ✓ Verificado
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-stone-500">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CROSS-SELL / COMBO SUGGESTION */}
          {relatedCombo && (
            <div className="bg-gradient-to-r from-amber-900 via-stone-900 to-amber-950 text-white rounded-2xl p-6 border border-amber-500/40 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30 inline-block">
                    ⚡ Sugestão de Combo Inteligente (Mais Econômico)
                  </span>
                  <h4 className="font-serif-luxury text-lg sm:text-xl font-bold text-stone-100">
                    {relatedCombo.title}
                  </h4>
                  <p className="text-xs text-stone-300">
                    Leve este produto junto com a formação ou protocolos complementares e economize muito mais!
                  </p>
                </div>

                <div className="flex flex-col items-center sm:items-end gap-2 shrink-0">
                  <div className="text-right">
                    <span className="text-xs text-stone-400 line-through">
                      De R$ {relatedCombo.originalPrice.toLocaleString('pt-BR')}
                    </span>
                    <div className="font-serif-luxury text-2xl font-bold text-amber-300">
                      R$ {relatedCombo.price.toLocaleString('pt-BR')}
                    </div>
                  </div>
                  <button
                    onClick={() => onSelectProduct(relatedCombo)}
                    className="flex items-center gap-1.5 py-2 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-all shadow"
                  >
                    <span>Ver este Combo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Sticky Bottom Bar */}
        <div className="sticky bottom-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
          <div>
            <div className="text-xs text-stone-500">Valor com desconto aplicado:</div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif-luxury text-2xl font-bold text-stone-900">
                R$ {product.price.toLocaleString('pt-BR')}
              </span>
              <span className="text-xs font-semibold text-emerald-700">
                (R$ {pixPrice.toLocaleString('pt-BR')} no PIX)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-stone-300 hover:border-stone-400 text-stone-700 hover:text-stone-900 text-xs font-semibold bg-white transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Dúvidas?</span>
            </a>

            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-sm shadow-md shadow-amber-950/30 transition-all active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Adicionar ao Carrinho</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
