import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ThemeToggle from "../../Components/ThemeToggle";
import LanguageSwitcher from "../../Components/LanguageSwitcher";
import DataMading from "../../Data/DataMading";

const MadingHeader = ({ theme, setTheme }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const currentLang = i18n.language || "id";
  const { header } = DataMading;

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <header className="flex w-full items-center justify-between p-4 gap-4">
      <nav className="flex w-2/3 items-center gap-2">
        {/* Logo */}
        <Link to="/" onClick={handleLogoClick}>
          <img
            className="h-10 lg:h-15 w-auto object-contain"
            src={header.logo}
            alt="Logo Sekolah"
          />
        </Link>

        {/* Title */}
        <div className="flex flex-col leading-tight">
          <h1 className="text-subtitle font-bold text-primary">
            {header.title[currentLang]}
          </h1>
          <h2 className="text-paragraph text-base-content/70">
            {header.region[currentLang]}
          </h2>
        </div>
      </nav>

      <div className="flex w-1/3 justify-end items-center gap-2">
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default MadingHeader;
