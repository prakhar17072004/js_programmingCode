// let score = "33abc";// NaN 
// let score = null // 0
// let score = undefined; // NaN
// let score = true // 1
let score = "Prakhar" // NaN
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// important points 

// "33" =>33
// "33abc" => NaN
// true => 1; false =0

// let isLoggedIn = 1;// ture
// let isLoggedIn = "" // false
let isLoggedIn ="prakhar mishra"// true

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);


// notes

// 1=>true , 0=>false
// ""=> fasle
//"Prakharmishra"// true