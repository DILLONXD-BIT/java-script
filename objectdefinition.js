//using object literals
let food={eggs:2000,sandwitch:3000,eggroll:2500}
console.log(food)
//
const car={}
car.carName="merceidies benz"
car.colour="red"
car.size="big"
car.price=2000000
console.log(car.carName)
console.log(car)
//objet constructor
function HousePlan(bedrooms,floors,windows,bathrooms){
    this.myBedrooms=bedrooms
    this.myFloors=floors
    this.myWindows=windows
    this.myBathrooms=bathrooms
    this.myWardrobes="seven"
    this.myCurtains="two pairs each window"
}
let dillonsHouse=new HousePlan(7,2,6,4)
let johnPaulsHouse=new HousePlan(8,3,7,5)
console.log(dillonsHouse.myBedrooms)
console.log(johnPaulsHouse.myFloors)
console.log("this will be", dillonsHouse.myCurtains)
console.log("this will be", johnPaulsHouse.myWardrobes)

function SchoolMembers(names,ages,possitions,roles){
    this.myNames=names
    this.myAges=ages
    this.myPossitions=possitions
    this.myRoles=roles
    this.myLanguage="english"
}
let student1=new SchoolMembers("Jacob",18,"third","class president")
console.log(student1.myAges)
console.log(student1.myLanguage)
console.log(Object.assign("Jacob",18))
console.log(Object.create(SchoolMembers))
console.log(Object.entries({john:23,martha:25}))
//console.log(Object.fromEntries("mars","pluto","neptune"))
console.log(Object.keys({food:2000,drinks:1000}))
console.log(Object.values({food:2000,drinks:1000}))

//object constructor
function Job(machineexpert,cleaner,maintainence){
    this.myMachineexpert=machineexpert
    this.myCleaner=cleaner
    this.myMaintainence=maintainence
    this.myAccountPin=890123
}
Job.prototype.workingLoad="twentyfour hours"
let NSSF=new Job(2,3,4,this.myAccountPin)
NSSF.mySalary=50000000
console.log(NSSF.workingLoad)
SchoolMembers.prototype.HighestGrade="wittson"
console.log(student1.HighestGrade)
Job.prototype.added=function(){
    return this.myCleaner + " " +this.myMachineexpert
}
console.log(NSSF.added())