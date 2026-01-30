import { useTranslation } from "react-i18next";
import DataNews from "../../../Data/DataNews";
import ComponentsContentDetail from "../components/ComponentsContentDetail";

const DetailNews = () => {
  const { t } = useTranslation();

  return (
    <ComponentsContentDetail
      data={DataNews}
      breadcrumbPaths={[
        { label: t("home"), href: "/" },
        { label: t("news"), href: "/berita" },
      ]}
      instagramUrl="https://www.instagram.com/p/CzTIPafpSfJ/?img_index=1"
    />
  );
};

export default DetailNews;
