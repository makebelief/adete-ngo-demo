const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
const backTop = document.querySelector('.back-top');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) backTop?.classList.add('show');
  else backTop?.classList.remove('show');
});

backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.getElementById('year').textContent = new Date().getFullYear();
