import styled from "styled-components";

const RecordCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  position: relative;

  .record {
    &__background {
      width: 195px;
      height: auto;
      position: absolute;
      border-radius: 50%;
      box-shadow: -10px 10px 10px 0px rgba(0, 0, 0, 0.5);
    }

    &__vynil {
      z-index: 1;
      width: 200px;
      overflow-wrap: anywhere;
      border-radius: 112px 112px 0 0;
      display: flex;
      padding: 10px;
      align-items: center;
      flex-direction: column;
    }

    &__title {
      color: ${({ theme }) => theme.colors.light};
      font-weight: 600;
      font-size: ${({ theme }) => theme.typography.principalInfoSize};
      text-shadow: 0px 0px 5px #000;
    }

    &__album {
      color: ${({ theme }) => theme.colors.light};
      font-weight: 400;
      font-size: ${({ theme }) => theme.typography.detailInfoSize};
      text-shadow: 0px 0px 5px #000;
    }

    &__poster {
      z-index: 1;
      height: 200px;
      width: 200px;
      box-shadow: -10px 10px 10px 0px rgba(0, 0, 0, 0.5);
    }

    &__front-cover {
      width: 100%;
      height: 100%;
    }

    &__icons-box {
      z-index: 2;
      display: flex;
      position: absolute;
      bottom: 20px;
      right: -25px;
      gap: 10px;
      flex-direction: column;
    }
  }
`;

export default RecordCardStyled;
