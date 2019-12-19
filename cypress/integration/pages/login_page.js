class LoginPage {
    loginUser(userEmail, userPassword) {
        cy.get('.modal-content:nth-child(2)').find('#signInFormUsername').first().type('qa2@gmail.com')  
        cy.get('.modal-content:nth-child(2)').find('#signInFormPassword').first().type('testpassword')  
      cy.get('.action').should('have.text', 'Sign in').click()
    }
  }
  
  export default LoginPage
  