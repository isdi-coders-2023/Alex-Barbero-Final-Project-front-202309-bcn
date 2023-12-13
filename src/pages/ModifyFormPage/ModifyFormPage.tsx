import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import RecordsForm from "../../components/RecordsForm/RecordsForm";
import useRecordsApi from "../../hooks/useRecordsApi";
import { updateCurrentRecordActionCreator } from "../../store/feature/records/recordsSlice";
import RecordStructure from "../../store/feature/records/types";
import PageStyled from "../RecordsPage/RecordsPageStyled";

const ModifyFormPage = () => {
  const { recordId } = useParams();
  const { getRecordById, modifyRecord } = useRecordsApi();
  const dispatch = useDispatch();

  useMemo(async () => {
    const record = await getRecordById(recordId!);

    if (!record) {
      return;
    }
    dispatch(updateCurrentRecordActionCreator(record));
  }, [dispatch, getRecordById, recordId]);

  const modifyCurrentRecord = async (newRecord: RecordStructure) => {
    await modifyRecord(newRecord);
  };

  return (
    <PageStyled>
      <h1 className="main-title">Modify Record</h1>
      <RecordsForm buttonText="Modify" submitAction={modifyCurrentRecord} />
    </PageStyled>
  );
};

export default ModifyFormPage;
