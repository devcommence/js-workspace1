// execution sequentially
setTimeout(()=>{
    console.log('function 1')
    setTimeout(()=>{
        console.log('function 2')
    },500)
},3000)

//execution parallely
setTimeout(()=>{
    console.log('1')
},1000)

setTimeout(()=>{
    console.log('2')
},2000)