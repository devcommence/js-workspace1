const str='js string exercises'

function cap(str){
    let output=''
    const words=str.split(' ')
    for(let i=0;i<words.length;i++){
        output=output+words[i].charAt(0).toUpperCase()+words[i].slice(1)+' '
    }
    return output
}
console.log(cap(str))