
class ProfilePage{
    get userName(){
        return cy.get('p.profile_name');
    }
    get ProfileButton(){
        return cy.get('a[routerlink="profile"]');
    }
    
    clickProfileButton(){
        this.ProfileButton.click();
    }

    checkUserName(interceptedUserName){
        this.userName.should('have.text', interceptedUserName);
    }
}

export default new ProfilePage()