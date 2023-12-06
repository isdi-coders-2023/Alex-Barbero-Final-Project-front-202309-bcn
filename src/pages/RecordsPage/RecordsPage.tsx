import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RecordsList from "../../components/RecordsList/RecordsList";
import useRecordsApi from "../../hooks/useRecordsApi";
import { loadRecordsActionCreator } from "../../store/feature/records/recordsSlice";
import PageStyled from "./RecordsPageStyled";
import { useNavigate } from "react-router-dom";

const RecordsPage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getRecords } = useRecordsApi();

  useEffect(() => {
    (async () => {
      const records = await getRecords();

      if (!records) {
        return;
      }

      dispatch(loadRecordsActionCreator(records));
    })();
  }, [dispatch, getRecords, navigate]);

  return (
    <PageStyled>
      <h1 className="main-title">My records</h1>
      <RecordsList />
    </PageStyled>
  );
};

export default RecordsPage;
