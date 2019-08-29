const currentInventory = [{ name: "HTC", stock: 25 }, { name: "Nokia", stock: 1000 },
{ name: "Samsung", stock: 50 }, { name: "Sony", stock: 10 }, { name: "Apple", stock: 15 }];

const newInventory = [{ name: "LG", stock: 5 }, { name: "Sony", stock: 10 },
{ name: "Samsung", stock: 5 }, { name: "Apple", stock: 15 }];

function updateInventory(currentInventory, newInventory) {
    newInventory.forEach(function (newItem) {
        const output = currentInventory.find(function (currentItem) {
            return currentItem.name == newItem.name
        })
        if (output) {
            output.stock += newItem.stock
        }
        else {
            currentInventory.push(newItem)
        }
    })
    return currentInventory
}
console.log(updateInventory(currentInventory, newInventory))

// console.log(updateValue)
//const numbers =[{value:0},{value:1}]
//undefined
//const count=numbers[0]
//undefined
// count {vaue:0}