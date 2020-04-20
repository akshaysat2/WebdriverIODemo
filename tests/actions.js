import { short } from '../lib/timeouts'

describe('Browser Actions', () => {

    it('Inputs', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        browser.maximizeWindow()
        const input = $('#developer-name')
        input.waitForExist()
        input.setValue('Akshay') // Clears any existing value and sends the new value i.e.overwrite
        // browser.pause(short)
        input.addValue(' Sathian') // Appends the value with existing if any
        // browser.pause(short)
        input.clearValue() //Clears the value from field
        // browser.pause(short)
    });

    it('Click Action', () => {
        const btnPop = $('#populate')
        browser.waitAndClick(btnPop) //waitAndClick is a user defined custom function created under wdio.conf.js
        btnPop.doubleClick()
        // browser.pause(short)
    });

    it('Radio Button & CheckBox', () => {
        const radioBtn = $('#windows')
        // radioBtn.waitForExist()
        // radioBtn.click()
        // OR Use user defined custom function from wdio.conf.js
        browser.waitAndClick(radioBtn)
        const checkBox = $('#reusing-js-code')
        // checkBox.waitForExist()
        // checkBox.click()
        browser.waitAndClick(checkBox)
        // browser.pause(short)
    });

    it('Select from Dropdown', () => {
        const select = $('#preferred-interface')
        select.waitForExist()
        select.selectByVisibleText('Both')
        browser.pause(short)
    });
});