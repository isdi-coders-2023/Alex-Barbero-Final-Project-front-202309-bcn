import { useParams } from "react-router-dom";
import PageStyled from "../RecordsPage/RecordsPageStyled";
import useRecordsApi from "../../hooks/useRecordsApi";
import { useEffect } from "react";

const RecordDetailsPage = () => {
  const { id } = useParams();

  const { getRecordById } = useRecordsApi();

  useEffect(() => {
    (async () => {
      const records = await getRecordById(id!);

      if (!records) {
        return;
      }
    })();
  }, [getRecordById, id]);

  return (
    <PageStyled>
      <h1 className="main-title">Record details</h1>
    </PageStyled>
  );
};

export default RecordDetailsPage;
