const str = 'resource'
const len = 3

function chop(str, len) {
    const output = []
    for (let i = 0; i < str.length; i = i + len) {
        output.push(str.substring(i, i + len))
    }
    return output
}
console.log(chop(str, len))
// ['re','so','ur','ce'] 2
// ['res','our','ce'] 3