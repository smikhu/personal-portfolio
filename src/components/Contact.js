import {
  ContactContainer,
  ContactButtons,
  Footer,
} from "./styles/Contact.styled";
import { Header } from "./styles/Header.styled";

import linkedin from "../images/linkedin.png";
import gmail from "../images/gmail.png";

const Contact = () => {
  return (
    <ContactContainer>
      <Header>
        <h1>CONTACT</h1>
        <p className="description">
          Want to get in contact with me about anything at all? Please feel free
          to send an email or message me on LinkedIn!
        </p>
      </Header>
      <ContactButtons>
        <a href="mailto: StevenMikhu@gmail.com">
          <p>
            <img alt="gmail" src={gmail}></img>
          </p>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/stevenmikhu"
        >
          <img alt="linkedin" src={linkedin}></img>
        </a>
      </ContactButtons>
      <Footer></Footer>
    </ContactContainer>
  );
};

export default Contact;
