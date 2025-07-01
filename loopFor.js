let p = 0
let cars=["mercedies","toyota","ferari"]
let moment = cars.length
let info = ""
for (; p < moment; ) {
  info += cars[p] + ","
  p++
}
console.log(info)