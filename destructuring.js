//first object
let x={name:"alfred",age:27,gender:"male"}
console.log(x)
const person={name:"alfred",age:27,gender:"male"}
let {name,age,gender}=x
console.log(name)
console.log(age)
console.log(gender)
//second object
let y={vehicle:"bmw",price:100000000,size:"large"}
let{vehicle,price,size,color="red"}=y
//alias
let{vehicle:car}=y
console.log("this becomes",car)
console.log(price)
console.log(size)
console.log(color)
let statement="i went"
let[a1,a2,a3,a4,a5,a6]=statement
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
console.log(a5)
console.log(a6)
const shoes=["addidas","nike","puma","crocks"]
let [shoe1,shoe2,shoe3,shoe4]=shoes
console.log(shoe1)
console.log(shoe2)
console.log(shoe3)
console.log(shoe4)
const fruits=["mangoes","oranges","passion fruit","lemon","apple","qiwi","grapes"]
let {[0]:fruit1,[6]:fruit2,[2]:fruit3,[3]:fruit4,[4]:fruit5,[5]:fruit6,[6]:fruit7,}=fruits
console.log(fruit2)
const numbers=[10,20,30,40,50,60,70]
const [a,b,...k]=numbers
console.log(k)
//destructuring maps
const food=([
    ["matoke",10000],
    ["pilao",12000],
    ["mukene",11000],
    ["katogo",10000]
])
let text=""
for (const[key,value] of food){
    console.log(key,value)
}
const brands={nike:1000000,adidas:2000000,puma:200000,crocs:300000}
let{nike,adidas,puma,crocs}=brands
console.log(nike)

const logos=["google","youtube","tessla","reddit"]
let[p,e,o,h]=logos
console.log(p)
console.log(e)
console.log(o)
console.log(h)

const ages={david:12,samantha:18,gilbert:20}
let{david,samantha,gilbert}=ages
console.log(samantha)
const salaries={fin:1000000,edward:2000000,job:3000000}
let{fin,edward,job}=salaries
console.log(fin)

const grades=["bad","good","very good","excellent"]
let[i,f,r,s]=grades
console.log(i)
console.log(f)
console.log(r)
console.log(s)
const word="the end"
let[d1,d2,d3,d4,d5,d6,d7]=word
console.log(d1)
console.log(d2)
console.log(d3)
console.log(d4)
console.log(d5)
console.log(d6)
console.log(d7)
