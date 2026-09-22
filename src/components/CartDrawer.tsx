import React, { useState } from 'react';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ShieldCheck,
  Tag,
  ArrowRight,
  Sparkles,
  Zap,
} from 'lucide-react';
import { CartItem } from '../types';
import { ORDER_BUMP } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: (appliedCoupon: string | null, includeBump: boolean) => void;
  includeOrderBump: boolean;
  onToggleOrderBump: (include: boolean) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  includeOrderBump,
  onToggleOrderBump,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponError, setCouponError] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountPercent =
    appliedCoupon === 'DRAVIP10'
      ? 10
      : appliedCoupon === 'ESTETICA15'
      ? 15
      : 0;

  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const bumpPrice = includeOrderBump ? ORDER_BUMP.price : 0;
  const total = subtotal - discountAmount + bumpPrice;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = couponCode.trim().toUpperCase();
    if (clean === 'DRAVIP10' || clean === 'ESTETICA15') {
      setAppliedCoupon(clean);
      setCouponError('');
    } else {
      setCouponError('Cupom inválido. Tente "DRAVIP10" para 10% de desconto.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div
          id="cart-drawer-container"
          className="w-screen max-w-md bg-[#faf8f5] shadow-2xl flex flex-col border-l border-stone-200 text-stone-800"
        >
          {/* Cart Header */}
          <div className="px-6 py-4 bg-stone-900 text-stone-100 flex items-center justify-between border-b border-stone-800">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h2 className="font-serif-luxury text-xl font-bold text-stone-100">
                Sua Sacola de Compras
              </h2>
              <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-bold">
                {items.reduce((acc, curr) => acc + curr.quantity, 0)} itens
              </span>
            </div>
            <button
              id="btn-close-cart"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Free Access Notice */}
          <div className="bg-amber-500/10 border-b border-amber-500/20 px-6 py-2 text-xs text-amber-900 font-medium flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Entrega Digital Imediata & Suporte Direto da Clínica</span>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center mx-auto text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-lg font-bold text-stone-800">
                  Sua sacola está vazia
                </h3>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Explore nossos protocolos estéticos ou mentorias profissionais e adicione itens para começar.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 py-2 px-4 rounded-xl bg-stone-900 text-amber-300 text-xs font-semibold hover:bg-stone-800 transition-colors"
                >
                  Ver Catálogo de Produtos
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 p-3.5 bg-white rounded-2xl border border-stone-200/80 shadow-xs"
                >
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.title}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 rounded-xl object-cover shrink-0 bg-stone-100 border border-stone-200"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider">
                        {item.product.categoryLabel}
                      </span>
                      <h4 className="font-serif-luxury text-sm font-bold text-stone-900 line-clamp-1">
                        {item.product.title}
                      </h4>
                      <div className="text-xs font-bold text-stone-900 mt-1">
                        R$ {item.product.price.toLocaleString('pt-BR')}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="p-1 text-stone-600 hover:text-stone-900"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="p-1 text-stone-600 hover:text-stone-900"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                        title="Remover da sacola"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* ORDER BUMP CHECKBOX (Prompt CRO Requirement) */}
            {items.length > 0 && (
              <div
                id="cart-order-bump"
                className={`p-4 rounded-2xl border transition-all ${
                  includeOrderBump
                    ? 'bg-amber-50/80 border-amber-400 shadow-sm'
                    : 'bg-white border-dashed border-stone-300 hover:border-amber-300'
                }`}
              >
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeOrderBump}
                    onChange={(e) => onToggleOrderBump(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-amber-400 text-amber-600 focus:ring-amber-500 cursor-pointer"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase bg-amber-500 text-stone-950 px-1.5 py-0.2 rounded">
                        <Zap className="w-2.5 h-2.5" />
                        Oferta Única de Balcão
                      </span>
                      <span className="text-xs text-stone-400 line-through">
                        De R$ {ORDER_BUMP.originalPrice}
                      </span>
                      <span className="text-xs font-bold text-emerald-800">
                        Por +R$ {ORDER_BUMP.price}
                      </span>
                    </div>

                    <h5 className="text-xs font-bold text-stone-900 mt-1">
                      {ORDER_BUMP.title}
                    </h5>
                    <p className="text-[11px] text-stone-600 mt-0.5 leading-relaxed">
                      {ORDER_BUMP.description}
                    </p>
                  </div>
                </label>
              </div>
            )}
          </div>

          {/* Cart Footer / Checkout Calculation */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-stone-200 space-y-4">
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Cupom (ex: DRAVIP10)"
                    className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-xl uppercase tracking-wider focus:outline-none focus:border-amber-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-900 text-white text-xs font-semibold transition-colors"
                >
                  Aplicar
                </button>
              </form>

              {appliedCoupon && (
                <div className="text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 flex items-center justify-between">
                  <span>✓ Cupom {appliedCoupon} aplicado ({discountPercent}% OFF)</span>
                  <button
                    onClick={() => setAppliedCoupon(null)}
                    className="text-stone-400 hover:text-stone-700 text-xs underline"
                  >
                    Remover
                  </button>
                </div>
              )}

              {couponError && (
                <p className="text-[11px] text-rose-600">{couponError}</p>
              )}

              {/* Financial Breakdown */}
              <div className="space-y-1.5 text-xs text-stone-600 pt-2 border-t border-stone-100">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-800">
                    R$ {subtotal.toLocaleString('pt-BR')}
                  </span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Desconto ({discountPercent}%)</span>
                    <span>- R$ {discountAmount.toLocaleString('pt-BR')}</span>
                  </div>
                )}

                {includeOrderBump && (
                  <div className="flex justify-between text-amber-800">
                    <span>Manual de Precificação (Order Bump)</span>
                    <span className="font-semibold">+ R$ {ORDER_BUMP.price},00</span>
                  </div>
                )}

                <div className="flex justify-between text-stone-500 text-[11px]">
                  <span>Acesso & Entrega Digital</span>
                  <span className="text-emerald-600 font-bold">GRÁTIS</span>
                </div>

                <div className="flex justify-between items-baseline pt-2 border-t border-stone-200 text-sm font-bold text-stone-950">
                  <span className="font-serif-luxury text-lg">Total do Pedido</span>
                  <div className="text-right">
                    <span className="font-serif-luxury text-2xl text-stone-950">
                      R$ {total.toLocaleString('pt-BR')}
                    </span>
                    <span className="block text-[11px] font-normal text-emerald-700">
                      R$ {Math.round(total * 0.95).toLocaleString('pt-BR')} à vista no Pix (-5%)
                    </span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                id="btn-proceed-checkout"
                onClick={() => onProceedToCheckout(appliedCoupon, includeOrderBump)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-sm shadow-lg shadow-amber-950/20 transition-all active:scale-95"
              >
                <span>Fechar Pedido com Segurança</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ambiente Seguro • Garantia Incondicional de 7 Dias</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
