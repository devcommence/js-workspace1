// es -ecmascript (ecma -european computer manufacturer association)

const function1 = function () {
    console.log(this) //refers to global
}
function1()
console.log(this) //{}

const function2 = () => {
    console.log(this) //{} refers to empty object
}
function2()

// this keyword inside the arrow function refers to the outside of that particular function
const person = {
    name: 'Rakesh',
    skills: ['js', 'rb', 'py'],
    details: function () {
        this.skills.forEach(skill => {
            //inside an arrow function this refers to the value of this in the outer scope
            console.log(`${this.name} knows ${skill}`)
        })
        //  this.skills.forEach(skill=> console.log(`${this.name} knows ${skill}`)
    }
}

person.details()

//not recommended
// const person={
    // name:'rakesh',
    // skills:['js','rb','py'],
    // details:()=>{ 
        // console.log(this) //{}
    // }
// }