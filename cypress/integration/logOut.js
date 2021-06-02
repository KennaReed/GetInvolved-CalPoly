// Feature: Logout User
//   It logouts a user.
 
//   Scenario: Logging in User
//     Given I visit the main page 
//     And I type an email and password
//     When I click on the submit button
//     And I access the logout
//     Then Logout should occur

describe('Logging in User', () => {
    it('Given I visit the main page', () => {
        cy.visit('https://getinvolvedcalpoly.herokuapp.com');  
    });

    it('And I type an email and password', () => {
        cy.get('form').within(() => {
            cy.get('input[id="username"]').type('amela@gmail.com');
            cy.get('input[id="password"]').type('password');
          });
        
    });

    it('When I click on the submit button and logout button', () => {
        //Note this other way to access the html element (form) by the className
        cy.get('[id="check"]').click();
        cy.wait(1000);
        cy.get('[class=log]').click();
        cy.wait(100);
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it('Then I should be able to logout', () => {   
       cy.get('[class="submit"]').should('be.visible');
    });
});