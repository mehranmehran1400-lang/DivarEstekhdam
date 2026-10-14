import { IMAGES } from '../data';

interface HeroProps {
  onStartCooperation: () => void;
  onExploreAbout: () => void;
}

export function Hero({ onStartCooperation, onExploreAbout }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a254d] text-white py-12 sm:py-18" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* 1. BIG MAIN HEADLINE AT THE VERY TOP (نوشته اصلی ابتدای سایت به‌صورت بزرگ) */}
        <div className="flex flex-col gap-4 text-center max-w-5xl mx-auto mb-8 sm:mb-10">
          
          {/* Urgent / Live Status Badge */}
          <div className="inline-flex items-center gap-2 self-center px-4 py-2 rounded-full bg-gradient-to-r from-[#86efac]/20 via-[#4ade80]/25 to-[#86efac]/20 border border-[#86efac]/70 shadow-[0_4px_16px_rgba(134,239,172,0.25)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80] animate-ping"></span>
            <span className="text-xs sm:text-sm text-[#bbf7d0] font-black tracking-wide drop-shadow-[0_1px_6px_rgba(134,239,172,0.3)]">
              پلتفرم مرجع همکاری ادمین پاسخگوی اپلیکیشن دیوار ( ادمین سنتر )
            </span>
          </div>

          {/* THE BIG REQUESTED HEADLINE */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight sm:leading-snug tracking-tight">
            استخدام فوری ادمین پاسخگوی دیوار{' '}
            <span className="text-[#86efac] block sm:inline mt-2 sm:mt-0 drop-shadow-[0_2px_14px_rgba(134,239,172,0.45)]">
              تسویه روزانه ۱/۵۰۰ به بالا
            </span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-bold">
            <div className="px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-400/60 text-emerald-300 flex items-center gap-1.5 shadow-md">
              <span className="material-symbols-outlined text-[18px] text-[#fabc4f]">verified</span>
              <span>دارای نماد اعتماد الکترونیکی (مشاهده در انتهای وبسایت)</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-[#152a4d] border border-[#fabc4f]/50 text-[#ffdead] flex items-center gap-1.5 shadow-md">
              <span className="material-symbols-outlined text-[18px] text-emerald-400">check_circle</span>
              <span>تسویه حساب تضمینی هر شب ساعت ۱۲ | پذیرش فوری متقاضیان فعال</span>
            </div>
          </div>
        </div>

        {/* 2. TWO PHOTOS SIDE-BY-SIDE IN THE MIDDLE (دو عکس کنار هم در زیر تیتر اصلی) */}
        <div className="mb-10 sm:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            
            {/* PHOTO 1: Operations Hall (سالن عملیات و پاسخگویی) */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(10,37,77,0.8)] border-2 border-[#fabc4f]/40 group bg-[#243b64]">
              <div className="relative h-60 sm:h-72 lg:h-84 w-full overflow-hidden">
                <img
                  alt="سالن عملیات و پاسخگویی ادمین سنتر"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={IMAGES.hall}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a254d] via-[#0a254d]/30 to-transparent pointer-events-none"></div>

                {/* Top Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-[#0a254d]/90 backdrop-blur-md text-white rounded-xl text-xs font-bold border border-[#fabc4f]/50 flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>سالن عملیات و پاسخگویی حضوری</span>
                </div>
              </div>

              {/* Bottom Card Overlay */}
              <div className="p-3.5 sm:p-4 bg-[#152a4d] border-t border-[#fabc4f]/30 flex items-center justify-between">
                <div className="flex items-center gap-2.5 sm:gap-3 text-right">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#fabc4f]/20 flex items-center justify-center border border-[#fabc4f]/40 text-[#ffdead] shrink-0">
                    <span className="material-symbols-outlined text-[20px] sm:text-[22px]">monitoring</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] sm:text-xs text-[#b0c7f8]">سامانه مانیتورینگ فعال ادمین سنتر</span>
                    <span className="text-xs sm:text-sm font-bold text-white">بخش نظارت بر چت‌های دیوار</span>
                  </div>
                </div>
                <span className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-black bg-emerald-950/70 text-emerald-400 border border-emerald-500/50 shrink-0 flex items-center gap-1.5 shadow-sm">
                  <span>وضعیت پایدار</span>
                  <span className="material-symbols-outlined text-[#38bdf8] text-[18px]">verified</span>
                </span>
              </div>
            </div>

            {/* PHOTO 2: Office & Management Mehran Nemati (دفتر مرکزی و مدیریت مهران نعمتی) */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(10,37,77,0.8)] border-2 border-[#fabc4f]/40 group bg-[#243b64]">
              <div className="relative h-60 sm:h-72 lg:h-84 w-full overflow-hidden">
                <img
                  alt="دفتر مرکزی و مدیریت مهران نعمتی"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={IMAGES.office}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a254d]/80 via-transparent to-transparent pointer-events-none"></div>

                {/* Top Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-[#0a254d]/90 backdrop-blur-md text-white rounded-xl text-xs font-bold border border-[#fabc4f]/50 flex items-center gap-1.5 shadow-lg">
                  <span className="material-symbols-outlined text-[#fabc4f] text-[18px]">verified</span>
                  <span>دفتر مرکزی و مدیریت عالی</span>
                </div>
              </div>

              {/* Bottom Card Overlay */}
              <div className="p-3.5 sm:p-4 bg-[#152a4d] border-t border-[#fabc4f]/30 flex items-center justify-between">
                <div className="flex items-center gap-2.5 sm:gap-3 text-right">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#6b9cff]/20 flex items-center justify-center border border-[#6b9cff]/40 text-[#aec6ff] shrink-0">
                    <span className="material-symbols-outlined text-[20px] sm:text-[22px]">manage_accounts</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] sm:text-xs text-[#b0c7f8]">مدیریت و بنیان‌گذار مجموعه</span>
                    <span className="text-xs sm:text-sm font-bold text-white">مهران نعمتی</span>
                  </div>
                </div>
                <span className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-black bg-emerald-950/70 text-emerald-400 border border-emerald-500/50 shrink-0 flex items-center gap-1.5 shadow-sm">
                  <span>صلاحیت تایید شده</span>
                  <span className="material-symbols-outlined text-[#38bdf8] text-[18px]">verified</span>
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* 3. SMALLER EXPLANATION TEXT & CTAS UNDER THE PHOTOS (متن بعدی کوچک‌ترش پایینش به عنوان توضیحات) */}
        <div className="flex flex-col gap-6 text-right max-w-4xl mx-auto">
          
          <div className="p-5 sm:p-6 rounded-2xl bg-[#152a4d]/80 border border-[#244275] shadow-md">
            <h2 className="text-sm sm:text-base font-bold text-[#fabc4f] mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">info</span>
              <span>توضیحات و راهنمای شروع فعالیت:</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#b0c7f8] leading-relaxed text-justify">
              ادمین سنتر مجموعه پشتیبانی هست که بستری را فراهم کرده تا افراد جویای کار بدون هیچ شرایط خاصی به عنوان ادمین پاسخگوی دیوار فعالیت خودرا نیم ساعت بعداز خواندن فایل اموزشی شروع کنند و 1 میلیون و 500 هزارتومان روزانه درامد داشته باشند و دستمزد خودرا بصورت روزانه دریافت کنند و افراد جویای کار میتوانند اطلاعات فرم استخدام رو تکمیل کرده و برای مدیریت مجموعه در پیامرسان بله ارسال کنند و استارت کار و درامد خود را از دو ساعت بعداز همین لحظه بزنند برای ( اطلاعات بیشتر ) قسمت سوالات متداول سایت رو مطالعه کنید و در پیامرسان ( بله ) پیام دهید
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <button
              type="button"
              onClick={onStartCooperation}
              className="btn-gold text-xs sm:text-sm py-3 px-6 shadow-lg hover:shadow-xl transition-all"
            >
              <span>شروع سریع همکاری</span>
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>

            <button
              type="button"
              onClick={onExploreAbout}
              className="btn-outline text-xs sm:text-sm text-right py-3 px-5"
            >
              درامد روزانه 1500 میلیون تومان ( اموزش و پشتیبانی ) بصورت رایگان میباشد
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pt-4 border-t border-[#243b64]/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-right">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#ffdead]">
                <span className="material-symbols-outlined text-[22px]">badge</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#d7e2ff]">بنیان‌گذار و مدیر ارشد</span>
                <span className="text-sm text-white font-bold">مهران نعمتی</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#6b9cff]">
                <span className="material-symbols-outlined text-[22px]">forum</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#d7e2ff]">تخصص عملیاتی</span>
                <span className="text-sm text-white font-bold">پاسخگویی سریع چت</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#fabc4f]">
                <span className="material-symbols-outlined text-[22px]">gavel</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#d7e2ff]">اصول کاری</span>
                <span className="text-sm text-white font-bold">شفافیت کامل و قانونی</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
