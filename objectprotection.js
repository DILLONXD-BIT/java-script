//prevents re assignment
const car = {type:"Fiat", model:"500", color:"white"}
console.log(car)

// Prevents adding object properties
const Girl ={age:18,name:"Neeza"}
Object.preventExtensions(Girl)
let answer = Object.isExtensible(Girl)
Girl.height=47
console.log("this retutns",answer)
console.log("the girl that has been extended is ",Girl)

// Returns true if properties can be added to an object
//const Boy=["phillip","jacob"]
//Object.preventExtensions(Boy)
//console.log(Boy.push("john"))


// Prevents adding and deleting object properties
let lock={paddlock:"tricycle",key:223345}
Object.seal(lock)
console.log("this gives",delete lock.key)

// Returns true if object is sealed
const Planet={name:"jupiter",distance:"145km"}
Object.seal(Planet)
let phrase = Object.isSealed(Planet)
console.log("this is",phrase)

// Prevents any changes to an object(*)
const Grind={sallary:2000000,name:"robert"}
Object.freeze(Grind)
Grind.sallary = 3000000
console.log(Grind)

// Returns true if object is frozen
let front={radio:"sanyu fm",presentors:"ellais and free man"}
Object.freeze(front)
let statement = Object.isFrozen(front)
console.log(statement)