class Interplreters_List
{
   openList()
   {
       const inter = cy.contains('Interpreters')
       inter.click()
   } 
   getText()
   {
       const text = cy.contains('a', 'Interpreters', {timeout:5000})
       cy.log('Get the text ' +text)
   }
   FilterbyName(Name)
    {
        const name = cy.get('input[name = name]')
        name.clear()
        name.type(Name)
    }
   
   FilterRecordsByGernder(Gender)
   {
    const SG = cy.get('select[name = gender_id]')
    SG.select(Gender)
   }
   ClickOnApplyFilter()
   {
       const apply = cy.contains('Apply Filters', {timeout:10000})
       apply.click()
   }
   ClearFilter()
   {
    const apply = cy.contains('Clear Filters', {timeout:10000})
    apply.click()
   }
   VerifyTableData()
    {
       cy.get('table').contains('td', 'Kaleem').should('be.visible')  
       cy.get('table> tbody > tr:nth-child(4) > td:nth-child(8)').should('be.visible')
       // Get the multiple values from the table.
       cy.get('table> tbody > tr td:nth-child(8)').each(($el, index, $list) =>
       {
           const text = $el.text()
           if (text.includes('+923111111116'))
           {
               cy.get('table> tbody > tr td:nth-child(2)').eq(index).then(function(Fname){
                   const FisrtName = Fname.text()
                   expect(FisrtName).to.equal('Kaleem')
               })
               
           }

       })
    }
    GetDataFromTable()
    {
        cy.get('table > tbody > tr').should('have.length', 5)
        cy.get('table > thead > tr > th').should('have.length',11)
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
    EditInterpreter()
    {
        const editinter = cy.get('tbody.list > tr:nth-child(5) > td:nth-child(11) > i:first-child')
        editinter.click()
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
    SelctGender(EDGender)
    {
        const SG = cy.get('select[name = gender_id]')
        SG.select(EDGender)
    }
    UpdateStatus()
    {
        const status = cy.get('label.switch > div.slider.round')
        status.click()
    }
    UpdatetheRecord()
    {
        const savebtn = cy.get('div.modal-footer > button:last-child')
        savebtn.click()
        savebtn.click()  
    }
}export default Interplreters_List