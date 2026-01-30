export const getPaginationRange = (
  currentPage,
  totalPages,
  windowSize = 5
) => {
  const half = Math.floor(windowSize / 2);

  let start = Math.max(1, currentPage - half);
  let end = Math.min(totalPages, start + windowSize - 1);

  // geser ke kiri kalau mentok kanan
  if (end - start + 1 < windowSize) {
    start = Math.max(1, end - windowSize + 1);
  }

  return { start, end };
};
