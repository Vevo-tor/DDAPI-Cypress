const DocumentListPO = require('../support/pageObject/keypad-document-list-pages');
const po = new DocumentListPO;
describe('Keypad Difficulty: hard', () => {
    it('Should be hard', () => {

        // Array to store unkown key values
        const arr = [];

        //baseUrl is behaving oddly
        cy.visit(Cypress.config('baseUrl'));

        //Select Keypad Difficulty : Hard
        po.getKeypadHard().click();

        // Unkown key values stored in arr
        cy.findKeys(arr);

        // Filling ToDo value to Input
        cy.get('#todo').invoke('val').then(toDo => {
            toDo.split('').map(numb => {
                po.getKey_Hard(arr, numb).click();
            });
        });

        //Submit form
        po.getSubmitButton().click();

        //Assert success message
        cy.assertCorrect();
    });
});