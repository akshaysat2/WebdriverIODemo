
import Base from '../Base'
import { desktop } from '../../lib/devices'

class TransactionFilter extends Base{

    get findTransactionTab() {
        return $('=Find Transactions')
    }

    get transactionDescription() {
        return $('#aa_description')
    }

    get transactionType() {
        return $('#aa_type')
    }

    get submitButton() {
        return $('.btn.btn-primary')
    }

    get resultMessage() {
        return $('.well')
    }

    get resultsTable() {
        return $('#filtered_transactions_for_account')
    }

    clickOnFindTransactions() {
        //waitAndClick is a user defined custom function created under wdio.conf.js
        browser.waitAndClick(this.findTransactionTab)
    }

    fillTransactionForm(description, type) {
        this.transactionDescription.setValue(description)
        this.transactionType.selectByVisibleText(type)
    }

    submitFilter() {
        this.submitButton.click()
    }

    resultsTableIsVisible() {
        this.resultsTable.waitForExist()
    }
}

export default new TransactionFilter()