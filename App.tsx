import { useState, useEffect } from 'react';
import { PageTab } from './types';
import { NoticeBar } from './components/NoticeBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { HomeView } from './views/HomeView';
import { ProductsView } from './views/ProductsView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('home');
  const [orderModal, setOrderModal] = useState<{
    isOpen: boolean;
    packageName: string;
    packagePrice: string;
  }>({
    isOpen: false,
    packageName: '',
    packagePrice: ''
  });

  // Handle URL hash changes for deep linking (e.g. #products, #about, #contact, #faq)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'products' || hash === 'about' || hash === 'contact') {
        setCurrentTab(hash as PageTab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'home' || !hash) {
        setCurrentTab('home');
      } else {
        // In-page anchor on home (e.g. start-cooperation, faq, how-it-works, etc.)
        setCurrentTab('home');
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectTab = (tab: PageTab) => {
    setCurrentTab(tab);
    window.location.hash = tab === 'home' ? '' : tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateAnchor = (anchorId: string) => {
    if (currentTab !== 'home') {
      setCurrentTab('home');
      setTimeout(() => {
        document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenOrderModal = (title: string, price: string) => {
    setOrderModal({
      isOpen: true,
      packageName: title,
      packagePrice: price
    });
  };

  const handleCloseOrderModal = () => {
    setOrderModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9ff] text-[#121b2e] antialiased selection:bg-[#fabc4f] selection:text-[#281900]">
      {/* Fixed Header with Glassmorphism */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onNavigateAnchor={handleNavigateAnchor}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-20">
        <NoticeBar />

        {currentTab === 'home' && (
          <HomeView
            onSelectTab={handleSelectTab}
            onOpenOrderModal={handleOpenOrderModal}
          />
        )}

        {currentTab === 'products' && (
          <ProductsView
            onSelectTab={handleSelectTab}
            onOpenOrderModal={handleOpenOrderModal}
          />
        )}

        {currentTab === 'about' && (
          <AboutView
            onSelectTab={handleSelectTab}
            onOpenOrderModal={handleOpenOrderModal}
          />
        )}

        {currentTab === 'contact' && (
          <ContactView onOpenOrderModal={handleOpenOrderModal} />
        )}
      </main>

      {/* Site Footer */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Modal for Quick Orders & Telegram/Bale Messaging */}
      <OrderModal
        isOpen={orderModal.isOpen}
        onClose={handleCloseOrderModal}
        packageName={orderModal.packageName}
        packagePrice={orderModal.packagePrice}
      />
    </div>
  );
}
