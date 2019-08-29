function sum(n1, n2) {
    console.log(arguments)
    console.log(n1, n2)
    return n1 + n2
}
console.log(sum())
console.log(sum(10))
console.log(sum(10, 20))
console.log(sum(10, 20, 30))
//if additional params are passed extra one's are ignored
//if less params are passed the value will be undefined


// n number of arguments 
function total() {
    console.log(arguments.length)
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(total(10, 20))
console.log(total(10, 20, 30, 40))