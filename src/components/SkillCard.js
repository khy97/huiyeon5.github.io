import React from 'react';
import Fade from 'react-reveal/Fade'
const SkillCard = ({title, skills}) => {
    return (
        <Fade top>
            <div className="col s12 m12 l4">
                <div className="card white">
                    <div className="card-content">
                        <span className="card-title" style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, color:`#53dd6c`}}><b>{title};</b></span>
                        <ul style={{listStyle:`disc`, color:`black`,margin:0}}>
                            {skills.map((skill, i) => (
                                <li key={i} style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, marginBottom:`calc(1.1rem / 2)`}}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default SkillCard