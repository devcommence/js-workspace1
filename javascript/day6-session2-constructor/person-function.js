//back-end node Express
function Person(name) {
    this.name = name
    this.greet = function () {
        return 'Hi, my name is ' + this.name
    }
}

const p1 = new Person('rahul')
console.log(p1.greet())