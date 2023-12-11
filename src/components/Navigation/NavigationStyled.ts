import styled from "styled-components";

const NavigationStyled = styled.nav`
  .nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: flex-end;
    width: 130px;

    &__link {
      cursor: pointer;
      display: flex;
      justify-content: center;
      width: 60px;
    }
  }
`;

export default NavigationStyled;
