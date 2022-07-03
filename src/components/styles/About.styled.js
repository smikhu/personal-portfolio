import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: 150px;
`;

export const AboutCollection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutInfo = styled.div`
  padding: 0px 50px;
  width: 650px;
`;
