function add(a, b) {
  try {
    let result = a * b;
    if (isNaN(result)) {
      throw new Error("Invalid multiplication");
    }
    console.log(result);
  } catch(e) {
    console.log("error is", e.message);
  }
}
add(4, "girl");

function retro(items){
    try{
        let result=items[10]
        if(result==undefined){
            throw RangeError("this is not it")
        }
        console.log(result)
    } catch(e){
    console.log(items[10])
}
}
let groceries=["spinach","onions","garlic","tomatoes"]
retro(groceries)
