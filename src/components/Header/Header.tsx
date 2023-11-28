import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderSyled";

const Header = () => {
  return (
    <HeaderStyled>
      <img
        src="./resizedLogo.webp"
        alt="my-box-logo"
        width="103"
        height="103"
        title="my-box-logo"
      />
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
