import { newOrganization } from "../page_objects/newOrganization";
import { faker } from '@faker-js/faker';

describe ('New board POM', () => {
    let organizationData = {
        boardTitle: faker.random.word()
    }


    beforeEach('Be logged in and get to the new board pop up window', () => {
        cy.loginViaBackend();
        cy.visit('/');
        cy.url().should('include','/');
        newOrganization.newOrganizationHover.click();
        newOrganization.newBoard.click()
    })


    it ('Create Kanban organization without photo', () => {
        newOrganization.newBoardCreation(
            organizationData.boardTitle
        );        
    })

    it ('Create Scrum organization without photo', () => {
        newOrganization.newBoardCreationScrum(
            organizationData.boardTitle
        );        
    })

   
})