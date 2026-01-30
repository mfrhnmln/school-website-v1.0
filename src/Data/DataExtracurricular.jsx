const DataExtracurricular = {
  title: {
    id: "Jadwal Ekstrakurikuler",
    en: "Extracurricular Schedule",
  },

  image: "/1.png",
  date: "17-09-2025",
  author: "Admin",

  items: [
    // osis
    {
      id: 1,
      name: {
        id: "Osis (Organisasi Siswa Intra Sekolah)",
        en: "Student Council",
      },
      slug: "osis",
      image: "/2.png",
      description: {
        id: "Kegiatan Osis (Organisasi Siswa Intra Sekolah) untuk membentuk karakter siswa.",
        en: "Student council activities to build leadership and character.",
      },
      moreImages: [
        "/1.png",
        "/3.png",
        "/5.png",
        "/7.png",
        "/2.png",
        "/4.png",
        "/6.png",
        "/8.png",
        "/1.png",
        "/3.png",
        "/5.png",
        "/7.png",
        "/2.png",
        "/4.png",
        "/6.png",
        "/8.png",
      ],
      schedule: [
        {
          day: { id: "Sabtu", en: "Saturday" },
          name: "Osis (Organisasi Siswa Intra Sekolah)",
          schedule: "08.00 - 10.00",
        },
      ],

      date: "17-09-2025",
      author: "Admin",
    },

    // PMR
    {
      id: 2,
      name: { id: "PMR (Palang Merah Remaja)", en: "Youth Red Cross" },
      slug: "pmr",
      image: "/3.png",
      description: {
        id: "PMR atau Palang Merah Remaja, membentuk kepedulian dan keterampilan medis dasar.",
        en: "Youth Red Cross fostering empathy and basic medical skills.",
      },

      moreImages: [
        "/2.png",
        "/4.png",
        "/6.png",
        "/8.png",
        "/1.png",
        "/3.png",
        "/5.png",
        "/7.png",
      ],

      schedule: [
        {
          day: { id: "Sabtu", en: "Saturday" },
          name: "PMR (Palang Merah Remaja)",
          schedule: "10.00 - 12.00",
        },
      ],

      date: "17-09-2025",
      author: "Admin",
    },

    // paskibra
    {
      id: 3,
      name: {
        id: "Paskibra (Pasukan Pengibar Bendera)",
        en: "Flag Raising Troop",
      },
      slug: "paskibra",
      image: "/4.png",
      description: {
        id: "Pasukan pengibar bendera, disiplin dan kepemimpinan.",
        en: "Flag-raising troop focusing on discipline and leadership.",
      },
      moreImages: [
        "/8.png",
        "/6.png",
        "/4.png",
        "/2.png",
        "/7.png",
        "/5.png",
        "/3.png",
        "/1.png",
      ],
      schedule: [
        {
          day: { id: "Sabtu", en: "Saturday" },
          name: "Paskibra (Pasukan Pengibar Bendera)",
          schedule: "13.00 - 15.00",
        },
      ],

      date: "17-09-2025",
      author: "Admin",
    },

    // rohis
    {
      id: 4,
      name: { id: "Rohis (Rohani Islam)", en: "Islamic Spiritual Club" },
      slug: "rohis",
      image: "/5.png",
      description: {
        id: "Rohani Islam untuk memperdalam nilai-nilai keislaman.",
        en: "Islamic spiritual club to deepen religious values.",
      },
      moreImages: [
        "/3.png",
        "/1.png",
        "/7.png",
        "/5.png",
        "/8.png",
        "/6.png",
        "/4.png",
        "/2.png",
      ],
      schedule: [
        {
          day: { id: "Sabtu", en: "Saturday" },
          name: "Rohis (Rohani Islam)",
          schedule: "15.30 - 17.00",
        },
      ],

      date: "17-09-2025",
      author: "Admin",
    },

    // pramuka
    {
      id: 5,
      name: { id: "Pramuka", en: "Scouting" },
      slug: "pramuka",
      image: "/6.png",
      description: {
        id: "Kegiatan kepramukaan untuk membentuk karakter siswa.",
        en: "Scouting activities to build students’ character.",
      },
      moreImages: [
        "/6.png",
        "/8.png",
        "/2.png",
        "/4.png",
        "/1.png",
        "/3.png",
        "/5.png",
        "/7.png",
      ],
      schedule: [
        {
          day: { id: "Sabtu", en: "Saturday" },
          name: "Pramuka",
          schedule: "07.30 - 09.30",
        },
      ],

      date: "17-09-2025",
      author: "Admin",
    },

    // futsal
    {
      id: 6,
      name: { id: "Futsal", en: "Futsal" },
      slug: "futsal",
      image: "/7.png",
      description: {
        id: "Ekstrakurikuler futsal untuk kekompakan dan stamina.",
        en: "Futsal extracurricular to build teamwork and stamina.",
      },
      moreImages: [
        "/5.png",
        "/7.png",
        "/1.png",
        "/3.png",
        "/8.png",
        "/6.png",
        "/4.png",
        "/2.png",
      ],
      schedule: [
        {
          day: { id: "Sabtu", en: "Saturday" },
          name: "Futsal",
          schedule: "09.30 - 11.00",
        },
      ],

      date: "17-09-2025",
      author: "Admin",
    },

    // basket
    {
      id: 7,
      name: { id: "Basket", en: "Basketball" },
      slug: "basket",
      image: "/8.png",
      description: {
        id: "Ekstrakurikuler basket untuk strategi dan skill fisik.",
        en: "Basketball extracurricular to develop strategy and physical skills.",
      },
      moreImages: [
        "/4.png",
        "/2.png",
        "/8.png",
        "/6.png",
        "/1.png",
        "/3.png",
        "/5.png",
        "/7.png",
      ],
      schedule: [
        {
          day: { id: "Sabtu", en: "Saturday" },
          name: "Basket",
          schedule: "11.00 - 12.30",
        },
      ],

      date: "17-09-2025",
      author: "Admin",
    },

    // badminton
    {
      id: 8,
      name: { id: "Badminton", en: "Badminton" },
      slug: "badminton",
      image: "/1.png",
      description: {
        id: "Olahraga bulu tangkis yang melatih kelincahan dan fokus.",
        en: "Badminton to train agility and concentration.",
      },
      moreImages: [
        "/7.png",
        "/5.png",
        "/3.png",
        "/1.png",
        "/8.png",
        "/6.png",
        "/4.png",
        "/2.png",
      ],
      schedule: [
        {
          day: { id: "Sabtu", en: "Saturday" },
          name: "Badminton",
          schedule: "13.00 - 14.30",
        },
      ],

      date: "17-09-2025",
      author: "Admin",
    },

    // voli
    {
      id: 9,
      name: { id: "Voli", en: "Volleyball" },
      slug: "voli",
      image: "/2.png",
      description: {
        id: "Ekstrakurikuler bola voli untuk melatih kerja sama tim.",
        en: "Volleyball extracurricular to train teamwork.",
      },
      moreImages: [
        "/2.png",
        "/4.png",
        "/6.png",
        "/8.png",
        "/1.png",
        "/3.png",
        "/5.png",
        "/7.png",
      ],
      schedule: [
        {
          day: { id: "Sabtu", en: "Saturday" },
          name: "Voli",
          schedule: "14.30 - 16.00",
        },
      ],
      date: "17-09-2025",
      author: "Admin",
    },

    // pencak silat
    {
      id: 10,
      name: { id: "Pencak Silat", en: "Pencak Silat" },
      slug: "pencak-silat",
      image: "/3.png",
      description: {
        id: "Ekstrakurikuler bela diri untuk melatih fisik dan mental.",
        en: "Pencak Silat extracurricular to train physical and mental strength.",
      },
      moreImages: [
        "/8.png",
        "/6.png",
        "/4.png",
        "/2.png",
        "/7.png",
        "/5.png",
        "/3.png",
        "/1.png",
      ],
      schedule: [
        {
          day: { id: "Sabtu", en: "Saturday" },
          name: "Pencak Silat",
          schedule: "16.00 - 17.30",
        },
      ],
      date: "17-09-2025",
      author: "Admin",
    },

    // angklung
    {
      id: 11,
      name: { id: "Angklung", en: "Angklung" },
      slug: "angklung",
      image: "/4.png",
      description: {
        id: "Ekstrakurikuler angklung untuk melestarikan budaya.",
        en: "Angklung extracurricular to preserve traditional culture.",
      },
      moreImages: [
        "/1.png",
        "/3.png",
        "/5.png",
        "/7.png",
        "/2.png",
        "/4.png",
        "/6.png",
        "/8.png",
      ],
      schedule: [
        {
          day: { id: "Sabtu", en: "Saturday" },
          name: "Angklung",
          schedule: "07.30 - 09.00",
        },
      ],
      date: "17-09-2025",
      author: "Admin",
    },

    // gamelan
    {
      id: 12,
      name: { id: "Gamelan", en: "Gamelan" },
      slug: "gamelan",
      image: "/5.png",
      description: {
        id: "Ekstrakurikuler gamelan untuk mengenal musik tradisional.",
        en: "Gamelan extracurricular to learn traditional music.",
      },
      moreImages: [
        "/6.png",
        "/8.png",
        "/2.png",
        "/4.png",
        "/1.png",
        "/3.png",
        "/5.png",
        "/7.png",
      ],
      schedule: [
        {
          day: { id: "Sabtu", en: "Saturday" },
          name: "Gamelan",
          schedule: "09.00 - 11.00",
        },
      ],
      date: "17-09-2025",
      author: "Admin",
    },
  ],
};

export default DataExtracurricular;
