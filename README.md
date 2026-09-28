# Landing Page Penjualan WiFi XL Satu Cilacap

Landing page modern, ultra cepat, responsif, dan siap konversi untuk penjualan paket internet rumah **XL Satu (FTTH Fiber & FWA 5G+)** area **Cilacap & Sekitarnya**.

- **Sales Agent:** Fadli XL Satu Cilacap
- **Nomor WhatsApp:** `0897-5905-946` (`+628975905946`)
- **Hosting Target:** GitHub Pages

---

## 🚀 Fitur Utama
1. **Hero Section:** Value proposition kuat, indikator status online, tombol WhatsApp langsung dan preview kecepatan 1 Gbps.
2. **Pilihan Paket Dinamis (Tabs FTTH vs FWA):** Menggunakan data terpisah di `src/data/packages.json`. Tombol otomatis mengarah ke WhatsApp dengan pesan pre-filled nama paket & harga.
3. **Form Cek Jangkauan / Coverage:** Calon pelanggan dapat mengisi nama, nomor WA, alamat di Cilacap, dan pilihan paket yang otomatis terangkum ke WhatsApp Admin.
4. **Promo Bundling Aktif:** Menampilkan diskon bayar di muka (*Advance Payment*) s/d 40% & Pay 10 Get 12 dari `src/data/promos.json`.
5. **Interactive Chatbot Widget (Quick-Reply):** Floating bot di pojok kanan bawah untuk menjawab FAQ, cek harga, perbedaan FTTH vs FWA, dan eskalasi ke WhatsApp tanpa biaya API.
6. **FAQ Accordion & Syarat Ketentuan:** Transparansi informasi seputar kontrak 12 bulan, PPN 11%, dan instalasi teknisi gratis.
7. **Mobile Sticky WhatsApp Bar:** Tombol CTA mengambang di bawah layar HP agar konversi maksimal.

---

## 🛠️ Cara Menjalankan Secara Lokal

```bash
# 1. Install dependencies
npm install

# 2. Jalankan local development server
npm run dev

# 3. Build untuk produksi
npm run build
```

---

## 🌐 Cara Deploy ke GitHub Pages

Proyek ini sudah dilengkapi dengan **GitHub Actions Workflow** otomatis di `.github/workflows/deploy.yml` dan konfigurasi `base: './'` di `vite.config.js`.

1. Buat repository baru di GitHub (misal: `xlsatu-cilacap`).
2. Push seluruh file ke branch `main`:
   ```bash
   git init
   git add .
   git commit -m "feat: landing page Fadli XL Satu Cilacap"
   git branch -M main
   git remote add origin https://github.com/<USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```
3. Di repository GitHub Anda, buka **Settings** > **Pages**.
4. Di bagian **Build and deployment** > **Source**, pilih **GitHub Actions**.
5. Tunggu 1-2 menit hingga proses build selesai. Website Anda akan langsung aktif!
