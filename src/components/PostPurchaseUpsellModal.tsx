import React, { useState } from 'react';
import {
  CheckCircle2,
  X,
  MessageCircle,
  Zap,
  ArrowRight,
  ShieldCheck,
  Gift,
  Clock,
  Sparkles,
} from 'lucide-react';
import { CLINIC_INFO } from '../data/products';

interface PostPurchaseUpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderDetails: {
    orderNumber: string;
    customerName: string;
    whatsapp: string;
    email: string;
    audienceType: 'profissional' | 'paciente';
    total: number;
    paymentMethod: 'pix' | 'cartao';
    itemsSummary: string;
  } | null;
}

export const PostPurchaseUpsellModal: React.FC<PostPurchaseUpsellModalProps> = ({
  isOpen,
  onClose,
  orderDetails,
}) => {
  const [upsellAccepted, setUpsellAccepted] = useState(false);

  if (!isOpen || !orderDetails) return null;

  // Dynamic Upsell product based on audience
  const isProfissional = orderDetails.audienceType === 'profissional';

  const upsellOffer = isProfissional
    ? {
        title: 'UPSELL EXCLUSIVO: Protocolo Clínico Laser CO2 Face Completo',
        subtitle: 'Para você já aplicar o método na sua clínica no dia seguinte à imersão',
        originalPrice: 800,
        specialPrice: 390,
        economy: 410,
        bullets: [
          'Dossiê com parâmetros exatos de mJ e densidade por fototipo',
          'Termo de consentimento (TCLE) formatado para entrega imediata',
          'Guia de prescrição pré e pós-disparo com fórmulas manipuladas',
        ],
      }
    : {
        title: 'UPSELL EXCLUSIVO: Protocolo Laser CO2 Rejuvenescimento de Mãos',
        subtitle: 'Aproveite o mesmo dia do seu procedimento facial e renove também as mãos',
        originalPrice: 500,
        specialPrice: 290,
        economy: 210,
        bullets: [
          'Clareamento de manchas senis e melanoses no dorso das mãos',
          'Aumento da firmeza e turgor da pele das mãos',
          'Procedimento realizado na mesma sessão na Rua Dr. Ângelo Vita',
        ],
      };

  const finalTotal = upsellAccepted
    ? orderDetails.total + upsellOffer.specialPrice
    : orderDetails.total;

  const preFilledMessage = encodeURIComponent(
    `Olá Dra. Paula Fischer e equipe! Acabei de realizar o pedido #${orderDetails.orderNumber} no site no valor de R$ ${finalTotal.toLocaleString('pt-BR')} (${orderDetails.paymentMethod.toUpperCase()}). Meu nome é ${orderDetails.customerName}. Gostaria de confirmar meu acesso/agendamento!`
  );

  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${preFilledMessage}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in text-stone-800">
      <div
        id="post-purchase-modal-container"
        className="relative w-full max-w-2xl bg-[#faf8f5] rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[95vh] flex flex-col"
      >
        {/* Top Celebration Bar */}
        <div className="bg-gradient-to-r from-emerald-900 via-stone-900 to-emerald-950 text-white px-6 py-4 flex items-center justify-between border-b border-emerald-800/40">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Pedido Confirmado com Sucesso!
            </span>
          </div>
          <button onClick={onClose} className="p-1 text-stone-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">
          {/* Success Message Card */}
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 bg-stone-100 text-stone-700 rounded-full border border-stone-200">
              Pedido #{orderDetails.orderNumber}
            </span>

            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-900">
              Parabéns, {orderDetails.customerName}!
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
              Sua solicitação foi registrada no sistema da Clínica Dra. Paula Fischer. O e-mail com as diretrizes e confirmação foi enviado para <strong>{orderDetails.email}</strong>.
            </p>
          </div>

          {/* WhatsApp Direct Confirmation Button */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-emerald-950">
                  Agilize seu Acesso pelo WhatsApp Oficial
                </h4>
                <p className="text-xs text-emerald-800">
                  Fale com a equipe da Dra. Paula no número <strong>{CLINIC_INFO.phone}</strong> para liberação imediata.
                </p>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-950/20 transition-all text-center whitespace-nowrap"
            >
              <span>Abrir no WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* SPECIAL POST-PURCHASE UPSELL (Funil pós-compra do prompt) */}
          <div className="bg-gradient-to-br from-amber-500/15 via-white to-amber-500/10 rounded-2xl p-5 sm:p-6 border-2 border-dashed border-amber-400/80 shadow-md relative overflow-hidden">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase bg-amber-500 text-stone-950 px-2 py-0.5 rounded">
                <Zap className="w-3 h-3" />
                Oportunidade Única Pós-Compra
              </span>
              <span className="text-[11px] text-amber-800 font-medium flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Válido apenas nesta página
              </span>
            </div>

            <h3 className="font-serif-luxury text-xl font-bold text-stone-950">
              {upsellOffer.title}
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              {upsellOffer.subtitle}
            </p>

            <div className="my-4 space-y-1.5">
              {upsellOffer.bullets.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Price box */}
            <div className="flex items-baseline gap-2 pt-2 border-t border-amber-200">
              <span className="text-xs text-stone-400 line-through">
                De R$ {upsellOffer.originalPrice.toLocaleString('pt-BR')}
              </span>
              <span className="font-serif-luxury text-2xl font-bold text-stone-950">
                Por apenas R$ {upsellOffer.specialPrice.toLocaleString('pt-BR')}
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                Economia de R$ {upsellOffer.economy}
              </span>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              {!upsellAccepted ? (
                <button
                  onClick={() => setUpsellAccepted(true)}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-xs shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Sim! Quero adicionar com Desconto Especial</span>
                </button>
              ) : (
                <div className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>✓ Oferta Adicionada ao seu Pedido!</span>
                </div>
              )}

              <button
                onClick={onClose}
                className="py-3 px-4 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-semibold transition-colors"
              >
                Não, obrigado
              </button>
            </div>
          </div>

          {/* Details recap */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200 text-xs space-y-1.5">
            <div className="flex justify-between text-stone-600">
              <span>Cliente:</span>
              <span className="font-semibold text-stone-900">{orderDetails.customerName}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>WhatsApp:</span>
              <span className="font-semibold text-stone-900">{orderDetails.whatsapp}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Forma de Pagamento:</span>
              <span className="font-semibold text-stone-900 uppercase">
                {orderDetails.paymentMethod}
              </span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Endereço da Clínica:</span>
              <span className="font-semibold text-stone-900">{CLINIC_INFO.address}</span>
            </div>
            <div className="pt-2 border-t border-stone-100 flex justify-between font-bold text-sm text-stone-950">
              <span>Total Pago</span>
              <span>R$ {finalTotal.toLocaleString('pt-BR')}</span>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={onClose}
              className="text-xs text-stone-500 hover:text-stone-800 underline"
            >
              Continuar navegando na loja
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
