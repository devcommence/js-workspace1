const products = [{ id: 1, name: 'puma1', brand: 'puma' },
{ id: 2, name: 'adidas1', brand: 'adidas' },
{ id: 3, name: 'puma', brand: 'puma' },
{ id: 2, name: 'nike1', brand: 'nike' },
]

function filterShoes(products, brands) {
    const output = products.filter(function (item) {
        return brands.includes(item.brand)
    })
    return output
}

console.log(filterShoes(products, ['puma']))
console.log(filterShoes(products, ['adidas']))

