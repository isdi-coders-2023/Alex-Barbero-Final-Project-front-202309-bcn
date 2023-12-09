import RecordsForm from "../../components/RecordsForm/RecordsForm";
import useRecordsApi from "../../hooks/useRecordsApi";
import PageStyled from "../RecordsPage/RecordsPageStyled";
import RecordStructure from "../../store/feature/records/types";

const CreateFormPage = () => {
  const { addNewRecord } = useRecordsApi();

  const addCurrentRecord = async (newRecord: RecordStructure) => {
    await addNewRecord(newRecord);
  };

  return (
    <PageStyled>
      <h1 className="main-title">Add a new Record</h1>
      <RecordsForm submitAction={addCurrentRecord} />
    </PageStyled>
  );
};

export default CreateFormPage;