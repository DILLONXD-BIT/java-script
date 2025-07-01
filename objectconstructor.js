function Shoe(shoetype,shoecolor,shoesize,shoelaces){
    this.type=shoetype
    this.color=shoecolor
    this.size=shoesize
    this.lace=shoelaces
}
const myshoe=new Shoe ("adidas","white","large","blacklaces")
console.log(myshoe.type)
console.log(myshoe.color)
console.log(myshoe.size)
console.log(myshoe.lace)
const mycoolshoe= new Shoe("nike","blue","medium","whitelaces")
console.log(mycoolshoe.type)
console.log(mycoolshoe.color)
console.log(mycoolshoe.size)
console.log(mycoolshoe.lace)
function President(name,age,country,region){
    this.wholename=name
    this.hisage=age
    this.hiscountry=country
    this.hisregion=region
    this.religion="christian"
    President.prototype.dateofbirth="15 september 1944"
}
const mypresident=new President("museveni","70","uganda","eastafrica")
console.log(mypresident.wholename)
console.log(mypresident.religion)
console.log(mypresident.dateofbirth)
const mynewpresident=new President("donaldtrump","68","america","northamerica")
console.log(mynewpresident.hisregion)
console.log(mynewpresident.hiscountry)
mypresident.nationality="ugandan"
console.log(mypresident)