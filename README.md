# Cypress Portfolio & Account Operations Automation

A Cypress UI automation framework, built with the **Page Object Model (POM)**,
demonstrating the kind of client-onboarding, account-opening and cash-transaction
testing used in **wealth management / investment operations QA**.

> This is a personal practice / portfolio project. It is **not** connected to
> any employer's systems or confidential data. It runs against a public,
> freely available QA training sandbox ([XYZ Bank demo](https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login))
> that is purpose-built for automation practice, used here to model typical
> wealth-management-style account workflows (client onboarding, account
> opening, deposits/withdrawals, transaction history).

## Tech stack

- [Cypress](https://www.cypress.io/) 13.x
- Page Object Model (`cypress/pages`)
- Plain JavaScript (no TypeScript, to keep the framework approachable)

## Project structure

```
cypress-portfolio-automation/
├── cypress.config.js
├── package.json
└── cypress/
    ├── support/
    │   └── e2e.js                 # global config: window.alert stub, error handling
    ├── pages/
    │   ├── LoginPage.js           # landing page -> Manager / Customer login
    │   ├── ManagerPage.js         # Add Customer / Open Account / Customers
    │   └── CustomerPage.js        # Customer dashboard: Deposit / Withdraw / Transactions
    └── e2e/
        ├── manager-client-onboarding.cy.js
        └── customer-account-transactions.cy.js
```

## How to run

```bash
npm install
npm run cy:open   # interactive runner
npm run cy:run    # headless run
```

## Test scenarios

| ID    | Scenario                                                     | Maps to (resume) area                          |
|-------|----------------------------------------------------------------|-------------------------------------------------|
| TC_01 | Add a new customer (client onboarding)                        | Client account workflows                        |
| TC_02 | Open a Dollar account for the new customer                    | Account opening / portfolio setup               |
| TC_03 | New customer appears correctly in the client directory         | Data consistency checks                         |
| TC_04 | Deposit funds into an account                                  | Cash-flow / account-level activity validation   |
| TC_05 | Reject a withdrawal that exceeds the available balance        | Negative testing, functional validation         |
| TC_06 | Withdraw funds within the available balance                    | Cash-flow / account-level activity validation   |
| TC_07 | Transaction history reflects credit/debit entries correctly    | Securities/transaction data validation          |

## Notes & limitations

- The target site is a **shared public demo** with no per-run data reset, so
  each run of the onboarding spec creates a new customer record (duplicate
  names are allowed by the app, each gets a unique id). In a real SIT/UAT
  environment this test data would instead be seeded and torn down through a
  controlled test data management process or API-level setup, as described in
  the test case documentation companion repo.
- Every selector and expected message in this framework (form field names,
  button labels, success/error text) was verified directly against the live
  application before being encoded into the page objects and specs.
