import { useState } from 'react';
import { BANK_CARD_INFO } from '../data';

export function PaymentCard() {
  const [copied, setCopied] = useState(false);

  const handleCopyCard = () => {
    navigator.clipboard.writeText(BANK_CARD_INFO.rawNumber);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#e1e8ff] border-t border-[#fabc4f]/30" id="payment-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="badge-gold mb-2">درگاه رسمی واریز و تایید حسابداری</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a254d]">
            مشخصات حساب و واریز هزینه مصوب
          </h2>
          <p className="text-xs sm:text-sm text-[#44474e] max-w-2xl mx-auto mt-2 leading-relaxed">
            پس از تکمیل فرم، مبلغ مصوب را به شماره کارت رسمی زیر واریز کرده و تصویر فیش را در پیام‌رسان (بله) ارسال فرمایید.
          </p>
        </div>

        {/* Luxury Bank Card */}
        <div className="bank-card">
          <div className="bank-card-glow"></div>
          
          <div className="relative z-10 flex flex-col gap-6">
            
            {/* Energy Booster: Critical Payment Motivation Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/25 via-emerald-400/35 to-emerald-500/25 border-2 border-emerald-400 flex flex-col gap-2.5 text-right shadow-lg">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-[26px]">paid</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-black text-[#86efac] leading-tight">
                    خیالت کاملاً راحت باشه! درآمد روزانه ۱ میلیون و ۵۰۰ به بالا داری و هرشب برات واریز میشه
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#d7e2ff] mt-0.5">
                    مبلغ ۲۹۹ تومانی پشتیبانی در همان ساعت‌های ابتدایی کار با پاسخگویی به چت‌ها فوراً جبران می‌شود.
                  </span>
                </div>
              </div>
              <div className="pt-2 border-t border-emerald-400/30 flex items-center gap-2 text-xs font-bold text-[#ffdead]">
                <span className="material-symbols-outlined text-[18px] text-emerald-300">verified_user</span>
                <span>ما دارای نماد اعتماد فعالیت الکترونیکی هستیم و بصورت حضوری هم پذیرش افراد رو داریم.</span>
              </div>
            </div>

            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/20 pb-4 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#ffdead]">
                  <span className="material-symbols-outlined text-[32px]">credit_card</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs text-[#b0c7f8]">کارت حسابداری اختصاصی مجموعه ادمین سنتر</span>
                  <span className="text-sm font-bold text-white">سامانه امور مالی و پشتیبانی</span>
                </div>
              </div>
              <div className="text-right sm:text-left">
                <span className="text-xs text-[#b0c7f8] block">هزینه مصوب سامانه</span>
                <span className="text-xl sm:text-2xl font-black text-[#fabc4f]">
                  ۲۹۹,۰۰۰ <span className="text-xs font-normal text-white">تومان</span>
                </span>
              </div>
            </div>

            {/* Card Number */}
            <div className="flex flex-col gap-2 text-center py-2">
              <span className="text-xs sm:text-sm text-[#b0c7f8]">شماره کارت معتبر واریز (به نام مهران نعمتی)</span>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
                <span
                  className="font-mono text-xl sm:text-3xl tracking-widest text-white font-black bg-[#0a254d]/90 px-6 py-3 rounded-xl border border-[#fabc4f]/50 select-all shadow-inner"
                  dir="ltr"
                >
                  {BANK_CARD_INFO.number}
                </span>

                <button
                  type="button"
                  onClick={handleCopyCard}
                  className="btn-gold text-xs sm:text-sm py-2.5 px-5 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  <span>{copied ? 'شماره کارت کپی شد!' : 'کپی شماره کارت'}</span>
                </button>
              </div>

              <span className="text-sm text-[#fabc4f] mt-2 font-medium">
                دارنده حساب: <strong className="text-white font-bold">{BANK_CARD_INFO.holder}</strong>
              </span>

              {copied && (
                <div className="mx-auto mt-2 px-4 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-bold shadow animate-bounce">
                  شماره کارت ۱۶ رقمی با موفقیت در حافظه ذخیره شد!
                </div>
              )}
            </div>

            {/* Next Step Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-[#fabc4f]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-right">
                <div className="w-12 h-12 rounded-xl bg-[#6b9cff]/20 text-[#6b9cff] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[26px]">forward_to_inbox</span>
                </div>
                <div>
                  <span className="text-sm sm:text-base font-bold text-white">مرحله بعد: ارسال فیش واریز</span>
                  <p className="text-xs text-[#b0c7f8] mt-0.5">
                    تصویر رسید پرداخت را همراه با اسکرین‌شات فرم ثبت‌نام، به شناسه بله مدیریت ارسال کنید:
                  </p>
                </div>
              </div>

              <a
                className="btn-telegram text-xs py-2 px-5 shrink-0"
                dir="ltr"
                href={BANK_CARD_INFO.baleUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>{BANK_CARD_INFO.baleId}</span>
              </a>
            </div>

            {/* Bottom Note */}
            <div className="text-justify border-t border-white/15 pt-4 text-xs sm:text-sm text-[#b0c7f8] leading-relaxed">
              تصویر فیش تراکنش + تصویر فرم تکمیلی استخدام رو ارسال کنید و همان لحظه فایل اموزش رایگان ارسال میشود و شروع همکاری و درامد نیم ساعت بعداز خواندن فایل اموزشی + پشتیبانی 24 ساعته مدیریت مجموعه اقای مهران نعمتی
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
