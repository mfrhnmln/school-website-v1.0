import { useTranslation } from "react-i18next";
import DataExtracurricularAchievements from "../../../Data/DataExtracurricularAchievements";
import PageContentList from "./PageContentList";

const PageExtracurricularAchievements = () => {
  const { t } = useTranslation();

  return (
    <PageContentList
      data={DataExtracurricularAchievements}
      breadcrumbPaths={[{ label: t("home"), href: "/" }, { label: t("news") }]}
    />
  );
};

export default PageExtracurricularAchievements;
