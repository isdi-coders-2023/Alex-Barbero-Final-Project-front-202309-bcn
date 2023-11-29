import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import AppStyled from "./Appstyled";
import RecordsPage from "../../pages/RecordsPage/RecordsPage";

const App = () => {
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
