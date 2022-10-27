//! TIME

var counter = 0
var id = setInterval(interval, 1000) // інтервал мс
function interval() {
    counter++
    console.log('Секунда: ' + counter)
    if (counter == 3) {
        clearInterval(id) // стоп
    }
}
