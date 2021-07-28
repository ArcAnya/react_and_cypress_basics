describe('user that visits app', () => {
    describe('and the API is working as it should', () => {

        before(() => {
            cy.intercept('**/api/users', { fixture: 'users_response.json' })
            // intercept => to spy and "stub" network requests and responses
            // fixture => load a FIXED data set located in a file
            // NOTE: if delete cy.intercept, we will go to the url/api, otherwise, we get intercepted and get data from fixture
            cy.visit('/')
        })

        it('is expected to see Hello World', () => {
            cy.get('body').should('contain.text', 'Hello World')
        })

        it('is expected to see info from 6 users', () => {
            cy.get('[data-cy=users-list]')
                .children()
                .first()
                .should('contain.text', 'Thomas')
                .next()
                .should('contain.text', 'Mirsad')
        })

        it('is expected to show message when click button', () => {
            cy.get('[data-cy=click-me]')
                .first()
                .click()
            cy.get('[data-cy=message]').should('contain.text', 'You clicked on Thomas')
        })

    })

    describe('and the API is not working (500 error)', () => {
        before(() => {
            cy.intercept('**/api/users', { statusCode: 500 })
            cy.visit('/')
        })

        it('is expected to return an error message', () => {
            cy.get('[data-cy=message]').should('contain.text', 'Sorry, the API responds with Internal Server Error')
        })

    })




})