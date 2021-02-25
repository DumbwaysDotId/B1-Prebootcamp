//Fungsi sederhana
function message() {
  alert("Hello Student Dumbways Pre Bootcamp");
}

//Fungsi Dengan params
function message(fristName, lastName, ukuran) {
  alert("Hello " + fristName + " " + lastName + " " + ukuran);
}

//Fungsi Spesifik Params dengan arguments
function message(fristName, lastName, ukuran) {
  alert("Hello " + arguments[0] + " " + arguments[1]);
}

//Return
function sum(var1, var2) {
  return var1 + var2;
}

//Fungsi Expresion
var hitung = function sum(var1, var2) {
  return var1 + var2;
};

//Anonymous Function
var showMessage = function (text) {
  alert("This is Anonymous Function " + text);
};

//Nested Function
function parentFunc(text) {
  function childFunc() {
    alert("This is using Child Func " + text);
  }

  return childFunc();
}

// parentFunc("Kok bisa ya");

// showMessage("With Params");

var result = hitung(20, 30);

document.write(result);

//Pemanggilang Fungsi
// message("Vito", )
// message(true, false)
// message(200, 300)
// message("Lola Zeita", "B", 36)

//reguler function
function helloWorld(text) {
  //alert(text);
}

function perkalian(nilai1, nilai2) {
  return nilai1 * nilai2;
}

helloWorld("Hello Pre Bootcamp");
document.write("<br/>" + perkalian(100, 20));

//arrow function
const helloWorld2 = () => {
  //code
};

const perkalian2 = (nilai1, nilai2) => nilai1 * nilai2;
document.write("<br/>" + perkalian2(100, 30));

const cekSuhu = (tipeSuhu, suhu, conversi) => {
  if (tipeSuhu) {
  } else {
  }
};

cekSuhu("celcius", 20, "kelvin");
