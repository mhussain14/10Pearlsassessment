import LoginPage from '../DeaftawkpageFactory/LoginPage'
import SubscriberList from '../DeaftawkpageFactory/SubscriberList'
import InterpreterList from '../DeaftawkpageFactory/InterpreterList'
import WebUserList from '../DeaftawkpageFactory/WebUserList'
import Packages from '../DeaftawkpageFactory/Packages'

describe('DeatTawk Login', function()
{
    it('Login to dt admin', function()
    {
        const dtlogs = new LoginPage() 
        dtlogs.visit()
        dtlogs.verifyPagetitle()
        dtlogs.LoginUser('usrZaveen')
        dtlogs.LoginPassword('zaveen123')
        dtlogs.LoginButton()
    })
    /* it('Subscriber List', function()
    { 
        const sub = new SubscriberList()
        sub.Openslist()
        sub.getText()
        sub.filerbyName('Kaleem')
        sub.ClickOnApplyFilter()
        sub.Checktable()
        sub.GetDataFromTable()

    })
    it('Intetpreters List', function()
    {
        const inters = new InterpreterList()
        inters.openList()
        inters.getText()
        inters.FilterbyName('Kaleem')
        inters.FilterRecordsByGernder('Male')
        inters.ClickOnApplyFilter()
        inters.ClearFilter()
        inters.VerifyTableData()
        inters.GetDataFromTable()
        inters.EditInterpreter()
        inters.enterFirstName('Muzhar')
        inters.enterLastName('Abass')
        inters.UpdateStatus()
        inters.UpdatetheRecord()
        

    })*/
    it('List of Web users', function(){

        const WU = new WebUserList()
        WU.opensthewebuser()
        WU.VerifyWebUSerList('mehdi5')
        WU.ClicksApplyfilterButton()
        WU.ClearThefilter()
        cy.wait(5000)
        WU.VerifyTableData()
        WU.GetDataFromTable()
        WU.EditWebuser()
       /* WU.enterFirstName('Mehdi')
        WU.enterLastName('Hussain') */
        WU.UpdatetheRecord()

    })
    it('Add New package', function()
    {
        const packs = new Packages()
        packs.OpenthepackagesList()
        packs.AddNewPackage()
        packs.enterpackagevalue('ROMZAN200')
        packs.SelectCountry()
        packs.enterminutes('50')
        packs.selectvalidity('Weekly')
        packs.enterprice('50')
        packs.CheckStatus()
        packs.AddPackage()
    })
    
});