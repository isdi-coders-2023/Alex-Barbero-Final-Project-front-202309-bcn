import styled from "styled-components";

const RecordCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  position: relative;

  @keyframes appear {
    0% {
      transform: scale(0);
      opacity: 0;
    }

    60% {
      transform: scale(1.05);
    }

    80% {
      transform: scale(0.95);
      opacity: 1;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  .record {
    &__background {
      width: 195px;
      height: auto;
      position: absolute;
      border-radius: 50%;
      box-shadow: -10px 10px 10px 0px rgba(0, 0, 0, 0.5);
      z-index: 1;
    }

    &__vynil {
      z-index: 1;
      width: 200px;
      overflow-wrap: anywhere;
      border-radius: 112px 112px 0 0;
      display: flex;
      padding: 20px 10px 5px 10px;
      align-items: center;
      flex-direction: column;
    }

    &__title {
      color: ${({ theme }) => theme.colors.light};
      font-weight: 600;
      font-size: ${({ theme }) => theme.typography.principalInfoSize};
      text-shadow: 0px 0px 5px #000;
      text-align: center;
    }

    &__album {
      color: ${({ theme }) => theme.colors.light};
      font-weight: 400;
      font-size: ${({ theme }) => theme.typography.detailInfoSize};
      text-shadow: 0px 0px 5px #000;
      text-align: center;
    }

    &__poster {
      transition: all 300ms;
      z-index: 1;
      height: 200px;
      width: 200px;
      box-shadow: -10px 10px 10px 0px rgba(0, 0, 0, 0.5);
    }

    &__poster--big {
      transition: all 300ms;
      z-index: 1;
      height: 210px;
      width: 210px;
      box-shadow: -10px 10px 10px 0px rgba(0, 0, 0, 0.5);
    }

    &__front-cover {
      width: 100%;
      height: 100%;
    }

    &__icons-box {
      z-index: 2;
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 20px;
      right: -25px;
      gap: 10px;
    }

    &__button {
      transition: all 200ms;
      flex-direction: column;
      animation-name: appear;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;

      &-see-details {
        margin-bottom: -10px;
        margin-top: 20px;
        z-index: 2;
      }
    }
  }
`;

export default RecordCardStyled;
