import RecordsForm from "../../components/RecordsForm/RecordsForm";
import useRecordsApi from "../../hooks/useRecordsApi";
import PageStyled from "../RecordsPage/RecordsPageStyled";
import RecordStructure from "../../store/feature/records/types";

const RecordsFormPage = () => {
  const { addNewRecord } = useRecordsApi();

  const addCurrentRecord = (newRecord: RecordStructure) => {
    addNewRecord(newRecord);
  };

  return (
    <PageStyled>
      <h1 className="main-title">Add a new Record</h1>
      <RecordsForm submitAction={addCurrentRecord} />
    </PageStyled>
  );
};

export default RecordsFormPage;
