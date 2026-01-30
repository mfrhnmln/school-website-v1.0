import BestGraduateCard from "./BestGraduateCard";

const BestGraduateDashboard = ({ data }) => {
  return (
    <div className="flex w-full h-full max-w-7xl justify-center items-center px-5 md:px-10 lg:px-20 gap-10">
      {data.map((item, idx) => (
        <BestGraduateCard key={`${item.id}-${idx}`} item={item} />
      ))}
    </div>
  );
};

export default BestGraduateDashboard;
