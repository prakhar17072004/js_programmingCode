// arrow funtion basices

const user = {
    username : "Prakhar ",
    price : 999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        
    }
}
user.welcomeMessage();
user.username="ram"
user.welcomeMessage()