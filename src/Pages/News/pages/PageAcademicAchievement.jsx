import { useTranslation } from "react-i18next";
import DataAcademicAchievement from "../../../Data/DataAcademicAchievement";
import PageContentList from "./PageContentList";

const PageAcademicAchievement = () => {
  const { t } = useTranslation();

  return (
    <PageContentList
      data={DataAcademicAchievement}
      breadcrumbPaths={[{ label: t("home"), href: "/" }, { label: t("academic_achievement") }]}
    />
  );
};

export default PageAcademicAchievement;
