const str = 'virat virat sachin dhoni virat sachin'
const str2 = 'a a a b b b c c b b'
const str3 = 'aaabbbccccc'
function frequency(str) {
    const data = {}
    const words = str.split(' ')
    words.forEach(function (word) {
        if (data[word]) {
            data[word] += 1
        }
        else {
            data[word] = 1
        }
    })
    return data
}
console.log(frequency(str)) //{ virat: 3, sachin: 2, dhoni: 1 }
console.log(frequency(str2)) //{ a: 3, b: 5, c: 2 }

function frequency2(str) {
    const data = {}
    const words = str.split('')
    console.log(words)
    words.forEach(function (word) {
        if (data[word]) {
            data[word] += 1
        }
        else {
            data[word] = 1
        }
    })
    return data
}
console.log(frequency2(str3)) //{ a: 3, b: 3, c: 5 }