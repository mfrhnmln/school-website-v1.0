import { useState } from "react";
import { useTranslation } from "react-i18next";

import Breadcrumb from "../Components/Breadcrumb";
import ShareModal from "../Components/ShareModal";
import ContentInfoBar from "../Components/ContentInfoBar";
import ImagePreviewModal from "../Components/ImagePreviewModal";

import DataLogo from "../Data/DataLogo";

const SchoolLogo = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  // state modal
  const [showShare, setShowShare] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // klik gambar untuk buka preview
  const handleImageClick = () => {
    setSelectedImage(DataLogo.image);
  };

  return (
    <div className="flex flex-col w-full min-h-screen px-5 md:px-10 lg:px-20 gap-6 pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[
          { label: t("home"), href: "/" },
          { label: DataLogo.title[lang] },
        ]}
      />

      {/* Content */}
      <div className="flex flex-col w-full h-full max-w-5xl mx-auto items-center gap-10">
        {/* Gambar & Informasi Halaman */}
        <div className="flex flex-col w-full gap-2">
          {/* Image */}
          <div
            className="cursor-pointer overflow-hidden rounded-md"
            onClick={handleImageClick}
          >
            <img
              src={DataLogo.image}
              alt={DataLogo.title[lang]}
              className="w-full max-w-[25rem] mx-auto object-contain hover:brightness-90 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Informasi Halaman + Tombnol Share */}
          <ContentInfoBar
            author={DataLogo.author}
            date={DataLogo.date}
            onShare={() => setShowShare(true)}
            className="border-b border-[var(--border_default)]"
          />
        </div>

        {/* Logo Description */}
        <h1 className="text-title font-bold text-primary text-center">
          {DataLogo.title[lang]}
        </h1>

        <div className="flex flex-col w-full h-full text-paragraph gap-4">
            {DataLogo.message[lang].map((item, index) => (
              <p key={index}>{item}</p>
            ))}
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

export default SchoolLogo;
