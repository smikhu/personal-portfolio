// import pp3 from "../images/pp3.jpeg";
import {
  AboutContainer,
  AboutInfo,
  AboutCollection,
} from "./styles/About.styled";
import { Divider, DividerLine } from "./styles/Dividers.styled";

import ImageMapper from 'react-image-mapper';
import gauntlet from '../images/gauntlet.png'

const About = () => {

  const MAP = {
    name: "gauntlet",
    areas: [
        { id: "soul", shape: "circle", coords: [310,305,30]},
        { id: "reality", shape: "circle", coords: [382,290,40]},
        { id: "space", shape: "circle", coords: [490,290,40]},
        { id: "power", shape: "circle", coords: [570,295,37]},
        { id: "time", shape: "circle", coords: [690,555,35]},
        { id: "mind", shape: "circle", coords: [425,415,60]},
    ]
}

  return (
    <AboutContainer>
      <AboutCollection>
      <ImageMapper src={gauntlet} map={MAP} width={300} imgWidth={900}
            onClick={(area) => {
                if (area.id === 'time') {
                    document.body.style.backgroundColor = 'green'
                } else if (area.id === 'reality') {
                    document.body.style.backgroundColor = 'red'
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
