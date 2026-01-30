import { useTranslation } from "react-i18next";
import DataMading from "../../Data/DataMading";

const MadingFooter = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "id";

  return (
    <footer className="flex w-full h-fit items-center bg-[var(--background)] overflow-hidden z-50 text-paragraph border-t border-[var(--border_default)] py-2">
      <div className="relative w-full">
        <p
          className="whitespace-nowrap animate-scroll px-4"
        >
          {DataMading.description[currentLang]}
        </p>
      </div>
    </footer>
  );
};

export default MadingFooter;
