//const person = {
  //firstName: "John",
 // lastName : "Doe",
  //id       : 5566,
  //fullName : function() {
    //return this.firstName + " " + this.lastName;
  //}
//}
//console.log(fullName())
//example
const car={
  merceidies:1000000,
  ford:2000000,
  totalPrice: function(){
    return this.merceidies + this.ford
  } 
}
console.log(car.totalPrice())