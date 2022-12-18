export const questions = [
  "Apakah kamu sering merasa sedih?",
  "Apakah kamu sering merasa pesimis?",
  "Apakah kamu sering merasa gagal atau tidak berguna?",
  "Apakah kamu sering kehilangan kenikmatan terhadap suatu hal?",
  "Apakah kamu sering merasa bersalah?",
  "Apakah kamu sering merasa sedang dihukum?",
  "Apakah kamu sering berfikir untuk bunuh diri?",
  "Apakah kamu sering merasa gelisah atau tidak tenang?",
  "Apakah kamu sering kehilangan ketertarikan terhadap suatu hal?",
  "Apakah kamu sering merasa ragu terhadap diri mu sendiri?",
  "Apakah kamu sering merasa kehilangan semangat dan energi?",
  "Apakah dalam beberapa hari terakhir kamu merasa sulit untuk bisa tidur?",
  "Apakah dalam beberapa hari terakhir kamu merasa tidak nafsu makan?",
  "Apakah kamu sering merasa sulit untuk berkonsentrasi?",
  "Apakah kamu sering merasa kelelahan?",
];

export const gejala = [
  "Sedih",
  "Pesimis",
  "Gagal atau tidak berguna",
  "Kehilangan kenikmatan terhadap suatu hal",
  "Bersalah",
  "Sedang dihukum",
  "Sering berfirik untuk bunuh diri",
  "Gelisah atau tidak tenang",
  "Sering kehilangan ketertarikan terhadap suatu hal",
  "Ragu terhadap diri mu sendiri",
  "Kehilangan semangat dan energi",
  "Sulit untuk bisa tidur",
  "Tidak nafsu makan",
  "Sulit untuk berkonsentrasi",
  "Kelelahan",
];

export const answers = [
  {
    label: "Mungkin Tidak",
    value: -0.4,
  },
  {
    label: "Tidak Yakin",
    value: 0,
  },
  {
    label: "Tidak Tahu",
    value: 0.2,
  },
  {
    label: "Sedikit Setuju",
    value: 0.4,
  },
  {
    label: "Cukup Setuju",
    value: 0.6,
  },
  {
    label: "Setuju",
    value: 0.8,
  },
  {
    label: "Sangat Setuju",
    value: 1,
  },
];

export const result = [
  {
    id: "R01",
    value: -0.2,
    label: "Tidak Depresi",
    recommendations:
      "Selamat kondisi kesehatan mental kamu sangat baik! Kamu tidak perlu melakukan tindakan lebih lanjut, tetap jaga kesehatan mental.",
  },
  {
    id: "R02",
    value: 0.4,
    label: "Depresi Ringan",
    recommendations:
      "Kamu perlu melakukan perawatan diri, seperti berolahraga, bermain, dan berkomunikasi dengan orang lain.",
  },
  {
    id: "R03",
    value: 0.6,
    label: "Depresi Sedang",
    recommendations:
      "Wah sepertinya depresi yang kamu alami mulai memuncak. Kurangi aktivitas yang terlalu berat dan beristirahatlah cukup, bila perlu lakukan konsultasi dengan psikolog yang kamu percaya.",
  },
  {
    id: "R04",
    value: 1,
    label: "Depresi Berat",
    recommendations:
      "Sepertinya kamu mengalami depresi berat dan memerlukan bantuan profesional, segera lakukan konsultasi dengan student service di kampus mu atau psikolog yang kamu percaya.",
  },
];

export const cfPakar = [1.0, 0.2, 0.8, 0.5, 0.4, 0.3, 0.8, 0.8, 1.0, 1.0, 0.3, 0.8, 1.0, 0.4, 0.2];
