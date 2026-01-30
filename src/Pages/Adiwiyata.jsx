import { useState } from "react";
import { useTranslation } from "react-i18next";

import Breadcrumb from "../Components/Breadcrumb";
import ShareModal from "../Components/ShareModal";
import ContentInfoBar from "../Components/ContentInfoBar";
import ImagePreviewModal from "../Components/ImagePreviewModal";

import DataAdiwiyata from "../Data/DataAdiwiyata";

const Adiwiyata = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  // state modal
  const [showShare, setShowShare] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex flex-col w-full min-h-screen px-5 md:px-10 lg:px-20 gap-6 pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[
          { label: "Home", href: "/" },
          { label: DataAdiwiyata.title[lang] },
        ]}
      />

      {/* Content */}
      <div className="flex flex-col w-full h-full max-w-5xl mx-auto items-center gap-10">
        {/* Gambar & Informasi Halaman */}
        <div className="flex flex-col w-full gap-1">
          {/* Image */}
          <div
            className="cursor-pointer overflow-hidden rounded-md"
            onClick={() => setSelectedImage(DataAdiwiyata.image)}
          >
            <img
              src={DataAdiwiyata.image}
              alt={DataAdiwiyata.title[lang]}
              className="w-full h-full lg:h-[30rem] object-cover hover:scale-110 hover:brightness-90 transition-transform duration-300"
            />
          </div>

          {/* Informasi Halaman + Tombnol Share */}
          <ContentInfoBar
            author={DataAdiwiyata.author}
            date={DataAdiwiyata.date}
            onShare={() => setShowShare(true)}
            className="border-b border-[var(--border_default)]"
          />
        </div>

        {/* Text */}
        <h1 className="text-title font-bold text-primary text-center">
          {DataAdiwiyata.title[lang]}
        </h1>

        <p className="text-paragraph text-justify whitespace-pre-line">
          {DataAdiwiyata.message[lang]}
        </p>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
          {DataAdiwiyata.gallery.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center shadow-md rounded-xl bg-[var(--background_surface)]"
            >
              <img
                src={item.image}
                alt={item.title[lang]}
                className="w-full h-64 object-cover rounded-t-lg cursor-pointer hover:brightness-90 transition"
                onClick={() => setSelectedImage(item.image)}
              />
              <div className="flex flex-col gap-4 p-4">
                <h1 className="text-subtitle font-bold text-secondary text-center">
                  {item.title[lang]}
                </h1>
                <p className="text-paragraph text-justify whitespace-pre-line">
                  {item.paragraph[lang]}
                </p>
              </div>
            </div>
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

export default Adiwiyata;
