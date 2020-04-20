import Base from '../Base'

class CurrncyExchangePage extends Base{

    get purchaseForeignCurrency() {
        return $('=Purchase Foreign Currency')
    }

    get currency() {
        return $('#pc_currency')
    }

    get amount() {
        return $('#pc_amount')
    }

    get enableUSD() {
        return $('#pc_inDollars_true')
    }

    get purchaseButton() {
        return $('#purchase_cash')
    }

    clickOnPurchaseForeignCurrency() {
        browser.waitAndClick(this.purchaseForeignCurrency) //waitAndClick is a user defined custom function created under wdio.conf.js
    }

    fillExchangeForm(currency, amount, enableUSD) {
        this.currency.waitForExist()
        this.currency.selectByAttribute('value', currency)
        this.amount.setValue(amount)
        if (enableUSD) {
            this.enableUSD.click()
        }
    }

    clickOnPurchaseButton() {
        this.purchaseButton.click()
    }
}


export default new CurrncyExchangePage()