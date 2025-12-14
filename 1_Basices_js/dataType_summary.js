// Primitive dataTypes
// 7 types : String , Number, Boolean , null , undefined Symbol,BigInt

//Reference type (non-primitive)
// Array, Objects, Fuctions
// js is dynamic language

const id = Symbol('1234')
const anotherId = Symbol('1234')
console.log(id);
console.log(anotherId);


console.log(id=== anotherId);

// Arrays
const freedomFighter = ["Bhagat Singh","Subhas chandra Bose","Chandrashekhar Azad"];
// objects 
  let myObject={
    name:"Prakhar mishra",
    age : 23,
    dob : 17-7-2004,

}

 let myFunction=function (){
    console.log("hello prakhar mishra how are you");
    
}
myFunction()
console.log(typeof myFunction);
console.log(typeof myObject);
console.log(typeof freedomFighter);

//++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) and Heap(Non-primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
 
 anothername = "chaiaurcode"
console.log(myYoutubename);
 console.log(anothername);

 let user1 = {
  email : "user@google.com",
   upi:"user@ybl",
 }

 console.log(user1);
 let user2 = user1;
 user2.email = "ram@gmail.com"
 console.log(user2)
  console.log(user1);
 
 