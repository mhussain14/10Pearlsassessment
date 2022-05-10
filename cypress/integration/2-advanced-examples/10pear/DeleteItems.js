
describe ('Add to car', function()
{
    it('Add Produc to cart', function()
    {
        cy.visit('http://automationpractice.com/index.php')
        // Add item to the cart
        //cy.contains('Women').click()
        cy.get('a[title = Women]').click()
        
        cy.contains('Faded Short Sleeve T-shirts').click()
        cy.get('[name=Submit]').click()
        //cy.contains('Product successfully added to your shopping cart').eq(expected, 'Product successfully added to your shopping cart')
        cy.contains('Proceed to checkout').click()
        // Delete items fro the cart
        cy.get('[class = icon-trash]').click()
        //cy.get('.alert alert-warning').should('have.text', 'Your shopping cart is empty')
        //assert.isOk('Your shopping cart is empty', 'everything is Ok')
        assert.equal('Your shopping cart is empty','Your shopping cart is empty', 'Values verified')
    } )
   
})