function FilterNumbers(arr) {
    this.arr = arr
    this.getEvens = function () {
        return this.arr.filter(function (num) {
            return num % 2 == 0
        })
    }
    this.getOdds = function () {
        return this.arr.filter(function (num) {
            return num % 2 !== 0
        })
    }
    this.count = this.arr.length
}

const FilterNum = new FilterNumbers([10, 15, 20, 25, 30])
console.log(FilterNum.getEvens())
console.log(FilterNum.getOdds())
console.log(FilterNum.count)