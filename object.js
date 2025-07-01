//object with {} brackets
const shoe={type:"canvus",size:41,color:"red"}
console.log(shoe.size)
console.log(shoe.type)
//objects with [] brackets
const presidents={Name:"kaguta",age:100,country:"uganda",continent:"africa"}
console.log(presidents["Name"])
console.log(presidents["age"])
//objects
const person={firstName:"sarah",secondName:"montreal",fullName:function(){return(this.firstName+" "+this.secondName)}}
console.log(person.fullName())
const flask={}
flask.capasity="2olitres"
flask.size="30inches"
flask.color="blue"
flask.price="50,000shs"
flask.isFlaskSafe=function (){return "yes"}
console.log(flask)
console.log(flask.isFlaskSafe())
