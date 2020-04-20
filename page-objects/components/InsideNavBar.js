import Base from '../Base'

class InsideNavBar extends Base {

    get accountActivityTab() {
        return $('#account_activity_tab')
    }

    get payBillsTab() {
        return  $('#pay_bills_tab')
    }

    get alertMessage() {
        return $('#alert_content')
    }

    clickOnAccountActivity() {
        this.accountActivityTab.waitForExist()
        this.accountActivityTab.click()
    }

    clickOnPayBills() {
        this.payBillsTab.waitForExist()
        this.payBillsTab.click()
    }
}

export default new InsideNavBar()