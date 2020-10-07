import React from 'react';

import classes from './Button.module.css'

const button = props => (
<button
    onClick={props.clicked}
    style={{backgroundColor: props.backgroundColor}}
    className={[classes.Button, classes[props.btnType]].join(' ')}
    disabled={props.disabled}>{props.children}</button>
);

export default button;