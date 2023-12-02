import { useState } from "react";
import recordStructure from "../../store/feature/records/types";
import RecordCardStyled from "./RecordCardStyled";
import { useDispatch } from "react-redux";
import { deleteRecordActionCreator } from "../../store/feature/records/recordsSlice";
import useRecordsApi from "../../hooks/useRecordsApi";

interface RecordCardProps {
  record: recordStructure;
}

const RecordCard = ({
  record: { albumName, bandName, frontCover, _id },
}: RecordCardProps): React.ReactElement => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const { deleteRecord } = useRecordsApi();

  const toggleIconsVisibility = () => {
    setIsActive(!isActive);
  };

  const deleteCurrentRecord = (): void => {
    (async () => {
      await deleteRecord(_id);
      dispatch(deleteRecordActionCreator(_id));
    })();
  };

  return (
    <RecordCardStyled onClick={toggleIconsVisibility}>
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
      <div className="record__poster">
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
        <a className={isActive ? "" : "off"} href="/home">
          <img
            src="modifyRecord.webp"
            alt={isActive ? "modify On" : "modify Off"}
            width="62"
            height="62"
          />
        </a>
        <button onClick={deleteCurrentRecord} className={isActive ? "" : "off"}>
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
