# 🗳️ Monitoring Real Count Pilkada 2024

Aplikasi web untuk memantau hasil perhitungan suara (real count) Pilkada 2024 secara real-time menggunakan Google Apps Script. Aplikasi ini mengambil data langsung dari API resmi dan menampilkannya dalam antarmuka yang mudah digunakan.

## ✨ Fitur Utama
- 🔍 Pencarian cepat berdasarkan nama paslon atau daerah
- 📊 Visualisasi progress perhitungan suara
- 🎨 Tampilan responsif dan modern menggunakan TailwindCSS
- 🚀 Performa cepat dengan sistem caching
- 📱 Mendukung akses mobile dan desktop

## 🛠️ Teknologi yang Digunakan
- Google Apps Script
- HTML/CSS/JavaScript
- TailwindCSS
- API Real Count KPU

## 📦 Cara Instalasi
1. Buka [Google Apps Script](https://script.google.com)
2. Buat project baru
3. Buat dua file:
   - `Code.gs`: Copy paste kode dari file Code.gs
   - `Index.html`: Copy paste kode dari file Index.html
4. Simpan project
5. Deploy sebagai web app

## 🚀 Deployment
1. Klik tombol "Deploy" > "New deployment"
2. Pilih "Web app"
3. Isi informasi yang diperlukan:
   - Description: "Monitoring Pilkada 2024"
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Klik "Deploy"

## 📝 Konfigurasi
Aplikasi ini menggunakan beberapa endpoint API:
- Data Wilayah: `sirekappilkada-obj-data.kpu.go.id`
- Data Paslon: `sirekappilkada-obj-data.kpu.go.id`
- Data Hasil: `sirekappilkada-obj-data.kpu.go.id`

## 👥 Kontribusi
Kontribusi selalu diterima! Silakan buat pull request atau buka issue untuk perbaikan atau penambahan fitur.

## 📄 Lisensi
MIT License - Silakan gunakan dan modifikasi sesuai kebutuhan

## 🤝 Credit
Dibuat dengan ❤️ untuk Indonesia
