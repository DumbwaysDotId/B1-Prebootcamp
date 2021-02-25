const name = "ariwibowo putra";

const arrayString = ["putri", "toni", "andi", "indra", "cintia", "udin"];
// 0  ,    1,  ,     2

// document.querySelector(".text").innerHTML = arrayString[arrayString.length - 1];

//METHOD TAMBAH VALUE PADA ARRAY
// array push berguna untuk menambahkan sebuah value pada urutan index terakhir pada array
arrayString.push("value baru 1");
arrayString.push("value baru 2");
arrayString.push("value baru 3");

// array unshit pada urutan index awal
arrayString.unshift("value baru 4");
arrayString.unshift("value baru 5");
arrayString.unshift("value baru 6");

//METHOD REMOVE VALUE PADA ARRAY
//remove value terakhir dari array
arrayString.pop();

//remove value pertama / awal dari sebuah arary
arrayString.shift();

for (value of arrayString) {
  document.write(`<h1>${value}</h1>`);
}

const arrayNumber = [1, 2, 3, 4, 5, 6, 7, true, false, "string", { key: 1 }];

const matriks = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

const tutorialList = [
  {
    name: "Javascript untuk pemula",
    staus: "FREE",
  },
  {
    name: "HTML & CSS Fundamental",
    staus: "FREE",
  },
  {
    name: "Git untuk Pemula",
    staus: "FREE",
  },
];

// for (tutorial of tutorialList) {
//   document.write(`<br/> ${tutorial.name}`);
// }
