//JavaScript String indexOf()
let text = "Please locate where 'locate' occurs!"
let index = text.indexOf("locate")
console.log(index)
//JavaScript String lastIndexOf()
let more = "Please locate where 'locate' occurs!"
let utar = more.lastIndexOf("locate")
//JavaScript String search()
let nop = "Please locate where 'locate' occurs!"
let rude= nop.search("locate")
console.log(rude)
//JavaScript String match()
let boo = "The rain in SPAIN stays mainly in the plain"
let you= boo.match("ain")
console.log(you)
//JavaScript String matchAll()
const iterator = text.matchAll("Cats")
console.log(iterator)
//JavaScript String includes()
let fol = "Hello world, welcome to the universe."
let hug=fol.includes("world")
console.log(hug)
//JavaScript String startsWith()
let red = "Hello world, welcome to the universe."
let jule=red.startsWith("Hello")
console.log(jule)
let word = "Hello world, welcome to the universe.";
let plot= word.startsWith("world", 5)
console.log(plot)//returns false
//JavaScript String endsWith()
let dess = "John Doe"
let hy= dess.endsWith("Doe")
console.log(hy)