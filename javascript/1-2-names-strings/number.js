const n1=10,n2=9.8,n3=15.2
console.log(typeof n1) // 'number'
console.log(typeof typeof n1)//'string'

console.log(Math.round(n2)) //10
console.log(Math.ceil(n2)) //10
console.log(Math.ceil(n3))//16

console.log(Math.min(45,55,33,1)) //1
// console.log(Math.min([12,3,4,5]))//NAN 
console.log(Math.min(...[45,55,33,1]))//1