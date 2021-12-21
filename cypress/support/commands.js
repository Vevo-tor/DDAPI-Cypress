const DocumentListPO = require('../support/pageObject/keypad-document-list-pages');
const po = new DocumentListPO;

Cypress.Commands.add('findKeys', (arr) => {
    for (let i = 1; i <= 12; i++) {
        cy.get(`#keypad > :nth-child(${i})`).click();
        cy.get('#input').invoke('val').then(e => {
            arr.push(e);
            po.getDelKey().click();
        })
    }

})
Cypress.Commands.add('assertCorrect', () => {
    po.getSuccessMessage().should('exist')
        .should('contain', 'Correct!');
})
