import StatCard from "./StatCard";
import { RiBuilding2Fill, RiMedalFill } from "react-icons/ri";
import { FaUsers, FaUserTie } from "react-icons/fa";

const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 justify-center w-full h-full max-w-7xl px-5 md:px-10 lg:px-20 gap-6">
      <StatCard icon={<FaUsers />} value={1032} label="Peserta Didik" />
      <StatCard
        icon={<FaUserTie />}
        value={58}
        label="Pendidik & Tenaga Kependidikan"
      />
      <StatCard icon={<RiMedalFill />} value="A" label="Akreditasi" />
      <StatCard icon={<RiBuilding2Fill />} value={50} label="Tahun Berdiri" />
    </div>
  );
};

export default StatsSection;
