import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Breadcrumb from "../../Components/Breadcrumb";
import ShareModal from "../../Components/ShareModal";
import ContentInfoBar from "../../Components/ContentInfoBar";
import ImagePreviewModal from "../../Components/ImagePreviewModal";
import Pagination from "../../Components/Pagination";

import DataTeacher from "../../Data/DataTeacher";
import DataStaff from "../../Data/DataStaff";

const PageTeachersStaff = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const isStaffPage = location.pathname === "/tenaga-kependidikan";

  // pilih data source
  const dataSource = isStaffPage ? DataStaff : DataTeacher;

  const data = isStaffPage ? dataSource.staff : dataSource.teachers;

  const frameData = dataSource.groupPhoto;

  // modal
  const [showShare, setShowShare] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // pagination
  const [page, setPage] = useState(1);
  const perPage = 10;

  const totalItems = data.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));

  const paginatedData = useMemo(() => {
    const start = (page - 1) * perPage;
    return data.slice(start, start + perPage);
  }, [data, page]);

  return (
    <div className="flex flex-col w-full min-h-screen px-5 md:px-10 lg:px-20 gap-5 pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[
          { label: t("home"), href: "/" },
          { label: isStaffPage ? t("staff") : t("teachers") },
        ]}
      />

      <div className="flex flex-col w-full h-full max-w-5xl mx-auto items-center gap-10">
        <div className="flex flex-col w-full h-full gap-2">
          {/* Foto Group */}
          {frameData && (
            <div
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => setSelectedImage(frameData.image)}
            >
              <img
                src={frameData.image}
                alt={frameData.name}
                className="w-full h-full object-cover hover:scale-105 hover:brightness-90 transition-transform duration-300"
              />
            </div>
          )}

          {/* Info Bar */}
          <ContentInfoBar
            author={dataSource.author}
            date={dataSource.date}
            onShare={() => setShowShare(true)}
            className="border-b border-[var(--border_default)] w-full"
          />
        </div>

        {/* Title */}
        <h1 className="text-title text-primary text-center">
          {isStaffPage ? t("staff") : t("teachers")}
        </h1>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[var(--background_component)] text-subtitle text-center">
              <tr>
                <th className="border-y border-[var(--color_text_title)]/50 p-5">
                  {t("number")}
                </th>
                <th className="border-y border-[var(--color_text_title)]/50 p-5">
                  {t("name")}
                </th>
                <th className="border-y border-[var(--color_text_title)]/50 p-5">
                  {t("status")}
                </th>
              </tr>
            </thead>

            <tbody className="text-paragraph">
              {paginatedData.map((item, idx) => (
                <tr
                  key={item.id}
                  className="hover:bg-[var(--background_component)]/60"
                >
                  <td className="border-y border-[var(--color_text_title)]/30 p-5 text-center">
                    {(page - 1) * perPage + idx + 1}
                  </td>
                  <td className="border-y border-[var(--color_text_title)]/30 p-5">
                    {item.name}
                  </td>
                  <td className="border-y border-[var(--color_text_title)]/30 p-5">
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>

      {/* Share Modal */}
      <ShareModal show={showShare} onClose={() => setShowShare(false)} />

      {/* Image Preview */}
      <ImagePreviewModal
        imageUrl={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default PageTeachersStaff;
