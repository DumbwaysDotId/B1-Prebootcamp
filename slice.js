// const animals = ['ant', 'bird', 'chiken', 'cat', 'dog'];

// console.log(animals.slice(4))
// // result dog

// console.log(animals.slice(1, 4))
// // result 

// function list(){
//     return Array.prototype.slice.call(arguments)
// }

// let result = list({'title' : 'Sarjana Komputer', 'name' : 'Chairul'})

// console.table(result)


let unboundSlice = Array.prototype.slice
let customeSlice = Function.prototype.call.bind(unboundSlice)


function list(){
    return customeSlice(arguments)
}

let result = list(1,2,3,4,5,6)


console.log(result)