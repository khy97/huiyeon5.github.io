import React, { useContext } from 'react';
import FadeIn from 'react-fade-in';

import Experience from './experience';
import { ResumeContext } from '../pages/index';

import * as S from "../styles/content.styles";

const WorkSection = ({ reff }) => {
    const { loading, data } = useContext(ResumeContext);
    const size = !loading ? data.work.length : 3;
    let experiences = [];
    for (let i = 0; i < size; i++) {
        experiences.push(
            <Experience
                key={i}
                loading={loading}
                title={loading ? false : data.work[i].position}
                subTitle={loading ? false : data.work[i].company}
                startDate={loading ? false : data.work[i].start}
                endDate={loading ? false : data.work[i].end}
                location={loading ? false : data.work[i].location}
                details={loading ? false : data.work[i].summary}
                dExist={true}
                dCount={5}
            />
        )
    }
    return (
        <S.ContentBox ref={reff}>
            <S.ContentHeader>WORK</S.ContentHeader>
            {loading ? experiences : (
                <FadeIn>
                    {experiences}
                </FadeIn>
            )}
        </S.ContentBox>
    )
}

export default WorkSection;