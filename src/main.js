import './styles/base.css';
import './styles/components.css';
import './styles/chatbot.css';
import './styles/animations.css';

import packagesData from './data/packages.json';
import chatbotData from './data/chatbot.json';
import faqData from './data/faq.json';
import promosData from './data/promos.json';

import { 
  createIcons, 
  Wifi, 
  Zap, 
  MapPin, 
  Receipt, 
  Wrench, 
  Cable, 
  Router, 
  CircleCheck, 
  Rocket, 
  Send, 
  BadgePercent, 
  Gift, 
  Tag, 
  MessageCircle, 
  HelpCircle, 
  ChevronDown, 
  Phone, 
  Headset, 
  X, 
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles
} from 'lucide';

// Helper to generate WhatsApp URL
function createWaUrl(text) {
  const phone = packagesData.adminPhone;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

// 1. Render Pricing Cards
function initPricing() {
  const pricingContainer = document.getElementById('pricing-cards-container');
  const tabs = document.querySelectorAll('.tab-btn');
  let currentCategory = 'ftth';

  function renderPackages(catId) {
    const category = packagesData.categories.find(c => c.id === catId);
    if (!category || !pricingContainer) return;

    pricingContainer.innerHTML = category.items.map(item => {
      const waMsg = `Halo Fadli, saya tertarik mendaftar paket ${category.name} - ${item.name} (${item.speed}) seharga Rp${item.price}/${item.period} untuk area Cilacap.`;
      const waLink = createWaUrl(waMsg);

      return `
        <div class="pricing-card ${item.popular ? 'featured' : ''}">
          ${item.badge ? `<div class="card-ribbon">${item.badge}</div>` : ''}
          <div class="pricing-header">
            <h3 class="pricing-plan-name">${item.name}</h3>
            <span class="pricing-speed-tag">${item.speed}</span>
          </div>
          <div class="pricing-price-box">
            <span class="price-currency">Rp</span>
            <span class="price-amount">${item.price}</span>
            <span class="price-period">/${item.period}</span>
          </div>
          <ul class="pricing-features">
            ${item.features.map(f => `
              <li class="feature-item">
                <i data-lucide="circle-check"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn ${item.popular ? 'btn-whatsapp' : 'btn-primary'} btn-block">
            <i data-lucide="message-circle"></i>
            Pilih Paket Ini
          </a>
          <p class="pricing-note">${item.note}</p>
        </div>
      `;
    }).join('');

    // Re-initialize Lucide icons in dynamically inserted cards
    createIcons({
      icons: {
        CircleCheck,
        MessageCircle
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      renderPackages(currentCategory);
    });
  });

  // Initial render
  renderPackages(currentCategory);
}

// 2. Render Promos
function initPromos() {
  const promoContainer = document.getElementById('promos-container');
  if (!promoContainer) return;

  promoContainer.innerHTML = promosData.map(promo => {
    const waLink = createWaUrl(promo.waMessage);
    return `
      <div class="promo-card">
        <span class="promo-tag">${promo.tag}</span>
        <h3>${promo.title}</h3>
        <p>${promo.description}</p>
        <ul class="pricing-features" style="margin-bottom: 24px;">
          ${promo.highlights.map(h => `
            <li class="feature-item">
              <i data-lucide="sparkles" style="color: var(--magenta-accent);"></i>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
        <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-block">
          <i data-lucide="gift"></i>
          ${promo.ctaText}
        </a>
      </div>
    `;
  }).join('');
}

// 3. Render FAQs Accordion
function initFAQ() {
  const faqContainer = document.getElementById('faq-container');
  if (!faqContainer) return;

  faqContainer.innerHTML = faqData.map((faq, index) => `
    <div class="faq-item ${index === 0 ? 'active' : ''}">
      <div class="faq-question">
        <span>${faq.q}</span>
        <i data-lucide="chevron-down" class="faq-icon"></i>
      </div>
      <div class="faq-answer">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join('');

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// 4. Coverage Form Submission to WhatsApp
function initCoverageForm() {
  const form = document.getElementById('coverage-check-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cov-name').value.trim();
    const phone = document.getElementById('cov-phone').value.trim();
    const address = document.getElementById('cov-address').value.trim();
    const packagePref = document.getElementById('cov-package').value;

    const message = `Halo Fadli XL Satu Cilacap, saya mau cek coverage ketersediaan jaringan di lokasi saya:\n\n` +
      `👤 Nama: ${name}\n` +
      `📱 No HP/WA: ${phone}\n` +
      `📍 Alamat / Kecamatan: ${address}\n` +
      `📦 Paket Diminati: ${packagePref}\n\n` +
      `Mohon dibantu verifikasi jangkauan (FTTH / FWA). Terima kasih!`;

    window.open(createWaUrl(message), '_blank');
  });
}

// 5. Chatbot Widget Controller
function initChatbot() {
  const launcher = document.getElementById('chatbot-launcher');
  const modal = document.getElementById('chatbot-modal');
  const closeBtn = document.getElementById('chatbot-close-btn');
  const body = document.getElementById('chatbot-body');

  if (!launcher || !modal || !body) return;

  launcher.addEventListener('click', () => {
    modal.classList.toggle('open');
    if (modal.classList.contains('open') && body.children.length === 0) {
      loadStep(chatbotData.initialStep);
    }
  });

  closeBtn?.addEventListener('click', () => {
    modal.classList.remove('open');
  });

  function parseFormattedText(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
  }

  function loadStep(stepKey, userLabel = null) {
    const step = chatbotData.steps[stepKey];
    if (!step) return;

    // Add user message if selected from button
    if (userLabel) {
      const userMsgDiv = document.createElement('div');
      userMsgDiv.className = 'chat-msg user';
      userMsgDiv.textContent = userLabel;
      body.appendChild(userMsgDiv);
    }

    // Add bot response
    const botMsgDiv = document.createElement('div');
    botMsgDiv.className = 'chat-msg bot';
    botMsgDiv.innerHTML = parseFormattedText(step.message);

    // Add action buttons
    if (step.buttons && step.buttons.length > 0) {
      const actionsDiv = document.createElement('div');
      actionsDiv.className = 'chat-quick-actions';

      step.buttons.forEach(btn => {
        const actionBtn = document.createElement('button');
        actionBtn.className = `quick-btn ${btn.action === 'whatsapp' ? 'quick-btn-wa' : ''}`;
        actionBtn.innerHTML = `<span>${btn.label}</span> <i data-lucide="${btn.action === 'whatsapp' ? 'message-circle' : 'arrow-right'}" style="width: 16px; height: 16px;"></i>`;

        actionBtn.addEventListener('click', () => {
          if (btn.action === 'goto') {
            loadStep(btn.target, btn.label);
          } else if (btn.action === 'whatsapp') {
            window.open(createWaUrl(btn.text), '_blank');
          } else if (btn.action === 'scroll') {
            modal.classList.remove('open');
            const targetEl = document.querySelector(btn.target);
            if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        });

        actionsDiv.appendChild(actionBtn);
      });

      botMsgDiv.appendChild(actionsDiv);
    }

    body.appendChild(botMsgDiv);
    body.scrollTop = body.scrollHeight;

    createIcons({
      icons: {
        MessageCircle,
        ArrowRight
      }
    });
  }
}

// 6. Global Setup & Dynamic Elements
document.addEventListener('DOMContentLoaded', () => {
  // Set all WA Links with generic text
  document.querySelectorAll('[data-wa-trigger]').forEach(btn => {
    const customText = btn.getAttribute('data-wa-text') || 'Halo Fadli XL Satu Cilacap, saya mau tanya pendaftaran WiFi XL Satu.';
    btn.setAttribute('href', createWaUrl(customText));
  });

  initPricing();
  initPromos();
  initFAQ();
  initCoverageForm();
  initChatbot();

  // Create Lucide Icons
  createIcons({
    icons: {
      Wifi,
      Zap,
      MapPin,
      Receipt,
      Wrench,
      Cable,
      Router,
      CircleCheck,
      Rocket,
      Send,
      BadgePercent,
      Gift,
      Tag,
      MessageCircle,
      HelpCircle,
      ChevronDown,
      Phone,
      Headset,
      X,
      ArrowRight,
      ShieldCheck,
      Award,
      Sparkles
    }
  });
});
