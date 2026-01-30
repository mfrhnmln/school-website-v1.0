import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "id",
    label: "Indonesia",
    flag: "/flags/id.jpg",
  },
  {
    code: "en",
    label: "English",
    flag: "/flags/en.jpg",
  },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); // 🔥 WAJIB
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = (i18n.language || "id").split("-")[0];

  const activeLang =
    languages.find((lang) => lang.code === currentLang) || languages[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    setOpen(false);
  };

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full lg:w-fit justify-between items-center gap-1 rounded-md text-nav font-bold cursor-pointer transition"
      >
        <div className="flex items-center justify-center gap-1">
          <img
          src={activeLang.flag}
          alt={activeLang.label}
          className="w-5 h-4 object-cover rounded-sm"
        />
        <span className="uppercase ">{activeLang.code}</span>
        </div>
        <i className="ri-arrow-down-s-line"></i>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-[var(--background_surface)] text-nav rounded-md shadow-lg overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`flex items-center gap-3 w-full px-4 py-2 text-left hover:bg-[var(--background_nav)]transition
      ${lang.code === currentLang ? "bg-[var(--background_surface)] font-semibold" : ""}
    `}
            >
              <img
                src={lang.flag}
                alt={lang.label}
                className="w-5 h-5 object-cover rounded-sm"
              />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
