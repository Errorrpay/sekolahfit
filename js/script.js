// ==================================================
// SCHOOLFIT - JAVASCRIPT
// ==================================================



// ==================================================
// MENU MOBILE
// ==================================================

function toggleMenu() {

    const nav = document.getElementById("mainNav");

    if (!nav) {
        return;
    }

    nav.classList.toggle("show");

}



// ==================================================
// DATA SERAGAM
// ==================================================
//
// Semua foto yang ada di halaman seragam
// dimasukkan ke daftar ini.
//
// Hanya bagian SERAGAM di BERANDA
// yang menggunakan random.
//

const daftarSeragam = [

    {
        gambar: "images/seragam/sd-1.jpg",

        kategori: "SD",

        judul: "Seragam SD 01",

        deskripsi:
            "Inspirasi seragam sekolah dasar dengan tampilan rapi dan nyaman."
    },


    {
        gambar: "images/seragam/sd-2.jpg",

        kategori: "SD",

        judul: "Seragam SD 02",

        deskripsi:
            "Pilihan seragam untuk pelajar sekolah dasar."
    },


    {
        gambar: "images/seragam/smp-1.jpg",

        kategori: "SMP",

        judul: "Seragam SMP 01",

        deskripsi:
            "Inspirasi seragam sekolah untuk pelajar tingkat SMP."
    },


    {
        gambar: "images/seragam/smp-2.jpg",

        kategori: "SMP",

        judul: "Seragam SMP 02",

        deskripsi:
            "Pilihan seragam SMP dengan tampilan rapi dan nyaman."
    },


    {
        gambar: "images/seragam/sma-1.jpg",

        kategori: "SMA / SMK",

        judul: "Seragam SMA 01",

        deskripsi:
            "Inspirasi seragam untuk pelajar SMA dan SMK."
    },


    {
        gambar: "images/seragam/sma-2.jpg",

        kategori: "SMA / SMK",

        judul: "Seragam SMA / SMK 02",

        deskripsi:
            "Referensi seragam untuk pelajar tingkat SMA dan SMK."
    }

];



// ==================================================
// RANDOM SERAGAM
// ==================================================

function tampilkanSeragamAcak() {


    // Cari elemen di index.html

    const foto =
        document.getElementById("randomSeragam");


    const kategori =
        document.getElementById("randomKategori");


    const judul =
        document.getElementById("randomJudul");


    const deskripsi =
        document.getElementById("randomDeskripsi");



    // Jika elemen tidak ditemukan,
    // berarti kita bukan berada di halaman
    // yang membutuhkan random seragam.

    if (!foto) {

        return;

    }



    // Ambil index sebelumnya

    let indexSebelumnya =
        sessionStorage.getItem("seragamTerakhir");



    // Ubah menjadi angka

    if (indexSebelumnya !== null) {

        indexSebelumnya =
            parseInt(indexSebelumnya);

    }



    // Pilih random

    let randomIndex =
        Math.floor(
            Math.random() * daftarSeragam.length
        );



    // Jangan sampai foto yang sama
    // muncul dua kali berturut-turut.

    if (
        daftarSeragam.length > 1 &&
        randomIndex === indexSebelumnya
    ) {

        randomIndex =
            (randomIndex + 1) %
            daftarSeragam.length;

    }



    // Ambil data seragam

    const seragam =
        daftarSeragam[randomIndex];



    // Ganti gambar

    foto.src =
        seragam.gambar;


    foto.alt =
        seragam.judul;



    // Ganti kategori

    if (kategori) {

        kategori.textContent =
            seragam.kategori;

    }



    // Ganti judul

    if (judul) {

        judul.textContent =
            seragam.judul;

    }



    // Ganti deskripsi

    if (deskripsi) {

        deskripsi.textContent =
            seragam.deskripsi;

    }



    // Simpan foto terakhir

    sessionStorage.setItem(
        "seragamTerakhir",
        randomIndex
    );

}



// ==================================================
// ANIMASI FADE SAAT FOTO BERUBAH
// ==================================================

function animasiFotoSeragam() {


    const foto =
        document.getElementById("randomSeragam");


    if (!foto) {

        return;

    }



    foto.style.opacity = "0";


    setTimeout(function () {

        foto.style.opacity = "1";

    }, 150);

}



// ==================================================
// SAAT HALAMAN SELESAI DIMUAT
// ==================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


        // Tampilkan foto seragam random

        tampilkanSeragamAcak();



        // Tutup menu ketika link diklik

        const semuaLink =
            document.querySelectorAll(
                "#mainNav a"
            );


        semuaLink.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    const nav =
                        document.getElementById(
                            "mainNav"
                        );


                    if (nav) {

                        nav.classList.remove(
                            "show"
                        );

                    }

                }
            );

        });


    }
);



// ==================================================
// EFEK LOAD GAMBAR
// ==================================================

const fotoRandom =
    document.getElementById(
        "randomSeragam"
    );


if (fotoRandom) {


    fotoRandom.addEventListener(
        "load",
        function () {

            fotoRandom.style.transition =
                "opacity 0.3s ease";

            fotoRandom.style.opacity =
                "1";

        }
    );

}


// ==================================================
// FILTER AKSESORI (SD / SMP / SMA / SMK)
// ==================================================

function filterAksesoris(kategori, tombol) {


    // Ambil semua kartu aksesori

    const semuaKartu =
        document.querySelectorAll(".aksesoris-item");


    semuaKartu.forEach(function (kartu) {

        if (
            kategori === "all" ||
            kartu.classList.contains(kategori)
        ) {

            kartu.style.display = "";

        } else {

            kartu.style.display = "none";

        }

    });



    // Ubah tombol aktif

    const semuaTombol =
        document.querySelectorAll(".filter-btn");


    semuaTombol.forEach(function (btn) {

        btn.classList.remove("active");

    });


    if (tombol) {

        tombol.classList.add("active");

    }

}
