NUSANTARA EXPLORER NGAWI — VERSI REVISI

Isi folder:
- index.html          Struktur tampilan website
- style.css           Gaya dan layout
- tailwind.config.js  Konfigurasi warna/tema Tailwind
- app.js              Materi 9 situs, kuis, timer, profil, karakter, animasi, dan logika game

Cara menjalankan:
1. Simpan seluruh file dalam satu folder yang sama.
2. Buka index.html melalui browser.
3. Koneksi internet diperlukan untuk Tailwind CDN, Google Fonts, Font Awesome, dan pustaka animasi yang dipakai.

Revisi:
- Materi diperluas mengikuti materi yang dikirim pengguna untuk 9 situs.
- Tiap situs memiliki 5 soal. Minimal 4 jawaban benar untuk lulus; jika gagal, pemain dapat mengulang kuis situs tersebut.
- Timer 25 detik per soal dan efek suara dipertahankan.
- Foto situs bisa ditambahkan melalui tombol “Tambah / Ganti Foto” pada materi. Foto disimpan di localStorage browser pada perangkat tersebut.
- Profil nama dan pilihan karakter dipertahankan.
- Posisi node dan animasi karakter menggunakan jalur SVG yang sama; label node dibuat selang-seling agar lebih mudah dibaca.

Catatan materi:
- Bagian yang di dalam kiriman berjudul “Masjid Baiturrahman Ngronggi” berisi penjelasan tentang Kepatihan Ngawi. Nama level diselaraskan menjadi “Kepatihan Ngawi (Eks-Rumah Kepatihan)” agar judul sesuai dengan isi yang diberikan.
- “Masjid Pathok Nagara Ad-Darajat Babadan” dipertahankan berdasarkan materi yang dikirim; lokasi/keterkaitannya dengan daftar situs Ngawi sebaiknya diperiksa kembali sebelum publikasi.
- Peta merupakan peta jalur petualangan skematis, bukan peta koordinat geografis resmi.


FOTO SITUS
Semua foto dari pengguna disimpan di folder images. Foto bawaan dihubungkan melalui properti defaultImg pada data tiap situs di app.js. Nama file foto:
1. images/museum-trinil.jfif
2. images/situs-reco-banteng.jfif
3. images/situs-selopinanjer.webp
4. images/arca-ganesha-pucangan-nandi-ngrambe.jfif
5. images/masjid-agung-baiturrahman-ngawi.jfif
6. images/eks-rumah-kepatihan-ngawi.jpg
7. images/masjid-pathok-nagara-babadan.jfif
8. images/masjid-miftahul-huda-al-hajar.jfif
9. images/benteng-van-den-bosch.jpg

Untuk mengganti foto, ganti file gambar di folder images dengan nama dan ekstensi yang sama, atau ubah defaultImg di app.js.
