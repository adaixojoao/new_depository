# Pedra e Promessa

Website and business work for **Pedra e Promessa**. The project connects generations: older homeowners sell their home to younger buyers, keep the right to live there for life, and receive either the full price at once or a monthly payment. The company takes a percentage of each monthly payment and a one-off fee on immediate-payment deals.

## Where project files go

Find the folder by name in Google Drive. Save every document, spreadsheet, deck and other file for this project in the Google Drive folder **Pedra e Promessa**. Put each file in the subfolder that fits, and add a new subfolder when none does:

| Subfolder | For |
|---|---|
| Business | Overview, plans, legal notes, pitch material |
| Finance | Financial model and other numbers |
| Website | Copies of the site files |

- The main financial model is the Google Sheet in Finance, not the earlier claude.ai copy.
- Website code is developed in this repository. When the site changes, refresh the copies in the Website folder.
- Update the Business Overview doc in Business when key decisions change.

## Website

Static site in Portuguese (pt-PT): `index.html`, `styles.css`, `script.js`, with no build step. The contact form is front-end only for now.

## Decisions so far

- Solo setup: the founder, their contacts and a lawyer. No salaries, no co-founders. The financial model in Finance reflects this; the older salaried version is in Finance/Archive.
- All fees are charged to the seller only (the mediation law forbids fees from both sides), plus 23% VAT. Fees: monthly deals pay a €1,500 setup fee plus 10% of each payment; immediate deals pay 5% of the sale price. With the €400 reference payment the seller receives €350.80. The model's Compare sheet shows these against the earlier, lower fees.
- Pricing rule: over the seller's expected remaining life (by age and sex, INE life tables), the buyer pays about half the home's value. The monthly payment stops rising after age 78: older sellers get the same monthly amount as a 78-year-old. Reference monthly payment in the model: €400. The model's Pricing sheet calculates each deal.
- If the buyer misses 5 monthly payments, or dies and their heirs do not choose within 90 days to keep paying, the home returns to the seller. Never to the company or the founder: the mediation law forbids the mediator from being an interested party.
- Company form: single-owner limited company (Unipessoal Lda) with an AMI licence from IMPIC. The founder drafts most documents; a lawyer reviews at the end.
- Each party is shown only their own figure (what the buyer pays, or what the seller receives). The company's fee is stated in the service contract, not advertised.
