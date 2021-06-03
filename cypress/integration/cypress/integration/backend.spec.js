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
                url: 'https://getinvolvedapi.herokuapp.com/',
            }).as('apiCheck');
        });

        it('When I visit the root endpoint it does not smoke!', () => {
            cy.visit('https://getinvolvedapi.herokuapp.com/');
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

describe ('Grabbing All Posts on Homepage', () => {
    it ('Getting Posts', () => {
        cy.request('GET', 'https://getinvolvedapi.herokuapp.com/home').then(
            (response) => {
                expect(response.status).to.be.equal(200);
                expect(response.body).to.have.property('posts_list');
                assert.isNotEmpty(response.body.posts_list);
            }
            )
    });
});

describe ('Grabbing All Posts from Forum', () => {
    it ('Getting Posts', () => {
        cy.request('GET', 'https://getinvolvedapi.herokuapp.com/forum').then(
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

describe('Creating a Comment!', () => {
    it('Sending a comment for insertion', () => {
        cy.request('POST', 'https://getinvolvedapi.herokuapp.com/comment', { 
            DatePosted: "2021-05-24T17:47:11.583Z",
            publisher: "Daddy Jeff",
            content: "Using three things: facts and data",
            postID:  "60aab6f985d5a6ff170207d0"}).then(
            (response) => {
             expect(response.status).to.be.equal(201);
            }
          )
});
});

// var filters = []
// var filter = {}
// filter["Free"] = "Cost"
// filters.push(filter)
// describe('Filtering Posts!', () => {
//     it('Sending filters', () => {
//         cy.request('POST', 'http://127.0.0.1:5000/filter', { 
//             filters
//             }).then(
//             (response) => {
//             expect(response.status).to.be.equal(200);
//             expect(response.body).to.have.property('posts_list');
//             assert.isNotEmpty(response.body.posts_list);
//             }
//         )
// });
// });

describe('Grabbing Comment(s)!', () => {
    it('Sending a postId to get its connected comments', () => {
        cy.request('POST', 'https://getinvolvedapi.herokuapp.com/getComment', { 
            postID:  "60aab6f985d5a6ff170207d0"}).then(
            (response) => {
             expect(response.status).to.be.equal(200);
             expect(response.body).to.have.property('comments_list');
            assert.isNotEmpty(response.body.comments_list);
            }
          )
});
});

describe('Login info', () => {
    it('Sending login information', () => {
        cy.request('POST', 'https://getinvolvedapi.herokuapp.com/login', { 
            username: "guest@gmail.com",
            password: "$2a$04$UC1IBNicRJDoZdJxg/Fvq.cwIB5PenF1R9OkkWIkFgRg85hb0Vcbu"
            }).then(
            (response) => {
             expect(response.status).to.be.equal(200);
            assert.isNotEmpty(response.body);
            }
          )
});
});

describe('Signup info', () => {
    it('Sending login information', () => {
        cy.request('POST', 'https://getinvolvedapi.herokuapp.com/sign-up', { 
            name: "guest1",
            username: "guest@gmail.com",
            password : "$2a$04$UC1IBNicRJDoZdJxg/Fvq.cwIB5PenF1R9OkkWIkFgRg85hb0Vcbu"
            }).then(
            (response) => {
             expect(response.status).to.be.equal(200);
            assert.isNotEmpty(response.body);
            }
          )
});
});

describe ('Get all accounts', () => {
    it ('Getting users', () => {
        cy.request('GET', 'https://getinvolvedapi.herokuapp.com/login1').then(
            (response) => {
                expect(response.status).to.be.equal(200);
                expect(response.body).to.have.property('account_list');
                assert.isNotEmpty(response.body.account_list);
            }
            )
    });
});
