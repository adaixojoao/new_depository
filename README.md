# Pedra e Promessa

Website for **Pedra e Promessa**, a project that connects generations. Older homeowners sell their house to younger buyers but keep the right to live there for life. In return, the buyer pays them a monthly amount.

## Structure

| File         | Purpose                                         |
|--------------|-------------------------------------------------|
| `index.html` | Single-page site (Portuguese, pt-PT)            |
| `styles.css` | Styles: warm stone/terracotta palette, responsive |
| `script.js`  | Mobile menu and contact form handling           |

There is no build step. It is plain HTML, CSS and JavaScript.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Next steps

- Connect the contact form to a real backend (it currently only shows a confirmation).
- Have a lawyer review the legal wording, such as *usufruto*, *direito de habitação* and *renda vitalícia*.
- Add real photos, testimonials, a team/about page and a privacy policy (GDPR).
- Optionally add an English version.
