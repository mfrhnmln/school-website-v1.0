import { useTranslation } from "react-i18next";

import PageContentList from "./PageContentList";
import DataAgenda from "../../../Data/DataAgenda";

const PageAgenda = () => {
  const { t } = useTranslation();

  return (
    <PageContentList
      data={DataAgenda}
      breadcrumbPaths={[
        { label: t("home"), href: "/" },
        { label: t("news") },
      ]}
    />
  );
};

export default PageAgenda;
