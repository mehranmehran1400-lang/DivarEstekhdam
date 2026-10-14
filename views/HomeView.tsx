import { Hero } from '../components/Hero';
import { CooperationForm } from '../components/CooperationForm';
import { PaymentCard } from '../components/PaymentCard';
import { FaqSection } from '../components/FaqSection';
import { SupportTicket } from '../components/SupportTicket';
import { BaladVerificationSection } from '../components/BaladVerificationSection';
import { AdminTestimonialsSection } from '../components/AdminTestimonialsSection';
import { PageTab } from '../types';

interface HomeViewProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenOrderModal: (title: string, price: string) => void;
}

export function HomeView({ onSelectTab, onOpenOrderModal }: HomeViewProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* 1. Hero (توضیحات و عکس در اول سایت) */}
      <Hero
        onStartCooperation={() => scrollTo('start-cooperation')}
        onExploreAbout={() => onSelectTab('about')}
      />

      {/* 2. Responsibilities After Employment (مسئولیت‌های شما بعداز اینکه استخدام شدین چیه؟) */}
      <section className="py-16 sm:py-20 bg-[#f9f9ff] border-b border-[#d1daf4]" id="conditions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-4 text-right">
              <span className="badge-blue self-start">شرح وظایف و تعهدات کاری</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a254d]">
                مسئولیت‌های شما بعداز اینکه استخدام شدین چیه؟
              </h2>
              <p className="text-sm sm:text-base text-[#44474e] leading-relaxed text-justify">
                کار پاسخگویی به چت نیازمند انضباط، صبوری و تمرکز است. ما شفافانه بیان می‌کنیم که چه مواردی برای دستیابی به رضایت شغلی و درآمد پایدار مورد نیاز است:
              </p>
              <div className="p-4 rounded-xl bg-[#fabc4f]/20 border border-[#fabc4f]/40 flex items-start gap-3 mt-2">
                <span className="material-symbols-outlined text-[#513600] text-[26px] shrink-0">lightbulb</span>
                <p className="text-xs sm:text-sm text-[#281900] font-semibold leading-relaxed">
                  انعطاف زمانی وجود دارد اما زمانی که متعهد به پاسخگویی شدید، سرعت عمل ملاک ارزیابی شماست.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid-2">
              <div className="glass-card p-5">
                <div className="flex items-center gap-2 text-[#0a254d] font-bold mb-2">
                  <span className="material-symbols-outlined text-[#1e5bba]">schedule</span>
                  <span className="text-base">ساعات کاری منعطف</span>
                </div>
                <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed text-justify">
                  تعیین ساعات پاسخگویی با توافق طرفین انجام می‌شود (شیفت‌های پاره‌وقت ۲ الی ۶ ساعته در طول روز یا شب).
                </p>
              </div>

              <div className="glass-card p-5">
                <div className="flex items-center gap-2 text-[#0a254d] font-bold mb-2">
                  <span className="material-symbols-outlined text-[#1e5bba]">speed</span>
                  <span className="text-base">سرعت پاسخگویی</span>
                </div>
                <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed text-justify">
                  ارسال پاسخ به پیام‌های دریافتی حداکثر ظرف ۳ الی ۵ دقیقه و رعایت کامل الگوی احترام و ادب حرفه‌ای.
                </p>
              </div>

              <div className="glass-card p-5">
                <div className="flex items-center gap-2 text-[#0a254d] font-bold mb-2">
                  <span className="material-symbols-outlined text-[#1e5bba]">devices</span>
                  <span className="text-base">تجهیزات حداقلی</span>
                </div>
                <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed text-justify">
                  تنها داشتن یک تلفن همراه هوشمند مجهز به کیبورد روان فارسی و اتصال اینترنت پایدار کفایت می‌کند.
                </p>
              </div>

              <div className="glass-card p-5">
                <div className="flex items-center gap-2 text-[#0a254d] font-bold mb-2">
                  <span className="material-symbols-outlined text-[#1e5bba]">payments</span>
                  <span className="text-base">محاسبه دستمزد</span>
                </div>
                <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed text-justify">
                  پرداخت‌ها بر پایه آمار پیام‌های پاسخ‌داده‌شده محاسبه و تسویه می‌گردد؛ با تعهد کاری، <strong className="text-emerald-700 font-extrabold">درآمد روزانه ۱ میلیون و ۵۰۰ به بالا داری و هرشب برات واریز میشه</strong>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2.5 Admin & Employee Testimonials (نظرات کارمندان و ادمین‌های ادمین سنتر - لاکچری و برجسته) */}
      <AdminTestimonialsSection />

      {/* 3. Official Balad Map Verification (اعتبار لوکیشن در مسیریاب بلد) */}
      <BaladVerificationSection />

      {/* 3. FAQ Section (بخش سوم: سوالات متداول سایت) */}
      <FaqSection />

      {/* 4. Step-by-Step Roadmap (روند قدم به قدم ثبت‌نام تا شروع فعالیت رسمی) */}
      <section className="py-16 sm:py-20 bg-[#f1f3ff] border-y border-[#d1daf4]" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-blue mb-1">نقشه راه شفافیت</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a254d] mt-1">
              روند قدم به قدم ثبت‌نام تا شروع فعالیت رسمی
            </h2>
            <p className="text-sm sm:text-base text-[#44474e] mt-2">
              لطفاً پیش از هر اقدامی، گام‌های اجرایی زیر را با دقت بررسی نمایید:
            </p>
          </div>

          <div className="grid-3">
            <div className="glass-card p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#0a254d] text-white flex items-center justify-center font-bold text-sm shrink-0">۱</div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#0a254d]">بررسی شرایط و ضوابط</h4>
                <p className="text-xs sm:text-sm text-[#44474e] mt-1">مطالعه کامل پیش‌نیازها از جمله داشتن گوشی هوشمند و تعهد به پاسخگویی منظم.</p>
              </div>
            </div>

            <div className="glass-card p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#0a254d] text-white flex items-center justify-center font-bold text-sm shrink-0">۲</div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#0a254d]">مطالعه سوالات متداول (FAQ)</h4>
                <p className="text-xs sm:text-sm text-[#44474e] mt-1">آشنایی با ماهیت، وظایف روزانه، شیوه‌های حل مشکل و شیوه تسویه حساب.</p>
              </div>
            </div>

            <div className="glass-card p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#0a254d] text-white flex items-center justify-center font-bold text-sm shrink-0">۳</div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#0a254d]">تکمیل فرم درخواست در سایت</h4>
                <p className="text-xs sm:text-sm text-[#44474e] mt-1">ورود دقیق نام، شماره موبایل فعال و آیدی پیام‌رسان بله جهت ایجاد پرونده دیجیتال.</p>
              </div>
            </div>

            <div className="glass-card p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#513600] text-white flex items-center justify-center font-bold text-sm shrink-0">۴</div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#0a254d]">تایید شرایط و شیوه تسویه حساب</h4>
                <p className="text-xs sm:text-sm text-[#44474e] mt-1">تمامی دستمزدها هر ۱۲ شب به‌صورت منظم واریز می‌شود؛ <strong className="text-emerald-700 font-bold">درآمد روزانه ۱ میلیون و ۵۰۰ به بالا داری و هرشب برات واریز میشه</strong>.</p>
              </div>
            </div>

            <div className="glass-card p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#513600] text-white flex items-center justify-center font-bold text-sm shrink-0">۵</div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#0a254d]">ارسال تصویر رسید به شناسه بله</h4>
                <p className="text-xs sm:text-sm text-[#44474e] mt-1">اطلاعات خود را در فرم وارد کرده و اسکرین شات گرفته و برای مدیریت در پیام‌رسان بله ارسال کنید.</p>
              </div>
            </div>

            <div className="glass-card p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#513600] text-white flex items-center justify-center font-bold text-sm shrink-0">۶</div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#0a254d]">بررسی دستی و تایید مدیریت</h4>
                <p className="text-xs sm:text-sm text-[#44474e] mt-1">بررسی دستی جهت جلوگیری از فیشینگ و تطبیق اطلاعات متقاضی (عدم تایید خودکار روباتی).</p>
              </div>
            </div>

            <div className="glass-card p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#1e5bba] text-white flex items-center justify-center font-bold text-sm shrink-0">۷</div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#0a254d]">دریافت بسته و فرم تکمیلی</h4>
                <p className="text-xs sm:text-sm text-[#44474e] mt-1">ارسال فایل‌های راهنمای آموزشی، متون سناریو پاسخگویی و فرم تخصصی ثبت شیفت.</p>
              </div>
            </div>

            <div className="glass-card p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#1e5bba] text-white flex items-center justify-center font-bold text-sm shrink-0">۸</div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#0a254d]">مطالعه مستندات و ثبت ساعات</h4>
                <p className="text-xs sm:text-sm text-[#44474e] mt-1">مطالعه آموزش‌ها و انتخاب ترجیح ساعات پاسخگویی در روزهای هفته با نظارت پشتیبان.</p>
              </div>
            </div>

            <div className="glass-card p-5 flex gap-4 items-start border-2 border-emerald-500 bg-emerald-50/50">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0">۹</div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-emerald-950">آغاز رسمی فعالیت پاسخگویی و درآمد</h4>
                <p className="text-xs sm:text-sm text-[#44474e] mt-1">ورود به چرخه پاسخگویی چت؛ <strong className="text-emerald-800 font-black">درآمد روزانه ۱ میلیون و ۵۰۰ به بالا داری و هرشب برات واریز میشه</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motivational Energy Booster Banner before Application Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mb-6 mt-6 relative z-20">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-[#0a254d] via-[#163668] to-[#0a254d] text-white border-2 border-[#fabc4f] shadow-xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#fabc4f] text-[#0a254d] flex items-center justify-center shrink-0 font-bold shadow-md">
              <span className="material-symbols-outlined text-[24px]">trending_up</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-xs sm:text-sm font-black text-[#fabc4f]">
                فرصت طلایی کسب معیشت پایدار:
              </span>
              <span className="text-xs sm:text-sm font-bold text-white">
                درآمد روزانه ۱ میلیون و ۵۰۰ به بالا داری و هرشب برات واریز میشه!
              </span>
            </div>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-emerald-500/25 text-emerald-300 border border-emerald-400/50 text-xs font-bold shrink-0">
            واریز اتوماتیک ساعت ۲۴
          </span>
        </div>
      </div>

      {/* 4. Cooperation Form (فرم همکاری خود را از اینجا شروع کنید) */}
      <CooperationForm onOpenOrderModal={onOpenOrderModal} />

      {/* 5. Bank Card & Payment Section (قسمت واریزی و شماره کارت) */}
      <PaymentCard />

      {/* 6. About & 3 Pillars */}
      <section className="py-16 sm:py-20 bg-[#f1f3ff] border-b border-[#d1daf4]" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="badge-blue mb-2">شفافیت و هویت تشکیلاتی تایید شده</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a254d] mt-1">
              درباره ادمین سنتر؛ بدون حاشیه و کاملاً واقع‌بینانه
            </h2>
            <p className="text-sm sm:text-base text-[#44474e] mt-2 leading-relaxed">
              ادمین سنتر یک سامانه تخصصی و مستقل است که با هدف ایجاد شغل و کار افرینی طراحی شده است تا در این شرایط افراد بدون شرایط خاصی شغل داشته باشند و همکاری خود را به عنوان ادمین پاسخگوی دیوار شروع کنند ( اموزش و پشتیبانی بصورت رایگان میباشد ) .
            </p>
          </div>

          <div className="grid-3 mb-12">
            <div className="glass-card p-6 border-t-4 border-[#0a254d]">
              <div className="w-12 h-12 rounded-xl bg-[#d7e2ff]/60 text-[#0a254d] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-[28px]">school</span>
              </div>
              <h3 className="text-lg font-bold text-[#0a254d] mb-2">آموزش و استانداردسازی</h3>
              <p className="text-sm text-[#44474e] leading-relaxed text-justify">
                ما الگوهای استاندارد مکالمه با مشتری، مدیریت زمان، نحوه ثبت داده‌ها و حل چالش‌های رفتاری متقاضیان را در قالب متون و راهنماهای دقیق به شما می‌آموزیم تا بلافاصله آماده فعالیت باشید.
              </p>
            </div>

            <div className="glass-card p-6 border-t-4 border-[#fabc4f]">
              <div className="w-12 h-12 rounded-xl bg-[#ffdead]/50 text-[#513600] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-[28px]">supervisor_account</span>
              </div>
              <h3 className="text-lg font-bold text-[#0a254d] mb-2">مدیریت عالی: مهران نعمتی</h3>
              <p className="text-sm text-[#44474e] leading-relaxed text-justify">
                کلیه فرآیندهای هدایت، بررسی مدارک و رسیدها تحت نظارت مستقیم شخص مهران نعمتی انجام می‌گیرد تا از هرگونه سوء‌استفاده احتمالی و بی‌پاسخ ماندن همکاران جلوگیری شود.
              </p>
            </div>

            <div className="glass-card p-6 border-t-4 border-[#1e5bba]">
              <div className="w-12 h-12 rounded-xl bg-[#d8e2ff]/60 text-[#1e5bba] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-[28px]">balance</span>
              </div>
              <h3 className="text-lg font-bold text-[#0a254d] mb-2">صداقت در درآمد و انتظارات</h3>
              <p className="text-sm text-[#44474e] leading-relaxed text-justify">
                ما هیچ وعده غیرواقعی در خصوص ارقام نجومی چند ده‌میلیونی نمی‌دهیم. درآمد شما مستقیماً وابسته به دقت، ساعات حضور، سرعت تایپ و کیفیت نهایی پاسخگویی‌تان به کاربران است.
              </p>
            </div>
          </div>

          {/* Legal Disclaimer Box */}
          <div className="glass-card p-6 sm:p-8 bg-[#e1e8ff]/80 border border-[#c4c6d0]/50">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#ba1a1a]/10 text-[#ba1a1a] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[32px]">shield_with_heart</span>
              </div>
              <div className="flex flex-col gap-2 text-right">
                <h3 className="text-lg sm:text-xl font-bold text-[#0a254d]">بیانیه سلب مسئولیت و شفاف‌سازی رسمی</h3>
                <div className="text-xs sm:text-sm text-[#44474e] leading-relaxed text-justify flex flex-col gap-1.5">
                  <p>
                    <strong>۱.</strong> سامانه ادمین سنتر هیچ‌گونه ارتباط رسمی، نمایندگی یا وابستگی تجاری به پلتفرم محترم «دیوار»، نهادهای دولتی یا وزارت تعاون، کار و رفاه اجتماعی ندارد.
                  </p>
                  <p>
                    <strong>۲.</strong> ادمین سنتر کاریابی دولتی نیست و مبلغ دریافتی صرفاً هزینه ارائه خدمات پشتیبانی، تهیه متریال آموزشی، بررسی انسانی و ثبت اطلاعات کاربری است.
                  </p>
                  <p>
                    <strong>۳.</strong> هرگونه نام‌گذاری مشابه صرفاً با هدف تفهیم نوع کاربری (پاسخگویی به چت نیازمندی‌ها) صورت گرفته است.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 9. Support Ticket Section */}
      <SupportTicket />

      {/* 10. Services & 4 Pillars (ارائه زیرساخت و توانمندسازی عملیاتی - آخرین و پایین‌ترین بخش سایت) */}
      <section className="py-16 sm:py-20 bg-[#f9f9ff] border-t border-[#d1daf4]" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div className="flex flex-col gap-1 max-w-2xl text-right">
              <span className="badge-blue mb-1">بسته‌های خدمات یکپارچه</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a254d]">
                ارائه زیرساخت و توانمندسازی عملیاتی
              </h2>
              <p className="text-sm sm:text-base text-[#44474e] mt-1">
                چهار ستون اصلی خدمات ادمین سنتر برای تربیت و استقرار ادمین‌های زبده چت:
              </p>
            </div>
            <button
              type="button"
              onClick={() => onSelectTab('products')}
              className="btn-gold hidden sm:inline-flex text-xs"
            >
              مشاهده کاتالوگ بسته‌ها
            </button>
          </div>

          <div className="grid-4">
            <div className="glass-card p-6 flex flex-col justify-between h-full">
              <div className="flex flex-col gap-3">
                <div className="w-14 h-14 rounded-xl bg-[#d7e2ff] text-[#0a254d] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[30px]">menu_book</span>
                </div>
                <span className="text-xs text-[#1e5bba] font-bold">گام اول: آموزش</span>
                <h3 className="text-lg font-bold text-[#0a254d]">بسته آموزشی جامع چت</h3>
                <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed text-justify">
                  فایل‌های آموزشی شامل تکنیک‌های لحن متقاعدکننده، سرعت در پاسخ، مدیریت مشتریان شاکی و الگوهای آماده پاسخگویی سریع.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#e1e8ff] flex items-center justify-between text-xs text-[#0a254d] font-semibold">
                <span>شامل متون و جزوه</span>
                <span className="material-symbols-outlined text-[18px] text-[#fabc4f]">check_circle</span>
              </div>
            </div>

            <div className="glass-card p-6 flex flex-col justify-between h-full">
              <div className="flex flex-col gap-3">
                <div className="w-14 h-14 rounded-xl bg-[#d8e2ff] text-[#1e5bba] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[30px]">fact_check</span>
                </div>
                <span className="text-xs text-[#1e5bba] font-bold">گام دوم: نظارت</span>
                <h3 className="text-lg font-bold text-[#0a254d]">کنترل کیفی و پایش</h3>
                <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed text-justify">
                  بررسی پیوسته نمونه مکالمات، رفع اشکالات احتمالی در نحوه معرفی کالا و خدمات و اصلاح لحن کارشناسان.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#e1e8ff] flex items-center justify-between text-xs text-[#0a254d] font-semibold">
                <span>ارزیابی عملکرد</span>
                <span className="material-symbols-outlined text-[18px] text-[#fabc4f]">check_circle</span>
              </div>
            </div>

            <div className="glass-card p-6 flex flex-col justify-between h-full">
              <div className="flex flex-col gap-3">
                <div className="w-14 h-14 rounded-xl bg-[#ffdead]/50 text-[#513600] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[30px]">contact_support</span>
                </div>
                <span className="text-xs text-[#1e5bba] font-bold">گام سوم: پشتیبانی</span>
                <h3 className="text-lg font-bold text-[#0a254d]">پشتیبانی فعال آنلاین</h3>
                <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed text-justify">
                  حضور مستمر راهنمایان از طریق پیام‌رسان بله برای حل هرگونه ابهام، دریافت بازخوردها و رفع موانع فنی در حین کار.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#e1e8ff] flex items-center justify-between text-xs text-[#0a254d] font-semibold">
                <span>در تمام روزهای کاری</span>
                <span className="material-symbols-outlined text-[18px] text-[#fabc4f]">check_circle</span>
              </div>
            </div>

            <div className="glass-card p-6 flex flex-col justify-between h-full">
              <div className="flex flex-col gap-3">
                <div className="w-14 h-14 rounded-xl bg-[#d9e2fc] text-[#0a254d] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[30px]">alt_route</span>
                </div>
                <span className="text-xs text-[#1e5bba] font-bold">گام چهارم: ساماندهی</span>
                <h3 className="text-lg font-bold text-[#0a254d]">توزیع و اتصال کار</h3>
                <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed text-justify">
                  ساماندهی ارتباط میان نیازمندی‌های پاسخگویی آگهی‌ها و ادمین‌های تایید صلاحیت‌شده بر اساس انضباط و سرعت عمل.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#e1e8ff] flex items-center justify-between text-xs text-[#0a254d] font-semibold">
                <span>اتصال هوشمند پروژه‌ها</span>
                <span className="material-symbols-outlined text-[18px] text-[#fabc4f]">check_circle</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
