const ContentInfoBar = ({
  author = "Admin X",
  date,
  onShare,
  showShare = true,
  className = "",
}) => {
  return (
    // ${className} agar dihalaman bisa tambah classname tambahan
    <div
      className={`flex w-full px-2 py-4 mx-auto justify-between items-center ${className}`}
    >
      {/* informasi last update */}
      <div className="flex items-center gap-4 text-paragraph">
        <p className="pr-4 border-r border-[var(--border_default)]">
          <i className="ri-user-fill pr-1 text-small-icon"></i> {author}
        </p>

        {date && (
          <p>
            <i className="ri-calendar-2-fill pr-1 text-small-icon"></i> {date}
          </p>
        )}
      </div>

      {showShare && (
        <button
          type="button"
          onClick={onShare}
          className="cursor-pointer hover:scale-125 transition"
        >
          {/* rubah title jadi sidear dan "admin x" jadi "admin" */}
          <i className="ri-share-forward-fill text-small-icon"></i>
        </button>
      )}
    </div>
  );
};

export default ContentInfoBar;
