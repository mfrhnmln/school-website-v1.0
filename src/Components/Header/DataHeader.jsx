const DataHeader = [
  {
    key: "menu.profile",
    path: "#",
    dropdown: [
      { key: "menu.principal_speech", path: "/sambutan-kepala-sekolah" },
      { key: "menu.history", path: "/sejarah-sekolah" },
      { key: "menu.identity", path: "/identitas-sekolah" },
      { key: "menu.vision_mission", path: "/visi-&-misi" },
      { key: "menu.logo", path: "/logo-sekolah" },
      { key: "menu.slogan", path: "/slogan-&-motto-sekolah" },
      { key: "menu.adiwiyata", path: "/adiwiyata" },
      {
        key: "menu.organization",
        path: "#",
        dropdown: [
          {
            key: "menu.organization_school",
            path: "/struktur/organisasi-sekolah",
          },
          {
            key: "menu.organization_committee",
            path: "/struktur/organisasi/komite-sekolah",
          },
          { key: "menu.organization_osis", path: "/struktur/organisasi/osis" },
          { key: "menu.organization_mpk", path: "/struktur/organisasi/mpk" },
        ],
      },
    ],
  },

  {
    key: "menu.news",
    path: "#",
    dropdown: [
      { key: "menu.school_news", path: "/berita" },
      { key: "menu.agenda", path: "/agenda" },
      { key: "menu.academic_achievement", path: "/prestasi/akademik" },
      {
        key: "menu.non_academic_achievement",
        path: "/prestasi/ekstrakurikuler",
      },
    ],
  },

  {
    key: "menu.curriculum",
    path: "#",
    dropdown: [
      { key: "menu.schedule", path: "/jadwal/pembelajaran" },
      { key: "menu.academic_calendar", path: "/kalender-akademik" },
      { key: "menu.best_graduate", path: "/#lulusanterbaik" },
      {
        key: "menu.educators_and_education",
        path: "#",
        dropdown: [
          {
            key: "menu.educator",
            path: "/pendidik",
          },
          {
            key: "menu.educational_staff",
            path: "/tenaga-kependidikan",
          },
        ],
      },
    ],
  },

  {
    key: "menu.student_affairs",
    path: "#",
    dropdown: [
      { key: "menu.students", path: "/daftar-murid" },
      { key: "menu.extracurricular", path: "/#ekstrakulikuler" },
      { key: "menu.extracurricular_schedule", path: "/jadwal/ekstrakurikuler" },
      { key: "menu.counseling", path: "/bk" },
    ],
  },

  {
    key: "menu.public_relations",
    path: "#",
    dropdown: [
      { key: "menu.partnership_committee", path: "/Kerjasama-Komite-Sekolah" },
      { key: "menu.partnership_health_center", path: "/Kerjasama-Puskesmas" },
    ],
  },

  {
    key: "menu.facilities",
    path: "#",
    dropdown: [
      { key: "menu.facility", path: "/sarana" },
      { key: "menu.infrastructure", path: "/prasarana" },
      { key: "menu.healthy_canteen", path: "/kantin-sehat" },
      { key: "menu.uks", path: "/uks" },
      { key: "menu.administration", path: "/tata-usaha" },
      { key: "menu.library", path: "/perpustakaan" },
      { key: "menu.digital_magazine", path: "/mading" },
      {
        key: "menu.e_library_1",
        path: "https://mfrhnmln.github.io/library-reactjs-template-1/",
        external: true,
      },
      {
        key: "menu.e_library_2",
        path: "https://mfrhnmln.github.io/library-reactjs-template-2/",
        external: true,
      },
    ],
  },

  { key: "menu.contact", path: "/#kontak", dropdown: [] },
];

export default DataHeader;
