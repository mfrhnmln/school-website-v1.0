import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SidebarNews = ({
  activeYear = "",
  years = [],
  searchText = "",
  onSearchChange,
  onYearChange,
  onClearFilters,
  categories = [],
}) => {
  const { t } = useTranslation();
  const [value, setValue] = useState(searchText);
  const location = useLocation();

  useEffect(() => {
    setValue(searchText);
  }, [searchText]);

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    onSearchChange?.(value);
  };

  return (
    <aside className="w-full flex flex-col gap-5 sticky top-30 sm:h-[calc(100vh-5rem)]">
      {/* SEARCH */}
      <div>
        <h3 className="font-bold text-subtitle text-primary mb-5 border-b-2 border-[var(--secondary)] w-fit">
          {t("search")}
        </h3>

        <form onSubmit={handleSubmitSearch} className="flex">
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => onSearchChange?.(value)}
            className="text-paragraph rounded-l-md border border-[var(--border_default)] px-3 py-2 w-full"
          />
          <button
            type="submit"
            className="btn-primary px-4 rounded-r-md"
          >
            {t("search")}
          </button>
        </form>

        {(searchText || activeYear) && (
          <button
            className="mt-2 underline text-helper"
            onClick={onClearFilters}
          >
            {t("resetFilters")}
          </button>
        )}
      </div>

      <div className="flex gap-20 sm:flex-col sm:gap-5">
        {/* CATEGORY */}
        {categories.length > 0 && (
          <div>
            <h3 className="font-bold text-subtitle text-primary mb-5 border-b-2 border-[var(--secondary)] w-fit">
              {t("category")}
            </h3>

            <ul className="text-paragraph flex flex-col gap-5 sm:gap-2">
              {categories.map((cat) => (
                <li key={cat.path}>
                  <Link
                    to={cat.path}
                    className="hover:underline"
                    style={{
                      color: location.pathname.startsWith(cat.path)
                        ? "var(--secondary)"
                        : "inherit",
                    }}
                  >
                    {t(cat.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ARCHIVES */}
        <div>
          <h3 className="font-bold text-subtitle text-primary mb-5 border-b-2 border-[var(--secondary)] w-fit">
            {t("archives")}
          </h3>

          <ul className="text-paragraph flex flex-col gap-5 sm:gap-2">
            <li>
              <button
                onClick={() => onYearChange?.("")}
                className="hover:underline"
                style={{
                  color:
                    activeYear === ""
                      ? "var(--secondary)"
                      : "inherit",
                }}
              >
                {t("allYears")}
              </button>
            </li>

            {years.map((y) => (
              <li key={y}>
                <button
                  onClick={() => onYearChange?.(y)}
                  className="hover:underline"
                  style={{
                    color:
                      activeYear === String(y)
                        ? "var(--secondary)"
                        : "inherit",
                  }}
                >
                  {y}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SidebarNews;
