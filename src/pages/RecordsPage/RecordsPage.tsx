import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RecordsList from "../../components/RecordsList/RecordsList";
import useRecordsApi from "../../hooks/useRecordsApi";
import { loadRecordsActionCreator } from "../../store/feature/records/recordsSlice";
import RecordsPageStyled from "./RecordsPageStyled";

const RecordsPage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { getRecords } = useRecordsApi();

  useEffect(() => {
    (async () => {
      const { records } = await getRecords();

      dispatch(loadRecordsActionCreator(records));
    })();
  }, [dispatch, getRecords]);

  return (
    <RecordsPageStyled>
      <h1 className="main-title">My records</h1>
      <RecordsList />
    </RecordsPageStyled>
  );
};

export default RecordsPage;
