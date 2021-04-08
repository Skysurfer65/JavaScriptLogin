let users = [];
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
            else if(numbers.indexOf(this.userID[i]) > -1) number = true;
            else letter = true;         
        }

        return (letter && number);
    }

    ValidatePassword(){
        let specialChar = false, number = false, letter = false, upperCase = false;
        let specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}";
        let emptySpace = " ";
        let numbers = "1234567890";
        let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
          
        //Check if password is empty
        if(this.password == null)return false;
        if(this.password.isEmpty)return false;
        //Check size, at least 4 characters and a maximum om 16 characters
        if(this.password.length < 4 || this.password.length > 16) return false;
       
        //Check for no empty space but at least one letter, one number and one special character
        for (let i = 0; i < this.password.length; i++) {
            if(emptySpace.indexOf(this.password[i]) > -1)return false;
            else if(specialCharacters.indexOf(this.password[i]) > -1) specialChar = true;
            else if (numbers.indexOf(this.password[i]) > -1) number = true;
            else if (capitalLetters.indexOf(this.password[i]) > -1) upperCase = true;
            else letter = true;
        }  
        //returns true if all the criteria is there
        return(specialChar && number && upperCase && letter);
    }

    CheckUserInDB(){
        let i;
        for(i = 0; i < users.length; i++){
            //UserID not case sensitive
            if(users[i].userID.toLocaleUpperCase() === this.userID.toLocaleUpperCase())return true;
        }
        return false;
    }

    CheckPassword(){
        let i;
        for(i = 0; i < users.length; i++){
            //Check password to correct userID, not case sensitive
            if(users[i].userID.toLocaleUpperCase() === this.userID.toLocaleUpperCase()){
                //Password is case sensitive
                if(users[i].password === this.password)return true;
            }
        }
        return false;
    }

    AddUserToUsers(){
        users.push(new User(this.userID, this.password));
    }
    
}
//Try with a few instances of user
user1 = new User("bax1" , "123Bax#");
user2 = new User("bax2" , "123Bax#");
user3 = new User("bax3" , "123Bax #");

//Check all three users and enter valid in array
if(!user1.CheckUserInDB() && user1.ValidateUserID() && user1.ValidatePassword()){
    //Add to user ArrayList
    user1.AddUserToUsers();
} else console.log("Error user1");

if(!user2.CheckUserInDB() && user2.ValidateUserID() && user2.ValidatePassword()){
    //Add to user ArrayList
    user2.AddUserToUsers();
} else console.log("Error user2");

if(!user3.CheckUserInDB() && user3.ValidateUserID() && user3.ValidatePassword()){
    //Add to user ArrayList
    user3.AddUserToUsers();
} else console.log("Error user3");
//Print array
console.log(users);
console.log(new User("Bax2", "123Bax#").CheckPassword());

