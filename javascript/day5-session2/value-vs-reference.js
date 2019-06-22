// pass by value 

const city = 'bangalore'

function change(city) {
    city = 'mysore'
    return city
}
console.log(change(city)) //mysore
console.log(city) //bangalore

//pass by reference
let location = {
    name: 'jayanagar'
}
const fruits = ['mango']
console.log(location)
function changeLoc(location, fruits) {
    location.name = 'btm'
    fruits[0] = 'apple'
    return { location, fruits }
}
console.log(changeLoc(location, fruits))// { name: 'btm' }
console.log(location.name)//btm
console.log(fruits[0])//apple