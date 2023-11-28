import styled from "styled-components";

const NavigationStyled = styled.nav`
  .nav {
    &__box {
      display: flex;
      justify-content: center;
      gap: 20px;
    }

    &__link {
      cursor: pointer;
    }
  }
`;

export default NavigationStyled;
