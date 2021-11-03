/* var array = [5, 17, 43, 369, 125]

function max(array) {
    var max = array[0]
    for (var i = 0; i < 5; i++) {
        if (array[i] > max) {
        max = array[i]
        } 
    }
    return max
}
console.log(max(array)) */

var cifri = [105, 123, 167, 249, 315, 421]
var sum

function div(val, by) {
    return (val - val % by)/by;
}

var max = 0
var result
for (var i = 0; i < 7; i++) {
    var sotki = div(cifri[i], 100)
    var desyatki = div(cifri[i] - (sotki * 100), 10)
    var edinici = div(cifri[i] - (sotki * 100) - (desyatki * 10), 1)
    sum = sotki + desyatki + edinici
    if (sum > max) {
        max = sum
        result = cifri[i]
    }
}
console.log(result)

/* var array = [1, 13, 27, 46, 100, 58]
var max = array[0]

for (var i = 0; i < 6; i++) {
    if (array[i] > max) {
        max = array[i]
    }
}
console.log(max); */