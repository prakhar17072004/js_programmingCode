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

