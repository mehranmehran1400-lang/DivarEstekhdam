import { IMAGES, BANK_CARD_INFO } from '../data';
import { BaladVerificationSection } from '../components/BaladVerificationSection';
import { PageTab } from '../types';

interface AboutViewProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenOrderModal: (title: string, price: string) => void;
}

export function AboutView({ onSelectTab }: AboutViewProps) {
  const handleStartCooperation = () => {
    onSelectTab('home');
    setTimeout(() => {
      document.getElementById('start-cooperation')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div>
      {/* Hero Header */}
      <section className="py-14 sm:py-18 bg-[#0a254d] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge-gold mb-3">هویت و رسالت کاری</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            درباره ادمین سنتر؛ بدون حاشیه و کاملاً واقع‌بینانه
          </h1>
          <p className="text-sm sm:text-base text-[#b0c7f8] leading-relaxed max-w-2xl mx-auto">
            ادمین سنتر یک سامانه تخصصی و مستقل است که با هدف ایجاد شغل و کارآفرینی طراحی شده تا افراد جویای کار در سراسر کشور بتوانند بدون شرایط دشوار به درآمد روزانه پایدار دست یابند.
          </p>
        </div>
      </section>

      {/* Real Photos & Structure Details */}
      <section className="py-16 bg-white border-b border-[#d1daf4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#fabc4f]/40">
                <img
                  alt="دفتر مرکزی و مدیریت مهران نعمتی"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                  src={IMAGES.office}
                />
              </div>
              <div className="p-4 rounded-xl bg-[#0a254d] text-white mt-4 border border-[#fabc4f]/40">
                <span className="text-xs text-[#fabc4f] font-bold block mb-1">
                  تأییدیه حضور و اعتبار مکانی
                </span>
                <p className="text-xs text-[#b0c7f8] leading-relaxed">
                  مجموعه ادمین سنتر در اپلیکیشن و مسیریاب ایرانی «بلد» ثبت و تایید شده است. متقاضیان هم امکان همکاری حضوری در دفتر و هم فعالیت آنلاین و دورکاری از منزل را دارند.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-5 text-right">
              <span className="badge-blue self-start">مدیریت عالی و بنیان‌گذار</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a254d]">
                مدیریت مستقیم: مهران نعمتی
              </h2>
              <p className="text-sm text-[#44474e] leading-relaxed text-justify">
                فردی به نام مهران نعمتی صاحب اصلی و خالق مجموعه ادمین سنتر است. در دوره‌ای که یافتن شغل دوم یا درآمد پاره‌وقت سالم بدون سرمایه اولیه دشوار شده، این سامانه با تدوین ساختاری شفاف ایجاد گردیده تا پاسخگویی به چت‌های متقاضیان کار در برنامه دیوار را به منبعی پایدار برای معیشت متقاضیان تبدیل کند.
              </p>
              <p className="text-sm text-[#44474e] leading-relaxed text-justify">
                تمامی فرآیندهای بازبینی رسیدها، ارسال فایل‌های آموزشی، پاسخگویی به اشکالات و تسویه‌حساب‌ها تحت نظارت دقیق مدیریت انجام می‌گیرد تا از هرگونه سوء‌استفاده جلوگیری شود.
              </p>
              
              <div className="p-4 rounded-xl bg-[#f1f3ff] border border-[#e1e8ff] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-slate-500 block">ارتباط اختصاصی مدیریت در پیام‌رسان بله:</span>
                  <strong className="text-base text-[#1e5bba] font-mono" dir="ltr">
                    {BANK_CARD_INFO.baleId}
                  </strong>
                </div>
                <a
                  className="btn-telegram text-xs py-2 px-4 flex items-center gap-1.5"
                  href={BANK_CARD_INFO.baleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>ارسال پیام</span>
                  <span className="material-symbols-outlined text-[16px]">send</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Transparency & Strict Legal Disclaimers */}
      <section className="py-16 sm:py-20 bg-[#f1f3ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="glass-card p-6 sm:p-10 bg-white border border-[#c4c6d0]/60">
            <div className="flex items-center gap-3 border-b border-[#e1e8ff] pb-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#ba1a1a]/10 text-[#ba1a1a] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[28px]">gavel</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-[#0a254d]">
                  بیانیه رسمی عدم وابستگی و سلب مسئولیت
                </h3>
                <span className="text-xs text-[#74777f]">شفافیت کامل حقوقی برای حفظ آرامش خاطر متقاضیان</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-xs sm:text-sm text-[#44474e] leading-relaxed text-justify">
              <p>
                <strong>۱. عدم وابستگی به اپلیکیشن دیوار:</strong> مجموعه ادمین سنتر یک نهاد مستقل ارائه‌دهنده خدمات آموزشی، هدایتی و پشتیبانی است و هیچ‌گونه نمایندگی رسمی، سهام‌داری یا وابستگی تجاری مستقیم با شرکت محترم «دیوار» ندارد. واژه دیوار صرفاً اشاره به نوع و بستر فعالیت (پاسخگویی به چت نیازمندی‌ها) دارد.
              </p>
              <p>
                <strong>۲. عدم وابستگی به نهادهای دولتی:</strong> ادمین سنتر مرکز کاریابی دولتی، وزارت تعاون یا اداره کار نیست. مبلغ دریافتی (۲۹۹ هزار تومان) صرفاً به عنوان هزینه تهیه متریال آموزشی، بررسی انسانی مدارک، پشتیبانی فنی و نگهداری بستر پرونده دیجیتال متقاضی اخذ می‌گردد.
              </p>
              <p>
                <strong>۳. اصل صداقت در درآمد:</strong> درآمد ادمین‌ها وعده نجومی یا شبه‌معجزه نیست؛ بلکه بر اساس میزان دقت، تعداد پیام‌های پاسخ‌داده‌شده و ساعات اختصاص‌یافته روزانه محاسبه می‌شود و مبالغ ۱.۵ تا ۲ میلیون تومان کاملاً بر مبنای توان واقعی یک ادمین منضبط برآورد شده است.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#e1e8ff] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">آماده شروع همکاری و دریافت درآمد روزانه هستید؟</span>
              <button
                type="button"
                onClick={handleStartCooperation}
                className="btn-gold text-xs py-2.5 px-6"
              >
                ورود به فرم استخدام
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Balad Map Verification */}
      <BaladVerificationSection />
    </div>
  );
}
