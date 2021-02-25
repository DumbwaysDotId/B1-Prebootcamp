class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get showCalculatedValue() {
    return this.calculated();
  }

  calculated() {
    return this.height * this.width;
  }
}

const newRectangle = new Rectangle(10, 10);

console.log(newRectangle.showCalculatedValue);

// function rectangle(height, width) {
//   return height * width;
// }

// console.log(rectangle(10, 10));

const jobs = ["frontend developer", "backend developer", "fullstack developer"];
let temp;

for (job of jobs) {
  temp += `<li>${job}</li>`;
}

document.querySelector(".list-job").innerHTML = temp;
const judul = document.getElementById("judul").innerText;
const name = document.getElementById("input-name").value;
console.log(name);
