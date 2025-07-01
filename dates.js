const kl=new Date()
console.log(kl)
const r=new Date("2020-7-27")
console.log(r)
//year and month
const p = new Date(2018, 11)
console.log(p)
//previous century
const l = new Date(99, 11, 24)
console.log(l)
//date milliseconds
const o = new Date(100000000000)
console.log(o)
//iso dates
const i = new Date("2015-03-25")
console.log(i)
//iso year and month
//iso year only
//iso date and time
//java script short dates
const q = new Date("03/25/2015")
console.log(q)
//javascript long dates
const c = new Date("Mar 25 2015")
console.log(c)
//date input parsing dates
let msec = Date.parse("March 21, 2012")
console.log(msec)
// use number of milliseconds to convert it to a date object
let xsec = Date.parse("March 21, 2012")
const f = new Date(xsec)
console.log(f)
//new date get current time
const date = new Date()
console.log(date)
//get full year
const h = new Date("2021-03-25")
console.log(h.getFullYear())
// get month method
const x = new Date("2021-03-25")
console.log(x.getMonth())
//You can use an array of names to return the month as a name
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const j = new Date("2021-03-25")
let month = months[j.getMonth()]
console.log(month)
//get date
const k = new Date("2021-03-25")
console.log(k.getDate())
//get hours
const s = new Date("2021-03-25")
console.log(s.getHours())
//get minutes and seconds
const u = new Date("2021-03-25")
console.log(u.getMinutes())
//get seconds
const a = new Date("2021-03-25")
console.log(a.getSeconds())
//get milliseconds
const w = new Date("2021-03-25")
console.log(w.getMilliseconds())
//get date
const e = new Date("2021-03-25")
console.log(e.getDay())
//get time
const ki = new Date("1970-01-01")
console.log(ki.getTime())
//Date.now method
let ms = Date.now()
console.log(ms)
//timezone offset method
let ju=new Date()
let diff = ju.getTimezoneOffset()
console.log("the difference is",diff)
//setFullYear method
const po = new Date("January 01, 2025")
console.log("this is the setfull year",po.setFullYear(2020))
//setMonth method
const n = new Date("January 01, 2025")
console.log(n.setMonth(11))
// setDate method
const lip = new Date("January 01, 2025")
console.log(lip.setDate(15))
//setHours method
const d = new Date("January 01, 2025")
console.log(d.setHours(22))
//setMinutes method
const police = new Date("January 01, 2025")
console.log(police.setMinutes(30))
//setSeconds methods
const rod = new Date("January 01, 2025")
console.log(rod.setSeconds(30))
//compare dates
let text = ""
const today = new Date()
const someday = new Date()
someday.setFullYear(2100, 0, 14)

if (someday > today) {
  text = "Today is before January 14, 2100."
} else {
  text = "Today is after January 14, 2100."
}
console.log(text)