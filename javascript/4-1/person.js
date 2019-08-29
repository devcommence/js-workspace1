const person = {
    firstName: 'sachin'
}
console.log(person)

//add property to an object

person.lastName = 'tendulkar'
person.country = 'INDIA'
console.log(person)

//remove a property from an obj
delete person.lastName
console.log(person)

//find all the keys/properties
console.log(Object.keys(person)) //['firstName','country']

//find all values
console.log(Object.values(person))

//check if a property exists
console.log(person.isCaptain) //undefined
console.log(Object.keys(person).includes('firstName')) //true
console.log(person.hasOwnProperty('firstName')) //true

