import styled from "styled-components";

export const SkillsContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 150px;

  img {
    width: 50px;
    height: 50px;
  }

  .info {
    width: 900px;
    text-align: center;
    margin-top: 10px;
  }
`;

export const SkillsCollection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const SkillsLeft = styled.div`
  width: 50%;
  margin: 50px;

  p {
    border-bottom: 2px solid black;
    border-left: 2px solid black;
    border-radius: 5px;
    padding: 15px;
    transition: all 0.2s ease-in-out;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &:hover {
      transform: scale(1.1);
      background-color: orangered;
      color: white;
      box-shadow: 2px 2px 15px 0px black;
    }
  }
`;

export const SkillsRight = styled.div`
  width: 50%;
  margin: 50px;

  p {
    border-bottom: 2px solid black;
    border-left: 2px solid black;
    border-radius: 5px;
    padding: 15px;
    transition: all 0.2s ease-in-out;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &:hover {
      transform: scale(1.1);
      background-color: orangered;
      color: white;
      box-shadow: 2px 2px 15px 0px black;
    }
  }
`;
