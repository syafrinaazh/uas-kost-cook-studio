import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Konfigurasi Vite untuk proyek React
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Mengatur port agar aplikasi berjalan di localhost:3000
    open: true  // Membuka browser secara otomatis saat dijalankan
  }
})