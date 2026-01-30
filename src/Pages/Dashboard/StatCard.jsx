import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatCard = ({ icon, value, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const isNumber = typeof value === "number";

  return (
    <div
      ref={ref}
      className="flex flex-col w-full h-full items-center justify-top gap-2 p-6 bg-[var(--background)] rounded-md shadow-md transition-all duration-500 hover:scale-105"
    >
      <div
        className="text-large-icon font-bold"
        style={{ color: "var(--primary)" }}
      >
        {icon}
      </div>

      <h2
        className="text-title font-bold"
        style={{ color: "var(--text_primary)" }}
      >
        {isNumber
          ? inView && <CountUp start={0} end={value} duration={2} />
          : value}
      </h2>

      <p
        className="text-paragraph text-center"
        style={{ color: "var(--text_primary)" }}
      >
        {label}
      </p>
    </div>
  );
};

export default StatCard;
