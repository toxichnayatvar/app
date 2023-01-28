function first() {
    let age = prompt('Сколько дали?')
    if (age < 9) {
        alert('Хах, петух, трудно тебе будет!')
    } else {
        alert('Неплохо ты там натворил, неплохо!')
    }
}

function second() {
    alert(`Будет ${15 + 10}`)
}

function third() {
    document.getElementById('zp').innerHTML = '100' ;
}