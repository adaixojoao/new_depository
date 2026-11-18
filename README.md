# Pedra e Promessa

Website for **Pedra e Promessa**, a project that connects generations. Older homeowners sell their house to younger buyers but keep the right to live there for life. In return, the buyer pays them a monthly amount.

## Structure

| File         | Purpose                                         |
|--------------|-------------------------------------------------|
| `index.html` | Single-page site (Portuguese, pt-PT)            |
| `styles.css` | Styles: warm stone/terracotta palette, responsive |
| `script.js`  | Mobile menu, seller simulator and contact form  |

There is no build step. It is plain HTML, CSS and JavaScript.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Simulator

The "Simulador" section estimates what a seller receives, using the same rules as the financial model: the buyer pays about half the home's value over the seller's expected remaining life (approximate INE life tables), the amount stops rising after age 78, and the seller's figure is shown after the company's fee (10% monthly, 5% immediate) and 23% VAT. Keep the constants at the top of the simulator code in `script.js` in step with the model.

## Next steps

- Connect the contact form to a real backend (it currently only shows a confirmation).
- Have a lawyer review the legal wording, such as *usufruto*, *direito de habitação* and *renda vitalícia*.
- Add real photos, testimonials, a team/about page and a privacy policy (GDPR).
- Optionally add an English version.
