// Feature: Sign up User
//   It signups a new user.
 
//   Scenario: Logging in User
//     Given I visit the main page 
//     And I hit the sign-up button
//     When I enter a password and username and name
//     And I click submit
//     Then I should be able to access the website

describe('Logging in User', () => {
    it('Given I visit the main page', () => {
        cy.visit('https://getinvolvedcalpoly.herokuapp.com');  
    });

    it('When I click on the sign-up button', () => {
        //Note this other way to access the html element (form) by the className
        cy.get('[class="myButton"]').click();
        cy.wait(1000);
    });

    it('And I type an email and password', () => {
        cy.get('form').within(() => {
            cy.get('input[id="name"]').type('thisguy');
            cy.get('input[id="username"]').type('this@gmail.com');
            cy.get('input[id="password"]').type('password');
          });
        
    });

    it('When I click on the submit button', () => {
        //Note this other way to access the html element (form) by the className
        cy.get('[id="check"]').click();
        cy.wait(1000);
    });

    it('Then I should be able to access the website', () => {   
       cy.get('[class="it"]').should('be.visible');
    });
});