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
    <div className="flex justify-center items-center gap-2 flex-wrap">
      {/* PREVIOUS */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`btn btn-default ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Previous
      </button>

      {/* PAGE NUMBERS */}
      {Array.from({ length: end - start + 1 }).map((_, i) => {
        const page = start + i;
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`btn ${isActive ? "btn-primary" : "btn-default"}`}
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
        className={`btn btn-default ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
