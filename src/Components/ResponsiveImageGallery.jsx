const ResponsiveImageGallery = ({ images = [], onImageClick }) => {
  const total = images.length;
  if (total === 0) return null;

  const renderImage = (img, i, extraClass = "") => (
    <img
      key={i}
      src={img}
      alt={`gallery-${i}`}
      onClick={() => onImageClick?.(img)}
      className={`w-full object-cover rounded-md cursor-pointer hover:brightness-90 transition ${extraClass}`}
    />
  );

  //  MOBILE LAYOUT (< sm)
  const MobileGrid = () => {
    // <div className="grid grid-cols-2 gap-4 sm:hidden">
    //   {images.map((img, i) => renderImage(img, i, "h-40"))}
    // </div>

    // 1
    if (total === 1) return renderImage(images[0], 0, "h-80");

    // 2
    if (total === 2)
      return (
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, i) => renderImage(img, i, "h-60"))}
        </div>
      );

    // 3
    if (total === 3)
      return (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {images.slice(0, 2).map((img, i) => renderImage(img, i, "h-60"))}
          </div>
          {renderImage(images[2], 2, "h-80")}
        </div>
      );

    // 4 = 3 + 1
    if (total === 4)
      return (
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, i) => renderImage(img, i, "h-60"))}
        </div>
      );

    // 5 = 3 + 2
    if (total === 5)
      return (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {images.slice(0, 4).map((img, i) => renderImage(img, i, "h-60"))}
          </div>
          {renderImage(images[4], 4, "h-80")}
        </div>
      );

    // 6 = normal grid
    if (total === 6)
      return (
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, i) => renderImage(img, i, "h-60"))}
        </div>
      );

    // 7 = 3 + 3 + 1
    if (total === 7)
      return (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {images.slice(0, 6).map((img, i) => renderImage(img, i, "h-60"))}
          </div>
          {renderImage(images[6], 6, "h-80")}
        </div>
      );

    // 8 = 3 + 3 + 2
    if (total === 8)
      return (
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, i) => renderImage(img, i, "h-60"))}
        </div>
      );

    // fallback
    return (
      <div className="grid grid-cols-3 gap-4">
        {images.map((img, i) => renderImage(img, i, "h-60"))}
      </div>
    );
  };

  //  DESKTOP LAYOUT (≥ sm)
  const DesktopLayout = () => {
    // 1
    if (total === 1) return renderImage(images[0], 0, "h-80");

    // 2
    if (total === 2)
      return (
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, i) => renderImage(img, i, "h-60"))}
        </div>
      );

    // 3
    if (total === 3)
      return (
        <div className="grid grid-cols-3 gap-4">
          {images.map((img, i) => renderImage(img, i, "h-60"))}
        </div>
      );

    // 4 = 3 + 1
    if (total === 4)
      return (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4">
            {images.slice(0, 3).map((img, i) => renderImage(img, i, "h-60"))}
          </div>
          {renderImage(images[3], 3, "h-80")}
        </div>
      );

    // 5 = 3 + 2
    if (total === 5)
      return (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4">
            {images.slice(0, 3).map((img, i) => renderImage(img, i, "h-60"))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images
              .slice(3, 5)
              .map((img, i) => renderImage(img, i + 3, "h-60"))}
          </div>
        </div>
      );

    // 6 = normal grid
    if (total === 6)
      return (
        <div className="grid grid-cols-3 gap-4">
          {images.map((img, i) => renderImage(img, i, "h-60"))}
        </div>
      );

    // 7 = 3 + 3 + 1
    if (total === 7)
      return (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4">
            {images.slice(0, 6).map((img, i) => renderImage(img, i, "h-60"))}
          </div>
          {renderImage(images[6], 6, "h-60")}
        </div>
      );

    // 8 = 3 + 3 + 2
    if (total === 8)
      return (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4">
            {images.slice(0, 6).map((img, i) => renderImage(img, i, "h-60"))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images
              .slice(6, 8)
              .map((img, i) => renderImage(img, i + 6, "h-60"))}
          </div>
        </div>
      );

    // fallback
    return (
      <div className="grid grid-cols-3 gap-4">
        {images.map((img, i) => renderImage(img, i, "h-60"))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="sm:hidden">
        <MobileGrid />
      </div>

      <div className="hidden sm:block">
        <DesktopLayout />
      </div>
    </div>
  );
};

export default ResponsiveImageGallery;
