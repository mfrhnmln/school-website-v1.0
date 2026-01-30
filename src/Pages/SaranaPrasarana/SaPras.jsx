import { useState } from "react";
import { useTranslation } from "react-i18next";

import Breadcrumb from "../../Components/Breadcrumb";
import ShareModal from "../../Components/ShareModal";
import ContentInfoBar from "../../Components/ContentInfoBar";
import ImagePreviewModal from "../../Components/ImagePreviewModal";

const SaPras = ({ data, breadcrumbKey }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [showShare, setShowShare] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex flex-col w-full min-h-screen px-5 md:px-10 lg:px-20 gap-10 pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[{ label: t("home"), href: "/" }, { label: t(breadcrumbKey) }]}
      />

      {/* Content */}
      <div className="flex flex-col w-full h-full max-w-5xl mx-auto items-center gap-10">
        {/* Title */}
        <h1 className="text-title font-bold text-primary text-center">
          {data.title[lang]}
        </h1>

        {/* Table */}
        <div className="flex flex-col w-full gap-4 overflow-x-auto">
          {/* Table */}
          <div className="overflow-x-auto w-full">
            <table className="w-full">
              <thead className="bg-[var(--background_surface)] text-subtitle text-center">
                <tr>
                  <th className="w-2/3 border p-4">{t("facility")}</th>
                  <th className="w-1/3 border p-4">{t("total")}</th>
                </tr>
              </thead>

              <tbody className="text-paragraph text-center">
                {data.items.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[var(--background_surface_hover)]"
                  >
                    <td className="border p-4">{item.fasilitas[lang]}</td>
                    <td className="border p-4">{item.jumlah}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Info Bar */}
          <ContentInfoBar
            author={data.author}
            date={data.date}
            onShare={() => setShowShare(true)}
            className="border-y border-[var(--border_default)]"
          />
        </div>

        {/* Image */}
        <div className="flex flex-col w-full gap-2">
          <h1 className="text-title font-bold text-primary text-center">
            {data.imageTitle[lang]}
          </h1>

          {/* Gallery */}
          <div className="flex flex-col gap-10">
            {data.items.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <h2 className="text-subtitle text-primary font-semibold text-left">
                  {item.fasilitas[lang]}
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {item.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${item.fasilitas[lang]} ${i + 1}`}
                      className="w-full h-40 object-cover rounded-lg shadow cursor-pointer hover:brightness-90 transition"
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
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

export default SaPras;
