//Array part2

const my_heroes =["Bhagat singh","Chandr Shekhar Azad","Netaji"]

// console.log(my_heroes)

const my_poets = ["Ram Dhari singh Dinker","Maha Devi Verma","Suryakant Tripathi Nerala"]
// console.log(my_poets);

// push 
// it add the array inside the array


// my_heroes.push(my_poets)

// console.log(my_heroes);

// concat
// it just merge the 2 arrays 

// const newArr = my_heroes.concat(my_poets)
// console.log(newArr);

//but for more simple and more readable form we use spread operator to write it

 const newArr2 = [...my_heroes,...my_poets]
 console.log(newArr2);
 