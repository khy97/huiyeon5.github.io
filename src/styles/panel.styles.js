import styled, { css, keyframes } from "styled-components";
import { MEDIA } from "../constants/constants";
import Img from "gatsby-image";

const enlarge = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.2);
  }
`;

export const Panel = styled.section`
  grid-area: panel;
  width: 35vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  background: linear-gradient(145deg, #0d1221, #2c3184);
  position: fixed;
  color: white;
  @media (max-width: ${MEDIA}px) {
    position: relative;
    height: 100%;
    width: 100%;
    // grid-template-rows: "35vh auto";
  }
`;

export const IntroductionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  min-width: 200px;
  max-width: 80%;
`;

export const PanelImage = styled(Img)`
  border-radius: 50%;
  width: 40%;
  margin-bottom: 10px;
  min-width: 90px;
  max-width: 180px;
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0;
`;

export const H1 = styled.h1`
  font-size: 35px;
  margin: 0;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 400;
`;

export const H2 = styled.h2`
  font-size: 18px;
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
  color: #00ffd5;
  font-weight: 400;
`;

export const Tagline = styled.p`
  font-size: 16px;
  text-align: center;
  width: 70%;
  margin: 0;
  margin-bottom: 30px;
`;

export const ContactInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 250px;
`;

export const IconContainer = styled.div.attrs((props) => ({
  "data-tip": "herro",
  "data-for": props.id,
}))`
    display: flex;
    align-items: center;
    margin-bottom:20px;
    position:relative;
    z-index:2;
    color:  ${(props) => props.color}
    &:hover {
        animation: ${(props) =>
          props.click
            ? css`
                ${enlarge} 0.3s linear forwards
              `
            : ""}
    }
`;
