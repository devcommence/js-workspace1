const str ='Js String Exercises'

function unCap(str){
    let output=''
    const words=str.split(' ')
    for(let i=0;i<words.length;i++){
        output=output+words[i].charAt(0).toLowerCase()+words[i].slice(1)+' '
    }
    return output
}
console.log(unCap(str)) 
console.log(unCap('How Are You Buddy')) 