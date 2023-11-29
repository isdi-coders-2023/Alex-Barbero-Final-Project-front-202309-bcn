import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import AppStyled from "./Appstyled";
import RecordsPage from "../../pages/RecordsPage/RecordsPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadRecordsActionCreator } from "../../store/feature/records/recordsSlice";
import recordsMock from "../../mocks/utils/recordsMock";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(loadRecordsActionCreator(recordsMock));
    })();
  }, [dispatch]);

  return (
    <>
      <Header />
      <AppStyled>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<RecordsPage />} />
        </Routes>
      </AppStyled>
    </>
  );
};
export default App;
