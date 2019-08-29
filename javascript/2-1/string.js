const city='bangalore'

console.log(city.length)
console.log(city.toUpperCase())

console.log(city.slice(0,3))//'ban'
console.log(city.slice(0,1))// 'b'

//to capitalize
console.log(city[0].toUpperCase()+city.slice(1).toLowerCase) 

//to check if a char is part of a string

console.log(city.indexOf('a'))//1
console.log(city.indexOf('z'))//-1

console.log(city.includes('a'))//true
console.log(city.includes('z'))//false

if(city.indexOf('a')>=0){
    console.log('a is present')
}
else{
    console.log('a is not present')
}
console.log("*".repeat(25))

const numbers='1234567890' // (123) 456-7890

const firstHalf=numbers.slice(0,3)
const secondHalf=numbers.slice(3,6)
const thirdHalf=numbers.slice(6)

console.log(`(${firstHalf}) ${secondHalf} - ${thirdHalf}`)

console.log(city.substring(0,3))//ban
console.log(city.substr(0,4))//bang


const tags='js, rb, py, java'
console.log(tags.split(', ')) //[ 'js, rb, py, java' ]

const emails= '1@gmail.com, 2@gmail.com, 3@gmail.com'
console.log(emails.split(', ')) //[ '1@gmail.com', '2@gmail.com', '3@gmail.com' ]

const locations='bangalore - mandya - mysore'
console.log(locations.split(' - ')) //[ 'bangalore', 'mandya', 'mysore' ]