import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import RecordsPage from "../../pages/RecordsPage/RecordsPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadRecordsActionCreator } from "../../store/feature/records/recordsSlice";
import AppStyled from "./AppStyled";
import useRecordsApi from "../../hooks/useRecordsApi";

const App = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { getRecords } = useRecordsApi();

  useEffect(() => {
    (async () => {
      dispatch(loadRecordsActionCreator(await getRecords()));
    })();
  }, [dispatch, getRecords]);

  return (
    <>
      <Header />
      <AppStyled>
        <div className="background" />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<RecordsPage />} />
        </Routes>
      </AppStyled>
    </>
  );
};
export default App;
