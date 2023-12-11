import RecordsForm from "../../components/RecordsForm/RecordsForm";
import useRecordsApi from "../../hooks/useRecordsApi";
import PageStyled from "../RecordsPage/RecordsPageStyled";
import { RecordStructureWithoutId } from "../../store/feature/records/types";

const CreateFormPage = () => {
  const { addNewRecord } = useRecordsApi();

  const addCurrentRecord = async (newRecord: RecordStructureWithoutId) => {
    await addNewRecord(newRecord);
  };

  return (
    <PageStyled>
      <h1 className="main-title">Add a new Record</h1>
      <RecordsForm
        submitAction={addCurrentRecord}
        buttonText="Create new Record"
      />
    </PageStyled>
  );
};

export default CreateFormPage;
