/// <reference types="cypress" />

describe('Test the Registration form', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('.btn-primary').click();
  })
    context('Field "Name" validations', () => {
        
      it('Empty field - "Name is requiered"', () => {
        cy.get('[id="signupName"]').clear();
        cy.get('[class="btn btn-primary"]').click({force:true});
        cy.get('.invalid-feedback p').should('contain.text', 'Name required').and('be.visible');
      });
  
      it('Wrong data - "Name is invalid"', () => {
        cy.get('[id="signupName"]').clear().type('1'.trim());
        cy.get('[class="btn btn-primary"]').click({force:true});
        cy.get('.invalid-feedback p').should('contain.text', 'Name is invalid').and('be.visible');
          });
        
           
      it('Wrong lenght - "Name has to be from 2 to 20 characters long"', () => {
        cy.get('[id="signupName"]').clear().type('A'.trim());
        cy.get('[class="btn btn-primary"]').click({force:true});
        cy.get('.invalid-feedback p').should('contain.text', 'Name has to be from 2 to 20 characters long').and('be.visible');
      });

      it('Border color is red', () => {
        cy.get('[id="signupName"]').clear().type('A'.trim());
        cy.get('[class="btn btn-primary"]').click({force:true});
        cy.get('input#signupName.form-control.ng-invalid.ng-dirty.is-invalid.ng-touched').should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
      });
    });
  
    context('Field "Last Name" validations', () => {
        it('Empty field - "Last name is requiered"', () => {
            cy.get('[id="signupLastName"]').clear();
            cy.get('[class="btn btn-primary"]').click({force:true});
            cy.get('.invalid-feedback p').should('contain.text', 'Last name required').and('be.visible');
          });
      
          it('Wrong data - "Last name is invalid"', () => {
            cy.get('[id="signupLastName"]').clear().type('1'.trim());
            cy.get('[class="btn btn-primary"]').click({force:true});
            cy.get('.invalid-feedback p').should('contain.text', 'Last name is invalid').and('be.visible');
              });
            
               
          it('Wrong lenght - "Last name has to be from 2 to 20 characters long"', () => {
            cy.get('[id="signupLastName"]').clear().type('A'.trim());
            cy.get('[class="btn btn-primary"]').click({force:true});
            cy.get('.invalid-feedback p').should('contain.text', 'Last name has to be from 2 to 20 characters long').and('be.visible');
          });
    
          it('Border color is red', () => {
            cy.get('[id="signupLastName"]').clear().type('A'.trim());
            cy.get('[class="btn btn-primary"]').click({force:true});
            cy.get('input#signupLastName.form-control.ng-invalid.ng-dirty.is-invalid.ng-touched').should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
          });
        });

        context('Field "Email" validations', () => {
        
            it('Wrong data - "Email is incorrect"', () => {
              cy.get('[id="signupEmail"]').clear().type('a');
              cy.get('[class="btn btn-primary"]').click({force:true});
              cy.get('.invalid-feedback p').should('contain.text', 'Email is incorrect').and('be.visible');
            });

            it('For empty field - "Email required"', () => {
                cy.get('[id="signupEmail"').clear();
                cy.get('[class="btn btn-primary"]').click({force:true});
                cy.get('.invalid-feedback p').should('contain.text', 'Email required').and('be.visible');
            });

            it('Border color is red', () => {
                cy.get('[id="signupEmail"]').clear().type('A'.trim());
                cy.get('[class="btn btn-primary"]').click({force:true});
                cy.get('input#signupEmail.form-control.ng-invalid.ng-dirty.is-invalid.ng-touched').should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
            });

        context('Field "Password" validations', () => {
        
            it('Wrong data - "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"', () => {
                cy.get('[id="signupPassword"]').clear().type('a');
                cy.get('[class="btn btn-primary"]').click({force:true});
                cy.get('.invalid-feedback p').should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').and('be.visible');
             });
    
            it('For empty field - "Password required"', () => {
                cy.get('[id="signupPassword"').clear();
                cy.get('[class="btn btn-primary"]').click({force:true});
                cy.get('.invalid-feedback p').should('contain.text', 'Password required').and('be.visible');
            });
    
            it('Border color is red', () => {
                cy.get('[id="signupPassword"]').clear().type('A'.trim());
                cy.get('[class="btn btn-primary"]').click({force:true});
                cy.get('input#signupPassword.form-control.ng-invalid.ng-dirty.is-invalid.ng-touched').should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
            });

        context('Field "Re-enter Password" validations', () => {
        
            it('Wrong data - "Passwords do not match"', () => {
                cy.get('[id="signupRepeatPassword"]').clear().type('A1234567a');
                cy.get('[class="btn btn-primary"]').click({force:true});
                cy.get('.invalid-feedback p').should('contain.text', 'Passwords do not match').and('be.visible');
            });
        
            it('For empty field - "Re-enter password required"', () => {
                cy.get('[id="signupRepeatPassword"').clear();
                cy.get('[class="btn btn-primary"]').click({force:true});
                cy.get('.invalid-feedback p').should('contain.text', 'Re-enter password required').and('be.visible');
            });
        
            it('Border color is red', () => {
                cy.get('[id="signupRepeatPassword"]').clear().type('A'.trim());
                cy.get('[class="btn btn-primary"]').click({force:true});
                cy.get('input#signupRepeatPassword.form-control.ng-invalid.ng-dirty.is-invalid.ng-touched').should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
           });

        context('Button "Register" validations', () => {

            function generateName(minLength = 2, maxLength = 20) {
                const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
                let name = '';
                for (let i = 0; i < length; i++) {
                  name += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                return name.trim(); 
              };
                            

            function generateUserData() {
                const timestamp = Date.now();
                return {
                email: `user${timestamp}@example.com`,
              };
              }
        
            it('The button is disabled when data is incorrect', () => {
                cy.get('[id="signupName"]').clear().type('1');
                cy.get('[id="signupLastName"]').clear().type('1'.trim());
                cy.get('[id="signupEmail"]').clear().type('a');
                cy.get('[id="signupPassword"]').clear().type('a');
                cy.get('[id="signupRepeatPassword"]').clear().type('A1234567a');
                cy.get('[class="btn btn-primary"]').should('have.attr', 'disabled');
                
            });
        
            it('Successful user registration', () => {

                const firstName = generateName();
                const lastName = generateName();
                const userData = generateUserData();


                cy.get('[id="signupName"]').clear().type(firstName);
                cy.get('[id="signupLastName"]').clear().type(lastName);
                cy.get('[id="signupEmail"]').clear().type(userData.email);
                cy.get('[id="signupPassword"]').clear().type('A1234567a');
                cy.get('[id="signupRepeatPassword"]').clear().type('A1234567a');
                cy.get('[class="btn btn-primary"]').click({force:true});
           
                
            });
        
            
    });
});
});
});
})








