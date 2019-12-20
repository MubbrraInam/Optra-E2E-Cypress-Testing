class LoginPage {
  
    LoginForm() {
      cy.get('.modal-content:nth-child(2)').find('#signInFormUsername').first().type('qa2@gmail.com')  
      cy.get('.modal-content:nth-child(2)').find('#signInFormPassword').first().type('testpassword')  
    }

    submitLoginForm() {
      cy.get('.modal-content:nth-child(2)').find('input[type="submit"]').first().click();  
    }
}

export default LoginPage

  
  
  