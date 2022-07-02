import styled from "styled-components";

export const SkillsContainer = styled.div`
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
    border-bottom: 2px solid black;
    border-left: 2px solid black;
    border-radius: 5px;
    padding: 15px;
    transition: all 0.2s ease-in-out;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
      transform: scale(1.1);
      background-color: #ff8b00;
      color: white;
      box-shadow: 2px 2px 10px 0px black;
    }
  }
`;
