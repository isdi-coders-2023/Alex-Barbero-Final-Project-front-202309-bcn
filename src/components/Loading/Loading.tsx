import LoadingStyled from "./LoadingStyled";

const Loading = () => {
  return (
    <LoadingStyled>
      <img
        className="loading__image"
        src="record.png"
        alt="loading record"
        width="335"
        height="334"
      />
      <h2 className="loading__text">Loading...</h2>
    </LoadingStyled>
  );
};

export default Loading;
