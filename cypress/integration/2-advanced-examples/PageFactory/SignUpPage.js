/// <reference types = "cypress" />


import {Signpage} from '../PageFactory/SignPage'

class SignUpPage
{
    visite()
    {
        cy.visit('http://automationpractice.com/index.php')
        cy.url().should('include', 'automationpractice.com/index.php')
    }
    Clicking()
    {   
        const signin = cy.get('[class=login]', {timeout:5000})
        signin.click()
    }
    fillemail(email)
    {
        const emails = cy.get('input[id = email_create]', {timeout:5000})
        emails.clear()
        emails.type(email)
        return this
    }
    Register()
    {
        const reig = cy.get('button[id = SubmitCreate]', {timeout:5000})
        reig.click()
    }
    fillFirstName(firsttname)
    {
        const first = cy.get('input[id = customer_firstname]')
        first.clear()
        first.type(firsttname)
        return this
    }
    filllastName(lastname)
    {
        const last = cy.get('input[id = customer_lastname]')
        last.clear()
        last.type(lastname)
        return this
    }
    fillpassword(password)
    {
        const pass = cy.get('input[id = passwd]')
        pass.clear()
        pass.type(password)
        return this

    }
    fillAdress(address)
    {
       const adress = cy.get('input[id = address1]')
       adress.clear()
       adress.type(address)
       return this

    }
    fillcity(city)
    {
        const citys = cy.get('input[id = city]')
        citys.clear()
        citys.type(city)
        return this
    }
    fillstate(states)
    {
        const state = cy.get('select[id=id_state]')
        //state.click()
        state.select(states)
        return this
    }
    fillpost(postcodes)
    {
        const postcode = cy.get('input[id = postcode]')
        postcode.clear()
        postcode.type(postcodes)
        return this
    }
    fillphone(phone)
    {
        const phonenumber = cy.get('input[id = phone_mobile]')
        phonenumber.clear()
        phonenumber.type(phone)
        return this
    }
    submit()
    {
        const submit = cy.get('button[id = submitAccount]')
        submit.click()

    }
    
}
export default SignUpPage