import styled from "styled-components";

const RecordsFormStyled = styled.form`
  display: flex;
  width: 85%;
  max-width: 600px;
  margin-top: 175px;
  margin-bottom: 100px;
  padding: 41px 25px 28px 25px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 30px;
  background: #1e1e1eba;
  box-shadow: 0px 0px 50px 0px #fff;

  .form {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
    text-align: start;

    &__label {
      color: #fff;
      font-family: ${({ theme }) => theme.typography.principalInfoSize};
    }

    &__input {
      color: ${({ theme }) => theme.colors.dark};
      border-radius: 10px;
      background: #ffffffb5;
      width: 100%;
      height: 40px;
      text-align: start;
    }

    &__description {
      width: 100%;
      height: 286px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.71);
      padding: 10px;
    }

    &__create-new {
      border-radius: 10px;
      background-color: #db1a00;
      box-shadow: 0px 20px 30px 0px rgba(69, 42, 124, 0.15);
      width: 100%;
      padding: 10px;
      color: #fff;
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      font-size: 20px;
      font-style: normal;
      font-weight: 400;

      &:disabled {
        opacity: 0.5;
      }
    }
  }
`;
export default RecordsFormStyled;
