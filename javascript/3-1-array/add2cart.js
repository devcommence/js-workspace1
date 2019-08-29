const userCart = [{ id: 1, name: 'marker', quantity: 1 }]

function add2Cart(userCart, lineItem) {
    const product = userCart.find(function (item) {
        return item.id == lineItem.id
    })
    if (product) {
        product.quantity += lineItem.quantity
    }
    else {
        userCart.push(lineItem)
    }
    return userCart
}

console.log(add2Cart(userCart, { id: 1, name: 'marker', quantity: 1 }))
console.log(add2Cart(userCart, { id: 2, name: 'scale', quantity: 1 }))
console.log(add2Cart(userCart, { id: 1, name: 'marker', quantity: 2 }))