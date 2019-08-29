function getCharCodeAt(word) {
    let i = 0
    var sum = 0
    while (i != word.length) {
        let val = i++
        sum+=word.charCodeAt(val)
    }
    return sum
}
function getTheKey(a) {
    const words = a.split(' ')
    const obj = {}
    words.forEach((word) => {
        obj[word] = getCharCodeAt(word)
    })
    return obj
}
    function highestScoringWord(a) {
        const wordsHigh = getTheKey(a)
        const highArr = Object.values(wordsHigh)
        const maxValue = Math.max(...highArr)
        const data = Object.keys(wordsHigh).find(key => wordsHigh[key] === maxValue)
       return data
    }
    console.log(highestScoringWord('go ahead make my day'))
