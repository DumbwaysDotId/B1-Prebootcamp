const now = new Date();
const date = now.toString();

console.log(date);

const nilaiRandom = Math.random() * 1000;

console.log(Math.ceil(nilaiRandom));

const nilaiMax = Math.max(1, 2, 3, 4, 5, 6);

console.log(nilaiMax);

const name = "1234567";
const fullName = "Fadhil Darma Putera Zagoto";
const stringArray = Array.from(name);

console.log(stringArray);

const arrayFullname = fullName.split(" ");

let firstName = arrayFullname.map((name, index) => {
  if (index !== arrayFullname.length - 1) {
    return [name];
  }
});

firstName.pop();
firstName = firstName.join(" ");

const lastName = arrayFullname.filter(
  (name, index) => index === arrayFullname.length - 1
)[0];

console.log({ firstName, lastName });
