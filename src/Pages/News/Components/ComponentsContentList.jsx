import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { normalizeData } from "../../../utils/helper";

const ComponentsContentList = ({
  data,
  fallbackData = [],
  maxItems = 20,
  layout = "grid",
}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  // normalisasi fallback sekali
  const normalizedFallback = normalizeData(fallbackData);

  const source = Array.isArray(data) && data.length ? data : normalizedFallback;

  // Urutkan berdasarkan tanggal terbaru
  const sortedList = [...source].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  // Batasi jumlah item berdasarkan maxItems
  const List = sortedList.slice(0, maxItems);

  return (
    <div
      className={
        layout === "grid"
          ? "grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5 px-5 md:px-10 lg:px-20 lg:max-w-7xl"
          : "flex flex-col w-full justify-center gap-10"
      }
    >
      {List.map((item) => {
        // i18n
        const title =
          typeof item.title === "string"
            ? item.title
            : item.title?.[lang] || "";

        // paragraph
        const paragraphs = Array.isArray(item.paragraphs)
          ? item.paragraphs
          : item.paragraphs?.[lang] || [];

        // gabungkan semua paragraph jadi satu string
        const previewText = paragraphs.join(" ").trim();

        // format tanggal (data sudah dinormalisasi ISO lewat fixDate di page)
        const formattedDate = item.date
          ? new Date(item.date).toLocaleDateString(
              lang === "id" ? "id-ID" : "en-US",
              {
                day: "2-digit",
                month: "long",
                year: "numeric",
              },
            )
          : "";

        return (
          <div
            key={item.slug}
            className="group flex flex-col justify-between h-full shadow-xl overflow-hidden transition-all duration-300 ease-in-out bg-[var(--background_surface)] rounded-xl"
          >
            {/* Image */}
            <img
              className={`transform transition-transform duration-500 ease-in-out ${
                layout === "grid"
                  ? "w-full sm:h-[20rem] group-hover:scale-110"
                  : "w-full h-[20rem] group-hover:scale-105"
              } object-cover`}
              src={item.image}
              alt={title}
              loading="lazy"
            />

            <div className="flex flex-col justify-between w-full h-fit sm:h-full max-h-[22rem] gap-3 p-5 bg-[var(--background)]">
              {/* Content */}
              <div className="flex flex-col gap-3">
                <p className="text-subtitle font-bold">
                  {layout === "grid" && title.length > 50
                    ? title.slice(0, 50) + "..."
                    : title}
                </p>

                <p className="text-paragraph hidden sm:block">
                  {layout === "grid"
                    ? previewText.slice(0, 100) +
                      (previewText.length > 100 ? "..." : "")
                    : previewText.slice(0, 200) +
                      (previewText.length > 200 ? "..." : "")}
                </p>

                {/* Tombol Read More */}
                <Link
                  to={`/${item.route}/${item.slug}`}
                  className="text-paragraph"
                  style={{ color: "var(--info)" }}
                >
                  {lang === "id" ? "Baca selengkapnya" : "Read more"}{" "}
                  <i className="ri-arrow-right-s-line"></i>
                </Link>
              </div>

              {/* penulis dan tanggal */}
              <div className="mt-10 border-t border-[var(--border_default)]">
                <div className="flex justify-between items-center py-4">
                  <p className="text-paragraph">
                    <i className="ri-user-3-fill text-small-icon pr-3"></i>
                    {item.author}
                  </p>
                  <p className="text-paragraph hidden sm:block">
                    <i className="ri-calendar-2-fill text-small-icon pr-3"></i>
                    {formattedDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ComponentsContentList;
