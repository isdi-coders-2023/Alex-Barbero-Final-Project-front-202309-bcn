import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul className="nav">
        <li>
          <NavLink className="nav__link" to="/home">
            {({ isActive }) => (
              <img
                aria-label={isActive ? "go home On" : "go home Off"}
                alt={isActive ? "go home On" : "go home Off"}
                src={isActive ? "/openBox.webp" : "/closedBox.webp"}
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
                aria-label={isActive ? "add new On" : "add new Off"}
                alt={isActive ? "add new On" : "add new Off"}
                src={isActive ? "/addOn.webp" : "/addOff.webp"}
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
