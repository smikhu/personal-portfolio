import { FooterContainer, FooterInfo } from "./styles/Footer.styled";

const Footer = () => {
  return (
    <div>
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
    </div>
  );
};

export default Footer;
