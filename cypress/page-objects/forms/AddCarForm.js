class AddCarForm {

    get brandField() {
        return cy.get('[id="addCarBrand"]');
    }

    get modelField() {
        return cy.get('[id="addCarModel"]');
    }

    get mileageButton() {
        return cy.get('[id="addCarMileage"]');
    }
    
    get addButton() {
        return cy.get('button.btn.btn-primary')
            .filter((index, element) => element.textContent.trim() === 'Add');
    }
    
     enterMileage(km) {
       this.mileageButton.type(km);
    }

    
    clickAddButton(){
        this.addButton.click();
    }

    
}

export default new AddCarForm();