class Vehicle {
  constructor(vehicleName, vehicleColour, year) {
    this.myVehilceName = vehicleName
    this.myVehicleColour = vehicleColour
    this.myYear = year
    this.myVehicleSymble = "toyota"
  }
  age() {
    const date = new Date()
    console.log(typeof date.getFullYear())
    return (date.getFullYear() - this.myYear)
  }
  brand(name, symble) {
    console.log(name, symble, this.myVehilceName)
  }
}
let car = new Vehicle("ford", "blue")
console.log(car.myVehilceName)
let carAge = new Vehicle("ipsum", "red", 2013)
console.log(carAge.age())
console.log(carAge.brand("ipsum", "toyota"))
//inheritence

class Father {
  constructor(swimmer, gardener) {
    this.mySwimmer = swimmer
    this.myGardener = gardener
  }
}
class Son extends Father {
  constructor(swimmer, gardener, footballer, artist) {
    super(swimmer, gardener)
    this.myFootballer = footballer
    this.myArtist = artist
  }
}
let frank = new Son("excellent swimmer", "good gardener", "perfect footballer", "very good artist")
console.log(frank.mySwimmer)
//example
class Mother {
  constructor(Hair, Eyes, Skincolour) {
    this.myHair = Hair
    this.Eyes = Eyes
    this.mySkinColour = Skincolour
  }
  ethinisity() {
    return "is a european"
  }
  get age() {
    return "she is 50"
  }
  set age(x) {
    return this.myAge = x
  }
}
class Daughter extends Mother {
  constructor(Hair, Eyes, Skincolour, height) {
    super(Hair, Eyes, Skincolour)
    this.myHeight = height
  }
  race() {
    return "is mixed european african"
  }
  static gender(){
    return "i am a girl"
  }
}
let allisha = new Daughter("blond", "brown", "light skinned", "tall")
let elisabeth= new Mother ("black hair","blue eyes","white")
console.log(allisha.mySkinColour)
console.log(allisha.myHeight)
console.log(allisha.race())
console.log(elisabeth.age)
console.log(elisabeth.age=50)
console.log(Daughter.gender())