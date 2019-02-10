import React from 'react';
import ProjectInfo from  './ProjectInfo';
import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'

const Project = ({left, title, info, skills, weblink, githublink, fluid}) => {
    if(left) {
        return (
            <div className="row" style={{marginTop:120}}>
                <Fade left>
                    <div className={`col s12 m12 l6 left`}>
                        {/* <img src={require(`../images/${title}.png`)} alt={title} className="responsive-img"/> */}
                        <Img fluid={fluid} />
                    </div>
                </Fade>
                <Fade right>
                    <div className={`col s12 m12 l6 right`}>
                        <ProjectInfo left={left} title={title} info={info} skills={skills} weblink={weblink} githublink={githublink} />
                    </div>
                </Fade>
            </div>
        )
    } else {
        return (
            <div className="row" style={{marginTop:120}}>
                <Fade right>
                    <div className={`col s12 m12 l6 right`}>
                        <img src={require(`../images/${title}.png`)} alt={title} className="responsive-img"/>
                    </div>
                </Fade>
                <Fade left>
                    <div className={`col s12 m12 l6 left`}>
                        <ProjectInfo left={left} title={title} info={info} skills={skills} weblink={weblink} githublink={githublink} />
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Project;