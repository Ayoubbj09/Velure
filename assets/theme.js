document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('[data-site-header]');
  const toggle = document.querySelector('[data-mobile-menu-toggle]');
  const panel = document.getElementById('MobileMenu');

  const syncHeader = () => {
    if (!header) return;
    header.classList.toggle('site-header--compact', window.scrollY > 16);
  };

  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });

  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
    });
  }
});
