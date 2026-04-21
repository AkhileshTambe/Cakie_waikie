// ═══════════════════════════════
//  CAKECRAFT — Shared JavaScript
// ═══════════════════════════════

// ── Navbar scroll ──
const navbar = document.getElementById('navbar');
if(navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  });
}

// ── Mobile hamburger ──
const ham      = document.getElementById('ham');
const mob      = document.getElementById('mob');
const mobClose = document.getElementById('mob-close');
if(ham) {
  ham.addEventListener('click', () => {
    mob.classList.toggle('open');
    ham.classList.toggle('open');
  });
}
if(mobClose) {
  mobClose.addEventListener('click', closeMob);
}
function closeMob() {
  if(mob) mob.classList.remove('open');
  if(ham) ham.classList.remove('open');
}

// ── Close modals on overlay click / ESC ──
document.addEventListener('click', e => {
  if(e.target.classList.contains('modal-bg')) e.target.classList.remove('open');
});
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') {
    document.querySelectorAll('.modal-bg.open').forEach(m => m.classList.remove('open'));
    closeMob();
  }
});

// ── Scroll reveal animations ──
function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
  if(!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if(e.isIntersecting) {
        // stagger siblings
        const siblings = Array.from(e.target.parentElement?.children || []);
        const idx = siblings.indexOf(e.target);
        setTimeout(() => e.target.classList.add('in'), idx * 65);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  els.forEach(el => obs.observe(el));
}
document.addEventListener('DOMContentLoaded', initReveal);
setTimeout(initReveal, 200);

// ── Toast notification ──
function showToast(msg, duration = 2600) {
  const t  = document.getElementById('toast');
  const tm = document.getElementById('toastMsg');
  if(!t || !tm) return;
  tm.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove('show'), duration);
}

// ── Smooth anchor scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if(target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMob();
    }
  });
});

// ── Add ripple effect to buttons ──
document.addEventListener('click', e => {
  const btn = e.target.closest('.btn, .opt-card, .opt-pill');
  if(!btn) return;
  const r = document.createElement('span');
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  r.style.cssText = `
    position:absolute;border-radius:50%;
    width:${size}px;height:${size}px;
    left:${e.clientX - rect.left - size/2}px;
    top:${e.clientY - rect.top - size/2}px;
    background:rgba(255,255,255,.25);
    transform:scale(0);animation:ripple .5s linear;
    pointer-events:none;z-index:9;
  `;
  if(!document.getElementById('rippleStyle')) {
    const style = document.createElement('style');
    style.id = 'rippleStyle';
    style.textContent = '@keyframes ripple{to{transform:scale(2.5);opacity:0}}';
    document.head.appendChild(style);
  }
  if(getComputedStyle(btn).position === 'static') btn.style.position = 'relative';
  btn.appendChild(r);
  setTimeout(() => r.remove(), 600);
});
