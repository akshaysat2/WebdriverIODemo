import Base from '../Base'

class LoginPage extends Base {

    get loginForm() {
        return $('#login_form')
    }

    get usernameInput() {
        return $('#user_login')
    }

    get passwordInput() {
        return $('#user_password')
    }

    get submitButton() {
        return $('input[type="submit"]')
    }

    get errorOnInvalidLogin() {
        return $('.alert.alert-error')
    }

    loginFormIsVisible() {
        this.loginForm.waitForExist()
    }

    fillForm(username, password) {
        this.usernameInput.setValue(username)
        this.passwordInput.setValue(password)
    }

    submitForm() {
        this.submitButton.click()
    }

    validateErrorForInvalidLogin() {
        const errorMsg = this.errorOnInvalidLogin
        errorMsg.waitForExist()
        expect(errorMsg).toHaveText('Login and/or password are wrong.')
    }

    login(username, password) {
        this.loginForm.waitForExist()
        this.usernameInput.setValue(username)
        this.passwordInput.setValue(password)
        this.submitButton.click()
    }
    
}

export default new LoginPage()