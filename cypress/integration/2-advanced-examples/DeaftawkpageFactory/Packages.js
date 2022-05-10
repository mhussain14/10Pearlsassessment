

class Packages
{
    OpenthepackagesList()
    {
        const pack = cy.contains('Packages')
        pack.click()
    }
    AddNewPackage()
    { 
        const addnewpack = cy.contains('Add New Package')
        addnewpack.click()
    }
    enterpackagevalue(PackName)
    {
        const enterValues = cy.get('input[name=package_name]', {timeout:5000})
        enterValues.clear()
        enterValues.type(PackName)
    }
    SelectCountry()
    {
        const selcountry = cy.get('div.modal-content > div.modal-body >form select[name=country_id]', {timeout:5000})
        selcountry.select('Pakistan')
    }
    enterminutes(Mint)
    {
        const minutes = cy.get('div.modal-content > div.modal-body >form input[name=minutes]')
        minutes.clear()
        minutes.type(Mint)
    }
    selectvalidity(validity)
    {
        const selvaldity = cy.get('div.modal-content > div.modal-body >form select[name=validity_id]')
        selvaldity.select(validity)
    }
    enterprice(pri)
    {
        const price = cy.get('div.modal-content > div.modal-body >form input[name=price]')
        price.clear()
        price.type(pri)
    }
    CheckStatus()
    {
        const status = cy.get('div.modal-content > div.modal-body >form div.justify-content-start >div.mb-2.form-group >label.switch >div.slider.round')
        status.click()
    }
    AddPackage()
    {
        const add = cy.get('div.modal-content > div.modal-footer > button:last-child')
        add.click()
    }
}export default Packages