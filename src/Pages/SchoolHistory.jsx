import { useState } from "react";
import { useTranslation } from "react-i18next";

import Breadcrumb from "../Components/Breadcrumb";
import ShareModal from "../Components/ShareModal";
import ContentInfoBar from "../Components/ContentInfoBar";
import ImagePreviewModal from "../Components/ImagePreviewModal";

import DataHistory from "../Data/DataHistory";

const SchoolHistory = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  // state modal
  const [showShare, setShowShare] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // klik gambar untuk buka preview
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="flex flex-col w-full min-h-screen px-5 md:px-10 lg:px-20 gap-6 pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[
          { label: t("home"), href: "/" },
          { label: DataHistory.title[lang] },
        ]}
      />

      {/* Content */}
      <div className="flex flex-col w-full h-full max-w-5xl mx-auto text-center items-center gap-10">
        {/* Gambar & Informasi Halaman */}
        <div className="flex flex-col w-full gap-1">
          <div
            className="cursor-pointer overflow-hidden rounded-md"
            onClick={() => handleImageClick(DataHistory.image)}
          >
            <img
              src={DataHistory.image}
              alt={DataHistory.title[lang]}
              className="w-full h-full lg:h-[30rem] object-cover hover:scale-110 hover:brightness-90 transition-transform duration-300"
            />
          </div>

          {/* Informasi Halaman + Tombnol Share */}
          <ContentInfoBar
            author={DataHistory.author}
            date={DataHistory.date}
            onShare={() => setShowShare(true)}
            className="border-b border-[var(--border_default)]"
          />
        </div>

        {/* Teks Sejarah */}
        <div className="flex flex-col w-full gap-5">
          <h1 className="text-title font-bold text-primary text-center">
            {DataHistory.title[lang]}
          </h1>

          <p className="text-paragraph text-justify whitespace-pre-line">
            {DataHistory.message[lang]}
          </p>
        </div>

        {/* Sejarah Kepala Sekolah */}
        <div className="flex flex-col w-full gap-5">
          <h2 className="text-subtitle text-primary font-semibold text-left">
            {DataHistory.historyPrincipals.title[lang]}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border text-center">
              <thead className="bg-[var(--background_surface)] text-subtitle">
                <tr>
                  <th className="px-4 py-2 border">Nama</th>
                  <th className="px-4 py-2 border">Masa Jabatan</th>
                </tr>
              </thead>
              <tbody>
                {DataHistory.historyPrincipals.data.map((item, index) => (
                  <tr
                    key={index}
                    className="w-full text-paragraph hover:bg-[var(--background_surface_hover)]/60"
                  >
                    <td className="w-1/2 px-4 py-2 text-left border">
                      {item.name}
                    </td>
                    <td className="w-1/2 px-4 py-2 border">{item.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sejarah Logo */}
        <div className="flex flex-col w-full gap-5">
          <h2 className="text-subtitle text-primary font-semibold text-left">
            {DataHistory.logoHistory.title[lang]}
          </h2>

          <div className="flex flex-col gap-15">
            {DataHistory.logoHistory.logos.map((logo, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <img
                  src={logo.image}
                  alt={`Logo ${logo.period}`}
                  onClick={() => handleImageClick(logo.image)}
                  className="cursor-pointer overflow-hidden w-full max-w-[20rem] mx-auto object-contain hover:brightness-90 hover:scale-105 transition-transform duration-300"
                />

                <div className="flex flex-col items-center text-center">
                  <h3 className="text-paragraph font-semibold">
                    {logo.period}
                  </h3>

                  <p className="text-paragraph text-justify whitespace-pre-line">
                    {logo.description[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
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

export default SchoolHistory;
