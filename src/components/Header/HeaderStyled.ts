import styled from "styled-components";

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  z-index: 3;

  .logo {
    height: 75px;
    width: auto;
  }
`;

export default HeaderStyled;
