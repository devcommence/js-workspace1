console.log(sayHi())

function sayHi(){
    return 'HI'
}

//function expression dont get  hoisted

//greet()
//functions in javascript are treated as first class citizens
const greet=function(){
    console.log('hi')
}
greet()