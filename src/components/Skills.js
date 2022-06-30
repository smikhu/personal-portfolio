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
      <h1>SKILLS</h1>
      <p className="description">
        Trained with the League of Shadows and was personally mentored by Ra's
        Al Ghul. During my time training with the League of Shadows, I learned
        how to engage 600 reddit nerds at once and became truly invulnerable to
        trolls. Batman ain't got nothin' on my utility belt.
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
