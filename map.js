const map1=new Map ([
    ["jeep",1000000],
    ["bmw",2000000],
    ["lamborgini",30000000]
])
map1.get("bmw")
console.log(map1.get("bmw"))

const map2=new Map ([
    ["eggs",2000],
    ["chicken",10000],
    ["beef",15000]
])
map2.set("fish",5000)
console.log(map2.get("eggs"))
map2.delete("eggs")
console.log(map2)
console.log(map2.size)
//console.log(map2.clear())
map2.has("maize")
console.log(map2.has("maize"))

map1.forEach(rubby)
function rubby(value,key){
  console.log(key +":"+value)
}
for(let M of map2.entries()){
    console.log(M)
}
for(let H of map2.keys()){
    console.log(H)
}

const vegetables=[
    {Name:"cucumber",quantity:100},
    {Name:"tomatoes",quantity:200},
    {Name:"onions",quantity:300},
    {Name:"garlic",quantity:500}
]
let x=Map.groupBy(vegetables,dillon)
function dillon({quantity}){
    if (quantity>300){
        return "expensive"}
        else{
            return "cheap"
        }
}
console.log(x)