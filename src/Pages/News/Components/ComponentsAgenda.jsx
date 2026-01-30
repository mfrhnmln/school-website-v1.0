import ComponentsContentList from "./ComponentsContentList";
import DataAgenda from "../../../Data/DataAgenda";

const ComponentsAgenda = ({ agendaList, maxItems, layout }) => {
  return (
    <ComponentsContentList
      data={agendaList}
      fallbackData={DataAgenda}
      maxItems={maxItems}
      layout={layout}
    />
  );
};

export default ComponentsAgenda;
