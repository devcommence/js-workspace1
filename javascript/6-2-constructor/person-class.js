//front end -React
class Person {
    constructor(name) {
        this.name = name
    }
    greet() {
        return 'Hi, my name is ' + this.name
    }
}
const p1 = new Person('rahul')
console.log(p1.greet())
