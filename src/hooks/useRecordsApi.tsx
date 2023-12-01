import { useCallback } from "react";
import RecordStructure from "../store/feature/records/types";
import axios from "axios";

interface UseRecordsApiStructure {
  getRecords: () => Promise<RecordStructure[]>;
}

const useRecordsApi = (): UseRecordsApiStructure => {
  const getRecords = useCallback(async (): Promise<RecordStructure[]> => {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;

    const { data: records } = await axios.get<RecordStructure[]>("/records");

    return records;
  }, []);

  return {
    getRecords,
  };
};

export default useRecordsApi;
