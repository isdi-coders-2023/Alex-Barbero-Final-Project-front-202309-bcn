import recordStructure from "../../store/feature/records/types";
import RecordsListStyled from "./RecordsListStyled";

interface RecordsListProps {
  records: recordStructure[];
}
const RecordsList = ({ records }: RecordsListProps) => {
  return (
    <RecordsListStyled>
      {records.map((record) => (
        <li key={record.id}>
          <h2>{record.bandName}</h2>;
        </li>
      ))}
    </RecordsListStyled>
  );
};

export default RecordsList;
