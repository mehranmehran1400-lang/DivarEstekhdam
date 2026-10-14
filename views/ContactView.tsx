import { useState, FormEvent } from 'react';
import { BANK_CARD_INFO } from '../data';
import { TicketSubmission } from '../types';
import { BaladVerificationSection } from '../components/BaladVerificationSection';

interface ContactViewProps {
  onOpenOrderModal: (title: string, price: string) => void;
}

export function ContactView({ onOpenOrderModal }: ContactViewProps) {
  const [ticketName, setTicketName] = useState('');
  const [ticketPhone, setTicketPhone] = useState('');
  const [ticketCategory, setTicketCategory] = useState('سوال درباره روند ثبت‌نام و فایل‌ها');
  const [ticketMessage, setTicketMessage] = useState('');
  const [lastTicket, setLastTicket] = useState<TicketSubmission | null>(null);

  const handleTicketSubmit = (e: FormEvent) => {
    e.preventDefault();
    const code = `TCK-${Math.floor(10000 + Math.random() * 90000)}`;
    const ticket: TicketSubmission = {
      trackingCode: code,
      name: ticketName.trim(),
      phone: ticketPhone.trim(),
      category: ticketCategory,
      message: ticketMessage.trim(),
      createdAt: new Date().toLocaleDateString('fa-IR'),
      status: 'ثبت اولیه'
    };

    setLastTicket(ticket);
    setTicketName('');
    setTicketPhone('');
    setTicketMessage('');
  };

  return (
    <div>
      {/* Header */}
      <section className="py-14 sm:py-18 bg-[#0a254d] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge-gold mb-3">پاسخگویی ۲۴ ساعته</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            تماس، پشتیبانی و ثبت تیکت رسمی
          </h1>
          <p className="text-sm sm:text-base text-[#b0c7f8] leading-relaxed max-w-2xl mx-auto">
            ارتباط مستقیم با مدیریت مهران نعمتی، ارسال مدارک، پیگیری واریزی‌ها یا ثبت پیشنهادات و شکایات از طریق این سامانه انجام می‌گردد.
          </p>
        </div>
      </section>

      {/* Contact Channels & Ticket Form */}
      <section className="py-16 sm:py-20 bg-[#f9f9ff]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Contact Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
              
              {/* Bale / Telegram Quick Card */}
              <div className="glass-card p-6 border-2 border-[#fabc4f]/50 bg-gradient-to-br from-white to-[#f1f3ff]">
                <span className="badge-gold mb-3">سریع‌ترین راه ارتباط</span>
                <h3 className="text-lg font-black text-[#0a254d] mb-2">پیام‌رسان رسمی بله و تلگرام</h3>
                <p className="text-xs text-[#44474e] leading-relaxed mb-4 text-justify">
                  جهت ارسال فیش واریز، دریافت فایل آموزشی، پرسیدن سوال و احراز اطلاعات، مستقیماً به شناسه زیر پیام دهید:
                </p>
                <div className="p-3.5 rounded-xl bg-white border border-[#e1e8ff] flex items-center justify-between mb-4">
                  <span className="text-xs text-slate-500 font-medium">شناسه رسمی:</span>
                  <strong className="text-base text-[#1e5bba] font-mono select-all" dir="ltr">
                    {BANK_CARD_INFO.baleId}
                  </strong>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    className="btn-telegram text-xs py-2.5 flex items-center justify-center gap-2"
                    dir="ltr"
                    href={BANK_CARD_INFO.baleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>ورود به بله ({BANK_CARD_INFO.baleId})</span>
                  </a>
                  <button
                    type="button"
                    className="btn-gold text-xs py-2.5 flex items-center justify-center gap-2"
                    onClick={() => onOpenOrderModal('مشاوره و پشتیبانی فوری', 'رایگان')}
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>سفارش یا پیام از طریق تلگرام</span>
                  </button>
                </div>
              </div>

              {/* Management Supervision */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ffdead]/50 text-[#513600] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">manage_accounts</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0a254d]">نظارت عالیه</h4>
                    <span className="text-xs text-slate-500">مهران نعمتی (مدیریت مستقیم)</span>
                  </div>
                </div>
                <p className="text-xs text-[#44474e] leading-relaxed text-justify">
                  هرگونه تاخیر احتمالی در بررسی فیش‌ها یا فایل‌های آموزشی فوراً توسط مدیریت پیگیری خواهد شد.
                </p>
              </div>

              {/* Location & Verification */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#d7e2ff] text-[#0a254d] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0a254d]">مسیریابی و حضور در دفتر</h4>
                    <span className="text-xs text-slate-500">ثبت رسمی در اپلیکیشن بلد</span>
                  </div>
                </div>
                <p className="text-xs text-[#44474e] leading-relaxed text-justify">
                  با جستجوی عبارت «ادمین سنتر» در مسیریاب بلد، موقعیت دقیق سالن عملیات به شما نمایش داده می‌شود.
                </p>
              </div>

            </div>

            {/* Right: Interactive Ticket Submission Form */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="glass-card p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-[#e1e8ff] pb-4 mb-4">
                  <div>
                    <h3 className="text-lg font-black text-[#0a254d]">فرم ثبت تیکت رسمی</h3>
                    <p className="text-xs text-[#74777f] mt-0.5">دریافت کد رهگیری سیستمی بلافاصله پس از ثبت</p>
                  </div>
                  <span className="badge-blue">سیستم بازرسی</span>
                </div>

                <form onSubmit={handleTicketSubmit} className="flex flex-col gap-4">
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="ticketName">
                        نام و نام خانوادگی <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="ticketName"
                        value={ticketName}
                        onChange={(e) => setTicketName(e.target.value)}
                        className="form-input"
                        placeholder="نام شما"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="ticketPhone">
                        شماره تماس پیگیری <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="ticketPhone"
                        value={ticketPhone}
                        onChange={(e) => setTicketPhone(e.target.value)}
                        className="form-input"
                        dir="ltr"
                        placeholder="09xxxxxxxxx"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="ticketCategory">موضوع پیام</label>
                    <select
                      id="ticketCategory"
                      value={ticketCategory}
                      onChange={(e) => setTicketCategory(e.target.value)}
                      className="form-select"
                    >
                      <option value="سوال درباره روند ثبت‌نام و فایل‌ها">سوال درباره روند ثبت‌نام و فایل‌ها</option>
                      <option value="پیگیری وضعیت فیش واریزی ارسالی">پیگیری وضعیت فیش واریزی ارسالی</option>
                      <option value="ثبت شکایت رسمی و گزارش مشکل">ثبت شکایت رسمی و گزارش مشکل</option>
                      <option value="پیشنهاد همکاری یا بهبود خدمات">پیشنهاد همکاری یا بهبود خدمات</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="ticketMessage">
                      متن پیام یا شرح شکایت <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="ticketMessage"
                      rows={5}
                      value={ticketMessage}
                      onChange={(e) => setTicketMessage(e.target.value)}
                      className="form-textarea"
                      placeholder="شرح دقیق موضوع خود را یادداشت فرمایید تا بازرس سامانه فوراً پیگیری نماید..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-navy w-full py-3.5 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>ارسال تیکت و دریافت کد رهگیری</span>
                  </button>
                </form>

                {lastTicket && (
                  <div className="mt-5 p-4 rounded-xl bg-emerald-50 text-emerald-950 border border-emerald-200 text-right animate-fadeIn">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-emerald-600 text-[22px]">check_circle</span>
                      <strong className="text-sm text-emerald-900">تیکت شما با موفقیت ثبت گردید.</strong>
                    </div>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      کد رهگیری تیکت:{' '}
                      <strong className="font-mono text-[#0a254d] text-sm select-all">
                        {lastTicket.trackingCode}
                      </strong>
                      . پاسخ بررسی از طریق پیام‌رسان بله یا پیامک ارسال خواهد شد.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Balad Map Verification */}
      <BaladVerificationSection />
    </div>
  );
}
