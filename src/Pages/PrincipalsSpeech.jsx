import { useState } from "react";
import { useTranslation } from "react-i18next";

import Breadcrumb from "../Components/Breadcrumb";
import ShareModal from "../Components/ShareModal";
import ContentInfoBar from "../Components/ContentInfoBar";
import ImagePreviewModal from "../Components/ImagePreviewModal";

import DataPrincipalsSpeech from "../Data/DataPrincipalsSpeech";

const PrincipalsSpeech = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  // state modal
  const [showShare, setShowShare] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex flex-col w-full min-h-screen px-5 md:px-10 lg:px-20 gap-5 pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[
          { label: t("home"), href: "/" },
          { label: DataPrincipalsSpeech.title[lang] },
        ]}
      />

      {/* Content */}
      <div className="flex flex-col w-full h-full max-w-5xl mx-auto items-center gap-10">
        {/* Image & Info */}
        <div className="flex flex-col w-full gap-1">
          {/* Image */}
          <div
            className="cursor-pointer overflow-hidden rounded-md"
            onClick={() =>
              setSelectedImage(DataPrincipalsSpeech.imageHorizontal)
            }
          >
            <img
              src={DataPrincipalsSpeech.imageHorizontal}
              alt={DataPrincipalsSpeech.title[lang]}
              className="w-full h-full lg:h-[30rem] object-cover hover:scale-110 hover:brightness-90 transition-transform duration-300"
            />
          </div>

          {/* Informasi Halaman + Tombol Share */}
          <ContentInfoBar
            author={DataPrincipalsSpeech.author}
            date={DataPrincipalsSpeech.date}
            onShare={() => setShowShare(true)}
            className="border-b border-[var(--border_default)]"
          />
        </div>

        {/* Text Content */}
        <h1 className="text-title font-bold text-primary text-center">
          {DataPrincipalsSpeech.title[lang]}
        </h1>

        <p className="w-full text-paragraph text-justify whitespace-pre-line">
          {DataPrincipalsSpeech.messagePage[lang]}
        </p>

        <div className="flex flex-col w-full gap-1 text-left">
          <h3 className="text-paragraph text-left">
            {DataPrincipalsSpeech.position[lang]}
          </h3>
          <h2 className="text-paragraph font-bold text-left">
            {DataPrincipalsSpeech.principalsName}
          </h2>
        </div>
      </div>

      {/* Modal Share */}
      <ShareModal show={showShare} onClose={() => setShowShare(false)} />

      {/* Image Preview */}
      <ImagePreviewModal
        imageUrl={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default PrincipalsSpeech;
