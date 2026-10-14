import { useState } from 'react';
import { BANK_CARD_INFO } from '../data';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  packagePrice: string;
}

export function OrderModal({ isOpen, onClose, packageName, packagePrice }: OrderModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const preFilledMessage = `سلام وقت بخیر، متقاضی ${packageName} (${packagePrice}) در ادمین سنتر هستم.
لطفاً راهنمایی بفرمایید.`;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(preFilledMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 text-right shadow-2xl border border-slate-200 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#ffdead] text-[#513600] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[26px]">chat</span>
          </div>
          <div>
            <h3 className="text-lg font-black text-[#0a254d]">ارتباط با مدیریت در بله و تلگرام</h3>
            <span className="text-xs text-slate-500">پاسخگویی سریع جهت ثبت سفارش و شروع همکاری</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-4 text-xs sm:text-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500">مورد درخواستی:</span>
            <strong className="text-[#0a254d] font-bold">{packageName}</strong>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">تعرفه مصوب:</span>
            <strong className="text-[#1e5bba] font-bold">{packagePrice}</strong>
          </div>
        </div>

        <div className="mb-4">
          <label className="text-xs font-bold text-slate-700 block mb-1.5">
            متن آماده جهت ارسال به مدیر (کپی کنید و بفرستید):
          </label>
          <div className="relative">
            <textarea
              readOnly
              rows={3}
              value={preFilledMessage}
              className="w-full text-xs font-sans p-3 bg-slate-100 rounded-xl border border-slate-200 text-slate-800 resize-none select-all focus:outline-none"
            />
            <button
              type="button"
              onClick={handleCopyMessage}
              className="absolute left-2 bottom-2 text-xs bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? 'کپی شد!' : 'کپی پیام'}</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <a
            href={BANK_CARD_INFO.baleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-telegram w-full py-2.5 text-xs flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">send</span>
            <span>ورود مستقیم به پیام‌رسان بله (@DivarEstekhdam)</span>
          </a>

          <a
            href={BANK_CARD_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy w-full py-2.5 text-xs flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">forum</span>
            <span>ورود به تلگرام رسمی مجموعه</span>
          </a>
        </div>
      </div>
    </div>
  );
}
