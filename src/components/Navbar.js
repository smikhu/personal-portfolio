import { Link as ScrollLink } from "react-scroll";
import { NavbarContainer } from "./styles/Navbar.styled";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import soul from "../images/soul.png";
import reality from "../images/reality.png";
import space from "../images/space.png";
import power from "../images/power.png";
import time from "../images/time.png";
import mind from "../images/mind.png";

const Navbar = () => {
  return (
    <NavbarContainer>
      <ul>
        <li className="stone-img">
          <ScrollLink smooth={true} offset={-150} to="about">
            <img alt="soul-stone" src={soul} />
            <figcaption className="stone-img-text">About</figcaption>
          </ScrollLink>
        </li>
        <li className="stone-img">
          <ScrollLink smooth={true} offset={-130} to="skills">
            <img alt="power-stone" src={power} />
            <figcaption className="stone-img-text">Skills</figcaption>
          </ScrollLink>
        </li>
        <li className="stone-img">
          <ScrollLink smooth={true} offset={-130} to="projects">
            <img alt="space-stone" src={space} />
            <figcaption className="stone-img-text">Projects</figcaption>
          </ScrollLink>
        </li>
        <li className="stone-img">
          <ScrollLink smooth={true} to="contact">
            <img alt="time-stone" src={time} />
            <figcaption className="stone-img-text">Contact</figcaption>
          </ScrollLink>
        </li>

        <li className="personal stone-img">
          <a rel="noreferrer" target="_blank" href="https://github.com/smikhu">
            <img alt="mind-stone" src={mind} />
            <figcaption className="stone-img-text">
              <AiFillGithub className="contact-icons" />
            </figcaption>
          </a>
        </li>
        <li className="stone-img">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/stevenmikhu/"
          >
            <img alt="reality-stone" src={reality} />
            <figcaption className="stone-img-text">
              <AiFillLinkedin className="contact-icons" />
            </figcaption>
          </a>
        </li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
