// bot-calo.js - VERSI DEBUG
const SERVER_URL = 'http://localhost:3000/orders';
const TOTAL_REQUESTS = 10; // Kita coba 5 dulu biar log-nya terbaca

// Data order
const orderData = {
  eventId: 8, // <--- KEMUNGKINAN PENYEBABNYA DI SINI (ID Event salah)
  quantity: 1,
  userId: 'aimanrifa',
};

async function serbuTiket() {
  console.log(`🚀 MEMULAI TEST DIAGNOSA...`);

  for (let i = 0; i < TOTAL_REQUESTS; i++) {
    try {
      const res = await fetch(SERVER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      if (res.ok) {
        console.log(`✅ Bot #${i + 1}: SUKSES Masuk Antrian`);
      } else {
        // INI PENTING: Kita baca pesan error dari server NestJS
        const errorText = await res.text();
        console.log(
          `❌ Bot #${i + 1} DITOLAK: Status ${res.status} | Pesan: ${errorText}`,
        );
      }
    } catch (err) {
      console.log(`💀 Error Koneksi: ${err.message}`);
    }
  }
}

serbuTiket();
