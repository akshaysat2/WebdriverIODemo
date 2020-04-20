import App from "../page-objects/App"
import LoginPage from "../page-objects/pages/LoginPage"
import NavBar from "../page-objects/components/NavBar"
import InsideNavBar from "../page-objects/components/InsideNavBar"
import BillPaymentPage from "../page-objects/pages/BillPaymentPage"

describe('Validate Payment Functionality', () => {
  
    it('Login to App', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        NavBar.checkUserNameinHome('username')
    })

    it('Should be able to pay bills', () => {
        InsideNavBar.clickOnPayBills()
        BillPaymentPage.fillBillPaymentForm('apple', 'Loan', '500', '12', 'Loan Payment')
        // BillPaymentPage.pauseShort()
        BillPaymentPage.clickOnPayButton()
        const msg = InsideNavBar.alertMessage
        msg.waitForExist()
        expect(msg).toHaveText('The payment was successfully submitted.')
    })
})