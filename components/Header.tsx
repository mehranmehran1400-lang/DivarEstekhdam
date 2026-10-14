import { useState } from 'react';
import { PageTab } from '../types';
import { IMAGES } from '../data';

interface HeaderProps {
  currentTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
  onNavigateAnchor: (anchorId: string) => void;
}

export function Header({ currentTab, onSelectTab, onNavigateAnchor }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTabClick = (tab: PageTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnchorClick = (anchorId: string) => {
    onNavigateAnchor(anchorId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="glass-nav">
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand & Logo */}
        <button
          type="button"
          onClick={() => handleTabClick('home')}
          className="flex items-center gap-3 group text-right cursor-pointer"
        >
          <div className="w-11 h-11 rounded-xl overflow-hidden shadow-md border-2 border-[#fabc4f]/70 shrink-0 group-hover:scale-105 transition-transform bg-[#0a254d]">
            <img
              alt="لوگوی ادمین سنتر (AC)"
              className="w-full h-full object-cover"
              src={IMAGES.logo}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg sm:text-xl text-[#0a254d] tracking-tight">
              ادمین سنتر
            </span>
            <span className="text-[11px] sm:text-xs text-[#15803d] font-bold">
              پلتفرم مرجع همکاری ادمین پاسخگوی اپلیکیشن دیوار
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-[#44474e]">
          <button
            type="button"
            onClick={() => handleTabClick('home')}
            className={`transition-colors cursor-pointer pb-1 ${
              currentTab === 'home'
                ? 'text-[#1e5bba] font-bold border-b-2 border-[#1e5bba]'
                : 'hover:text-[#1e5bba]'
            }`}
          >
            صفحه اصلی
          </button>

          <button
            type="button"
            onClick={() => handleTabClick('products')}
            className={`transition-colors cursor-pointer pb-1 ${
              currentTab === 'products'
                ? 'text-[#1e5bba] font-bold border-b-2 border-[#1e5bba]'
                : 'hover:text-[#1e5bba]'
            }`}
          >
            بسته‌ها و خدمات
          </button>

          <button
            type="button"
            onClick={() => handleTabClick('about')}
            className={`transition-colors cursor-pointer pb-1 ${
              currentTab === 'about'
                ? 'text-[#1e5bba] font-bold border-b-2 border-[#1e5bba]'
                : 'hover:text-[#1e5bba]'
            }`}
          >
            درباره ما و شفافیت
          </button>

          <button
            type="button"
            onClick={() => handleAnchorClick('how-it-works')}
            className="hover:text-[#1e5bba] transition-colors cursor-pointer"
          >
            مراحل همکاری
          </button>

          <button
            type="button"
            onClick={() => handleAnchorClick('conditions')}
            className="hover:text-[#1e5bba] transition-colors cursor-pointer"
          >
            شرایط و ضوابط
          </button>

          <button
            type="button"
            onClick={() => handleAnchorClick('faq')}
            className="hover:text-[#1e5bba] transition-colors cursor-pointer"
          >
            سؤالات متداول
          </button>

          <button
            type="button"
            onClick={() => handleTabClick('contact')}
            className={`transition-colors cursor-pointer pb-1 ${
              currentTab === 'contact'
                ? 'text-[#1e5bba] font-bold border-b-2 border-[#1e5bba]'
                : 'hover:text-[#1e5bba]'
            }`}
          >
            تماس و پشتیبانی
          </button>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleAnchorClick('start-cooperation')}
            className="btn-gold hidden sm:inline-flex text-xs py-2 px-4 shadow-sm"
          >
            شروع سریع همکاری
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0a254d] rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="منوی سایت"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-4 shadow-xl transition-all">
          <nav className="flex flex-col gap-2.5 text-right">
            <button
              type="button"
              onClick={() => handleTabClick('home')}
              className={`py-2 px-2 text-right rounded-lg ${
                currentTab === 'home'
                  ? 'bg-blue-50 text-[#1e5bba] font-bold'
                  : 'text-[#44474e] hover:bg-slate-50'
              }`}
            >
              صفحه اصلی
            </button>
            <button
              type="button"
              onClick={() => handleTabClick('products')}
              className={`py-2 px-2 text-right rounded-lg ${
                currentTab === 'products'
                  ? 'bg-blue-50 text-[#1e5bba] font-bold'
                  : 'text-[#44474e] hover:bg-slate-50'
              }`}
            >
              بسته‌ها و خدمات استخدامی
            </button>
            <button
              type="button"
              onClick={() => handleTabClick('about')}
              className={`py-2 px-2 text-right rounded-lg ${
                currentTab === 'about'
                  ? 'bg-blue-50 text-[#1e5bba] font-bold'
                  : 'text-[#44474e] hover:bg-slate-50'
              }`}
            >
              درباره ما و شفافیت قانونی
            </button>
            <button
              type="button"
              onClick={() => handleTabClick('contact')}
              className={`py-2 px-2 text-right rounded-lg ${
                currentTab === 'contact'
                  ? 'bg-blue-50 text-[#1e5bba] font-bold'
                  : 'text-[#44474e] hover:bg-slate-50'
              }`}
            >
              تماس و پشتیبانی رسمی
            </button>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => handleAnchorClick('how-it-works')}
                className="py-1.5 px-2 text-right text-xs text-slate-600 hover:text-[#1e5bba]"
              >
                مراحل ۹ گانه همکاری
              </button>
              <button
                type="button"
                onClick={() => handleAnchorClick('conditions')}
                className="py-1.5 px-2 text-right text-xs text-slate-600 hover:text-[#1e5bba]"
              >
                شرایط و تعهدات کاری
              </button>
              <button
                type="button"
                onClick={() => handleAnchorClick('faq')}
                className="py-1.5 px-2 text-right text-xs text-slate-600 hover:text-[#1e5bba]"
              >
                سؤالات متداول متقاضیان
              </button>
              <button
                type="button"
                onClick={() => handleAnchorClick('start-cooperation')}
                className="btn-gold text-center py-2.5 mt-1 text-xs"
              >
                شروع سریع همکاری (فرم استخدام)
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
