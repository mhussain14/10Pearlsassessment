/// <reference types = "cypress" />

import SignUpPage from '../2-advanced-examples/PageFactory/SignUpPage'

describe('Sig up', function()
{
    it('New Registration', function()
    {
        const reg = new SignUpPage()
        reg.visite()
        reg.Clicking()
        reg.fillemail('raza.pcr572@gmail.com')
        reg.Register()
        reg.fillFirstName('Mehdi')
        reg.filllastName('Raza')
        reg.fillpassword('Fincon@123')
        reg.fillAdress('0000 1245')
        reg.fillcity('Islambad')
        reg.fillstate('Alabama')
        reg.fillpost('000001')
        reg.fillphone('+9230566656230')
        reg.submit()
    })

})