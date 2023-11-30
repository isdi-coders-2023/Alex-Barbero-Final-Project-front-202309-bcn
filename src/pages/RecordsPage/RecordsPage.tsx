import RecordsList from "../../components/RecordsList/RecordsList";
import { useAppSelector } from "../../store/hooks";
import RecordsPageStyled from "./RecordsPageStyled";

const RecordsPage = (): React.ReactElement => {
  const records = useAppSelector((state) => state.recordsState.records);

  return (
    <RecordsPageStyled>
      <h1 className="main-title">My records</h1>
      <RecordsList records={records} />
    </RecordsPageStyled>
  );
};

export default RecordsPage;
