import { useTranslation } from "react-i18next";
import DataAcademicAchievement from "../../../Data/DataAcademicAchievement";
import ComponentsContentDetail from "../Components/ComponentsContentDetail";

const DetailAcademicAchievement = () => {
  const { t } = useTranslation();

  return (
    <ComponentsContentDetail
      data={DataAcademicAchievement}
      breadcrumbPaths={[
        { label: t("home"), href: "/" },
        { label: t("Prestasi Akademik"), href: "/prestasi/akademik" },
      ]}
      instagramUrl="https://www.instagram.com/p/CzTIPafpSfJ/?img_index=1"
    />
  );
};

export default DetailAcademicAchievement;
