import React from 'react'

import LoginForm from '../logincomp/logincomp'
import RegisterForm from '../registercomp/registercomp'

import classes from './togglecomponent.module.css'

const toggleComponent = (props) => {
    if (props.login) {
        return (
            <div className={classes.ToggleComp}>
                <LoginForm formElements={props.formElementsLogin}/>
            </div>
        )
    } else {
        return (
            <div>
                <RegisterForm formElements={props.formElementsRegister}/>
            </div>
        )
    }
}

export default toggleComponent;