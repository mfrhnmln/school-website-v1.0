import { useState } from "react";
import { useTranslation } from "react-i18next";

import Breadcrumb from "../../Components/Breadcrumb";
import ShareModal from "../../Components/ShareModal";
import ContentInfoBar from "../../Components/ContentInfoBar";
import ImagePreviewModal from "../../Components/ImagePreviewModal";

const StructurePage = ({ data }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  // state modal
  const [showShare, setShowShare] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex flex-col w-full min-h-screen px-5 md:px-10 lg:px-20 gap-6 pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[{ label: "Home", href: "/" }, { label: data.title[lang] }]}
      />

      {/* Content */}
      <div className="flex flex-col w-full h-full max-w-5xl mx-auto items-center gap-10">
        {/* Gambar & Informasi Halaman */}
        <div className="flex flex-col w-full gap-1">
          {/* Image */}
          <div
            className="cursor-pointer overflow-hidden rounded-md"
            onClick={() => setSelectedImage(data.image)}
          >
            <img
              src={data.image}
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

        {/* Text */}
        <h1 className="text-title font-bold text-primary text-center">
          {data.title[lang]}
        </h1>

        <p className="w-full text-paragraph text-justify whitespace-pre-line">
          {data.message?.[lang]}
        </p>
      </div>

      {/* Share Modal */}
      <ShareModal show={showShare} onClose={() => setShowShare(false)} />

      {/* Image Preview Modal */}
      <ImagePreviewModal
        imageUrl={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default StructurePage;
