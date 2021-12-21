const DocumentListPO = require('../support/pageObject/keypad-document-list-pages');
const po = new DocumentListPO;
describe('Keypad Difficulty: easy', () => {
    it('Should be easy', () => {

        //baseUrl is behaving oddly
        cy.visit(Cypress.config('baseUrl'));

        //Select Keypad Difficulty : Easy
        po.getKeypadEasy().click();

        // Read Todo and fill input
        cy.get('#todo').invoke('val').then(toDo => {
            toDo.split('').map(numb => {
                po.getKey_Easy(numb).click();
            });
        });

        //Submit answer
        po.getSubmitButton().click();

        //Assert correct message
        cy.assertCorrect();
    });
});