import LoginPage from '../pages/LoginPage';
import CustomerPage from '../pages/CustomerPage';

/**
 * These scenarios simulate day-to-day "portfolio cash" operations for an
 * existing client account: depositing funds, withdrawing funds, validating
 * insufficient-funds handling, and reviewing the transaction history --
 * analogous to the cash-flow / account-activity validation described in
 * the Wealth Management & Investment Operations QA role.
 */
describe('Customer - Account Transactions', () => {
  // "Harry Potter" is one of the seeded sample customers on the public
  // demo, used here so this spec can run independently of the onboarding
  // spec above.
  const customerFullName = 'Harry Potter';

  beforeEach(() => {
    LoginPage.visit().goToCustomerLogin();
    CustomerPage.loginAs(customerFullName);
  });

  it('TC_04: deposits funds into the account successfully', () => {
    CustomerPage.openDepositTab().deposit(5000);
    cy.contains('Deposit Successful').should('be.visible');
  });

  it('TC_05: rejects a withdrawal that exceeds the available balance', () => {
    CustomerPage.openWithdrawTab().withdraw(999999999);
    cy.contains('Transaction Failed. You can not withdraw amount more than the balance.').should(
      'be.visible'
    );
  });

  it('TC_06: withdraws funds within the available balance successfully', () => {
    CustomerPage.openDepositTab().deposit(2000);
    CustomerPage.openWithdrawTab().withdraw(500);
    cy.contains('Transaction successful').should('be.visible');
  });

  it('TC_07: transaction history reflects the credit and debit entries', () => {
    CustomerPage.openDepositTab().deposit(1000);
    CustomerPage.openTransactionsTab();

    cy.get('table tbody tr').should('have.length.greaterThan', 0);
    cy.contains('table tbody tr', '1000').should('contain', 'Credit');
  });
});
