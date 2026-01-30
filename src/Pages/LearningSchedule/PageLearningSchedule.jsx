import { useState } from "react";
import { useTranslation } from "react-i18next";

import Breadcrumb from "../../Components/Breadcrumb";
import ShareModal from "../../Components/ShareModal";
import ContentInfoBar from "../../Components/ContentInfoBar";

import SidebarLearningSchedule from "./SidebarLearningSchedule";
import ComponentsLearningSchedule from "./ComponentsLearningSchedule";

import DataLearningSchedule from "../../Data/DataLearningSchedule";

const PageLearningSchedule = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLevel, setFilterLevel] = useState(null);
  const [showShare, setShowShare] = useState(false);

  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const filteredData = DataLearningSchedule.items.filter((item) => {
    const titleText =
      typeof item.title === "string" ? item.title : item.title?.[lang] || "";

    const matchSearch = titleText
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchLevel = filterLevel ? item.level === filterLevel : true;

    return matchSearch && matchLevel;
  });

  return (
    <div className="flex flex-col w-full min-h-screen items-center px-5 md:px-10 lg:px-20 gap-5 pt-32 pb-20 lg:pt-36 lg:pb-28">
      <Breadcrumb
        paths={[
          { label: t("home"), href: "/" },
          { label: t("learning_schedule") },
        ]}
      />

      <div className="flex flex-col w-full max-w-5xl justify-between sm:flex-row py-10 gap-10">
        {/* Sidebar */}
        <div className="w-full sm:w-1/3">
          <SidebarLearningSchedule
            onSearch={setSearchTerm}
            onFilterLevel={setFilterLevel}
          />
        </div>

        {/* Card Grid */}
        <div className="flex flex-col w-full sm:w-2/3 gap-5">
          <ComponentsLearningSchedule data={filteredData} />

          {/* Informasi Halaman + Tombnol Share */}
          <ContentInfoBar
            author={DataLearningSchedule.author}
            date={DataLearningSchedule.date}
            onShare={() => setShowShare(true)}
            className="border-t border-[var(--border_default)]"
          />
        </div>
      </div>

      {/* Modal Share */}
      <ShareModal show={showShare} onClose={() => setShowShare(false)} />
    </div>
  );
};

export default PageLearningSchedule;
