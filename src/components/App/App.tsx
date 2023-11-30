import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import RecordsPage from "../../pages/RecordsPage/RecordsPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadRecordsActionCreator } from "../../store/feature/records/recordsSlice";
import recordsMock from "../../mocks/recordsMock";
import AppStyled from "./AppStyled";

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
        <img
          className="background-image"
          src="background.jpg"
          alt="background"
        />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<RecordsPage />} />
        </Routes>
      </AppStyled>
    </>
  );
};
export default App;
