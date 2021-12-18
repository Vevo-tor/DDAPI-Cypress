describe('Keypad Difficulty: hard', () => {
    it('Should be hard', () => {

        // Array to store unkown key values
        const arr = [];

        //baseUrl is behaving oddly
        cy.visit(Cypress.config('baseUrl'));
        cy.get('.item').contains("Keypad - hard", { matchCase: false }).click();

        // Unkown key values stored in arr
        for (let i = 1; i <= 12; i++) {
            cy.get(`#keypad > :nth-child(${i})`).click();
            cy.get('#input').invoke('val').then(a => {
                arr.push(a);
                cy.get('#keypad > div').contains('del').click();
            })
        }

        // Filling ToDo value to Input
        cy.get('#todo').invoke('val').then(toDo => {
            toDo.split('').map(numb => {
                cy.get('#keypad > :nth-child(' + (arr.indexOf(numb) + 1) + ')').click();
            });
        });

        //Submit form
        cy.get('#submit').click();
        cy.get('#msg').should('exist')
            .should('contain', 'Correct!');
    });
});