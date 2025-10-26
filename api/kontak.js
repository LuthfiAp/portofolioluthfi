export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nama, email, pesan } = req.body;

    if (!nama || !email || !pesan) {
      return res.status(400).json({ status: "Semua kolom harus diisi!" });
    }

    console.log("Pesan baru diterima:", { nama, email, pesan });

    return res.status(200).json({ status: "Pesan berhasil dikirim!" });
  }

  res.status(405).json({ status: "Metode tidak diizinkan!" });
}
