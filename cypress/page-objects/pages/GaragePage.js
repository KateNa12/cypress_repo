
import BasePage from "./BasePage";

class GaragePage extends BasePage {

    get addCarButton() {
        return cy.get('[class="btn btn-primary"]');
    }

    get addFuelExpenseButton(){
        return cy.contains('a', 'Fuel expenses');
    }

    clickAddCarButton() {
        this.addCarButton.click();
    }

    clickAddFuelExpenseButton(){
        this.addFuelExpenseButton.click();
    }

   }

export default new GaragePage();