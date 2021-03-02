//One Way
var array1 = [1,2,3,4]
var array2 = [5,6,7,8]
var result = [array1,array2]

console.table(result)

//Two
var peoples = [
    [1,"Chairul",28, "Tanggerang Selatan"],
    [2,"Fadhil", 30, "Padang"],
    [4,"Dilah", 20, "Bogor"],
    [5,"Isal", 15, "Bogor"],
]
// data.push([5, "New Data", 10, "Jakarta"])
// data.splice(3, 0, [3, "New Data", 10, "Jakarta"])
// data.pop()
// data.splice(3)
peoples.forEach((people) => {
    people.pop(2)
})

console.table(peoples)