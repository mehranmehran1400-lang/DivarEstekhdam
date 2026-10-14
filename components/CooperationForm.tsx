import { useState, FormEvent } from 'react';
import { ApplicationSubmission } from '../types';
import { BANK_CARD_INFO } from '../data';

interface CooperationFormProps {
  onOpenOrderModal: (title: string, price: string) => void;
}

export function CooperationForm({ onOpenOrderModal }: CooperationFormProps) {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [messengerId, setMessengerId] = useState('');
  const [dailyHours, setDailyHours] = useState('۴ الی ۶ ساعت در روز (نیمه‌وقت)');
  const [experience, setExperience] = useState('');
  const [termsAgreement, setTermsAgreement] = useState(false);

  const [submittedData, setSubmittedData] = useState<ApplicationSubmission | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!termsAgreement) {
      alert('لطفاً گزینه مطالعه و پذیرش شرایط و قوانین را تایید فرمایید.');
      return;
    }

    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const trackingCode = `ADM-${randomNum}`;

    const submission: ApplicationSubmission = {
      trackingCode,
      fullName: fullName.trim(),
      mobile: mobileNumber.trim(),
      messengerId: messengerId.trim() || 'ثبت نشده',
      dailyHours,
      experience: experience.trim() || 'بدون سابقه قبلی',
      submittedAt: new Date().toLocaleDateString('fa-IR')
    };

    setSubmittedData(submission);

    // Scroll smoothly to the result card
    setTimeout(() => {
      document.getElementById('formSuccessAlert')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleCopySummary = () => {
    if (!submittedData) return;
    const text = `📋 اطلاعات فرم درخواست همکاری ادمین سنتر
کد رهگیری: ${submittedData.trackingCode}
نام و نام خانوادگی: ${submittedData.fullName}
شماره تماس: ${submittedData.mobile}
آیدی بله/تلگرام: ${submittedData.messengerId}
ساعات آمادگی: ${submittedData.dailyHours}
توضیحات: ${submittedData.experience}`;

    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#d1daf4]" id="start-cooperation">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="badge-blue mb-2">درگاه ثبت مشخصات همکاری</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a254d]">
            بسیار مهم = همکاری سریع خودتون رو از اینجا شروع کنید
          </h2>
          <p className="text-xs sm:text-sm text-[#44474e] max-w-2xl mx-auto mt-2 leading-relaxed">
            شرایط همکاری را بررسی کنید و فرم درخواست را با اطلاعات صحیح تکمیل کنید. پس از ثبت موفق درخواست، مراحل بعدی و پنل پرداخت برای شما نمایش داده می‌شود.
          </p>
        </div>

        {/* 3 Principles Summary Box */}
        <div className="mb-8 p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#fabc4f]/60 shadow-md text-right">
          <div className="flex items-center gap-3 border-b border-[#e1e8ff] pb-4 mb-6">
            <span className="material-symbols-outlined text-[#513600] text-[30px]">info</span>
            <div>
              <h3 className="text-base sm:text-lg font-black text-[#0a254d]">
                راهنمای سریع و خلاصه ضوابط همکاری با ادمین سنتر
              </h3>
              <p className="text-xs sm:text-sm text-[#44474e] mt-0.5">
                لطفاً این ۳ اصل کلیدی را پیش از ثبت فرم با دقت مطالعه فرمایید:
              </p>
            </div>
          </div>

          <div className="grid-3">
            <div className="p-4 rounded-xl bg-[#f1f3ff] border border-[#e1e8ff] flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#0a254d] font-bold">
                <span className="material-symbols-outlined text-[#1e5bba] text-[22px]">hub</span>
                <span className="text-sm">۱. کار ادمین سنتر چیه؟</span>
              </div>
              <p className="text-xs text-[#44474e] leading-relaxed text-justify">
                بستری برای آموزش، پشتیبانی و ساماندهی ادمین‌های پاسخگویی آنلاین جهت اتصال به متقاضیان و کسب‌وکارهایی که نیازمند پاسخگوی چت هستند بدون محدودیت زمانی.
              </p>
              <div className="text-[11px] text-[#0a254d] font-semibold pt-2 border-t border-[#e1e8ff]">
                بستری فراهم شده است تا افراد بدون محدودیت در ادمین سنتر شروع فعالیت کنند و دستمزد روزانه داشته باشند
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#f1f3ff] border border-[#e1e8ff] flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#0a254d] font-bold">
                <span className="material-symbols-outlined text-[#513600] text-[22px]">chat_bubble</span>
                <span className="text-sm">۲. وظیفه ادمین و درآمد</span>
              </div>
              <p className="text-xs text-[#44474e] leading-relaxed text-justify">
                پاسخگویی به متقاضیان چت در پلتفرم دیوار به مدت ۴ الی ۵ ساعت کاری روزانه با درآمد تخمینی ۱/۵ تا ۲ میلیون تومان به بالا در روز که شبانه تسویه می‌شود.
              </p>
              <div className="text-[11px] text-[#0a254d] font-semibold pt-2 border-t border-[#e1e8ff]">
                افرادی که در برنامه دیوار دنبال کار میگردن به شما پیام میدن و شما شرایط را توضیح میدهید.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#f1f3ff] border border-[#e1e8ff] flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#0a254d] font-bold">
                <span className="material-symbols-outlined text-emerald-600 text-[22px]">task_alt</span>
                <span className="text-sm">۳. نحوه دقیق استخدام</span>
              </div>
              <div className="text-xs text-[#44474e] leading-relaxed text-justify flex flex-col gap-1">
                <span><strong>گام ۱:</strong> تکمیل فرم زیر</span>
                <span><strong>گام ۲:</strong> گرفتن اسکرین‌شات از فرم تاییدشده</span>
                <span><strong>گام ۳:</strong> واریز ۲۹۹ هزار تومان مصوب</span>
                <span>
                  <strong>گام ۴:</strong> ارسال فیش + عکس فرم به آیدی مدیر در بله{' '}
                  <strong className="text-[#1e5bba] font-mono" dir="ltr">
                    @DivarEstekhdam
                  </strong>
                </span>
                <span className="text-emerald-700 font-bold">
                  <strong>گام ۵:</strong> دریافت فایل آموزشی و استارت کار!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="glass-card p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid-2">
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">
                  نام و نام‌خانوادگی <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="form-input"
                  placeholder="مثال: علی رضایی"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="mobileNumber">
                  شماره تلفن همراه <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="form-input"
                  dir="ltr"
                  placeholder="09123456789"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="messengerId">
                  آیدی پیام‌رسان بله یا تلگرام{' '}
                  <span className="text-xs font-normal text-slate-500">(ترجیحاً بله)</span>
                </label>
                <input
                  type="text"
                  id="messengerId"
                  value={messengerId}
                  onChange={(e) => setMessengerId(e.target.value)}
                  className="form-input"
                  dir="ltr"
                  placeholder="@Your_ID"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="dailyHours">
                  مدت زمان آمادگی برای پاسخگویی در روز
                </label>
                <select
                  id="dailyHours"
                  value={dailyHours}
                  onChange={(e) => setDailyHours(e.target.value)}
                  className="form-select"
                >
                  <option value="۲ الی ۴ ساعت در روز (پاره‌وقت)">۲ الی ۴ ساعت در روز (پاره‌وقت)</option>
                  <option value="۴ الی ۶ ساعت در روز (نیمه‌وقت)">۴ الی ۶ ساعت در روز (نیمه‌وقت)</option>
                  <option value="۶ الی ۸ ساعت در روز (تمام‌وقت)">۶ الی ۸ ساعت در روز (تمام‌وقت)</option>
                  <option value="شیفت شب و ساعات غیراداری">شیفت شب و ساعات غیراداری</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="experience">
                سوابق کاری، تجارب قبلی یا توضیحات تکمیلی{' '}
                <span className="text-xs font-normal text-slate-500">(اختیاری)</span>
              </label>
              <textarea
                id="experience"
                rows={3}
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="form-textarea"
                placeholder="اگر قبلاً تجربه پشتیبانی چت، تایپ سریع یا ادمینی داشته‌اید، مختصراً قید بفرمایید..."
              ></textarea>
            </div>

            <div className="p-4 rounded-xl bg-[#f1f3ff] border border-[#e1e8ff] flex items-start gap-3">
              <input
                type="checkbox"
                id="termsAgreement"
                checked={termsAgreement}
                onChange={(e) => setTermsAgreement(e.target.checked)}
                className="mt-1 w-5 h-5 cursor-pointer text-[#0a254d] accent-[#0a254d]"
                required
              />
              <label
                htmlFor="termsAgreement"
                className="text-xs text-[#121b2e] leading-relaxed cursor-pointer text-right"
              >
                کلیه شرایط، قوانین، راهنمای فعالیت و بیانیه شفاف‌سازی ادمین سنتر را مطالعه کرده‌ام و متعهد می‌گردم اطلاعات درج‌شده فوق کاملاً صحیح و متعلق به خودم است. همچنین مطلع هستم ادمین سنتر ارائه‌دهنده آموزش و سازماندهی است و تعهد استخدام دولتی ندارد.
              </label>
            </div>

            {/* Energy Booster: Above Submit Button */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-50 via-emerald-100/70 to-emerald-50 border-2 border-emerald-400/80 flex items-center gap-3 text-right shadow-sm">
              <span className="material-symbols-outlined text-emerald-700 text-[24px] shrink-0">payments</span>
              <p className="text-xs sm:text-sm font-black text-emerald-950 leading-relaxed">
                انگیزه اصلی شما: تنها با ۴ ساعت پاسخگویی روزانه، <span className="text-[#0a254d] underline decoration-emerald-500 font-black">درآمد روزانه ۱ میلیون و ۵۰۰ به بالا داری و هرشب برات واریز میشه!</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
              <button
                type="submit"
                id="submitFormBtn"
                className="btn-navy w-full sm:w-auto text-xs sm:text-sm py-3.5 px-6 flex items-center justify-center gap-2"
              >
                <span>ثبت اطلاعات و صدور برگه همکاری</span>
                <span className="material-symbols-outlined text-[20px]">arrow_circle_left</span>
              </button>

              <div className="flex items-center gap-1.5 text-xs text-[#74777f]">
                <span className="material-symbols-outlined text-emerald-600 text-[18px]">lock</span>
                <span>امنیت اطلاعات و حفاظت از حریم خصوصی متقاضیان</span>
              </div>
            </div>
          </form>

          {/* Dynamic Result Card */}
          {submittedData && (
            <div
              id="formSuccessAlert"
              className="mt-8 p-6 rounded-2xl bg-white border-2 border-emerald-500 shadow-xl text-right animate-fadeIn"
            >
              <div className="flex items-center justify-between border-b border-[#e1e8ff] pb-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-emerald-600 text-[34px]">
                    check_circle
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-emerald-900">
                      فرم همکاری با موفقیت در سامانه ثبت گردید!
                    </h3>
                    <p className="text-xs text-[#44474e]">
                      کد پیگیری پرونده شما:{' '}
                      <strong className="font-mono text-[#0a254d] text-base select-all">
                        {submittedData.trackingCode}
                      </strong>
                    </p>
                  </div>
                </div>
                <span className="badge-emerald">تکمیل شده</span>
              </div>

              {/* Important Screenshot Notice */}
              <div className="p-4 rounded-xl bg-[#fabc4f]/25 border-2 border-[#fabc4f] flex items-start gap-3 mb-5">
                <span className="material-symbols-outlined text-[#513600] text-[28px] shrink-0">
                  photo_camera
                </span>
                <div className="flex flex-col text-right">
                  <strong className="text-[#513600] text-sm sm:text-base font-bold">
                    دستورالعمل مهم: حتماً از این کادر اسکرین‌شات (عکس) بگیرید!
                  </strong>
                  <p className="text-xs text-[#121b2e] leading-relaxed mt-1 text-justify">
                    پس از پرداخت هزینه مصوب (۲۹۹ هزار تومان)، تصویر فیش واریزی را به همراه اسکرین‌شات این فرم به آیدی مدیر در پیام‌رسان بله (
                    <strong className="text-[#1e5bba] select-all font-mono" dir="ltr">
                      {BANK_CARD_INFO.baleId}
                    </strong>
                    ) ارسال کنید تا فایل آموزشی بلافاصله برای شما ارسال شده و ظرف نیم ساعت کار پاسخگویی خود را آغاز نمایید. به یاد داشته باشید: <strong className="text-emerald-800 font-black">درآمد روزانه ۱ میلیون و ۵۰۰ به بالا داری و هرشب برات واریز میشه!</strong>
                  </p>
                </div>
              </div>

              {/* Summary Data */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-[#f1f3ff] p-4 rounded-xl border border-[#e1e8ff] mb-5 text-xs sm:text-sm">
                <div>
                  <span className="text-[#74777f] text-xs block">نام و نام‌خانوادگی:</span>
                  <strong className="text-[#0a254d]">{submittedData.fullName}</strong>
                </div>
                <div>
                  <span className="text-[#74777f] text-xs block">شماره تماس:</span>
                  <strong className="text-[#0a254d] font-mono" dir="ltr">
                    {submittedData.mobile}
                  </strong>
                </div>
                <div>
                  <span className="text-[#74777f] text-xs block">آیدی پیام‌رسان:</span>
                  <strong className="text-[#0a254d] font-mono" dir="ltr">
                    {submittedData.messengerId}
                  </strong>
                </div>
                <div>
                  <span className="text-[#74777f] text-xs block">ساعات آمادگی در روز:</span>
                  <strong className="text-[#0a254d]">{submittedData.dailyHours}</strong>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-[#74777f] text-xs block">توضیحات / سوابق:</span>
                  <strong className="text-[#121b2e]">{submittedData.experience}</strong>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    className="btn-navy text-xs py-2 px-5"
                    href="#payment-section"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span>مشاهده اطلاعات حساب و واریز ۲۹۹ تومان</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="btn-gold text-xs py-2 px-4 flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {copiedSummary ? 'check' : 'content_copy'}
                    </span>
                    <span>{copiedSummary ? 'کپی شد!' : 'کپی مشخصات فرم'}</span>
                  </button>
                </div>

                <button
                  type="button"
                  className="btn-telegram text-xs py-2 px-5"
                  onClick={() => onOpenOrderModal('بسته استخدام ادمین پاسخگوی دیوار', '۲۹۹,۰۰۰ تومان')}
                >
                  <span>ارسال مستقیم فرم در بله / تلگرام</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
