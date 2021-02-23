document.write("Non Primitive Data Type")
document.write("<br><br><br>")

var emptyObject = {};

var person = {
    "name" : "Panca",
    "age" : "19",
    "address" : "Bogor"
}

var car = {
    "merk" : "Mercedes-Benz",
    "type" : "sedan",
    "wheels" : 4,
    "color" : "Black",
    "title" : function(){
        return this.merk + " " + this.type;
    }
}

console.log(emptyObject)
console.log(person)
console.log(car)


var emptyArr = []

var arr1 = [1,2,3,4,5,6]

var cities = ["London", "Paris", "New Jersey"]

document.write(arr1[5] + "<br>")
document.write(cities[2] + "<br><br>")


Date()

var currentDate = new Date();

document.write(currentDate)