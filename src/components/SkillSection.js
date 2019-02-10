import React from 'react';
import SkillCard from './SkillCard'

const SkillSection = () => {
    return (
        <section style={{width:`calc(100vw - (100vw - 100%))`, minHeight:`100vh`, background:`whitesmoke`, paddingBottom:`70px`}}>
            <div className="container">
                <h2 style={{color:`#192bc2`, fontSize:`2.8em`,fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, fontWeight:`bold`, margin:0,padding:0, marginBottom:`1.45rem`,textRendering:`optimizeLegibility`, lineHeight:1.1}} className="center-align">My Skills;</h2>
                <div className="row" style={{marginTop:50, marginBottom:0}}>
                    <SkillCard title="Front End" skills={["HTML5","CSS3 (Materialize.css)","JavaScript/jQuery","React.js","Gatsby.js", "Java Server Pages", ]}/>
                    <SkillCard title="Back End" skills={["Node.js","Express.js", "Flask", "Java Servlets", "SpringBoot (Basics)", "Django (Basics)"]}/>
                    <SkillCard title="Languages" skills={["Java","JavaScript", "Python","SQL", "R","Ruby"]}/>
                    <SkillCard title="Database" skills={["SQLAlchemy","MySQL","PostgreSQL", "MongoDB", "Firebase", "GraphQL"]}/>
                    <SkillCard title="Tech Concepts" skills={["OOP Desgin","MVC Pattern", "Algorithms/DS","REST/SOAP/XML", "Agile Methodology", "CI/CD",]}/>
                    <SkillCard title="Other" skills={["Tableau/PowerBI", "AWS", "Heroku/Netlify", "GitHub/GitLab", "IntelliJ",]}/>
                    {/* <SkillCard title="Tech Concepts" skills={["OOP Desgin","MVC Pattern", "Algorithms/DS"]}/> */}
                </div>
            </div>
        </section>
    )
}

export default SkillSection