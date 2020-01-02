class ManageAccountPage {
    
    getMyAccountForm() {
        return cy.get('.account-manage-holder .update-form')
    }

    getNotificationPopUp() {
        return cy.get('.account-manage-holder~ .notificationBtn')
    }

    getProfileCard() {
        return cy.get('.text-center.profile-card')
    }

    changePasswordForm() {
        return cy.get('.password-form')
    }
}

export default new ManageAccountPage