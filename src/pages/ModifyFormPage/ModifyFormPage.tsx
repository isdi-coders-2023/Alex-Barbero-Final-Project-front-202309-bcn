import RecordsForm from "../../components/RecordsForm/RecordsForm";
import { useAppSelector } from "../../store/hooks";
import PageStyled from "../RecordsPage/RecordsPageStyled";

const ModifyFormPage = () => {
  const currentRecord = useAppSelector(
    (state) => state.recordsState.currentRecord,
  );
  return (
    <PageStyled>
      <h1 className="main-title">Modify Record</h1>
      <RecordsForm submitAction={() => {}} initialState={currentRecord} />
    </PageStyled>
  );
};

export default ModifyFormPage;
