import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        className="logo"
        src="/logo.webp"
        alt="my box logo"
        width="123"
        height="115"
      />
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
