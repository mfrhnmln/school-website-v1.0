import ComponentsContentList from "./ComponentsContentList";
import DataAcademicAchievement from "../../../Data/DataAcademicAchievement";

const ComponentsAcademicAchievement = ({ academicAchievement, maxItems, layout }) => {
  return (
    <ComponentsContentList
      data={academicAchievement}
      fallbackData={DataAcademicAchievement}
      maxItems={maxItems}
      layout={layout}
    />
  );
};

export default ComponentsAcademicAchievement;
