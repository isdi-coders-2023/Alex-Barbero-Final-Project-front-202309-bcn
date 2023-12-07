import { useEffect, useState } from "react";
import RecordStructure, {
  RecordStructureWithoutId,
} from "../../store/feature/records/types";
import Button from "../Button/Button";
import RecordsFormStyled from "./RecordsFormStyled";

interface RecordFormProps {
  submitAction: (newRecord: RecordStructure) => void;
  initialState?: RecordStructureWithoutId;
}

const RecordForm = ({ submitAction, initialState }: RecordFormProps) => {
  const initialRecord: RecordStructureWithoutId = {
    albumName: "",
    backCover: "",
    bandName: "",
    cookieImage: "",
    description: "",
    frontCover: "",
    printImage: "",
    trackList: "",
  };

  const currentInitialState = initialState ? initialState : initialRecord;

  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [newRecord, setNewRecord] =
    useState<RecordStructureWithoutId>(currentInitialState);

  const updateNewRecord = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNewRecord((currentNewRecord) => ({
      ...currentNewRecord,
      [event.target.id]: event.target.value,
    }));
  };

  useEffect(() => {
    const newRecordValues = Object.values(newRecord);

    newRecordValues.every((value) => value !== "")
      ? setIsButtonDisabled(false)
      : setIsButtonDisabled(true);
  }, [newRecord]);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitAction(newRecord as RecordStructure);
  };

  return (
    <RecordsFormStyled onSubmit={onFormSubmit} aria-label="form">
      <label className="form__label" htmlFor="bandName">
        Band name:
      </label>
      <input
        className="form__input"
        type="text"
        id="bandName"
        value={newRecord.bandName}
        onChange={updateNewRecord}
        required
      />
      <label className="form__label" htmlFor="albumName">
        Record name:
      </label>
      <input
        className="form__input"
        type="text"
        id="albumName"
        value={newRecord.albumName}
        onChange={updateNewRecord}
        required
      />
      <label className="form__label" htmlFor="frontCover">
        Front cover image:
      </label>
      <input
        className="form__input"
        type="text"
        id="frontCover"
        value={newRecord.frontCover}
        onChange={updateNewRecord}
        required
      />
      <label className="form__label" htmlFor="backCover">
        Back cover image:
      </label>
      <input
        required
        className="form__input"
        type="text"
        id="backCover"
        value={newRecord.backCover}
        onChange={updateNewRecord}
      />
      <label className="form__label" htmlFor="printImage">
        Insert image:
      </label>
      <input
        required
        className="form__input"
        type="text"
        id="printImage"
        value={newRecord.printImage}
        onChange={updateNewRecord}
      />
      <label className="form__label" htmlFor="cookieImage">
        Label cookie image:
      </label>
      <input
        required
        className="form__input"
        type="text"
        id="cookieImage"
        value={newRecord.cookieImage}
        onChange={updateNewRecord}
      />
      <label className="form__label" htmlFor="description">
        Description:
      </label>
      <textarea
        className="form__description"
        required
        id="description"
        value={newRecord.description}
        onChange={updateNewRecord}
      />
      <label className="form__label" htmlFor="trackList">
        Track list:
      </label>
      <textarea
        className="form__description"
        required
        id="trackList"
        value={newRecord.trackList}
        onChange={updateNewRecord}
      />

      <Button
        title="addNew"
        isDisabled={isButtonDisabled}
        className={"form__create-new"}
        type={"submit"}
        text={"Create new Record"}
      />
    </RecordsFormStyled>
  );
};

export default RecordForm;
