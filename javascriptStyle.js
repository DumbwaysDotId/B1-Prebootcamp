//==================== naming Convention in Javascript using camelCase ==================

// pada c, java dll
// int my_name

const myName = "fadhil";

// pada c, java dll
// int description_about_my_company

const descriptionAboutMyCompany = "awdawd";

//ini adalah class

// class MyNewClass extends adwada {

// }

// const helloWorld = () => {
//   //your code here
//   for (i = 0; i < 10; i++) {
//     for (j = 1; j < 5; j--) {
//       for (j = 1; j < 5; j--) {
//         for (j = 1; j < 5; j--) {
//           for (j = 1; j < 5; j--) {
//             //adadaw
//           }
//         }
//       }
//     }
//   }
// };

descriptionAboutMyCompany; //variable
//helloWorld(); //function
//MyNewClass; //class

const printLetter = (word1, word2) => {
  return word1 + word2;
};

printLetter("oke", "hello");

//================================================

//================================== Space Around Operator ===========================

const variable1 = 1;
const variable2 = 1;
const variable3 = 1;

const myNewHomeFromOtherCountrie = "Amerika";
const iMComeFrom = "Japan";

variable2 + (variable3 * variable1) / variable3;

const myAdress =
  myNewHomeFromOtherCountrie + (iMComeFrom * variable3) / variable1 - variable2;

//================================================

function getData() {
  //awdawdawdawd
}

const myProfile2 = { name: "Shidiq", address: "Surakarta" };

const myProfile = {
  name: "Shidiq",
  address: "Surakarta",
  school: "SMK 3 Surakarta",
  name: "Shidiq",
  address: "Surakarta",
  school: "SMK 3 Surakarta",
  name: "Shidiq",
  address: "Surakarta",
  school: "SMK 3 Surakarta",
  name: "Shidiq",
  address: "Surakarta",
  school: "SMK 3 Surakarta",
};

const ADDRESS = "bandung";
const MYNAME = "fadhil";

const myAddress = () => {
  const address = "jakarta";
  return ADDRESS;
};

console.log(ADDRESS);

const schools = ["smk1", "smk2"];
const school = "smk1";

const sekolahSekolah = ["smk1", "smk2", "smk3"];
const banyakSekolah = ["smk1", "smk2", "smk3"];
const sekolah = "smk1";

const name = "PANCA";

//call global variable inside function

// sayHello();
// document.getElementById("hello").innerHTML = carName;
// function sayHello() {
//   carName = "oke";
// }

const tampil = () => {
  console.log(name);
};

tampil();

// var x = this;
// document.getElementById("hello").innerHTML = x;

// document.getElementById("hello").innerHTML = testing();
// function testing() {
//   return this;
// }

// const person = {
//   name: "andi",
//   myFunction: function () {
//     return this.name;
//   },
// };

// document.getElementById("hello").innerHTML = person.myFunction();

const person1 = {
  getName: function () {
    return this.firstName + this.lastName;
  },
};

const myName2 = {
  firstName: "Chairul",
  lastName: "Akbar",
};

document.getElementById("hello").innerHTML = person1.getName.call(myName2);
