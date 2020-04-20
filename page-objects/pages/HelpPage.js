import Base from '../Base'

class HelpPage extends Base{

    get helpTitle() {
        return $('.span8 h3')
    }

    get transferFundsLink() {
        return $('*=transfer funds')
    }

    get payBillsLink() {
        return $('*=pay bills')
    }

    clickOnTransferFundLink() {
        browser.waitAndClick(this.transferFundsLink) //waitAndClick is a user defined custom function created under wdio.conf.js
    }

    clickOnPayBillsFundLink() {
        //waitAndClick is a user defined custom function created under wdio.conf.js
        browser.waitAndClick(this.payBillsLink)
    }
}

export default new HelpPage()