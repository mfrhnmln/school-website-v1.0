import { useEffect, useState, useCallback } from "react";
import BestGraduateDashboard from "./BestGraduateDashboard";
import BestGraduatePage from "./BestGraduatePage";

const getVisibleCount = () => {
  const width = window.innerWidth;
  if (width <= 500) return 1;
  if (width <= 768) return 2;
  if (width <= 1320) return 3;
  return 4;
};

const BestGraduateContainer = ({ data = [], variant = "page" }) => {
  const total = data.length;
  const isDashboard = variant === "dashboard";

  const [index, setIndex] = useState(0);
  const [maxVisible, setMaxVisible] = useState(getVisibleCount());

  // resize listener
  useEffect(() => {
    const handleResize = () => setMaxVisible(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
  }, [total]);

  // auto slide dashboard only
  useEffect(() => {
    if (!isDashboard || total <= 1) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [isDashboard, handleNext, total]);

  const visibleCount = Math.min(maxVisible, total);

  const visibleData = isDashboard
    ? Array.from({ length: visibleCount }, (_, i) => data[(index + i) % total])
    : data;

  return isDashboard ? (
    <BestGraduateDashboard
      data={visibleData}
    />
  ) : (
    <BestGraduatePage data={visibleData} />
  );
};

export default BestGraduateContainer;
