const global = "hay";

//rule
//1. Object bisa simpan berbagai macam type data
//2. Object bisa dilooping tapi tidak direkomendasikan karena yang ditampilkan adalah value sehingga ketika ngoding kita bisa bingung property mana yang ingin dipilih
//3. Object bisa menyimpan function / method
const object = {
  name: "Panca Setiawan",
  study: "S1 Sistem Informasi",
  address: "Bandung",
  age: 18,
  sex: "Male",
  isWork: false,
  hobbies: ["berenang", "lari"],
  detail: {
    parentName: "Tono",
    girlFriend: "Sinta",
  },
  workExperience: [
    {
      company: "PT. Telkom Indonesia",
      address: "indonesia",
    },
    {
      company: "PT. Shopee Asia",
      address: "jepang",
    },
  ],
  greeting: function () {
    const newVariable = "hallo";
    alert(global + newVariable + this.name + this.age);
  },
};

//modifikasi value sebuah object
object.name = `${object.sex === "Male" ? "Mr " : "Mrs"}${object.name}`;
document.write(object.name);

//menghapus object properties
delete object.study;

const newObject = {
  name: "Diaz",
  age: 9,
};

//looping object
// for (var i in newObject) {
//   document.write(newObject[i] + "<br/>");
// }

//looping array dalam object
// for (experience of object.workExperience) {
//   document.write(experience.address);
// }

document.write(`<pre>${JSON.stringify(object, null, 2)}</pre>`);
console.log(object);

// object.greeting();
