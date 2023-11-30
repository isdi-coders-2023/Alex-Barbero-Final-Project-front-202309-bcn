import styled from "styled-components";

const AppStyled = styled.main`
  padding-top: 100px;

  .background {
    z-index: -1;
    width: 100%;
    height: 100vh;
    position: fixed;
    background-image: url(./background.webp);
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export default AppStyled;
