import { useTranslation } from "react-i18next";
import DataExtracurricularAchievements from "../../../Data/DataExtracurricularAchievements";
import ComponentsContentDetail from "../Components/ComponentsContentDetail";

const DetailExtracurricularAchievements = () => {
  const { t } = useTranslation();

  return (
    <ComponentsContentDetail
      data={DataExtracurricularAchievements}
      breadcrumbPaths={[
        { label: t("home"), href: "/" },
        { label: t("news"), href: "/berita" },
      ]}
      instagramUrl="https://www.instagram.com/p/CzTIPafpSfJ/?img_index=1"
    />
  );
};

export default DetailExtracurricularAchievements;
