import { useState } from "react";
import { useTranslation } from "react-i18next";

const SidebarLearningSchedule = ({ onSearch, onFilterLevel }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [activeLevel, setActiveLevel] = useState(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  const handleFilter = (level) => {
    setActiveLevel(level);
    onFilterLevel(level);
  };

  return (
    <aside className="w-full flex flex-col gap-10 sticky top-30 sm:h-[calc(100vh-5rem)]">
      {/* SEARCH */}
      <div>
        <h3 className="font-bold text-subtitle text-primary mb-5 border-b-2 border-[var(--secondary)] w-fit">
          {t("search")}
        </h3>
        <input
          id="search"
          type="text"
          placeholder={t("searchPlaceholder")}
          value={search}
          onChange={handleSearch}
          className="w-full p-2 border border-[var(--border_default)] rounded text-paragraph"
        />
      </div>

      {/* FILTER KELAS */}
      <div>
        <h3 className="font-bold text-subtitle text-primary mb-5 border-b-2 border-[var(--secondary)] w-fit">
          {t("class")}
        </h3>
        <div className="flex sm:flex-col items-left gap-4 text-paragraph">
          <button
            onClick={() => handleFilter(null)}
            className="text-left px-2 rounded hover:underline"
            style={{
              color:
                activeLevel === null
                  ? "var(--secondary)"
                  : "inherit",
            }}
          >
            {t("all")}
          </button>
          <button
            onClick={() => handleFilter(7)}
            className="text-left px-2 rounded hover:underline"
            style={{
              color:
                activeLevel === 7 ? "var(--secondary)" : "inherit",
            }}
          >
            {t("class")} 7
          </button>
          <button
            onClick={() => handleFilter(8)}
            className="text-left px-2 rounded hover:underline"
            style={{
              color:
                activeLevel === 8 ? "var(--secondary)" : "inherit",
            }}
          >
            {t("class")} 8
          </button>
          <button
            onClick={() => handleFilter(9)}
            className="text-left px-2 rounded hover:underline"
            style={{
              color:
                activeLevel === 9 ? "var(--secondary)" : "inherit",
            }}
          >
            {t("class")} 9
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SidebarLearningSchedule;
