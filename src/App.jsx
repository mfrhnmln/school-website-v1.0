// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./UserLayout";
import ScrollToHash from "./Function/ScrollToHash";
import ScrollToTop from "./Function/ScrollToTop";

// dashboard
import ComponentsHome from "./Pages/Dashboard/ComponentsHome";

// profil sekolah
import Logo from "./Pages/Logo";
import VisiMisi from "./Pages/VisiMisi";
import Adiwiyata from "./Pages/Adiwiyata";
import SchoolSlogan from "./Pages/SchoolSlogan";
import SchoolHistory from "./Pages/SchoolHistory";
import SchoolIdentity from "./Pages/SchoolIdentity";
import PrincipalsSpeech from "./Pages/PrincipalsSpeech";

import MpkStructure from "./Pages/Structure/StructureMpk";
import StructureOsis from "./Pages/Structure/StructureOsis";
import StructureSchool from "./Pages/Structure/StructureSchool";
import StructureCommittee from "./Pages/Structure/StructureCommittee";

import BestGraduate from "./Pages/BestGraduate/BestGraduate";
import DetailBestGraduate from "./Pages/BestGraduate/DetailBestGraduate";

import PageTeachersStaff from "./Pages/TeachersStaff/PageTeacherStaff";

// // berita
import News from "./Pages/News/News";
import DetailNews from "./Pages/News/pages/DetailNews";
import Agenda from "./Pages/News/Agenda";
import DetailAgenda from "./Pages/News/pages/DetailAgenda";
import AcademicAchievement from "./Pages/News/AcademicAchievement";
import DetailAcademicAchievement from "./Pages/News/pages/DetailAcademicAchievement";
import ExtracurricularAchievements from "./Pages/News/ExtracurricularAchievements";
import DetailExtracurricularAchievements from "./Pages/News/pages/DetailExtracurricularAchievements";

// // kurikulim
import LearningSchedule from "./Pages/LearningSchedule/LearningSchedule";
import AcademicCalendar from "./Pages/AcademicCalendar";

// // kesiswaan
import StudentList from "./Pages/StudentList";
import ExtracurricularSchedule from "./Pages/ExtracurricularSchedule";

//list dan Galeri ekstrakurikuler
import DetailExtracurricular from "./Pages/Extracurricular/DetailExtracurricular";

// // humas
import CommitteeCooperation from "./Pages/ProgramPage/CommitteeCollaboration";
import CommunityHealthCollaboration from "./Pages/ProgramPage/CommunityHealthCollaboration";

import Sarana from "./Pages/SaranaPrasarana/Sarana";
import Prasarana from "./Pages/SaranaPrasarana/Prasarana";
import HealthyCanteen from "./Pages/ProgramPage/HealthyCanteen";

// service area
import Library from "./Pages/Services/Library";
import Counseling from "./Pages/Services/Counseling";
import TataUsaha from "./Pages/Services/TataUsaha";
import SchoolMedicalRoom from "./Pages/Services/SchoolMedicalRoom";

// import Galeri from "./Pages/Galeri";

import Mading from "./Pages/Mading/Mading";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToHash />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Routes>
              <Route element={<UserLayout />}>
                <Route path="/" element={<ComponentsHome />} />
                {/* -------------------- profil -------------------- */}
                <Route
                  path="/sambutan-kepala-sekolah"
                  element={<PrincipalsSpeech />}
                />
                <Route path="/sejarah-sekolah" element={<SchoolHistory />} />
                <Route path="/identitas-sekolah" element={<SchoolIdentity />} />
                <Route path="/visi-&-misi" element={<VisiMisi />} />
                <Route path="/logo-sekolah" element={<Logo />} />
                <Route
                  path="/slogan-&-motto-sekolah"
                  element={<SchoolSlogan />}
                />
                <Route path="/adiwiyata" element={<Adiwiyata />} />

                {/* ------------- struktur organisasi ------------- */}
                <Route
                  path="/struktur/organisasi-sekolah"
                  element={<StructureSchool />}
                />
                <Route
                  path="/struktur/organisasi/komite-sekolah"
                  element={<StructureCommittee />}
                />
                <Route
                  path="/struktur/organisasi/osis"
                  element={<StructureOsis />}
                />
                <Route
                  path="/struktur/organisasi/mpk"
                  element={<MpkStructure />}
                />

                {/* --------------- guru dan staff --------------- */}
                <Route path="/pendidik" element={<PageTeachersStaff />} />
                <Route path="/tenaga-kependidikan" element={<PageTeachersStaff />} />

                {/* ----------------lulusan terbaik ---------------- */}
                <Route path="/lulusan" element={<BestGraduate />} />
                <Route
                  path="/detail/lulusan/:name"
                  element={<DetailBestGraduate />}
                />

                {/* --------------------- News --------------------- */}
                {/* berita */}
                <Route path="/berita" element={<News />} />
                <Route path="/berita/:slug" element={<DetailNews />} />

                {/* agenda */}
                <Route path="/agenda" element={<Agenda />} />
                <Route path="/agenda/:slug" element={<DetailAgenda />} />

                {/* prestasi akademik siswa/i */}
                <Route
                  path="/prestasi/akademik"
                  element={<AcademicAchievement />}
                />
                <Route
                  path="/prestasi/akademik/:slug"
                  element={<DetailAcademicAchievement />}
                />

                {/* prestasi ekstrakurikuler siswa/i */}
                <Route
                  path="/prestasi/ekstrakurikuler"
                  element={<ExtracurricularAchievements />}
                />
                <Route
                  path="/prestasi/ekstrakurikuler/:slug"
                  element={<DetailExtracurricularAchievements />}
                />

                {/* ------------------ Kurikulum ------------------ */}
                <Route
                  path="/jadwal/pembelajaran"
                  element={<LearningSchedule />}
                />
                <Route
                  path="/kalender-akademik"
                  element={<AcademicCalendar />}
                />

                {/* ------------------ Kesiswaan ------------------ */}
                <Route path="/daftar-murid" element={<StudentList />} />
                <Route
                  path="/jadwal/ekstrakurikuler"
                  element={<ExtracurricularSchedule />}
                />

                {/* ------------------ detail ektrakurikuler ------------------ */}
                <Route
                  path="/ekstrakurikuler/:slug"
                  element={<DetailExtracurricular />}
                />

                {/* ------------------- Kesiswaan ------------------- */}
                <Route
                  path="/kerjasama-komite-sekolah"
                  element={<CommitteeCooperation />}
                />
                <Route
                  path="/kerjasama-puskesmas"
                  element={<CommunityHealthCollaboration />}
                />

                {/* ---------------- sarana prasarana ---------------- */}
                <Route path="/sarana" element={<Sarana />} />
                <Route path="/prasarana" element={<Prasarana />} />
                <Route path="/kantin-sehat" element={<HealthyCanteen />} />

                {/* ---------------------- galeri ---------------------- */}
                {/* <Route path="/galeri" element={<Galeri />} /> */}

                {/* ---------------------- service ---------------------- */}
                <Route path="/tata-usaha" element={<TataUsaha />} />
                <Route path="/perpustakaan" element={<Library />} />
                <Route path="/bk" element={<Counseling />} />
                <Route path="/uks" element={<SchoolMedicalRoom />} />
              </Route>
              <Route path="/mading" element={<Mading />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
