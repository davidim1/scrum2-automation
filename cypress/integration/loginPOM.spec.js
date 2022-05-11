import { loginPage } from "../page_objects/loginPage";

describe('Login POM', () => {
    it ('login with valid data', () => {
        cy.loginViaBackend();
        // cy.visit('/login');
        // cy.url().should('contains', '/login');
        // loginPage.login('gugagaga@gmail.com', 'gugagaga1');
        cy.visit('/');
    })
})