// destructuring object

const game = {
  name: "God Of War 4",
  platform: "PS4",
  info: {
    address: "Japan",
    company: "Sony",
  },
};

const { name, platform } = game;
const {
  info: { address, company },
} = game;

document.write(company);
document.write("<br/>");

// assign object value from new variable
const gameName = game.name;
const gamePlatform = game.platform;

// computed property name
const selectedObject = "platform";
const { [selectedObject]: selectedProperties } = game;

document.write(selectedProperties);
document.write("<br/>");

// alias pada object destructuring
const { name: nama, platform: namaDevicenya } = game;

document.write(namaDevicenya);
document.write("<br/>");

// const {
//   data: postData,
//   loading: postLoading,
//   error: postError,
// } = responseGetPost;

// const {
//   data: userData,
//   loading: userLoading,
//   error: errorLoading,
// } = responseGetUser;

// document.write(platform);
// document.write(name);

// destructuring array

const movies = ["Godzilla", "Pasific Rim", "Upin Ipin"];
const [movie1, movie2, movie3] = movies;

document.write(movie3);

//assign variable value by array

let firstName, job, rest;
[firstName, job, ...rest] = [
  "Chairul",
  "Software Developer",
  "value 1",
  "value 2",
  "value 3",
];

document.write("<br/>");
document.write(firstName);
document.write("<br/>");
document.write(job);

//assign value using spread operator

document.write("<br/>");
document.write(rest);

//skipping value
let info1, info2, info3;

[info1, , info3] = ["Hallo ini info 1", "Selamat pagi", "Selamat malam info 3"];

document.write("<br/>");
document.write(info1);
document.write("<br/>");
document.write(info2);
document.write("<br/>");
document.write(info3);

//swapping values
let right = "kanan";
let left = "kiri";

[right, left] = [left, right];

document.write("<br/>");
document.write(left);
