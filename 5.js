let a
function updateValue_a(e) {
    a = e.target.value;
    calculate();
}

let b
function updateValue_b(e) {
    b = e.target.value;
    calculate();
}

let c
function updateValue_c(e) {
    c = e.target.value;
    calculate();
}

function calculate() {
    let x_1
    let x_2
    let D = b * b - 4 * a * c
    if (D < 0) {
        x_1 = 'Нет решения'
    }
    if (D > 0) {
        x_1 = (-b + Math.sqrt(D)) / (2 * a)
        x_2 = (-b - Math.sqrt(D)) / (2 * a)
    }
    if (D == 0) {
        x_1 = -b / (a * a)
    }
    const result = document.querySelector('.result')
    result.innerHTML = 'Ответ: ' + x_1 + ', ' + x_2
}

const input_a = document.querySelector('.square_a')
const input_b = document.querySelector('.square_b')
const input_c = document.querySelector('.square_c')

input_a.addEventListener('input', updateValue_a)
input_b.addEventListener('input', updateValue_b)
input_c.addEventListener('input', updateValue_c)