import styled from "styled-components";
import ironman from "../../images/ironman.png";
import spiderman from "../../images/spiderman.png";
import captainamerica from "../../images/captainamerica.png";

export const Divider = styled.div`
  height: 75px;
  background: url(${ironman}) no-repeat;
  background-size: 80px 75px;
  @media only screen and (max-width: 950px) {
    margin-top: 50px;
  }
`;

export const DividerLine = styled.hr`
  margin-left: 80px;
  margin-top: -65px;
  height: 10px;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.colors.divider};
`;

export const Divider2 = styled.div`
  height: 90px;
  background: url(${spiderman}) no-repeat;
  background-size: 80px 75px;
  @media only screen and (max-width: 950px) {
    margin-top: 50px;
  }
`;

export const DividerLine2 = styled.hr`
  margin-left: 90px;
  margin-top: -60px;
  border-top: none;
  border-left: none;
  border-bottom: 2px dashed ${({ theme }) => theme.colors.divider};
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
  border: 5px solid ${({ theme }) => theme.colors.divider};
  border-top-left-radius: 10px;
`;
