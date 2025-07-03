class Person{
    constructor(age,gender){
        this.personage=age
        this.persongender=gender
    }
}
let John=new Person(23,"male")
console.log(John.personage)
//class methods
class WashingMachine{
    constructor(wash,rinse,dry){
        this.washingMachineWash=wash
        this.washingMachineRinse=rinse
        this.washingMachineDry=dry
    }
}
let sony=new WashingMachine("washing","rinsing","drying")
console.log(sony.washingMachineWash)
console.log(sony.washingMachineRinse)
console.log(sony.washingMachineDry)
//class methods example 1
class CarManufacturingPlant{
    constructor(){

    }
    bodybuildingpoint(){
        console.log("build the body of the vehicle")
  }
    paintingpoint(){
        console.log("paint the vehicles at this point")
    }
    assemblingpoint(){
        console.log("assemble the car parts together at this point")
    }
}
let maclaren=new CarManufacturingPlant()
maclaren.assemblingpoint()