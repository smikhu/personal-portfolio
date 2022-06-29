import { Link as ScrollLink } from "react-scroll";
import { NavbarContainer } from "./styles/Navbar.styled";

const Navbar = () => {
  return (
    <NavbarContainer>
        <nav>
          <ul>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
    </NavbarContainer>
  );
};

export default Navbar;
