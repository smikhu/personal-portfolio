import {
  AboutContainer,
  Gauntlet,
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
        <Gauntlet>
          <ImageMapper
            src={gauntlet}
            map={MAP}
            width={300}
            imgWidth={900}
            onClick={(area) => {
              if (area.id === "soul") {
                props.phaseChange(soul);
              } else if (area.id === "reality") {
                props.phaseChange(reality);
              } else if (area.id === "space") {
                props.phaseChange(space);
              } else if (area.id === "power") {
                props.phaseChange(power);
              } else if (area.id === "time") {
                props.phaseChange(time);
              } else if (area.id === "mind") {
                props.phaseChange(mind);
              }
            }}
          />
          <h5>* Click the stones on the gauntlet to switch phases! *</h5>
        </Gauntlet>

        <AboutInfo>
          <h1>STEVEN MIKHU</h1>
          <h2>Junior Full Stack Developer</h2>
          <p>
            I am a junior full stack developer who loves working on the front
            end side of things and creating memorable experiences for the user.
            Beyond coding, I am your typical average person who like everyone
            else... thought the last season of Game of Thrones was a major
            disappointment. I won't bore you any further with details about me
            so if you like what you see, please reach out. If you ARE looking
            for the boring details, check out my resume below.
          </p>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://docs.google.com/document/d/1Gj5KWD26wkyB1dF0VnjYRluhdwEGpZKb/edit"
          >
            <button>RESUME</button>
          </a>
        </AboutInfo>
      </AboutCollection>
      <Divider></Divider>
      <DividerLine></DividerLine>
    </AboutContainer>
  );
};

export default About;
