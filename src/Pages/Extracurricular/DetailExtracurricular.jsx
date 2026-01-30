import { useParams } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Breadcrumb from "../../Components/Breadcrumb";
import ShareModal from "../../Components/ShareModal";
import ContentInfoBar from "../../Components/ContentInfoBar";
import ImagePreviewModal from "../../Components/ImagePreviewModal";

import DataExtracurricular from "../../Data/DataExtracurricular";

const DetailExtracurricular = () => {
  const { slug } = useParams();

  const { t, i18n } = useTranslation();
  const lang = i18n.language; // "id" | "en"

  const detail = DataExtracurricular.items.find((item) => item.slug === slug);

  const [showShare, setShowShare] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);

  if (!detail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Ekstrakurikuler tidak ditemukan.</p>
      </div>
    );
  }

  // show all image
  const images = detail.moreImages || [];
  const displayedImages = showAllImages ? images : images.slice(0, 9);
  const remaining = images.length - 9;

  return (
    <div className="flex flex-col w-full min-h-screen px-5 md:px-10 lg:px-20 gap-5 pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[{ label: "Home", href: "/" }, { label: detail.name[lang] }]}
      />

      <div className="flex flex-col w-full h-full max-w-5xl mx-auto items-center gap-10">
        {/* Gambar Utama + Info */}
        <div className="flex flex-col w-full gap-1">
          <div
            className="cursor-pointer overflow-hidden rounded-md"
            onClick={() => setSelectedImage(detail.image)}
          >
            <img
              src={detail.image}
              alt={detail.name[lang]}
              className="w-full h-full lg:h-[30rem] object-cover hover:scale-110 hover:brightness-90 transition-transform duration-300"
            />
          </div>

          <ContentInfoBar
            author={detail.author}
            date={detail.date}
            onShare={() => setShowShare(true)}
            className="border-b border-[var(--border_default)]"
          />
        </div>

        {/* Nama & deskripsi */}
        <h1 className="text-title font-bold text-primary text-center">
          {detail.name[lang]}
        </h1>

        <p className="w-full text-paragraph text-justify">
          {detail.description[lang]}
        </p>

        {/* Jadwal */}
        {detail.schedule?.length > 0 && (
          <div className="flex flex-col w-full gap-4 overflow-x-auto">
            <h2 className="text-subtitle text-primary font-semibold text-left">
              {t("schedule_activities")}
            </h2>

            <div className="overflow-x-auto w-full">
              <table className="w-full">
                <thead className="bg-[var(--background_surface)] text-subtitle text-center">
                  <tr>
                    <th className="border py-4 w-1/4">{t("day")}</th>
                    <th className="border py-4 w-2/4">
                      {t("extracurricular")}
                    </th>
                    <th className="border py-4 w-1/4">{t("time")}</th>
                  </tr>
                </thead>

                <tbody className="text-paragraph text-center">
                  {detail.schedule.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-[var(--background_surface_hover)]"
                    >
                      <td className="border py-4">{row.day[lang]}</td>
                      <td className="border py-4">{row.name}</td>
                      <td className="border py-4">{row.schedule}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Galeri */}
        <div className="flex flex-col w-full gap-4">
          <h2 className="text-subtitle text-primary font-semibold text-left">
            {t("activity_photos")}
          </h2>

          {images.length > 0 && (
            <>
              <div className="grid grid-cols-3 gap-4 w-full">
                {displayedImages.map((img, index) => {
                  // tombol +N (hanya muncul jika BELUM showAllImages)
                  if (!showAllImages && index === 8 && images.length > 9) {
                    return (
                      <div
                        key={index}
                        className="relative cursor-pointer"
                        onClick={() => setShowAllImages(true)}
                      >
                        <img
                          src={img}
                          alt={`${detail.name[lang]} ${index + 1}`}
                          className="w-full h-25 sm:h-40 object-cover rounded-md shadow-md"
                        />
                        <div className="absolute inset-0 flex items-center justify-center rounded-md bg-[var(--text_Black)]/60">
                          <span className="text-title text-secondary font-bold">
                            +{remaining}
                          </span>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <img
                      key={index}
                      src={img}
                      alt={`${detail.name[lang]} ${index + 1}`}
                      className="w-full h-25 sm:h-40 object-cover rounded-md shadow-md cursor-pointer"
                      onClick={() => setSelectedImage(img)}
                    />
                  );
                })}
              </div>

              {/* Tombol sembunyikan */}
              {showAllImages && images.length > 9 && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setShowAllImages(false)}
                    className="px-6 py-2 rounded-md text-paragraph font-bold btn-primary"
                  >
                    {t("hide")}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Modal Share */}
      <ShareModal show={showShare} onClose={() => setShowShare(false)} />

      {/* Modal Preview Image */}
      <ImagePreviewModal
        imageUrl={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default DetailExtracurricular;
