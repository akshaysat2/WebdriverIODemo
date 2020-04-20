import App from "../page-objects/App"
import LoginPage from "../page-objects/pages/LoginPage"
import NavBar from "../page-objects/components/NavBar"
import InsideNavBar from "../page-objects/components/InsideNavBar"
import CurrencyExchangePage from "../page-objects/pages/CurrencyExchangePage"

describe('Test currency exchange functionality', () => {
    
    it('Login to App', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        NavBar.checkUserNameinHome('username')
    })

    it('Should have currency exchange', () => {
        InsideNavBar.clickOnPayBills()
        CurrencyExchangePage.clickOnPurchaseForeignCurrency()
        CurrencyExchangePage.fillExchangeForm('GBP', '100', true)
        CurrencyExchangePage.clickOnPurchaseButton()
        const msg = InsideNavBar.alertMessage
        msg.waitForExist()
        expect(msg).toHaveText('Foreign currency cash was successfully purchased.')
    })
})