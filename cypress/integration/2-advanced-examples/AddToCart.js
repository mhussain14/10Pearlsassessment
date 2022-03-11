
import AddCartpage from  '../2-advanced-examples/PageFactory/AddCartpage'

describe ('Add product into cart', function()
{
    it('Add Product to cart with page factory method', function()
    {
        const product = new AddCartpage()
        product.visit()
        product.clickOnCategory()
        product.Openimage()
        product.AddCart()
        product.checkOut()
    } )
    it('Delet from cart', function()
    {
        const product = new AddCartpage()
        product.visit()
        product.clickOnCategory()
        product.Openimage()
        product.AddCart()
        product.checkOut()
        product.Deleteproduct()
    } )
    it('Edit items in cart', function()
    {
        const product = new AddCartpage()
        product.visit()
        product.clickOnCategory()
        product.Openimage()
        product.AddCart()
        product.checkOut()
        product.clickOnCategory()
        product.Secondimage()
    } )
})