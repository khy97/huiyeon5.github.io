import React from 'react';
import Fade from 'react-reveal/Fade'

const AboutMe = () => {
    return (
        <section style={{width:`calc(100vw - (100vw - 100%))`, minHeight:`100vh`, background:`whitesmoke`, paddingTop:`65px`}} id="about">
            <div className="container">
                <h2 style={{color:`#2b33b2`, fontSize:`2.8em`}} className="center-align">About Me;</h2>
                <div className="row" style={{marginTop:50, marginBottom:0}}>
                    <Fade left>
                        <div className="col s12 m12 l5">
                            <img src={require('../images/Huiyeon Kim.jpg')} alt="Huiyeon Kim" className="responsive-img" style={{borderRadius:4, boxShadow:`0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)`}}/>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col s12 m12 l7">
                            <h3 style={{color:`black`, fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`}}>Hi, I'm Huiyeon Kim.</h3>
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
