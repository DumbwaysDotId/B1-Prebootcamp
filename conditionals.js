//================ if else ============

function checkNumber(number) {
  if (number % 2 == 0) {
    console.log(`Nomor: ${number} adalah bilangan genap`);
  } else {
    console.log(`Nomor: ${number} adalah bilangan ganjil`);
  }
}

// checkNumber(4);
// checkNumber(3);

//================ end if else ============

//================ if else else if else ============

function checkNilai(nilai) {
  let score;

  if (nilai > 85 && nilai <= 100) {
    score = "Mendapat A";
  } else if (nilai >= 70 && nilai <= 85) {
    score = "Mendapat B";
  } else if (nilai >= 50 && nilai <= 69) {
    score = "Mendapat C";
  } else if (nilai < 50 || nilai === 101) {
    score = "Mendapat D";
  } else {
    score = "Mendapat E";
  }

  console.log(score);
}

// checkNilai(80);
// checkNilai(20);
// checkNilai(70);

//================ end if else if else else ============

//================ nested if  ============

console.log(status);

const tampungIndex = [];

for (let i = 0; i <= 7; i++) {
  tampungIndex.push(i);
}

// console.log(tampungIndex);

const biodata = {
  name: "ibad",
  tempatLahir: "Jawa Tengah",
  status: "PNS",
  golongan: "IV",
};

function checkGaji(data) {
  let output = {};
  // menambahkan value kepada sebuah object
  output.name = data.name;
  output.tempatLahir = data.tempatLahir;

  if (data.status === "PNS") {
    output.gaji = 3000000;
    // output.tunjangan = data.golongan === "IV" ? 500000 : 200000
    if (data.golongan === "IV") {
      output.tunjangan = 500000;
    } else {
      output.tunjangan = 200000;
    }
  } else {
    output.gaji = 1500000;
    output.tunjangan = 100000;
  }

  console.log(output);
}

// checkGaji(biodata);

//================ end nested if  ============

//================ switch case  ============

function lampuMerah(warnaLampu) {
  let statusKendaraan;

  switch (warnaLampu) {
    case "MERAH":
      statusKendaraan = "Kendaraan Berhenti";
      break;
    case "HIJAU":
      statusKendaraan = "Kendaraan Berjalan";
      break;
    default:
      statusKendaraan = "HATI-HATI";
      break;
  }

  if (statusKendaraan === "Kendaraan Berhenti") {
    statusKendaraan = statusKendaraan + "Berhenti jangan tidur ya";
  }

  return statusKendaraan;
}

// console.log(lampuMerah("MERAH"));

function checkExpression(number) {
  if (number == 1) {
    console.log("ini adalah satu");
  } else {
    console.log("ini bukan satu");
  }

  //===
  //*Compare type data dan value

  //==
  //*Compare value saja
}

// checkExpression("1");

//================ end switch case  ============

function checkGanjilGenap(number) {
  console.log(
    number % 2 == 0
      ? `Nomor: ${number} adalah bilangan genap`
      : `Nomor: ${number} adalah bilangan ganjil`
  );

  //template tenary
  const result = condition1 ? "code 1" : condition2 ? "code 2" : "code 3";
  function tenaryOperator() {
    return condition1
      ? value1
      : condition2
      ? value2
      : condition3
      ? value3
      : value4;
  }
}

// checkGanjilGenap(2);

const profile = {
  name: "andi",
  status: "pelajar",
  nilai: 80,
  showAlert: function () {
    alert("Tampil");
  },
  mataPelajarYangDiambil: [
    {
      name: "Matematika",
      status: {
        publish: true,
      },
    },
    {
      name: "Bahasa Inggris",
    },
  ],
};

delete profile.nilai;

console.log(profile);

document.write(`<h1>${profile.mataPelajarYangDiambil[1].name}</h1>`);
document.write(`<h1>${profile.mataPelajarYangDiambil[0].status.publish}</h1>`);

// profile.showAlert();
