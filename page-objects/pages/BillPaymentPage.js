import Base from '../Base'

class BillPaymentPage extends Base{

    get payee() {
        return $('#sp_payee')
    }

    get payAccount() {
        return $('#sp_account')
    }

    get amount() {
        return $('#sp_amount')
    }

    get date() {
        return $('#sp_date')
    }

    get dateSelector() {
        return '//div[@id="ui-datepicker-div"]/table/tbody/tr //a[text()="%s"]'
    }

    get description() {
        return $('#sp_description')
    }

    get PayButton() {
        return $('#pay_saved_payees')
    }

    fillBillPaymentForm(payee, account, amount, date, description) {
        this.payee.selectByAttribute('value', payee)
        this.payAccount.selectByVisibleText(account)
        this.amount.setValue(amount)
        this.date.click()
        const dateSelector = this.dateSelector.replace('%s', date)
        const setDate = $(dateSelector) 
        browser.waitAndClick(setDate) //waitAndClick is a user defined custom function created under wdio.conf.js
        this.description.setValue(description)
    }

    clickOnPayButton() {
        this.PayButton.click()
    }
}

export default new BillPaymentPage()