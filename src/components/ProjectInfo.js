import React from 'react'
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'
import './ProjectButton.css'

library.add(faCode)


const ProjectInfo = ({title, info, skills, weblink, githublink}) => {
    return (
        <div>
            <h3 style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, textTransform:`uppercase`, color:`#192bc2`, fontWeight:`bold`, margin:0,padding:0, marginBottom:`1.45rem`,textRendering:`optimizeLegibility`, lineHeight:1.1, fontSize:`1.38316rem`}}>{title}</h3>
            <p style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, fontSize:16}}>{info}</p>
            <ul style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, display:`flex`, justifyContent:`space-around`, alignItems:`center`, flexWrap:`wrap`, margin:0}}>
                {skills.map((skill, i) => (
                    <li style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, fontSize:14}} key={i}>{skill}</li>
                ))}
            </ul>
            <div className="buttons">
                {weblink ? <ProjectViewButton link={weblink} type={"web"}/> : null}
                {githublink ? <ProjectViewButton link={githublink} type={"git"}/> : null}
            </div>
        </div>
    )
}

export default ProjectInfo

const ProjectViewButton = ({link, type}) => {
    return (
        <span className={type} onClick={() => window.open(link, "__blank")} style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, }}>
            {type === "web" ? <span >View Project</span> : <span><FontAwesomeIcon icon={['fas', 'code']}/> Source Code</span>}
        </span>
    )
}