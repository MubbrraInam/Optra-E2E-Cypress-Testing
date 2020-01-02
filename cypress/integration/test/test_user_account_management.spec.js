import login from '../pages/login_page.js'
import landingPage from '../pages/landing_page.js'
import accountPage from '../pages/manage_account_page'
// import Amplify from 'aws-amplify';
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import cognito from '../pages/aws-exports.js';
Amplify.configure({
    Auth: {
        region: "us-east-2",
        UserPoolId: "us-east-2_FzLeVki7y",
        ClientId: "5u5q09kfc7p2cnc70jk0k6n98e",
        CallbackUrl: 'https://optra.demosites.cf/callback',
        PoolBaseUrl: 'https://optra-test.auth.us-east-2.amazoncognito.com',
        SignoutUrl:'https://optra.demosites.cf/logout',
        IdentityPoolId: ""
    }
});

describe('Login tests', () => {
    
    beforeEach(()=> {
      cy.visit("https://optra-test.auth.us-east-2.amazoncognito.com/login?response_type=code&client_id=5u5q09kfc7p2cnc70jk0k6n98e&redirect_uri=https://optra.demosites.cf/callback")
      login.LoginForm(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
      login.submitLoginForm()
    
    //   Auth.signIn('qa2@gmail.com', 'testpassword')
    //     .then(user => {
    //       console.log('===> user', user);

    //       let session = Auth.currentSession();
    //       debugger

    //       console.log('===> session', session);
    //     })
    //     .catch(err => console.log('===> err', err));
    // cy.visit('https://optra.demosites.cf/')

  })
  it('lets the user login to the application', () => {
      
      //cy.wait(1000);
      //cy.title().should('contain', 'https://optra.demosites.cf/')
    //cy.url().should('eq', 'https://optra.demosites.cf/')
    landingPage.getProfileButton().click()
    landingPage.getSideMenu().should('contain', 'Profile').and('contain', 'Notifications').and('contain', 'Accounts Managed').and('contain', 'Send Feedback')
  })

  it('lets the user to update his account information', () => {
        // const randomstring = require("randomstring");
        // this.firstName = randomstring.generate()
        cy.get('.nav-link [title="Volta"]').click()
        cy.get('[href="/manage_account"]').click()
        landingPage.getProfileButton().click()
        accountPage.getMyAccountForm().within(() => {
            cy.get('[name="firstName"]').clear().type('Test First Name')
            cy.get('[name="lastName"]').clear().type('Test Last Name')
            cy.get('[name="email"]').clear().type('qa2+0@gmail.com')
            cy.get('[name="title"]').clear().type('SQATest')
            cy.get('[type="button"]').click()   
        })
        // accountPage.getNotificationPopUp().should('have.class', 'showBtn').and('contain', 'Updated')
        accountPage.getProfileCard().should('contain', 'Test First Name')
            .and('contain', 'Test Last Name')
            .and('contain', 'SQATest')
  })
        // cy.get('[type="file"]+[type="button"]').attachFile('upload.png', 'image/png')
  
  
    it.only('lets the user to update his account information1', () => {
        // const randomstring = require("randomstring");
        // this.firstName = randomstring.generate()
        cy.get('.nav-link [title="Volta"]').click()
        cy.get('[href="/manage_account"]').click()
        landingPage.getProfileButton().click()
        accountPage.changePasswordForm().within(() =>{
            cy.get('[name="currentPassword"]').clear().type('testpassword')
            cy.get('[name="newPassword"]').clear().type('testpassword')
            cy.get('[type="button"]').click()
        })
        
        // cy.get('.photo-app-holder [type="button"]').then(($input) => {
        //     debugger
        //     // convert the logo base64 string to a blob
        //     return Cypress.Blob.base64StringToBlob(this.profileImage, 'image/png')
        //       .then((blob) => {
        //         // pass the blob to the fileupload jQuery plugin
        //         // used in your application's code
        //         // which initiates a programmatic upload
        //         $input.fileupload('add', { files: blob })
        //       })
        //   })

        // cy.upload_file('test2.png', 'image/png', 'input[type="file"]~.btn')
        cy.server()
        cy.route('PATCH', "https://optra-api.demosites.cf/api/users/profile/73310604-11b0-4cf0-8d8d-0f4f1455dc6f").as('profile')

        const fixtureImageFiles = ['test_1.jpeg', 'test_2.jpeg', 'test2.png']
        const fileName = fixtureImageFiles[Math.floor(Math.random()*fixtureImageFiles.length)];

        cy.fixture(fileName).then((fileContent) => {
            cy.get('input[type="file"]').upload(
                {fileContent, fileName, mimeType: 'application/json'}
            )

        })

        cy.get('.profilePhotoForm img').should('have.attr', 'src').and('contain', fileName)

    })
        
  //const landingPage = new LandingPage()
  
        // it('Login failure ', function () {
        // cy.get('.modal-content:nth-child(2)').find('#signInFormUsername').first().type('qa2@gmail.com')  
        //cy.get('.modal-content:nth-child(2)').find('#signInFormPassword').first().type('qa2@gmail.com')  
        //cy.get('.modal-content:nth-child(2)').find('input[type="submit"]').first().click();  
        //cy.get('p#loginErrorMessage').should('be.visible')
    //})

})

