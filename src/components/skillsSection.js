import React, { useState, useEffect, useContext } from 'react';
import FlipMove from 'react-flip-move';
import Skeleton from 'react-loading-skeleton';

import Skill from './skill';
import { ResumeContext } from '../pages/index';

import * as S from "../styles/content.styles";

const SkillsSection = ({ reff, setActive }) => {
    const [value, setValue] = useState(1);
    const [skills, setSkills] = useState([]);

    const { loading } = useContext(ResumeContext);

    useEffect(() => {
        setSkills(["Go", "Java", "JavaScript", "Python", "R", "SQL", "HTML | CSS", "Node.js", "React | Redux", "Express.js", "Gatsby.js", "TypeScript", "Flask", "Java Spring", "AWS", "Docker", "Kubernetes", "Apache Kafka", "Prometheus", "Grafana", "Linux", "Selenium Webdriver", "Git", "Bash | Shell Scripting", "REST APIs", "Apache Airflow"])
    }, [])

    const change = (e) => {
        setValue(e.target.value);
        editList(e.target.value);
    }

    const editList = (value) => {
        switch (value) {
            case "1":
                setSkills(["Go", "Java", "JavaScript", "Python", "R", "SQL", "HTML | CSS", "Node.js", "React | Redux", "Express.js", "Gatsby.js", "TypeScript", "Flask", "Java Spring", "AWS", "Docker", "Kubernetes", "Apache Kafka", "Linux", "Selenium Webdriver", "Git", "Bash | Shell Scripting", "REST APIs", "Apache Airflow"])
                break;
            case "2":
                setSkills(["Go", "Java", "JavaScript", "Python", "R", "SQL", "HTML | CSS", "Node.js"]);
                break;
            case "3":
                setSkills(["React | Redux", "Express.js", "Gatsby.js", "TypeScript", "Flask", "Java Spring"]);
                break;
            case "4":
                setSkills(["AWS", "Docker", "Kubernetes", "Apache Kafka", "Prometheus", "Grafana", "Linux", "Selenium Webdriver", "Git", "Bash | Shell Scripting", "REST APIs", "Apache Airflow"]);
                break;
            default:
                break;
        }
    }



    return (
        <S.ContentBox ref={reff}>
            <S.ContentHeader>SKILLS</S.ContentHeader>
            <S.SelectCont>
                <S.Select onChange={change} value={value}>
                    <option value="1">All Skills</option>
                    <option value="2">Languages</option>
                    <option value="3">Frameworks</option>
                    <option value="4">Tools</option>
                </S.Select>
            </S.SelectCont>
            {loading ? <Skeleton count={5} /> : (
                <FlipMove
                    staggerDelayBy={10}
                    appearAnimation="accordionVertical"
                    enterAnimation="accordionVertical">
                    {skills.map((item, i) => <Skill key={i} loading={loading} data={item} />)}
                </FlipMove>
            )}
        </S.ContentBox>
    )
}

export default SkillsSection;