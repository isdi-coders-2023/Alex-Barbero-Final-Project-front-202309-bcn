import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = () => {
  return (
    <NotFoundPageStyled>
      <img
        className="not-found__image"
        src="brokenRecord.webp"
        alt="broken record"
        width="335"
        height="334"
      />
      <span className="not-found__text">Ouch! 404 page not found...</span>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
