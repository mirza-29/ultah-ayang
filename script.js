// Amplop
const amplop = document.querySelector(".amplop");
const musik = document.getElementById("musik");
const btnLanjut = document.getElementById("btnLanjut");
const btnKembali = document.getElementById("btnKembali");
const halaman1 = document.getElementById("halaman1");
const halaman2 = document.getElementById("halaman2");
const utama = document.getElementById("utama");
const halaman3 = document.getElementById("halaman3");
const btnKeBuku = document.getElementById("btnKeBuku");
const btnKembali2 = document.getElementById("btnKembali2");
const pages = document.querySelectorAll(".page");
  let currentPage = 0;

const nextBtn = document.getElementById("nextPage");
const prevBtn = document.getElementById("prevPage");

const cards = document.querySelectorAll('.card');

// Klik amplop buka surat
amplop.addEventListener("click", () => {
  amplop.classList.toggle("buka");
  musik.play(); // mulai musik saat amplop dibuka
});

// Fungsi bantu untuk transisi lembut
function tampilHalaman(halamanTampil, halamanSembunyi, cssFile) {
  halamanSembunyi.classList.remove("tampil"); // hilangkan halaman lama
  setTimeout(() => {
    halamanSembunyi.style.display = "none";
    halamanTampil.style.display = "flex";
    styleUtama.href = cssFile;
    setTimeout(() => halamanTampil.classList.add("tampil"), 100); // munculkan lembut
  }, 600); // tunggu efek fade-out selesai
}

// Klik tombol lanjut
btnLanjut.addEventListener("click", () => {
  halaman1.style.display = "none";
  halaman2.style.display = "flex";

  utama.href="halaman2.css";
});


// Ke Halaman Buku
btnKeBuku.addEventListener("click", () => {
  halaman2.style.display = "none";
  halaman3.style.display = "flex";

  utama.href="halaman3.css";
});

  function showPage(index) {
    pages.forEach((page, i) => {
      page.style.display = i === index ? "block" : "none";
    });
  }

  nextBtn.addEventListener("click", () => {
    currentPage = (currentPage + 1) % pages.length;
    showPage(currentPage);
  });

  prevBtn.addEventListener("click", () => {
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    showPage(currentPage);
  });

  // tampilkan halaman pertama saat awal
  showPage(currentPage);

    // Untuk setiap kartu, pasang event listener
cards.forEach(card => {
  card.addEventListener('click', () => {
    if (card.classList.contains('aktif')) {
      card.classList.remove('aktif');
    } else {
      cards.forEach(c => c.classList.remove('aktif'));
      card.classList.add('aktif');
    }
  });
});
