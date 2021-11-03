function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}

var array = []
var positive = 0
var negative = 0
var zero = 0
for (var i = 0; i < 20; i++) {
    getRandomInt(-5, 4)
    array.push(getRandomInt(-5, 4))
    if (array[i] > 0) {
        positive = positive + 1
    }
    if (array[i] < 0) {
        negative = negative + 1
    }
    if (array[i] == 0) {
        zero = zero + 1
    }
}
console.log(array);
console.log(positive);
console.log(negative);
console.log(zero);