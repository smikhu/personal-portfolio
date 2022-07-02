import styled from "styled-components";

export const ContactContainer = styled.div`
  margin-top: 150px;
`;

export const ContactButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  .contact-icons {
    font-size: 100px;
    color: #ff8b00;
    transition: all 1s;
    &:hover {
        color: orangered;
    }
  }
`;
