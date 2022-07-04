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
    <AboutContainer id="about">
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

        <AboutInfo>
          <h1>STEVEN MIKHU</h1>
          <h2>Junior Front End Developer</h2>
          <p>
            I'm a junior full stack developer who loves working on the front
            end side of things. I won't bore you with the usual "I love coding
            and am super passionate" speech so if you like what you see, please
            reach out. If you ARE looking for the boring details, check out my
            resume below.
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
