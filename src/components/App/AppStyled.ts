import styled from "styled-components";

const AppStyled = styled.main`
  .background {
    margin-top: 115px;
    z-index: -1;
    width: 100%;
    height: 100vh;
    position: fixed;
    background-image: url(./background.webp);
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.5;
  }

  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 3;
    height: 10px;
    background-color: #fff;
  }

  @media (min-width: 410px) {
    .background {
      background-image: url(./backgroundBig.webp);
      background-size: contain;
      background-repeat: repeat-x;
    }
  }
`;

export default AppStyled;
