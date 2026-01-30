import { useLocation } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb";
import BestGraduateCard from "./BestGraduateCard";

const BestGraduatePage = ({ data }) => {
  const location = useLocation();
  const isGraduatePage = location.pathname.includes("lulusan");

  return (
    <section className="flex flex-col w-full min-h-screen px-5 md:px-10 lg:px-20 gap-6 pt-32 pb-20 lg:pt-36 lg:pb-28">
      <Breadcrumb
        paths={[
          { label: "Home", href: "/" },
          { label: isGraduatePage ? "Lulusan Terbaik" : "Lulusan" },
        ]}
      />

      <div className="flex flex-wrap w-full h-full max-w-5xl mx-auto items-center justify-center gap-10">
        {data.map((item, idx) => (
          <BestGraduateCard key={`${item.id}-${idx}`} item={item} />
        ))}
      </div>
    </section>
  );
};

export default BestGraduatePage;
