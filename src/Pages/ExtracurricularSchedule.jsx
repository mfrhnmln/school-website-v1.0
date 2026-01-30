import { useState } from "react";
import { useTranslation } from "react-i18next";

import Breadcrumb from "../Components/Breadcrumb";
import ShareModal from "../Components/ShareModal";
import ContentInfoBar from "../Components/ContentInfoBar";

import DataExtracurricular from "../Data/DataExtracurricular";

const ExtracurricularSchedule = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  // state modal share
  const [showShare, setShowShare] = useState(false);

  // flatten jadwal
  const schedules = DataExtracurricular.items.flatMap((item) =>
    item.schedule.map((sch) => ({
      name: item.name[lang],
      day: sch.day[lang],
      schedule: sch.schedule,
    })),
  );

  return (
    <div className="flex flex-col w-full min-h-screen px-5 md:px-10 lg:px-20 gap-10 pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[
          { label: t("home"), href: "/" },
          { label: DataExtracurricular.title[lang] },
        ]}
      />

      {/* Content */}
      <div className="flex flex-col w-full h-full max-w-5xl mx-auto items-center gap-4">
        {/* Title */}
        <h1 className="text-title font-bold text-primary text-center mb-4">
          {DataExtracurricular.title[lang]}
        </h1>

        {/* Table */}
        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse">
            <thead className="bg-[var(--background_surface)] text-subtitle text-center">
              <tr>
                <th className="w-2/4 border p-4">{t("extracurricular")}</th>
                <th className="w-1/4 border p-4">{t("day")}</th>
                <th className="w-1/4 border p-4">{t("schedule")}</th>
              </tr>
            </thead>

            <tbody className="text-paragraph text-center">
              {schedules.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[var(--background_surface_hover)]"
                >
                  <td className="text-left border p-4">{row.name}</td>
                  <td className="border p-4">{row.day}</td>
                  <td className="border p-4">{row.schedule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Info Bar + Share */}
        <ContentInfoBar
          author={DataExtracurricular.author}
          date={DataExtracurricular.date}
          onShare={() => setShowShare(true)}
            className="border-t border-[var(--border_default)]"
        />
      </div>

      {/* Modal Share */}
      <ShareModal show={showShare} onClose={() => setShowShare(false)} />
    </div>
  );
};

export default ExtracurricularSchedule;
