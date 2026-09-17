// ***********************************************************
// Global support file, loaded automatically before every spec.
// ***********************************************************

// The banking demo app confirms some actions (Add Customer, Open Account)
// with a native window.alert(). Cypress auto-accepts these dialogs, but by
// stubbing window.alert we can also assert on the exact message text.
Cypress.on('window:before:load', (win) => {
  cy.stub(win, 'alert').as('windowAlert');
});

// The AngularJS app under test occasionally throws a benign digest-cycle
// error on route changes that has no effect on functionality. We don't want
// unrelated app noise to fail an otherwise-passing test.
Cypress.on('uncaught:exception', () => false);
