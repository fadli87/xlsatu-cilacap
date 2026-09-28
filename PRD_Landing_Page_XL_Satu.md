# PRD — Landing Page Jualan Paket WiFi XL Satu
**Dikembangkan dengan:** Antigravity IDE ("Agy")
**Dibuat oleh:** Azhars Studio (Dazhars)
**Versi:** 1.0 — Draft

---

## 1. Latar Belakang & Tujuan

Saat ini penjualan paket WiFi XL Satu (FTTH & FWA) dilakukan secara manual lewat chat/WhatsApp langsung ke calon pelanggan, khususnya di area Cilacap. Landing page ini dibuat untuk:

- Jadi **etalase digital** yang bisa dibagikan lewat WhatsApp, Instagram, Facebook, atau link bio — jadi calon pelanggan tidak perlu tanya-tanya manual dari nol.
- **Menyaring & memfilter minat** calon pelanggan sebelum masuk ke chat (sudah tahu paket, harga, dan estimasi kecepatan sebelum chat).
- Meningkatkan **konversi closing** dengan CTA yang jelas ke WhatsApp.
- Bisa dipakai berulang untuk promo-promo baru (tinggal update konten, tidak bikin ulang).

**Bukan tujuan proyek ini:** transaksi online / pembayaran otomatis, cek ketersediaan alamat secara real-time ke sistem XL (datanya tidak tersedia publik), atau CRM lengkap. Semua closing tetap manual lewat WhatsApp/telepon karena verifikasi coverage alamat wajib dilakukan manual (FTTH vs FWA vs tidak ada coverage).

---

## 2. Target Pengguna

| Persona | Kebutuhan |
|---|---|
| Calon pelanggan rumahan (klik dari WA/IG/FB ads) | Cepat tahu: harga, kecepatan, area coverage, cara daftar |
| Calon pelanggan yang sedang bandingkan provider | Perlu tabel perbandingan paket yang jelas & value proposition |
| Agen/Anda sendiri (DSA) | Butuh landing page yang mudah di-share, gampang diupdate saat ada promo baru |

---

## 3. Ruang Lingkup Produk yang Ditampilkan

Berdasarkan materi Training New Product Acquisition XL Home (Launch 19 Sept 2026), landing page perlu bisa menampilkan kombinasi produk berikut (bisa dipilih mana yang mau ditonjolkan sesuai area Cilacap):

### 3.1 Kategori Produk Utama
- **XL Satu FTTH** (Fiber) — 20 Mbps s/d 1 Gbps, coverage 126 kota/kab
- **XL Satu FWA Outdoor** — 50 & 100 Mbps, coverage "Road to 100 cities" (Cilacap sudah live per 22 Juni 2026)
- **XL Satu Air (FWA Indoor)** — kuota-based, plug & play, tanpa jaminan kecepatan

### 3.2 Skema Harga yang Perlu Ditampilkan
- **Paket Bulanan (Internet Only)** — mulai Rp185.000 (20 Mbps) s/d Rp899.000 (1 Gbps)
- **Advance Payment / Pay X Get Y** — bayar di muka 3-4 bulan, dapat diskon 30-40% + bonus OTT (Vidio, Catchplay+)
- **FMC (Internet + Kuota HP Sekeluarga)** — Starter/Smart/Family/Superuser, mulai Rp185.000
- **Combo Internet + TV** (khusus area FirstMedia) — Joy Value s/d Star Premium

> **Catatan penting untuk konten:** Harga & paket yang tampil di landing page harus disesuaikan dengan area Cilacap spesifik (FTTH vs FWA), karena availability produk tergantung coverage alamat. Sebaiknya landing page menampilkan **rentang harga umum** + CTA "Cek Ketersediaan di Alamat Kamu" yang mengarah ke WhatsApp, bukan janji harga pasti sebelum verifikasi.

### 3.3 Hal yang WAJIB disebutkan sebagai syarat (transparansi, hindari komplain)
- Minimum berlangganan 12 bulan, penalti Rp1.000.000 jika berhenti sebelum waktunya
- Harga belum termasuk PPN 11%
- Instalasi oleh teknisi (FTTH/FWA Outdoor) vs self-install (FWA Indoor)
- FUP untuk FWA Outdoor (1.024 GB/periode tagihan)

---

## 4. Struktur Halaman (Sitemap Single-Page)

Direkomendasikan **one-page landing page** dengan smooth-scroll anchor (lebih cepat load, lebih gampang dishare per-section), bukan multi-halaman.

```
1. Hero Section
2. Kenapa Pilih XL Satu (Value Proposition)
3. Pilihan Paket (Pricing Cards / Tabs: FTTH | FWA)
4. Cek Coverage / Area Layanan
5. Promo Aktif (Advance Payment / Bundling)
6. Cara Berlangganan (3-4 langkah)
7. Testimoni / Bukti Sosial (opsional, isi belakangan)
8. FAQ
9. Footer + CTA WhatsApp Sticky
```

### 4.1 Detail per Section

**1. Hero Section**
- Headline kuat: fokus ke masalah (internet lemot/lambat di rumah) → solusi
- Sub-headline: sebut kecepatan & harga mulai dari (Rp185rb/bulan)
- CTA utama: tombol besar "Chat WhatsApp Sekarang" + tombol sekunder "Lihat Paket"
- Visual: ilustrasi rumah dengan WiFi kuat / device modem XL Satu

**2. Kenapa Pilih XL Satu**
- 3-4 poin ringkas: jaringan Ultra 5G+/Fiber, coverage luas, harga transparan, instalasi cepat
- Bisa pakai icon + angka (mis. "126 Kota Coverage FTTH", "~5.5 Juta Homepass")

**3. Pilihan Paket**
- Tab/toggle: **FTTH** vs **FWA**
- Tiap paket ditampilkan sebagai card: nama paket, kecepatan, harga/bulan, badge "Gratis Instalasi" bila berlaku
- CTA per card: "Pilih Paket Ini" → buka WhatsApp dengan pesan pre-filled (nama paket sudah terisi otomatis)

**4. Cek Coverage / Area Layanan**
- Karena availability tergantung alamat (FTTH vs FWA vs tidak ada), section ini penting untuk ekspektasi
- Bentuk sederhana: form singkat (Nama, No. HP, Alamat/Kecamatan) → submit → notifikasi WhatsApp ke Anda (bukan cek otomatis ke sistem XL)
- Alternatif murah: langsung tombol "Cek Ketersediaan via WhatsApp"

**5. Promo Aktif**
- Section ini didesain **mudah diupdate** (idealnya dari 1 file config/CMS ringan) karena promo XL sering berubah per periode (Pay 3 Get 4, Pay 10 Get 12, dst)
- Tampilkan harga coret (harga normal) vs harga promo + badge hemat %

**6. Cara Berlangganan**
- Step 1: Chat/isi form → Step 2: Cek coverage → Step 3: Instalasi oleh teknisi → Step 4: Aktif & nikmati internet
- Gunakan format numbered steps dengan icon

**7. Testimoni**
- Placeholder dulu, isi setelah ada pelanggan yang bersedia direview (foto/nama boleh disamarkan)

**8. FAQ**
- Minimal 6-8 pertanyaan: "Apa bedanya FTTH dan FWA?", "Kalau berhenti sebelum 12 bulan gimana?", "Ada biaya instalasi?", "Bagaimana proses pemasangan?", dll — diambil dari syarat & ketentuan asli XL Satu

**9. Footer**
- Kontak (nomor WA, area layanan: Cilacap & sekitarnya)
- Sticky floating button WhatsApp di semua device (terutama mobile)

**10. Chat Bot Widget (floating, muncul di semua section)**
Lihat detail lengkap di Bagian 5.1 di bawah.

---

## 5. Fitur Fungsional

| Fitur | Prioritas | Catatan |
|---|---|---|
| CTA WhatsApp dengan pesan pre-filled per paket | Must have | `wa.me/<nomor>?text=...` dengan nama paket otomatis terisi |
| Tabs/toggle FTTH vs FWA | Must have | Agar konten tidak menumpuk di satu scroll panjang |
| Chat bot widget (FAQ otomatis) | Must have | Lihat detail di 5.1 |
| Form cek coverage (kirim ke WA/email) | Should have | Bisa pakai layanan gratis (Formspree/WhatsApp API sederhana) tanpa backend rumit |
| Sticky WA button mobile | Must have | Konversi mobile jauh lebih tinggi kalau CTA selalu terlihat |
| Section promo mudah diedit | Should have | Simpan data paket/harga di 1 file JS/JSON terpisah, bukan hardcode di HTML, biar gampang update tiap ada promo baru dari XL |
| Mobile-first & responsive | Must have | Mayoritas traffic dari HP, apalagi share via WA/IG |
| Loading cepat (< 3 detik) | Must have | Banyak calon pelanggan cek dari koneksi HP terbatas |
| SEO dasar (title, meta description, OG image untuk share link) | Should have | Supaya preview link bagus saat dishare ke grup WA/status |
| Analytics sederhana (klik tombol WA, scroll depth) | Nice to have | Untuk tahu section mana yang paling menarik minat |

### 5.1 Chat Bot Widget — Spesifikasi

**Tujuan:** Menjawab pertanyaan umum calon pelanggan (harga, kecepatan, syarat, area coverage) secara instan di landing page itu sendiri, tanpa mereka harus menunggu balasan WhatsApp manual — lalu mendorong yang serius untuk lanjut ke WhatsApp buat closing.

**Bentuk:** Floating chat bubble di pojok kanan bawah (berdampingan dengan tombol WhatsApp, tapi fungsi beda — bot untuk tanya-jawab cepat, WA untuk closing/verifikasi coverage).

**Level 1 — Rule-based / Quick Reply (rekomendasi untuk v1, cepat & gratis)**
- Bot berbasis pilihan tombol, bukan free-text: "Tanya Harga Paket", "Apa itu FTTH vs FWA?", "Cek Area Cilacap", "Syarat Berlangganan", "Ngobrol dengan Admin"
- Semua jawaban diambil dari data statis (bisa file yang sama dengan `packages.json` + FAQ), jadi tidak butuh API/biaya AI sama sekali
- Tombol terakhir ("Ngobrol dengan Admin") langsung membuka WhatsApp
- **Kelebihan:** gratis, instan dibangun, tidak ada risiko jawaban ngawur
- **Kekurangan:** tidak bisa jawab pertanyaan bebas di luar skrip

**Level 2 — AI-powered (opsional, upgrade setelah v1 jalan)**
- Pakai Google AI Studio (Gemini API) — sama dengan provider yang sudah dipakai di setup Hermes Agent, jadi tidak perlu subscription baru
- Bot diberi "pengetahuan" lewat system prompt berisi data paket, harga, syarat & ketentuan asli XL Satu (supaya tidak mengarang harga)
- Wajib ada **guardrail**: kalau user tanya di luar topik WiFi/XL Satu, atau minta info yang butuh cek alamat spesifik, bot diarahkan jawab "coba tanya admin langsung" + tombol WA — jangan biarkan AI menjanjikan harga/coverage pasti karena itu bisa beda tiap alamat
- Biaya: relatif kecil (model flash), tapi tetap ada biaya per-penggunaan dibanding Level 1 yang gratis total

**Rekomendasi:** mulai dari Level 1 dulu supaya landing page bisa cepat live dan gratis dijalankan, baru upgrade ke Level 2 kalau traffic sudah cukup ramai dan butuh menjawab pertanyaan yang lebih variatif. Ini juga bisa nyambung ke rencana proyek terpisah "AI Agent Jualan WiFi" (untuk WhatsApp/IG/FB) — kalau nanti dua-duanya pakai basis pengetahuan yang sama, lebih hemat kalau datanya disatukan dari awal.

---

## 6. Rekomendasi Teknis (untuk dikerjakan Agy/Antigravity IDE)

Karena ini landing page single-page tanpa kebutuhan backend kompleks, rekomendasi stack yang ringan dan cepat dikerjakan:

- **Frontend:** HTML + Tailwind CSS (atau Next.js static export bila ingin lebih terstruktur & mudah maintenance jangka panjang)
- **Data paket/harga:** disimpan di 1 file `data/packages.json` — biar update promo tidak perlu sentuh kode utama
- **Hosting:** Vercel/Netlify (gratis, deploy otomatis dari GitHub) — cocok untuk static site
- **Domain:** disarankan custom domain pendek (mis. `xlsatucilacap.id` atau subdomain dari brand Azhars Studio) untuk kredibilitas
- **Form coverage check:** Formspree/Web3Forms (gratis, tanpa backend) yang forward ke email/WA Anda
- **Icon set:** Lucide/Heroicons agar konsisten dan ringan

---

## 7. Konten yang Perlu Disiapkan Sebelum Development

Supaya Agy bisa langsung eksekusi tanpa nunggu-nunggu, siapkan dulu:

1. Logo/branding (Azhars Studio / nama brand landing page)
2. Nomor WhatsApp resmi untuk CTA
3. Daftar paket final yang mau ditonjolkan (FTTH saja / FWA saja / keduanya) — sesuaikan dengan yang paling relevan untuk area Cilacap
4. Foto/gambar pendukung (modem, teknisi instalasi, atau ilustrasi rumah) — boleh pakai stok gratis dulu
5. Teks testimoni (kalau sudah ada) atau kosongkan dulu sectionnya
6. Warna brand (disarankan tetap dekat dengan identitas XLSMART: merah-magenta-biru, tapi dengan sentuhan gaya Azhars Studio sendiri biar tidak terkesan situs resmi XL)

---

## 8. Metrik Keberhasilan (KPI)

- Jumlah klik tombol "Chat WhatsApp" per minggu
- Jumlah submit form cek coverage
- Rasio klik-ke-closing (dari data manual di WA)
- Waktu load halaman < 3 detik (Google PageSpeed)

---

## 9. Di Luar Cakupan (Out of Scope) v1

- Pembayaran online / e-commerce
- Cek real-time coverage otomatis ke sistem internal XL
- Login pelanggan / dashboard akun
- Chat bot free-text tanpa batas topik (v1 dibatasi quick-reply/rule-based dulu, lihat 5.1)

---

## 10. Roadmap Singkat

| Tahap | Output |
|---|---|
| 1. Setup & struktur halaman | Skeleton HTML/Tailwind semua section |
| 2. Isi konten & data paket | packages.json + copywriting tiap section |
| 3. Styling & responsive | Desain final, mobile-first |
| 4. Integrasi CTA WA & form | wa.me link + form coverage |
| 5. Chat bot widget (Level 1 rule-based) | Floating widget quick-reply + handoff ke WA |
| 6. Testing & deploy | Cek di HP, deploy ke Vercel/Netlify + domain |
| 7. (Opsional) Analytics & SEO polish | GA4/Meta Pixel dasar, OG image |
| 8. (Opsional, upgrade lanjutan) Chat bot Level 2 AI-powered | Integrasi Gemini API + guardrail |

---

## Lampiran A — Skrip Chat Bot Widget (Level 1, Rule-Based)

Skrip ini siap dipakai langsung oleh Agy sebagai isi data bot (misal `data/chatbot.json`). Nada bicara: ramah, santai, to the point khas admin sales — bukan bahasa formal korporat.

### A.1 Pesan Pembuka (muncul otomatis saat widget dibuka)

> 👋 Halo! Ada yang bisa dibantu soal WiFi XL Satu?
> Pilih salah satu di bawah ini, atau langsung chat admin kalau mau tanya-tanya lebih detail.

**Menu utama:**
1. 💰 Cek Harga Paket
2. 📶 FTTH vs FWA, Apa Bedanya?
3. 📍 Cek Area Cilacap
4. 🎁 Lagi Ada Promo Nggak?
5. 📋 Syarat & Ketentuan
6. 💬 Ngobrol dengan Admin

---

### A.2 Menu 1 — 💰 Cek Harga Paket

> Nih kisaran harga paket WiFi XL Satu (belum termasuk PPN 11%):
>
> **FTTH (Fiber):**
> • 20 Mbps — Rp185.000/bulan
> • 100 Mbps — Rp229.000/bulan
> • 250 Mbps — Rp229.000/bulan (upgrade dari 100 Mbps)
> • 300 Mbps — Rp239.000/bulan
> • 500 Mbps — Rp399.000/bulan
> • 1 Gbps — Rp899.000/bulan
>
> **FWA Outdoor:**
> • 100 Mbps — Rp219.000/bulan
>
> ⚠️ Harga & ketersediaan paket bisa beda tergantung alamat kamu (FTTH atau FWA). Biar pasti, cek dulu ke admin ya.

**Tombol lanjutan:** [Cek Harga di Alamat Saya → buka WA] · [Kembali ke Menu]

---

### A.3 Menu 2 — 📶 FTTH vs FWA, Apa Bedanya?

> Gampangnya gini:
>
> **🔌 FTTH (Fiber)** — pakai kabel fiber optik, kecepatan stabil 20 Mbps–1 Gbps, dipasang teknisi langsung ke rumah. Cocok buat yang butuh internet ngebut & stabil.
>
> **📡 FWA Outdoor** — pakai sinyal 5G+ (tanpa kabel fiber), kecepatan 50/100 Mbps, tetap dipasang teknisi tapi lebih fleksibel buat area yang belum ada kabel fiber. Ada batas wajar pemakaian (FUP) 1.024 GB/bulan.
>
> **📦 XL Satu Air (FWA Indoor)** — modem plug & play, tinggal colok sendiri, tanpa jaminan kecepatan tetap, cocok buat kebutuhan ringan.
>
> Paket yang tersedia di alamat kamu tergantung coverage — nggak semua area bisa pilih bebas.

**Tombol lanjutan:** [Cek Coverage Alamat Saya] · [Kembali ke Menu]

---

### A.4 Menu 3 — 📍 Cek Area Cilacap

> Untuk area Cilacap, admin perlu cek dulu titik alamat kamu buat tahu apakah kena FTTH, FWA, atau belum ada jangkauan sama sekali. Prosesnya cepat kok — tinggal kirim alamat/kecamatan ke admin.

**Tombol lanjutan:** [Isi Form Cek Coverage] · [Langsung Chat Admin] · [Kembali ke Menu]

---

### A.5 Menu 4 — 🎁 Lagi Ada Promo Nggak?

> Promo yang lagi jalan (cek tanggal berlaku ke admin karena bisa berubah):
>
> • **Bayar Langsung Hemat** — bayar 3-4 bulan di depan, hemat sampai 40%, plus bonus 3 bulan Vidio & Catchplay+
> • **Bayar 10 Dapat 12 Bulan** — langganan setahun, dapat bonus 2 bulan gratis
>
> Mau tahu detail promo yang cocok buat kebutuhan kamu?

**Tombol lanjutan:** [Tanya Promo ke Admin] · [Kembali ke Menu]

---

### A.6 Menu 5 — 📋 Syarat & Ketentuan

> Poin-poin penting sebelum daftar:
>
> • Minimal berlangganan 12 bulan
> • Kalau berhenti sebelum 12 bulan, ada penalti Rp1.000.000
> • Harga yang ditampilkan belum termasuk PPN 11%
> • Instalasi oleh teknisi resmi (FTTH/FWA Outdoor), atau pasang sendiri (FWA Indoor)
> • Pembayaran bulanan lewat myXL

**Tombol lanjutan:** [Ada Pertanyaan Lain] · [Kembali ke Menu]

---

### A.7 Menu 6 — 💬 Ngobrol dengan Admin

> Oke, langsung aja chat admin ya, biar bisa dibantu cek alamat & pilihan paket yang paling pas 👇

**Aksi:** buka `wa.me/<NOMOR_WA>?text=Halo%2C%20saya%20mau%20tanya%20paket%20WiFi%20XL%20Satu`

---

### A.8 Fallback (kalau bot tidak punya jawaban / user ketik bebas di Level 2 nanti)

> Wah, pertanyaan ini agak spesifik nih. Biar nggak salah info, mending langsung tanya admin ya — dijamin dibalas cepat kok 😊

**Tombol:** [Chat Admin Sekarang]

---

### A.9 Catatan Implementasi untuk Agy
- Semua harga & syarat di atas ambil dari materi resmi training XL Home (per 19 Sept 2026) — **wajib disinkronkan ulang** tiap ada update harga/promo dari XL, jangan biarkan basi.
- Simpan teks ini di `data/chatbot.json` terpisah dari komponen UI widget, biar gampang diedit tanpa sentuh kode.
- Struktur data disarankan: `{ id, message, buttons: [{ label, action: "goto" | "whatsapp" | "form", target }] }` supaya alur menu-ke-menu gampang di-maintain.

---

## Lampiran B — Pemetaan Icon & Ilustrasi per Section

**Sumber utama:** [Lucide](https://lucide.dev) (gratis, lisensi ISC, line-style, warna ikut `currentColor`).
**Cara pakai (tanpa download file):** `https://api.iconify.design/lucide/<nama-icon>.svg`
Contoh: `<img src="https://api.iconify.design/lucide/wifi.svg" width="24" height="24" alt="">`

> Catatan: Lucide sudah mengganti beberapa nama lama (`check-circle` → `circle-check`, `help-circle` → `circle-help`). Pakai nama baru di bawah ini. Kalau ada icon yang tidak muncul, cek nama terbarunya di lucide.dev.

### B.1 Icon per Section

| Section | Elemen | Nama icon Lucide |
|---|---|---|
| Hero | Ilustrasi utama / badge kecil | `house-wifi`, `wifi-high` |
| Hero | Tombol CTA "Lihat Paket" | `arrow-right` |
| Value Prop | Kecepatan | `gauge` |
| Value Prop | Jaringan Fiber / 5G+ | `zap` atau `signal` |
| Value Prop | Coverage luas | `map` |
| Value Prop | Harga transparan | `receipt` |
| Value Prop | Instalasi cepat oleh teknisi | `wrench` |
| Pilihan Paket | Tab FTTH | `cable` |
| Pilihan Paket | Tab FWA | `router` |
| Pilihan Paket | Badge "Gratis Instalasi" | `circle-check` |
| Pilihan Paket | Badge kecepatan upgrade | `rocket` |
| Pilihan Paket | Paket + TV (jika ditampilkan) | `tv` |
| Cek Coverage | Judul section / input alamat | `map-pin` |
| Cek Coverage | Kirim form | `send` |
| Promo | Judul / badge promo | `badge-percent` |
| Promo | Bonus OTT (Vidio, Catchplay+) | `gift` |
| Promo | Hemat / harga coret | `tag` |
| Cara Berlangganan | Langkah 1: Chat/isi form | `message-circle` |
| Cara Berlangganan | Langkah 2: Cek coverage | `map-pin` |
| Cara Berlangganan | Langkah 3: Instalasi teknisi | `wrench` |
| Cara Berlangganan | Langkah 4: Aktif | `wifi` |
| Syarat & Ketentuan | Poin syarat (minimal 12 bulan, PPN, dll.) | `circle-check`, `calendar-clock`, `file-text` |
| Syarat & Ketentuan | Peringatan penalti | `triangle-alert` |
| Testimoni | Kutipan | `quote`, `star` |
| FAQ | Toggle buka/tutup | `chevron-down` |
| FAQ | Judul pertanyaan | `circle-help` |
| Footer | Telepon / admin | `phone`, `headset` |
| Chat Bot | Bubble pembuka widget | `message-circle` |
| Chat Bot | Tutup widget | `x` |
| Chat Bot | Kirim | `send` |
| Chat Bot | Menu: Harga / FTTH vs FWA / Area / Promo / Syarat / Admin | `banknote` / `router` / `map-pin` / `gift` / `file-text` / `headset` |

### B.2 Icon Brand (WhatsApp, Instagram, Facebook)
Lucide tidak menyediakan logo brand. Pakai **Simple Icons** lewat Iconify:
- WhatsApp: `https://api.iconify.design/simple-icons/whatsapp.svg`
- Instagram: `https://api.iconify.design/simple-icons/instagram.svg`
- Facebook: `https://api.iconify.design/simple-icons/facebook.svg`

Tombol WhatsApp sticky sebaiknya pakai warna hijau WhatsApp (`#25D366`) supaya langsung dikenali.

### B.3 Ilustrasi Hero
- **Sumber:** Storyset (storyset.com) atau unDraw (undraw.co). Keduanya gratis dan warnanya bisa disesuaikan sebelum export.
- **Kata kunci pencarian:** "wifi", "internet", "router", "smart home", "connection".
- **Format:** SVG (ringan, tajam di semua layar). Cadangan: PNG.
- **Warna:** samakan dengan palet brand landing page (lihat Bagian 7, poin 6).
- **Penempatan:** satu ilustrasi di Hero, satu opsional di section Cara Berlangganan.
- **Ukuran:** tetap ringan (target < 100 KB per file) supaya load < 3 detik di HP.

### B.4 Aturan Pemakaian untuk Agy
1. Semua icon satu set (Lucide) agar tampilan konsisten. Jangan campur dengan set lain kecuali logo brand.
2. Ukuran standar: 24px untuk icon inline, 32–48px untuk icon fitur di kartu, `stroke-width` 2 (default).
3. Warna lewat CSS (`color` pada parent), jangan hardcode di file SVG.
4. Icon dekoratif pakai `alt=""`; icon yang berdiri sendiri (tombol tanpa teks, misalnya tutup widget) wajib ada `aria-label`.
5. Simpan daftar nama icon di satu file (misalnya `data/icons.json`) supaya gampang diganti tanpa membongkar komponen.
6. Untuk mode offline atau menghindari ketergantungan CDN, unduh SVG yang dipakai dari lucide.dev ke folder `assets/icons/`.
