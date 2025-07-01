//check if two values are the same
function rottor(a, b) {
    if (a == b)
        return "they are the same"
    else {
        return "they are not the same"
    }
}
console.log(rottor(4, 4))
//calculate area of a triangle
function rubby(height, base) {
    let scope = (height * base)
    let area = 1 / 2 * scope
    console.log(area)
}
console.log(rubby(2,2))
//calculates area of a circle
function world(radius){
 let emrald=radius*radius
 let area=Math.PI*emrald
 console.log(area)
}
console.log(world(5))
//check if a person is rich more than 10000dollars
function salary(x){
    if(x > 10000){
        return "this person is rich"
    }
    else{
        return "this person is not rich"
    }
}
console.log(salary(500))
//let v ="vehicle"
//block scope
function ford(x){
{
    let v= "vehicle"
}
}
//console.log(v)

function mine(){
    carName= "volvo"
}
console.log(carName)