var cars = ["BMW", "Mercedes-Benz", "Tesla", "Toyota", "Ford", "Ford", "Ford"];

var i = 0;
var car = "";

//========== generic for =============

// for (dari mana perulangan ini dieksekusi; kondisi; penambahan / increament) {
//   code yang dieksekusi sesuai dengan kondisi yang telah ditentukan
// }

// for (var i = 1; i <= 5; i++) {
//   document.write("<p>This Number " + i + "</p>");
// }

// for (var i = 0; i < cars.length; i++) {
//   document.write(cars[i] + "<br><br>");
// }

// for (var i = 0; i <= cars.length; i++) {
//   document.write(cars[i] + "<br><br>");
// }

//======== end generic for ============

//================ while ==============

// while (cars[i]) {
//   car += cars[i] + "<br><br>";

//   i++;
// }

// document.write(car);

// while(i < 5){
//     document.write("<p>The Number is " +i +"</p>")
//     i++
// }

//================ end while =============

//================ do while ==============

// do {
//   car += cars[i] + "<br><h1>mantap</h1><br>";
//   i++;
// } while (cars[i]);

// document.write(car);

//================ end do while ===========

//================ for in ==============

for (var index = 0; index < cars.length; index++) {
  console.log(`index ke ${index} dengan value ${cars[index]}`);
}

console.log("=================================");

for (index in cars) {
  console.log(`index ke ${index} dengan value ${cars[index]}`);
}

//note: kita bisa akses index dan value dari array yang diulang

//================ end for in ============

//================ for of ===============

console.log("=================================");

for (value of cars) {
  console.log(`value ${value}`);
}

//note: kita hanya bisa akses valuenya saja

//================ end for of ============
