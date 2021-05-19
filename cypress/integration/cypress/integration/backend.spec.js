// backend.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Backend running -- Smoke test', () => {
    
    context('Given I ran the backend (API)', () => {

        before(() => {
            cy.intercept({
                method: 'GET',
                url: 'http://localhost:5000/',
            }).as('apiCheck');
        });

        it('When I visit the root endpoint it does not smoke!', () => {
            cy.visit('http://localhost:5000/');
            cy.wait('@apiCheck').then((interception) => {
              assert.isNotNull(interception.response.body, 'API is up and doesn\'t smoke!');
            }); // or
            // cy.wait('@apiCheck').should(({ request, response }) => {
            //     expect(response && response.body).to.include('Hello, World!');
            //     expect(response && response.statusCode).to.be.equal(200);
            // });
        });
    });
});

describe ('Grabbing All Forum Posts', () => {
    it ('Getting Posts', () => {
        cy.request('GET', 'http://localhost:5000/home').then(
            (response) => {
                expect(response.status).to.be.equal(200);
                expect(response.body).to.have.property('posts_list');
                assert.isNotEmpty(response.body.posts_list);
            }
            )
    });
});

describe('Creating a Post!', () => {
        it('Sending a post for insertion', () => {
            cy.request('POST', 'https://getinvolvedapi.herokuapp.com/posts', { 
                title: 'Testing Title' , 
                DateEvent: '2021-04-28T16:42:56.139Z',
                DatePosted: '2021-04-28T16:42:56.139Z', 
                time: '',
                publisher: 'MR', 
                content: ':)',
                keyWords: 'School',
                Cost: 'Free',
                Location:'',
                image: ''}).then(
                (response) => {
                 expect(response.status).to.be.equal(201);
                }
              )
    });
});