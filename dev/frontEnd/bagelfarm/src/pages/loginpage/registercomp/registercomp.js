import React from 'react'

import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import classes from './registercomp.module.css'

const registerForm = (props) => {
    const formElementsArray = []
    for (let key in props.formElements) {
        formElementsArray.push({
            id: key,
            config: props.formElements[key]
        })
    }

    return (
        <div className={classes.Register}>
            <form className={classes.Form} onSubmit={props.submitHandler}>
               {formElementsArray.map(formElement => (
                   <Input   
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => props.changed(event, formElement.id)}
                        label={formElement.config.label}
                    />
               ))}
            </form>
            {props.registerError ? <h3 className={classes.Error}>ERROR: {props.registerError}</h3>: <></>}
            <Button
                height={'50px'}
                width={'30%'}
                left={'35%'}
                clicked={props.submit}
                btnType={'Submit'}
                disabled={false}>Create Account</Button>
        </div>
    )
}

export default registerForm;