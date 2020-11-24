import React from 'react'

import LoginForm from '../logincomp/logincomp'
import RegisterForm from '../registercomp/registercomp'
import Toggler from '../toggler/toggler'

import classes from './togglecomponent.module.css'

const toggleComponent = (props) => {
    var toggleComp = 
        <div className={classes.ToggleComp}>
            <Toggler login={props.login} signin={props.signin} register={props.register}/>
            {props.login ? <LoginForm 
                                changed={props.changedLogin}
                                formElements={props.formElementsLogin}
                                submit={props.loginClicked}
                                loginError={props.loginError}/>
                            : 
                            <RegisterForm 
                                changed={props.changedRegister}
                                formElements={props.formElementsRegister}
                                submit={props.createAccountClicked}
                                registerError={props.registerError}/>}
        </div>

    return toggleComp
}

export default toggleComponent;