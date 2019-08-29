class Customer {
    constructor(obj) {
        this.name = obj.name
        this.balance = obj.balance
        this.accNo = obj.accNo
    }
    transaction(amount, code) {
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
    getDetails() {
        return `${this.accNo} ${this.balance} ${this.name}`
    }
}


const c1 = new Customer({ accNo: 'SBI123', name: 'Arjun', balance: 1500 })
console.log(c1.transaction(1000, 0))
console.log(c1.transaction(2000, 0))
console.log(c1.getDetails())