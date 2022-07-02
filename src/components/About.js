import pp3 from "../images/pp3.jpeg";
import {
  AboutContainer,
  AboutInfo,
  AboutCollection,
} from "./styles/About.styled";
import { Divider, DividerLine } from "./styles/Dividers.styled";

const About = () => {
  return (
    <AboutContainer>
      <AboutCollection>
        <img alt="portfolio-pic" src={pp3} />
        <AboutInfo>
          <h1>STEVEN MIKHU</h1>
          <h2>Junior Front End Developer</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          
            <button>RESUME</button>
          
        </AboutInfo>
      </AboutCollection>
      <Divider></Divider>
      <DividerLine></DividerLine>
    </AboutContainer>
  );
};

export default About;
