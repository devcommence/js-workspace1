const person = {
    name: 'rakesh',
    skills: ['js', 'rb', 'py'],
    details: function () {
        // console.log(this)
        this.skills.forEach(function (skill) {
            console.log(`${this.name} knows ${skill}`)
        })
    }
}
console.log(person._city)

person.details()
// inside a method, the value of this refers to the current object
// inside a method, if there is a function, inside that function, the value of this is global object

const person1 = {
    name: 'rakesh',
    skills: ['js', 'rb', 'py'],
    details: function () {
        const _this = this
        this.skills.forEach(function (skill) {
            console.log(`${_this.name} knows ${skill}`)
        })
    }
}

person1.details()
// bind method helps to set the context of the this keyword inside the function in js, 
const person2 = {
    name: 'rakesh',
    skills: ['js', 'rb', 'py'],
    details: function () {
        this.skills.forEach(function (skill) {
            console.log(`${this.name} knows ${skill}`)
        }.bind(this))
    }
}

person2.details()
