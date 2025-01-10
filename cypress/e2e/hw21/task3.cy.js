/// <reference types="cypress" />
import 'cypress-plugin-api'
// import data from '../../fixtures/example.json'


describe('HW-21 API test cases', () => {
    beforeEach(() => {
        const userBody = {
            "email": "kateryna.naimark+2@gmail.com",
            "password": "Kn1234567",
            "remember": false
        }
      
        cy.api('POST', '/api/auth/signin', userBody).then((response) => {
            cy.log(JSON.stringify(response));
            cy.log(JSON.stringify(response.headers['set-cookie']))
            const sidCookie = response.headers['set-cookie'][0];
            const sidValue = sidCookie.split(';')[0].split('=')[1];
            cy.setCookie('sid', sidValue);
        });
    });   

    it('Check current user', () => {
        cy.api('GET', 'api/users/current').then((response) => {
            expect(response.status).to.eq(200);
          expect(response.body.data.userId).to.eq(169464);
          expect(response.body.data.currency).to.eq('usd');
          expect(response.body.data.distanceUnits).to.eq('km');
      });
      });

      it('Check  user profile data', () => {
        cy.api('GET', 'api/users/profile').then((response) => {
            expect(response.status).to.eq(200);
          expect(response.body.data.userId).to.eq(169464);
          expect(response.body.data.name).to.eq('Kateryna');
          expect(response.body.data.lastName).to.eq('Naimark');
      });
    });

       it('Check  instructions by id', () => {
        cy.api('GET', 'api/instructions/1').then((response) => {
            expect(response.status).to.eq(200);
          expect(response.body.data.filename).to.eq('audi/tt/Front windshield wipers on Audi TT.pdf');
          expect(response.body.data.description).to.eq('Front windshield wipers on Audi TT');
          expect(response.body.data.carBrandId).to.eq(1);
          expect(response.body.data.carModelId).to.eq(1);
      });
    });
});
    

    
