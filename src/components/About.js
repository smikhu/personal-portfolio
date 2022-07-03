import {
  AboutContainer,
  AboutInfo,
  AboutCollection,
} from "./styles/About.styled";
import { Divider, DividerLine } from "./styles/Dividers.styled";

import ImageMapper from "react-image-mapper";
import gauntlet from "../images/gauntlet.png";

import {
  soul,
  reality,
  space,
  power,
  time,
  mind,
} from "../components/styles/Themes.styled";

const About = (props) => {
  const MAP = {
    name: "gauntlet",
    areas: [
      { id: "soul", shape: "circle", coords: [310, 305, 40] },
      { id: "reality", shape: "circle", coords: [385, 285, 40] },
      { id: "space", shape: "circle", coords: [493, 290, 40] },
      { id: "power", shape: "circle", coords: [575, 300, 40] },
      { id: "time", shape: "circle", coords: [690, 555, 40] },
      { id: "mind", shape: "circle", coords: [425, 425, 70] },
    ],
  };

  return (
    <AboutContainer>
      <AboutCollection>
        <ImageMapper
          src={gauntlet}
          map={MAP}
          width={300}
          imgWidth={900}
          onClick={(area) => {
            if (area.id === "soul") {
              props.HandleThemeChange(soul);
            } else if (area.id === "reality") {
              props.HandleThemeChange(reality);
            } else if (area.id === "space") {
              props.HandleThemeChange(space);
            } else if (area.id === "power") {
              props.HandleThemeChange(power);
            } else if (area.id === "time") {
              props.HandleThemeChange(time);
            } else if (area.id === "mind") {
              props.HandleThemeChange(mind);
            }
          }}
        />
        {/* <img alt="portfolio-pic" src={pp3} /> */}
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
