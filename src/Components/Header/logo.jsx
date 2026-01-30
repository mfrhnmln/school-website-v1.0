import { useLocation, useNavigate } from "react-router-dom";

const Logo = ({ theme }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  // Tentukan logo berdasarkan theme
  const logoSrc =
    theme === "dark"
      ? "/schoolLogo/logo-3.png"
      : "/schoolLogo/logo-4.png";

  return (
    <a href="/" onClick={handleLogoClick} className="block">
      <img
        className="max-w-50 max-h-10 lg:max-w-60 lg:max-h-12"
        src={logoSrc}
        alt={`Logo Sekolah ${theme === "dark" ? "Dark" : "Light"}`}
      />
    </a>
  );
};

export default Logo;
