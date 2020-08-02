import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import FadeIn from 'react-fade-in';

import * as S from "../styles/content.styles";

import { ResumeContext } from '../pages/index';
import Publication from './publication'
import Project from './project'
import Contact from './contact'

const OtherSection = ({ reff }) => {
    const { loading, data } = useContext(ResumeContext);
    const { allFile } = useStaticQuery(graphql`
    query MyQuery {
        allFile(filter: {childImageSharp: {fluid: {originalName: {regex: "/^pub/"}}}}, sort: {fields: absolutePath}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1800) {
                  src
                }
              }
            }
          }
        }
      }
      
    `)
    const size = !loading ? data.publications.length : 3;
    let pubs = [];
    for (let i = 0; i < size; i++) {
        pubs.push(
            <Publication
                key={i}
                loading={loading}
                title={loading ? false : data.publications[i].name}
                subtitle={loading ? false : data.publications[i].summary}
                date={loading ? false : data.publications[i].fullReleaseDate}
                link={loading ? false : data.publications[i].website}
                image={allFile.edges[i].node.childImageSharp.fluid}
            />
        )
    }

    const pSize = !loading ? data.projects.length : 3;
    let projs = [];
    for (let i = 0; i < pSize; i++) {
        projs.push(
            <Project
                key={i}
                loading={loading}
                title={loading ? false : data.projects[i].displayName}
                subtitle={loading ? false : data.projects[i].summary}
                link={loading ? false : data.projects[i].githubUrl}
                website={loading ? false : data.projects[i].website}
                languages={loading ? false : data.projects[i].languages}
            />
        )
    }
    return (
        <S.ContentBox ref={reff}>
            <S.ContentHeader>OTHERS</S.ContentHeader>
            <S.ContentSectionHeader>Publications</S.ContentSectionHeader>
            {loading ? pubs : (
                <FadeIn>
                    <S.PubContainer>
                        {pubs}
                    </S.PubContainer>
                </FadeIn>
            )}
            <br />
            <br />
            <S.ContentSectionHeader>Personal Projects</S.ContentSectionHeader>
            {loading ? projs : (
                <FadeIn>
                    <S.PubContainer>
                        {projs}
                    </S.PubContainer>
                </FadeIn>
            )}
            <br />
            <br />
            <S.ContentSectionHeader>Contact Me!</S.ContentSectionHeader>
            <Contact />
        </S.ContentBox>
    )
}

export default OtherSection;