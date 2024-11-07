// Antrian awal pembeli
let antrian = ["ray", "fiki", "fadhilla", "farah"];

// Tambahkan pembeli baru "nabila"
antrian.push("nabila");

// Tambahkan dua pembeli baru "maza" dan "elsi"
antrian.push("maza", "elsi");

// Antrian terakhir tidak jadi antri dan pulang ke rumah
antrian.pop();

// Antrian pertama sudah mendapatkan belanjaannya
antrian.shift();

// Antrian kedua juga sudah mendapatkan belanjaannya
antrian.shift();

// Pembeli baru "tomi" nyerobot antrian
antrian.unshift("tomi");

// Tampilkan hasil akhir antrian di halaman HTML
document.getElementById("antrian-output").textContent += antrian.join(", ");