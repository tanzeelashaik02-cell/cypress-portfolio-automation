import LoginPage from '../pages/LoginPage';
import ManagerPage from '../pages/ManagerPage';

/**
 * These scenarios simulate the "client onboarding" and "account opening"
 * steps of a wealth-management / investment-operations workflow: adding a
 * new client record and opening a cash account for them, then confirming
 * the client directory reflects the change.
 *
 * Note: this targets a public, shared demo sandbox with no per-run data
 * reset, so each execution adds a new customer record (the app allows
 * duplicate names, each gets a unique customer id). In a real SIT/UAT
 * environment this data would be seeded/torn down through a test data
 * management process or an API-level setup step instead.
 */
describe('Bank Manager - Client Onboarding & Account Opening', () => {
  const firstName = 'Tanzeela';
  const lastName = 'Shaik';
  const postCode = 'DXB001';
  const fullName = `${firstName} ${lastName}`;

  beforeEach(() => {
    LoginPage.visit().goToManagerLogin();
  });

  it('TC_01: adds a new customer (client onboarding) successfully', () => {
    ManagerPage.openAddCustomerTab().addCustomer(firstName, lastName, postCode);

    cy.get('@windowAlert').should(
      'have.been.calledWithMatch',
      /Customer added successfully with customer id/
    );
  });

  it('TC_02: opens a Dollar account for the customer', () => {
    ManagerPage.openOpenAccountTab().openAccount(fullName, 'Dollar');

    cy.get('@windowAlert').should(
      'have.been.calledWithMatch',
      /Account created successfully with account Number/
    );
  });

  it('TC_03: the customer appears in the client directory with correct details', () => {
    ManagerPage.openCustomersTab().searchCustomer(lastName);

    cy.contains('table tr', firstName).within(() => {
      cy.contains('td', firstName);
      cy.contains('td', lastName);
      cy.contains('td', postCode);
    });
  });
});
