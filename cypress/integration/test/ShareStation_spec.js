// import LoginPage from '../pages/login_page.js'
// import sharestation from '../pages/share.station_page.js'

describe('Share Station Result', () => {
    beforeEach(()=> {
        cy.visit('https://optra-test.auth.us-east-2.amazoncognito.com/login?response_type=code&client_id=5u5q09kfc7p2cnc70jk0k6n98e&redirect_uri=https://optra.demosites.cf/callback')
    })

    // it('lets the user login to the application', () => {
    //     const login = new LoginPage()
    //     login.LoginForm()
    //     login.submitLoginForm()
    //     cy.wait(1000);
      
    //     cy.url().should('eq', 'https://optra.demosites.cf/')
    // })

    //LOgin
    it('lets the user login to the application', () => {


    cy.get('.modal-content:nth-child(2)').find('#signInFormUsername').first().type('dev2@gmail.com')  
    cy.get('.modal-content:nth-child(2)').find('#signInFormPassword').first().type('testpassword')  
    cy.get('.modal-content:nth-child(2)').find('input[type="submit"]').first().click();  
    cy.wait(1000);


//Open URL
cy.url().should('eq', 'https://optra.demosites.cf/')
cy.wait(1000);


//Search Station
cy.get('.search-form').click()

cy.get('.search-form').type('Volta HQ 05')
cy.get('.stationsList.filteredList')

cy.get('.p-0.arrow-btn.btn.btn-link').click()

//Bookmar selected station

cy.get('.detail-holder button').click()
cy.wait(1000);

// Go to hamburger menu
cy.get('.btn-bar.btn.btn-link').click()

//Click on bookmarked station
//cy.get('.saved-opener.open button ').click()
cy.get('button[class*="border border-0 text-light p-0  float-right btn btn-link"]:eq(0)').click()
cy.wait(1000)
cy.get('.nav.bookmark-btn').click({force: true})

//Click on Share button
cy.get('.sidebarFooter button').click()
cy.get('input[id="title"]').type('Share Station Search')
cy.get('.css-1wa3eu0-placeholder ').click().type('<admin@gmail.com> {enter}')

cy.get('button[class*="btn btn-info  btn-filled btn btn-light"]:eq(2)').click()

// Go to hamburger menu
cy.get('.btn-bar.btn.btn-link').click()
cy.get('button[class*="border border-0 text-light p-0  float-right btn btn-link"]:eq(2)').click()
cy.get('.sidebarBtn').click()

// Go to manage account
cy.get('.dropdown-float-right.hide-carrot.profile.dropdown.nav-item').click()
cy.get('[href="/manage_account"]').click()





})

})
//scroll bar 
//cy.get('button[class*="ps__thumb-y"]:eq(0)')