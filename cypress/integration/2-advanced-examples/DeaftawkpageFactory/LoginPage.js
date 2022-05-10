/// <reference types = "cypress" />

class DTlogin
{
    visit()
    {
        cy.visit('https://dt-admin.deaftawk.com/auth/login')
    }
    verifyPagetitle()
    {
        cy.title().should('eq','Deaf Tawk Web Portal')
    }
    LoginUser(username)
    {
        const user = cy.get('input[type = email]')
        user.clear()
        user.type(username)
    }
    LoginPassword(password)
    {
        const pass = cy.get('input[type = password]')
        pass.clear()
        pass.type(password)
    }
    LoginButton()
    {
        const savebtn = cy.get('button[type = button]')
        savebtn.click()
    }
}export default DTlogin