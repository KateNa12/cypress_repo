/// <reference types="cypress" />

describe('Перевірка хедерів та футерів на сайті', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
         }
    })
})

it('Перевірка елементу Home', () => {
    cy.get('a.btn.header-link').should('be.visible');
    cy.get('a.btn.header-link').should('have.text', 'Home');
    cy.get('a.btn.header-link').should('have.class', '-active')
});

it('Перевірка елементу About', () => {
    cy.get('[appscrollto="aboutSection"]').should('be.visible');
    // cy.contains('About').should('be.visible');
    cy.contains('About').should('have.text', 'About');
    cy.contains('About').should('be.visible').and('not.be.disabled').click();
    cy.get('button.btn.header-link').should('have.attr', 'appscrollto');
  });


  it('Перевірка елементу Contacts', () => {
    cy.get('[appscrollto="contactsSection"]').should('be.visible');
    // cy.contains('Contacts').should('be.visible');
    cy.get('[appscrollto="contactsSection"]').should('have.text', 'Contacts');
    cy.get('[appscrollto="contactsSection"]').should('be.visible').and('not.be.disabled').click();
    cy.get('[appscrollto="contactsSection"]').should('have.attr', 'appscrollto');
  });

  it('Перевірка елементу Guest log in', () => {
    cy.get('button.header-link.-guest').should('have.class', 'header-link -guest')
    cy.get('[class="header-link -guest"]').should('be.visible');
    cy.get('[class="header-link -guest"]').should('have.text', 'Guest log in');
    cy.get('[class="header-link -guest"]').should('be.visible').and('not.be.disabled').click();
  });

  it('Перевірка елементу Sign In', () => {
    cy.get('button.btn.btn-outline-white.header_signin').should('have.class', 'btn btn-outline-white header_signin')
    cy.get('[class="btn btn-outline-white header_signin"]').should('be.visible');
    cy.get('[class="btn btn-outline-white header_signin"]').should('have.text', 'Sign In');
    cy.get('[class="btn btn-outline-white header_signin"]').should('be.visible').and('not.be.disabled').click();
  });


  it('Перевірка елементу Facebook', () => {
    cy.get('[class="socials_icon icon icon-facebook"]').should('be.visible');
    cy.get('a[href="https://www.facebook.com/Hillel.IT.School"]').should('exist').and('be.visible');
    cy.get('.icon-facebook').parent().invoke('removeAttr','target').should('not.be.disabled').click();
  });

  it('Перевірка елементу Telegram', () => {
    cy.get('[class="socials_icon icon icon-telegram"]').should('be.visible');
    cy.get('a[href="https://t.me/ithillel_kyiv"]').should('exist').and('be.visible');
    cy.get('.icon-telegram').parent().invoke('removeAttr','target').should('not.be.disabled');
  });
    

  it('Перевірка елементу YouTube', () => {
    cy.get('[class="socials_icon icon icon-youtube"]').should('be.visible');
    // cy.get('a[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]').should('exist').and('be.visible');
    cy.get('.icon-youtube').parent().invoke('removeAttr','target').should('not.be.disabled');
  });
   
  it('Перевірка елементу Instagram', () => {
    cy.get('[class="socials_icon icon icon-instagram"]').should('be.visible');
    cy.get('a[href="https://www.instagram.com/hillel_itschool/"]').should('exist').and('be.visible');
    cy.get('.icon-instagram').parent().invoke('removeAttr','target').should('not.be.disabled').click();
  }); 
    
  it('Перевірка елементу Linkedin', () => {
    cy.get('[class="socials_icon icon icon-linkedin"]').should('be.visible');
    cy.get('a[href="https://www.linkedin.com/school/ithillel/"]').should('exist').and('be.visible');
    cy.get('.icon-linkedin').parent().invoke('removeAttr','target').should('not.be.disabled').click();
  });





})