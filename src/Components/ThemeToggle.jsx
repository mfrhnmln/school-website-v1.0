import { GoSun } from "react-icons/go";
import { BsFillMoonStarsFill } from "react-icons/bs";

const ThemeToggle = ({ theme, setTheme }) => {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative w-10 h-6 flex items-center rounded-full
        transition-colors duration-300 cursor-pointer
        ${isDark ? "bg-blue-900" : "bg-blue-100"}
      `}
      aria-label="Toggle Theme"
    >
      {/* Knob */}
      <span
        className={`
          w-6 h-6 rounded-full flex items-center justify-center
          transform transition-all duration-300
          ${isDark ? "translate-x-4 bg-blue-600" : "translate-x-0 bg-yellow-400"}
        `}
      >
        {isDark ? <BsFillMoonStarsFill /> : <GoSun />}
      </span>
    </button>
  );
};

export default ThemeToggle;
