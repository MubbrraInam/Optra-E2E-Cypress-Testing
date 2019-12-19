describe('login to Optra', ()=>{
    beforeEach(()=>{
        cy.visit('https://optra-test.auth.us-east-2.amazoncognito.com/login?response_type=code&client_id=5u5q09kfc7p2cnc70jk0k6n98e&redirect_uri=https://optra.demosites.cf/callback')
       
    })
    it('Login success ', function () {
        cy.get('.modal-content:nth-child(2)').find('#signInFormUsername').first().type('qa2@gmail.com')  
        cy.get('.modal-content:nth-child(2)').find('#signInFormPassword').first().type('testpassword')  
        cy.get('.modal-content:nth-child(2)').find('input[type="submit"]').first().click();  
        cy.wait(1000);
        //cy.title().should('contain', 'https://optra.demosites.cf/')
        cy.url().should('eq', 'https://optra.demosites.cf/')
        
    })
    it('change password)', ()=>{
       cy.get()
    }

})