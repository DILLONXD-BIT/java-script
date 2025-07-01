function walk(){
    console.log( "the robot is walking" )
}
//this function prints out the robot walking

walk()
function talk(){
    console.log( "the robot is talking" )
}
//this function prints out the robot talking

talk()
function jump(){
    console.log("the robot is jumping")
}
//this function prints out the robot talking

jump()
//this function subtructs
function subtruct(a,b){
    console.log(a-b)
}

subtruct (9,3)
subtruct (19,10)
//this function multiplies
function multiply(y,x){
    console.log(y*x)
}

multiply (10,11)
//this function divides
function divide(r,t){
    console.log(r/t)
}

divide (6,2)
//this function adds
function add(w,q){
    console.log(w+q)
}

add (3,6)
function convertkilogramsToGrams(kilograms){
    let kilogramsToGrams=kilograms*1000
    return kilogramsToGrams 
}
convertkilogramsToGrams()
console.log(convertkilogramsToGrams(100))
//converting meters to meters squared
function convertmetersToMeterssquared(meters){
    let metersToMeterssquared=meters*meters
    return metersToMeterssquared
}
convertmetersToMeterssquared()
console.log(convertmetersToMeterssquared(200))

function bmi(kilograms,meters){
    let squaredMeters=meters*meters
    let bmi=kilograms/squaredMeters
    return bmi
}
bmi(70,1.73)
console.log("dillons bmi is",bmi(70,1.73))
console.log("daniels bmi is",bmi(84,2))
console.log("godwins bmi is",bmi(70,1.75))
//fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit){
    let celsius=(fahrenheit - 32) * 5/9;
    return celsius
}
fahrenheitToCelsius()
console.log(fahrenheitToCelsius(600))
console.log(fahrenheitToCelsius(300))
//function that calculates area of a circle
function areaOfCircle(radius){
    let area=Math.PI*(radius*radius)
    return area
}
areaOfCircle()
console.log(areaOfCircle(70))
console.log(areaOfCircle(4))
//radius in meters
function radiusToMeters(radius){
    let radiusInCentimeters=radius*100
    let area=Math.PI*(radiusInCentimeters)
    return area
}
radiusToMeters()
console.log(radiusToMeters(4))
console.log(radiusToMeters(0.04))
//function to calculate diameter of circle
function diameterOfCircle(radius){
    let meters=radius/100
    let diameterOfCircle=meters*2
    return diameterOfCircle
}
diameterOfCircle()
console.log(diameterOfCircle(12))