# Pedra e Promessa

Website and business work for **Pedra e Promessa**. The project connects generations: older homeowners sell their home to younger buyers, keep the right to live there for life, and receive either the full price at once or a monthly payment. The company takes a percentage of each monthly payment and a one-off fee on immediate-payment deals.

## Where project files go

Find the folder by name in Google Drive. Save every document, spreadsheet, deck and other file for this project in the Google Drive folder **Pedra e Promessa**. Put each file in the subfolder that fits, and add a new subfolder when none does:

| Subfolder | For |
|---|---|
| Business | Overview, plans, legal notes, pitch material |
| Finance | Financial model and other numbers |
| Website | Copies of the site files |
| Sales | Lead tracker, seller one-pager, messages for contacts |

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
- The founder is in Portugal about 8 weeks a year (suggested: 3 to 4 trips of 2 to 3 weeks). Groundwork happens remotely before each trip (introductions, calls, video meetings with families, contracts, valuations); trips are for home visits, proposals and signatures. See the playbook's "trip cycle". No formal scouts: family and other contacts only introduce potential sellers. They must not present offers, discuss prices, collect documents or negotiate, since that is mediation. The founder's parents, spouse and children may never buy a home the company mediates (article 17(3)). See the playbook section "Working from the Netherlands".
- Who pays: the company pays its own lawyer and the independent valuation (ordered only after the seller signs the mediation contract; the law forbids the mediator from valuing homes it mediates). The seller's lawyer is recommended and paid by the seller; the buyer pays notary, registry and purchase taxes.
- Taxes (see "Impostos e Taxas" in Business): the seller keeps paying IMI while they hold the usufruct; the buyer pays IMT and 0.8% stamp duty on the larger of the legal nua-propriedade value and the contract value. Open question for the accountant: whether the seller's monthly payment is taxed as a pension (IRS category H) or as capital gains.
- Company form: the founder lives in the Netherlands and has a Dutch ZZP. Decision (November 2026): set up a holding BV and a separate company for the founder's main job now, independent of Pedra e Promessa; the main job moves out of the ZZP into that company, and the ZZP stays open for the Pedra e Promessa testing phase. Plan for Pedra e Promessa: (1) testing phase inside the ZZP, with separate bookkeeping and bank account, so losses offset the main job's income; (2) before the first monthly deal (or with 2–3 serious sellers), set up a Dutch BV for Pedra e Promessa, registered in Portugal with IMPIC under Lei 15/2013 article 21, but only after an accountant confirms a low customary salary (gebruikelijk loon, €58,000 in 2026) is accepted; (3) a holding BV when expanding to other countries or when the founder buys a boat for the main job: target structure is a holding BV with a boats BV and a Pedra e Promessa BV, so Pedra profits (taxed at 19%) can fund the boat without passing through private income. When the first BV is needed (Pedra e Promessa or the boat permit), set up the holding at the same time and let it found the operating BV, so no restructuring is needed later. Immediate-payment deals may be done in the ZZP with insurance; monthly deals only in the BV. The founder wants business money kept out of personal assets. Details in "Company Structure and Costs" in Business. The founder drafts most documents; a lawyer reviews at the end. The contract drafts and setup guide still say "Unipessoal, Lda." and must be updated when the BV exists.
- Each party is shown only their own figure (what the buyer pays, or what the seller receives). The company's fee is stated in the service contract, not advertised.
