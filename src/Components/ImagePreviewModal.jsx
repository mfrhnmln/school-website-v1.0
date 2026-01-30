import { useDisableBodyScroll } from "../Function/useDisableBodyScroll";

const ImagePreviewModal = ({ imageUrl, onClose }) => {
  useDisableBodyScroll(!!imageUrl);

  if (!imageUrl) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex w-full h-full items-center justify-center bg-[var(--background)]/80 shadow z-50"
    >
      <img
        src={imageUrl}
        alt="preview"
        className="h-full max-w-[85%] max-h-[85%] object-contain rounded-lg"
      />
    </div>
  );
};

export default ImagePreviewModal;
