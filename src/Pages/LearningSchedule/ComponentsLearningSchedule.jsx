import { useState } from "react";
import { useTranslation } from "react-i18next";
import ImagePreviewModal from "../../Components/ImagePreviewModal";

const ComponentsLearningSchedule = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <>
      {/* Grid Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((item, idx) => {
          const titleText =
            typeof item.title === "string"
              ? item.title
              : item.title?.[lang] || "";

          return (
            <div
              key={idx}
              className="rounded-lg shadow-md overflow-hidden transition cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={titleText}
                className="w-full h-[15rem] object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="font-semibold text-subtitle">{titleText}</h2>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Preview Image */}
      <ImagePreviewModal
        imageUrl={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
};

export default ComponentsLearningSchedule;
