

describe('Cypress commeds practices', function()
{
    it('Searching by pressing enter', function () 
    {
            cy.visit('http://google.com')
            cy.get('input[name=q]').type('cyress commeds{enter}')
            cy.get('input[name=q]').type('cypress commends{key.backspace}')
        })
        it('Pop up alerts handling', function () 
        {
            Cypress.on('uncaught:expceotion', (err, runnable) =>
            {
              return false
            });
            cy.visit('https://chercher.tech/practice/popups')
            cy.get('div.dropdown-content').invoke('show')
            cy.contains('CherCher Tech').click
            cy.get('[name = alert]').click()
            cy.url().should('include', 'chercher.tech')
        })
})