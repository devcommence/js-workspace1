
function strWeight(a, b) {
    let count1 = 0
    let count2 = 0
    for (let val in a) {
        count1 += (a.charCodeAt(val))
    }
    for (let val in b) {
        count2 += (b.charCodeAt(val))
    }
    if (count1>count2){
        return 1
    }
    else if(count2>count1){
        return 2
    }
    else{
        return 'equal'
    }
}
console.log(strWeight('batman', 'superman'))

// const str='batman'
// let count=0
// for(let a in str ){
//  count+= (str.charCodeAt(a))
// }
// console.log(count)