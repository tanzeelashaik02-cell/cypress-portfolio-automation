/**
 * LoginPage
 * Landing page of the banking demo: entry point for both the
 * "Bank Manager" (back-office/admin) and "Customer" (client) journeys.
 */
class LoginPage {
  visit() {
    cy.visit('/#/login');
    return this;
  }

  goToManagerLogin() {
    cy.contains('button', 'Bank Manager Login').click();
    return this;
  }

  goToCustomerLogin() {
    cy.contains('button', 'Customer Login').click();
    return this;
  }
}

export default new LoginPage();
