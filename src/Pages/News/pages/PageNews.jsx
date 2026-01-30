import { useTranslation } from "react-i18next";
import DataNews from "../../../Data/DataNews";
import PageContentList from "./PageContentList";

const PageNews = () => {
  const { t } = useTranslation();

  return (
    <PageContentList
      data={DataNews}
      breadcrumbPaths={[
        { label: t("home"), href: "/" },
        { label: t("news") },
      ]}
    />
  );
};

export default PageNews;
