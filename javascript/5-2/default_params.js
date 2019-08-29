// default params value
//es5

console.log(total()) //function declarations gets hoisted

function total(n1, n2) {
    console.log(n1, n2)
    n1 = typeof n1 == 'undefined' ? 0 : n1
    n2 = typeof n2 == 'undefined' ? 0 : n2
    console.log(n1, n2)
    return n1 + n2
}

console.log(total())
console.log(total(10))

//es6
function sum(n1 = 0, n2 = 0) {
    console.log(n1, n2)
    return n1 + n2
}

console.log(sum())
console.log(sum(10))