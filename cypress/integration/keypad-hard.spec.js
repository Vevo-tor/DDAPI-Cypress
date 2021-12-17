describe('Keypad Difficulty: hard', () => {
    it('Should be hard', () => {
        const arr = [];
        cy.visit(Cypress.config('baseUrl'));

        cy.get('.item').contains("Keypad - hard", { matchCase: false }).click();
        for (let i = 1; i <= divCount; i++) {
            cy.get(`#keypad > :nth-child(${i})`).click();
            cy.get('#input').invoke('val').then(a => {
                arr.push(a);
                cy.get('#keypad > div').contains('del').click();
            })
        }

        console.log(arr);
        cy.get('#todo').invoke('val').then(toDo => {
            toDo.split('').map(numb => {
                cy.get('#keypad > :nth-child(' + (arr.indexOf(numb) + 1) + ')').click();
            });
        });
        cy.get('#submit').click();
    });
});