import BestGraduateContainer from "./BestGraduateContainer";
import DataBestGraduate from "../../Data/DataBestGraduate";

const BestGraduate = () => {
  // kalau mau semua langsung tampil:
  const dataGraduates = DataBestGraduate;

  // kalau mau filter tertentu, misalnya tahun:
  // const dataGraduate = DataBestGraduate.filter((item) => item.year === "2024");

  return <BestGraduateContainer data={dataGraduates} variant="page" />;
};

export default BestGraduate;
