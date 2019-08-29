function Customer(obj) {
    this.name = obj.name
    this.balance = obj.balance
    this.accNo = obj.accNo
    this.transaction = function (amount, code) {
        if (code) {
            this.balance += amount
        }
        else {
            if (amount > this.balance) {
                return `insufficient balance`
            }
            else {
                this.balance -= amount
            }
        }
        return `${this.balance} ${this.accNo}`
    }
    this.getDetails = function () {
        return `${this.accNo} ${this.balance} ${this.name}`
    }
}
const c1 = new Customer({ accNo: 'SBI123', name: 'Arjun', balance: 1500 })
console.log(c1.transaction(1000, 0))
console.log(c1.transaction(2000, 0))
console.log(c1.getDetails())
// console.log(c1.getDetails())//SBI123 -1500
// c1.transaction(1000,1)//SBI123 -2500
// c1.transaction(2000,0)//SBI123 -500
// c1.transaction(1000,0)//insuff
