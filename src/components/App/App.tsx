import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import RecordsPage from "../../pages/RecordsPage/RecordsPage";
import AppStyled from "./AppStyled";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const App = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.uiState.isLoading);

  return (
    <>
      <Header />
      {isLoading && <Loading />}
      <AppStyled>
        <div className="background" />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<RecordsPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
        </Routes>
      </AppStyled>
    </>
  );
};
export default App;
