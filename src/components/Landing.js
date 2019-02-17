import React from  'react'
import LandingIcons from './LandingIcons';
import { useSpring, animated } from 'react-spring'
import './Landing.css'
// import Img from 'gatsby-image'

export default function Landing({imageMap}) {
    const props = useSpring({ 
        to:[{opacity:1, marginTop:0}], 
        from: { opacity: 0, marginTop:-50 },
        config: {
            friction:18,
        },
        delay:350
    })
    return (
        <section style={{height:`100vh`, width:`calc(100vw - (100vw - 100%))`,  position:`relative`, overflowY:`hidden`}}>
            {/* <Img fluid={imageMap['landing.jpg']} style={{position:`absolute`, width:`100%`, height:`100%`}}/> */}
            <div style={{position:`absolute`, background:`linear-gradient(90deg, rgba(20,136,204,0.9), rgba(43,50,178,0.9))`, width:`100%`, height:`100%`}}>
                <animated.div style={{...props, display:`flex`, flexDirection:`column`, justifyContent:`center`, height:`100%`, position:`relative`}}>
                    <div style={{position:`relative`, display:`flex`, flexDirection:`column`, justifyContent:`center`, height:`100%`}} className="container">
                        <h1 style={{color:`white`, fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, wordWrap:`normal`, margin:0, padding:0, marginBottom:`1.45rem`, fontWeight:`bold`, textRendering:`optimizeLegibility`, fontSize:`2.25rem`, lineHeight:1.1}}>Huiyeon Kim ; Developer, Tech Enthusiast and a Writer ;</h1>
                        <h2 style={{color:`#53dd6c`, fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, fontWeight:400, margin:0,padding:0, marginBottom:`1.45rem`,textRendering:`optimizeLegibility`, fontSize:`1.62671rem`, lineHeight:1.1}}>Focusing on <b>Software Development</b> ; Scroll down and get to know me better;</h2>
                        <div className="getintouch" onClick={() => document.getElementById("contact").scrollIntoView({
                            behavior:`smooth`
                        })}>Get in Touch</div>
                    </div>
                </animated.div>
            </div>
            <div className="container" style={{position:`absolute`, bottom:0, right:0}}>
                <div className="row" style={{height: `100%`}}>
                    <LandingIcons />
                </div>
            </div>
            {/* <FontAwesomeIcon icon={['fas', 'code']} style={{position:`absolute`, fontSize:50, color:`rgba(220,220,220, 0.5)`, top:`70%`, left:`55%`, }}/> */}
        </section>
    )

}
