import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img src="resizedLogo.webp" alt="my box logo" width="75" height="75" />
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
