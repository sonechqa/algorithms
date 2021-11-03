let a
function updateValue_a(e) {
    a = parseInt(e.target.value, 10)
    calculate()
}

let b
function updateValue_b(e) {
    b = parseInt(e.target.value, 10)
    calculate()
}

function calculate() {
    let P = 2 * (a + b)
    let S = a * b
    const result = document.querySelector('.result')
    result.innerHTML = P + ', ' + S
}

const input_a = document.querySelector('.side_a')
const input_b = document.querySelector('.side_b')

input_a.addEventListener('input', updateValue_a)
input_b.addEventListener('input', updateValue_b)