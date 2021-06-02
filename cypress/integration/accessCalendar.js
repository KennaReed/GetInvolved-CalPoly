// Feature: Calendar access
//   Accessing a calendar
 
//   Scenario: Logging in User
//     Given I visit the main page 
//     And I type an email and password
//     When I click on the submit button
//     Then I should be able to access the calendar

describe('Logging in User', () => {
    it('Given I visit the main page', () => {
        cy.visit('https://getinvolvedcalpoly.herokuapp.com/calendar');  
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

    it('Then I should be able to access the calendar', () => {   
       cy.get('[class="logo-nav"]').should('be.visible');
    });
});