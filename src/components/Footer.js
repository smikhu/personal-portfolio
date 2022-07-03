import { FooterContainer, FooterInfo } from "./styles/Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfo>
        <p>
          DESIGNED BY |{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/smikhu/personal-portfolio"
          >
            STEVEN MIKHU
          </a>
        </p>
      </FooterInfo>
    </FooterContainer>
  );
};

export default Footer;
