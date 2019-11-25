export default class Component {
    get logInButton() {
        return cy.get(".btn.btn-primary.btn-block")
    }

    get newCustomerButton() {
        return cy.get("#new-person-btn");
    }

    get firstName() {
        return cy.get("#first_name");
    }

    get lastName() {
        return cy.get("#last_name");
    }

    get email() {
        return cy.get("#email");
    }

    get phoneNumber() {
        return cy.get("#phone_number");
    }

    get saveButton() {
        return cy.get("#submitf");
    }

    get homeButton() {
        return cy.get(".home");
    }

    get customerField() {
        return cy.get(".customers");
    }

    get searchCustomerField() {
        return cy.get('#search');
    }

    get customerTableName() {
        return cy.get("tbody > tr > :nth-child(4)");
    }

    get customerTableEmail() {
        return cy.get("tbody > tr > :nth-child(5)");
    }

}