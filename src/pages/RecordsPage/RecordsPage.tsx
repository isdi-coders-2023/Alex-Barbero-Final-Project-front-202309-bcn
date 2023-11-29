import RecordsList from "../../components/RecordsList/RecordsList";
import { useAppSelector } from "../../store/hooks";
import RecordsPageStyled from "./RecordsPageStyled";

const RecordsPage = () => {
  const records = useAppSelector((state) => state.recordsState.records);

  return (
    <RecordsPageStyled>
      <h1>My records</h1>
      <RecordsList records={records} />
    </RecordsPageStyled>
  );
};

export default RecordsPage;
