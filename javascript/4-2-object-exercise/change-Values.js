const value = { a: 1, b: 2 }

function change(value) {
    let data = []
    for (let val in value) {
        data.push([val, value[val]])
    }
    return data
}
console.log(change(value))