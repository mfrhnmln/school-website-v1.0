import { Link } from "react-router-dom";

const BestGraduateCard = ({ item }) => {
  return (
    <div
      className="flex flex-col w-75 rounded-2xl overflow-hidden
        shadow-md hover:shadow-xl hover:scale-105 transition-all
        bg-[var(--background_surface)]"
    >
      <Link to={`/detail/lulusan/${encodeURIComponent(item.name)}`}>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover"
        />

        <div className="flex flex-col items-center gap-1 p-4 bg-[var(--background_surface)]">
          <p className="text-subtitle font-bold text-secondary">{item.name}</p>
          <p className="text-paragraph">{item.status}</p>
          <p className="text-helper">NEM: {item.nem}</p>
          <p className="text-helper">Masuk {item.sma}</p>
        </div>
      </Link>
    </div>
  );
};

export default BestGraduateCard;
