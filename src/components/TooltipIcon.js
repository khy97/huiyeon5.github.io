import React, { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import Icon from './Icons';

const TooltipIcon = ({id, place, overlay, icon, size, click, link, text}) => {
    useEffect(() => {
        ReactTooltip.rebuild()
    }, [])

    return( 
        <>
            <ReactTooltip place={place} effect="solid" id={id}>
                <span>{overlay}</span>
            </ReactTooltip>
            <Icon id={id} icon={icon} size={size} click={click} link={link} text={text}/>
        </>
    )
}
export default TooltipIcon
