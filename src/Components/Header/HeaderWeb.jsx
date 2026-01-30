import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import DropDownHeader from "./DropDownHeader";

import ThemeToggle from "../ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher";

const HeaderWeb = ({
  data,
  openDropdownIndex,
  setOpenDropdownIndex,
  closeMenu,
}) => {
  // Ambil theme awal dari localStorage → fallback ke OS
  const getInitialTheme = useCallback(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }, []);

  const [theme, setTheme] = useState(getInitialTheme);

  // Sinkronkan perubahan theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-end gap-6 font-semibold text-nav w-full">
      {/* Menu Dropdown */}
      {data.map((item, index) => (
        <DropDownHeader
          key={index}
          item={item}
          index={index}
          title={t(item.key)}
          isOpen={openDropdownIndex === index}
          setOpenDropdownIndex={setOpenDropdownIndex}
          onMenuClick={closeMenu}
        />
      ))}

      {/* Language Switcher */}
      <LanguageSwitcher />

      <ThemeToggle theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default HeaderWeb;
