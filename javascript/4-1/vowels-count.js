// find the total vowels in the given string
function findVowels(str) {
    let count = 0
    const vowels = 'aeiou'
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++
        }
    }
    return count
}

console.log(findVowels('bangalore'))

//find occurance of each vowel in the string
function vowelObj(str) {
    const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 }
    for (let i = 0; i < str.length; i++) {
        if (vowels[str[i]] >= 0) {
            vowels[str[i]]++
        }
    }
    return vowels
}

console.log(vowelObj('bangalore'))

