import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import LandingIcons from './LandingIcons';
import './ContactMe.css'

library.add(faLinkedinIn,faEnvelope)

const ContactMe = () => {
    return (
        <section style={{width:`calc(100vw - (100vw - 100%))`, minHeight:`80vh`, background:`white`, paddingTop:`80px`, position:`relative`}} id="contact">
            <h2 style={{color:`#192bc2`, fontSize:`2.8em`,fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, fontWeight:`bold`, margin:0,padding:0, marginBottom:`1.45rem`,textRendering:`optimizeLegibility`, lineHeight:1.1}} className="center-align">Contact Me;</h2>
            <div className="container" style={{display:`flex`, flexDirection:`column`, minHeight:300, justifyContent:`space-around`}}>
                <div className="row">
                    <div className="col s12 m4 l4 contactme" style={{width:250, border:`2px solid #0077b5`}} onClick={() => window.open("https://www.linkedin.com/in/huiyeonkim/", "__blank")}>
                        <span><FontAwesomeIcon icon={['fab','linkedin-in']}/></span><span>LinkedIn</span>
                    </div>
                </div>
                <div className="row center-align">
                    <div className="col s12 m4 l4 contactme1" style={{width:250, border:`2px solid #4db6ac`}} onClick={() => window.location = ("mailto:gnldus59112@gmail.com")}>
                        <span><FontAwesomeIcon icon={['fas','envelope']}/></span><span>Email Me</span>
                    </div>
                </div>
            </div>
            <div className="container" style={{position:`absolute`, bottom:0, right:0}}>
                <div className="row" style={{height: `100%`,display:`flex`, flexDirection:`column`, justifyContent:`center`, alignItems:`center`}}>
                    <LandingIcons black={true}/>
                    <span style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, fontSize:12, paddingLeft:30}}>Copyright Huiyeon Kim - 2019</span>
                </div>
            </div>
            <div className="container" style={{position:`absolute`, bottom:0, left:0}}>
                <div className="row" style={{height: `100%`}}>
                </div>
            </div>
        </section>
    );
}

export default ContactMe