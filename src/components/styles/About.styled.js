import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 95vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const AboutCollection = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const AboutInfo = styled.div`
  padding: 0px 50px;
  width: 650px;
`;
