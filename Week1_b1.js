//String
document.write("String<br><br>")
var words = "Saya belajar Javascript"
var words2 = 'Ini menggunakan One Quotes'

console.log(typeof words === "string")
console.log(typeof words2 === "string")

document.write(words + "<br>")
document.write(words2 + "<br><br><br>")


//Number
document.write("Integer<br><br>")
//Integer = Untuk Bilangan bulat
var a = "10";

//Float = Floating number / bilangan pecahan
var b = 9.8;

//Exponential Notation, Jika di tambah maka akan menambahkan digit 0 di belakang
var c = 9.8e+6;

//Exponential Notation, Jika di kurang di akan menambahkan digit 0 di depan
var d = 9.8-6;

console.log(typeof a === "number")
console.log(typeof b === "number")
console.log(typeof c === "number")
console.log(typeof d === "number")

document.write(a + "<br>")
document.write(b + "<br>")
document.write(c + "<br>")
document.write(d + "<br><br><br>")


//Boolean
document.write("Boolean<br><br>")
var isLearning = true;
var isSleeping = false;

var value1 = 2, value2 = 4, value3 = 6

console.log(typeof isLearning === "boolean")
console.log(typeof isSleeping === "boolean")

document.write(value1 > value3) //False
document.write("<br><br>")
document.write(value1 < value3) //True
document.write("<br><br><br>")

//Null
document.write("Null<br><br><br>")

var empty = null;
document.write(empty +"<br><br>") //Null

var wordWithNull = null
document.write (wordWithNull + "<br>") //Hello this null

wordWithNull = "Hello this is Null"
document.write (wordWithNull + "<br><br><br>") // null

//
document.write("Undifined<br><br><br>")

var word3;
document.write (word3 + "<br><br>")