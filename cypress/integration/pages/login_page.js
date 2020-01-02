class LoginPage {
  
    LoginForm(email, password) {
      cy.get('.visible-md #signInFormUsername').type(email)
      cy.get('.visible-md #signInFormPassword').type(password)
    }

    submitLoginForm() {
      cy.get('.visible-md [name="signInSubmitButton"]').click();  
    }
}

export default new LoginPage

  
  
  