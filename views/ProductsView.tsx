import { PACKAGES } from '../data';
import { PageTab } from '../types';

interface ProductsViewProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenOrderModal: (title: string, price: string) => void;
}

export function ProductsView({ onSelectTab, onOpenOrderModal }: ProductsViewProps) {
  const handleApplyForm = () => {
    onSelectTab('home');
    setTimeout(() => {
      document.getElementById('start-cooperation')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="py-14 sm:py-18 bg-[#0a254d] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge-gold mb-3">فرصت‌های فعال همکاری</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            بسته‌ها و خدمات استخدامی ادمین سنتر
          </h1>
          <p className="text-sm sm:text-base text-[#b0c7f8] leading-relaxed max-w-2xl mx-auto">
            بدون هیچ پیش‌نیاز پیچیده، بسته استخدامی متناسب با زمان آزاد خود را انتخاب کرده و ظرف ۲ ساعت آینده کار پاسخگویی و کسب درآمد روزانه خود را آغاز نمایید.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 sm:py-20 bg-[#f9f9ff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PACKAGES.map((pkg) => {
              const isMain = pkg.id === 'main-package';
              return (
                <div
                  key={pkg.id}
                  className={`glass-card p-6 sm:p-8 flex flex-col justify-between relative shadow-lg ${
                    isMain ? 'border-2 border-[#fabc4f]' : ''
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3.5 right-6">
                      <span
                        className={`font-black text-xs px-3 py-1 rounded-full shadow-sm ${
                          pkg.badgeColor === 'gold'
                            ? 'bg-[#fabc4f] text-[#513600]'
                            : pkg.badgeColor === 'emerald'
                            ? 'bg-[#d1fae5] text-[#065f46]'
                            : 'bg-[#d8e2ff] text-[#0040a1]'
                        }`}
                      >
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4 mt-2">
                      <h3 className="text-xl font-black text-[#0a254d]">{pkg.title}</h3>
                      {isMain && (
                        <span className="text-xs bg-[#e1e8ff] text-[#1e5bba] font-bold px-2.5 py-1 rounded-lg">
                          اصلی
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed mb-6 text-justify">
                      {pkg.description}
                    </p>

                    <div className="p-4 rounded-xl bg-[#f1f3ff] border border-[#e1e8ff] mb-6 flex items-center justify-between">
                      <span className="text-xs text-slate-500">تعرفه بسته:</span>
                      <span className="text-xl font-black text-[#0a254d]">
                        {pkg.price} <span className="text-xs font-normal text-slate-600">{pkg.priceNote}</span>
                      </span>
                    </div>

                    <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#44474e] mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                            check_circle
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#e1e8ff]">
                    <button
                      type="button"
                      className="btn-telegram text-xs flex-1 flex items-center justify-center gap-1.5"
                      onClick={() => onOpenOrderModal(pkg.title, `${pkg.price} ${pkg.priceNote || ''}`)}
                    >
                      <span className="material-symbols-outlined text-[18px]">send</span>
                      <span>سفارش در بله / تلگرام</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleApplyForm}
                      className="btn-navy text-xs text-center"
                    >
                      تکمیل فرم آنلاین
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Immediate Ordering Callout */}
      <section className="py-14 bg-[#243b64] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            سوالی درباره بسته‌ها دارید یا می‌خواهید سریع‌تر شروع کنید؟
          </h2>
          <p className="text-xs sm:text-sm text-[#b0c7f8] mb-6 leading-relaxed">
            کافی است نام و نام‌خانوادگی خود را به شناسه رسمی ما در پیام‌رسان بله یا تلگرام ارسال فرمایید تا کمتر از چند دقیقه پاسخ داده شود:
          </p>
          <button
            type="button"
            className="btn-gold py-3 px-8 text-sm flex items-center justify-center gap-2 mx-auto"
            onClick={() => onOpenOrderModal('مشاوره سریع استخدامی ادمین سنتر', 'رایگان')}
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>گفتگوی فوری در بله یا تلگرام</span>
          </button>
        </div>
      </section>
    </div>
  );
}
