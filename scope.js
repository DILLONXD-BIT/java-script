//checks if parameter is equall to a string
function see(figure) {
    if (typeof figure == "string")
        return true
    else {
        return false
    }
}
console.log(see(23))
//when two numbers are divided if out put is <30 return true else return false
function frost(x, y) {
    if ((x / y) < 30)
        return true
    else {
        return false
    }
}
console.log(frost(30, 2))
//check if sum of all ages > 90 return chances are you are adults < 90 return chances are you are children
function ehh(a, b, c, d) {
    if ((a + b + c + d) > 90)
        return "chances are you are adults"
    else {
        return "chances are you are children"
    }
}
console.log(ehh(13, 13, 20, 24))
//sum of items in an array
function drip(e) {
    let sum = 0
    for (let i of e) {
        sum = sum + i
    }
    return sum
}
let d = [43, 44, 32, 33, 23]
let f = [22, 2222, 33, 45, 66, 7777777]
console.log(drip(d))
console.log(drip(f))
//function that finds the smallest number in the array
function flop(p) {
    let max = p[0]
    for (let i of p) {
        if (i > max) {
            max = i
        }
    }
    return max
}
let r = [10, 20, 30, 40]
console.log(flop(r))