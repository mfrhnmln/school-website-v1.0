import ComponentsContentList from "./ComponentsContentList";
import DataNews from "../../../Data/DataNews";

const ComponentsNews = ({ newsList, maxItems, layout }) => {
  return (
    <ComponentsContentList
      data={newsList}
      fallbackData={DataNews}
      maxItems={maxItems}
      layout={layout}
    />
  );
};

export default ComponentsNews;
