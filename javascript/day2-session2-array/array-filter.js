const numbers = [10, 15, 20, 25, 30]
//findEvens(numbers) //[10,20,30]
//c style

function findEvens(numbers) {
    const output = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            output.push(numbers[i])
        }
    }
    return output
}

console.log(findEvens(numbers))
console.log(findEvens([15, 25])) //[]

//js style

function findEvensJS(numbers) {
    const output = numbers.filter(function (n) {
        return n % 2 == 0
    })
    return output;
}

console.log(findEvensJS(numbers))
console.log(findEvensJS([15, 25])) //[]