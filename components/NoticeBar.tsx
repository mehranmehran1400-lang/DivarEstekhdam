import { BANK_CARD_INFO } from '../data';

export function NoticeBar() {
  return (
    <div className="top-notice-bar">
      <div className="max-w-7xl mx-auto top-notice-content">
        <div className="flex items-center gap-2">
          <span className="pulse-dot"></span>
          <span className="font-bold text-xs sm:text-sm text-[#ffdead]">
            ما دارای نماد اعتماد فعالیت الکترونیکی هستیم و بصورت حضوری هم پذیرش افراد رو داریم
          </span>
          <span className="text-[11px] text-[#b0c7f8] hidden md:inline">
            (مشاهده نماد ۵ ستاره در انتهای صفحه)
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={BANK_CARD_INFO.baleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffdead] font-bold hover:underline transition-colors flex items-center gap-1 text-xs sm:text-sm"
          >
            <span>شناسه رسمی در بله:</span>
            <span dir="ltr" className="font-mono text-white">{BANK_CARD_INFO.baleId}</span>
          </a>
          <span className="text-[#c4c6d0] opacity-40 hidden md:inline">|</span>
          <span className="text-emerald-300 hidden md:inline text-xs font-semibold">پذیرش حضوری در صادقیه</span>
        </div>
      </div>
    </div>
  );
}
