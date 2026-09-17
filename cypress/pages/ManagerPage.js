/**
 * ManagerPage
 * Back-office "Bank Manager" workspace: client onboarding (Add Customer),
 * account opening (Open Account) and the client directory (Customers).
 * These map to the client-account and account-opening steps of a
 * wealth-management / investment-operations workflow.
 */
class ManagerPage {
  openAddCustomerTab() {
    cy.contains('button', 'Add Customer').click();
    return this;
  }

  addCustomer(firstName, lastName, postCode) {
    cy.get('input[ng-model="fName"]').clear().type(firstName);
    cy.get('input[ng-model="lName"]').clear().type(lastName);
    cy.get('input[ng-model="postCd"]').clear().type(postCode);
    cy.get('form button[type="submit"]').click();
    return this;
  }

  openOpenAccountTab() {
    cy.contains('button', 'Open Account').click();
    return this;
  }

  openAccount(customerFullName, currency = 'Dollar') {
    cy.get('select[ng-model="custId"]').select(customerFullName);
    cy.get('select[ng-model="currency"]').select(currency);
    cy.get('form button[type="submit"]').click();
    return this;
  }

  openCustomersTab() {
    cy.contains('button', 'Customers').click();
    return this;
  }

  searchCustomer(text) {
    cy.get('input[ng-model="searchCustomer"]').clear().type(text);
    return this;
  }

  deleteCustomerRow(rowContainingText) {
    cy.contains('table tr', rowContainingText).within(() => {
      cy.contains('button', 'Delete').click();
    });
    return this;
  }
}

export default new ManagerPage();
