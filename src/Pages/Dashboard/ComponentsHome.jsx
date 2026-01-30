import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import StatsSection from "./StatsSection";
import PrincipalsSpeechDashboard from "./PrincipalsSpeechDashboard";

import DataBestGraduate from "../../Data/DataBestGraduate";
import DataTeacher from "../../Data/DataTeacher";
import DataStaff from "../../Data/DataStaff";

import ComponentsContact from "../ComponentsContact";
import ComponentsNews from "../News/Components/ComponentsNews";
import BestGraduateContainer from "../BestGraduate/BestGraduateContainer";
import ComponentsTeachersStaff from "../TeachersStaff/ComponentsTeachersStaff";
import ComponentsExtracurricular from "../Extracurricular/ComponentsExtracurricular";
import ComponentsAcademicAchievement from "../News/Components/ComponentsAcademicAchievement";

export const ComponentsHome = () => {
  // Mengatur tampilan dashboard siang/malam
  const hour = new Date().getHours();
  const isDay = hour >= 6 && hour < 18;
  const imageSrc = isDay
    ? "/schoolAnimation/school-afternoon.png"
    : "/schoolAnimation/school-night.png";

  const { t } = useTranslation();

  // Data Lulusan terbaik
  const dataGraduates = DataBestGraduate;

  // Gabungkan data guru & staff
  const dataGuruStaff = [...DataTeacher.teachers, ...DataStaff.staff];

  return (
    <div className="flex flex-col w-full h-full mx-auto">
      {/* Image */}
      <img
        className="w-full h-screen object-cover object-top transition-opacity duration-5000 ease-in-out z-0"
        src={imageSrc}
        alt={isDay ? "dashboard siang" : "dashboard malam"}
      />

      {/* Statistics */}
      <div className="flex flex-col items-center justify-center py-10 sm:py-20 gap-10 bg-[var(--background_surface)]">
        <StatsSection />
      </div>

      {/* Principal's Speech */}
      <div className="flex max-w-7xl mx-auto items-center justify-center py-10 sm:py-20 gap-10">
        <PrincipalsSpeechDashboard />
      </div>

      {/* News */}
      <div className="flex flex-col items-center justify-center py-10 sm:py-20 gap-10 bg-[var(--background_surface)]">
        {/* title */}
        <ul className="flex flex-col items-center justify-center gap-2 mb-5">
          <h1 className="text-title font-bold text-secondary text-center">
            {t("news")}
          </h1>

          <li className="flex gap-2">
            <span
              className="block h-1 rounded-full"
              style={{
                width: "60px",
                backgroundColor: "var(--secondary)",
              }}
            />

            <span
              className="block h-1 rounded-full"
              style={{
                width: "60px",
                backgroundColor: "var(--secondary)",
              }}
            />
          </li>
        </ul>

        <ComponentsNews isDashboard={true} layout="grid" maxItems={6} />

        <Link
          to="/berita"
          className="px-6 py-2 rounded-md text-button font-semibold btn-secondary"
        >
          {t("see_all")} {t("news")}
        </Link>
      </div>

      {/* School Achievement */}
      <div className="flex flex-col items-center justify-center py-10 sm:py-20 gap-10">
        {/* title */}
        <ul className="flex flex-col items-center justify-center gap-2 mb-5">
          <h1 className="text-title font-bold text-primary text-center">
            {t("school_achievement")}
          </h1>

          <li className="flex gap-2">
            <span
              className="block h-1 rounded-full"
              style={{
                width: "60px",
                backgroundColor: "var(--primary)",
              }}
            />

            <span
              className="block h-1 rounded-full"
              style={{
                width: "60px",
                backgroundColor: "var(--primary)",
              }}
            />
          </li>
        </ul>

        <ComponentsAcademicAchievement
          isDashboard={true}
          layout="grid"
          maxItems={6}
        />

        <Link
          to="/prestasi/akademik"
          className="px-6 py-2 rounded-md text-button font-semibold btn-primary"
        >
          {t("see_all")} {t("school_achievement")}
        </Link>
      </div>

      {/* Extracurricular */}
      <div
        id="ekstrakulikuler"
        className="flex flex-col items-center justify-center py-10 sm:py-20 gap-10 bg-[var(--background_surface)]"
      >
        {/* title */}
        <ul className="flex flex-col items-center justify-center gap-2 mb-5">
          <h1 className="text-title font-bold text-secondary text-center">
            {t("extracurricular")}
          </h1>

          <li className="flex gap-2">
            <span
              className="block h-1 rounded-full"
              style={{
                width: "60px",
                backgroundColor: "var(--secondary)",
              }}
            />

            <span
              className="block h-1 rounded-full"
              style={{
                width: "60px",
                backgroundColor: "var(--secondary)",
              }}
            />
          </li>
        </ul>

        <ComponentsExtracurricular />
      </div>

      {/* Teacher & Staff */}
      <div
        id="teachersStaff"
        className="flex flex-col items-center justify-center py-10 sm:py-20 gap-10"
      >
        {/* title */}
        <ul className="flex flex-col items-center justify-center gap-2 mb-5">
          <h1 className="text-title font-bold text-primary text-center">
            {t("educator")} & {t("educational_staff")}
          </h1>

          <li className="flex gap-2">
            <span
              className="block h-1 rounded-full"
              style={{
                width: "60px",
                backgroundColor: "var(--primary)",
              }}
            />

            <span
              className="block h-1 rounded-full"
              style={{
                width: "60px",
                backgroundColor: "var(--primary)",
              }}
            />
          </li>
        </ul>

        <ComponentsTeachersStaff data={dataGuruStaff} isDashboard={true} />

        <li className="flex w-full items-center justify-center gap-5">
          <Link
            to="/pendidik"
            className="btn-primary w-48 p-4 rounded-md text-center font-semibold"
          >
            {t("educator")}
          </Link>

          <Link
            to="/tenaga-kependidikan"
            className="btn-primary w-48 p-4 rounded-md text-center font-semibold"
          >
            {t("educational_staff")}
          </Link>
        </li>
      </div>

      {/* Lulusan Terbaik */}
      <div
        id="lulusanterbaik"
        className="flex flex-col items-center justify-center py-10 sm:py-20 gap-10 bg-[var(--background_surface)]"
      >
        {/* title */}
        <ul className="flex flex-col items-center justify-center gap-2 mb-5">
          <h1 className="text-title font-bold text-secondary text-center">
            {t("best_graduate")}
          </h1>

          <li className="flex gap-2">
            <span
              className="block h-1 rounded-full"
              style={{
                width: "60px",
                backgroundColor: "var(--secondary)",
              }}
            />

            <span
              className="block h-1 rounded-full"
              style={{
                width: "60px",
                backgroundColor: "var(--secondary)",
              }}
            />
          </li>
        </ul>

        <BestGraduateContainer data={dataGraduates} variant="dashboard" />
      </div>

      {/* kontak */}
      <div className="flex flex-col items-center justify-center py-10 sm:py-20 gap-10">
        <ComponentsContact />
      </div>
    </div>
  );
};

export default ComponentsHome;
