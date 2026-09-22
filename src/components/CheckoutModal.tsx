import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  CreditCard,
  QrCode,
  CheckCircle2,
  Lock,
  Zap,
  Copy,
  Check,
  User,
  Phone,
  Mail,
  GraduationCap,
  Heart,
} from 'lucide-react';
import { CartItem } from '../types';
import { CLINIC_INFO, ORDER_BUMP } from '../data/products';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  appliedCoupon: string | null;
  includeOrderBump: boolean;
  onToggleOrderBump: (include: boolean) => void;
  onSuccessOrder: (orderDetails: {
    orderNumber: string;
    customerName: string;
    whatsapp: string;
    email: string;
    audienceType: 'profissional' | 'paciente';
    total: number;
    paymentMethod: 'pix' | 'cartao';
    itemsSummary: string;
  }) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  appliedCoupon,
  includeOrderBump,
  onToggleOrderBump,
  onSuccessOrder,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [audienceType, setAudienceType] = useState<'profissional' | 'paciente'>('profissional');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao'>('pix');
  const [installmentsCount, setInstallmentsCount] = useState(12);
  const [copiedPix, setCopiedPix] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  const discountPercent =
    appliedCoupon === 'DRAVIP10' ? 10 : appliedCoupon === 'ESTETICA15' ? 15 : 0;
  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const bumpPrice = includeOrderBump ? ORDER_BUMP.price : 0;
  const totalRaw = subtotal - discountAmount + bumpPrice;

  // Pix has extra 5% off
  const pixFinal = Math.round(totalRaw * 0.95);
  const currentTotal = paymentMethod === 'pix' ? pixFinal : totalRaw;

  const handleCopyPix = () => {
    const pixCode = '00020126580014br.gov.bcb.pix0136clinicapaulafischer@pix.com.br5204000053039865405' + currentTotal + '5802BR5925DRA PAULA FISCHER6009SAO PAULO62070503***6304';
    navigator.clipboard.writeText(pixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !whatsapp.trim() || !email.trim()) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    setTimeout(() => {
      setIsProcessing(false);
      const randomOrder = 'PF-' + Math.floor(100000 + Math.random() * 900000);
      const itemsSummary = items
        .map((i) => `${i.quantity}x ${i.product.title}`)
        .join(', ') + (includeOrderBump ? ' + Manual de Precificação' : '');

      onSuccessOrder({
        orderNumber: randomOrder,
        customerName,
        whatsapp,
        email,
        audienceType,
        total: currentTotal,
        paymentMethod,
        itemsSummary,
      });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in text-stone-800">
      <div
        id="checkout-modal-container"
        className="relative w-full max-w-2xl bg-[#faf8f5] rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[95vh] flex flex-col"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-stone-900 text-stone-100 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span className="font-serif-luxury text-lg sm:text-xl font-bold text-stone-100">
              Checkout Seguro • Clínica Dra. Paula Fischer
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Checkout Form */}
        <form onSubmit={handleSubmitOrder} className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">
          {/* Step 1: Customer Info */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-800 text-xs flex items-center justify-center font-bold">
                1
              </span>
              <span>Identificação do Cliente / Aluno(a)</span>
            </h3>

            {/* Audience toggle */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setAudienceType('profissional')}
                className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-1.5 font-medium transition-all ${
                  audienceType === 'profissional'
                    ? 'bg-stone-900 text-amber-300 border-stone-900 shadow'
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Sou Profissional da Estética</span>
              </button>

              <button
                type="button"
                onClick={() => setAudienceType('paciente')}
                className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-1.5 font-medium transition-all ${
                  audienceType === 'paciente'
                    ? 'bg-stone-900 text-rose-300 border-stone-900 shadow'
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                }`}
              >
                <Heart className="w-3.5 h-3.5" />
                <span>Sou Paciente da Clínica</span>
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Nome Completo *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Ex: Dra. Camila Santos ou Ana Silva"
                    className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-stone-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    WhatsApp (com DDD) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600" />
                    <input
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-stone-50/50"
                    />
                  </div>
                  <span className="text-[10px] text-stone-500 mt-0.5 block">
                    Para envio imediato do acesso e confirmação clínica.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    E-mail Principal *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seuemail@exemplo.com"
                      className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-stone-50/50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Order Bump */}
          <div
            className={`p-4 rounded-2xl border transition-all ${
              includeOrderBump
                ? 'bg-amber-50 border-amber-400 shadow-xs'
                : 'bg-white border-stone-200'
            }`}
          >
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includeOrderBump}
                onChange={(e) => onToggleOrderBump(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-amber-400 text-amber-600 focus:ring-amber-500 cursor-pointer"
              />
              <div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] font-bold uppercase bg-amber-500 text-stone-950 px-1.5 py-0.2 rounded">
                    ⚡ Oferta Especial no Checkout
                  </span>
                  <span className="text-xs text-stone-400 line-through">
                    De R$ {ORDER_BUMP.originalPrice}
                  </span>
                  <span className="text-xs font-bold text-emerald-800">
                    Por apenas +R$ {ORDER_BUMP.price},00
                  </span>
                </div>
                <h4 className="text-xs font-bold text-stone-900 mt-1">{ORDER_BUMP.title}</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">{ORDER_BUMP.description}</p>
              </div>
            </label>
          </div>

          {/* Step 3: Payment Method */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-800 text-xs flex items-center justify-center font-bold">
                2
              </span>
              <span>Forma de Pagamento</span>
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('pix')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  paymentMethod === 'pix'
                    ? 'border-emerald-500 bg-emerald-50/60 ring-1 ring-emerald-500'
                    : 'border-stone-200 bg-stone-50 hover:bg-stone-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <QrCode className="w-5 h-5 text-emerald-700" />
                  <span className="text-[10px] font-bold bg-emerald-600 text-white px-1.5 py-0.2 rounded">
                    -5% EXTRA
                  </span>
                </div>
                <div className="text-xs font-bold text-stone-900 mt-2">PIX Instantâneo</div>
                <div className="text-[11px] text-stone-600">Aprovação em segundos</div>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('cartao')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  paymentMethod === 'cartao'
                    ? 'border-amber-500 bg-amber-50/60 ring-1 ring-amber-500'
                    : 'border-stone-200 bg-stone-50 hover:bg-stone-100'
                }`}
              >
                <CreditCard className="w-5 h-5 text-amber-700" />
                <div className="text-xs font-bold text-stone-900 mt-2">Cartão de Crédito</div>
                <div className="text-[11px] text-stone-600">Até 12x no cartão</div>
              </button>
            </div>

            {/* Pix View */}
            {paymentMethod === 'pix' && (
              <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-950">Total no Pix com 5% de desconto:</span>
                  <span className="font-bold text-base text-emerald-800">
                    R$ {pixFinal.toLocaleString('pt-BR')}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-3 rounded-xl border border-emerald-200">
                  <div className="w-24 h-24 bg-stone-100 rounded-lg flex items-center justify-center shrink-0 border border-stone-200">
                    <QrCode className="w-16 h-16 text-stone-800" />
                  </div>
                  <div className="flex-1 space-y-1 text-center sm:text-left">
                    <div className="text-xs font-bold text-stone-900">Chave Pix Copia e Cola Oficial</div>
                    <p className="text-[11px] text-stone-500">
                      O código Pix é gerado instantaneamente e reservará sua vaga/agendamento.
                    </p>
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="mt-1 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-medium transition-colors"
                    >
                      {copiedPix ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedPix ? 'Código Pix Copiado!' : 'Copiar Código Pix'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Card View */}
            {paymentMethod === 'cartao' && (
              <div className="space-y-3 p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Número de Parcelas
                  </label>
                  <select
                    value={installmentsCount}
                    onChange={(e) => setInstallmentsCount(Number(e.target.value))}
                    className="w-full p-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl bg-white focus:ring-1 focus:ring-amber-500"
                  >
                    {[1, 2, 3, 6, 10, 12].map((n) => {
                      const installmentVal = (totalRaw / n).toFixed(2).replace('.', ',');
                      return (
                        <option key={n} value={n}>
                          {n}x de R$ {installmentVal} {n === 1 ? '(à vista)' : ''}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Número do Cartão"
                    className="p-2.5 text-xs border border-stone-300 rounded-xl bg-white"
                  />
                  <input
                    type="text"
                    placeholder="Nome Impresso no Cartão"
                    className="p-2.5 text-xs border border-stone-300 rounded-xl bg-white"
                  />
                  <input
                    type="text"
                    placeholder="Validade (MM/AA)"
                    className="p-2.5 text-xs border border-stone-300 rounded-xl bg-white"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="p-2.5 text-xs border border-stone-300 rounded-xl bg-white"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Order Summary box */}
          <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 text-xs space-y-1.5">
            <div className="font-bold text-stone-900 mb-1">Resumo do Pedido:</div>
            {items.map((i) => (
              <div key={i.product.id} className="flex justify-between text-stone-700">
                <span className="line-clamp-1">{i.quantity}x {i.product.title}</span>
                <span className="shrink-0 font-medium">R$ {(i.product.price * i.quantity).toLocaleString('pt-BR')}</span>
              </div>
            ))}
            {includeOrderBump && (
              <div className="flex justify-between text-amber-800 font-medium">
                <span>1x Manual de Precificação & Vendas</span>
                <span>+ R$ {ORDER_BUMP.price},00</span>
              </div>
            )}
            <div className="pt-2 border-t border-stone-200 flex justify-between font-bold text-sm text-stone-950">
              <span>Total Final</span>
              <span>R$ {currentTotal.toLocaleString('pt-BR')}</span>
            </div>
          </div>

          {errorMessage && (
            <p className="text-xs text-rose-600 bg-rose-50 p-2.5 rounded-lg border border-rose-200">
              {errorMessage}
            </p>
          )}

          {/* Submit Button */}
          <div className="space-y-2">
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-sm shadow-xl shadow-amber-950/20 transition-all active:scale-95 disabled:opacity-50"
            >
              {isProcessing
                ? 'Processando seu pedido com segurança...'
                : `Confirmar Pedido • R$ ${currentTotal.toLocaleString('pt-BR')}`}
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Garantia de 7 dias • Seus dados estão criptografados de ponta a ponta</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
