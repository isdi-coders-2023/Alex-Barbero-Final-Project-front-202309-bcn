import recordStructure from "../../store/feature/records/types";
import RecordCardStyled from "./RecordCardStyled";
import { useDispatch } from "react-redux";
import {
  updateCurrentRecordActionCreator,
  updateRecordStateActionCreator,
} from "../../store/feature/records/recordsSlice";
import useRecordsApi from "../../hooks/useRecordsApi";
import { useNavigate } from "react-router-dom";

interface RecordCardProps {
  record: recordStructure;
}

const RecordCard = ({
  record,
  record: { albumName, bandName, frontCover, _id, isActive },
}: RecordCardProps): React.ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { deleteRecord } = useRecordsApi();

  const toggleIconsVisibility = () => {
    dispatch(updateRecordStateActionCreator(_id));
  };

  const deleteCurrentRecord = async (): Promise<void> => {
    await deleteRecord(_id, albumName);
  };

  const seeCurrentRecordDetails = () => {
    navigate(`/${_id}`);
  };

  const modifyCurrentRecord = () => {
    dispatch(updateCurrentRecordActionCreator(record));
    navigate("/modify");
  };

  return (
    <RecordCardStyled onClick={toggleIconsVisibility}>
      <button
        className={
          isActive ? "record__button record__button-see-details" : "off"
        }
        onClick={seeCurrentRecordDetails}
      >
        <img
          src="infoWhite.webp"
          alt={isActive ? "info On" : "info Off"}
          width="62"
          height="62"
        />
      </button>
      <img
        className="record__background"
        src="./record.png"
        alt="record background"
        width="225"
        height="225"
      />
      <div className="record__vynil">
        <h2 className="record__title">{bandName}</h2>
        <span className="record__album">{albumName}</span>
      </div>
      <div className={isActive ? "record__poster--big" : "record__poster"}>
        <img
          className="record__front-cover"
          src={frontCover}
          alt={albumName}
          width="323"
          height="323"
          title={`record ${bandName}`}
        />
      </div>
      <div className="record__icons-box">
        <button
          className={isActive ? "record__button" : "off"}
          onClick={modifyCurrentRecord}
        >
          <img
            src="modifyRecord.webp"
            alt={isActive ? "modify On" : "modify Off"}
            width="62"
            height="62"
          />
        </button>
        <button
          onClick={deleteCurrentRecord}
          className={isActive ? "record__button" : "off"}
        >
          <img
            src="trashCanIcon.webp"
            alt={isActive ? "delete On" : "delete Off"}
            width="62"
            height="62"
          ></img>
        </button>
      </div>
    </RecordCardStyled>
  );
};

export default RecordCard;
