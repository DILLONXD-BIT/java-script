//typeof
//returns strings
let H=typeof ("John"+"Doe") 
console.log(H)
//returns numbers
let Y=typeof (33 + 66) 
console.log(Y)
//Complex Data Types
//returns object
let r=typeof {name:'John'}
console.log("the type of r is",r)
//how to check for an array
const fruits = ["apples", "bananas", "oranges"]
Array.isArray(fruits)
console.log(Array.isArray(fruits))
//The instanceof Operator
const fruit = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let m=(fruit instanceof Array)
console.log(m)
//undefined value
let car
typeof car
console.log(car)
//empty value
let vehicle = ""
console.log(typeof vehicle)
//null
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
person = null
console.log(person)
//The constructor Property
console.log(new Date().constructor)
//The void Operator(havent understood)

