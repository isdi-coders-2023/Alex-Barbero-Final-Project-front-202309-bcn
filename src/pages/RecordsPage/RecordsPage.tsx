import RecordsList from "../../components/RecordsList/RecordsList";
import { useAppSelector } from "../../store/hooks";

const RecordsPage = () => {
  const records = useAppSelector((state) => state.recordsState.records);
  return (
    <>
      <h1>My records</h1>
      <RecordsList records={records} />
    </>
  );
};

export default RecordsPage;
