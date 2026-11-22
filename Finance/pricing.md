# Pricing rules

The financial model is the Google Sheet in **Pedra e Promessa / Finance** on Drive. This note does not replace that sheet. It records the rules the website simulator follows, so the site and the model stay on the same numbers while Drive is unavailable.

Simulator constants live at the top of the pricing block in `script.js`.

## Rules

- The buyer pays about half the home's value (`PRICE_SHARE = 0.5`) over the seller's expected remaining life.
- Remaining years come from the approximate INE table in `script.js`, by sex, interpolated between the ages in the table.
- The monthly amount stops rising after age 78 (`AGE_CAP = 78`). Above that age the calculation uses 78.
- Monthly fee: 10% of each payment. Immediate fee: 5% of the price. VAT: 23% on the fee.
- The simulator shows the seller's amount after the fee and VAT. It does not show the €1,500 setup fee on monthly deals. That fee is in the service contract, not on the site.
- Reference check: a €400 monthly payment leaves the seller €350.80. Fee €40, VAT €9.20.

## Not in the simulator

Inflation uplifts, the €1,500 setup fee, the 80% refund on a return of the home, taxes (IMI, IMT, stamp duty, IRS) and the buyer's purchase costs. Those stay in the Sheet and in `Business/overview.md`.
