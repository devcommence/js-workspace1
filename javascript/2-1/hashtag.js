const str ='make in india'

// tagGenerator(str) #MakeInIndia

function tagGenerator(str){
    let output='#'
    const words=str.split(' ')
    for(let i=0;i<words.length;i++){
        output=output+words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()
    }
    return output
}
console.log(tagGenerator(str)) //#MAKEInIndia