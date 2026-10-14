import { useState } from 'react';

export function BaladVerificationSection() {
  const [copiedText, setCopiedText] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const baladSearchUrl = 'https://balad.ir/search?query=%D8%A7%D8%AF%D9%85%DB%8C%D9%86+%D8%B3%D9%86%D8%AA%D8%B1';
  const fullAddress = 'تهران، صادقیه، فلکه دوم، جنب املاک خورشید';

  const handleCopySearchText = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('ادمین سنتر');
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  const handleCopyAddress = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#f1f5fd] to-[#e4ecfb] border-t-2 border-[#fabc4f]/50 relative overflow-hidden" id="office-location">
      {/* Background Subtle Map Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0a254d_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-black shadow-sm mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>احراز هویت مکانی و اعتبار رسمی</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0a254d] tracking-tight">
            تأییدیه رسمی در مسیریاب ایرانی «بلد» و امکان مراجعه حضوری
          </h2>
          <p className="text-xs sm:text-base text-[#44474e] mt-2 leading-relaxed max-w-2xl mx-auto">
            برای آرامش خاطر و اعتماد ۱۰۰٪ شما؛ دفتر و سالن عملیات ادمین سنتر در سامانه نقشه و مسیریاب بلد ثبت و احراز صلاحیت شده است.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* RIGHT COLUMN (In RTL this is text side): Trust & Full Explanation */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-right order-2 lg:order-1">
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0a254d] text-[#fabc4f] flex items-center justify-center shrink-0 shadow-md">
                <span className="material-symbols-outlined text-[28px]">verified</span>
              </div>
              <div>
                <span className="text-xs text-[#1e5bba] font-bold block">شفافیت کامل و بدون هیچ‌گونه ابهام</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0a254d]">
                  همکاری حضوری در دفتر یا دورکاری از سراسر کشور
                </h3>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#334155] leading-relaxed text-justify">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-white to-amber-50 border-2 border-emerald-400 shadow-sm flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-600 text-[26px] shrink-0">verified_user</span>
                <p className="font-extrabold text-xs sm:text-sm text-[#0a254d] leading-relaxed">
                  ما دارای نماد اعتماد فعالیت الکترونیکی هستیم و بصورت حضوری هم پذیرش افراد رو داریم (نماد ۵ ستاره را در انتهای صفحه مشاهده فرمایید).
                </p>
              </div>

              <p>
                افرادی که جویای کار، استخدام و درآمد روزانه هستند می‌توانند با نهایت اطمینان و اعتماد کامل با ادمین سنتر همکاری خود را آغاز کنند. اگر در تهران سکونت دارید، شرایط کاری به‌صورت <strong className="text-[#0a254d]">کاملاً حضوری</strong> مهیا است و می‌توانید شیفت کاری خود را داخل دفتر و سالن پاسخگویی بگذرانید و مستقیماً و بدون واسطه تشریف بیاورید تا حضوراً در خدمتتان باشیم و با <strong className="text-[#1e5bba]">آقای مهران نعمتی</strong> مدیریت و بنیان‌گذار سیستم گفتگو نمایید.
              </p>

              <p>
                همچنین چنانچه برایتان مقدور نیست یا در استان‌ها و شهرهای دیگر کشور حضور دارید، هیچ محدودیتی وجود ندارد؛ زیرساخت سامانه طوری برنامه‌ریزی شده که می‌توانید به‌صورت <strong className="text-emerald-700 font-bold">آنلاین و دورکاری از منزل</strong> تنها با یک گوشی هوشمند فعالیت خود را شروع کرده و تسویه درآمد روزانه ۱.۵ تا ۲ میلیون تومانی خود را هر شب دریافت نمایید.
              </p>
            </div>

            {/* In-Person Exact Address Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 border-2 border-[#fabc4f] shadow-md text-right">
              <div className="flex items-center gap-2.5 text-[#0a254d] font-black text-sm sm:text-base mb-2">
                <span className="material-symbols-outlined text-[#d97706] text-[24px]">location_city</span>
                <span>آدرس دقیق جهت مراجعه حضوری به دفتر:</span>
              </div>
              
              <div className="p-3 bg-white rounded-xl border border-amber-300 flex items-center justify-between gap-3 mb-2.5 shadow-inner">
                <span className="font-extrabold text-[#0a254d] text-sm sm:text-base tracking-tight">
                  تهران، صادقیه، فلکه دوم، جنب املاک خورشید
                </span>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="btn-gold py-1.5 px-3 text-xs flex items-center gap-1 shrink-0"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {copiedAddress ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedAddress ? 'کپی شد' : 'کپی آدرس'}</span>
                </button>
              </div>

              <div className="flex items-start gap-2 text-xs sm:text-[13px] text-amber-950 leading-relaxed font-medium">
                <span className="material-symbols-outlined text-emerald-700 text-[18px] shrink-0 mt-0.5">help</span>
                <p>
                  در محدوده فلکه دوم صادقیه <strong className="text-[#0a254d]">به هرکی بگید ادمین سنتر میشناسه و راهنماییتون میکنه</strong>. همچنین کافیست در اپلیکیشن بلد نام «ادمین سنتر» را سرچ کنید تا مستقیماً به درب ورودی هدایت شوید.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href={baladSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold py-3 px-6 text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <span className="material-symbols-outlined text-[22px]">explore</span>
                <span>باز کردن مستقیم موقعیت در مسیریاب بلد</span>
              </a>

              <button
                type="button"
                onClick={handleCopySearchText}
                className="btn-navy py-3 px-5 text-xs font-bold flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {copiedText ? 'check' : 'content_copy'}
                </span>
                <span>{copiedText ? 'عبارت «ادمین سنتر» کپی شد' : 'کپی نام جهت سرچ در بلد'}</span>
              </button>
            </div>

          </div>

          {/* LEFT COLUMN (In RTL this is visual side): Interactive Balad Map Card */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative group">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-[#1e5bba] to-[#fabc4f] rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>

              {/* Main Map Card */}
              <a
                href={baladSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block rounded-2xl bg-white border-2 border-emerald-500/60 overflow-hidden shadow-2xl transition-transform duration-300 group-hover:-translate-y-1.5"
                title="کلیک کنید تا موقعیت در مسیریاب بلد باز شود"
              >
                {/* Balad Header Mockup Bar */}
                <div className="bg-[#0f766e] text-white px-4 py-3 flex items-center justify-between border-b border-[#115e59]">
                  <div className="flex items-center gap-2.5">
                    {/* Balad Icon Logo */}
                    <div className="w-8 h-8 rounded-lg bg-white text-[#0f766e] font-black text-xs flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">near_me</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-xs font-bold text-white">مسیریاب و نقشه بلد</span>
                      <span className="text-[10px] text-emerald-100">صادقیه - فلکه دوم</span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-emerald-900/60 text-emerald-200 text-[10px] font-bold border border-emerald-400/40 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>مکان تایید شده</span>
                  </span>
                </div>

                {/* Balad Search Box Simulation */}
                <div className="p-3 bg-slate-50 border-b border-slate-200">
                  <div className="bg-white rounded-xl border-2 border-emerald-500 px-3 py-2 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2 text-right">
                      <span className="material-symbols-outlined text-emerald-700 text-[20px]">search</span>
                      <span className="text-xs sm:text-sm font-black text-[#0a254d]">ادمین سنتر</span>
                    </div>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200">
                      جستجوی فعال
                    </span>
                  </div>
                </div>

                {/* Map Visual with Marker & Radar */}
                <div className="relative h-64 sm:h-72 w-full bg-[#e8ecef] overflow-hidden flex items-center justify-center">
                  
                  {/* Stylized Iranian Map Roads and Background */}
                  <div className="absolute inset-0 bg-[#e5e9ec]">
                    <svg className="w-full h-full opacity-45" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="balad-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                          <circle cx="30" cy="30" r="1.5" fill="#94a3b8" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#balad-grid)" />
                      <path d="M -20 200 Q 150 120 400 80" fill="none" stroke="#fed7aa" strokeWidth="12" />
                      <path d="M -20 200 Q 150 120 400 80" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="6 4" />
                      <path d="M 80 -20 L 160 320" fill="none" stroke="#ffffff" strokeWidth="8" />
                      <path d="M 280 -20 L 220 320" fill="none" stroke="#ffffff" strokeWidth="6" />
                    </svg>

                    <div className="absolute top-4 right-6 w-24 h-16 rounded-2xl bg-emerald-200/50 border border-emerald-300/40"></div>
                    <div className="absolute bottom-6 left-8 w-28 h-20 rounded-3xl bg-emerald-200/40 border border-emerald-300/30"></div>
                  </div>

                  {/* Pulsing Balad Radar Target */}
                  <div className="absolute w-28 h-28 rounded-full bg-emerald-500/20 animate-ping pointer-events-none"></div>
                  <div className="absolute w-16 h-16 rounded-full bg-emerald-500/30 pointer-events-none"></div>

                  {/* Pin Callout Box */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-[#0a254d] text-white px-3.5 py-2 rounded-xl shadow-2xl border-2 border-[#fabc4f] flex items-center gap-2 transform -translate-y-2 group-hover:scale-105 transition-transform">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#fabc4f] animate-pulse"></span>
                      <div className="flex flex-col text-right">
                        <span className="text-xs sm:text-sm font-black text-white">ادمین سنتر</span>
                        <span className="text-[10px] text-emerald-300 font-semibold">صادقیه - جنب املاک خورشید</span>
                      </div>
                      <span className="material-symbols-outlined text-emerald-400 text-[18px]">verified</span>
                    </div>

                    <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-[#0a254d] drop-shadow-md"></div>
                    <div className="w-3.5 h-1.5 bg-black/30 rounded-full blur-[1px] mt-0.5"></div>
                  </div>

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-[#0a254d]/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white p-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#fabc4f] text-[#0a254d] flex items-center justify-center font-bold shadow-xl animate-bounce">
                      <span className="material-symbols-outlined text-[28px]">open_in_new</span>
                    </div>
                    <span className="font-black text-sm sm:text-base text-white">کلیک کنید تا در بلد باز شود</span>
                    <span className="text-xs text-[#b0c7f8] max-w-xs leading-relaxed">
                      عبارت «ادمین سنتر» به‌صورت خودکار در اپلیکیشن بلد جستجو و موقعیت نمایش داده می‌شود.
                    </span>
                  </div>

                </div>

                {/* Balad Bottom Card Footer */}
                <div className="p-3.5 bg-white flex items-center justify-between border-t border-slate-200">
                  <div className="flex items-center gap-2 text-right">
                    <span className="material-symbols-outlined text-emerald-600 text-[22px]">location_on</span>
                    <div>
                      <span className="text-xs font-bold text-[#0a254d] block">لوکیشن تایید شده در برنامه بلد</span>
                      <span className="text-[10px] text-slate-500">تهران، صادقیه، فلکه دوم</span>
                    </div>
                  </div>
                  <div className="btn-gold py-1.5 px-3 text-[11px] font-bold rounded-lg flex items-center gap-1 shrink-0">
                    <span>مسیریابی</span>
                    <span className="material-symbols-outlined text-[14px]">turn_right</span>
                  </div>
                </div>

              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM FULL-WIDTH TRUST BANNER WITH ADDRESS */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-white border-2 border-emerald-400 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5 text-right">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-300">
              <span className="material-symbols-outlined text-[28px]">verified_user</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black text-[#0a254d]">
                  ضمانت کامل و اطمینان از صحت هویت مجموعه ادمین سنتر
                </span>
                <span className="badge-emerald text-[11px]">مراجعه حضوری آزاد است</span>
              </div>
              <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed">
                نشانی سالن پاسخگویی و دفتر اداری:{' '}
                <strong className="text-[#0a254d] font-black underline decoration-emerald-500">
                  تهران، صادقیه، فلکه دوم، جنب املاک خورشید
                </strong>
                {' — '}
                به هرکدام از اهالی و کسبه منطقه بگویید «ادمین سنتر»، کاملاً می‌شناسند و راهنمایی‌تان می‌کنند.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={handleCopyAddress}
              className="btn-navy text-xs py-2.5 px-4 flex-1 md:flex-none flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">
                {copiedAddress ? 'check' : 'content_copy'}
              </span>
              <span>{copiedAddress ? 'آدرس کپی شد' : 'کپی نشانی'}</span>
            </button>

            <a
              href={baladSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xs py-2.5 px-5 flex-1 md:flex-none flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">near_me</span>
              <span>مسیریابی با بلد</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
