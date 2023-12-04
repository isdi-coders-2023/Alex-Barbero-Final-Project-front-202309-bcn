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
  }

  .toast {
    position: fixed;
    top: 120px;
    z-index: 4;
    padding: 10px;
    background-color: #b0b0b0;
    border: black;
    border-radius: 10px;
  }
`;

export default AppStyled;
