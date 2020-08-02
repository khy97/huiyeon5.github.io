import React, { useContext } from 'react';
import FadeIn from 'react-fade-in';

import * as S from "../styles/content.styles";

import { ResumeContext } from '../pages/index';
import Experience from './experience';



const StudySection = ({ reff }) => {
    const { loading, data } = useContext(ResumeContext);
    const size = !loading ? data.education.length : 1;
    let experiences = [];
    for (let i = 0; i < size; i++) {
        experiences.push(
            <Experience
                key={i}
                loading={loading}
                title={loading ? false : data.education[i].institution}
                subTitle={loading ? false : `${data.education[i].studyType} - ${data.education[i].area}`}
                startDate={loading ? false : data.education[i].start}
                endDate={loading ? false : data.education[i].end}
                location={loading ? false : "Singapore"}
                dExist={false}
                dCount={1}
            />
        )
    }

    const aSize = !loading ? data.awards.length : 2;
    let awards = [];
    for (let i = 0; i < aSize; i++) {
        awards.push(
            <Experience
                key={i}
                loading={loading}
                title={loading ? false : data.awards[i].title}
                subTitle={loading ? false : data.awards[i].awarder}
                startDate={loading ? false : data.awards[i].fullDate}
                endDate={loading ? false : undefined}
                location={loading ? false : "Singapore"}
                dExist={false}
                dCount={1}
                noMargin={true}
            />
        )
    }
    return (
        <S.ContentBox ref={reff}>
            <S.ContentHeader>EDUCATION</S.ContentHeader>
            <S.ContentSectionHeader>University</S.ContentSectionHeader>
            {loading ? experiences : (
                <FadeIn>
                    {experiences}
                </FadeIn>
            )}
            <S.ContentSectionHeader>Professional Certificates</S.ContentSectionHeader>
            {loading ? awards : (
                <FadeIn>
                    {awards}
                </FadeIn>
            )}
        </S.ContentBox>
    )
}

export default StudySection;