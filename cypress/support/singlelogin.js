// Create a command which takes email and password and logs user in using api request
Cypress.Commands.add('loginBySingleSignOn', (userEmail, userPassword) => {

    const socialLoginOptions = {
    username: userEmail,
    password: userPassword,
    loginUrl: Cypress.env('lhttps://optra-test.auth.us-east-2.amazoncognito.com/login?response_type=code&client_id=5u5q09kfc7p2cnc70jk0k6n98e&redirect_uri=https://optra.demosites.cf/callback'),
    headless: false,
    logs: false,
    loginSelector: '.loginBtn',
    postLoginSelector: '#main-content>div>div>div>div>form svg'
    }
    
    return cy.task('GoogleSocialLogin', socialLoginOptions).then((token_value) => {
    cy.clearCookies()
    let date = new Date()
    // Add 30 minutes to current time, so it does not expire during tests
    let time_now = date.getTime() + 1800000
    // and before the page finishes loading
    // set the id_token in local storage
    window.localStorage.setItem('token', token_value.token_val)
    window.localStorage.setItem('token-expiry', time_now)
    })
    })