const source = 'bangalore', destination = 'mysore', distance = 145

// console.log('the distance between' + source + 'and' + destination + 'is' + (distance + 10) + 'kms')

// es6 -template string || string literal
console.log(`The distance between ${source} and ${destination} is ${distance+10} kms`)
const password='secrennt123'
console.log(password.length)//9

const firstName='mahesh'
console.log(firstName.toUpperCase()) //'MAHESH'

const city='bangalore'
console.log(city[100]) //undefined

city[0]='m'
console.log(city)

const fruits=['apple','mango']
fruits[0]='water melon'
console.log(fruits)
