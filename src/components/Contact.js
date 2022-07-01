import {
  ContactContainer,
  ContactButtons,
  Footer,
} from "./styles/Contact.styled";
import { Header } from "./styles/Header.styled";


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
        <FontAwesomeIcon icon="fa-solid fa-envelope" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/stevenmikhu"
        >
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </a>
      </ContactButtons>
      <Footer></Footer>
    </ContactContainer>
  );
};

export default Contact;
