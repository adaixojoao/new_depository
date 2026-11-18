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
- If the buyer misses 5 monthly payments, or dies and their heirs do not choose within 90 days to keep paying, the home returns to the seller. Never to the company or the founder: the mediation law forbids the mediator from being an interested party. On return, the seller refunds 80% of the rent they received in the last 12 months, in up to 12 monthly instalments, or at once from a new sale if one happens first; everything else stays with the seller.
- Protection against being cut out: the seller's mediation contract makes the fee due for any sale to a buyer the company introduced in writing, during the contract or within 12 months after it. The 10% monthly share is part of the mediation fee (paid in instalments), so cancelling the payment service does not stop it. Buyers sign a declaration that the company introduced them. Sign the mediation contract before revealing any buyer.
- The founder is in Portugal a few times a year and runs deals remotely (video calls, electronic or postal signatures), with home visits and proposals on trips. No formal scouts: family and other contacts only introduce potential sellers. They must not present offers, discuss prices, collect documents or negotiate, since that is mediation. The founder's parents, spouse and children may never buy a home the company mediates (article 17(3)). See the playbook section "Working from the Netherlands".
- Who pays: the company pays its own lawyer and the independent valuation (ordered only after the seller signs the mediation contract; the law forbids the mediator from valuing homes it mediates). The seller's lawyer is recommended and paid by the seller; the buyer pays notary, registry and purchase taxes.
- Taxes (see "Impostos e Taxas" in Business): the seller keeps paying IMI while they hold the usufruct; the buyer pays IMT and 0.8% stamp duty on the larger of the legal nua-propriedade value and the contract value. Open question for the accountant: whether the seller's monthly payment is taxed as a pension (IRS category H) or as capital gains.
- Company form: under review. The founder is based in the Netherlands and has a Dutch ZZP, which can operate in Portugal through registration with IMPIC (Lei 15/2013, article 21). Plan: use the ZZP for the testing phase; before the first real deal, choose a limited-liability structure (Dutch BV or Portuguese Unipessoal Lda) with a Dutch–Portuguese accountant. Options are compared in "Licence and Legal Research" in Business. The founder drafts most documents; a lawyer reviews at the end.
- Each party is shown only their own figure (what the buyer pays, or what the seller receives). The company's fee is stated in the service contract, not advertised.
