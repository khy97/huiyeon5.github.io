import React from 'react';
import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'

const AboutMe = ({imageMap}) => {
    return (
        <section style={{width:`calc(100vw - (100vw - 100%))`, minHeight:`90vh`, background:`whitesmoke`, paddingTop:`65px`}} id="about">
            <div className="container">
                <h2 style={{color:`#192bc2`, fontSize:`2.8em`,fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, fontWeight:`bold`, margin:0,padding:0, marginBottom:`1.45rem`,textRendering:`optimizeLegibility`, lineHeight:1.1}} className="center-align">About Me;</h2>
                <div className="row" style={{marginTop:50, marginBottom:0}}>
                    <Fade left>
                        <div className="col s12 m12 l5">
                            <Img fluid={imageMap['Huiyeon Kim.jpg']} style={{borderRadius:4, boxShadow:`0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)`, marginBottom:30}}/>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col s12 m12 l7">
                            <h3 style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, color:`black`, fontWeight:`bold`, margin:0,padding:0, marginBottom:`1.45rem`,textRendering:`optimizeLegibility`, lineHeight:1.1, fontSize:`1.38316rem`}}>Hi, I'm Huiyeon Kim.</h3>
                            <p style={{color:`black`, fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`}}>I am currently a Penultimate Student studying in Singapore Management University, B.Sc. Information Systems. <br/><br/> Lover of Technology. Writing and learning. First introduced to <b>Software Development</b> in my university, I knew exactly that this was the career path I wanted. With the help of the background I had in Java Programming (5 years now), I was able to learn different technologies from Front End/Back End to Algorithms/DS ever since. <br/><br/>I am eager to take on new challenges and to learn everyday for my future career.
                            <br/><br/>
                            Want to know more about what Im learning now? Visit <span style={{color:`#2b33b2`, cursor:`pointer`}} onClick={() => window.open("https://learnwars.com", "__blank")}><b>LearnWars</b></span> and read about it!
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
