import styled from "styled-components";

const LoadingStyled = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d3d3d3b3;
  z-index: 4;

  .loading {
    &__image {
      width: 230px;
      height: 230px;
    }

    &__vynil {
      border: none;
      background: none;

      :hover {
        display: none;
      }
    }
    &__text {
      width: 80%;
      margin-top: -20px;
      font-weight: 800;
      text-align: center;
      color: #000;
      text-transform: uppercase;
    }
  }
`;

export default LoadingStyled;
