// Feature: Creating a post
//   It creates a post
 
//   Scenario: Creating a post
//     Given I visit the post page 
//     And I type an email and password
//     When I click on the submit button
//     And I fill out the form
//     And I click submit
//     I should be able to see the post

describe('Logging in User', () => {
    it('Given I visit the post page', () => {
        cy.visit('https://getinvolvedcalpoly.herokuapp.com/post');  
    });

    it('And I type an email and password', () => {
        cy.get('form').within(() => {
            cy.get('input[id="username"]').type('amela@gmail.com');
            cy.get('input[id="password"]').type('password');
          });
        
    });

    it('When I click on the submit button', () => {
        //Note this other way to access the html element (form) by the className
        cy.get('[id="check"]').click();
        cy.wait(1000);
    });
      
    it('And I fill out a form', ()=> {
        cy.get('[id=title]').type('title');
        cy.get('[id=publisher]').type('publisher');
        cy.get('[id=content]').type('hi there. i am a test');
        cy.get('[class=category1]').select('Art');
        cy.get('[class=cost1]').select('Free');
        cy.get('button').click();

    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it('should be able access the page', ()=> {
        cy.visit('https://getinvolvedcalpoly.herokuapp.com/forum');
        cy.get('[id="Guest"]').click();
        cy.wait(1000);
        cy.get('[class="it"]').should('be.visible');
    })

});