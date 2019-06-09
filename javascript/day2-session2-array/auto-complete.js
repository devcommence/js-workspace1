const names = ['suresh', 'mahesh', 'veeresh', 'ganesh', 'jaggesh']

function findNames(names, search) {
    return names.filter(function (name) {
        return name.toLowerCase().includes(search.toLowerCase())
    })
}

function finIndex(names, search) {
    return names.filter(function (name) {
        return name.toLowerCase().indexOf(search.toLowerCase()) >= 0
    })
}
console.log(findNames(names, 'RE'))
console.log(finIndex(names, 'RE'))