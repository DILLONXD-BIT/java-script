//logical assignment opperators.
let x=4
let y=4
console.log(x&&=y) //this is equivalent to (x = x && (x = y))
console.log(x ??= y) //this is equivalent to (x = x ?? (x = y))
console.log(x||=y) //this is equivalent to (x = x || (x = y))
