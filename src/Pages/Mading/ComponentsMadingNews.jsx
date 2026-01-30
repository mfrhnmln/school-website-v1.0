import { useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import DataNews from "../../Data/DataNews";
import DataAgenda from "../../Data/DataAgenda";
import DataAcademicAchievement from "../../Data/DataAcademicAchievement";
import DataExtracurricularAchievements from "../../Data/DataExtracurricularAchievements";

import { normalizeData } from "../../utils/helper";

// Fallback Data
const FallbackMadingData = [
  ...normalizeData(DataNews),
  ...normalizeData(DataAgenda),
  ...normalizeData(DataAcademicAchievement),
  ...normalizeData(DataExtracurricularAchievements),
];

const ComponentsMadingNews = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const containerRef = useRef(null);

  // Sort Data berdasarkan tanggal
  const sortedNews = useMemo(() => {
    return [...FallbackMadingData]
      .filter((item) => item.date instanceof Date)
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }, []);

  // Auto Scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      container.scrollBy({
        left: 260,
        behavior: "smooth",
      });

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10
      ) {
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }, 500);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (!sortedNews.length) {
    return (
      <div className="flex items-center justify-center h-40 text-paragraph">
        Tidak ada data.
      </div>
    );
  }

  return (
    <div className="relative w-full h-full mx-auto">
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-4"
      >
        {sortedNews.map((item) => {
          const title =
            typeof item.title === "string"
              ? item.title
              : item.title?.[lang] || "";

          return (
            <Link
              key={item.slug}
              to={`/${item.route}/${item.slug}`}
              className="snap-start flex-shrink-0"
              style={{ width: "16rem" }}
            >
              <article className="group h-72 flex flex-col overflow-hidden rounded-lg bg-[var(--background_surface)] shadow-md">
                {/* IMAGE */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title News */}
                <div className="flex flex-col justify-center items-center py-4 px-2">
                  <h3
                    className="text-paragraph font-semibold"
                  >
                    {title}
                  </h3>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ComponentsMadingNews;
