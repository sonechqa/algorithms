var array = [-50, -40, -32, -30, -25, -20, -10, -5, -1, 0, 2, 5, 10, 15, 20, 30, 35, 40, 45, 50]

var sum = 0
var amount = 1
for (var i = 0; i < 20; i++) {
    if (array[i] > 0) {
        sum = sum + array[i]
        amount = amount + 1
        result = sum/amount
    }
}
console.log(result);