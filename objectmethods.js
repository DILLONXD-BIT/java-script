let person = { name: "john", sex: "male" }
let school = { location: "kawempe", curriculam: "UNEB" }
Object.assign(person, school)
//this transfers the content from school into the object person
console.log(person)
//creates object from existing object
let road = {name:"express highway",distance:"20km"}
let newObject= Object.create(road)
console.log(newObject)
console.log(newObject.name)
//returns an array of the key/values in an object
let drone = {honda:"three passangers",noah:"six passangers"}
let newArray = Object.entries(drone)
console.log(newArray)
//creates an object from key/values
const entries = [
  ['name', 'Alice'],
  ['age', 25],
  ['country', 'USA']
]
let passaner = Object.fromEntries(entries)
console.log(passaner)
// Returns an array of the keys of an object
let raid = {age:16,birthPlace:"mulago"}
let date = Object.keys(raid)
console.log(date)
// Returns an array of the property values of an object
let group = {group1:"scraps",group2:"eagles"}
let firstGroup = Object.values(group)
console.log(firstGroup)
// Groups object elements according to a function
//let hyper = {yearOfBirth:2004,name:"john",age:20}
//let x = Object.groupBy(theFunction)
//function theFunction(digits){
 //   return digits.age
//}
//console.log(x)
//example
const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Object.groupBy(fruits, myCallback);
console.log(result)
//example2
const ages =[
    {name:"david",age:20},
    {name:"samantha",age:15},
    {name:"robert",age:45},
    {name:"ashley",age:16}
]
function myAges({age}){
    return age>=18 ? "is an adult":"is a minor"
}
const approval = Object.groupBy(ages, myAges)
console.log(approval)
//for in loop
let figures ={figure1:23,figure2:33}
for (let x in figures){
    console.log(x)
}
//get
const human = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
}
console.log(human.lang)
//ex2
const jumper = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
   lang:function() {
    return this.language;
  }
}
console.log(jumper.lang())
//
const omuntu = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
}
omuntu.lang="lukiga"
console.log(omuntu.language)
//data quality
const people = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  }
}
console.log(people.lang)