/// <reference types="cypress" />
// import 'cypress-plugin-api'
// import data from '../../fixtures/example.json'
import { after } from 'mocha';

describe('HW-21 API test cases', () => {
    beforeEach(() => {
        const userBody = {
            "email": "kateryna.naimark+2@gmail.com",
            "password": "Kn1234567",
            "remember": false
        }
      
        cy.request('POST', '/api/auth/signin', userBody).then((response) => {
            cy.log(JSON.stringify(response));
            cy.log(JSON.stringify(response.headers['set-cookie']))
            const sidCookie = response.headers['set-cookie'][0];
            const sidValue = sidCookie.split(';')[0].split('=')[1];
            cy.setCookie('sid', sidValue);
        });

        cy.request('GET', '/api/cars').then((response) => {
            // expect(response.status).to.eq(200);

            const carId = response.body.data[0].id;
            const carId1 = response.body.data[1].id;
            const mileage = response.body.data[0].mileage + 1;
            const mileage1 = response.body.data[1].mileage + 1;
           
            cy.wrap(carId).as('savedCarId'); 
            cy.wrap(carId1).as('savedCarId1'); 
            cy.wrap(mileage).as('mileage');
            cy.wrap(mileage1).as('mileage1');

            cy.log(`Alias set with carId: ${carId}`); 
        });
    });   

    it('Add car expense for the saved car', () => {
          cy.get('@savedCarId').then((carId) => {
             cy.get('@mileage').then((mileage) => {
                const carExpense = {
                    carId: carId, 
                    reportedAt: '2025-01-09',
                    mileage: mileage,
                    liters: 11,
                    totalCost: 11,
                    forceMileage: false,
                };
                
                cy.request('POST', '/api/expenses', carExpense).then((response) => {
                    cy.log(JSON.stringify(response.body));
    
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.property('status', 'ok');
                    expect(response.body.data).to.have.property('id');
                });
            });
        });        
    });

    it('Add new car and check successful car creation', () => {
        const carBody = {
          "carBrandId": 1,
          "carModelId": 3,
          "mileage": 777
        }

        cy.request('POST', 'api/cars', carBody).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body.data.carBrandId).to.eq(1);
          expect(response.body.data.carModelId).to.eq(3);
          expect(response.body.data.initialMileage).to.eq(777);
      });
    });

    it('Add car expense for another saved car', () => {
            cy.get('@savedCarId1').then((carId1) => {
                cy.get('@mileage1').then((mileage1) => {
                const carExpense = {
                    carId: carId1, 
                    reportedAt: '2025-01-09',
                    mileage: mileage1,
                    liters: 11,
                    totalCost: 11,
                    forceMileage: false,
                };
    
                
                cy.request('POST', '/api/expenses', carExpense).then((response) => {
                    cy.log(JSON.stringify(response.body));
    
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.property('status', 'ok');
                    expect(response.body.data).to.have.property('id');
                });
            });
        });        
    });

    it('Update expense', () => {
        cy.get('@savedCarId').then((carId) => {
            cy.get('@mileage').then((mileage) => {
                cy.wrap(mileage+1).as('mileage');
                let carExpense = {
                    carId: carId, 
                    reportedAt: '2025-01-09',
                    mileage: mileage+1,
                    liters: 11,
                    totalCost: 11,
                    forceMileage: false,
                };
            
                cy.request('POST', '/api/expenses', carExpense).then((response) => {
                    const expenseId = response.body.data.id;
                    
                    carExpense.liters = 22;
                    cy.request('PUT', `/api/expenses/${expenseId}`, carExpense).then((response) => {
                        cy.log(JSON.stringify(response.body));
    
                        expect(response.status).to.eq(200);
                        expect(response.body).to.have.property('status', 'ok');
                        expect(response.body.data.liters).to.eq(22);
                    });
                });
            });
        });
    });

    it('Delete expense', () => {
        cy.get('@savedCarId').then((carId) => {
            cy.get('@mileage').then((mileage) => {
                cy.wrap(mileage+1).as('mileage');
                let carExpense = {
                    carId: carId, 
                    reportedAt: '2025-01-09',
                    mileage: mileage+1,
                    liters: 11,
                    totalCost: 11,
                    forceMileage: false,
                };
            
                cy.request('POST', '/api/expenses', carExpense).then((response) => {
                    const expenseId = response.body.data.id;
                    
                    cy.request('DELETE', `/api/expenses/${expenseId}`).then((response) => {
                        cy.log(JSON.stringify(response.body));
    
                        expect(response.status).to.eq(200);
                        expect(response.body).to.have.property('status', 'ok');
                        expect(response.body.data.expenseId).to.eq(`${expenseId}`);
                    });
                });
            });
        });
    });
});


















