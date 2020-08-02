import React, { useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby'

import ParticlesWrapper from './ParticlesWrapper';
import Icon from './Icons';
import TooltipIcon from './TooltipIcon';
import { ResumeContext } from '../pages/index';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

import * as S from "../styles/panel.styles";

const Panel = () => {
  const { loading, data } = useContext(ResumeContext);

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
                <Icon size={13} icon={faMapMarkerAlt} text={"Singapore"} />
                <S.Tagline>Welcome! I'm a Software Engineer, Technical Writer and a Tutor. </S.Tagline>
                <S.ContactInformation>
                  <TooltipIcon place={"top"} overlay={'Email Me'} id={'EmailMe'} size={22} click={true} icon={faEnvelope} link={'https://google.com'} />
                  <TooltipIcon place={"top"} overlay={'Connect on LinkedIn'} id={'LinkedIn'} size={22} click={true} icon={faLinkedin} link={'https://www.linkedin.com/in/huiyeonkim/'} />
                  <TooltipIcon place={"top"} overlay={'Check my Github'} id={'github'} size={22} click={true} icon={faGithub} link={'github.com/huiyeon5/'} />
                  <TooltipIcon place={"top"} overlay={'Read my blogs'} id={'medium'} size={22} click={true} icon={faMedium} link={'https://medium.com/techfront'} />
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