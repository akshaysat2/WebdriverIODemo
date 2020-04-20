class App {

    get userIcon() {
        return $('.icon-user')
    }

    get logout() {
        return $('#logout_link')
    }

    get navfeeback() {
        return $('#feedback')
    }

    openHomePage() {
        browser.url('http://zero.webappsecurity.com/')
        browser.maximizeWindow()
    }

    openLoginPage() {
        browser.url('http://zero.webappsecurity.com/login.html')
        browser.maximizeWindow()
    }

    appLogOut() {
        this.userIcon.click()
        browser.waitAndClick(this.logout) //waitAndClick is a custom function created in wdio.conf.js
    }

    navigateToFeedbackPage() {
        browser.waitAndClick(this.navfeeback)
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/feedback.html')
    }
}

export default new App()