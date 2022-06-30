import pp3 from "../images/pp3.jpeg";
import { AboutContainer, AboutInfo } from "./styles/About.styled";

const About = () => {
  return (
    <AboutContainer>
      <img src={pp3} />
      <AboutInfo>
        <h1>STEVEN MIKHU</h1>
        <h2>Junior Front End Web Developer</h2>
        <p>
          I suppose this is where I tell you that I'm super passionate, love
          coding, and enjoy expanding my knowledge about web developing like
          everyone else does, right? Nah, I'm unlike any other developer you've
          ever met before. I'm a junior front end developer who absolutely loves
          to code and is super passionate about what I do and enjoy learning new
          things while making it all look good.
        </p>
      </AboutInfo>
    </AboutContainer>
  );
};

export default About;
