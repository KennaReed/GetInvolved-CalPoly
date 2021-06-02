// Feature: Login Guest
//   It logins a guest.
 
//   Scenario: Logging in User
//     Given I visit the main page 
//     And I type an unregeisted account with email and password
//     When I click on the submit button
//     Then I shouldn't be able to access the website

describe('Logging in User', () => {
    it('Given I visit the main page', () => {
        cy.visit('https://getinvolvedcalpoly.herokuapp.com');  
    });

    it('When I click on the guest button', () => {
        //Note this other way to access the html element (form) by the className
        cy.get('[id="Guest"]').click();
        cy.wait(1000);
    });

    it('Then I should be able to access the website', () => {   
       cy.get('[class="it"]').should('be.visible');
    });
});