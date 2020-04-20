import Base from '../Base'

class NavBar extends Base {

    get signInButton() {
        return $('#signin_button')
    }

    get userNameInHomePage() {
        return $('(//*[@class="dropdown-toggle"])[2]')
    }

    get settingsButton() {
        return $('.icon-cog')
    }

    get helpButton() {
        return $('#help_link')
    }

    get searchBar() {
        return $('#searchTerm')
    }

    clickOnSignInButton() {
        this.signInButton.waitForExist()
        this.signInButton.click()
    }

    signInButtonIsVisible() {
        this.signInButton.waitForExist()
    }

    checkUserNameinHome(username) {
        this.userNameInHomePage.waitForExist()
        expect(this.userNameInHomePage).toHaveText(username)
    }

    clickOnSettings() {
        this.settingsButton.waitForExist()
        this.settingsButton.click()
    }

    clickOnHelp() {
        this.helpButton.waitForExist()
        this.helpButton.click()
    }

    searchText(text) {
        this.searchBar.waitForExist()
        this.searchBar.setValue(text)
        browser.keys('Enter')
    }
}

export default new NavBar()