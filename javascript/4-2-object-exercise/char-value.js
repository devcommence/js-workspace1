const value = [['a', 1], ['b', 2]]

function values(value) {
    const data = {}
    value.forEach(function (val) {
        data[val[0]] = val[1]
    })
    return data
}
console.log(values(value))

