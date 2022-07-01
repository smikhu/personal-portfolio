import { Link as ScrollLink } from "react-scroll";
import { NavbarContainer } from "./styles/Navbar.styled";

import soul from "../images/soul.png";
import reality from "../images/reality.png";
import space from "../images/space.png";
import power from "../images/power.png";
import time from "../images/time.png";
import mind from "../images/mind.png";
import git from "../images/github.png";
import linked from "../images/linkedin.png";

const Navbar = () => {
  return (
    <NavbarContainer>
      <ul>
        <li className="stone-img">
          <img src={soul} />
          <figcaption className="stone-img-text">About</figcaption>
        </li>
        <li className="stone-img">
          <img src={power} />
          <figcaption className="stone-img-text">Skills</figcaption>
        </li>
        <li className="stone-img">
          <img src={space} />
          <figcaption className="stone-img-text">Projects</figcaption>
        </li>
        <li className="stone-img">
          <img src={time} />
          <figcaption className="stone-img-text">Contact</figcaption>
        </li>

        <li className="personal stone-img">
          <img src={mind} />
          <figcaption className="stone-img-text">
            <img class="socials" src={git} />
          </figcaption>
        </li>
        <li className="stone-img">
          <img src={reality} />
          <figcaption className="stone-img-text">
            <img class="socials" src={linked} />
          </figcaption>
        </li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
