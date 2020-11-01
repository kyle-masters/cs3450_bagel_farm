import React from 'react';

import classes from './Button.module.css'

const button = props => (
<button
    onClick={props.clicked}
    style={{backgroundColor: props.backgroundColor, 
            width: props.width,
            height: props.height,
            fontSize: props.fontSize,
            top: props.top,
            bottom: props.bottom,
            left: props.left,
            right: props.right,
            marginTop: props.marginTop,
            marginBottom: props.marginBottom,
            position: props.position}}
    className={[classes.Button, classes[props.btnType]].join(' ')}
    disabled={props.disabled}>{props.children}</button>
);

export default button;