import login from '../pages/login_page.js'
import landingPage from '../pages/landing_page.js'
import accountPage from '../pages/manage_account_page'

// This is a basic structure for the tests and it needs some improvements.
// We will improve it by Friday day end.
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

    it('lets the user to update his account information', () => {
        const firstName = `First Name ${randomString}`
        const lastName = `Test Last ${randomString}`
        const title = `SQA ${randomString}`
        
        landingPage.openAccountManagement()
        accountPage.getMyAccountForm().within(() => {
            // debugger
            
            cy.get('[name="firstName"]').clear().type(firstName)
            cy.get('[name="lastName"]').clear().type(lastName)
            cy.get('[name="email"]').clear().type('qa2+0@gmail.com')
            cy.get('[name="title"]').clear().type(title)
            cy.get('[type="button"]').click()   
        })
        accountPage.getProfileCard().should('contain', firstName)
            .and('contain', lastName)
            .and('contain', title)
    })

    it.only('tests the field validation on My Account form', () => {
        const lengthyString = uuidv4().substr(-31)
        
        landingPage.openAccountManagement()
        accountPage.getMyAccountForm().within(() => {
            cy.get('[name="email"]').clear().type(' ')
            cy.get('[type="button"]').click()
            cy.get('[name="email"]~.text-danger').should('have.text', 'This field may not be blank.')
            cy.get('[name="firstName"]').clear().type(lengthyString)
            cy.get('[name="lastName"]').clear().type(lengthyString)
            cy.get('[type="button"]').click()
            cy.get('[name="firstName"]~.text-danger').should('have.text', 'Ensure this field has no more than 30 characters.')

        })
    })
  
    it('lets the user to update his password', () => {
        landingPage.openAccountManagement()
        landingPage.getProfileButton().click()
        accountPage.changePasswordForm().within(() =>{
            cy.get('[name="currentPassword"]').clear().type('testpassword')
            cy.get('[name="newPassword"]').clear().type('testpassword')
            cy.get('[type="button"]').click()
        })
    })

    it('lets the user to update his password', () => {
        landingPage.openAccountManagement()
        // You need to install a plugin to run the piece of code written below this comment
        //  use 'npm install --save-dev cypress-file-upload' to install the plugin
        cy.fixture(fileName).then((fileContent) => {
            cy.get('input[type="file"]').upload(
                {fileContent, fileName, mimeType: 'application/json'}
            )

        })
        cy.get('.profilePhotoForm img').should('have.attr', 'src').and('contain', fileName)
    })

})

