import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RecordsList from "../../components/RecordsList/RecordsList";
import useRecordsApi from "../../hooks/useRecordsApi";
import { loadRecordsActionCreator } from "../../store/feature/records/recordsSlice";
import PageStyled from "./RecordsPageStyled";
import {
  hideLoadingActionCreator,
  updateToastActionCreator,
} from "../../store/feature/ui/uiSlice";

const RecordsPage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { getRecords } = useRecordsApi();

  useEffect(() => {
    (async () => {
      try {
        const records = await getRecords();

        if (!records) {
          return;
        }

        dispatch(loadRecordsActionCreator(records));
      } catch {
        dispatch(hideLoadingActionCreator());
        dispatch(
          updateToastActionCreator({
            message: `Records not found! 🚫`,
            type: "error",
          }),
        );
      }
    })();
  }, [dispatch, getRecords]);

  return (
    <PageStyled>
      <h1 className="main-title">My records</h1>
      <RecordsList />
    </PageStyled>
  );
};

export default RecordsPage;
