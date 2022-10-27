// console.log("Текст в консоль")
//? console.info("Info в консоль")
//* console.warn("Попередження!")
//! console.error("Помилка!")

const pi = Math.PI
document.write('<h1>' + pi + '</h1>')
for (var i = 100; i > 5; i /= 2) {
    document.write(i + ' ')
}
var x = 0
do {
    console.log(x)
    x++
} while (x < 4)

for (var i = 10; i <= 20; i++) {
    if (i % 2 == 0) {
        continue
    }
    console.log(i)
}
var arr = [5, 7, 8, 10, '[BIG SHOT]']
for (var i = 0; i < arr.length; i++) {
    console.log('Element ' + (i + 1) + ': ' + arr[i])
}
