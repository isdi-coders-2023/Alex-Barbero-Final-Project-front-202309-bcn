import { useCallback } from "react";
import RecordStructure from "../store/feature/records/types";
import axios from "axios";
import { RecordsStateStructure } from "../store/feature/records/recordsSlice";

interface UseRecordsApiStructure {
  getRecords: () => Promise<RecordsStateStructure>;
}

const useRecordsApi = (): UseRecordsApiStructure => {
  const getRecords = useCallback(async (): Promise<RecordsStateStructure> => {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;

    const { data: records } = await axios.get<{ records: RecordStructure[] }>(
      "/records",
    );

    return records;
  }, []);

  return {
    getRecords,
  };
};

export default useRecordsApi;
