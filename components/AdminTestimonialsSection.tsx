export interface AdminReview {
  id: number;
  name: string;
  role: string;
  location: string;
  startDate: string;
  dailyHours: string;
  dailyIncome: string;
  avatar: string;
  rating: number;
  quote: string;
  verifiedShift: string;
}

export const ADMIN_REVIEWS: AdminReview[] = [
  {
    id: 1,
    name: 'سارا احمدی',
    role: 'ادمین پاسخگویی چت نیازمندی‌ها',
    location: 'دورکاری از اصفهان',
    startDate: 'شروع فعالیت: ۵ ماه پیش',
    dailyHours: '۴ ساعت در روز',
    dailyIncome: '۱,۸۵۰,۰۰۰ تومان در روز',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    rating: 5,
    verifiedShift: 'شیفت عصرگاهی (۱۴ الی ۱۸)',
    quote: 'من اوایل واقعاً باورم نمی‌شد که با روزی ۴ ساعت پاسخگویی بشه تسویه روزانه تضمینی گرفت. اما الان ۵ ماهه دقیقاً هر شب ساعت ۱۲ واریزی به حسابم میشینه. فایل آموزشی آقای نعمتی فوق‌العاده ساده و روون بود و بدون هیچ سردرگمی کار رو استارت زدم.'
  },
  {
    id: 2,
    name: 'محمدرضا کمالی',
    role: 'ادمین ارشد شیفت شب',
    location: 'تهران - حضور دوره‌ای در دفتر صادقیه',
    startDate: 'شروع فعالیت: ۸ ماه پیش',
    dailyHours: '۴.۵ ساعت در شیفت شب',
    dailyIncome: '۲,۱۰۰,۰۰۰ تومان در روز',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
    rating: 5,
    verifiedShift: 'شیفت شبانه (۲۲ الی ۲:۳۰ بامداد)',
    quote: 'چون روزها دانشجو هستم، شیفت شب ادمین سنتر بهترین فرصت برای من بود. پشتیبانی ۲۴ ساعته مجموعه واقعاً بی‌نظیره. حتی برای اطمینان بیشتر حضوری به دفتر صادقیه فلکه دوم رفتم و با آقای نعمتی صحبت کردم؛ شفافیت و نظم اداری‌شون مثال‌زدنیه.'
  },
  {
    id: 3,
    name: 'فاطمه نوری',
    role: 'ادمین پاسخگویی و ثبت سفارش',
    location: 'دورکاری از شیراز',
    startDate: 'شروع فعالیت: ۳ ماه پیش',
    dailyHours: '۵ ساعت پراکنده در روز',
    dailyIncome: '۱,۶۵۰,۰۰۰ تومان در روز',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80',
    rating: 5,
    verifiedShift: 'ساعات شناور و منعطف',
    quote: 'بزرگترین مزیت این کار اینه که ساعت کاری کاملاً دست خودمه. هر زمان بچه‌ام می‌خوابه گوشی رو برمی‌دارم و به چت‌ها جواب میدم. درآمد روزانه ۱.۵ تا ۲ میلیون تومان با تسویه منظم شبانه واقعاً به معیشت خانواده‌ام کمک بزرگی کرده.'
  },
  {
    id: 4,
    name: 'علی یزدانی',
    role: 'ادمین تخصصی متقاعدسازی و چت',
    location: 'دورکاری از مشهد',
    startDate: 'شروع فعالیت: ۶ ماه پیش',
    dailyHours: '۵ ساعت در روز',
    dailyIncome: '۲,۴۰۰,۰۰۰ تومان در روز',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80',
    rating: 5,
    verifiedShift: 'شیفت صبح و ظهر (۱۰ الی ۱۵)',
    quote: 'الگوهای آماده و سناریوهای پاسخگویی که در فایل آموزشی به ما دادن فوق‌العاده کاربردی بود. یاد گرفتم چطور با احترام و سرعت بالا پیام‌ها رو مدیریت کنم. درآمد بالای ۱.۵ میلیون هر شب واریز میشه و تو این ۶ ماه یک بار هم تاخیر نداشته.'
  },
  {
    id: 5,
    name: 'مهسا ابراهیمی',
    role: 'ادمین پاسخگویی نیازمندی‌ها',
    location: 'کرج (همکاری آنلاین و حضوری)',
    startDate: 'شروع فعالیت: ۴ ماه پیش',
    dailyHours: '۴ ساعت در روز',
    dailyIncome: '۱,۷۵۰,۰۰۰ تومان در روز',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&q=80',
    rating: 5,
    verifiedShift: 'شیفت عصر (۱۶ الی ۲۰)',
    quote: 'از توی خونه با یک گوشی معمولی کار کردن و درآمد عالی داشتن بهترین حس دنیاست. وجود نماد اعتماد الکترونیکی و دفتر رسمی مجموعه در فلکه دوم صادقیه باعث شد از روز اول با خیال آسوده کارم رو شروع کنم. به هرکسی جویای کاره توصیه‌اش می‌کنم.'
  }
];

export function AdminTestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#0a1e3f] via-[#0d254c] to-[#07162e] text-white relative overflow-hidden border-y-2 border-[#fabc4f]/50" id="testimonials">
      
      {/* Luxury Metallic Glow & Ambient Background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#fabc4f]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1e5bba]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fabc4f_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#fabc4f]/20 via-[#ffd977]/30 to-[#fabc4f]/20 border border-[#fabc4f]/70 text-[#ffdead] text-xs font-black shadow-[0_4px_20px_rgba(250,188,79,0.25)] mb-4">
            <span className="material-symbols-outlined text-[18px] text-[#fabc4f]">hotel_class</span>
            <span>صدای واقعی همکاران فعال و شاغل</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-snug">
            نظرات کارمندان و <span className="text-[#fabc4f] underline decoration-[#fabc4f]/50 decoration-wavy underline-offset-8">ادمین‌های برگزیده</span> ادمین سنتر
          </h2>

          <p className="text-xs sm:text-base text-[#b0c7f8] mt-3 leading-relaxed">
            داستان موفقیت و تجربه همکارانی که بدون شرایط خاص و تنها با تعهد و ۴ الی ۵ ساعت کار روزانه، به درآمد تضمینی و تسویه هر شب ساعت ۱۲ دست یافته‌اند:
          </p>

          {/* Quick Stats Badges */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-[#fabc4f]/30 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-lg">
              <span className="font-mono text-xl sm:text-2xl font-black text-[#fabc4f]">+۵۰۰</span>
              <span className="text-[11px] sm:text-xs text-[#d7e2ff] mt-0.5 font-medium">ادمین فعال سراسر کشور</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-emerald-400/30 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-lg">
              <span className="font-mono text-xl sm:text-2xl font-black text-emerald-400">۱۰۰٪</span>
              <span className="text-[11px] sm:text-xs text-[#d7e2ff] mt-0.5 font-medium">تسویه منظم رأس ساعت ۲۴</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-[#fabc4f]/30 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-lg">
              <span className="font-mono text-xl sm:text-2xl font-black text-[#fabc4f]">۱.۸ م</span>
              <span className="text-[11px] sm:text-xs text-[#d7e2ff] mt-0.5 font-medium">میانگین واریز روزانه</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-emerald-400/30 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-lg">
              <span className="font-mono text-xl sm:text-2xl font-black text-emerald-400">۵.۰ / ۵</span>
              <span className="text-[11px] sm:text-xs text-[#d7e2ff] mt-0.5 font-medium">شاخص رضایت همکاران</span>
            </div>
          </div>
        </div>

        {/* 5 Luxury Testimonials Grid (Top row: 3 cards, Bottom row: 2 cards centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {ADMIN_REVIEWS.map((review, index) => (
            <div
              key={review.id}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(250,188,79,0.25)] border-2 ${
                index === 0
                  ? 'bg-gradient-to-br from-[#122b52] via-[#163665] to-[#0c1f3b] border-[#fabc4f] shadow-xl'
                  : 'bg-gradient-to-br from-[#0e2343]/90 via-[#132c52]/90 to-[#0a1b35]/90 border-[#2a4575] hover:border-[#fabc4f]/80 shadow-lg'
              } ${index >= 3 ? 'lg:col-span-1 md:last:col-span-2 lg:last:col-span-1' : ''}`}
            >
              {/* Top Card Bar: Avatar, Info, Verified Tag */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    {/* User Avatar with Metallic Ring */}
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-[#fabc4f] via-white to-[#fabc4f] shrink-0 shadow-md">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-full h-full object-cover rounded-[14px]"
                        loading="lazy"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center border-2 border-[#0a1e3f] shadow">
                        <span className="material-symbols-outlined text-[12px] font-black">check</span>
                      </div>
                    </div>

                    <div className="flex flex-col text-right">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-black text-base sm:text-lg text-white group-hover:text-[#fabc4f] transition-colors">
                          {review.name}
                        </h4>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 font-bold">
                          احراز شده
                        </span>
                      </div>
                      <span className="text-xs text-[#fabc4f] font-semibold mt-0.5">
                        {review.role}
                      </span>
                      <span className="text-[11px] text-[#b0c7f8]">
                        {review.location}
                      </span>
                    </div>
                  </div>

                  {/* Quote Emblem */}
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#fabc4f] shrink-0 group-hover:bg-[#fabc4f]/20 transition-colors">
                    <span className="material-symbols-outlined text-[24px]">format_quote</span>
                  </div>
                </div>

                {/* Rating & Start Date Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 py-2.5 px-3 rounded-xl bg-black/25 border border-white/10 mb-4 text-xs">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span
                        key={s}
                        className="material-symbols-outlined text-[#fabc4f] text-[18px] fill-current"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                    <span className="text-[11px] text-[#ffd977] font-bold mr-1">۵ از ۵</span>
                  </div>

                  <span className="text-[11px] text-[#d7e2ff] font-medium">
                    {review.startDate}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-[#d9e4ff] leading-relaxed text-justify mb-5 font-normal">
                  «{review.quote}»
                </p>
              </div>

              {/* Bottom Card Footer: Daily Income & Shift Details */}
              <div className="pt-4 border-t border-white/15 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#b0c7f8] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-[#fabc4f]">schedule</span>
                    <span>{review.dailyHours}</span>
                  </span>
                  <span className="text-emerald-300 font-bold text-[11px] bg-emerald-950/60 px-2 py-0.5 rounded-lg border border-emerald-500/30">
                    {review.verifiedShift}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-gradient-to-r from-emerald-500/20 via-emerald-400/25 to-emerald-500/20 border border-emerald-400/50 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-200">دریافتی تسویه شده:</span>
                  <span className="text-xs sm:text-sm font-black text-emerald-300 font-mono">
                    {review.dailyIncome}
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Motivational Callout Banner under Testimonials */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-[#143265] via-[#1e468a] to-[#143265] border-2 border-[#fabc4f] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-right">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#fabc4f] text-[#0a254d] flex items-center justify-center shrink-0 shadow-xl font-bold">
              <span className="material-symbols-outlined text-[32px]">handshake</span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                شما هم می‌توانید همین امشب به جمع همکاران راضی ما بپیوندید!
              </h3>
              <p className="text-xs sm:text-sm text-[#d7e2ff] mt-1 leading-relaxed">
                تنها با پر کردن فرم و دریافت فایل آموزشی رایگان؛ <strong className="text-[#fabc4f]">درآمد روزانه ۱ میلیون و ۵۰۰ به بالا داری و هرشب برات واریز میشه</strong>.
              </p>
            </div>
          </div>

          <a
            href="#start-cooperation"
            className="btn-gold py-3 px-7 text-xs sm:text-sm font-black shrink-0 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <span>شروع فعالیت و استخدام</span>
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </a>
        </div>

      </div>
    </section>
  );
}
