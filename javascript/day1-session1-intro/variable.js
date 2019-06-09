//declaration
var city
console.log(city) //undefined

// declare & assign values
var name='sachin'
console.log(name) //sachin

var name='dhoni'// var can be redeclared and reassigned

var matches=198
var runs= [100,40,60]
var person={
    firstName:'rahul',
    lastName='dravid'
}
var isCaptian=false
console.log(isCaptian) // false

//variables can also hold functions
//anonymous function
var greet=function(){
    return 'hello there'
}

console.log(greet) //returns the value it has
console.log(greet())

function add(){
    return 10+5
}
console.log(add()) //15

