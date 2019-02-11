import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faReadme } from '@fortawesome/free-brands-svg-icons'
import { useSpring, animated } from 'react-spring'

library.add(faGithub,faLinkedinIn,faReadme);

const LandingIcons = ({black}) => {
    const props = useSpring({ 
        to:[{opacity:1, marginBottom:0}], 
        from: { opacity: 0,marginBottom:-100 },
        config: {
            friction:18
        },
        delay:500
    })
    if(black) {
        return (
            <animated.div style={{...props, height: `100%`, display:`flex`, justifyContent:`space-around`, alignItems:`center`,overflowY:`hidden`}} className="col s12 l5 right" >
                <FontAwesomeIcon icon={['fab', 'github']} style={{color:`#192bc2`, fontSize:30}} className="landingIcon" onClick={() => {
                    window.open('https://github.com/huiyeon5', "_blank")
                }}/>
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} style={{color:`#192bc2`, fontSize:30}} className="landingIcon" onClick={() => {
                    window.open('https://www.linkedin.com/in/huiyeonkim/', "_blank")
                }}/>
                <FontAwesomeIcon icon={['fab', 'readme']} style={{color:`#192bc2`, fontSize:30}} className="landingIcon" onClick={() => {
                    window.open('https://learnwars.com/',"__blank")
                }}/>
            </animated.div>
        )
    } else {
        return (
            <animated.div style={{...props, height: `100%`, display:`flex`, justifyContent:`space-around`, alignItems:`center`}} className="col s12 l5 right" >
                <FontAwesomeIcon icon={['fab', 'github']} style={{color:`white`, fontSize:30}} className="landingIcon" onClick={() => {
                    window.open('https://github.com/huiyeon5', "_blank")
                }}/>
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} style={{color:`white`, fontSize:30}} className="landingIcon" onClick={() => {
                    window.open('https://www.linkedin.com/in/huiyeonkim/', "_blank")
                }}/>
                <FontAwesomeIcon icon={['fab', 'readme']} style={{color:`white`, fontSize:30}} className="landingIcon" onClick={() => {
                    window.open('https://learnwars.com/',"__blank")
                }}/>
            </animated.div>
        )
    }
}

export default LandingIcons;