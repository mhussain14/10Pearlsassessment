
class ListOFWebUser
{
    opensthewebuser()
    {
        const webuser = cy.contains('Web Users')
        webuser.click()
    }
    VerifyWebUSerList(FilName)
    {
        const filter = cy.get('input[name = username]')
        filter.clear()
        filter.type(FilName)
    }
    
    ClicksApplyfilterButton()
    {
        const applybutton = cy.contains('Apply Filters', {timeout:5000})
        applybutton.click()
    }
    ClearThefilter()
    {
        const applybutton = cy.contains('Clear Filters', {timeout:5000})
        applybutton.click()
    }
    VerifyTableData()
    {
       cy.get('table').contains('td', 'Raza').should('be.visible')  
       cy.get('table> tbody > tr:nth-child(4) > td:nth-child(3)').should('be.visible')
       // Get the multiple values from the table.
       cy.get('table> tbody > tr td:nth-child(4)').each(($el, index, $list) =>
       {
           const text = $el.text()
           if (text.includes('Raza'))
           {
               cy.get('table> tbody > tr td:nth-child(2)').eq(index).then(function(Fname){
                   const FisrtName = Fname.text()
                   expect(FisrtName).to.equal('mehdi2')
               })
           }
       })
    }
    GetDataFromTable()
    {
        cy.get('table > tbody > tr').should('have.length', 5)
        cy.get('table > thead > tr > th').should('have.length',6)
        cy.get('table > tbody > tr').each(function($row, index, $rows)
        {
            cy.wrap($row).within(function()
            {
                cy.get('td').each(function($cells, index, $columns)
                {
                    cy.log($cells.text())
                })
            })
        })
    }
    EditWebuser()
    {
        const edit = cy.get('table > tbody > tr:last-child  >  td:nth-child(6) > i:first-child')
        edit.click()
    }  
    enterFirstName(FrName)
    {
        const editdata = cy.get('input[name = first_name]', {timeout:7000})
        editdata.clear({force:true})
        editdata.type(FrName)
    }
    enterLastName(LaName)
    {
        const LN = cy.get('input[name = last_name]')
        LN.clear({focus:true})
        LN.type(LaName)
    }
    UpdatetheRecord()
    {
        const savebtn = cy.get('div.modal-footer > button:last-child')
        savebtn.click()
    }
    
}export default ListOFWebUser