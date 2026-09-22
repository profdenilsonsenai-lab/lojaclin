import React, { useState } from 'react';
import { Award, ShieldCheck, HeartHandshake, MapPin, Phone, GraduationCap, CheckCircle2, Sparkles, Camera } from 'lucide-react';
import { CLINIC_INFO } from '../data/products';

export const AuthoritySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string>('/dra-paula-fischer.jpg');

  return (
    <section id="sobre-dra-paula" className="py-16 bg-[#f5f1ea] border-t border-b border-stone-200/80 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Photo & Clinic Credential Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-950 group">
              <img
                src={selectedPhoto}
                alt="Dra. Paula Fischer - Biomédica Esteta & Mentora"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-[3/4] object-top group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent pointer-events-none" />

              {/* Verified Medical Badge on Top */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-950 bg-amber-400/95 shadow-md px-3 py-1 rounded-full backdrop-blur-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Foto Oficial • Clínica Própria SP
                </span>
              </div>

              {/* Bottom Credential Bar */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300 bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded border border-amber-400/30 inline-block mb-1">
                  Responsável Técnica & Mentora
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Dra. Paula Fischer
                </h3>
                <p className="text-xs text-stone-300 mt-0.5 font-light">
                  {CLINIC_INFO.role}
                </p>
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/20 text-[11px] text-amber-200">
                  <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Referência em Laser CO2 Fracionado & Harmonização</span>
                </div>
              </div>
            </div>

            {/* Thumbnail switcher for real photos */}
            <div className="max-w-sm mx-auto mt-3 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedPhoto('/dra-paula-fischer.jpg')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  selectedPhoto === '/dra-paula-fischer.jpg'
                    ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-sm font-bold'
                    : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Retrato Oficial</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedPhoto('/dra-paula-laser-co2.jpg')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  selectedPhoto === '/dra-paula-laser-co2.jpg'
                    ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-sm font-bold'
                    : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Laser CO2 em Ação</span>
              </button>
            </div>

            {/* Float badge */}
            <div className="hidden sm:flex absolute -bottom-5 -right-2 sm:right-2 bg-white p-3.5 rounded-2xl shadow-xl border border-stone-200 items-center gap-3 z-10">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 text-stone-950 flex items-center justify-center font-bold shadow-sm">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-stone-900">+450 Profissionais Formados</div>
                <div className="text-[10px] text-stone-500">Capacitação VIP & Prática Hospitalar</div>
              </div>
            </div>
          </div>

          {/* Storytelling & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-200">
                Autoridade Médica & Compromisso com a Verdade Clínica
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-950 mt-3 leading-tight">
                Ciência, Elegância e Prática Sem Enrolação
              </h2>
            </div>

            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
              "Acredito que a estética moderna deve potencializar a beleza natural de cada pessoa, sem criar rostos congelados ou corpos caricatos. Por isso, fundei a{' '}
              <strong className="text-stone-900 font-semibold">{CLINIC_INFO.name}</strong> com foco estrito em tecnologias de padrão ouro como o{' '}
              <strong>Laser CO2 Fracionado</strong> e tratamentos biológicos autólogos como o <strong>PRP e Plasma Gel</strong>."
            </p>

            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
              Como mentora, meu objetivo é desmistificar parâmetros clínicos e ensinar profissionais a atenderem com segurança hospitalar, eliminando o medo de intercorrências e estruturando negócios estéticos de alto faturamento.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-stone-200/80 shadow-xs">
                <ShieldCheck className="w-6 h-6 text-emerald-700 mb-2" />
                <h4 className="text-xs font-bold text-stone-900">Segurança Máxima</h4>
                <p className="text-[11px] text-stone-600 mt-1">
                  Parâmetros calibrados para zero intercorrências e total biossegurança.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-stone-200/80 shadow-xs">
                <GraduationCap className="w-6 h-6 text-amber-700 mb-2" />
                <h4 className="text-xs font-bold text-stone-900">Formação VIP</h4>
                <p className="text-[11px] text-stone-600 mt-1">
                  Turmas reduzidas com prática real em pacientes na clínica própria.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-stone-200/80 shadow-xs">
                <HeartHandshake className="w-6 h-6 text-rose-700 mb-2" />
                <h4 className="text-xs font-bold text-stone-900">Acolhimento Íntimo</h4>
                <p className="text-[11px] text-stone-600 mt-1">
                  Atendimento humanizado e sem julgamentos na ginecoestética.
                </p>
              </div>
            </div>

            {/* Physical Address Banner */}
            <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Sede Clínica em São Paulo:</div>
                  <div className="text-xs text-stone-300">{CLINIC_INFO.address} • {CLINIC_INFO.city}</div>
                </div>
              </div>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent('Olá Dra. Paula Fischer! Gostaria de agendar uma visita/consulta.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs whitespace-nowrap transition-colors"
              >
                Agendar Visita
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
