import styled from "styled-components";

const RecordDetailsPageStyled = styled.div`
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

  .main-title {
    font-family: "Keania One", serif;
    font-weight: lighter;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    width: 100%;
    height: 50px;
    position: fixed;
    padding: 10px;
    top: 90px;
    z-index: 3;
    text-align: center;

    &-active {
      background: linear-gradient(
        180deg,
        #5b5b5b 69.1%,
        #5b5b5bb0 87.33%,
        #5b5b5b6b 100%
      );
      color: #fff;
    }
  }

  .details {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &__posters-box {
      position: fixed;
      bottom: 30px;
    }

    &__cookie {
      width: 130px;
      height: 130px;
      position: relative;
      left: 100px;
      z-index: 1;
      border-radius: 50%;
      box-shadow: -10px 10px 10px 0px rgba(0, 0, 0, 0.5);
    }

    &__print-box {
      display: flex;
      flex-direction: column;
      margin-top: -150px;
      align-items: center;
    }

    &__print {
      width: 180px;
      margin-top: -50px;
      height: auto;
      transform: rotate(-24.339deg);
      box-shadow: -10px 10px 10px 0px rgba(0, 0, 0, 0.5);
    }

    &__info-button {
      z-index: 1;
      position: relative;
      right: 66px;
      z-index: 1;
    }

    &__front {
      display: flex;
      margin-top: -30px;
      flex-direction: column;
      align-items: center;
      align-items: flex-end;

      &-image {
        width: 230px;
        height: auto;
        margin-top: -40px;
        box-shadow: -10px 10px 10px 0px rgba(0, 0, 0, 0.5);
      }
    }

    &__modify-button {
      z-index: 1;
      margin-right: 20px;
    }

    &__info-background {
      position: fixed;
      top: 90px;
      width: 100%;
      background: rgb(30 30 30 / 71%);
      height: 100vh;
    }

    &__info-box {
      z-index: 2;
      padding: 65px 30px;
      text-shadow: 0px 0px 15px #000;
    }

    &__info {
      text-align: center;
      transition: all 200ms;
      flex-direction: column;
      animation-name: appear;
      animation-duration: 1s;
      color: #fff;
      animation-timing-function: ease-in-out;
    }

    &__info-title {
      margin-right: 10px;
      display: -webkit-inline-box;
      font-size: 1.5em;
      font-weight: bold;
      transition: all 200ms;
      flex-direction: column;
      animation-name: appear;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      color: #fff;
    }

    &__tracks-title {
      margin: 5px;
      display: -webkit-inline-box;
      font-size: 24px;
      font-weight: bold;
      transition: all 200ms;
      flex-direction: column;
      animation-name: appear;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      color: #fff;
    }

    &__tracks-box {
      display: flex;
      margin-top: 50px;
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
  }

  .off {
    display: none;
    margin-right: 20px;
  }

  @media (min-width: 500px) {
    .details {
      justify-content: center;

      &__posters-box {
        display: flex;
        position: fixed;
        bottom: 15vh;
        align-items: center;
      }

      &__images {
        flex-direction: row;
      }

      &__cookie {
        width: 200px;
        height: auto;
      }

      &__images {
        width: 100%;
        display: flex;
        flex-direction: row;
        position: absolute;
        justify-content: center;
        margin-top: 50px;
        height: 50vh;
        align-items: center;
      }

      &__info-button {
        z-index: 2;
        width: 62px;
        height: 62px;
      }

      &__front-image {
        width: 323px;
      }

      &__print-box {
        margin-top: 0;
      }

      &__print {
        width: 245px;
      }
    }
  }
`;

export default RecordDetailsPageStyled;
