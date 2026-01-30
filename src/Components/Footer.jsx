import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Logo from "./Header/logo";
import DataFooter from "../Data/DataFooter";

const Footer = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const [theme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <footer className="w-full h-full bg-[var(--background_nav)] border-t border-[var(--border_default)]">
      {/* Top */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-10 gap-10">
        {/* Brand */}
        <div>
          <Logo theme={theme} />

          <p className="text-paragraph mt-4 max-w-md">
            {DataFooter.brand.description[lang]}
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-6 text-large-icon">
            {DataFooter.socials.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <i className={item.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-6">
          <p className="text-subtitle font-semibold">
            {DataFooter.contactTitle[lang]}
          </p>

          <div className="flex flex-col gap-2">
            {DataFooter.contacts.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="flex items-center gap-3 text-paragraph hover:text-primary transition-colors"
              >
                <i className={`${item.icon} text-large-icon`} />
                <span>{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 py-4 border-t border-[var(--border_default)] text-center text-helper">
        © 2025 — Farhan Maulana
      </div>
    </footer>
  );
};

export default Footer;
