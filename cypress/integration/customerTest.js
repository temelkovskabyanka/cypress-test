import Component from "../components/Customers/Component";
import Data from "../components/Customers/Data";

describe("Customer Test", () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

    let customerComponent = new Component();
    let customerData = new Data();

    it("Adding new customer and checking is it added", () => {
        cy.visit("https://demo.phppointofsale.com/index.php/customers");
        customerComponent.logInButton.click();
        customerComponent.newCustomerButton.click();
        customerComponent.firstName.type(customerData.firstName);
        customerComponent.lastName.type(customerData.lastName);
        customerComponent.email.type(customerData.email);
        customerComponent.phoneNumber.type(customerData.phoneNumber);
        customerComponent.saveButton.click();
        customerComponent.homeButton.click();
        customerComponent.customerField.click();
        customerComponent.searchCustomerField.type(customerData.searchCustomerField + "{enter}");
        customerComponent.customerTableName.should("have.text", "Zoey Chakovska");
        customerComponent.customerTableEmail.should("have.text", "zoey@gmail.com");
    });
});



