import { useState } from "react";
import { useTranslation } from "react-i18next";

import Breadcrumb from "../Components/Breadcrumb";
import ShareModal from "../Components/ShareModal";
import ContentInfoBar from "../Components/ContentInfoBar";

import DataSchoolIdentity from "../Data/DataSchoolIdentity";

const SchoolIdentity = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  // state modal
  const [showShare, setShowShare] = useState(false);
  const infos = DataSchoolIdentity.tables[lang].flatMap((item) => item.data);

  return (
    <div className="flex flex-col w-full min-h-screen px-5 md:px-10 lg:px-20 gap-10 pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[
          { label: t("home"), href: "/" },
          { label: DataSchoolIdentity.title[lang] },
        ]}
      />

      {/* Content */}
      <div className="flex flex-col w-full h-full max-w-5xl mx-auto  items-center gap-2">
        {/* Judul Halaman */}
        <h1 className="text-title font-bold text-primary text-center mb-6">
          {DataSchoolIdentity.title[lang]}
        </h1>

        {/* Table Informasi */}
        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse">
            <tbody className="text-paragraph text-left">
              {infos.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[var(--background_surface_hover)]"
                >
                  <td className="border border-[var(--color_text_title)]/40 py-4 px-3 font-semibold w-1/3">
                    {row.field}
                  </td>
                  <td className="border border-[var(--color_text_title)]/40 py-4 px-3">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Informasi Halaman + Tombnol Share */}
        <ContentInfoBar
          author={DataSchoolIdentity.author}
          date={DataSchoolIdentity.date}
          onShare={() => setShowShare(true)}
            className="border-t border-[var(--border_default)]"
        />
      </div>

      {/* Modal Share */}
      <ShareModal show={showShare} onClose={() => setShowShare(false)} />
    </div>
  );
};

export default SchoolIdentity;
