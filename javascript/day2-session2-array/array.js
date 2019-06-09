//array is an ordered, integer indexed, collection of values
//const fruits=[] or new Array()

const players=['dhoni', 'sachin', 'virat']

console.log(players)

console.log(players[0]) //'dhoni'
console.log(players[1]) //'virat'
console.log(players[10]) //undefined

console.log(typeof players) //'object'
console.log(Array.isArray(players)) //true

const student ={
    firstName:'arjun'
}
console.log(typeof student) //'object'
console.log(Array.isArray(student)) //false

// to add elements to an array
//add in the end
console.log(players.push('suresh'))//4 (new length)
console.log(players)//[ 'dhoni', 'sachin', 'virat', 'suresh' ]

players.unshift('shewag')
console.log(players)//[ 'shewag', 'dhoni', 'sachin', 'virat', 'suresh' ]

const fruits=[]
fruits.push('apple','mango','chikoo','banana','water melon','strawberry')

//to remove elements from an array from end

console.log(players.pop()) //'suresh' returns the element removed
console.log(players)

//from the begining
players.shift() //'shewag'
console.log(players)

//from a given index
players.splice(1,1)
console.log(players,'ssssss')

//update elements
players[0]='saurav'
console.log(players)

//find length of array
console.log(players.length)

//without push add element at last
players[players.length]='ajay'
console.log(players) //[ 'saurav', 'virat', 'ajay' ]

fruits.reverse()
console.log(fruits)

fruits.sort()
console.log(fruits)

console.log(players.indexOf('sachin')) //1
console.log(players.indexOf('zaheer')) //-1

const tags=['js','string','exercise']
console.log(tags.join(' '))// 'js string exercise'
