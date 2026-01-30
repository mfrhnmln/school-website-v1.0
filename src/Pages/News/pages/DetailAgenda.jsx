import { useTranslation } from "react-i18next";

import DataAgenda from "../../../Data/DataAgenda";
import ComponentsContentDetail from "../components/ComponentsContentDetail";

const DetailAgenda = () => {
  const { t } = useTranslation();

  return (
    <ComponentsContentDetail
      data={DataAgenda}
      breadcrumbPaths={[
        { label: t("home"), href: "/" },
        { label: t("agenda"), href: "/agenda" },
      ]}
      instagramUrl="https://www.instagram.com/p/CzTIPafpSfJ/?img_index=1"
    />
  );
};

export default DetailAgenda;
