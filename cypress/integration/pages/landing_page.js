class LandingPage {
  
    getProfileButton() {
        return cy.get('.nav-link [title="Volta"]')
    }

    getSideMenu() {
        return cy.get('.userSidemenu')
    }
}

export default new LandingPage