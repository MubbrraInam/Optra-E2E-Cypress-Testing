class SearchShareStationPage {
    
    getSearchStation() {
        return cy.get('.account-manage-holder .update-form')
    }

    getBookmarkedStation() {
        return cy.get('.account-manage-holder~ .notificationBtn')
    }

    getShareStation() {
        return cy.get('.text-center.profile-card')
    }

    getMyRecentActivity() {
        return cy.get('.password-form')
    }
}

export default new SearchShareStationPage