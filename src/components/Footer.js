import { FooterContainer, FooterInfo } from "./styles/Footer.styled";

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <FooterInfo>
        <h4>
          DESIGNED BY |{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/smikhu/personal-portfolio"
          >
            STEVEN MIKHU
          </a>
        </h4>
      </FooterInfo>
    </FooterContainer>
  );
};

export default Footer;
