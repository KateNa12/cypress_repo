/// <reference types="cypress" />

describe('to check visibility and attributes of the headers and the footers on the website', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
         }
    })
})

it('To check visibility and attributes of the element Home at the header', () => {
    cy.get('a.btn.header-link').should('be.visible');
    cy.get('a.btn.header-link').should('have.text', 'Home');
    cy.get('a.btn.header-link').should('have.class', '-active')
});

it('To check visibility and attributes of the element About at the header', () => {
    cy.get('[appscrollto="aboutSection"]').should('be.visible');
    // cy.contains('About').should('be.visible');
    cy.contains('About').should('have.text', 'About');
    cy.contains('About').should('be.visible').and('not.be.disabled').click();
    cy.get('button.btn.header-link').should('have.attr', 'appscrollto');
  });


  it('To check visibility and attributes of the element Contacts at the header', () => {
    cy.get('[appscrollto="contactsSection"]').should('be.visible');
    // cy.contains('Contacts').should('be.visible');
    cy.get('[appscrollto="contactsSection"]').should('have.text', 'Contacts');
    cy.get('[appscrollto="contactsSection"]').should('be.visible').and('not.be.disabled').click();
    cy.get('[appscrollto="contactsSection"]').should('have.attr', 'appscrollto');
  });

  it('To check visibility and attributes of the element Guest log in at the header', () => {
    cy.get('button.header-link.-guest').should('have.class', 'header-link -guest')
    cy.get('[class="header-link -guest"]').should('be.visible');
    cy.get('[class="header-link -guest"]').should('have.text', 'Guest log in');
    cy.get('[class="header-link -guest"]').should('be.visible').and('not.be.disabled').click();
  });

  it('To check visibility and attributes of the element Sign In at the header', () => {
    cy.get('button.btn.btn-outline-white.header_signin').should('have.class', 'btn btn-outline-white header_signin')
    cy.get('[class="btn btn-outline-white header_signin"]').should('be.visible');
    cy.get('[class="btn btn-outline-white header_signin"]').should('have.text', 'Sign In');
    cy.get('[class="btn btn-outline-white header_signin"]').should('be.visible').and('not.be.disabled').click();
  });


  it('To check visibility and attributes of the element Facebook at the footer', () => {
    cy.get('[class="socials_icon icon icon-facebook"]').should('be.visible');
    cy.get('a[href="https://www.facebook.com/Hillel.IT.School"]').should('exist').and('be.visible');
    cy.get('.icon-facebook').parent().invoke('removeAttr','target').should('not.be.disabled').click();
  });

  it('To check visibility and attributes of the element Telegram at the footer', () => {
    cy.get('[class="socials_icon icon icon-telegram"]').should('be.visible');
    cy.get('a[href="https://t.me/ithillel_kyiv"]').should('exist').and('be.visible');
    cy.get('.icon-telegram').parent().invoke('removeAttr','target').should('not.be.disabled');
  });
    

  it('To check visibility and attributes of the element YouTube at the footer', () => {
    cy.get('[class="socials_icon icon icon-youtube"]').should('be.visible');
    // cy.get('a[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]').should('exist').and('be.visible');
    cy.get('.icon-youtube').parent().invoke('removeAttr','target').should('not.be.disabled');
  });
   
  it('To check visibility and attributes of the element Instagram at the footer', () => {
    cy.get('[class="socials_icon icon icon-instagram"]').should('be.visible');
    cy.get('a[href="https://www.instagram.com/hillel_itschool/"]').should('exist').and('be.visible');
    cy.get('.icon-instagram').parent().invoke('removeAttr','target').should('not.be.disabled').click();
  }); 
    
  it('To check visibility and attributes of the element Linkedin at the footer', () => {
    cy.get('[class="socials_icon icon icon-linkedin"]').should('be.visible');
    cy.get('a[href="https://www.linkedin.com/school/ithillel/"]').should('exist').and('be.visible');
    cy.get('.icon-linkedin').parent().invoke('removeAttr','target').should('not.be.disabled').click();
  })

})