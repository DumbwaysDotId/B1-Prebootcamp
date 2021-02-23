//Fungsi sederhana
function message(){
    alert("Hello Student Dumbways Pre Bootcamp");
}

//Fungsi Dengan params
function message(fristName, lastName, ukuran){
    alert("Hello " + fristName + " " + lastName + " " + ukuran );
} 

//Fungsi Spesifik Params dengan arguments
function message(fristName, lastName, ukuran){
    alert("Hello " + arguments[0] + " " + arguments[1]);
} 

//Return
function sum(var1, var2){
    return var1 + var2;
}

//Fungsi Expresion
var hitung = function sum(var1, var2){
    return var1 + var2;
}

//Anonymous Function
var showMessage = function (text){
    alert ("This is Anonymous Function " + text)
}

//Nested Function
function parentFunc(text)
{
    function childFunc(){
        alert ("This is using Child Func " + text)
    }

    return childFunc()
}

parentFunc("Kok bisa ya")

showMessage("With Params")

var result = hitung(20, 30)

document.write(result);

//Pemanggilang Fungsi
// message("Vito", )
// message(true, false)
// message(200, 300)
// message("Lola Zeita", "B", 36)