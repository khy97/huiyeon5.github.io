import React from "react"
import Icon from '@material-ui/core/Icon';
import { useSpring, animated } from 'react-spring'

export default function HeaderAnimate() {
    const props = useSpring({ 
        to:[{opacity:1, marginTop:0}], 
        from: { opacity: 0,marginTop:-100 },
        config: {
            friction:18
        },
        delay:500
    })
    return (
        <header id="header" style={{position:`absolute`, width:`calc(100vw - (100vw - 100%))`, top:0, zIndex:1000000000,overflowY:`hidden`}}>
            <nav style={{boxShadow:`none`, background:`transparent`, transition:`all 0.2s ease`}} id="navbar">
                <animated.div style={props}>
                    <div className="nav-wrapper container">
                        <a href="javascript:void(0)" onClick={() => {
                            document.getElementById("header").scrollIntoView({
                                behavior:'smooth'
                            })
                            
                        }} className="brand-logo headerChange" style={{fontFamily:`"Arial"`,fontStyle:`italic`, color:`white`, transition:`all 0.2s ease`, fontSize:25}}>Huiyeon Kim;</a>
                        <a href="javascript:void(0)" onClick={() => {
                            document.getElementById("header").scrollIntoView({
                                behavior:'smooth'
                            })
                            
                        }} className="sidenav-trigger valign-wrapper" data-target="mobile-menu">
                            <Icon style={{ fontSize: 30, color:`white` }} className="vertical-align headerChange">menu</Icon>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a  className="sidenav-close" href="javascript:void(0)" onClick={() => {
                                document.getElementById("header").scrollIntoView({
                                    behavior:'smooth'
                                })
                                
                            }} style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, color:`white`, transition:`all 0.2s ease`}} className="headerChange">Home</a></li>
                            <li><a  className="sidenav-close" href="javascript:void(0)" onClick={() => {
                                document.getElementById("about").scrollIntoView({
                                    behavior:'smooth'
                                })
                                
                            }} style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, color:`white`, transition:`all 0.2s ease`}} className="headerChange">About</a></li>
                            <li><a  className="sidenav-close" href="javascript:void(0)" onClick={() => {
                                document.getElementById("contact").scrollIntoView({
                                    behavior:'smooth'
                                })
                                
                            }} style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, color:`white`, transition:`all 0.2s ease`}} className="headerChange">Contact</a></li>
                        </ul>
                        <ul className="sidenav light-blue lighten-5" id="mobile-menu">
                            <li><a  className="sidenav-close" href="javascript:void(0)" onClick={() => {
                                document.getElementById("header").scrollIntoView({
                                    behavior:'smooth'
                                })
                                
                            }} style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`}}>Home</a></li>
                            <li><a className="sidenav-close"  href="javascript:void(0)" onClick={() => {
                                document.getElementById("about").scrollIntoView({
                                    behavior:'smooth'
                                })
                                
                            }} style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`}}>About</a></li>
                            <li><a  className="sidenav-close" href="javascript:void(0)" onClick={() => {
                                document.getElementById("contact").scrollIntoView({
                                    behavior:'smooth'
                                })
                                
                            }} style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`}}>Contact</a></li>
                        </ul>
                    </div>
                </animated.div>
            </nav>
        </header>
    )
}
