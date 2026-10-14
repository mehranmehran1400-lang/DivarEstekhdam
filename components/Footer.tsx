import { PageTab } from '../types';
import { BANK_CARD_INFO, IMAGES } from '../data';

interface FooterProps {
  onSelectTab: (tab: PageTab) => void;
}

export function Footer({ onSelectTab }: FooterProps) {
  const handleNav = (tab: PageTab) => {
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fullAddress = 'تهران، صادقیه، فلکه دوم، جنب املاک خورشید';
  const baladSearchUrl = 'https://balad.ir/search?query=%D8%A7%D8%AF%D9%85%DB%8C%D9%86+%D8%B3%D9%86%D8%AA%D8%B1';

  return (
    <footer className="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* PRE-FOOTER: IN-PERSON ADDRESS & 5-STAR ENAMAD OPPORTUNITY CARD */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0d234a] via-[#143265] to-[#0a1e3d] border-2 border-[#fabc4f]/60 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Right: Address & Cooperation Opportunity (8 Cols) */}
            <div className="lg:col-span-8 flex flex-col gap-4 text-right">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#fabc4f] text-[#0a254d] text-xs font-black shadow-sm">
                  فرصت همکاری استثنایی و تضمین درآمد
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-xs font-bold">
                  تسویه هر شب ساعت ۱۲
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                فرصت همکاری فعال با پلتفرم مرجع ادمین سنتر
              </h3>

              <p className="text-xs sm:text-sm text-[#b0c7f8] leading-relaxed text-justify">
                سامانه ادمین سنتر با فراهم آوردن آموزش رایگان، متریال آماده و پشتیبانی مستمر مدیریت (مهران نعمتی)، بستری ایجاد کرده تا بدون سرمایه اولیه و محدودیت زمانی مشغول به کار شوید. <strong className="text-[#fabc4f]">درآمد روزانه ۱ میلیون و ۵۰۰ به بالا داری و هرشب برات واریز میشه!</strong> همکاری هم به‌صورت آنلاین و دورکاری از سراسر کشور و هم به‌صورت حضور در دفتر فراهم است.
              </p>

              {/* Exact Physical Address Box */}
              <div className="p-4 rounded-2xl bg-[#0a1b36] border border-[#fabc4f]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-right">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#fabc4f]/20 text-[#fabc4f] flex items-center justify-center shrink-0 border border-[#fabc4f]/30">
                    <span className="material-symbols-outlined text-[24px]">location_on</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-[#b0c7f8] font-medium">نشانی رسمی جهت مراجعه حضوری به دفتر:</span>
                    <strong className="text-sm sm:text-base text-white font-extrabold tracking-tight">
                      {fullAddress}
                    </strong>
                    <span className="text-[11px] text-[#86efac] mt-0.5">
                      در فلکه دوم به هرکی بگید ادمین سنتر میشناسه و راهنماییتون میکنه
                    </span>
                  </div>
                </div>

                <a
                  href={baladSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-xs py-2 px-4 shrink-0 flex items-center gap-1.5 self-end sm:self-center"
                >
                  <span className="material-symbols-outlined text-[16px]">near_me</span>
                  <span>مسیریابی در بلد</span>
                </a>
              </div>
            </div>

            {/* Left: Beautiful 5-Star e-Namad Badge (4 Cols) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative group p-5 rounded-2xl bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-800 shadow-2xl border-2 border-[#fabc4f] w-full max-w-xs text-center transform hover:scale-105 transition-all duration-300">
                
                {/* Official e-Namad Emblem Artwork */}
                <div className="relative mx-auto w-20 h-20 mb-3 flex items-center justify-center">
                  {/* Outer Shield Glow */}
                  <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-sm"></div>
                  
                  {/* e-Namad Logo SVG */}
                  <svg className="w-20 h-20 drop-shadow-md" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Outer Shield / Hexagon in Cobalt Blue */}
                    <polygon points="50,4 92,25 92,75 50,96 8,75 8,25" fill="#0c4a6e" stroke="#fabc4f" strokeWidth="3" />
                    <polygon points="50,9 87,28 87,72 50,91 13,72 13,28" fill="#0284c7" opacity="0.85" />
                    
                    {/* The Iconic e-Namad Persian/Latin 'e' Spiral Swirl */}
                    <path
                      d="M 50 24 C 62 24 72 32 72 44 C 72 56 60 64 48 64 C 36 64 30 54 30 46 C 30 36 40 28 52 28 C 60 28 66 33 66 38 C 66 42 63 45 58 45 C 50 45 42 41 40 47 C 38 52 44 56 50 56 C 58 56 64 50 64 44"
                      stroke="#ffffff"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <circle cx="50" cy="45" r="3.5" fill="#fabc4f" />
                  </svg>

                  {/* Corner Verified Checkmark */}
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center border-2 border-white shadow">
                    <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                  </div>
                </div>

                {/* 5 GOLDEN STARS (⭐⭐⭐⭐⭐) */}
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="material-symbols-outlined text-[#eab308] text-[22px] drop-shadow-[0_2px_4px_rgba(234,179,8,0.5)] fill-current"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>

                <div className="flex flex-col">
                  <span className="font-black text-sm text-[#0a254d]">نماد اعتماد الکترونیکی</span>
                  <span className="text-[11px] font-bold text-emerald-700 mt-0.5">
                    صلاحیت کسب‌وکار تایید شده (۵ ستاره)
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1 pt-1.5 border-t border-slate-200">
                    احراز هویت، صلاحیت اداری و اعتبار مکانی
                  </span>
                </div>

                <div className="mt-2.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-300 text-[10px] font-bold text-emerald-900">
                  وضعیت نماد: فعال و دارای اصالت رسمی
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* MAIN FOOTER 4-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#243b64]/60 text-right">
          
          {/* Col 1: Brand & Logo */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#fabc4f]/60 shadow-sm shrink-0">
                <img alt="لوگوی ادمین سنتر (AC)" className="w-full h-full object-cover" src={IMAGES.logo} />
              </div>
              <div>
                <span className="text-xl font-black text-[#ffdead] block leading-tight">ادمین سنتر</span>
                <span className="text-[10px] text-[#86efac] font-bold">Admin Center (AC)</span>
              </div>
            </div>
            <p className="text-xs text-[#b0c7f8] font-medium mb-2">مدیریت عالی: مهران نعمتی</p>
            <p className="text-xs text-[#d9e2fc]/80 leading-relaxed text-justify mb-3">
              ادمین سنتر پلتفرم تخصصی آموزش و هماهنگی ادمین‌های پاسخگویی است و هیچ‌گونه ادعای وابستگی به سازمان‌های دولتی، دیوار یا استخدام دولتی ندارد.
            </p>
            <div className="text-[11px] text-[#fabc4f] font-bold">
              درآمد روزانه ۱.۵ تا ۲ میلیون تومان با تسویه شبانه
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <span className="text-sm sm:text-base font-bold text-[#d8e2ff] block mb-3">
              صفحات و دسترسی سریع
            </span>
            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={() => handleNav('home')}
                className="footer-link text-right"
              >
                صفحه اصلی
              </button>
              <button
                type="button"
                onClick={() => handleNav('products')}
                className="footer-link text-right"
              >
                بسته‌های استخدامی و خدمات
              </button>
              <button
                type="button"
                onClick={() => handleNav('about')}
                className="footer-link text-right"
              >
                درباره ما و شفافیت قانونی
              </button>
              <button
                type="button"
                onClick={() => handleNav('contact')}
                className="footer-link text-right"
              >
                تماس، پشتیبانی و بازرسی
              </button>
            </div>
          </div>

          {/* Col 3: Support, Channels & In-Person Address */}
          <div>
            <span className="text-sm sm:text-base font-bold text-[#d8e2ff] block mb-3">
              پشتیبانی و ارتباطات
            </span>
            <p className="text-xs text-[#d9e2fc]/80 mb-1.5">
              کانال و شناسه رسمی پشتیبانی در پیام‌رسان بله:
            </p>
            <a
              className="inline-flex items-center gap-2 text-[#ffdead] text-sm font-bold hover:underline mb-2"
              dir="ltr"
              href={BANK_CARD_INFO.baleUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              <span>{BANK_CARD_INFO.baleId}</span>
            </a>
            
            <div className="flex items-center gap-2 text-[#6b9cff] mb-3">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="text-xs font-medium">کانال تاییدشده و اختصاصی</span>
            </div>

            <div className="pt-2 border-t border-white/10 text-xs text-[#b0c7f8]">
              <span className="text-slate-400 block mb-0.5">آدرس دفتر مرکزی:</span>
              <span className="text-white font-medium">{fullAddress}</span>
            </div>
          </div>

          {/* Col 4: Trust & Guarantees */}
          <div>
            <span className="text-sm sm:text-base font-bold text-[#d8e2ff] block mb-3">
              ضمانت و اعتبار ساختاری
            </span>
            <div className="p-4 rounded-xl bg-[#243b64]/40 border border-[#1e5bba]/30 mb-3">
              <div className="flex items-center gap-2 text-[#6b9cff] mb-1">
                <span className="material-symbols-outlined text-[20px]">security</span>
                <span className="text-xs sm:text-sm font-bold text-white">پروتکل امنیت داده‌ها</span>
              </div>
              <p className="text-xs text-[#b0c7f8] leading-relaxed text-justify">
                کلیه تعاملات و فرآیندهای مالی با بالاترین استانداردهای امنیتی و شفافیت عملیاتی محافظت می‌گردند.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-center gap-2 text-emerald-300 text-xs">
              <span className="material-symbols-outlined text-[20px] text-emerald-400">workspace_premium</span>
              <span className="font-bold">دارای اینماد ۵ ستاره معتبر و فعال</span>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#b0c7f8]">
          <p>© کلیه حقوق مادی و معنوی برای ادمین سنتر محفوظ است.</p>
          <p className="text-[#fabc4f] font-medium">
            زیرساخت نظارتی و توسعه مستقل اداری - مدیریت مهران نعمتی
          </p>
        </div>
      </div>
    </footer>
  );
}
