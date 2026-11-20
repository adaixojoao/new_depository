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
