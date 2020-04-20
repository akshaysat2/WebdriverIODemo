import App from "../page-objects/App"
import NavBar from "../page-objects/components/NavBar"

describe('Search Text', () => {
    
    it('Validate Search Functionality', () => {
        App.openHomePage()
        NavBar.searchText('Loan')
        const resultTitle = $('h2')
        resultTitle.waitForExist()
        expect(resultTitle).toHaveText('Search Results:')
    })
})