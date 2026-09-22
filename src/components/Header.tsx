import React from 'react';
import { ShoppingBag, Search, Sparkles, GraduationCap, Heart, Phone, MapPin } from 'lucide-react';
import { AudienceType, ProductCategory } from '../types';
import { CLINIC_INFO } from '../data/products';

interface HeaderProps {
  selectedAudience: AudienceType;
  onSelectAudience: (audience: AudienceType) => void;
  selectedCategory: ProductCategory | 'todos';
  onSelectCategory: (category: ProductCategory | 'todos') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenAbout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  selectedAudience,
  onSelectAudience,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  cartCount,
  onOpenCart,
  onOpenAbout,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 shadow-md">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 border-b border-amber-900/40 text-amber-200/90 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-amber-100">Clínica Oficial Dra. Paula Fischer</span>
            <span className="hidden md:inline text-stone-400">•</span>
            <span className="hidden md:inline text-amber-200/80">Entrega Digital Imediata & Agendamentos VIP</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent('Olá Dra. Paula Fischer! Gostaria de tirar dúvidas sobre os protocolos e treinamentos.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-stone-600">|</span>
            <span className="hidden sm:flex items-center gap-1 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{CLINIC_INFO.address}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => { onSelectCategory('todos'); onSelectAudience('todos'); }}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 to-amber-300 p-0.5 shadow-lg shadow-amber-900/30 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-stone-900 flex items-center justify-center text-amber-300 font-serif-luxury font-bold text-lg">
                PF
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-tight text-stone-100">
                  Dra. Paula Fischer
                </span>
                <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                  Oficial
                </span>
              </div>
              <p className="text-[11px] text-stone-400 font-light tracking-wide">
                Protocolos Estéticos & Capacitações de Alta Performance
              </p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Buscar por laser CO2, ninfoplastia, PRP, mentoria..."
                className="w-full bg-stone-800/90 text-stone-200 placeholder-stone-400 text-sm rounded-full pl-10 pr-4 py-2 border border-stone-700 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-200 text-xs"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAbout}
              className="hidden lg:flex items-center gap-1 text-xs text-stone-300 hover:text-amber-300 transition-colors py-2 px-3 rounded-lg hover:bg-stone-800"
            >
              <span>Sobre a Dra. Paula</span>
            </button>

            {/* Cart Trigger */}
            <button
              id="cart-trigger-button"
              onClick={onOpenCart}
              className="relative flex items-center gap-2.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-semibold px-4 py-2.5 rounded-full shadow-lg shadow-amber-950/40 transition-all transform active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs tracking-wide uppercase font-bold">Sacola</span>
              <span className="w-5 h-5 rounded-full bg-stone-950 text-amber-300 text-xs flex items-center justify-center font-bold">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-3 md:hidden">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar por laser, mentoria, PRP..."
              className="w-full bg-stone-800 text-stone-200 placeholder-stone-400 text-sm rounded-full pl-10 pr-4 py-2 border border-stone-700 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Audience Segment Switcher Tabs */}
        <div className="mt-3 pt-3 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 bg-stone-800/80 p-1 rounded-xl border border-stone-700/60">
            <span className="text-[11px] text-stone-400 px-2 font-medium hidden sm:inline">Ver para:</span>
            <button
              id="tab-audience-todos"
              onClick={() => onSelectAudience('todos')}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                selectedAudience === 'todos'
                  ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                  : 'text-stone-300 hover:text-white hover:bg-stone-700/50'
              }`}
            >
              Todos
            </button>
            <button
              id="tab-audience-profissional"
              onClick={() => onSelectAudience('profissional')}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all ${
                selectedAudience === 'profissional'
                  ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                  : 'text-stone-300 hover:text-white hover:bg-stone-700/50'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Para Profissionais</span>
            </button>
            <button
              id="tab-audience-paciente"
              onClick={() => onSelectAudience('paciente')}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all ${
                selectedAudience === 'paciente'
                  ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                  : 'text-stone-300 hover:text-white hover:bg-stone-700/50'
              }`}
            >
              <Heart className="w-3.5 h-3.5 text-rose-400" />
              <span>Para Pacientes</span>
            </button>
          </div>

          {/* Categories Quick Links */}
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none text-xs">
            <button
              onClick={() => onSelectCategory('todos')}
              className={`whitespace-nowrap px-3 py-1 rounded-full transition-colors ${
                selectedCategory === 'todos'
                  ? 'bg-stone-100 text-stone-900 font-semibold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Todos os Itens
            </button>
            <button
              onClick={() => onSelectCategory('treinamentos')}
              className={`whitespace-nowrap px-3 py-1 rounded-full transition-colors flex items-center gap-1 ${
                selectedCategory === 'treinamentos'
                  ? 'bg-stone-100 text-stone-900 font-semibold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <GraduationCap className="w-3 h-3" />
              <span>Treinamentos & Imersões</span>
            </button>
            <button
              onClick={() => onSelectCategory('laser-co2')}
              className={`whitespace-nowrap px-3 py-1 rounded-full transition-colors flex items-center gap-1 ${
                selectedCategory === 'laser-co2'
                  ? 'bg-stone-100 text-stone-900 font-semibold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Laser CO2</span>
            </button>
            <button
              onClick={() => onSelectCategory('prp-plasma')}
              className={`whitespace-nowrap px-3 py-1 rounded-full transition-colors ${
                selectedCategory === 'prp-plasma'
                  ? 'bg-stone-100 text-stone-900 font-semibold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              PRP & Plasma Gel
            </button>
            <button
              onClick={() => onSelectCategory('combos')}
              className={`whitespace-nowrap px-3 py-1 rounded-full transition-colors font-medium text-amber-400 border border-amber-500/40 hover:bg-amber-500/10 ${
                selectedCategory === 'combos'
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : ''
              }`}
            >
              ⚡ Kits & Combos (-40%)
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
