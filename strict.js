//"use strict" //returns x is not defined
x = 3.14
console.log(x)

"use strict"
myFunction()
function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}
console.log(y)
//example 3
x = 3.14;       // This will not cause an error.
myFunction()

function myFunction() {
  "use strict"
  y = 3.14;   // This will cause an error
}
console.log(y)