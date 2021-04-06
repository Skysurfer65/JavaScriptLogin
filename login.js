
class User{
    constructor(userID, password){
        this.userID = userID;
        this.password = password;
    }

    //Methods
    ValidateUserID() {
        let letter = false, number = false;
        let specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}";
        let numbers = "1234567890";
        
        if(this.userID == null)return false;
        if(this.userID.isEmpty)return false;
        if(this.userID.length < 4)return false;
        

        for (let i = 0; i < this.userID.length; i++) {
            if(specialCharacters.indexOf(this.userID[i]) > -1)return false;
            else if(numbers.indexOf(this.userID[i])) number = true;
            else letter = true;         
        }

        return (letter && number);
    }

    ValidatePassword(){
        return true;
    }

    CheckUserInDB(){
        return true;
    }

    CheckPassword(){
        return true;
    }

    AddUserToUsers(){

    }
    
}

user1 = new User("bax1#" , "123");

console.log(user1.ValidateUserID());