import ComponentsContentList from "./ComponentsContentList";
import DataExtracurricularAchievements from "../../../Data/DataExtracurricularAchievements";

const ComponentsExtracurricularAchievements = ({
  ExtracurricularAchievements,
  maxItems,
  layout,
}) => {
  return (
    <ComponentsContentList
      data={ExtracurricularAchievements}
      fallbackData={DataExtracurricularAchievements}
      maxItems={maxItems}
      layout={layout}
    />
  );
};

export default ComponentsExtracurricularAchievements;
