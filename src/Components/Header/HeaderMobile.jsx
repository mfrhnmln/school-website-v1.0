import { useEffect, useState, useCallback } from "react";
import MenuList from "./MenuList";

import ThemeToggle from "../ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher";

const HeaderMobile = ({ isOpen, data, closeMenu }) => {
  // 🔥 HOOK TETAP DI ATAS
  const getInitialTheme = useCallback(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }, []);

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!isOpen) return null;

  return (
    <div className="xl:hidden fixed top-0 left-0 flex flex-col w-full h-screen bg-[var(--background_nav)] z-40 px-5 gap-5 py-20 overflow-y-auto">
      <MenuList items={data} closeMenu={closeMenu} />

      <LanguageSwitcher />
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default HeaderMobile;
