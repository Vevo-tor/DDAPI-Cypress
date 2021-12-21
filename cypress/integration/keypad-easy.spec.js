const DocumentListPO = require('../support/pageObject/keypad-document-list-pages');
const po = new DocumentListPO;
describe('Keypad Difficulty: easy', () => {
    it('Should be easy', () => {

        cy.visit(Cypress.config('baseUrl'));
        po.getKeypadEasy().click();

        // Read Todo and fill input
        cy.get('#todo').invoke('val').then(toDo => {
            toDo.split('').map(numb => {
                po.getKey_Easy(numb).click();
            });
        });

        po.getSubmitButton().click();
        cy.assertCorrect();
    });
});