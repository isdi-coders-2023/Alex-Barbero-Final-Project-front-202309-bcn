import styled from "styled-components";

const RecordsListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  justify-items: center;
  justify-content: space-around;
  position: relative;

  .footer-box {
    &--up {
      width: 320px;
      height: auto;
      position: fixed;
      bottom: 0;
      z-index: -1;
    }

    &--down {
      width: 320px;
      height: auto;
      position: fixed;
      bottom: 0;
      z-index: 3;
    }
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default RecordsListStyled;
