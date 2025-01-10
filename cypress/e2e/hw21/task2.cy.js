/// <reference types="cypress" />
import ProfilePage from "../../page-objects/pages/ProfilePage";

describe('HW-22 API intercept test cases', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('button.header_signin').click();
        cy.get('#signinEmail').type('kateryna.naimark+2@gmail.com');
        cy.get('#signinPassword').type('Kn1234567');
        cy.get('.modal-footer .btn-primary').click();
        cy.url().should('contain', '/garage');
    });

    it('Check intercept user name in Profile', () => {
        cy.intercept('GET', '**/profile', (req) => {
          req.reply({
            statusCode: 200,
            body: {
              data:{
                name: 'Polar Bear',
                lastname: '',
                photoFilename: 'default-user.png',
                userId: 169464
              }
            }
          })
        });

        ProfilePage.clickProfileButton();
        cy.url().should('contain', '/profile');
        ProfilePage.checkUserName('Polar Bear');
    });
});








