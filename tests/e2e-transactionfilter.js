import App from "../page-objects/App"
import LoginPage from "../page-objects/pages/LoginPage"
import NavBar from "../page-objects/components/NavBar"
import InsideNavBar from "../page-objects/components/InsideNavBar"
import TransactionFilter from "../page-objects/pages/TransactionFilter"

describe('Validate Transaction Filter', () => {

    it('Login to App', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        NavBar.checkUserNameinHome('username')
    })

    it('Validate negative scenario for transaction filter', () => {
        InsideNavBar.clickOnAccountActivity()
        TransactionFilter.clickOnFindTransactions()
        TransactionFilter.fillTransactionForm('Test Filter', 'Deposit')
        TransactionFilter.submitFilter()
        TransactionFilter.resultsTableIsVisible()
        const msg = TransactionFilter.resultMessage
        expect(msg).toHaveText('No results.')
    })
})