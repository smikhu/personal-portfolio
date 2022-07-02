import { ContactContainer, ContactButtons } from "./styles/Contact.styled";
import { Header } from "./styles/Header.styled";

import { AiFillLinkedin } from "react-icons/ai";
import { TbMailForward } from "react-icons/tb";

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
          <TbMailForward className="contact-icons" />
        </a>

        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/stevenmikhu"
        >
          <AiFillLinkedin className="contact-icons" />
        </a>
      </ContactButtons>
    </ContactContainer>
  );
};

export default Contact;