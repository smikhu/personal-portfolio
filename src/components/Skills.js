import {
  SkillsContainer,
  SkillsCollection,
  SkillsSet,
} from "./styles/Skills.styled";
import { Header } from "./styles/Header.styled";

import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/javascript.png";
import mongo from "../images/mongodb.png";
import node from "../images/nodeexpress.png";
import react from "../images/react.png";
import psql from "../images/postgresql.png";
import python from "../images/python.png";
import { Divider2, DividerLine2 } from "./styles/Dividers.styled";

const Skills = () => {
  return (
    <SkillsContainer>
      <Header>
        <h1>SKILLS</h1>
        <p className="description">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
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
