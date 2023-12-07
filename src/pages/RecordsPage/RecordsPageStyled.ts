import styled from "styled-components";

const PageStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .toast {
    position: fixed;
    top: 120px;
    z-index: 4;
    padding: 10px;
    background-color: #b0b0b0;
    border: black;
    border-radius: 10px;
  }

  .main-title {
    font-family: fantasy;
    font-weight: lighter;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    background: linear-gradient(
      180deg,
      #fff 69.1%,
      rgba(255, 255, 255, 0.54) 87.33%,
      rgba(255, 255, 255, 0) 100%
    );
    color: #db1a00;
    text-transform: uppercase;
    width: 100%;
    height: 50px;
    position: fixed;
    top: 90px;
    z-index: 3;
    text-align: center;
  }
`;

export default PageStyled;
