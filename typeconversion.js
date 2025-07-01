//Converting Strings to Numbers
//The Unary + Operator
let y = "5"
let x = + y
console.log(x) 
let p = "John"
let l = + y
console.log(l)
//Converting Numbers to Strings
let f= String(100 + 23)
console.log(f)
console.log((100 + 23).toString())
//Converting Dates to Numbers
let w = new Date()
console.log(Number(w))
//Converting Dates to Strings
console.log(String(Date()))
//Converting Booleans to Numbers
console.log(Number(false))
console.log(Number(true))
//Converting Booleans to Strings
console.log(String(false))
console.log(String(true))
//Automatic Type Conversion
let j=5 + null    // returns 5         because null is converted to 0  
console.log(j)