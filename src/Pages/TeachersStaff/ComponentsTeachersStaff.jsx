import { useEffect, useState, useCallback } from "react";

const ComponentsTeachersStaff = ({ data = [] }) => {
  // pastikan data array
  const safeData = Array.isArray(data) ? data : [];
  const total = safeData.length;

  const getVisibleCount = () => {
    const width = window.innerWidth;
    if (width <= 500) return 1;
    if (width <= 768) return 2;
    if (width <= 1320) return 3;
    return 4;
  };

  const [index, setIndex] = useState(0);
  const [maxVisible, setMaxVisible] = useState(getVisibleCount());

  // resize listener
  useEffect(() => {
    const handleResize = () => {
      setMaxVisible(getVisibleCount());
      setIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = useCallback(() => {
    if (total === 0) return;
    setIndex((prev) => (prev + 1) % total);
  }, [total]);

  // auto slide
  useEffect(() => {
    if (total <= maxVisible) return;

    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext, total, maxVisible]);

  // setelah semua hooks → baru boleh conditional render
  if (total === 0) return null;

  const visibleCount = Math.min(maxVisible, total);

  const visibleData = Array.from({ length: visibleCount }, (_, i) => {
    return safeData[(index + i) % total];
  });

  return (
    <div className="flex w-full h-full max-w-7xl justify-center items-center px-5 md:px-10 lg:px-20 gap-10">
      {visibleData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col w-75 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all bg-[var(--background_surface)]"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover"
          />

          <div className="flex flex-col items-center gap-2 p-4 bg-[var(--background_surface)]">
            <p className="text-subtitle font-bold">{item.name}</p>
            <p className="text-paragraph">{item.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComponentsTeachersStaff;
