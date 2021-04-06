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
        return true;
    }

    CheckUserInDB(){
        let i;
        for(i = 0; i < users.length; i++){
            //UserID is case sensitive
            if(users[i].userID.toLocaleUpperCase() === this.userID.toLocaleUpperCase())return true;
        }
        return false;
    }

    CheckPassword(){
        return true;
    }

    AddUserToUsers(){
        users.push(new User(this.userID, this.password));
    }
    
}
//Try with a few instances of user
user1 = new User("bax1" , "123");
user2 = new User("bax2" , "123");
user3 = new User("Bax1" , "321");

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

