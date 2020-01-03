import login from '../pages/login_page.js'
import landingPage from '../pages/landing_page.js'
import sharestationpage from '../pages/search_share_station_page'


// This is a basic structure for the tests and it needs some improvements.

describe('Login tests', () => {

    const fixtureImageFiles = ['test_1.jpeg', 'test_2.jpeg', 'test2.png']
    const fileName = fixtureImageFiles[Math.floor(Math.random()*fixtureImageFiles.length)];
    const uuidv4 = require('uuid/v4')
    const randomString = uuidv4().substr(-6)
    
    beforeEach(()=> {
        cy.visit("https://optra-test.auth.us-east-2.amazoncognito.com/login?response_type=code&client_id=5u5q09kfc7p2cnc70jk0k6n98e&redirect_uri=https://optra.demosites.cf/callback")
        login.LoginForm(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
        login.submitLoginForm()
        
    })
  
    it('lets the user login to the application', () => {
        landingPage.openAccountManagement()
        landingPage.getProfileButton().click()
        landingPage.getSideMenu().should('contain', 'Profile').and('contain', 'Notifications').and('contain', 'Accounts Managed').and('contain', 'Send Feedback')
    })

    it('tests the search field validation ', () => {
        //const lengthyString = uuidv4().substr(-31)
        
        landingPage.openSideMenu()
        sharestationpage.getsharesation().within(() => {
            cy.get('.search-form').click()
            cy.get('.search-form').type('Volta HQ 05')
            cy.get('.stationsList.filteredList')
            cy.get('.p-0.arrow-btn.btn.btn-link').click()
            
            //Bookmar selected station
            cy.get('.detail-holder button').click()
            
            
            
            // Go to hamburger side menu
            cy.get('.btn-bar.btn.btn-link').click()

            //Click on bookmarked station
            //cy.get('.saved-opener.open button ').click()
            cy.get('button[class*="border border-0 text-light p-0  float-right btn btn-link"]:eq(0)').click()
            cy.get('.nav.bookmark-btn').click({force: true})
            
    it('lets the user to share bookmarked station ', () => {
                        
            // Go to hamburger side menu
             cy.get('.btn-bar.btn.btn-link').click()

             //Click on bookmarked station
             //cy.get('.saved-opener.open button ').click()
             cy.get('button[class*="border border-0 text-light p-0  float-right btn btn-link"]:eq(0)').click()
             cy.get('.nav.bookmark-btn').click({force: true})
             cy.get('.sidebarFooter button').click()
             cy.get('input[id="title"]').type('Share Station Search')
             cy.get('.css-1wa3eu0-placeholder ').click().type('<admin@gmail.com> {enter}')

             cy.get('button[class*="btn btn-info  btn-filled btn btn-light"]:eq(2)').click()

            // Go to hamburger side menu
            cy.get('.btn-bar.btn.btn-link').click()
            cy.get('button[class*="border border-0 text-light p-0  float-right btn btn-link"]:eq(2)').click()
            cy.get('.sidebarBtn').click()

            // Go to manage account My Recent Activity
            cy.get('.dropdown-float-right.hide-carrot.profile.dropdown.nav-item').click()
            cy.get('[href="/manage_account"]').click()
       
        })
   
  
    })

    
})