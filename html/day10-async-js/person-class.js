class Person {
    constructor(data) {
        this.firstName = data.fName
        this.lastName = data.lName
    }
    fullName() {
        return this.firstName + ' ' + this.lastName
    }
    static staticMethod() {  //find something done for static methods
        return 'this is a static method'
    }
}

const p1 = new Person({ fName: 'Virat', lName: 'Kohli' })

console.log(p1.fullName())
console.log(Person.staticMethod())