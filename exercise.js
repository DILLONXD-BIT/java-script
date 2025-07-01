//area of circle
function calculatearea(radius){
    let area=Math.PI*(radius*radius)
    return area
}
calculatearea()
console.log(calculatearea(12))
function iseven(number){
if (number%2==0 )  {
    return "even"
}
else {
    return "odd"
}
}
iseven(6)
let v=iseven(6)
console.log(v)
//finding max
function findmax(number1,number2){
let max=Math.max(number1,number2)
return max
}
findmax(5,10)
console.log(findmax(5,10))
console.log(findmax(1000000,100000))
//reverse string
function reversestring(hello){
let g=""
for (let counter=hello.length-1; counter<hello.length; counter--){
    g=g+ hello[counter]
}
return g
}
console.log(reversestring("hello") )//it should return "nwot"