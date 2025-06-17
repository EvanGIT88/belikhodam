# Belikhodam

Belikhodam adalah aplikasi berbasis Node.js yang memungkinkan pengguna untuk membeli dan mengecek informasi tentang khodam secara online. Aplikasi ini menggunakan Express.js untuk backend, Tailwind CSS untuk styling frontend, dan integrasi pembayaran melalui Midtrans.

## Fitur

* 🚀 Transaksi pembelian khodam secara online
* 🔍 Pengecekan informasi khodam
* 💳 Integrasi pembayaran dengan Midtrans
* 🎨 Styling modern dengan Tailwind CSS
* ⚙️ Bundling frontend dengan Webpack

## Instalasi

1. **Clone repository ini:**

   ```bash
   git clone https://github.com/username/belikhodam.git
   cd belikhodam
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Buat file .env:**

   ```
   MIDTRANS_SERVER_KEY=your_midtrans_server_key
   MIDTRANS_CLIENT_KEY=your_midtrans_client_key
   ```

4. **Jalankan Tailwind CSS dalam mode watch:**

   ```bash
   npm run tailwind
   ```

5. **Jalankan server:**

   ```bash
   node index.js
   ```

## Struktur Proyek

```
├── public/              # Berkas statis frontend
├── src/
│   ├── css/
│   │   ├── input.css    # File utama Tailwind
│   │   └── output.css   # Hasil kompilasi Tailwind
│   └── js/
│       └── index.js     # Entry point JS untuk Webpack
├── index.js             # Server Express utama
├── webpack.config.js    # Konfigurasi Webpack
├── tailwind.config.js   # Konfigurasi Tailwind
├── .env                 # Konfigurasi rahasia
├── package.json
└── README.md
```

## Build Production

Untuk mengkompilasi Tailwind CSS versi produksi:

```bash
npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --minify
```

## Lisensi

Proyek ini dilisensikan di bawah lisensi ISC.

## Author

Evan Fersadi

---

> Aplikasi ini dibuat untuk tujuan edukasi dan eksperimen pribadi. Gunakan dengan bijak.

