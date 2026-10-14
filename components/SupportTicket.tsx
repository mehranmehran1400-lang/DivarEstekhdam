import { useState, FormEvent } from 'react';
import { TicketSubmission } from '../types';
import { BANK_CARD_INFO } from '../data';

export function SupportTicket() {
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
    <section className="py-16 sm:py-20 bg-white border-t border-[#d1daf4]" id="support">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-blue mb-1">پاسخگویی و رسیدگی</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a254d] mt-1">
            سامانه ثبت تیکت، بازرسی و ارتباط رسمی
          </h2>
          <p className="text-xs sm:text-sm text-[#44474e] mt-2 leading-relaxed">
            چنانچه هرگونه پرسش، انتقاد، تاخیر در بررسی یا شکایتی دارید، می‌توانید از طریق فرم رسمی زیر مستقیماً با بازرسی مدیریت در تماس باشید:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
            <div className="glass-card p-6 flex flex-col gap-5 text-right">
              <span className="text-base font-bold text-[#0a254d]">کانال‌های ارتباطی مستقیم</span>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#d8e2ff] text-[#1e5bba] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">support_agent</span>
                </div>
                <div>
                  <span className="text-xs text-[#74777f]">شناسه پیام‌رسان بله</span>
                  <span className="text-sm text-[#0a254d] font-bold block">پاسخگویی و احراز فیش‌ها</span>
                  <a
                    className="text-[#1e5bba] font-mono font-bold text-sm hover:underline"
                    dir="ltr"
                    href={BANK_CARD_INFO.baleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {BANK_CARD_INFO.baleId}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-[#e1e8ff] pt-4">
                <div className="w-10 h-10 rounded-xl bg-[#ffdead]/50 text-[#513600] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">manage_accounts</span>
                </div>
                <div>
                  <span className="text-xs text-[#74777f]">مدیریت عالی سامانه</span>
                  <span className="text-sm text-[#0a254d] font-bold block">
                    مهران نعمتی (نظارت مستقیم)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-[#e1e8ff] pt-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">schedule</span>
                </div>
                <div>
                  <span className="text-xs text-[#74777f]">ساعات پاسخگویی</span>
                  <span className="text-sm text-[#0a254d] font-bold block">
                    شنبه تا پنج‌شنبه: ۹ صبح الی ۲۱ شب
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Ticket Form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="glass-card p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-[#e1e8ff] pb-4 mb-4">
                <span className="text-base sm:text-lg font-bold text-[#0a254d]">
                  فرم ثبت تیکت و پیام بازرسی
                </span>
                <span className="badge-blue">پاسخگویی سریع</span>
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
                  <label className="form-label" htmlFor="ticketCategory">
                    موضوع پیام
                  </label>
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
                    rows={4}
                    value={ticketMessage}
                    onChange={(e) => setTicketMessage(e.target.value)}
                    className="form-textarea"
                    placeholder="شرح دقیق موضوع خود را یادداشت فرمایید..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-navy w-full py-3 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>ارسال تیکت و دریافت کد رهگیری</span>
                </button>
              </form>

              {lastTicket && (
                <div className="mt-4 p-4 rounded-xl bg-emerald-50 text-emerald-950 border border-emerald-200 text-right animate-fadeIn">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-emerald-600 text-[20px]">
                      check_circle
                    </span>
                    <span className="text-sm font-bold text-emerald-900">
                      تیکت شما با موفقیت در سامانه ثبت گردید.
                    </span>
                  </div>
                  <p className="text-xs text-emerald-800">
                    کد رهگیری تیکت:{' '}
                    <strong className="font-mono text-[#0a254d] text-sm select-all">
                      {lastTicket.trackingCode}
                    </strong>
                    . تیم بازرسی در ساعات اداری موضوع را پیگیری خواهد کرد.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
