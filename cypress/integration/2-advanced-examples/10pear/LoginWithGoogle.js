
import Loginwithgooglepage from '../PageFactory/Loginwithgooglepage'

describe ('Sign In with gmail', function()
{
    
    it('Sign up with google', function()
    {
        const google = new Loginwithgooglepage()
        google.visite()
        google.Buttonsigin()
        google.SignwithGmail()
        google.addnewaccount()
        google.Newemail('raza.pcr572@gmail.com')
        google.buttonNext()
        google.Newpassword('Fincon@12345')
        google.SignIn()
    })
})