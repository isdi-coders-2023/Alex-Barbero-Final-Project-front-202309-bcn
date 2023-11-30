import recordStructure from "../../store/feature/records/types";
import RecordCard from "../RecordCard/RecordCard";
import RecordsListStyled from "./RecordsListStyled";

interface RecordsListProps {
  records: recordStructure[];
}

const RecordsList = ({ records }: RecordsListProps): React.ReactElement => {
  return (
    <RecordsListStyled>
      {records.map((record) => (
        <li key={record.id}>
          <RecordCard record={record} />
        </li>
      ))}
      <img
        className="footer-box"
        src="./upperBox.png"
        alt="footer box up"
        height="344"
        width="390"
      />
      <img
        className="footer-box footer-box--down"
        src="./footerBox.png"
        alt="footer box down"
        height="215"
        width="390"
      />
    </RecordsListStyled>
  );
};

export default RecordsList;
