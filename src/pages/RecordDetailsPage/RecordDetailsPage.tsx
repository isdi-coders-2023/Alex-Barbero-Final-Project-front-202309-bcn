import { useParams } from "react-router-dom";
import useRecordsApi from "../../hooks/useRecordsApi";
import RecordDetailsPageStyled from "./RecordDetailsPageStyled";
import { updateCurrentRecordActionCreator } from "../../store/feature/records/recordsSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { useMemo } from "react";

const RecordDetailsPage = () => {
  const { recordId } = useParams();
  const dispatch = useDispatch();
  const { getRecordById } = useRecordsApi();
  const currentRecord = useAppSelector(
    (state) => state.recordsState.currentDetailRecord,
  );

  useMemo(async () => {
    const record = await getRecordById(recordId!);
    if (!record) {
      return;
    }
    dispatch(updateCurrentRecordActionCreator(record));
  }, [dispatch, getRecordById, recordId]);

  return (
    <RecordDetailsPageStyled>
      <h1 className="main-title">Record details</h1>
      <section className="details">
        <div className="details__images">
          <div className="details__images-box">
            <img
              src={currentRecord.printImage}
              alt={`${currentRecord.bandName} print`}
              className="details__print"
              width="238"
              height="238"
            />
            <img
              src={currentRecord.cookieImage}
              alt={`${currentRecord.bandName} cookie`}
              className="details__cookie"
              width="173"
              height="173"
            />
          </div>
          <img
            src={currentRecord.frontCover}
            alt={`${currentRecord.bandName} front`}
            className="details__front"
            width="323"
            height="323"
          />
        </div>
        <section className="details__info-box">
          <p className="details__info">
            {/* <h2 className="details__info-title">
              {currentRecord.description[0]}
            </h2> */}
            {currentRecord.description}
          </p>
          <h2 className="details__track">Track list</h2>
          <p className="details__track-list">{currentRecord.trackList}</p>
        </section>
      </section>
    </RecordDetailsPageStyled>
  );
};

export default RecordDetailsPage;
