const PAGINATION_WINDOW = 5;

const getPaginationRange = (current, total, windowSize = 5) => {
  const half = Math.floor(windowSize / 2);

  let start = Math.max(1, current - half);
  let end = Math.min(total, start + windowSize - 1);

  if (end - start + 1 < windowSize) {
    start = Math.max(1, end - windowSize + 1);
  }

  return { start, end };
};

const Pagination = ({ currentPage = 1, totalPages = 1, onPageChange }) => {
  if (totalPages <= 1) return null;

  const { start, end } = getPaginationRange(
    currentPage,
    totalPages,
    PAGINATION_WINDOW,
  );

  return (
    <div className="flex w-full px-5 justify-center items-center gap-2">
      {/* PREVIOUS */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`btn-default px-4 py-2 rounded-xl ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <i className="ri-arrow-left-circle-line"></i>
      </button>

      {/* PAGE NUMBERS */}
      {Array.from({ length: end - start + 1 }).map((_, i) => {
        const page = start + i;
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded-xl ${isActive ? "btn-primary" : "btn-default"}`}
            aria-current={isActive ? "page" : undefined}
          >
            {page}
          </button>
        );
      })}

      {/* NEXT */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`btn-default px-4 py-2 rounded-xl ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <i className="ri-arrow-right-circle-line"></i>
      </button>
    </div>
  );
};

export default Pagination;
