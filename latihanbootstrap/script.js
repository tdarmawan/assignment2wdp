// alert("SELAMAT DATANG DI WEBSITE THOMAS");

// CARA MEMBUAT VARIABLE

let pesan = "Nama Saya Thomas";

var pesan2 = "Nama Saya Jonathan";

var pesanConsole = "INI ADALAH CONSOLE DARI VARIABLE";

var pesanConsoleAngkaBukanString = 1998;

var pesanConsoleAngkaString = "1998 adalah tahun lalu";

var combineAngkaAndString = 1998 + "adalah tahun lalu";

// mengambil id name pada HTML
document.getElementById("nama").innerHTML = pesan;

document.getElementById("nama2").innerHTML = pesan2;

// INI contoh console log javascript
console.log(pesanConsole);

console.log("INI ADALAH CONSOLE BUKAN DARI VARIABLE");

console.log(pesanConsoleAngkaBukanString);

console.log(pesanConsoleAngkaString);

console.log(combineAngkaAndString);

var score = 69;

var error = "proses error";

if (score >= 70) {
  console.log("score dinyatakan lulus");
} else {
  console.log("score tidak lulus");
}

if (score != "") {
  confirm("konfirmasi score tidak kosong ya!");
  var text = "oke kalu begitu sudah benar ya ?";
  if (confirm(text) == true) {
    alert("oke selesai");
  } else {
    alert("belum benar ya!");
  }
} else {
  confirm("Sudahkah anda cek nilai dari variable score ?");
}
