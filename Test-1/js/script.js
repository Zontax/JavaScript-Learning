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
        'π',
        'π',
        'π',
        'π',
        'π',
        'π',
        'π€',
        'π',
        'πΆ',
        'π',
        'π',
        'π',
        'π₯°',
        'π',
        'π²',
        'π€',
        'π',
        'π€€',
        'π€',
        'π§',
        'π€­',
        'π€‘',
        'π€',
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
setInterval(updateTime, 1000) // ΡΠ½ΡΠ΅ΡΠ²Π°Π» ΡΡΠ½ΠΊΡΡΡ

var spans = document.getElementsByClassName('simple-text')
for (var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML)
}

document.getElementById('main-form').addEventListener('submit', checkForm) // Π΄ΠΎΠ΄Π°ΡΠΌ ΡΠ²Π΅Π½Ρ Π½Π° ΡΠΎΡΠΌΡ
function checkForm(event) {
    //! FORM
    event.preventDefault()
    var el = document.getElementById('main-form')
    var name = el.name.value.toLowerCase()
    var pass = el.pass.value
    var repass = el.repass.value
    var state = el.state.value.toLowerCase()
    var fail = ''

    document.getElementById('success').innerHTML = '' // ΠΎΡΠΈΡΠ΅Π½Π½Ρ flash
    document.getElementById('error').innerHTML = '' // ΠΎΡΠΈΡΠ΅Π½Π½Ρ flash
    if (name == '' || pass == '' || repass == '' || state == '') {
        console.warn('ΠΠ°ΠΏΠΎΠ²Π½ΡΡΡ Π²ΡΡ ΠΏΠΎΠ»Ρ!')
        fail = 'ΠΠ°ΠΏΠΎΠ²Π½ΡΡΡ Π²ΡΡ ΠΏΠΎΠ»Ρ!'
    } else if (name.length < 3 || name.length > 16) {
        fail = "ΠΠΌ'Ρ 3-16 ΡΠΈΠΌΠ²ΠΎΠ»ΡΠ²!"
    } else if (pass != repass) {
        fail = 'ΠΠ°ΡΠΎΠ»Ρ Π½Π΅ ΡΠΏΡΠ²ΠΏΠ°Π΄Π°ΡΡΡ!'
    } else if (pass.length < 2 || name.length > 24) {
        fail = 'ΠΠ°ΡΠΎΠ»Ρ Π½Π΅ Π² ΡΠ½ΡΠ΅ΡΠ²Π°Π»Ρ 2-16!'
    } else if (
        pass.split(',').length > 1 ||
        pass.split('.').length > 1 ||
        pass.split(' ').length > 1
    ) {
        fail = 'ΠΠ°ΡΠΎΠ»Ρ (Π·Π°Π±ΠΎΡΠΎΠ½Π΅Π½ΠΈΠΉ ΡΠΈΠΌΠ²ΠΎΠ»)'
    }
    if (fail != '') {
        document.getElementById('error').innerHTML = fail
    } else {
        document.getElementById('success').innerHTML = 'ΠΠ°Π΄ΡΡΠ»Π°Π½ΠΎ!'
        data = [name, pass, state]
        console.log(data)
        //return true
    }
}
