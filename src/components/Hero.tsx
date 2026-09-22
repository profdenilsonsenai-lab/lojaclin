import React from 'react';
import { GraduationCap, Heart, ArrowRight, ShieldCheck, Star, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { AudienceType, ProductCategory } from '../types';

interface HeroProps {
  onSelectAudience: (audience: AudienceType) => void;
  onSelectCategory: (category: ProductCategory | 'todos') => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectAudience, onSelectCategory }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-900 to-[#1c1917] text-white pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
      {/* Subtle Luxury Pattern Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Authority Pill Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Referência Nacional em Laser CO2 & Estética Íntima</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-stone-800 text-stone-300 border border-stone-700">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Clínica Médica Própria • São Paulo/SP</span>
          </span>
        </div>

        {/* Main Headline & Subheadline */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-100 leading-tight">
            Protocolos Clínicos de Alta Eficácia &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
              Mentorias Profissionais
            </span>
          </h1>
          <p className="mt-4 text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            Apresentados e entregues no formato de produto para resultados imediatos. Desenvolvidos, testados e validados pessoalmente pela{' '}
            <strong className="text-amber-300 font-medium">Dra. Paula Fischer</strong> em mais de 1.800 atendimentos.
          </p>

          {/* Dra. Paula Fischer Endorsement Pill */}
          <div className="mt-5 inline-flex items-center gap-3 bg-stone-800/90 border border-amber-500/30 rounded-full py-1.5 pl-2 pr-4 shadow-xl shadow-black/40 backdrop-blur-xs">
            <img
              src="/dra-paula-fischer.jpg"
              alt="Dra. Paula Fischer"
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full object-cover object-top border-2 border-amber-400 shadow-xs"
            />
            <div className="text-left">
              <div className="text-xs font-bold text-stone-100 flex items-center gap-1.5">
                <span>Dra. Paula Fischer</span>
                <span className="text-[10px] text-amber-400 bg-amber-500/20 px-1.5 py-0.2 rounded font-semibold">CRM Ativo</span>
              </div>
              <div className="text-[11px] text-stone-400">
                Responsável Técnica & Mentora Oficial
              </div>
            </div>
          </div>
        </div>

        {/* DUAL PATHWAY NAVIGATION CARDS (Strict CRO & Audience Split) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-10">
          {/* Card 1: Para Profissionais de Estética */}
          <div
            onClick={() => {
              onSelectAudience('profissional');
              onSelectCategory('treinamentos');
              const el = document.getElementById('catalog-grid');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative cursor-pointer rounded-2xl bg-gradient-to-br from-stone-800/90 to-stone-900/95 p-6 border border-amber-500/30 hover:border-amber-400 shadow-xl shadow-black/40 hover:shadow-amber-900/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Para Profissionais
              </span>
            </div>

            <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
              Sou profissional da estética — quero me capacitar
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed">
              Imersões e mentorias presenciais VIP de 20 horas em Laser CO2 e Ninfoplastia Sem Corte. Prática hands-on em pacientes, segurança técnica e retorno do investimento em poucas sessões.
            </p>

            <div className="mt-4 pt-4 border-t border-stone-800 flex items-center justify-between">
              <span className="text-xs text-amber-400 font-medium">Turmas reduzidas (Máx. 6 vagas)</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-stone-100 group-hover:translate-x-1 transition-transform">
                <span>Explorar Treinamentos</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </span>
            </div>
          </div>

          {/* Card 2: Para Pacientes */}
          <div
            onClick={() => {
              onSelectAudience('paciente');
              onSelectCategory('todos');
              const el = document.getElementById('catalog-grid');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative cursor-pointer rounded-2xl bg-gradient-to-br from-stone-800/90 to-stone-900/95 p-6 border border-stone-700 hover:border-rose-400/60 shadow-xl shadow-black/40 hover:shadow-rose-950/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-300 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30">
                Para Pacientes
              </span>
            </div>

            <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-stone-100 group-hover:text-rose-300 transition-colors">
              Quero fazer um procedimento na clínica
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed">
              Tratamentos faciais, corporais e íntimos com Laser CO2 e Bioestimuladores Autólogos (PRP & Plasma Gel). Conforto, segurança médica e resultados visíveis e naturais.
            </p>

            <div className="mt-4 pt-4 border-t border-stone-800 flex items-center justify-between">
              <span className="text-xs text-rose-400 font-medium">Avaliação & Agendamento VIP</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-stone-100 group-hover:translate-x-1 transition-transform">
                <span>Ver Protocolos Clínicos</span>
                <ArrowRight className="w-3.5 h-3.5 text-rose-400" />
              </span>
            </div>
          </div>
        </div>

        {/* Social Proof & Trust Metrics Strip */}
        <div className="max-w-4xl mx-auto rounded-xl bg-stone-900/80 border border-stone-800 p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-2 border-r border-stone-800/80 last:border-none">
            <div className="text-xl sm:text-2xl font-bold text-amber-300 font-serif-luxury">+1.800</div>
            <div className="text-[11px] text-stone-400 mt-0.5">Pacientes Atendidas</div>
          </div>
          <div className="p-2 border-r border-stone-800/80 last:border-none">
            <div className="text-xl sm:text-2xl font-bold text-amber-300 font-serif-luxury">+450</div>
            <div className="text-[11px] text-stone-400 mt-0.5">Profissionais Formados</div>
          </div>
          <div className="p-2 border-r border-stone-800/80 last:border-none">
            <div className="flex items-center justify-center gap-1 text-xl sm:text-2xl font-bold text-amber-300 font-serif-luxury">
              <span>4.9</span>
              <Star className="w-4 h-4 fill-amber-400 text-amber-400 inline" />
            </div>
            <div className="text-[11px] text-stone-400 mt-0.5">Avaliação Verificada</div>
          </div>
          <div className="p-2">
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-serif-luxury">100%</div>
            <div className="text-[11px] text-stone-400 mt-0.5">Seguro & Biocompatível</div>
          </div>
        </div>
      </div>
    </section>
  );
};
