import { useState } from "react";
import { useTranslation } from "react-i18next";

import Breadcrumb from "../../Components/Breadcrumb";
import ShareModal from "../../Components/ShareModal";
import ContentInfoBar from "../../Components/ContentInfoBar";
import ImagePreviewModal from "../../Components/ImagePreviewModal";
import ResponsiveImageGallery from "../../Components/ResponsiveImageGallery";

const ServicePage = ({ data }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [showShare, setShowShare] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!data) return null;

  return (
    <div className="flex flex-col w-full min-h-screen px-5 md:px-10 lg:px-20 gap-5 pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[{ label: t("home"), href: "/" }, { label: data.title[lang] }]}
      />

      {/* Content */}
      <div className="flex flex-col w-full h-full max-w-5xl mx-auto items-center gap-10">
        {/* Image & Informasi Update */}
        <div className="flex flex-col w-full gap-1">
          {/* Main Image */}
          <div
            className="cursor-pointer overflow-hidden rounded-md"
            onClick={() => setSelectedImage(data.mainImage)}
          >
            <img
              src={data.mainImage}
              alt={data.title[lang]}
              className="w-full h-full lg:h-[30rem] object-cover hover:scale-110 hover:brightness-90 transition-transform duration-300"
            />
          </div>

          {/* Informasi Halaman + Tombnol Share */}
          <ContentInfoBar
            author={data.author}
            date={data.date}
            onShare={() => setShowShare(true)}
            className="border-b border-[var(--border_default)]"
          />
        </div>

        {/* Title */}
        <h1 className="text-title font-bold text-primary text-center">
          {data.title[lang]}
        </h1>

        {/* Deskripsi */}
        {data.description && (
          <p className="w-full text-paragraph text-justify whitespace-pre-line">
            {data.description[lang]}
          </p>
        )}

        {/* Tabel Jadwal */}
        {data.scheduleTable && (
          <div className="flex flex-col w-full gap-4 overflow-x-auto">
            <h2 className="text-subtitle text-primary font-semibold text-left">
              {t("service_schedule")}
            </h2>

            <table className="w-full">
              <thead className="bg-[var(--background_surface)] text-subtitle text-center">
                <tr>
                  <th className="border p-4">{t("day")}</th>
                  <th className="border p-4">{t("open")}</th>
                  <th className="border p-4">{t("break")}</th>
                  <th className="border p-4">{t("close")}</th>
                </tr>
              </thead>

              <tbody className="text-paragraph text-center">
                {data.scheduleTable.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[var(--background_surface_hover)]"
                  >
                    <td className="border p-4">{row.day[lang]}</td>
                    <td className="border p-4">{row.open}</td>
                    <td className="border p-4">{row.break}</td>
                    <td className="border p-4">{row.close}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Activities Gallery */}
        {data.additionalData && (
          <div className="flex flex-col w-full gap-4">
            <h2 className="text-subtitle text-primary font-semibold text-left">
              {t("other_activities")}
            </h2>

            <div className="flex flex-col w-full gap-10">
              {data.additionalData.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  {/* Gallery */}
                  <ResponsiveImageGallery
                    images={item.images}
                    onImageClick={(img) => setSelectedImage(img)}
                  />

                  {/* Deskripsi */}
                  <p className="text-paragraph text-justify">
                    {item.description[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
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

export default ServicePage;
