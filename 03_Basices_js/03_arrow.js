// arrow funtion basices

// const user = {
//     username : "Prakhar ",
//     price : 999,
//     welcomeMessage:function(){
//         console.log(`${this.username},welcome to website`);
//         console.log(this); // this refers the current context 
        
//     }
// }
// user.welcomeMessage();
// user.username="ram"
// user.welcomeMessage()
// console.log(this);//this refer the global context 


// function chai(){
//     console.log(this);
    
// }

// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }
// const chai = () =>{ // this is arrow function
//     let username = 'hitesh'
//     console.log(this);
    
// }
// chai()

// arrow funtion // explicit return
//  const addTwo = (num1,num2)=>{
//     return num1 +num2;
//  }

//  console.log(addTwo(3,4))

// implicit return 

  const addTwo = (num1,num2)=> num1 +num2
  console.log(addTwo(3,2));