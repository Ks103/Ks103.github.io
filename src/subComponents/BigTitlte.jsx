import React from 'react'
import styled from 'styled-components'


const Text = styled.h1`
position: ${props => props.position || 'fixed'};
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
color: ${props =>
    `rgba(${props.theme.textRgba}, ${props.opacity || 0.05})`};
font-size: calc(5rem + 5vw);
z-index:0;

`


const BigTitlte = (props) => {
    return (
        <Text position={props.position}  top={props.top}  left={props.left}  right={props.right} opacity={props.opacity}>
            {props.text}
        </Text>
    )
}

export default BigTitlte
