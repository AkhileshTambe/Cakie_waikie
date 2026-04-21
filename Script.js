// ===== CAKECRAFT — Shared JavaScript =====

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  });
}

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu  = document.getElementById('closeMenu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}
if (closeMenu) {
  closeMenu.addEventListener('click', () => mobileMenu.classList.remove('open'));
}

function closeMobileMenu() {
  if (mobileMenu) mobileMenu.classList.remove('open');
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-up, .fade-in, .slide-left, .slide-right, .step-row');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach((el, i) => {
    const delay = el.dataset.delay || (i % 4) * 80;
    el.style.transitionDelay = delay + 'ms';
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  // Trigger visible on any already-in-viewport elements
  setTimeout(initScrollAnimations, 100);
});

// ===== TOAST NOTIFICATION =====
function showToast(msg, duration = 2800) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;
  toastMsg.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => toast.classList.remove('show'), duration);
}

// ===== MODAL HELPERS =====
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// Close modals on overlay click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
  }
});

// Close modals on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
    document.querySelectorAll('.mobile-menu.open').forEach(m => m.classList.remove('open'));
  }
});

// ===== INDEX PAGE: QUICK DESIGNER PREVIEW =====
function initQuickDesigner() {
  const prices = { base: 699 };
  const flavourEmojis = {
    'Chocolate': '🍫', 'Red Velvet': '🔴', 'Vanilla': '🍦',
    'Mango': '🥭', 'Butterscotch': '🍬'
  };

  let state = {
    flavour: { label: 'Chocolate', price: 0, emoji: '🍫' },
    shape:   { label: 'Round', price: 0 },
    weight:  { label: '1 kg', price: 699 }
  };

  function calcTotal() {
    return state.flavour.price + state.shape.price + state.weight.price;
  }

  function updateDisplay() {
    const priceEl = document.getElementById('previewPrice');
    const emojiEl = document.getElementById('previewEmoji');
    const labelEl = document.getElementById('previewLabel');
    if (priceEl) priceEl.innerHTML = `₹${calcTotal().toLocaleString('en-IN')} <span>estimated</span>`;
    if (emojiEl) emojiEl.textContent = state.flavour.emoji;
    if (labelEl) labelEl.textContent = `${state.flavour.label} · ${state.shape.label}`;
  }

  // Flavour chips
  const flavourContainer = document.getElementById('flavourChips');
  if (flavourContainer) {
    const flavourPrices = { 'Chocolate': 0, 'Red Velvet': 50, 'Vanilla': 0, 'Mango': 80, 'Butterscotch': 50 };
    flavourContainer.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        flavourContainer.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const label = chip.textContent.trim();
        state.flavour = {
          label,
          price: flavourPrices[label] || 0,
          emoji: flavourEmojis[label] || '🎂'
        };
        updateDisplay();
      });
    });
  }

  // Shape chips
  const shapeContainer = document.getElementById('shapeChips');
  if (shapeContainer) {
    const shapePrices = { 'Round 🔵': 0, 'Square ⬛': 40, 'Heart ❤️': 100, 'Custom ✨': 200 };
    shapeContainer.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        shapeContainer.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const label = chip.textContent.trim();
        state.shape = { label: label.replace(/[^\w ]/g,'').trim(), price: shapePrices[label] || 0 };
        updateDisplay();
      });
    });
  }

  // Weight chips
  const weightContainer = document.getElementById('weightChips');
  if (weightContainer) {
    const weightPrices = { '0.5 kg': 399, '1 kg': 699, '2 kg': 1199, '3 kg': 2099 };
    weightContainer.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        weightContainer.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const label = chip.textContent.trim();
        state.weight = { label, price: weightPrices[label] || 699 };
        updateDisplay();
        showToast(`Weight set to ${label} ✓`);
      });
    });
  }

  updateDisplay();
}

// ===== SMOOTH ANCHOR SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMobileMenu();
    }
  });
});

// ===== COUNTER ANIMATION =====
function animateCounters() {
  document.querySelectorAll('.stat-num, .v-stat-num').forEach(el => {
    const text = el.textContent;
    const match = text.match(/(\d+\.?\d*)/);
    if (!match) return;
    const end = parseFloat(match[1]);
    const suffix = text.replace(match[1], '');
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = end / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        el.textContent = text;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(start) + suffix;
      }
    }, step);
  });
}

// Trigger counter when vision section visible
const visionSection = document.querySelector('.vision');
if (visionSection) {
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounters();
      obs.unobserve(visionSection);
    }
  }, { threshold: 0.3 });
  obs.observe(visionSection);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initQuickDesigner();
});