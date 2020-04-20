import App from "../page-objects/App"
import LoginPage from "../page-objects/pages/LoginPage"
import NavBar from "../page-objects/components/NavBar"
import helpPage from "../page-objects/pages/helpPage"

describe('Validate Links in Help Section', () => {

    it('Login to App', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        NavBar.checkUserNameinHome('username')
    })

    it('Links in help section should work', () => {
        NavBar.clickOnSettings()
        NavBar.clickOnHelp()
        const title = helpPage.helpTitle //or $('.span8 > h3')
        title.waitForExist()
        expect(title).toHaveText('How do I log into my account?')
        helpPage.clickOnTransferFundLink()
        expect(title).toHaveText('How do I transfer funds?')
        helpPage.clickOnPayBillsFundLink()
        expect(title).toHaveText('How do I pay bills?')
    })
})