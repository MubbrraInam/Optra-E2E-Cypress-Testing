class LandingPage {
  
    getProfileButton() {
        return cy.get('.nav-link [title="Volta"]')
    }

    openAccountManagement() {
        cy.get('.nav-link [title="Volta"]').click()
        cy.get('[href="/manage_account"]').click()
    }

    getSideMenu() {
        return cy.get('.userSidemenu')
    }
}

export default new LandingPage