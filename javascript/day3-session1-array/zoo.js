const animals = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Phil", ["grounddog", 11],
    ]
];

function myZoo(animals) {
    const output = []
    animals.forEach(function (animal) {
        output.push(`${animal[0]} the ${animal[1][0]} is ${animal[1][1]}`)
    })
    return output
}
console.log(myZoo(animals))



//recursion

// function myZooRecursion(animals){
//     if(animals[0].le)
// }