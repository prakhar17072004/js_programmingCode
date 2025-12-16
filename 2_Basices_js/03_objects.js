//objects literals
const mySym = Symbol("key1")
const jsUser ={
    name :"Prakhar",
    "full name ":"prakhar msihra",
    [mySym] : "myKey2", //braket are used to represent symbols 
    age:23,
    location:"Noida",
    email:"prakahr@gmail.com",
    isLoggedin :false,
    lastLoginDays:["Monday","Saturday"] 
}
// console.log(jsUser.age);
// console.log(jsUser.email);
// console.log(jsUser.isLoggedin);
// console.log(jsUser["full name "]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// jsUser.email= "mprakhat@gmail.com"
// Object.freeze(jsUser)
// jsUser.email="ram@gmail.com"
// console.log(jsUser);


// function add karne 

jsUser.greeting = function(){
    console.log("hello prakhar");
}

jsUser.greeting2 = function(){
    console.log(`hello js user ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());




