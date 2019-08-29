//function expression
// const total =function(n1,n2){
// return n1+n2 
// }

//arrow function  ()=>{}

const total = (n1, n2) => {
    return n1 + n2
}

// const total =(n1,n2)=>n1+n2
console.log(total(10, 20))

const numbers = [10, 20, 30, 40, 50]

const result = numbers.filter(function (n) {
    return n > 25
})

console.log(result)

//arrow = ()=>{}

const result1 = numbers.filter((n) => {
    return n > 25
})
console.log(result1)

//1 -if only 1 argument is passed, () is option
//const result1=numbers.filter(n=>{
//return n>25
// })
// console.log(result1)

// 1- if there is only 1 statement to be executed inside the arrow function,{}
// and return key is optional

const result2 = numbers.filter(n => n > 25)
console.log(result2)