import LoginPage from '../page-objects/pages/LoginPage'
import App from '../page-objects/App'
import NavBar from '../page-objects/components/NavBar'
import * as dataHelper from '../lib/data-helpers'

describe('E2E Tests - Login / Logout Flow', () => {
   
    it('Should not login with invalid credentials', () => {
        App.openHomePage()
        NavBar.clickOnSignInButton()
        LoginPage.loginFormIsVisible()
        LoginPage.fillForm(dataHelper.getRandomName(), dataHelper.getRandomID())
        LoginPage.submitForm()
        LoginPage.validateErrorForInvalidLogin()
        LoginPage.pauseShort()
    })

    it('Should login with valid credentials', () => {
        LoginPage.fillForm('username', 'password')
        LoginPage.submitForm()
        NavBar.checkUserNameinHome('username')
        LoginPage.pauseShort()
    })

    it('Should logout from app', () => {        
        App.appLogOut()
        NavBar.signInButtonIsVisible()
        LoginPage.pauseShort()
    })
})