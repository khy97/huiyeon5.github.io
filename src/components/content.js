import React, { useState, useRef, useEffect } from 'react';

import Navbar from './navbar';
import ResumeContent from './resumeContent';
import * as S from "../styles/content.styles";


const Content = () => {
    const [active, setActive] = useState(0);
    let refs = {
        aboutRef: useRef(),
        skillsRef: useRef(),
        workRef: useRef(),
        eduRef: useRef(),
        otherRef: useRef()
    }

    useEffect(() => {
        const handleScroll = _ => {
            if (window.pageYOffset + 180 >= refs.otherRef.current.offsetParent.offsetTop) {
                setActive(4)
            } else if (window.pageYOffset + 80 >= refs.eduRef.current.offsetParent.offsetTop) {
                setActive(3)
            } else if (window.pageYOffset + 80 >= refs.skillsRef.current.offsetParent.offsetTop) {
                setActive(2)
            } else if (window.pageYOffset + 80 >= refs.workRef.current.offsetParent.offsetTop) {
                setActive(1)
            } else {
                setActive(0)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return _ => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    const handleClick = (e) => {
        e.preventDefault();
        const val = e.target.firstChild.textContent;
        switch (val) {
            case "ABOUT":
                setActive(0);
                scrollToTargetAdjusted(refs.aboutRef);
                break;
            case "WORK":
                setActive(1);
                scrollToTargetAdjusted(refs.workRef);
                break;
            case "SKILLS":
                setActive(2);
                scrollToTargetAdjusted(refs.skillsRef);
                break;
            case "EDUCATION":
                setActive(3);
                scrollToTargetAdjusted(refs.eduRef);
                break;
            case "OTHERS":
                setActive(4);
                scrollToTargetAdjusted(refs.otherRef);
                break;
            default:
                setActive(0);
        }
    }

    const scrollToTargetAdjusted = (ref) => {
        var element = ref.current;
        var headerOffset = 60;
        var elementPosition = element.offsetParent.offsetTop;
        var offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    return (
        <S.ContentSection>
            <Navbar active={active} onClick={handleClick} />
            <ResumeContent refs={refs} setActive={setActive} />
        </S.ContentSection>
    )
}

export default Content;