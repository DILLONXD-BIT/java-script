//add method
const letters = new Set(["a","b","c"])
letters.add("d")
letters.add("e")
console.log(letters)
//Listing Set Elements
const alphabet = new Set(["a","b","c"])
let text = "";
for (const x of letters) {
  text += x
}
console.log(text)
//The has() Method
const points = new Set(["a","b","c"])
answer = points.has("d")
console.log(points.has("d"))
//The forEach() Method
const top = new Set(["a","b","c"])
let domino = ""
top.forEach (function(value) {
  domino += value
})
console.log(domino)
//The values() Method
const king = new Set(["a","b","c"])
const myIterator = king.values()
let jum = "";
for (const entry of myIterator) {
  jum += entry;
}
console.log(jum)
//The keys() Method
const gg = new Set(["a","b","c"])
const myvalue = gg.keys()
let info = ""
for (const x of myvalue) {
  info += x
}
console.log(info)
//The entries() Method
const l = new Set(["a","b","c"])
const myfigures = l.entries()
let t = ""
for (const entry of myfigures) {
  t += entry
}
console.log(t)