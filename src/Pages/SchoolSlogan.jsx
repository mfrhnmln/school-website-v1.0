import { useState } from "react";
import { useTranslation } from "react-i18next";

import Breadcrumb from "../Components/Breadcrumb";
import ShareModal from "../Components/ShareModal";
import ContentInfoBar from "../Components/ContentInfoBar";
import ImagePreviewModal from "../Components/ImagePreviewModal";

import DataSlogan from "../Data/DataSlogan";

const SchoolSlogan = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  // state modal
  const [showShare, setShowShare] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // klik gambar untuk buka preview
  const handleImageClick = () => {
    setSelectedImage(DataSlogan.image);
  };

  return (
    <div className="flex flex-col w-full min-h-screen px-5 md:px-10 lg:px-20 gap-6 pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[
          { label: t("home"), href: "/" },
          { label: DataSlogan.title[lang] },
        ]}
      />

      {/* Content */}
      <div className="flex flex-col w-full h-full max-w-5xl mx-auto items-center gap-10">
        {/* Gambar & Informasi Halaman */}
        <div className="flex flex-col w-full gap-1">
          {/* Image */}
          <div
            className="cursor-pointer overflow-hidden rounded-md"
            onClick={handleImageClick}
          >
            <img
              src={DataSlogan.image}
              alt={DataSlogan.title[lang]}
              className="w-full max-w-[25rem] mx-auto object-contain hover:brightness-90 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Informasi Halaman + Tombnol Share */}
          <ContentInfoBar
            author={DataSlogan.author}
            date={DataSlogan.date}
            onShare={() => setShowShare(true)}
            className="border-b border-[var(--border_default)]"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col mx-auto w-full h-full gap-20">
          {/* Slogan */}
          <section className="flex flex-col gap-4">
            <h2 className="text-title font-bold text-primary text-center">
              {DataSlogan.sloganTitle[lang]}
            </h2>
            <div className="flex flex-col text-paragraph text-left gap-2">
              {DataSlogan.slogan[lang].map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          </section>

          {/* Motto */}
          <section className="flex flex-col gap-4">
            <h2 className="text-title font-bold text-primary text-center">
              {DataSlogan.mottoTitle[lang]}
            </h2>
            <div className="flex flex-col text-paragraph text-left gap-2">
              {DataSlogan.motto[lang].map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          </section>

          {/* Yel-yel */}
          <section className="flex flex-col gap-4">
            <h2 className="text-title font-bold text-primary text-center">
              {DataSlogan.yelTitle[lang]}
            </h2>
            <div className="flex flex-col text-paragraph text-left gap-2">
              {DataSlogan.yelyel[lang].map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          </section>

          {/* Mars */}
          <section className="flex flex-col gap-4">
            <h2 className="text-title font-bold text-primary text-center">
              {DataSlogan.marsTitle[lang]}
            </h2>

            <p className="text-paragraph font-bold text-center">
              {DataSlogan.marsAuthor[lang]}
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
              <div className="flex flex-col w-full md:w-1/2 text-paragraph text-left whitespace-pre-line">
                {DataSlogan.mars[lang].map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>

              <div className="flex w-full md:w-1/2 items-center justify-center aspect-video">
                <iframe
                  className="w-full h-full rounded-md shadow-md"
                  src={DataSlogan.marsVideo}
                  title={DataSlogan.marsTitle[lang]}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Modal */}
      <ShareModal show={showShare} onClose={() => setShowShare(false)} />

      {/* Modal Preview Image */}
      <ImagePreviewModal
        imageUrl={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default SchoolSlogan;
