class AddFuelExpenseForm {

    get addAnExpenseButton() {
        return cy.get('button.btn.btn-primary')
        .filter((index, element) => element.textContent.trim() === 'Add an expense');
    }
    
    get mileageField(){
        return cy.get('[id="addExpenseMileage"]').clear();

    }
    get numberOfLitersField(){
        return cy.get('[id="addExpenseLiters"]');
    }

    get totalCostField(){
        return cy.get('[id="addExpenseTotalCost"]');
    }

    get addFuelExpenseButton(){
        return cy.get('.modal-footer button.btn.btn-primary')
        .filter((index, element) => element.textContent.trim() === 'Add');
    }

    clickAddanExpenseButton(){
        this.addAnExpenseButton.click();
    }

    enterMileage(number){
        this.mileageField.type(number);
    }

    enterLiters(number){
        this.numberOfLitersField.type(number);
    }

    enterTotalCost(number){
        this.totalCostField.type(number);
    }

    clickAddFuelExpenseButton(){
        this.addFuelExpenseButton.click();
    }

    
}

export default new AddFuelExpenseForm();