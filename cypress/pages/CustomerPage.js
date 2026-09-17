/**
 * CustomerPage
 * Client-facing account dashboard: login, deposits, withdrawals and the
 * transaction history -- analogous to the "portfolio cash" and
 * account-activity checks described in the QA role (data consistency
 * checks, cash-flow / account-level activity validation).
 */
class CustomerPage {
  loginAs(customerFullName) {
    cy.get('select[ng-model="custId"]').select(customerFullName);
    cy.contains('button', 'Login').click();
    return this;
  }

  openDepositTab() {
    cy.contains('button', 'Deposit').click();
    return this;
  }

  deposit(amount) {
    cy.get('input[ng-model="amount"]').clear().type(amount);
    cy.contains('form button', 'Deposit').click();
    return this;
  }

  openWithdrawTab() {
    cy.contains('button', 'Withdrawl').click();
    return this;
  }

  withdraw(amount) {
    cy.get('input[ng-model="amount"]').clear().type(amount);
    cy.contains('form button', 'Withdraw').click();
    return this;
  }

  openTransactionsTab() {
    cy.contains('button', 'Transactions').click();
    return this;
  }
}

export default new CustomerPage();
