import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RecordsList from "../../components/RecordsList/RecordsList";
import useRecordsApi from "../../hooks/useRecordsApi";
import { loadRecordsActionCreator } from "../../store/feature/records/recordsSlice";
import RecordsPageStyled from "./RecordsPageStyled";
import { useNavigate } from "react-router-dom";

const RecordsPage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getRecords } = useRecordsApi();

  useEffect(() => {
    (async () => {
      try {
        const { records } = await getRecords();

        dispatch(loadRecordsActionCreator(records));
      } catch {
        navigate("/not-found");
      }
    })();
  }, [dispatch, getRecords, navigate]);

  return (
    <RecordsPageStyled>
      <h1 className="main-title">My records</h1>
      <RecordsList />
    </RecordsPageStyled>
  );
};

export default RecordsPage;
