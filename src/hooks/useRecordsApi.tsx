import { useCallback } from "react";
import RecordStructure from "../store/feature/records/types";
import axios from "axios";
import { RecordsStateStructure } from "../store/feature/records/recordsSlice";
import { useDispatch } from "react-redux";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/feature/ui/uiSlice";
import { useNavigate } from "react-router-dom";

interface UseRecordsApiStructure {
  getRecords: () => Promise<RecordsStateStructure>;
  deleteRecord: (recordId: string) => Promise<void>;
}

const useRecordsApi = (): UseRecordsApiStructure => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getRecords = useCallback(async (): Promise<RecordsStateStructure> => {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;

    try {
      dispatch(showLoadingActionCreator());

      const { data: records } = await axios.get<{ records: RecordStructure[] }>(
        "/records",
      );

      dispatch(hideLoadingActionCreator());

      return records;
    } catch (error) {
      navigate("/not-found");
      dispatch(hideLoadingActionCreator());
      throw (error as Error).message;
    }
  }, [dispatch, navigate]);

  const deleteRecord = useCallback(
    async (recordId: string): Promise<void> => {
      axios.defaults.baseURL = import.meta.env.VITE_API_URL;

      try {
        dispatch(showLoadingActionCreator());

        await axios.delete<{
          message: string;
        }>(`/records/${recordId}`);

        dispatch(hideLoadingActionCreator());
      } catch (error) {
        navigate("/not-found");
        dispatch(hideLoadingActionCreator());
        throw (error as Error).message;
      }
    },
    [dispatch, navigate],
  );

  return {
    getRecords,
    deleteRecord,
  };
};

export default useRecordsApi;
