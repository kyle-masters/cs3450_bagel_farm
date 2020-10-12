import React from 'react'

import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import classes from './logincomp.module.css'

const loginForm = (props) => {
    const formElementsArray = []
    for (let key in props.formElements) {
        formElementsArray.push({
            id: key,
            config: props.formElements[key]
        })
    }

    return (
        <div className={classes.Login}>
            <form onSubmit={props.submitHandler}>
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
            <Button
                clicked={props.submit}
                btnType={'Submit'}
                disabled={false}>Login</Button>
        </div>
    )
}

export default loginForm;