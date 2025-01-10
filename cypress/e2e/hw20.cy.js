

/// <reference types="cypress" />
import AddCarForm from "../page-objects/forms/AddCarForm";
import AddFuelExpense from "../page-objects/forms/AddFuelExpense";
import GaragePage from "../page-objects/pages/GaragePage";

describe('Add car" form with POM', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('.header_signin').click();

        cy.get('#signinEmail').type(Cypress.env('MAIN_USER_EMAIL'));
        cy.get('#signinPassword').type(Cypress.env('MAIN_USER_PASSWORD'));
        cy.get('.modal-footer .btn-primary').click();
        
        cy.contains('button', 'Add car').click();
    });

    it('Success Add car and Fuel Expense', () => {

        AddCarForm.enterMileage('23');
        AddCarForm.clickAddButton();
        GaragePage.clickAddFuelExpenseButton();
        AddFuelExpense.clickAddanExpenseButton();
        AddFuelExpense.enterMileage(24);
        AddFuelExpense.enterLiters(40);
        AddFuelExpense.enterTotalCost(1000);
        AddFuelExpense.clickAddFuelExpenseButton();
     });


    });











