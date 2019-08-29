//iife - immediately invoked function expression

(function () {
    console.log('hi there im an life')
})()


//iife used in es5 is to hold the scope of the variable as let and const were not introduced
function someFunction() {
    var n = 10
    if (true) {
        // var n = 20
        (function () {
            var n = 20
            console.log(n)
        })()
    }
    console.log(n)
}

someFunction()