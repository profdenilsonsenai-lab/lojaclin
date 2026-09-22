import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { PostPurchaseUpsellModal } from './components/PostPurchaseUpsellModal';
import { CombosSection } from './components/CombosSection';
import { AuthoritySection } from './components/AuthoritySection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { PRODUCTS, CLINIC_INFO } from './data/products';
import { Product, CartItem, AudienceType, ProductCategory } from './types';
import { Sparkles, GraduationCap, Heart, CheckCircle2, ShieldCheck, Filter, ArrowDown } from 'lucide-react';

export default function App() {
  const [selectedAudience, setSelectedAudience] = useState<AudienceType>('todos');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'todos'>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Cart and Modals
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [includeOrderBump, setIncludeOrderBump] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [completedOrder, setCompletedOrder] = useState<any | null>(null);

  // Filtered Products Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Audience Filter
      if (selectedAudience !== 'todos') {
        if (product.audience !== 'ambos' && product.audience !== selectedAudience) {
          return false;
        }
      }

      // Category Filter
      if (selectedCategory !== 'todos') {
        if (product.category !== selectedCategory) {
          return false;
        }
      }

      // Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = product.title.toLowerCase().includes(q);
        const matchesOriginal = product.originalName.toLowerCase().includes(q);
        const matchesBullets = product.benefitBullets.some((b) => b.toLowerCase().includes(q));
        const matchesCategory = product.categoryLabel.toLowerCase().includes(q);
        if (!matchesTitle && !matchesOriginal && !matchesBullets && !matchesCategory) {
          return false;
        }
      }

      return true;
    });
  }, [selectedAudience, selectedCategory, searchQuery]);

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    setToastMessage(`✓ "${product.title}" adicionado à sacola!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleProceedToCheckout = (coupon: string | null, bump: boolean) => {
    setAppliedCoupon(coupon);
    setIncludeOrderBump(bump);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleSuccessOrder = (order: any) => {
    setIsCheckoutOpen(false);
    setCartItems([]);
    setCompletedOrder(order);
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col selection:bg-amber-100 selection:text-amber-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-stone-900 text-amber-300 text-xs font-semibold px-4 py-3 rounded-2xl shadow-2xl border border-amber-500/40 flex items-center gap-2 animate-slide-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 underline text-white hover:text-amber-200 text-xs"
          >
            Ver Sacola
          </button>
        </div>
      )}

      {/* Header */}
      <Header
        selectedAudience={selectedAudience}
        onSelectAudience={setSelectedAudience}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAbout={() => {
          const el = document.getElementById('sobre-dra-paula');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Hero with Dual Pathway Audience Split */}
      <Hero
        onSelectAudience={setSelectedAudience}
        onSelectCategory={setSelectedCategory}
      />

      {/* Main Catalog Section */}
      <main id="catalog-grid" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dynamic Category/Audience Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>
                {selectedAudience === 'profissional'
                  ? 'Catálogo Exclusivo Para Profissionais da Estética'
                  : selectedAudience === 'paciente'
                  ? 'Protocolos Clínicos Presenciais Para Pacientes'
                  : 'Catálogo Geral • Produtos de Prateleira'}
              </span>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-900">
              {selectedCategory === 'treinamentos'
                ? 'Treinamentos & Imersões VIP (20 Horas)'
                : selectedCategory === 'laser-co2'
                ? 'Protocolos a Laser CO2 Fracionado'
                : selectedCategory === 'prp-plasma'
                ? 'Protocolos PRP & Plasma Gel Autólogos'
                : selectedCategory === 'combos'
                ? 'Kits & Combos com Maior Desconto'
                : 'Todos os Protocolos & Treinamentos'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Mostrando {filteredProducts.length} itens disponíveis para compra e agendamento imediato.
            </p>
          </div>

          {/* Active filter reset pill */}
          {(selectedAudience !== 'todos' || selectedCategory !== 'todos' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedAudience('todos');
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 transition-colors self-start sm:self-auto"
            >
              <Filter className="w-3 h-3" />
              <span>Limpar Filtros</span>
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200/80 p-8 space-y-4 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
              <Filter className="w-8 h-8" />
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-stone-900">
              Nenhum produto encontrado para estes filtros
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
              Tente redefinir a busca ou alternar entre o público para profissionais e pacientes.
            </p>
            <button
              onClick={() => {
                setSelectedAudience('todos');
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="py-2.5 px-5 rounded-xl bg-stone-900 text-amber-300 text-xs font-semibold hover:bg-stone-800 transition-colors"
            >
              Exibir Todo o Catálogo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={setSelectedProduct}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </main>

      {/* Featured Combos Section */}
      <CombosSection
        onOpenDetails={setSelectedProduct}
        onAddToCart={handleAddToCart}
      />

      {/* Authority & Storytelling Section */}
      <AuthoritySection />

      {/* Footer */}
      <Footer onSelectCategory={setSelectedCategory} />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onSelectProduct={setSelectedProduct}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
        includeOrderBump={includeOrderBump}
        onToggleOrderBump={setIncludeOrderBump}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        appliedCoupon={appliedCoupon}
        includeOrderBump={includeOrderBump}
        onToggleOrderBump={setIncludeOrderBump}
        onSuccessOrder={handleSuccessOrder}
      />

      <PostPurchaseUpsellModal
        isOpen={Boolean(completedOrder)}
        onClose={() => setCompletedOrder(null)}
        orderDetails={completedOrder}
      />
    </div>
  );
}
