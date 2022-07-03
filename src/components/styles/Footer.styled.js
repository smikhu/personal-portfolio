import styled from "styled-components";

export const FooterContainer = styled.div`
  border: 2px solid black;
  border-radius: 4px;
`;

export const FooterInfo = styled.div`
  background-color: #ff8b00;
  padding: 20px;
  color: white;
  text-align: center;

  p {
    /* font-size: 18px; */
  }
  a {
    transition: all 1s;
    &:hover {
      transition: all 1s;
      font-weight: bolder;
      color: orangered;
    }
  }
`;
