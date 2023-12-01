import styled from "styled-components";

const NotFoundPageStyled = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(143, 46, 46, 0.7);

  .not-found {
    &__image {
      width: 230px;
      height: 230px;
    }

    &__text {
      width: 80%;
      margin: 20px;
      font-weight: 800;
      text-align: center;
      color: #000;
      text-transform: uppercase;
    }
  }
`;

export default NotFoundPageStyled;
