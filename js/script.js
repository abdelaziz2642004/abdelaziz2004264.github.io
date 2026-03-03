/* ─── PARTICLES BACKGROUND ─── */
(function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const colors = ['rgba(124,106,247,0.6)', 'rgba(0,210,198,0.5)', 'rgba(247,167,106,0.4)', 'rgba(93,106,248,0.5)'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('span');
    p.classList.add('particle');
    const size = Math.random() * 5 + 2;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${Math.random() * 15 + 10}s;
      animation-delay: ${Math.random() * 10}s;
    `;
    container.appendChild(p);
  }
})();

/* ─── TYPED.JS ─── */
const typed = new Typed('.multiple-text', {
  strings: [
    'Flutter Apps',
    'Cross-Platform Apps',
    '.NET Backends',
    'Fullstack Solutions',
  ],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1800,
  loop: true,
  smartBackspace: true,
});

/* ─── MOBILE MENU ─── */
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
  const isOpen = navbar.classList.toggle('open');
  menuIcon.classList.toggle('bx-x', isOpen);
});

/* Close nav when a link is clicked */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('open');
    menuIcon.classList.remove('bx-x');
  });
});

/* ─── STICKY HEADER ─── */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
  updateActiveNav();
});

/* ─── ACTIVE NAV LINK ON SCROLL ─── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header .nav-link');

function updateActiveNav() {
  const scrollY = window.scrollY + 120;
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`header .nav-link[href="#${sec.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}

/* ─── PROJECT FILTER ─── */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    projectCards.forEach((card, i) => {
      const cat = card.dataset.category;
      const show = filter === 'all' || cat === filter;
      if (show) {
        card.classList.remove('hidden');
        card.style.animationDelay = `${i * 0.06}s`;
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ─── IMAGE MODAL ─── */
function openModal(src) {
  const modal = document.getElementById('image-modal');
  const img = document.getElementById('modal-img');
  img.src = src;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('image-modal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ─── SCROLL REVEAL ─── */
ScrollReveal({
  distance: '50px',
  duration: 900,
  delay: 100,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  reset: false,
});

ScrollReveal().reveal('.section-header', { origin: 'top', delay: 100 });
ScrollReveal().reveal('.hero-content', { origin: 'left', delay: 200 });
ScrollReveal().reveal('.hero-visual', { origin: 'right', delay: 300 });
ScrollReveal().reveal('.about-text', { origin: 'left', delay: 150 });
ScrollReveal().reveal('.about-aside', { origin: 'right', delay: 200 });
ScrollReveal().reveal('.timeline-item', { origin: 'left', delay: 100, interval: 100 });
ScrollReveal().reveal('.project-card', { origin: 'bottom', delay: 80, interval: 80 });
ScrollReveal().reveal('.skill-group', { origin: 'bottom', delay: 80, interval: 80 });
ScrollReveal().reveal('.achievement-highlight-card', { origin: 'bottom', delay: 80, interval: 80 });
ScrollReveal().reveal('.cert-card', { origin: 'bottom', delay: 80, interval: 80 });
ScrollReveal().reveal('.contact-card', { origin: 'bottom', delay: 80, interval: 80 });
ScrollReveal().reveal('.stat-card', { origin: 'bottom', delay: 80, interval: 80 });
ScrollReveal().reveal('.filter-tabs', { origin: 'top', delay: 150 });

/* ─── SMOOTH ANCHOR SCROLL (offset for fixed header) ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const headerHeight = header.offsetHeight + 16;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});