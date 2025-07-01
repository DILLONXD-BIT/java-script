let text="i went to a good school"
let h= text.search("to")
console.log(h)
//replacing
let place="Taibah school"
let f= place.replace("Taibah","LightAcademy")
console.log(f)
//test method
const pattern=/o/
pattern.test("the off road")
console.log(pattern.test("the off road"))
//exec
const pattern2=/l/;
/l/.exec("i love my life");
console.log(/l/.exec("i love my life"))