module.exports = class DocumentListPO {
    getKeypadEasy() {
        return cy.get('.item').contains("Keypad - easy", { matchCase: false });
    }
    getKeypadHard() {
        return cy.get('.item').contains("Keypad - hard", { matchCase: false });;
    }
    getSubmitButton() {
        return cy.get('#submit');
    }
    getSuccessMessage() {
        return cy.get('#msg');
    }
    getDelKey() {
        return cy.get('#keypad > div').contains('del');
    }
    getKey_Easy(key) {
        return cy.get('#keypad > div').contains(key);
    }
    getKey_Hard(arr, key) {
        return cy.get('#keypad > :nth-child(' + (arr.indexOf(key) + 1) + ')');
    }
}