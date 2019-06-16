const obj={a:1,b:2,c:3}

function values(obj){
    const output=[]
    for(let key in obj){
        output.push(obj[key])
    }
    return output
}

console.log(values(obj))