const person={
    name:'rakesh',
    city:'bangalore',
    area:'market'
}

const {name:firstName,city,state,country='INDIA',area:location='BTM'}=person
console.log(firstName,city,state,country,location)