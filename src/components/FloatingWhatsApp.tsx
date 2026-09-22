import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    'Olá Dra. Paula Fischer! Acessei a loja virtual e gostaria de tirar dúvidas sobre os protocolos e imersões presenciais.'
  );
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${defaultMessage}`;

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative bg-white text-stone-800 p-3.5 rounded-2xl shadow-xl border border-stone-200 text-xs max-w-xs animate-bounce-subtle">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-stone-800 text-white flex items-center justify-center text-[10px] hover:bg-stone-900 transition-colors shadow"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-1.5 font-bold text-stone-900 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Clínica Dra. Paula Fischer</span>
          </div>
          <p className="text-[11px] text-stone-600 leading-relaxed">
            Dúvidas sobre protocolos ou quer agendar sua vaga presencial? Fale agora no WhatsApp: <strong>{CLINIC_INFO.phone}</strong>.
          </p>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-950/40 transition-all transform hover:scale-105 active:scale-95"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping"></span>
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          WhatsApp Oficial
        </span>
      </a>
    </aside>
  );
};
