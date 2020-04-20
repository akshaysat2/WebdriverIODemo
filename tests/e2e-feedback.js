import App from '../page-objects/App'
import FeedbackPage from '../page-objects/pages/FeedbackPage'
import * as dataHelper from '../lib/data-helpers'

describe('Send Feedback', () => {
    
    it('Click on Feedback & Submit feedback form', () => {
        App.openHomePage()
        App.navigateToFeedbackPage()        
        FeedbackPage.feedbackTitleIsVisibleAndAppropriate()
        FeedbackPage.fillFeedbackForm(dataHelper.getRandomName(), dataHelper.getRandomEmail(), dataHelper.getRandomID(), dataHelper.getRandomPhoneNum())
        FeedbackPage.submitFeedback()
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })

})