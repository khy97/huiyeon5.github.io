import React, { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import FadeIn from 'react-fade-in';


import * as S from "../styles/content.styles";
import { ResumeContext } from '../pages/index';

const AboutSection = ({ reff, setActive }) => {
    const { loading, data } = useContext(ResumeContext);
    return (
        <S.ContentBox ref={reff}>
            <S.ContentHeader>ABOUT</S.ContentHeader>
            <S.P>{!loading ? <FadeIn>{data.basics.summary}</FadeIn> : <Skeleton count={5} />}</S.P>
        </S.ContentBox>
    )
}

export default AboutSection;