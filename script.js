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

// Simulator: estimate of what the seller receives.
// Rule: over the seller's expected remaining life, the buyer pays about half the
// home's value, including the fixed 2% yearly increase of the monthly payment, so
// the monthly figure shown is the first-year amount. The monthly amount stops
// rising with age after 78 (older sellers are priced as 78). Seller amounts are
// shown after the company's fee and VAT, so the seller sees only their own figure.
// Life expectancy: approximate remaining years by age, from INE life tables.
const LIFE = {
  M: { 65: 18.4, 70: 14.6, 75: 11.3, 80: 8.3, 85: 5.9, 90: 4.1, 95: 2.9 },
  F: { 65: 21.4, 70: 17.4, 75: 13.6, 80: 10.0, 85: 7.0, 90: 4.8, 95: 3.3 },
};
const PRICE_SHARE = 0.5;      // share of home value the buyer pays
const AGE_CAP = 78;           // monthly amount stops rising after this age
const VAT = 0.23;
const MONTHLY_FEE = 0.10;     // share of each monthly payment
const IMMEDIATE_FEE = 0.05;   // share of the immediate price
const YEARLY_INCREASE = 0.02; // fixed yearly increase of the monthly payment

// Sum of a payment that starts at 1 per year and rises each year, over the given years.
function growthFactor(years) {
  return YEARLY_INCREASE === 0 ? years : (Math.pow(1 + YEARLY_INCREASE, years) - 1) / YEARLY_INCREASE;
}

function yearsLeft(sex, age) {
  const table = LIFE[sex];
  const ages = Object.keys(table).map(Number);
  const a = Math.min(Math.max(age, ages[0]), ages[ages.length - 1]);
  for (let i = 0; i < ages.length - 1; i++) {
    const lo = ages[i], hi = ages[i + 1];
    if (a >= lo && a <= hi) return table[lo] + (table[hi] - table[lo]) * (a - lo) / (hi - lo);
  }
  return table[ages[ages.length - 1]];
}

const euro = new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
const sim = document.getElementById('sim');

function updateSim() {
  const value = Number(document.getElementById('sim-valor').value);
  const age = Number(document.getElementById('sim-idade').value);
  const sex = sim.querySelector('input[name="sexo"]:checked').value;
  const monthlyOut = document.getElementById('sim-mensal');
  const immediateOut = document.getElementById('sim-imediato');
  const note = document.getElementById('sim-note');

  if (!value || value < 20000 || !age || age < 65 || age > 100) {
    monthlyOut.textContent = '—';
    immediateOut.textContent = '—';
    note.textContent = 'Indique o valor da casa e uma idade a partir dos 65 anos.';
    return;
  }

  const total = value * PRICE_SHARE;
  const buyerMonthly = total / (growthFactor(yearsLeft(sex, Math.min(age, AGE_CAP))) * 12);
  const sellerMonthly = buyerMonthly * (1 - MONTHLY_FEE * (1 + VAT));
  const sellerImmediate = total * (1 - IMMEDIATE_FEE * (1 + VAT));

  monthlyOut.textContent = euro.format(sellerMonthly);
  immediateOut.textContent = euro.format(sellerImmediate);
  note.textContent = 'Estimativa. Em qualquer das opções continua a viver na sua casa até ao fim da vida. A renda mensal indicada é a do primeiro ano e aumenta 2% em cada ano.';
}

sim.addEventListener('input', updateSim);
sim.addEventListener('submit', (e) => e.preventDefault());
updateSim();

// Form submissions. With FORM_ENDPOINT set (e.g. a Formspree form URL), leads are
// posted there and arrive by email. Without it, the visitor's email app opens with
// a pre-filled message to CONTACT_EMAIL, so no lead is lost.
const CONTACT_EMAIL = 'pedraepromessa@gmail.com';
const FORM_ENDPOINT = ''; // e.g. 'https://formspree.io/f/xxxxxxx'

const LEAD_LABELS = {
  nome: 'Nome', contacto: 'Contacto', perfil: 'Perfil', pais: 'Onde vive', zonas: 'Zonas',
  localidade: 'Localidade', pagamento: 'Pagamento', orcamento: 'Orçamento',
  objetivo: 'Objetivo', mensagem: 'Mensagem', consentimento: 'Consentimento', data: 'Data',
};

// Returns 'sent', 'mailto' or 'error'.
async function sendLead(type, lead) {
  const subject = `Pedra e Promessa: novo contacto (${type})`;
  if (FORM_ENDPOINT) {
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _subject: subject, tipo: type, ...lead }),
      });
      return res.ok ? 'sent' : 'error';
    } catch {
      return 'error';
    }
  }
  const body = Object.entries(lead)
    .filter(([, v]) => v !== '' && !(Array.isArray(v) && !v.length))
    .map(([k, v]) => `${LEAD_LABELS[k] || k}: ${Array.isArray(v) ? v.join(', ') : v === true ? 'sim' : v}`)
    .join('\n');
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return 'mailto';
}

function showResult(statusEl, result, name, okText) {
  if (result === 'sent') {
    statusEl.textContent = okText;
    statusEl.className = 'form-status ok';
  } else if (result === 'mailto') {
    statusEl.textContent = `Obrigado, ${name}! Abrimos o seu email com os dados preenchidos: basta carregar em Enviar. Se não abrir, escreva-nos para ${CONTACT_EMAIL}.`;
    statusEl.className = 'form-status ok';
  } else {
    statusEl.textContent = `Não foi possível enviar. Por favor tente de novo ou escreva-nos para ${CONTACT_EMAIL}.`;
    statusEl.className = 'form-status error';
  }
  return result !== 'error';
}

const waitlist = document.getElementById('waitlist-form');
const waitlistStatus = waitlist.querySelector('.form-status');

waitlist.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(waitlist);
  const missing = [];
  if (!data.get('nome')?.trim()) missing.push('o seu nome');
  if (!data.get('contacto')?.trim()) missing.push('um email ou telefone');
  if (!data.get('pais')) missing.push('onde vive');
  if (!data.getAll('zona').length) missing.push('pelo menos uma zona');
  if (!data.get('pagamento')) missing.push('como prefere pagar');
  if (!data.get('orcamento')) missing.push('quanto poderia investir');
  if (!data.get('consentimento')) missing.push('a autorização para guardarmos os dados');

  if (missing.length) {
    waitlistStatus.textContent = `Falta indicar: ${missing.join(', ')}.`;
    waitlistStatus.className = 'form-status error';
    return;
  }

  const name = data.get('nome').trim();
  const result = await sendLead('comprador', {
    nome: name,
    contacto: data.get('contacto').trim(),
    pais: data.get('pais'),
    zonas: data.getAll('zona'),
    localidade: data.get('localidade')?.trim() || '',
    pagamento: data.get('pagamento'),
    orcamento: data.get('orcamento'),
    objetivo: data.get('objetivo') || '',
    mensagem: data.get('mensagem')?.trim() || '',
    consentimento: true,
    data: new Date().toISOString().slice(0, 10),
  });

  const ok = showResult(waitlistStatus, result, name,
    `Obrigado, ${name}! Está na lista. Vamos contactá-lo em breve para conhecer melhor o que procura.`);
  if (ok) waitlist.reset();
});

// Contact form — validates and sends through sendLead().
const form = document.getElementById('contact-form');
const status = form.querySelector('.form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);

  if (!data.get('perfil') || !data.get('nome')?.trim() || !data.get('contacto')?.trim()) {
    status.textContent = 'Por favor indique quem é, o seu nome e um contacto.';
    status.className = 'form-status error';
    return;
  }

  const name = data.get('nome').trim();
  const result = await sendLead(data.get('perfil'), {
    nome: name,
    contacto: data.get('contacto').trim(),
    perfil: data.get('perfil'),
    mensagem: data.get('mensagem')?.trim() || '',
    data: new Date().toISOString().slice(0, 10),
  });
  if (showResult(status, result, name, `Obrigado, ${name}! Entraremos em contacto em breve.`)) form.reset();
});
