import SignPage from './PageFactory/SignPage'

describe ('Sign in', function()
{
    before(()=>
    {
        //importing the son file and saving to an alias name
        cy.fixture('DataDrivenTest').as('users')
    })
   
    it('Sign In', function()
    {
       const LogP = new SignPage()
       const user = this.users
       cy.get(user).each((userobj) =>
       {
           LogP.visite()
           LogP.ClickSing()
           LogP.enteremail(userobj.UserName)
           LogP.fillpassword(userobj.Password)
           LogP.submit()
       })
    })
    
 })

