import RecordsForm from "../../components/RecordsForm/RecordsForm";
import useRecordsApi from "../../hooks/useRecordsApi";
import RecordStructure from "../../store/feature/records/types";
import { useAppSelector } from "../../store/hooks";
import PageStyled from "../RecordsPage/RecordsPageStyled";

const ModifyFormPage = () => {
  const currentRecord = useAppSelector(
    (state) => state.recordsState.currentRecord,
  );

  const { modifyRecord } = useRecordsApi();

  const modifyCurrentRecord = async (newRecord: RecordStructure) => {
    await modifyRecord(newRecord);
  };

  return (
    <PageStyled>
      <h1 className="main-title">Modify Record</h1>
      <RecordsForm
        buttonText={`Modify ${currentRecord.bandName}'s Record`}
        submitAction={modifyCurrentRecord}
        initialState={currentRecord}
      />
    </PageStyled>
  );
};

export default ModifyFormPage;
