import { useState } from "react";
import { useTranslation } from "react-i18next";

import Breadcrumb from "../Components/Breadcrumb";
import ShareModal from "../Components/ShareModal";
import ContentInfoBar from "../Components/ContentInfoBar";

import DataStudentList from "../Data/DataStudentList";

const StudentList = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  // state modal
  const [showShare, setShowShare] = useState(false);

  return (
    <div className="flex flex-col w-full min-h-screen px-5 md:px-10 lg:px-20 gap-10 pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[
          { label: t("home"), href: "/" },
          { label: DataStudentList.title[lang] },
        ]}
      />

      {/* Content */}
      <div className="flex flex-col w-full h-full max-w-5xl mx-auto items-center gap-6">
        {/* Title */}
        <h1 className="text-title font-bold text-primary">
          {DataStudentList.title[lang]}
        </h1>

        {/* Tabel per kelas */}
        <div className="flex flex-col w-full gap-10 overflow-x-auto">
          {DataStudentList.tables.map((table, idx) => (
            <div key={idx} className="flex flex-col w-full gap-4">
              <h2 className="text-subtitle text-primary font-semibold text-left">
                {table.class[lang]}
              </h2>

              <div className="overflow-x-auto w-full">
                <table className="w-full">
                  {/* Header */}
                  <thead className="bg-[var(--background_surface)] text-subtitle text-center">
                    <tr>
                      <th className="border w-2/5 py-4">{t("class")}</th>
                      <th className="border w-1/5 py-4">{t("man")}</th>
                      <th className="border w-1/5 py-4">{t("woman")}</th>
                      <th className="border w-1/5 py-4">{t("total")}</th>
                    </tr>
                  </thead>

                  {/* Body */}
                  <tbody className="text-paragraph text-center">
                    {table.data.map((row, i) => {
                      // penentuan baris yang diberi warna (total)
                      const isTotalRow =
                        row.class.id.includes("Jumlah") ||
                        row.class.en.includes("Total");
                      return (
                        <tr
                          key={i}
                          className={`border hover:bg-[var(--background_surface_hover)]
                            ${
                              isTotalRow
                                ? "bg-[var(--background_surface)] font-semibold"
                                : ""
                            }
                          `}
                        >
                          <td className="border py-4">{row.class[lang]}</td>
                          <td className="border py-4">{row.man}</td>
                          <td className="border py-4">{row.wanita}</td>
                          <td className="border py-4">{row.total}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Info Meta + Share */}
        <ContentInfoBar
          author={DataStudentList.author}
          date={DataStudentList.date}
          onShare={() => setShowShare(true)}
          className="border-t border-[var(--border_default)]"
        />
      </div>

      {/* Modal Share */}
      <ShareModal show={showShare} onClose={() => setShowShare(false)} />
    </div>
  );
};

export default StudentList;
