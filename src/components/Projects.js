import {
  ProjectsContainer,
  ProjectsCollection,
  ProjectsLeft,
  ProjectsRight,
} from "./styles/Projects.styled";
import { Header } from "./styles/Header.styled";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import witcher from "../images/gwent-pairs.png";
import ecb from "../images/east-coast-boogie.png";
import bib from "../images/boys-in-blue.png";
import amalgam from "../images/amalgam-comics.png";
import pirates from "../images/pirates.png";
import { Divider3, DividerLine3 } from "./styles/Dividers.styled";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <Header>
        <h1>PROJECTS</h1>
        <p className="description">
          Below is a collection of some of the projects that I have built myself
          or with a group. I have decided not to make any changes or update any
          of these projects to show my growth.
        </p>
      </Header>
      <ProjectsCollection>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={100}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide className="projects-split">
            <ProjectsLeft>
              <img src={amalgam} alt="Amalgam Comics" />
            </ProjectsLeft>

            <ProjectsRight>
              <h2>AMALGAM COMICS</h2>
              <h3>React, Superhero API</h3>
              <p>
                My absolute favorite project that I have created. The
                inspiration came while learning about CSS Grid in my free time.
                An app where you can search for your favorite superhero/villain
                and find information and statistics on them.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/smikhu/Amalgam-Comics"
              >
                <button>CODE</button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://wonderful-beaver-3ecebb.netlify.app/page1"
              >
                <button className="live">LIVE</button>
              </a>
            </ProjectsRight>
          </SwiperSlide>

          <SwiperSlide className="projects-split">
            <ProjectsLeft>
              <img src={witcher} alt="Gwent Pairs" />
            </ProjectsLeft>

            <ProjectsRight>
              <h2>GWENT PAIRS</h2>
              <h3>HTML, CSS, JavaScript</h3>
              <p>
                The very first project I created based on my favorite video game
                series. A matching game where you have a limited amount of lives
                to match all the cards on the board.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/smikhu/Gwent-Pairs"
              >
                <button>CODE</button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://smikhu.github.io/Gwent-Pairs/"
              >
                <button className="live">LIVE</button>
              </a>
            </ProjectsRight>
          </SwiperSlide>

          <SwiperSlide className="projects-split">
            <ProjectsLeft>
              <img src={ecb} alt="East Coast Boogie" />
            </ProjectsLeft>

            <ProjectsRight>
              <h2>EAST COAST BOOGIE</h2>
              <h3>Express, EJS, NodeJS, MongoDB</h3>
              <p>
                The very first group project that I participated in. The entire
                project was a group effort, my main contribution was the styling
                of the pages.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/SkipPharaoh/East-Coast-Boogie"
              >
                <button>CODE</button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://east-coast-boogie.herokuapp.com/"
              >
                <button className="live">LIVE</button>
              </a>
            </ProjectsRight>
          </SwiperSlide>

          <SwiperSlide className="projects-split">
            <ProjectsLeft>
              <img src={bib} alt="Boys In Blue" />
            </ProjectsLeft>

            <ProjectsRight>
              <h2>BOYS IN BLUE</h2>
              <h3>Express, EJS, NodeJS</h3>
              <p>
                Another early project that I created in my free time while
                learning about Express, EJS and NodeJS during my bootcamp. It's
                based on my favorite football club and the creation was inspired
                by Chelsea unexpectedly winning the Champions League.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/smikhu/Boys-In-Blue"
              >
                <button>CODE</button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://smikhu-project2.herokuapp.com/chelsea"
              >
                <button className="live">LIVE</button>
              </a>
            </ProjectsRight>
          </SwiperSlide>

          <SwiperSlide className="projects-split">
            <ProjectsLeft>
              <img src={pirates} alt="Pirates" />
            </ProjectsLeft>

            <ProjectsRight>
              <h2>PIRATES</h2>
              <h3>Django, PostgreSQL</h3>
              <p>
                An app inspired by my second favorite hobby after video games...
                movies. You can search for the current list of movies and find
                information on them and add them to your personal favorites
                list. You can also add your own movie to the list where other
                users will be able to view it and favorite it as well.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/smikhu/Pirates"
              >
                <button>CODE</button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://pirates-project.herokuapp.com/accounts/login/?next=/"
              >
                <button className="live">LIVE</button>
              </a>
            </ProjectsRight>
          </SwiperSlide>
        </Swiper>
      </ProjectsCollection>
      <Divider3></Divider3>
      <DividerLine3></DividerLine3>
    </ProjectsContainer>
  );
};

export default Projects;
