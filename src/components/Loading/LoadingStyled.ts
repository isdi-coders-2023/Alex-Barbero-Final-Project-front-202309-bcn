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
    &__text {
      margin: 20px;
      color: ${({ theme }) => theme.colors.black};
      text-transform: uppercase;
    }
  }
`;

export default LoadingStyled;
