/**
 * ادمین سنتر | اسکریپت اصلی و تعاملی جاوااسکریپت وانیلا
 * آماده استقرار مستقیم در Cloudflare Pages و سرورهای استاتیک
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileNavDrawer.classList.contains('hidden');
      if (isHidden) {
        mobileNavDrawer.classList.remove('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
        if (icon) icon.textContent = 'close';
      } else {
        mobileNavDrawer.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
        if (icon) icon.textContent = 'menu';
      }
    });
  }

  // Close mobile menu when clicking any nav link inside drawer
  document.querySelectorAll('#mobileNavDrawer a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNavDrawer) {
        mobileNavDrawer.classList.add('hidden');
        if (mobileMenuBtn) {
          const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
          if (icon) icon.textContent = 'menu';
        }
      }
    });
  });

  // 2. Fast Order Modal (Telegram & Bale)
  const orderModal = document.getElementById('orderModal');
  const modalPackageTitle = document.getElementById('modalPackageTitle');
  const modalPackagePrice = document.getElementById('modalPackagePrice');
  const modalBaleLink = document.getElementById('modalBaleLink');
  const modalTelegramLink = document.getElementById('modalTelegramLink');
  const modalCloseBtns = document.querySelectorAll('.close-modal-btn');

  function openOrderModal(packageName, packagePrice) {
    if (!orderModal) return;
    if (modalPackageTitle) modalPackageTitle.textContent = packageName || 'بسته استخدام ادمین پاسخگوی دیوار';
    if (modalPackagePrice) modalPackagePrice.textContent = (packagePrice || '۲۹۹,۰۰۰') + ' تومان';

    const encodedText = encodeURIComponent(`سلام و درود، من متقاضی استخدام و همکاری برای «${packageName || 'بسته ادمین'}» در ادمین سنتر هستم. لطفاً راهنمایی بفرمایید.`);
    if (modalBaleLink) modalBaleLink.href = `https://ble.ir/DivarEstekhdam`;
    if (modalTelegramLink) modalTelegramLink.href = `https://t.me/DivarEstekhdam?text=${encodedText}`;

    orderModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeOrderModal() {
    if (!orderModal) return;
    orderModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.open-order-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pkg = btn.getAttribute('data-package') || 'بسته استخدام ادمین پاسخگوی دیوار';
      const price = btn.getAttribute('data-price') || '۲۹۹,۰۰۰';
      openOrderModal(pkg, price);
    });
  });

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', closeOrderModal);
  });

  if (orderModal) {
    orderModal.addEventListener('click', (e) => {
      if (e.target === orderModal) {
        closeOrderModal();
      }
    });
  }

  // 3. One-Click Copy Buttons
  // A) Copy Bank Card Number
  const copyCardBtn = document.getElementById('copyCardBtn');
  const copyCardFeedback = document.getElementById('copyCardFeedback');

  if (copyCardBtn) {
    copyCardBtn.addEventListener('click', () => {
      const rawCard = '5022291595220581';
      navigator.clipboard.writeText(rawCard).then(() => {
        copyCardBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">check</span><span>کپی شد!</span>';
        if (copyCardFeedback) copyCardFeedback.classList.remove('hidden');
        setTimeout(() => {
          copyCardBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">content_copy</span><span>کپی شماره کارت</span>';
          if (copyCardFeedback) copyCardFeedback.classList.add('hidden');
        }, 3000);
      });
    });
  }

  // B) Copy Address Buttons
  document.querySelectorAll('.copy-address-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const address = 'تهران، صادقیه، فلکه دوم، جنب املاک خورشید';
      navigator.clipboard.writeText(address).then(() => {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<span class="material-symbols-outlined text-[16px]">check</span><span>آدرس کپی شد</span>';
        setTimeout(() => {
          btn.innerHTML = originalHtml;
        }, 2500);
      });
    });
  });

  // C) Copy Balad Search Query
  const copyBaladQueryBtn = document.getElementById('copyBaladQueryBtn');
  if (copyBaladQueryBtn) {
    copyBaladQueryBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('ادمین سنتر').then(() => {
        const originalHtml = copyBaladQueryBtn.innerHTML;
        copyBaladQueryBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">check</span><span>نام ادمین سنتر کپی شد</span>';
        setTimeout(() => {
          copyBaladQueryBtn.innerHTML = originalHtml;
        }, 2500);
      });
    });
  }

  // 4. FAQ Live Search & Accordion
  const faqSearchInput = document.getElementById('faqSearchInput');
  const faqListContainer = document.getElementById('faqListContainer');
  const noFaqMatch = document.getElementById('noFaqMatch');

  if (faqListContainer) {
    // Accordion Toggle
    faqListContainer.addEventListener('click', (e) => {
      const header = e.target.closest('.faq-header');
      if (!header) return;
      const faqItem = header.closest('.faq-item');
      if (!faqItem) return;

      const answer = faqItem.querySelector('.faq-answer');
      const icon = faqItem.querySelector('.faq-icon');

      const isOpen = !answer.classList.contains('hidden');

      if (isOpen) {
        answer.classList.add('hidden');
        if (icon) icon.textContent = 'expand_more';
        faqItem.classList.remove('border-[#1e5bba]');
      } else {
        answer.classList.remove('hidden');
        if (icon) icon.textContent = 'expand_less';
        faqItem.classList.add('border-[#1e5bba]');
      }
    });
  }

  if (faqSearchInput && faqListContainer) {
    faqSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      const items = faqListContainer.querySelectorAll('.faq-item');
      let visibleCount = 0;

      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(q)) {
          item.style.display = 'block';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });

      if (noFaqMatch) {
        if (visibleCount === 0) {
          noFaqMatch.classList.remove('hidden');
        } else {
          noFaqMatch.classList.add('hidden');
        }
      }
    });
  }

  // 5. Cooperation Form Submission Handler
  const cooperationForm = document.getElementById('cooperationForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');
  const submittedSummaryBox = document.getElementById('submittedSummaryBox');
  const copySummaryBtn = document.getElementById('copySummaryBtn');

  if (cooperationForm) {
    cooperationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = (document.getElementById('formFullName')?.value || '').trim();
      const mobile = (document.getElementById('formMobile')?.value || '').trim();
      const messenger = (document.getElementById('formMessenger')?.value || '').trim() || 'ثبت نشده';
      const hours = document.getElementById('formHours')?.value || '۴ الی ۶ ساعت';
      const notes = (document.getElementById('formNotes')?.value || '').trim() || 'بدون توضیح اضافی';

      const randomNum = Math.floor(100000 + Math.random() * 900000);
      const trackingCode = `ADM-${randomNum}`;
      const nowFa = new Date().toLocaleDateString('fa-IR');

      if (formSuccessAlert) {
        formSuccessAlert.classList.remove('hidden');
        formSuccessAlert.scrollIntoView({ behavior: 'smooth' });
      }

      if (submittedSummaryBox) {
        submittedSummaryBox.innerHTML = `
          <div class="flex items-center justify-between pb-3 border-b border-emerald-200">
            <span class="text-xs text-emerald-800 font-bold">کد پرونده استخدامی:</span>
            <span class="font-mono text-base font-black text-emerald-950 px-3 py-1 rounded-lg bg-emerald-100">${trackingCode}</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#0a254d]">
            <div><strong>نام و نام خانوادگی:</strong> ${fullName}</div>
            <div><strong>شماره تماس:</strong> <span dir="ltr">${mobile}</span></div>
            <div><strong>آیدی بله/تلگرام:</strong> <span dir="ltr">${messenger}</span></div>
            <div><strong>ساعات همکاری:</strong> ${hours}</div>
          </div>
          <div class="text-xs text-slate-600 pt-2 border-t border-emerald-100">
            <strong>توضیحات:</strong> ${notes}
          </div>
          <div class="text-[11px] text-emerald-700 font-bold pt-1">
            تاریخ ثبت دیجیتال: ${nowFa} — وضعیت: آماده ارسال تصویر فیش و اسکرین‌شات
          </div>
        `;
      }

      // Prepare copy button text
      if (copySummaryBtn) {
        copySummaryBtn.onclick = () => {
          const summaryText = `📋 فرم ثبت‌نام متقاضی ادمین سنتر
کد رهگیری: ${trackingCode}
نام: ${fullName}
موبایل: ${mobile}
آیدی پیام‌رسان: ${messenger}
ساعات آمادگی: ${hours}
توضیحات: ${notes}
تاریخ: ${nowFa}`;
          navigator.clipboard.writeText(summaryText).then(() => {
            copySummaryBtn.innerHTML = '<span class="material-symbols-outlined text-[16px]">check</span><span>خلاصه کپی شد!</span>';
            setTimeout(() => {
              copySummaryBtn.innerHTML = '<span class="material-symbols-outlined text-[16px]">content_copy</span><span>کپی متن جهت ارسال در بله</span>';
            }, 2500);
          });
        };
      }
    });
  }

  // 6. Support Ticket Form Handler
  const supportTicketForm = document.getElementById('supportTicketForm');
  const ticketSuccessAlert = document.getElementById('ticketSuccessAlert');
  const ticketResultBox = document.getElementById('ticketResultBox');

  if (supportTicketForm) {
    supportTicketForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = (document.getElementById('ticketName')?.value || '').trim();
      const phone = (document.getElementById('ticketPhone')?.value || '').trim();
      const category = document.getElementById('ticketCategory')?.value || 'عمومی';
      const message = (document.getElementById('ticketMessage')?.value || '').trim();

      const ticketNum = Math.floor(10000 + Math.random() * 90000);
      const ticketId = `TCK-${ticketNum}`;

      if (ticketSuccessAlert) {
        ticketSuccessAlert.classList.remove('hidden');
        ticketSuccessAlert.scrollIntoView({ behavior: 'smooth' });
      }

      if (ticketResultBox) {
        ticketResultBox.innerHTML = `
          <div class="flex items-center justify-between pb-2 border-b border-blue-200">
            <span class="text-xs font-bold text-blue-900">شماره پیگیری تیکت:</span>
            <span class="font-mono text-sm font-black text-blue-950 px-2 py-0.5 rounded bg-blue-100">${ticketId}</span>
          </div>
          <div class="text-xs text-slate-700 space-y-1">
            <p><strong>نام فرستنده:</strong> ${name}</p>
            <p><strong>موبایل:</strong> <span dir="ltr">${phone}</span></p>
            <p><strong>موضوع:</strong> ${category}</p>
          </div>
        `;
      }

      supportTicketForm.reset();
    });
  }
});
