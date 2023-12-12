import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: ${({ theme }) => theme.typography.mainFontFamily}
}

body {
  margin: 0;
  color:${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.backLight}
}

p{
  margin:0;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
    font-size: 20px;
}

button {
  padding: 0;
  background: none;
  border: none;
  cursor:pointer;
}

input {
  font-family: inherit;
  text-align: center;
  padding: 10px;
  border:none;
  border-radius: 5px;
}

img {
  max-width: 100%;
}

h1,
h2 {
  margin: 0;
}

  .footer-box {
    position: fixed;
    bottom: 0;

    &__image {
      width: 320px;
      height: auto;
    }

    &--down {
      z-index: 3;

      &__image {
        width: 320px;
        height: auto;
      }
    }
  }




  .not-found {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
        font-size: ${({ theme }) => theme.typography.principalInfoSize};
  flex-direction: column;
  align-items: center;
  justify-content: center;

    &__image {
      width: 230px;
      height: 230px;
    }

    &__text {
      width: 80%;
      margin: 20px;
      font-weight: 800;
      text-align: center;
      color: #000;
      text-transform: uppercase;
    }
  }
.off {
  display:none;
}


@media (min-width: 410px) {
  .footer-box {
    display:none;
  }
}

`;

export default GlobalStyle;
