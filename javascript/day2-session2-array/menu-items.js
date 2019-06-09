const items = [
    {
        id: 1, name: 'chilly-chicken', isVeg: false
    },
    {
        id: 2, name: 'gobi', isVeg: true
    },
    {
        id: 3, name: 'mutton-biryani', isVeg: false
    }
]

function findVeg(items) {
    return items.filter(function (item) {
        return item.isVeg
    })
}
console.log(findVeg(items))