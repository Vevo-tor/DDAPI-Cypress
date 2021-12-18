describe('Keypad Difficulty: easy', () => {
    it('Should be easy', () => {

        cy.visit(Cypress.config('baseUrl'));
        cy.get('.item').contains("Keypad - easy", { matchCase: false }).click();

        // Read Todo and fill input
        cy.get('#todo').invoke('val').then(toDo => {
            toDo.split('').map(numb => {
                cy.get('#keypad > div').contains(numb).click();
            });
        });

        cy.get('#submit').click();
        cy.get('#msg').should('exist')
            .should('contain', 'Correct!');
    });
});