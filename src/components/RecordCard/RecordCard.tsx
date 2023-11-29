import { useState } from "react";
import recordStructure from "../../store/feature/records/types";
import RecordCardStyled from "./RecordCardStyled";

interface RecordCardProps {
  record: recordStructure;
}

const RecordCard = ({
  record: { albumName, bandName, frontCover },
}: RecordCardProps) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <RecordCardStyled
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
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
        />
      </div>
      <div className={`record__icons-box ${isActive ? "off" : ""}`}>
        <a href="/home">
          <img
            src="./modifyRecord.webp"
            alt="modify-record"
            width="62"
            height="62"
          ></img>
        </a>
        <a href="/home">
          <img
            src="./trashCanIcon.webp"
            alt="trashCanIcon"
            width="62"
            height="62"
          ></img>
        </a>
      </div>
    </RecordCardStyled>
  );
};

export default RecordCard;
