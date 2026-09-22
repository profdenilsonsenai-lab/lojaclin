import React from 'react';
import { Star, CheckCircle2, ShoppingBag, Eye, Zap, Shield, Clock } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetails,
  onAddToCart,
}) => {
  const pixPrice = Math.round(product.price * (1 - product.pixDiscountPercent / 100));

  return (
    <article
      id={`product-card-${product.id}`}
      className="group flex flex-col bg-white rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-xl hover:border-amber-400/60 transition-all duration-300 overflow-hidden"
    >
      {/* Product Image & Badges Container */}
      <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <img
          src={product.imageUrl}
          alt={product.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none">
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-stone-900/90 text-amber-300 border border-amber-500/40 shadow-sm backdrop-blur-sm">
            {product.categoryLabel}
          </span>

          {product.badge && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-500 text-stone-950 shadow-md">
              <Zap className="w-3 h-3 fill-stone-950" />
              <span>{product.badge}</span>
            </span>
          )}
        </div>

        {/* Delivery / Format Tag */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90 pointer-events-none">
          <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-md text-stone-200 border border-white/10">
            <Shield className="w-3 h-3 text-emerald-400" />
            <span>{product.deliveryType}</span>
          </span>

          {product.hours && (
            <span className="inline-flex items-center gap-1 bg-amber-950/80 text-amber-200 backdrop-blur-sm px-2 py-0.5 rounded-md border border-amber-500/30">
              <Clock className="w-3 h-3" />
              <span>{product.hours} Horas</span>
            </span>
          )}
        </div>
      </div>

      {/* Product Content Body */}
      <div className="flex-1 flex flex-col p-5 sm:p-6">
        {/* Rating & Social Proof */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-1">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-stone-700 ml-1">
              {product.socialProof.rating.toFixed(1)}
            </span>
          </div>
          <span className="text-[11px] font-medium text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full">
            {product.socialProof.countLabel}
          </span>
        </div>

        {/* Product Title */}
        <h3
          onClick={() => onOpenDetails(product)}
          className="font-serif-luxury text-lg sm:text-xl font-bold text-stone-900 leading-snug cursor-pointer group-hover:text-amber-800 transition-colors line-clamp-2"
          title={product.title}
        >
          {product.title}
        </h3>

        {/* Short Description */}
        <p className="mt-2 text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>

        {/* Practical Benefit Bullets (Top 3 on shelf card) */}
        <div className="mt-4 space-y-2 mb-4 border-t border-stone-100 pt-3 flex-1">
          {product.benefitBullets.slice(0, 3).map((bullet, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{bullet}</span>
            </div>
          ))}
        </div>

        {/* Price Box with Value Anchoring */}
        <div className="mt-auto pt-3 border-t border-stone-100 bg-stone-50/70 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 sm:p-5 rounded-b-2xl">
          <div className="flex items-baseline justify-between gap-2">
            <div>
              <span className="text-xs text-stone-400 line-through">
                De R$ {product.originalPrice.toLocaleString('pt-BR')}
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xs font-semibold text-stone-600">Por</span>
                <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-900">
                  R$ {product.price.toLocaleString('pt-BR')}
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 block">
                R$ {pixPrice.toLocaleString('pt-BR')} no PIX
              </span>
              <span className="text-[10px] text-stone-500 mt-0.5 block">
                ou {product.installments.count}x de R$ {product.installments.value.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              id={`btn-details-${product.id}`}
              onClick={() => onOpenDetails(product)}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-stone-300 hover:border-stone-400 bg-white text-stone-800 text-xs font-semibold hover:bg-stone-50 transition-colors shadow-sm"
            >
              <Eye className="w-3.5 h-3.5 text-stone-500" />
              <span>Ver Ficha</span>
            </button>

            <button
              id={`btn-add-cart-${product.id}`}
              onClick={() => onAddToCart(product)}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 text-xs font-bold shadow-md shadow-amber-950/20 transition-all active:scale-95"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Comprar</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
