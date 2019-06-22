//1 -function declaration
//keyword, function a name, n1 & n2 are parameters
//parameters are local variables,is available only inside the function
// antything inside {} is called body of the function
function add(n1,n2){
    const result =n1+n2 // as we have declared const/let/var this variable 'result' is available only 
    //within the function
    total=n1+n2 //here total has become a global variable
    //return keyword is used to send back values if the return keyword is not used by default js sends back
    // undefined
    return result
    //anything after the return will not be executed
    // const name='bangalore'
}

//calling a function or invoking a function
// 10 & 20 are arguments
console.log(add(10,20))

//global variable total as let const not defined
console.log(total)

//if a variable is declared inside a function, it is available only within the function and not outside
// console.log(result)
