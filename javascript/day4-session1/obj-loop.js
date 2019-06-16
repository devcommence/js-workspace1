const person={
    name:'arjun',
    city:'bangalore',
    age:21
}

console.log(person.name) //'arjun'
console.log(person['city']) //'bangalore'

const prop='age'

console.log(person.prop) //undefined
console.log(person[prop]) //21


for(let key in person){
    console.log(key,person[key])
}
