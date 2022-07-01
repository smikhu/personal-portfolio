import styled from "styled-components";
import ironman from "../../images/ironman.png";
import spiderman from "../../images/spiderman.png";
import captainamerica from "../../images/captainamerica.png";

export const Divider = styled.div`
  height: 75px;
  background: url(${ironman}) no-repeat;
  background-size: 80px 75px;
`;

export const DividerLine = styled.hr`
  margin-left: 80px;
  margin-top: -60px;
  height: 5px;
  border-top-left-radius: 35%;
  border-bottom-left-radius: 35%;
  border: none;
  background: #ff8b00;
`;

export const Divider2 = styled.div`
  height: 90px;
  background: url(${spiderman}) no-repeat;
  background-size: 80px 75px;
`;

export const DividerLine2 = styled.hr`
  margin-left: 90px;
  margin-top: -60px;
  border-top: none;
  border-left: none;
  border-bottom: 2px dashed #ff8b00;
`;

export const Divider3 = styled.div`
  margin-top: 50px;
  height: 90px;
  background: url(${captainamerica}) no-repeat;
  background-size: 80px 75px;
`;

export const DividerLine3 = styled.hr`
  margin-left: 80px;
  margin-top: -60px;
  height: 5px;
  border: 5px solid #ff8b00;
  border-top-left-radius: 10px;
`;
