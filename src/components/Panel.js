import React, { useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby'

import ParticlesWrapper from './ParticlesWrapper';
import { ResumeContext } from '../pages/index';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { MdLocationOn } from 'react-icons/md';
import { GrLinkedin, GrGithub, GrMedium } from 'react-icons/gr'
import { IconContext } from "react-icons";

import * as S from "../styles/panel.styles";

const Panel = () => {
  const { loading } = useContext(ResumeContext);
  return (
    <StaticQuery
      query={imageQuery}
      render={data => {
        return (
          <S.Panel>
            <S.IntroductionWrapper>
              {!loading ?
                <S.PanelImage fluid={data.file.childImageSharp.fluid} />
                :
                <SkeletonTheme color="#181d44" highlightColor="#2c3184">
                  <Skeleton circle={true} height={150} width={150} />
                </SkeletonTheme>
              }
              <S.Introduction>
                <S.H1>Huiyeon Kim</S.H1>
                <S.H2>Site Reliability Engineer @ Goldman Sachs</S.H2>
                <div style={{ display: "flex", marginBottom: 20 }}>
                  <IconContext.Provider value={{ color: "white", size: 20 }}>
                    <MdLocationOn />
                  </IconContext.Provider>
                  <span style={{ marginLeft: 5 }}>Singapore</span>
                </div>
                <S.Tagline>Welcome! I'm a Software Engineer, Technical Writer and a Tutor. </S.Tagline>
                <S.ContactInformation>
                  <IconContext.Provider value={{ color: "white", size: 24, style: { cursor: `pointer` } }}>
                    <GrLinkedin onClick={() => window.open('https://www.linkedin.com/in/huiyeonkim/', "_blank")} />
                  </IconContext.Provider>
                  <IconContext.Provider value={{ color: "white", size: 24, style: { cursor: `pointer` } }}>
                    <GrGithub onClick={() => window.open('github.com/huiyeon5/', "_blank")} />
                  </IconContext.Provider>
                  <IconContext.Provider value={{ color: "white", size: 24, style: { cursor: `pointer` } }}>
                    <GrMedium onClick={() => window.open('https://medium.com/techfront', "_blank")} />
                  </IconContext.Provider>
                </S.ContactInformation>
              </S.Introduction>
            </S.IntroductionWrapper>
            <ParticlesWrapper />
          </S.Panel>
        )
      }
      }
    />
  )
}

export default Panel;

const imageQuery = graphql`
  query {
    file(relativePath: { eq: "Huiyeon Kim.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`