const name={name:'raj'}
const updateName={name:'raj kumar'}

function update(obj,updateObj){
    //return Object.assign({},obj,updateObj)
    return {...obj,...updateObj}
}

console.log(update(name,updateName))
console.log(name)

// const numbers=[10,20]
// function addNumbers(n){
//     numbers.push(n)
//     // return numbers
//     // return [].concat(numbers,n)
//     // return [...numbers,...n]
// }