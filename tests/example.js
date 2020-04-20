import { short, medium, long } from '../lib/timeouts' //TimeOut Helpers - kind of const values
import { mobile, tablet, desktop } from '../lib/devices'

describe('First Steps with WebdriverIO', () => {

    it('Load Example Website', () => {
        browser.url('http://www.example.com')
        browser.pause(short) // Implicit wait - Do not use this in your actual tests
        expect(browser).toHaveUrl('http://www.example.com/')
        expect(browser).toHaveTitle('Example Domain')
    })
    
    it('Validate h1 tag is visible and its text value', () => {
        const h1 = $('h1')
        h1.waitForExist() // Explicit wait method
        expect(h1).toBeVisible()
        const text = h1.getText()
        console.log('My Output: '+text)            
        expect(h1).toHaveText('Example Domain')
    })
      
    it('Validate p tag is visible', () => {
        const p = $('p')
        p.waitForExist()
        expect(p).toBeVisible()
    })

    it('Validate Link Value', () => {
        const link = $('a')
        expect(link).toHaveLink('https://www.iana.org/domains/example')
        
        
    })

    it('Assert attribute for submit button', () => {
        browser.url('https://devexpress.github.io/testcafe/example')
        const bttn = $('#submit-button')
        bttn.waitForExist()
        expect(bttn).toHaveAttrContaining('type','submit')
    })
        
    it('Assert element Value', () => {
        const bttn = $('#populate')
        bttn.waitForExist()
        expect(bttn).toHaveValue('Populate')
    })

    it('Take Screenshot', () => {
        browser.saveScreenshot('samplescreenshot.png')        
    })

    it('Adjust Browser Window Size', () => {
        browser.setWindowSize(800, 600) //Adjust size based on resolution
        browser.pause(short)
        browser.maximizeWindow() // Maximize the window
        browser.pause(short)
    })

    it('Set mobile view', () => {
        browser.setWindowSize(mobile[0], mobile[1]) //Adjust size based on resolution
        browser.pause(short)
    })

    it('Set tablet view', () => {
        browser.setWindowSize(tablet[0], tablet[1]) //Adjust size based on resolution
        browser.pause(short)
    })

    it('Set desktop view', () => {
        browser.setWindowSize(desktop[0], desktop[1]) //Adjust size based on resolution
        browser.pause(short)
    })
})
