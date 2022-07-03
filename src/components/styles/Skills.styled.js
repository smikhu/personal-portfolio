import styled from "styled-components";

export const SkillsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 80vh;

  img {
    width: 50px;
    height: 50px;
  }
`;

export const SkillsCollection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const SkillsSet = styled.div`
  width: 50%;
  margin: 50px;

  p {
    font-weight: bold;
    border-bottom: 2px solid ${({ theme }) => theme.colors.skillsBorder};
    border-left: 2px solid ${({ theme }) => theme.colors.skillsBorder};
    border-radius: 5px;
    padding: 15px;
    transition: all 0.2s ease-in-out;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
      transform: scale(1.1);
      border-bottom: 2px solid ${({ theme }) => theme.colors.skillsBorderHover};
      border-left: 2px solid ${({ theme }) => theme.colors.skillsBorderHover};
      background-color: ${({ theme }) => theme.colors.skillsBackgroundHover};
      color: ${({ theme }) => theme.colors.skillsTextHover};
      box-shadow: 2px 2px 10px 0px ${({ theme }) => theme.colors.skillsShadow};
    }
  }
`;
