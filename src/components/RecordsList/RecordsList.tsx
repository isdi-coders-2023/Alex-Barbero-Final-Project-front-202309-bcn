import { useAppSelector } from "../../store/hooks";
import RecordCard from "../RecordCard/RecordCard";
import RecordsListStyled from "./RecordsListStyled";

const RecordsList = (): React.ReactElement => {
  const records = useAppSelector((state) => state.recordsState.records);

  return records.length > 0 ? (
    <RecordsListStyled>
      {records.map((record) => (
        <li key={record._id}>
          <RecordCard record={record} />
        </li>
      ))}
      <div className="footer-box">
        <img
          className="footer-box__image"
          src="./upperBox.png"
          alt="footer box up"
          height="344"
          width="390"
        />
      </div>
      <div className="footer-box footer-box--down">
        <img
          className="footer-box--down__image"
          src="./footerBox.png"
          alt="footer box down"
          height="215"
          width="390"
        />
      </div>
    </RecordsListStyled>
  ) : (
    <span>Records not found!</span>
  );
};

export default RecordsList;
