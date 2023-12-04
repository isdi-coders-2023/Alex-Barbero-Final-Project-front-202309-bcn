import LoadingStyled from "./LoadingStyled";

const Loading = () => {
  return (
    <LoadingStyled>
      <iframe
        title="loading vynil"
        src="https://giphy.com/embed/LNOZoHMI16ydtQ8bGG"
        width="270"
        height="270"
        className="loading__vynil"
      ></iframe>
      <h2 className="loading__text">Loading...</h2>
    </LoadingStyled>
  );
};

export default Loading;
