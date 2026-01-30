import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Breadcrumb from "../../../Components/Breadcrumb";
import ShareModal from "../../../Components/ShareModal";
import ContentInfoBar from "../../../Components/ContentInfoBar";
import ImagePreviewModal from "../../../Components/ImagePreviewModal";
import ComponentsInstagramEmbed from "./ComponentsInstagramEmbed";

const ComponentsContentDetail = ({
  data = [],
  breadcrumbPaths = [],
  instagramUrl,
}) => {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language;

  // state modal
  const [showShare, setShowShare] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const detail = data.find((item) => item.slug === slug);

  // jika data tidak terbaca
  if (!detail) {
    return (
      <div className="min-h-screen flex items-center justify-center text-title">
        <p>
          {lang === "id" ? "Konten tidak ditemukan." : "Content not found."}
        </p>
      </div>
    );
  }

  // i18n SAFE ACCESS
  const title =
    typeof detail.title === "string"
      ? detail.title
      : detail.title?.[lang] || "";

  const paragraphs = Array.isArray(detail.paragraphs)
    ? detail.paragraphs
    : detail.paragraphs?.[lang] || [];

  return (
    <div className="flex flex-col w-full min-h-screen px-5 md:px-10 lg:px-20 gap-6 pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Breadcrumb */}
      <Breadcrumb paths={[...breadcrumbPaths, { label: title }]} />

      {/* Content */}
      <div className="flex flex-col w-full h-full max-w-5xl mx-auto items-center gap-10">
        {/* Gambar & Informasi Halaman */}
        <div className="flex flex-col w-full gap-1">
          {/* Image */}
          <div
            className="cursor-pointer overflow-hidden rounded-md"
            onClick={() => setSelectedImage(detail.image)}
          >
            <img
              src={detail.image}
              alt={title}
              className="w-full h-full lg:h-[30rem] object-cover hover:scale-110 hover:brightness-90 transition-transform duration-300"
            />
          </div>

          {/* Informasi Halaman + Tombnol Share */}
          <ContentInfoBar
            author={detail.author}
            date={detail.date}
            onShare={() => setShowShare(true)}
            className="border-b border-[var(--border_default)]"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col mx-auto w-full h-full gap-5">
          <h1 className="text-title font-bold text-primary text-center">
            {title}
          </h1>

          {instagramUrl && <ComponentsInstagramEmbed url={instagramUrl} />}

          {/* data array */}
          {paragraphs.map((text, index) => (
            <p
              key={index}
              className="text-paragraph whitespace-pre-line text-justify"
            >
              {text}
            </p>
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

export default ComponentsContentDetail;
