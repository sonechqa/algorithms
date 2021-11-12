const input_a = document.querySelector('.side_a')
const input_b = document.querySelector('.side_b')

input_a.addEventListener('input', updateValue_a)
input_b.addEventListener('input', updateValue_b)

let a
function updateValue_a(e) {
    a = e.target.value
    rectangle()
}

let b
function updateValue_b(e) {
    b = e.target.value
    rectangle()
}

const result = document.querySelector('.result')

function rectangle() {
    result.style.width = a + "px"
    result.style.height = b + "px"
}