/// <reference types = "cypress" />
import {SignPage} from '../PageFactory/SignPage'

class loginPg
{
    visite()
    {
        cy.visit('http://automationpractice.com/index.php')
    }
    ClickSing()
    {
        const clickonsing = cy.contains('Sign in')
        clickonsing.click()
    }
    enteremail(email)
    {
        const emails = cy.get('input[id = email]')
        emails.clear()
        emails.type(email)
        return this

    }
    fillpassword(password)
    {
        const pass = cy.get('input[id = passwd]')
        pass.clear()
        pass.type(password)
        return this

    }
    submit()
    {
        const submit = cy.get('button[id = SubmitLogin]')
        submit.click()

    }
    
}
export default loginPg
