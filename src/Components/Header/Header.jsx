import { useEffect, useState } from "react";
import Logo from "./logo";
import DataHeader from "./DataHeader";
import HeaderWeb from "./HeaderWeb";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [theme] = useState(() => {
    // Ambil theme awal dari localStorage → kalau tidak ada cek OS
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  // Sinkronkan perubahan theme → update <html data-theme>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Shadow saat scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll body saat mobile menu aktif
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  // Klik di luar dropdown untuk menutup
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        setOpenDropdownIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-5 py-4 xl:px-20 transition-colors duration-300 ${
          scrolled ? "bg-[var(--background_nav)]" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Logo theme={theme} />

        {/* Desktop Menu */}
        <div className="hidden lg:flex w-full items-center justify-end gap-6">
          <HeaderWeb
            data={DataHeader}
            openDropdownIndex={openDropdownIndex}
            setOpenDropdownIndex={setOpenDropdownIndex}
            closeMenu={() => setIsOpen(false)}
          />
        </div>

        {/* hamburger menu (mobile menu) */}
        <button
          className="flex flex-col lg:hidden justify-between w-5 h-4.5 cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-full bg-[var(--text_primary)] transition-transform duration-300 ${
              isOpen ? "rotate-50 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-full bg-[var(--text_primary)] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-full bg-[var(--text_primary)] transition-transform duration-300 ${
              isOpen ? "-rotate-50 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <HeaderMobile
        isOpen={isOpen}
        data={DataHeader}
        closeMenu={() => setIsOpen(false)}
      />
    </header>
  );
};

export default Header;
