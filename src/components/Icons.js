import React from 'react';

import { IconContainer } from "../styles/panel.styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core"

const Icon = (props) => {
    library.add(props.icon)
    return (
        <IconContainer id={props.id} click={props.click} color={props.color}>
            <FontAwesomeIcon icon={props.icon} style={{ fontSize: props.size, cursor: props.click ? 'pointer' : 'auto', color: props.colors }} onClick={() => {
                window.open(props.link, "_blank")
            }} />
            <span style={{ marginLeft: 5 }}>{props.text}</span>
        </IconContainer>
    )
}

export default Icon
