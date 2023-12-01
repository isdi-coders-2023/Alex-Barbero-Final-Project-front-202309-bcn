import { useCallback } from "react";
import RecordStructure from "../store/feature/records/types";
import axios from "axios";
import { RecordsStateStructure } from "../store/feature/records/recordsSlice";
import { useDispatch } from "react-redux";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/feature/ui/uiSlice";

interface UseRecordsApiStructure {
  getRecords: () => Promise<RecordsStateStructure>;
}

const useRecordsApi = (): UseRecordsApiStructure => {
  const dispatch = useDispatch();

  const getRecords = useCallback(async (): Promise<RecordsStateStructure> => {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;

    dispatch(showLoadingActionCreator());

    const { data: records } = await axios.get<{ records: RecordStructure[] }>(
      "/records",
    );

    dispatch(hideLoadingActionCreator());

    return records;
  }, [dispatch]);

  return {
    getRecords,
  };
};

export default useRecordsApi;
