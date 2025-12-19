//let var and const
// global scope 


{
    // block scope

    let a= 30;
    const b= 40;
    

    // console.log(a);
    // console.log(b);
    // console.log(c);
    
    
    
}
// console.log(a);
// console.log(b);
// console.log(c);


// Nested funtion

 function one(){
    const userName = "Prkhar"
    function two(){
        const website = "youtube"
        // console.log(userName);

    }
    // console.log(website)

    two()
 }
 one()

//
if(true){
    const username = "hitesh"
     if(username=== "hitesh"){
        const website = " youtube"
        // console.log(username +website)
     }
    //  console.log(website)
}
// console.log(userName)

//++++++++++++++++++++++++++++++++++++++++++++++++++

  function addone(num){
    return num +1;
  }
  addone(5)

  const addTwo = function(num){
    return num +2;
  }
  addTwo(2)