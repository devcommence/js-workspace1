const c1 = {
    count: 1,
    up: function () {
        this.count += 1
        return this.count
    },
    down: function () {
        this.count -= 1
        return this.count
    },
    reset: function () {
        this.count = 0
        return this.count
    },
    upBy: function (value) {
        this.count += value
        return this.count
    },
    downBy: function (value) {
        this.count -= value
        return this.count
    },
    setVal: function (value) {
        this.count = value
        return this.count
    },
    val: function () {
        function as() {
            return this
        }
        // return as()
    }
}

console.log(c1.count)
console.log(c1.up())
console.log(c1.down())
console.log(c1.reset())
console.log(c1.upBy(3))
console.log(c1.downBy(2))
console.log(c1.setVal(5))



// function val2() {
//     return this
// }
// console.log(val2())

console.log(c1.val())