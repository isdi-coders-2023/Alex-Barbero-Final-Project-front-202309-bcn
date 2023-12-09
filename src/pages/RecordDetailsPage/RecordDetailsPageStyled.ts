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

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .main-title {
    font-family: fantasy;
    font-weight: lighter;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    color: #fff;
    text-transform: uppercase;
    width: 100%;
    height: 50px;
    position: fixed;
    top: 90px;
    z-index: 3;
    padding: 10px;
    text-align: center;
  }

  .details {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;

    &__images {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      justify-content: flex-end;
      height: 90vh;
    }
    &__images-box {
      width: 80%;
      display: flex;
    }

    &__print {
      width: 60vw;
      height: 60vw;
      transform: rotate(-24.339deg);
      box-shadow: -10px 10px 10px 0px rgba(0, 0, 0, 0.5);
      margin-right: -25vw;
      margin-left: 10vw;
    }

    &__cookie {
      width: 40vw;
      height: 40vw;
      z-index: 1;
      border-radius: 50%;
      box-shadow: -10px 10px 10px 0px rgba(0, 0, 0, 0.5);
    }

    &__front {
      width: 80%;
      height: auto;
      margin-top: -10px;
      box-shadow: -10px 10px 10px 0px rgba(0, 0, 0, 0.5);
    }

    &__info-box {
      z-index: 2;
      padding: 90px 35px 30px 35px;
      background: rgba(30, 30, 30, 0.73);
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      text-shadow: 0px 0px 15px #000;
    }

    &__info {
      text-align: center;
      font-size: 20px;
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
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
  }

  .off {
    display: none;
  }
`;

export default RecordDetailsPageStyled;
