class NewOrganization {
    get newOrganizationHover () {
       return cy.get('div[class="vs-c-list__btn vs-c-list-btn--add-new el-tooltip"]')
    }

    get newBoard () {
        return cy.get('span').contains('Add Board')
    }

    get boardTitle () {
        return cy.get('input').eq(1)
    }

    get nextBtn () {
        return cy.get('button[name="next_btn"]')
    }

    get kanbanBtn () {
        return cy.get('span[name="type_kanban"]')
    }

    get scrumBtn () {
        return cy.get('span[name="type_scrum"]')
    }

    newBoardCreation (title) {
        this.boardTitle.type(title);
        this.nextBtn.click();
        this.kanbanBtn.click();
        this.nextBtn.click();
        this.nextBtn.click();
        this.nextBtn.click();
    }

    newBoardCreationScrum (title) {
        this.boardTitle.type(title);
        this.nextBtn.click();
        this.scrumBtn.click();
        this.nextBtn.click();
        this.nextBtn.click();
        this.nextBtn.click();
        this.nextBtn.click();
    }
}

export const newOrganization = new NewOrganization