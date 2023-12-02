import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = () => {
  return (
    <NotFoundPageStyled>
      <img
        className="not-found__image"
        src="brokenRecord.png"
        alt="broken record"
        width="335"
        height="334"
      />
      <h2 className="not-found__text">Ouch! 404 page not found...</h2>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
