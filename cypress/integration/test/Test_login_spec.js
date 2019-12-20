import LoginPage from '../pages/login_page.js'
//import LandingPage from '../pages/landing_page.js'


describe('Login tests', () => {
  beforeEach(()=> {
      cy.visit('https://optra-test.auth.us-east-2.amazoncognito.com/login?response_type=code&client_id=5u5q09kfc7p2cnc70jk0k6n98e&redirect_uri=https://optra.demosites.cf/callback')
  })
  it('lets the user login to the application', () => {
      const login = new LoginPage()
      login.LoginForm()
      login.submitLoginForm()
      cy.wait(1000);
      //cy.title().should('contain', 'https://optra.demosites.cf/')
         cy.url().should('eq', 'https://optra.demosites.cf/')
  })
  
  
  
  //const landingPage = new LandingPage()
  
        // it('Login failure ', function () {
        // cy.get('.modal-content:nth-child(2)').find('#signInFormUsername').first().type('qa2@gmail.com')  
        //cy.get('.modal-content:nth-child(2)').find('#signInFormPassword').first().type('qa2@gmail.com')  
        //cy.get('.modal-content:nth-child(2)').find('input[type="submit"]').first().click();  
        //cy.get('p#loginErrorMessage').should('be.visible')
    //})

})

