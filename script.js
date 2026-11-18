// Mobile navigation toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form — no backend yet; validates and shows a confirmation.
// TODO: send submissions to a real endpoint (e.g. Formspree, Netlify Forms or own API).
const form = document.getElementById('contact-form');
const status = form.querySelector('.form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);

  if (!data.get('perfil') || !data.get('nome')?.trim() || !data.get('contacto')?.trim()) {
    status.textContent = 'Por favor indique quem é, o seu nome e um contacto.';
    status.className = 'form-status error';
    return;
  }

  status.textContent = `Obrigado, ${data.get('nome').trim()}! Entraremos em contacto em breve.`;
  status.className = 'form-status ok';
  form.reset();
});
