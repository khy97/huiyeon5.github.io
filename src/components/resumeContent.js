import React from 'react';
import FadeIn from 'react-fade-in';

import AboutSection from './aboutSection';
import WorkSection from './workSection';
import SkillsSection from './skillsSection';
import StudySection from './studySection';
import OtherSection from './otherSection';

import * as S from "../styles/content.styles";

const ResumeContent = ({ refs, setActive }) => {
    return (
        <S.Content>
            <FadeIn>
                <AboutSection reff={refs.aboutRef} setActive={setActive} />
                <WorkSection reff={refs.workRef} setActive={setActive} />
                <SkillsSection reff={refs.skillsRef} setActive={setActive} />
                <StudySection reff={refs.eduRef} setActive={setActive} />
                <OtherSection reff={refs.otherRef} setActive={setActive} />
            </FadeIn>
        </S.Content>
    )
}

export default ResumeContent;