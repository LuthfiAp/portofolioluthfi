export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { nama, email, pesan } = req.body;

      if (!nama || !email || !pesan) {
        return res.status(400).json({ status: "Semua kolom harus diisi!" });
      }

      // log pesan ke console vercel (bisa dilihat di dashboard -> Functions logs)
      console.log("Pesan baru:", { nama, email, pesan });

      return res.status(200).json({ status: "Pesan berhasil dikirim!" });
    } catch (error) {
      console.error("Error server:", error);
      return res.status(500).json({ status: "Terjadi kesalahan server!" });
    }
  } else {
    res.status(405).json({ status: "Metode tidak diizinkan!" });
  }
}
