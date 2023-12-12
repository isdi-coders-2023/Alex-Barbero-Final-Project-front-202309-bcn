import { useNavigate, useParams } from "react-router-dom";
import useRecordsApi from "../../hooks/useRecordsApi";
import RecordDetailsPageStyled from "./RecordDetailsPageStyled";
import { updateCurrentRecordActionCreator } from "../../store/feature/records/recordsSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { useMemo, useState } from "react";

const RecordDetailsPage = () => {
  const { recordId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getRecordById } = useRecordsApi();
  const currentRecord = useAppSelector(
    (state) => state.recordsState.currentRecord,
  );

  const [isInfoActive, setIsInfoActive] = useState<boolean>(false);

  useMemo(async () => {
    const record = await getRecordById(recordId!);

    if (!record) {
      return;
    }
    dispatch(updateCurrentRecordActionCreator(record));
  }, [dispatch, getRecordById, recordId]);

  const splitedDescription = currentRecord.description.split(" ");
  const firstWord = splitedDescription.shift();
  const descriptionWithoutFirstWord = splitedDescription
    .slice(0, splitedDescription.length)
    .join(" ");
  const splitedTrackList = currentRecord.trackList.split(",");

  const modifyCurrentRecord = () => {
    dispatch(updateCurrentRecordActionCreator(currentRecord));
    navigate("/modify");
  };

  return (
    <RecordDetailsPageStyled>
      <h1 className={`main-title ${isInfoActive ? "main-title-active" : ""}`}>
        Record details
      </h1>
      <section className="details">
        <div className="details__posters-box">
          <img
            src={currentRecord.cookieImage}
            alt={`${currentRecord.bandName} cookie`}
            className="details__cookie"
            width="173"
            height="173"
          />
          <div className="details__print-box">
            <button
              onClick={() => setIsInfoActive(!isInfoActive)}
              className="details__info-button"
            >
              <img src="infoBlack.webp" alt="info On" width="62" height="62" />
            </button>
            <img
              src={currentRecord.printImage}
              alt={`${currentRecord.bandName} print`}
              className="details__print"
              width="238"
              height="238"
            />
          </div>

          <div className="details__front">
            <button
              className="details__modify-button"
              onClick={modifyCurrentRecord}
            >
              <img
                src="modifyRecord.webp"
                alt="modifyRecord"
                width="62"
                height="62"
              />
            </button>
            <img
              className="details__front-image"
              src={currentRecord.frontCover}
              alt={`${currentRecord.bandName} front`}
              width="323"
              height="323"
            />
          </div>
        </div>
        <div className={isInfoActive ? "details__info-background" : "off"} />
        <button
          onClick={() => setIsInfoActive(!isInfoActive)}
          className={`details__info-box ${isInfoActive ? "" : "off"}`}
        >
          <p className="details__info">
            <span className="details__info-title">{firstWord}</span>
            {descriptionWithoutFirstWord}
          </p>
          <div className="details__tracks-box">
            <h3 className="details__tracks-title">Track list</h3>
            <ul>
              {splitedTrackList.map((track) => (
                <li key={track} className="details__info">
                  {track}
                </li>
              ))}
            </ul>
          </div>
        </button>
      </section>
    </RecordDetailsPageStyled>
  );
};

export default RecordDetailsPage;
