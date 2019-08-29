//var is function scoped
//var is available across the function
var user={
    name:'admin',
    isAdmin:true
}

//block of code
if(user.isAdmin){
    var token='secret123'
}
//is available outside block
console.log(token)

//let & const is block scoped
const customer={
    name:'c1',
    isCustomer:true
}

if(customer.isCustomer){
    const cToken='abc123'
    console.log(cToken)
}

//not available outside the block
//ReferenceError: cToken is not defined
//console.log(cToken)

for(var i=0;i<5;i++){
    console.log(i)
}
console.log('outside ',i)

for(let j=0;j<5;j++){
    console.log(j)
}
//console.log('outside the  loop',j)