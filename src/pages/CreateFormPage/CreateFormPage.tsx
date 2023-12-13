import RecordsForm from "../../components/RecordsForm/RecordsForm";
import useRecordsApi from "../../hooks/useRecordsApi";
import PageStyled from "../RecordsPage/RecordsPageStyled";
import { RecordStructureWithoutId } from "../../store/feature/records/types";
import { useDispatch } from "react-redux";
import { updateCurrentRecordActionCreator } from "../../store/feature/records/recordsSlice";

const CreateFormPage = () => {
  const { addNewRecord } = useRecordsApi();
  const dispatch = useDispatch();

  const addCurrentRecord = async (newRecord: RecordStructureWithoutId) => {
    await addNewRecord(newRecord);
  };

  dispatch(
    updateCurrentRecordActionCreator({
      _id: "",
      albumName: "",
      backCover: "",
      bandName: "",
      cookieImage: "",
      description: "",
      frontCover: "",
      printImage: "",
      trackList: "",
    }),
  );

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
