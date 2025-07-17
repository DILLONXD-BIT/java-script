let x = '{"firstName":"john","secondName":"peter"}'
console.log(x)
let h = typeof x
console.log(h)
let m=`{
    "employees":[
       { "firstEmployee": "steven" },
        { "secondEmployee": "robbert" },
        { "thirdEmployee": "phineas" }
    ]
}`;

let k = `{
    "employees": [
        { "firstEmployee": "steven" },
        { "secondEmployee": "robbert" },
        { "thirdEmployee": "phineas" }
    ]
}`;
console.log(k)

const obj=JSON.parse(x)
console.log(obj.firstName)

let r='{"fruit":"lemon","vegetable":"tomato","spice":"paprika"}'
console.log(r)
const obje=JSON.parse(r)
console.log(obje.spice)

let g={car:"merceidies benz",plane:"boieng 360"}
let f = typeof g
console.log(f)
let l=JSON.stringify(g)
console.log(l)
let s=typeof l
console.log(s)
//this is how a JSON object looks like
let word='{"apple":"2000","bannana":"3000","orange":"4000"}'
console.log(word)
let z=JSON.parse(word)
console.log(z)
console.log(z.bannana)
//changing to JSON
let plant={golden:200000,red:300000,orange:500000}
console.log(plant)
let robin=JSON.stringify(plant)
console.log(typeof robin)