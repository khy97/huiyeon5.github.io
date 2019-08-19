import React from 'react';
import ProjectInfo from  './ProjectInfo';
import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'

const Project = ({left, title, info, skills, weblink, githublink, fluid}) => {
    if(left) {
        return (
            <div className="row" style={{marginTop:100}}>
                <Fade bottom>
                    <div className={`col s12 m12 l6 left`}>
                        {/* <img src={require(`../images/${title}.png`)} alt={title} className="responsive-img"/> */}
                        <Img fluid={fluid} style={{marginBottom:10}} alt={`${title}`} title={`${title}`}/>
                    </div>
                    <div className={`col s12 m12 l6 right`}>
                        <ProjectInfo left={left} title={title} info={info} skills={skills} weblink={weblink} githublink={githublink} />
                    </div>
                </Fade>
            </div>
        )
    } else {
        return (
            <div className="row" style={{marginTop:100}}>
                <Fade bottom>
                    <div>
                        <div className={`col s12 m12 l6 right`}>
                            <Img fluid={fluid} style={{marginBottom:10}} alt={`${title}`} title={`${title}`}/> 
                            {/* <img src={require(`../images/${title}.png`)} alt={title} className="responsive-img"/> */}
                        </div>
                        <div className={`col s12 m12 l6 left`}>
                            <ProjectInfo left={left} title={title} info={info} skills={skills} weblink={weblink} githublink={githublink} />
                        </div>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Project;