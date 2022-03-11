/// <reference types = "cypress" />

class SignUpWithGamil
{
    visite()
    {
        cy.visit('https://www.etsy.com/')
    }
    Buttonsigin()
    {
        const sig = cy.contains('Sign in')
        sig.click({force:true})
    }
    SignwithGmail()
    {
        const reig = cy.contains('Continue with Google', {timeout:15000})
        reig.click({force:true})
    }
    addnewaccount()
    {
        const account = cy.contains('Use another account', {timeout:5000})
        account.click({force:true})
    }
    Newemail(Email)
    {

        const enteremail = cy.get('[id=identifierId]', {timeout: 5000})
        enteremail.clear()
        enteremail.type(Email)
    }
    buttonNext()
    {
        const next = cy.contains('Next')
        next.click({force:true})
    }
    
    Newpassword(password)
    {
        const pass = cy.get('[name=password]', {timeout:5000})
        pass.clear()
        pass.type(password)
    }
    SignIn()
    {
        const sign = cy.get('[class = VfPpkd-RLmnJb]')
        sign.click()
    }
}export default SignUpWithGamil