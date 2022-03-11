/// <reference types = "cypress" />


class AddToCart
{
    visit()
    {
        cy.visit('http://automationpractice.com/index.php')
    }
    clickOnCategory()
    {
        const category = cy.get('a[title = Women]', {timeout:5000})
        category.click()
    }
    Openimage()
    {
        const image = cy.contains('Faded Short Sleeve T-shirts',{timeout:5000})
        image.click()
    }
    Secondimage()
    {
        const image1 = cy.contains('Printed Chiffon Dress', {timeout: 5000})
        image1.click()
    }
    AddCart()
    {
        const addcart = cy.get('[name=Submit]')
        addcart.click()
    }
    checkOut()
    {
        const check = cy.contains('Proceed to checkout')
        check.click()
    }
    Deleteproduct()
    {
        const del = cy.get('[class = icon-trash]')
        del.click()
    }
}export default AddToCart