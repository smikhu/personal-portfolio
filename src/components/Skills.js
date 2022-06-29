import {
  SkillsContainer,
  SkillsCollection,
  SkillsLeft,
  SkillsRight,
} from "./styles/Skills.styled";

import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/javascript.png";
import mongo from "../images/mongodb.png";
import node from "../images/nodeexpress.png";
import react from "../images/react.png";
import psql from "../images/postgresql.png";
import python from "../images/python.png";

const Skills = () => {
  return (
    <SkillsContainer>
      <h2>Skills</h2>
      <p className="info">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <SkillsCollection>
        <SkillsLeft>
          <p>
            <img alt="html" src={html}></img> HTML
          </p>
          <p>
            <img alt="css" src={css}></img> CSS
          </p>

          <p>
            <img alt="javascript" src={js}></img>
            JavaScript
          </p>
          <p>
            <img alt="mongodb" src={mongo}></img> MongoDB
          </p>
        </SkillsLeft>

        <SkillsRight>
          <p>
            <img alt="node" src={node}></img> NodeJS/Express
          </p>
          <p>
            <img alt="react" src={react}></img> React
          </p>

          <p>
            <img alt="postgresql" src={psql}></img>
            PostgreSQL
          </p>
          <p>
            <img alt="python" src={python}></img> Python
          </p>
        </SkillsRight>
      </SkillsCollection>
    </SkillsContainer>
  );
};

export default Skills;
