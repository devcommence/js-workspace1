let n1 = 10, n2 = 20
function add(n1, n2) {
    console.log('n1', n1, 'n2', n2)
    n1 = 100, n2 = 200
    return n1 + n2
}
console.log(add())
console.log(add(n1, n2)) //300
console.log(n1, n2) //10, 20