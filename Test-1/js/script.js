function BigShot(bigshot = 'big shot') {
    var bs = '[' + bigshot.toUpperCase() + ']'
    document.write('<h1>' + bs + '</h1>')
    console.log(bs)
}
function OnInput(el) {
    console.log(el.value)
}
var counter = 0
function OnClick(el) {
    counter++
    el.style.cssText = 'color: red; width: 120px;'
    var smile = [
        '😀',
        '😊',
        '😁',
        '😂',
        '😃',
        '😆',
        '🤗',
        '🙂',
        '😶',
        '😎',
        '😍',
        '😘',
        '🥰',
        '😛',
        '😲',
        '🤑',
        '😜',
        '🤤',
        '🤓',
        '🧐',
        '🤭',
        '🤡',
        '🤖',
    ]
    if (counter >= smile.length) {
        el.innerHTML = 'Ok Max! ' + counter
        console.log('Ok Max! ' + counter)
    } else {
        el.innerHTML = 'Ok ' + counter + smile[counter]
        console.log('Ok ' + counter + smile[counter])
    }
}

function updateTime() {
    //! TIME
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var date = currentTime.getDate()
    var year = currentTime.getFullYear()
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    var t_str = hours + ':' + minutes + ' '
    if (hours >= 12) {
        t_str += 'PM'
    } else {
        t_str += 'AM'
    }
    t_str += ' ' + date + ' ' + year + ' '
    document.getElementById('time').innerHTML = t_str
}
setInterval(updateTime, 1000) // інтервал функції

var spans = document.getElementsByClassName('simple-text')
for (var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML)
}

document.getElementById('main-form').addEventListener('submit', checkForm) // додаєм івент на форму
function checkForm(event) {
    //! FORM
    event.preventDefault()
    var el = document.getElementById('main-form')
    var name = el.name.value.toLowerCase()
    var pass = el.pass.value
    var repass = el.repass.value
    var state = el.state.value.toLowerCase()
    var fail = ''

    document.getElementById('success').innerHTML = '' // очищення flash
    document.getElementById('error').innerHTML = '' // очищення flash
    if (name == '' || pass == '' || repass == '' || state == '') {
        console.warn('Заповніть всі поля!')
        fail = 'Заповніть всі поля!'
    } else if (name.length < 3 || name.length > 16) {
        fail = "Ім'я 3-16 символів!"
    } else if (pass != repass) {
        fail = 'Паролі не співпадають!'
    } else if (pass.length < 2 || name.length > 24) {
        fail = 'Пароль не в інтервалі 2-16!'
    } else if (
        pass.split(',').length > 1 ||
        pass.split('.').length > 1 ||
        pass.split(' ').length > 1
    ) {
        fail = 'Пароль (заборонений символ)'
    }
    if (fail != '') {
        document.getElementById('error').innerHTML = fail
    } else {
        document.getElementById('success').innerHTML = 'Надіслано!'
        data = [name, pass, state]
        console.log(data)
        //return true
    }
}
