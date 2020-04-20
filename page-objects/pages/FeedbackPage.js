import Base from '../Base'

class FeedbackPage extends Base{

    get titleFeedback() {
        return $('#feedback-title')
    }

    get nameFeedback() {
        return $('#name')
    }

    get emailFeedback() {
        return $('#email')
    }

    get subjectFeedback() {
        return $('#subject')
    }

    get commentFeedback() {
        return $('#comment')
    }

    get submitFeedbackButton() {
        return $('.btn-signin.btn.btn-primary')
    }

    feedbackTitleIsVisibleAndAppropriate() {
        this.titleFeedback.waitForExist()
        expect(this.titleFeedback).toHaveText('Feedback')
    }

    fillFeedbackForm(name, email, subject, comment) {
        this.nameFeedback.setValue(name)
        this.emailFeedback.setValue(email)
        this.subjectFeedback.setValue(subject)
        this.commentFeedback.setValue(comment)
    }

    submitFeedback() {
        this.submitFeedbackButton.click()
    }

}

export default new FeedbackPage()