import React from 'react';
import Project from './Project';

const ProjectSection = ({imageMap}) => {
    return (
        <section style={{width:`calc(100vw - (100vw - 100%))`, minHeight:`100vh`, background:`white`, paddingTop:`80px`}}>
            <div className="container">
                <h2 style={{color:`#192bc2`, fontSize:`2.8em`,fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, fontWeight:`bold`, margin:0,padding:0, marginBottom:`1.45rem`,textRendering:`optimizeLegibility`, lineHeight:1.1}} className="center-align">Recent Works;</h2>
                <Project left={true} title={"learnwars"} info={"This blog is for the learners, to write and learn more about whatever they may be learning. It could be about anything, from technology to finance to music."} skills={["React.js","Gatsby.js","GraphQL"]} weblink={"https://learnwars.com"} githublink={"https://github.com/huiyeon5/learningwars"} fluid={imageMap['learnwars.png']}/>
                <Project left={false} title={"nogada"} info={"Web-based Visualization Platform which shows insights on Korean Tourism Data - Seasonal Trend/Monthly Trend/Geo-spatial Analysis/Demographic Analysis"} skills={["React.js","Node.js","SQL"]} weblink={"http://www.nogada.ml"} githublink={"https://github.com/huiyeon5/NOGADA"} fluid={imageMap['nogada.png']}/>
                <Project left={true} title={"satact"} info={"Simple platform for High School Students which helps in deciding what exam the student is more suited for. "} skills={["HTML","CSS","React.js"]} weblink={"http://satvact.herokuapp.com/"} githublink={"https://github.com/huiyeon5/satact"} fluid={imageMap['satact.png']}/>
                <div className="row" style={{marginTop:80}}>
                    <h4 style={{color:`#396afc`, cursor:`pointer`}} className="center-align" onClick={() => window.open("https://github.com/huiyeon5/", "__blank")}>View More Projects</h4>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;