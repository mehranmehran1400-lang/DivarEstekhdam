import { useState } from 'react';
import { FAQ_ITEMS } from '../data';

export function FaqSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q)
    );
  });

  return (
    <section className="py-16 sm:py-20 bg-[#f1f3ff] border-b border-[#d1daf4]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="badge-blue mb-1">پاسخ به ابهامات</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a254d] mt-1">
            پرسش‌های پرتکرار همکاران و متقاضیان
          </h2>
          <p className="text-sm sm:text-base text-[#44474e] mt-2">
            برای شفافیت حداکثری، تمامی سوالات متداول به دقت پاسخ داده شده‌اند:
          </p>
        </div>

        {/* Live Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input pr-12 text-sm shadow-sm"
            placeholder="جستجو در سوالات و موضوعات استخدامی..."
          />
          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#74777f] text-[22px]">
            search
          </span>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded-md"
            >
              پاک کردن
            </button>
          )}
        </div>

        {/* Energy Booster in FAQ */}
        <div className="mb-6 p-3 sm:p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-center gap-2 text-center text-xs sm:text-sm font-black text-emerald-950 shadow-sm">
          <span className="material-symbols-outlined text-emerald-600 text-[20px]">verified</span>
          <span>پاسخ تمام سوالات واضحه: با شروع فعالیت، درآمد روزانه ۱ میلیون و ۵۰۰ به بالا داری و هرشب برات واریز میشه!</span>
        </div>

        {filteredFaqs.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-2xl border border-slate-200">
            <span className="material-symbols-outlined text-slate-400 text-[36px] mb-2 block">
              search_off
            </span>
            <p className="text-sm text-slate-600">
              سوالی مطابق با عبارت «{searchQuery}» پیدا نشد.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs text-[#1e5bba] font-bold hover:underline"
            >
              نمایش همه سوالات
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filteredFaqs.map((faq) => {
              const isOpen = openItems.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="faq-item glass-card overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-5 py-4 flex items-center justify-between text-right text-[#0a254d] font-bold text-sm sm:text-base hover:bg-[#e9edff]/40 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-[#d8e2ff] text-[#1e5bba] text-xs flex items-center justify-center font-mono shrink-0">
                        {faq.id}
                      </span>
                      <span>{faq.question}</span>
                    </span>

                    <span
                      className={`material-symbols-outlined text-[#1e5bba] transition-transform duration-300 text-[22px] shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-[#44474e] border-t border-[#e9edff] leading-relaxed text-justify bg-[#f9f9ff]/70">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
