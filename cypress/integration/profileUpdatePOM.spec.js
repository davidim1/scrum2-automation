import { profileUpdate } from "../page_objects/profileUpdate";
import { faker } from '@faker-js/faker';
import { loginPage } from "../page_objects/loginPage";


describe ('Profile update POM', () => {
    let profileData= {
        firstName: faker.name.firstName("male"),
        lastName: faker.name.lastName("male"),
    }


    beforeEach('Visit settings', () => {       
        cy.loginViaBackend();
        cy.visit('/account/settings');
        cy.url().should('include','/account/settings');
    })


    it ('Change First name and Last name', () => {
        cy.intercept({
            method: 'PUT',
            url: '/api/v2/users'

        }).as('updateName');


        profileUpdate.updateName(
            profileData.firstName,
            profileData.lastName
        );
        profileUpdate.updateNamesBtn.should('be.visible');
        profileUpdate.updateNamesBtn.click()
        
        cy.wait('@updateName').then(interception => {
            console.log('RESPONSE', interception)
            expect(interception.response.statusCode).eq(200)
        })
    
    })

    it ('Change email', () => {
        profileUpdate.updateEmail('gugagaga1@gmail.com', Cypress.env('EXTERNAL_PASSWORD'));
        profileUpdate.updateEmailBtn.click();

        //Vracam staru email adresu zbog logina iz bekenda

        profileUpdate.updateEmail('gugagaga@gmail.com', Cypress.env('EXTERNAL_PASSWORD'));
        profileUpdate.updateEmailBtn.should('be.visible');
        profileUpdate.updateEmailBtn.click();


    })

    xit ('Change password', () => {
        profileUpdate.updatePassword(Cypress.env('EXTERNAL_PASSWORD'), 'newpass11');
        profileUpdate.updatePasswordBtn.click();

        // Hteo sam da vratim password na stari da 
        // bi radilo logovanje iz bekenda za sve slucajeve.
        // Medjutim dogodi se break i cypress se prekine
        // Pokusao sam da sacekam, visitujem, ali app je tako
        // programirana.

        // cy.get('span[class="el-dropdown-link"]').click();
        // cy.wait(3000);
        // cy.url().should('contains', '/login');
        // loginPage.login('gugagaga@gmail.com', 'newpass11');
        // cy.visit('/account/settings');
        // profileUpdate.updatePassword('newpass11', Cypress.env('EXTERNAL_PASSWORD'));
        // profileUpdate.updatePasswordBtn.click();
    })
})