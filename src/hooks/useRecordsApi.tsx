import { useCallback } from "react";
import RecordStructure from "../store/feature/records/types";
import axios from "axios";

const useRecordsApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getRecords = useCallback(async (): Promise<RecordStructure[]> => {
    const { data: records } = await axios.get(`${apiUrl}/records`);

    return records.records;
  }, [apiUrl]);

  return {
    getRecords,
  };
};

export default useRecordsApi;
