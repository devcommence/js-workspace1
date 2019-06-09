const numbers = [10, 15, 20, 25, 30]
function findNumJs(numbers, num) {
    const output = numbers.filter(function (n) {
        return n % 2 == 0
    })
    return output
}

console.log(findNumJs(numbers))
