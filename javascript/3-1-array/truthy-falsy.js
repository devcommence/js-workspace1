// falsy - false, 0,undefined, '',NaN, null
// truthy -true, 1, -1,'dct', {},[]

function returnTruthy(values) {
    return values.filter(function (value) {
        return value
    })
}
console.log(returnTruthy([false, 0, undefined, '', NaN, null, -true, 1, -1, 'dct', {}, []]))


function returnFalsy(values) {
    return values.filter(function (value) {
        return !value
    })
}
console.log(returnFalsy([false, 0, undefined, '', NaN, null, -true, 1, -1, 'dct', {}, []]))

function filterValues(values) {
    const truthy = [], falsy = []
    values.forEach(function (value) {
        if (value) {
            truthy.push(value)
        }
        else {
            falsy.push(value)
        }
    })
    // return [truthy, falsy];  // if object { trueValues: truthy,falseValues:falsy}
    return {
        truthy,
        falsy
    }
}
console.log(filterValues([false, 0, undefined, '', NaN, null, -true, 1, -1, 'dct', {}, []]))