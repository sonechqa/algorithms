const input_width = document.querySelector('.side_width')
const input_height = document.querySelector('.side_height')

input_width.addEventListener('input', updateValue_width)
input_height.addEventListener('input', updateValue_height)

let a
function updateValue_width(e) {
    a = e.target.value
    rectangle()
}

let c
function updateValue_height(e) {
    c = e.target.value
    rectangle()
}

const result = document.querySelector('.result')

function rectangle() {
    result.style.width = a + "px"
    result.style.height = c + "px"
    result.style.border = "solid", "1px", "black"
}

const input_r = document.querySelector('.rgb_r')
const input_g = document.querySelector('.rgb_g')
const input_b = document.querySelector('.rgb_b')

input_r.addEventListener('input', updateValue_r)
input_g.addEventListener('input', updateValue_g)
input_b.addEventListener('input', updateValue_b)

let r = 0
function updateValue_r(e) {
    r = parseInt(e.target.value, 10)
    rgbToHex()
}

let g = 0
function updateValue_g(e) {
    g = parseInt(e.target.value, 10)
    rgbToHex()
}

let b = 0
function updateValue_b(e) {
    b = parseInt(e.target.value, 10)
    rgbToHex()
}

function rgbToHex() {
    let r_16 = r.toString(16);
    let g_16 = g.toString(16);
    let b_16 = b.toString(16)
    if (r_16.length == 1) {
        r_16 = '0' + r_16
    }
    if (g_16.length == 1) {
        g_16 = '0' + g_16
    }
    if (b_16.length == 1) {
        b_16 = '0' + b_16
    }
    const hexElement = document.querySelector('.hex')
    const hex = "#" + r_16 + g_16 + b_16
    hexElement.innerHTML = hex
    result.style.backgroundColor = hex
}