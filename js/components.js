/* =============================================
   CBSE MATHS WORLD — Shared Components
   ============================================= */

function renderNav(activePage) {
  const pages = [
    { href: '../index.html', label: 'Home' },
    { href: '../pages/about.html', label: 'About Us' },
    //{ href: '../pages/materials.html', label: 'Study Materials' },
    { href: '../pages/contact.html', label: 'Contact Us' },
  ];

  const links = pages.map(p => {
    const isActive = p.label === activePage ? 'active' : '';
    return `<a href="${p.href}" class="${isActive}">${p.label}</a>`;
  }).join('');

  return `
  <nav class="navbar" id="navbar">
    <div class="container">
      <div class="nav-inner">
        <a href="../index.html" class="nav-logo">
          <div class="nav-logo-icon" style="background:none;padding:0;width:36px;height:36px;">
            <img src="/images/logo.jpeg" alt="CBSE Maths World" style="width:36px;height:36px;object-fit:contain;border-radius:6px;">
          </div>
          <div class="nav-logo-text">
            <strong>CBSE MATHS WORLD</strong>
            <span>Learn · Practice · Excel</span>
          </div>
        </a>
        <div class="nav-links" id="navLinks">
          <a href="../index.html" class="${activePage === 'Home' ? 'active' : ''}">Home</a>
          <a href="../pages/about.html" class="${activePage === 'About Us' ? 'active' : ''}">About Us</a>
          <a href="../pages/contact.html" class="${activePage === 'Contact Us' ? 'active' : ''}">Contact Us</a>
        </div>
        <div class="nav-cta">
          <a href="https://wa.me/918891458808" target="_blank" class="btn btn-blue" style="font-size:.82rem;padding:9px 18px;">💬 WhatsApp</a>
        </div>
      </div>
   </div>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    <a href="../index.html">🏠 Home</a>
    <a href="../pages/about.html">👤 About Us</a>
    <a href="../pages/contact.html">✉ Contact Us</a>
    <a href="https://www.youtube.com/shorts/-452o4rBLW8" target="_blank" class="btn btn-primary" style="justify-content:center;margin-top:8px;">▶ Watch a Demo Class</a>
    <a href="https://wa.me/918891458808" target="_blank" class="btn btn-blue" style="justify-content:center;background:#25d366;border:none;">💬 Chat on WhatsApp</a>
  </div>`;
}

function renderFooter() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="nav-logo-icon" style="background:none;padding:0;width:36px;height:36px;">
              <img src="/images/logo.jpeg" alt="CBSE Maths World" style="width:36px;height:36px;object-fit:contain;border-radius:6px;">
            </div>
            <div class="nav-logo-text">
              <strong>CBSE MATHS WORLD</strong>
              <span>Learn · Practice · Excel</span>
            </div>
          </div>
          <p>Dedicated to helping students of Classes 8–11 build confidence and excellence in CBSE Mathematics through conceptual learning, consistent practice, and personalized guidance.</p>
          <div class="footer-social">
            <a class="social-btn" href="https://www.youtube.com/@CBSEMATHSWORLD" target="_blank" aria-label="YouTube" title="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
            </a>
            <a class="social-btn" href="https://www.instagram.com/cbsemathsworld?utm_source=qr&igsh=MXhwd3R4ZjFjNWFteA==" target="_blank" aria-label="Instagram" title="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12c0-3.2 0-3.6.1-4.8C2.4 3.9 4 2.3 7.2 2.3c1.2-.1 1.6-.1 4.8-.1zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1.0 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24c3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9 0-3.3 0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/></svg>
            </a>
            <a class="social-btn" href="https://wa.me/918891458808" aria-label="WhatsApp" title="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5C10 9.1 9.3 7.5 9 6.9c-.3-.5-.6-.5-.7-.5h-.6c-.2 0-.5.1-.8.4C6.6 7.1 5.8 7.9 5.8 9.5s1.2 3.1 1.3 3.3c.2.2 2.4 3.6 5.7 5 .8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.7-.4zM12.1 21.9h-.1a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 0 1-1.5-5.3C2.2 6.8 6.6 2.4 12.1 2.4a9.8 9.8 0 0 1 7 2.9 9.8 9.8 0 0 1 2.9 7c0 5.5-4.4 9.6-9.9 9.6zm8.4-18.3A11.8 11.8 0 0 0 12.1.4C5.5.4.2 5.7.2 12.1c0 2.1.5 4.1 1.6 5.9L.3 23.5l5.7-1.5a11.9 11.9 0 0 0 6.1 1.6h.1C18.7 23.6 24 18.3 24 12c0-3.2-1.2-6.1-3.5-8.4z"/></svg>
            </a>
            <a class="social-btn" href="#" aria-label="Telegram" title="Telegram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.9 8.2-2 9.3c-.1.6-.5.8-1 .5l-2.7-2-1.3 1.2c-.1.1-.3.2-.6.2l.2-2.8 5-4.5c.2-.2 0-.3-.3-.1L6.6 14.8 4 14c-.6-.2-.6-.6.1-.8l11.5-4.4c.6-.2 1.1.1.9.8-.1-.4-.6-.4-.6-.4z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Quick Links</h4>
          <div class="footer-links">
            <a href="../index.html">🏠 Home</a>
            <a href="../pages/about.html">👤 About Us</a>
            <!-- <a href="../pages/materials.html">📚 Study Materials</a> -->
            <a href="../pages/contact.html">✉ Contact Us</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Classes</h4>
          <div class="footer-links">
            <a href="../pages/contact.html">📘 Class 8 Maths</a>
            <a href="../pages/contact.html">📗 Class 9 Maths</a>
            <a href="../pages/contact.html">📙 Class 10 Maths</a>
            <a href="../pages/contact.html">📕 Class 11 Maths</a>
            <a href="../pages/contact.html">📕 Class 12 Maths</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Contact</h4>
          <div class="footer-contact-item">
            <span class="fci-icon">📞</span>
            <div>
              <strong style="color:rgba(255,255,255,.8);font-size:.88rem;font-weight:700;">Phone</strong>
              <p>+918891458808</p>
            </div>
          </div>
          <div class="footer-contact-item">
            <span class="fci-icon">💬</span>
            <div>
              <strong style="color:rgba(255,255,255,.8);font-size:.88rem;font-weight:700;">WhatsApp</strong>
              <p>+918891458808</p>
            </div>
          </div>
          <div class="footer-contact-item">
            <span class="fci-icon">✉</span>
            <div>
              <strong style="color:rgba(255,255,255,.8);font-size:.88rem;font-weight:700;">Email</strong>
              <p>cbsemathsworlds@gmail.com</p>
            </div>
          </div>
          <!--
          <div class="footer-contact-item">
            <span class="fci-icon">🕐</span>
            <div>
              <strong style="color:rgba(255,255,255,.8);font-size:.88rem;font-weight:700;">Teaching Hours</strong>
              <p>To be updated soon</p>
            </div>
          </div>
          -->
        </div>
      </div>

      <hr class="footer-divider">
      <div class="footer-bottom">
        <p>© 2025 CBSE Maths World. All rights reserved.</p>
        <p>Designed for academic excellence | CBSE Mathematics Tuition</p>
      </div>
    </div>
  </footer>`;
}

function initNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const navbar = document.getElementById('navbar');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // Scroll shadow
  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

// Auto-inject nav + footer if placeholders exist
document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  const activePage = document.body.dataset.page || '';

  if (navPlaceholder) navPlaceholder.innerHTML = renderNav(activePage);
  if (footerPlaceholder) footerPlaceholder.innerHTML = renderFooter();

  initNav();
  initScrollAnimations();
});
