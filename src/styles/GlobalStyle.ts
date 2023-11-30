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

button,
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

.off {
  visibility:hidden;
}
`;

export default GlobalStyle;
