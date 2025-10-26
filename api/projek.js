export default function handler(req, res) {
  const projek = [
    {
      nama: "Website Portfolio",
      deskripsi: "Website pribadi untuk menampilkan profil dan proyek saya."
    },
    {
      nama: "Aplikasi To-Do List",
      deskripsi: "Aplikasi manajemen tugas sederhana berbasis web."
    },
    {
      nama: "Desain UI Dashboard",
      deskripsi: "Konsep desain antarmuka dashboard admin dengan Figma."
    }
  ];

  res.status(200).json(projek);
}
