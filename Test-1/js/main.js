// console.log("Текст в консоль")
//? console.info("Info в консоль")
//* console.warn("Попередження!")
//! console.error("Помилка!")

const pi = Math.PI
document.write("<h1>" + pi + "</h1>")

const text =
  "Dolore cillum tempor nulla ea eiusmod excepteur voluptate exercitation est amet nisi adipisicing. Laboris proident nisi anim in irure. Tempor mollit consectetur ullamco non esse sunt deserunt mollit officia incididunt incididunt mollit nisi do. Ea consequat dolor aliquip duis. Enim excepteur exercitation mollit cillum do aute laborum consectetur qui ipsum. Do et reprehenderit nulla ipsum exercitation labore cillum id incididunt commodo ut adipisicing consectetur. "
document.write(text)

console.log("Math: " + Math.min(10, 29, 5.9, 34, 6, 55))

var number = 15
var bool = true
if (number == 15 && bool == true) {
  console.log("&& - i")
  console.log("|| - або")
}
var str = "45"
switch (str) {
  case "4":
    console.log(str + " це 4")
    break
  case "10":
    console.log(str + " це 10")
    break
  default:
    console.log("Default " + str)
}

var arr = [5, true, 6.3, [0, "M"], -100]
console.log(arr[3][1])
console.log("length " + arr.length)

for (var i = 1; i <= 4; i++) {
  console.log(i)
}
