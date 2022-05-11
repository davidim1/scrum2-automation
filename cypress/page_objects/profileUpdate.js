class ProfileUpdate {
   
    get firstNameInput() {
        return cy.get('input[name="first_name"]')
    }

    get lastNameInput() {
        return cy.get('input[name="last_name"]')
    }

    get updateNamesBtn() {
        return cy.get('button[type="submit"]').eq(0)
    }

    get changeEmailInput() {
        return cy.get('input[data-vv-as="new email address"]')
    }
    
    get securityPasswordInput() {
        return cy.get('input[data-vv-as="password"]').eq(0)
    }

    get updateEmailBtn() {
        return cy.get('button[type="submit"]').eq(1)
    }

    get currentPasswordInput() {
        return cy.get('input[data-vv-as="current password"]').eq(0)
    }

    get newPasswordInput() {
        return cy.get('input[type="password"]').eq(2)
    }

    get repeatNewPassword() {
        return cy.get('input[type="password"]').eq(3)
    }

    get updatePasswordBtn() {
        return cy.get('button[type="submit"]').eq(2)
    }

    updateName(firstName, lastName) {
        this.firstNameInput.clear().type(firstName);
        this.lastNameInput.clear().type(lastName);
    }

    updateEmail(email, password) {
        this.changeEmailInput.clear().type(email);
        this.securityPasswordInput.type(password);
    }

    updatePassword(currentPassword, newPassword) {
        this.currentPasswordInput.type(currentPassword);
        this.newPasswordInput.type(newPassword);
        this.repeatNewPassword.type(newPassword)
    }

}

export const profileUpdate = new ProfileUpdate