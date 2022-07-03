import {
  SkillsContainer,
  SkillsCollection,
  SkillsSet,
} from "./styles/Skills.styled";
import { Header } from "./styles/Header.styled";
import { Divider2, DividerLine2 } from "./styles/Dividers.styled";

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
    <SkillsContainer id="skills">
      <Header>
        <h1>SKILLS</h1>
        <p className="description">
          Former Avenger under the mentorship of Captain America. Invulnerable
          to trolls and the ability to engage 600 Reddit nerds at once.
        </p>
      </Header>
      <SkillsCollection>
        <SkillsSet>
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
        </SkillsSet>

        <SkillsSet>
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
        </SkillsSet>
      </SkillsCollection>
      <Divider2></Divider2>
      <DividerLine2></DividerLine2>
    </SkillsContainer>
  );
};

export default Skills;
