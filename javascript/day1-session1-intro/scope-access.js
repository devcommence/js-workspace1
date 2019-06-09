const user={
    name:'admin',
    isAdmin:true
}
let token;
//block of code
if(user.isAdmin){
    token='secret123'
}
//is  available outside block
console.log(token)