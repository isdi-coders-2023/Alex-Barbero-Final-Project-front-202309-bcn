import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = () => {
  return (
    <NavigationStyled>
      <ul className="nav__box">
        <li>
          <NavLink className="nav__link" to="/home">
            {({ isActive }) => (
              <img
                alt="go-home"
                src={isActive ? "./openBox.webp" : "./closedBox.webp"}
                width={isActive ? "54" : "46"}
                height={isActive ? "49" : "42"}
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/add">
            {({ isActive }) => (
              <img
                alt="add-new"
                src={isActive ? "./addOn.webp" : "./addOff.webp"}
                width={isActive ? "53" : "39"}
                height={isActive ? "49" : "36"}
              />
            )}
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};
export default Navigation;
