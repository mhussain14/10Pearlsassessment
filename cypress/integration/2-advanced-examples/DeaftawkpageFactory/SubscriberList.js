
class Subscriber_List
{
    Openslist()
    {
        const subs = cy.contains('Subscribers')
        subs.click()
    }
    getText()
   {
       const text = cy.contains('a', 'Subscribers', {timeout:5000})
       cy.log('Get the text ' +text)
   }   
    filerbyName(Name)
    {
        const name = cy.get('input[name = name]')
        name.clear()
        name.type(Name)
    }
    ClickOnApplyFilter()
    {
        const apply = cy.contains('Apply Filters', {timeout:10000})
        apply.click()
    }
    Checktable()
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
                   FisrtName.console.log('Table verified by the statment');
               })
               
           }

       })
    }
    GetDataFromTable()
    {
        cy.get('table > tbody > tr').should('have.length', 5)
        cy.get('table > thead > tr > th').should('have.length',9)
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
}export default Subscriber_List